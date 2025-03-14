
export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
};

export type CyberSecurityNote = {
  id: string;
  title: string;
  date: string;
  category: string;
  content: string;
  tags: string[];
  questions?: QuizQuestion[];
};
