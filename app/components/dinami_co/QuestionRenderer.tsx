import React from 'react';
import { TextQuestion, ChoiceQuestion, OtherChoiceQuestion } from './QuestionTypes';
import { QuizQuestion } from '../../types/quiz';

interface QuestionRendererProps {
  question: QuizQuestion;
  currentAnswer: string;
  currentOtherAnswer: string;
  otherValues: Record<string, string>;
  setOtherValues: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  handleAnswer: (questionId: string, answer: string, otherAnswer?: string) => void;
  attemptedNext: boolean;
  validationError: string | null;
  handleKeyDown: (event: React.KeyboardEvent) => void;
  triggerAutoNext: () => void;
}

const QuestionRenderer: React.FC<QuestionRendererProps> = ({
  question,
  currentAnswer,
  currentOtherAnswer,
  otherValues,
  setOtherValues,
  handleAnswer,
  attemptedNext,
  validationError,
  handleKeyDown,
  triggerAutoNext
}) => {
  switch (question.type) {
    case 'text':
      return (
        <TextQuestion
          question={question.question}
          description={question.description}
          onAnswer={(answer) => handleAnswer(question.id, answer)}
          value={currentAnswer}
          isRequired={question.isRequired}
          error={validationError || false}
          onKeyDown={handleKeyDown}
        />
      );
    
    case 'choice':
      return (
        <ChoiceQuestion
          question={question.question}
          description={question.description}
          choices={question.choices || []}
          onAnswer={(answer) => {
            handleAnswer(question.id, answer);
            triggerAutoNext();
          }}
          value={currentAnswer}
          isRequired={question.isRequired}
          error={attemptedNext && validationError ? validationError : undefined}
        />
      );
    
    case 'other-choice':
      return (
        <OtherChoiceQuestion
          question={question.question}
          description={question.description}
          choices={question.choices || []}
          onAnswer={(answer) => {
            handleAnswer(question.id, answer, answer === 'other' ? otherValues[question.id] || '' : '');
            triggerAutoNext();
          }}
          value={currentAnswer}
          isRequired={question.isRequired}
          otherValue={otherValues[question.id] || currentOtherAnswer}
          onOtherChange={(value) => {
            setOtherValues(prev => ({ ...prev, [question.id]: value }));
            if (currentAnswer === 'other') {
              handleAnswer(question.id, 'other', value);
            }
          }}
          error={attemptedNext && validationError ? validationError : undefined}
          onKeyDown={handleKeyDown}
        />
      );
    
    default:
      return null;
  }
};

export default QuestionRenderer;