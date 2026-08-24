export type Profile = {
  name: string;
  age: string;
  grade: string;
  photo?: string;
};

export type Question = {
  id: string;
  type: 'word_problem' | 'direct' | 'arme_efetue' | 'challenge';
  text: string;
  correctAnswer: string | number;
  options?: number[] | string[];
};

export type TaskResult = {
  id: string;
  date: string;
  subject: string;
  topic: string;
  score: number;
  maxScore: number;
  questions: Question[];
  answers: Record<string, string | number>;
};

export type PortugueseQuestionType = 'multiple_choice' | 'true_false' | 'text';

export type PortugueseQuestion = {
  id: string;
  type: PortugueseQuestionType;
  prompt: string;
  options?: string[];
  correctAnswer: string;
};

export type PortugueseDay = {
  id: string;
  title: string;
  type: 'study' | 'exam' | 'recuperation';
  explanation?: string;
  questions: PortugueseQuestion[];
};

export type PortugueseUnit = {
  id: string;
  title: string;
  description: string;
  days: PortugueseDay[];
};

export type PortugueseDayProgress = {
  date: string;
  score: number;
  maxScore: number;
  status: 'completed';
};

export type PortugueseUnitProgress = {
  currentDayIndex: number;
  completedDays: Record<number, PortugueseDayProgress>;
  status: 'in_progress' | 'completed' | 'recuperation';
};

export type PortugueseProgress = {
  [grade: string]: Record<string, PortugueseUnitProgress>;
};
