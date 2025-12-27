
import React from 'react';
import { Language } from '../types';

interface Props {
  lang: Language;
  onToggle: () => void;
}

const BilingualButton: React.FC<Props> = ({ lang, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-md"
    >
      <i className="fa-solid fa-language text-lg"></i>
      <span className="font-semibold">{lang === 'en' ? '中文' : 'English'}</span>
    </button>
  );
};

export default BilingualButton;
