
import React, { useState } from 'react';
import { speakText } from '../services/tts';

interface Props {
  text: string;
  lang: 'en' | 'zh';
  className?: string;
}

const SpeechButton: React.FC<Props> = ({ text, lang, className = "" }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSpeak = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isPlaying) return;
    
    setIsPlaying(true);
    await speakText(text, lang);
    setIsPlaying(false);
  };

  return (
    <button
      onClick={handleSpeak}
      className={`inline-flex items-center justify-center w-8 h-8 rounded-full transition-all hover:scale-110 active:scale-95 ${
        isPlaying 
          ? 'bg-blue-500 text-white shadow-md animate-pulse' 
          : 'bg-slate-100 text-slate-500 hover:bg-blue-100 hover:text-blue-600'
      } ${className}`}
      title={lang === 'en' ? "Listen" : "收听"}
    >
      <i className={`fa-solid ${isPlaying ? 'fa-volume-high' : 'fa-volume-low'}`}></i>
    </button>
  );
};

export default SpeechButton;
