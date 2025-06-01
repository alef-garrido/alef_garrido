
import React from 'react';
import { cn } from '../../lib/utils/utils';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  currentStep, 
  totalSteps, 
  className 
}) => {
  const progress = Math.round((currentStep / totalSteps) * 100);
  
  return (
    <div className={cn('w-full', className)}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-medium text-quiz-subtle">
          Pregunta {currentStep} de {totalSteps}
        </span>
        <span className="text-xs font-medium text-quiz-subtle">
          {progress}%
        </span>
      </div>
      <div className="w-full h-1 bg-quiz-border rounded-full overflow-hidden">
        <div 
          className="h-full bg-quiz-accent transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;