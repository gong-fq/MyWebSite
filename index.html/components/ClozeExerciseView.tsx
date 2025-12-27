
import React, { useState } from 'react';
import { ClozeExercise, Language } from '../types';
import SpeechButton from './SpeechButton';

interface Props {
  exercise: ClozeExercise;
  lang: Language;
}

const ClozeExerciseView: React.FC<Props> = ({ exercise, lang }) => {
  const [userAnswers, setUserAnswers] = useState<string[]>(new Array(exercise.answers.length).fill(''));
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (index: number, value: string) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = value;
    setUserAnswers(newAnswers);
  };

  const checkAnswers = () => {
    setSubmitted(true);
  };

  const reset = () => {
    setUserAnswers(new Array(exercise.answers.length).fill(''));
    setSubmitted(false);
  };

  const renderText = () => {
    const parts = exercise.text.split(/\[.*?\]/);
    return (
      <div className="text-lg leading-relaxed text-slate-700">
        {parts.map((part, i) => {
          const isIncorrect = submitted && userAnswers[i]?.toLowerCase().trim() !== exercise.answers[i].toLowerCase();
          return (
            <React.Fragment key={i}>
              {part}
              {i < exercise.answers.length && (
                <span className="relative inline-block group">
                  <input
                    type="text"
                    value={userAnswers[i]}
                    onChange={(e) => handleInputChange(i, e.target.value)}
                    disabled={submitted}
                    className={`cloze-input mx-1 transition-all ${
                      submitted
                        ? userAnswers[i].toLowerCase().trim() === exercise.answers[i].toLowerCase()
                          ? 'correct !bg-green-50'
                          : 'incorrect !bg-red-50'
                        : ''
                    }`}
                    placeholder="..."
                  />
                  {isIncorrect && exercise.hints?.[i] && (
                    <div className="absolute z-10 bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-slate-800 text-white text-[10px] rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none text-center leading-tight">
                      <div className="font-bold text-blue-300 mb-1 flex items-center justify-center gap-1">
                        <i className="fa-solid fa-lightbulb"></i>
                        {lang === 'en' ? 'Grammar Tip' : '语法小贴士'}
                      </div>
                      {exercise.hints[i]}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-slate-800"></div>
                    </div>
                  )}
                </span>
              )}
            </React.Fragment>
          );
        })}
      </div>
    );
  };

  const getCleanText = () => {
    // Replace placeholders with answers for a smooth reading experience
    let text = exercise.text;
    exercise.answers.forEach(answer => {
      text = text.replace(/\[.*?\]/, answer);
    });
    return text;
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm mt-8 relative overflow-visible">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          <h4 className="text-xl font-bold text-blue-800 flex items-center gap-2">
            <i className="fa-solid fa-pen-to-square text-blue-500"></i>
            {exercise.title}
          </h4>
          <SpeechButton text={getCleanText()} lang="en" />
        </div>
        {submitted && (
          <span className={`text-sm font-bold px-3 py-1 rounded-full transition-all ${
            userAnswers.filter((ans, i) => ans.toLowerCase().trim() === exercise.answers[i].toLowerCase()).length === exercise.answers.length
            ? 'bg-green-100 text-green-700'
            : 'bg-blue-50 text-blue-600'
          }`}>
            {userAnswers.filter((ans, i) => ans.toLowerCase().trim() === exercise.answers[i].toLowerCase()).length} / {exercise.answers.length} {lang === 'en' ? 'Correct' : '正确'}
          </span>
        )}
      </div>
      
      <div className="mb-8">
        {renderText()}
      </div>

      <div className="flex gap-4 items-center">
        {!submitted ? (
          <button
            onClick={checkAnswers}
            className="px-8 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 hover:shadow-lg shadow-blue-200 transition-all font-bold text-sm"
          >
            {lang === 'en' ? 'Verify My Answers' : '核对我的答案'}
          </button>
        ) : (
          <div className="flex gap-4 items-center">
            <button
              onClick={reset}
              className="px-6 py-2 bg-slate-200 text-slate-700 rounded-xl hover:bg-slate-300 transition-all font-bold text-sm"
            >
              <i className="fa-solid fa-rotate-left mr-2"></i>
              {lang === 'en' ? 'Try Again' : '再试一次'}
            </button>
            {userAnswers.some((ans, i) => ans.toLowerCase().trim() !== exercise.answers[i].toLowerCase()) && (
              <p className="text-xs text-slate-400 font-medium animate-bounce">
                <i className="fa-solid fa-mouse-pointer mr-1"></i>
                {lang === 'en' ? 'Hover over red boxes for hints!' : '将鼠标悬停在红框上查看提示！'}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ClozeExerciseView;
