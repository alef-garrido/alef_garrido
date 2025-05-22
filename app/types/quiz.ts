
// Define the Questions data structure
export interface QuizQuestion {
  id: string;
  type: 'text' | 'choice' | 'other-choice';
  category: string;
  question: string;
  description?: string;
  choices?: { id: string; label: string }[];
  isRequired?: boolean;
  placeholder?: string;
}

// Define the answer structure
export interface QuizAnswers {
  [questionId: string]: {
    answer: string;
    otherAnswer?: string;
  };
}

export interface QuizContextType {
  currentQuestionIndex: number;
  questions: QuizQuestion[];
  answers: QuizAnswers;
  email: string;
  setEmail: (email: string) => void;
  isEmailSubmitted: boolean;
  submitEmail: () => void;
  handleAnswer: (questionId: string, answer: string, otherAnswer?: string) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  submitQuiz: () => void;
  currentProgress: number;
  isSubmitting: boolean;
}