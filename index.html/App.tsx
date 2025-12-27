
import React, { useState } from 'react';
import { Language } from './types';
import { SYLLABUS_DATA, RESOURCE_LINKS } from './constants';
import BilingualButton from './components/BilingualButton';
import AIAssistant from './components/AIAssistant';
import ClozeExerciseView from './components/ClozeExerciseView';
import SpeechButton from './components/SpeechButton';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('zh');
  const [selectedWeek, setSelectedWeek] = useState(SYLLABUS_DATA[0]);

  const toggleLang = () => setLang(prev => (prev === 'en' ? 'zh' : 'en'));

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="bg-blue-600 p-2 rounded-xl text-white shadow-lg shadow-blue-200">
              <i className="fa-solid fa-graduation-cap text-2xl"></i>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
                {lang === 'en' ? "Prof. Gong's English Hub" : "龚凤乾教授英语课堂"}
              </h1>
              <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">
                {lang === 'en' ? "Empowering Young Learners" : "助力中小学生成长"}
              </p>
            </div>
          </div>
          <BilingualButton lang={lang} onToggle={toggleLang} />
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Sidebar: Syllabus */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-800">
                <i className="fa-solid fa-book-open text-blue-500"></i>
                {lang === 'en' ? "12-Week Syllabus" : "12周教学大纲"}
              </h2>
              <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {SYLLABUS_DATA.map((week) => (
                  <button
                    key={week.id}
                    onClick={() => setSelectedWeek(week)}
                    className={`w-full text-left p-4 rounded-xl transition-all border ${
                      selectedWeek.id === week.id
                        ? 'bg-blue-50 border-blue-200 ring-2 ring-blue-500/10'
                        : 'bg-white border-transparent hover:bg-slate-50 border-slate-100'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                        Week {week.id}
                      </span>
                      {selectedWeek.id === week.id && (
                        <i className="fa-solid fa-circle-check text-blue-500 text-sm"></i>
                      )}
                    </div>
                    <h3 className={`font-semibold text-sm ${selectedWeek.id === week.id ? 'text-blue-900' : 'text-slate-700'}`}>
                      {week.title[lang]}
                    </h3>
                  </button>
                ))}
              </div>
            </div>

            {/* AI Assistant Module - Prominent Microphone Button Inside */}
            <AIAssistant lang={lang} />
          </aside>

          {/* Main Content Area */}
          <section className="lg:col-span-8 space-y-8">
            {/* Week Content */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <div className="mb-8">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h2 className="text-3xl font-extrabold text-slate-900">
                    {selectedWeek.title[lang]}
                  </h2>
                  <SpeechButton text={selectedWeek.title[lang]} lang={lang === 'en' ? 'en' : 'zh'} />
                </div>
                <div className="flex items-start justify-between gap-4">
                  <p className="text-lg text-slate-600 flex-1 whitespace-pre-line">
                    {selectedWeek.description[lang]}
                  </p>
                  <SpeechButton text={selectedWeek.description[lang]} lang={lang === 'en' ? 'en' : 'zh'} />
                </div>
              </div>

              {/* Topics */}
              <div className="space-y-12">
                {selectedWeek.topics.map((topic, idx) => (
                  <div key={idx} className="relative pl-8 border-l-2 border-blue-100 pb-2">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-sm"></div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-slate-800">
                        {topic.name[lang]}
                      </h3>
                      <SpeechButton text={topic.name[lang]} lang={lang === 'en' ? 'en' : 'zh'} />
                    </div>
                    <div className="bg-slate-50 rounded-2xl p-6 text-slate-700 leading-relaxed mb-6 flex justify-between items-start gap-4">
                      <span className="flex-1">{topic.content[lang]}</span>
                      <SpeechButton text={topic.content[lang]} lang={lang === 'en' ? 'en' : 'zh'} />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {topic.examples.map((ex, exIdx) => (
                        <div key={exIdx} className="bg-blue-50/50 rounded-xl p-4 border border-blue-50 hover:border-blue-200 transition-colors">
                          <div className="flex justify-between items-start gap-2 mb-1">
                            <p className="font-bold text-blue-800 text-lg italic flex-1">
                              "{ex.sentence}"
                            </p>
                            <SpeechButton text={ex.sentence} lang="en" />
                          </div>
                          <div className="flex justify-between items-start gap-2 mb-2">
                            <p className="text-slate-600 text-sm flex-1">
                              {ex.translation}
                            </p>
                            <SpeechButton text={ex.translation} lang="zh" className="w-6 h-6" />
                          </div>
                          {ex.explanation && (
                            <div className="mt-2 pt-2 border-t border-blue-100 flex items-start gap-2">
                              <i className="fa-solid fa-circle-info text-blue-400 mt-1 text-xs"></i>
                              <span className="text-xs text-blue-600 italic font-medium flex-1">{ex.explanation}</span>
                              <SpeechButton text={ex.explanation} lang={lang === 'en' ? 'en' : 'zh'} className="w-5 h-5 text-[10px]" />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Exercises Section - NOW RENDERING MULTIPLE EXERCISES */}
              <div className="mt-12 space-y-8">
                <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                  <i className="fa-solid fa-vial-circle-check text-indigo-500"></i>
                  {lang === 'en' ? 'Practice Lab' : '实践演练库'}
                </h3>
                {selectedWeek.exercises.map((exercise, eIdx) => (
                  <ClozeExerciseView key={eIdx} exercise={exercise} lang={lang} />
                ))}
              </div>
            </div>

            {/* Resources & Contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-indigo-900 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden group">
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <i className="fa-solid fa-link"></i>
                  {lang === 'en' ? "Learning Resources" : "教学资源链接"}
                </h3>
                <ul className="space-y-3 relative z-10">
                  {RESOURCE_LINKS.map((link, idx) => (
                    <li key={idx}>
                      <a 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-2 text-indigo-100 hover:text-white hover:translate-x-1 transition-all"
                      >
                        <i className="fa-solid fa-arrow-up-right-from-square text-xs opacity-50"></i>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 border-t-4 border-t-orange-400">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-800">
                  <i className="fa-solid fa-user-tie text-orange-500"></i>
                  {lang === 'en' ? "Contact Professor" : "联系龚教授"}
                </h3>
                <p className="text-slate-600 mb-6 text-sm">
                  {lang === 'en' ? 
                    "Have questions about grammar or the syllabus? Reach out to Professor Gong directly." : 
                    "关于语法或教学大纲有疑问吗？请直接联系龚教授。"}
                </p>
                <div className="space-y-4">
                  <a href="mailto:gongfengqian8@gmail.com" className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl hover:bg-orange-50 transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm group-hover:text-orange-600">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Email</p>
                      <p className="text-sm font-semibold text-slate-700">gongfengqian8@gmail.com</p>
                    </div>
                  </a>
                  <a 
                    href="https://baike.baidu.com/item/%E9%BE%9A%E5%87%A4%E4%B9%BE/18875898" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm group-hover:text-blue-600">
                      <i className="fa-solid fa-address-card"></i>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Profile</p>
                      <p className="text-sm font-semibold text-slate-700">Baidu Baike Link</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Prof. Gong Fengqian's English Hub. {lang === 'en' ? "All rights reserved." : "保留所有权利。"}
          </p>
          <div className="mt-4 flex justify-center gap-6">
             <i className="fa-brands fa-github hover:text-white cursor-pointer transition-colors"></i>
             <i className="fa-brands fa-weixin hover:text-white cursor-pointer transition-colors"></i>
             <i className="fa-brands fa-linkedin hover:text-white cursor-pointer transition-colors"></i>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
