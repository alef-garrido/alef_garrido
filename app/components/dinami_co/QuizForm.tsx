
import React from 'react';
import ProgressBar from './ProgressBar';
import FadeTransition from './FadeTransition';
import { useQuizForm } from '../../hooks/useQuizForm';
import NavigationButtons from './NavigationButtons';
import QuestionCounter from './QuestionCounter';
import QuestionRenderer from './QuestionRenderer';

const QuizForm: React.FC = () => {
  const {
    currentQuestionIndex,
    questions,
    currentQuestion,
    currentAnswer,
    currentOtherAnswer,
    otherValues,
    setOtherValues,
    animationState,
    validationError,
    attemptedNext,
    isSubmitting,
    handleAnswer,
    handleNextWithAnimation,
    handlePrevWithAnimation,
    handleKeyDown,
    canProceed,
    triggerAutoNext
  } = useQuizForm();

  return (
    <div className="py-10 px-6 max-w-3xl mx-auto">
      {/* Progress Bar */}
      <ProgressBar 
        currentStep={currentQuestionIndex + 1} 
        totalSteps={questions.length} 
        className="mb-12"
      />
      
      {/* Question Container with Animation */}
      <FadeTransition 
        show={animationState === 'enter'} 
        direction={animationState === 'enter' ? 'right' : 'left'}
        duration={300}
      >
        <div className="quiz-card">
          {/* Question Category Chip */}
          <div className="mb-6">
            <span className="quiz-chip">
              {currentQuestion.category.charAt(0).toUpperCase() + currentQuestion.category.slice(1)}
            </span>
          </div>
          
          {/* Question Content */}
          <QuestionRenderer
            question={currentQuestion}
            currentAnswer={currentAnswer}
            currentOtherAnswer={currentOtherAnswer}
            otherValues={otherValues}
            setOtherValues={setOtherValues}
            handleAnswer={handleAnswer}
            attemptedNext={attemptedNext}
            validationError={validationError}
            handleKeyDown={handleKeyDown}
            triggerAutoNext={triggerAutoNext}
          />
          
          {/* Navigation Buttons */}
          <NavigationButtons
            onPrev={handlePrevWithAnimation}
            onNext={handleNextWithAnimation}
            isFirstQuestion={currentQuestionIndex === 0}
            isLastQuestion={currentQuestionIndex === questions.length - 1}
            isSubmitting={isSubmitting}
            canProceed={canProceed()}
          />
        </div>
      </FadeTransition>
      
      {/* Question Counter */}
      <QuestionCounter
        currentIndex={currentQuestionIndex}
        totalQuestions={questions.length}
      />
    </div>
  );
};

export default QuizForm;