
import React, { useState, useRef, useEffect } from 'react';
import { Message, Language, GroundingSource } from '../types';
import { chatWithAIStream } from '../services/gemini';
import SpeechButton from './SpeechButton';

interface Props {
  lang: Language;
}

const AIAssistant: React.FC<Props> = ({ lang }) => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'assistant', 
      content: lang === 'en' 
        ? "Hello! I am Prof. Gong's Digital Assistant. Ask me anything about English grammar, pronunciation, or vocabulary!" 
        : "你好！我是龚教授的数字助教。关于英语语法、发音或词汇，你可以问我任何问题！", 
      timestamp: new Date() 
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (text?: string) => {
    const messageContent = text || input;
    if (!messageContent.trim()) return;

    const userMessage: Message = { role: 'user', content: messageContent, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    const aiMessagePlaceholder: Message = { 
      role: 'assistant', 
      content: '', 
      timestamp: new Date(),
      sources: []
    };
    setMessages(prev => [...prev, aiMessagePlaceholder]);

    const history = messages.map(m => ({ role: m.role, content: m.content }));
    
    await chatWithAIStream(
      messageContent, 
      history,
      (updatedText) => {
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].content = updatedText;
          return newMessages;
        });
      },
      (sources) => {
        setIsTyping(false);
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].sources = sources;
          return newMessages;
        });
      }
    );
  };

  const startVoiceInput = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Your browser does not support speech recognition.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = lang === 'en' ? 'en-US' : 'zh-CN';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => setIsRecording(true);
    recognition.onend = () => setIsRecording(false);
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      handleSend(transcript);
    };

    recognition.start();
  };

  return (
    <div className="flex flex-col h-[650px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 text-white flex justify-between items-center shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm shadow-inner">
            <i className="fa-solid fa-robot text-lg animate-pulse"></i>
          </div>
          <div>
            <h3 className="font-bold text-sm">
              {lang === 'en' ? 'Digital Assistant' : '龚教授数字助教'}
            </h3>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-ping"></span>
              <span className="text-[10px] opacity-80 uppercase tracking-widest font-bold">Live Support</span>
            </div>
          </div>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-6 bg-slate-50/50 custom-scrollbar">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
            <div className={`group relative max-w-[90%] p-4 rounded-2xl shadow-sm transition-all ${
              msg.role === 'user' 
                ? 'bg-blue-600 text-white rounded-tr-none' 
                : 'bg-white text-slate-800 rounded-tl-none border border-slate-200'
            }`}>
              <div className="text-sm leading-relaxed whitespace-pre-wrap">
                {msg.content || (msg.role === 'assistant' && isTyping && idx === messages.length - 1 ? '...' : '')}
              </div>

              {msg.sources && msg.sources.length > 0 && (
                <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                  <p className="text-[10px] font-bold text-slate-400 uppercase flex items-center gap-1">
                    <i className="fa-solid fa-magnifying-glass text-[8px]"></i>
                    {lang === 'en' ? 'Reference' : '词典参考'}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {msg.sources.map((src, sIdx) => (
                      <a 
                        key={sIdx}
                        href={src.uri} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[10px] px-2 py-1 bg-slate-100 text-blue-600 rounded-md hover:bg-blue-50 transition-colors flex items-center gap-1 truncate max-w-[150px]"
                      >
                        <i className="fa-solid fa-link text-[8px]"></i>
                        {src.title}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              <div className={`mt-2 flex items-center gap-3 ${msg.role === 'user' ? 'justify-end opacity-50' : 'justify-between'}`}>
                <span className="text-[9px] font-medium uppercase tracking-tight">
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
                {msg.role === 'assistant' && msg.content && (
                  <SpeechButton 
                    text={msg.content} 
                    lang={msg.content.match(/[\u4e00-\u9fa5]/) ? 'zh' : 'en'} 
                    className="w-6 h-6 text-[10px]"
                  />
                )}
              </div>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white px-4 py-3 rounded-full shadow-sm border border-slate-100 flex gap-1.5 items-center">
              <span className="text-[10px] font-bold text-slate-400 animate-pulse">Assistant is thinking...</span>
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-blue-400 rounded-full animate-bounce"></div>
                <div className="w-1 h-1 bg-blue-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-1 h-1 bg-blue-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-white border-t border-slate-100 shadow-[0_-4px_10px_-1px_rgba(0,0,0,0.08)]">
        <div className="flex gap-3 items-center">
          <button 
            onClick={startVoiceInput}
            className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${
              isRecording 
                ? 'bg-red-500 text-white shadow-xl shadow-red-200 animate-pulse ring-4 ring-red-100 scale-110' 
                : 'bg-slate-100 text-slate-500 hover:bg-blue-50 hover:text-blue-600 active:scale-95 shadow-inner'
            }`}
            title={lang === 'en' ? "Voice Input" : "语音输入"}
          >
            <i className={`fa-solid ${isRecording ? 'fa-microphone-lines text-xl' : 'fa-microphone text-xl'}`}></i>
          </button>
          
          <div className="flex-1 relative group">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={lang === 'en' ? "Ask about grammar..." : "咨询教授助手..."}
              className="w-full pl-5 pr-12 py-4 bg-slate-100 border-none rounded-2xl focus:ring-2 focus:ring-blue-500/20 focus:bg-white outline-none text-sm transition-all shadow-inner"
            />
            <button
              onClick={() => handleSend()}
              disabled={!input.trim() || isTyping}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-30 disabled:grayscale transition-all shadow-md"
            >
              <i className="fa-solid fa-paper-plane text-sm"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
