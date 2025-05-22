import { useState, useEffect } from 'react';
import { useQuiz } from '../_context/QuizContext';
import { toast } from 'sonner';

export const useQuizForm = () => {
  const { 
    currentQuestionIndex, 
    questions, 
    answers, 
    handleAnswer: contextHandleAnswer, 
    nextQuestion: contextNextQuestion, 
    prevQuestion: contextPrevQuestion,
    isSubmitting
  } = useQuiz();
  
  const [otherValues, setOtherValues] = useState<Record<string, string>>({});
  const [animationState, setAnimationState] = useState('enter');
  const [validationError, setValidationError] = useState<string | null>(null);
  const [attemptedNext, setAttemptedNext] = useState(false);
  const [autoNextDelay, setAutoNextDelay] = useState<NodeJS.Timeout | null>(null);
  
  const currentQuestion = questions[currentQuestionIndex];
  const currentAnswer = answers[currentQuestion.id]?.answer || '';
  const currentOtherAnswer = answers[currentQuestion.id]?.otherAnswer || '';
  
  // Clear auto-next timeout when component unmounts or question changes
  useEffect(() => {
    return () => {
      if (autoNextDelay) {
        clearTimeout(autoNextDelay);
      }
    };
  }, [currentQuestionIndex, autoNextDelay]);

  // Validate current answer
  const validateAnswer = (): boolean => {
    // Reset validation error
    setValidationError(null);
    
    if (!currentQuestion.isRequired) return true;
    
    if (!currentAnswer) {
      setValidationError('Esta pregunta requiere una respuesta');
      return false;
    }
    
    if (currentAnswer === 'other' && !currentOtherAnswer) {
      setValidationError('Por favor especifica tu respuesta');
      return false;
    }
    
    return true;
  };
  
  // Determine if we can proceed to the next question
  const canProceed = (): boolean => {
    if (!currentQuestion.isRequired) return true;
    
    if (currentAnswer) {
      if (currentAnswer === 'other' && !currentOtherAnswer) {
        return false;
      }
      return true;
    }
    
    return false;
  };
  
  // Handle answer
  const handleAnswer = (questionId: string, answer: string, otherAnswer?: string) => {
    contextHandleAnswer(questionId, answer, otherAnswer);
    setValidationError(null);
  };
  
  // Handle next question with animation
  const handleNextWithAnimation = () => {
    setAttemptedNext(true);
    
    if (!validateAnswer()) {
      // Show toast notification for validation error
      toast.error(validationError || 'Por favor, completa la respuesta antes de continuar');
      return;
    }
    
    setAnimationState('exit');
    setTimeout(() => {
      contextNextQuestion();
      setAnimationState('enter');
      setAttemptedNext(false);
    }, 300);
  };
  
  // Handle previous question with animation
  const handlePrevWithAnimation = () => {
    setAnimationState('exit');
    setTimeout(() => {
      contextPrevQuestion();
      setAnimationState('enter');
      setAttemptedNext(false);
      setValidationError(null);
    }, 300);
  };

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleNextWithAnimation();
    }
  };

  // Auto-advance after selection
  const triggerAutoNext = () => {
    // Only auto-advance for choice questions, not text or "other" selections
    if (
      (currentQuestion.type === 'choice' || 
      (currentQuestion.type === 'other-choice' && currentAnswer !== 'other')) && 
      canProceed() && 
      !isSubmitting
    ) {
      // Clear any existing timeout
      if (autoNextDelay) {
        clearTimeout(autoNextDelay);
      }
      
      // Set new timeout for auto-next
      const timeout = setTimeout(() => {
        handleNextWithAnimation();
      }, 800); // 800ms delay before auto-advancing
      
      setAutoNextDelay(timeout);
    }
  };

  return {
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
  };
};