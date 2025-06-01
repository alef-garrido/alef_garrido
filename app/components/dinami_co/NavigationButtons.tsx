
import React from 'react';
import { ArrowLeft, ArrowRight, Loader2 } from 'lucide-react';

interface NavigationButtonsProps {
  onPrev: () => void;
  onNext: () => void;
  isFirstQuestion: boolean;
  isLastQuestion: boolean;
  isSubmitting: boolean;
  canProceed: boolean;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  onPrev,
  onNext,
  isFirstQuestion,
  isLastQuestion,
  isSubmitting,
  canProceed
}) => {
  return (
    <div className="flex justify-between mt-10">
      <button
        onClick={onPrev}
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-quiz-subtle hover:text-quiz-primary transition-colors ${
          isFirstQuestion ? 'invisible' : ''
        }`}
        disabled={isSubmitting}
        aria-label="Pregunta anterior"
      >
        <ArrowLeft size={16} />
        Anterior
      </button>
      
      <button
        onClick={onNext}
        disabled={isSubmitting}
        className={`quiz-button inline-flex items-center gap-2 ${!canProceed ? 'opacity-70 cursor-not-allowed' : ''}`}
        aria-label={isLastQuestion ? "Finalizar cuestionario" : "Siguiente pregunta"}
      >
        {isSubmitting && isLastQuestion ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            {isLastQuestion ? 'Finalizar' : 'Siguiente'}
            <ArrowRight size={16} />
          </>
        )}
      </button>
    </div>
  );
};

export default NavigationButtons;