import React from 'react';

interface QuestionCounterProps {
  currentIndex: number;
  totalQuestions: number;
}

const QuestionCounter: React.FC<QuestionCounterProps> = ({ 
  currentIndex, 
  totalQuestions 
}) => {
  return (
    <div className="text-center mt-6 text-quiz-subtle text-sm">
      Pregunta {currentIndex + 1} de {totalQuestions}
    </div>
  );
};

export default QuestionCounter;