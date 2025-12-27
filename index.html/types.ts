
export type Language = 'en' | 'zh';

export interface BilingualText {
  en: string;
  zh: string;
}

export interface Example {
  sentence: string;
  translation: string;
  explanation?: string;
}

export interface ClozeExercise {
  title: string;
  text: string; // The text with blanks like [word]
  answers: string[];
  hints?: string[]; // Hints corresponding to each blank
}

export interface WeekPlan {
  id: number;
  title: BilingualText;
  description: BilingualText;
  topics: {
    name: BilingualText;
    content: BilingualText;
    examples: Example[];
  }[];
  exercises: ClozeExercise[];
}

export interface GroundingSource {
  title: string;
  uri: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  sources?: GroundingSource[];
}
