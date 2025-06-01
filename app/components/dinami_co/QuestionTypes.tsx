import React from 'react';
import { cn } from '../../lib/utils/utils';
import { Check, AlertCircle } from 'lucide-react';

// Text Input Question
interface TextQuestionProps {
  question: string;
  description?: string;
  onAnswer: (answer: string) => void;
  value: string;
  placeholder?: string;
  isRequired?: boolean;
  error?: string | boolean;
  onKeyDown?: (e: React.KeyboardEvent) => void;
}

export const TextQuestion: React.FC<TextQuestionProps> = ({
  question,
  description,
  onAnswer,
  value,
  placeholder = "Escribe tu respuesta aquí...",
  isRequired = false,
  error,
  onKeyDown
}) => {
  return (
    <div className="space-y-4 animate-fade-in">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-quiz-primary">
          {question}
          {isRequired && <span className="text-red-500 ml-1">*</span>}
        </h2>
        {description && <p className="text-quiz-subtle">{description}</p>}
      </div>
      <div className="space-y-2">
        <input
          type="text"
          value={value}
          onChange={(e) => onAnswer(e.target.value)}
          placeholder={placeholder}
          required={isRequired}
          className={cn(
            "quiz-input",
            error && "border-red-500 focus:ring-red-500"
          )}
          autoFocus
          onKeyDown={onKeyDown}
          aria-invalid={error ? "true" : "false"}
        />
        {error && (
          <div className="flex items-center gap-2 text-sm text-red-500 mt-1">
            <AlertCircle size={14} />
            <span>{typeof error === 'string' ? error : 'Este campo es obligatorio'}</span>
          </div>
        )}
      </div>
    </div>
  );
};

// Multiple Choice Question
interface Choice {
  id: string;
  label: string;
}

interface ChoiceQuestionProps {
  question: string;
  description?: string;
  choices: Choice[];
  onAnswer: (answer: string) => void;
  value: string;
  isRequired?: boolean;
  error?: string | boolean;
}

export const ChoiceQuestion: React.FC<ChoiceQuestionProps> = ({
  question,
  description,
  choices,
  onAnswer,
  value,
  isRequired = false,
  error
}) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-quiz-primary">
          {question}
          {isRequired && <span className="text-red-500 ml-1">*</span>}
        </h2>
        {description && <p className="text-quiz-subtle">{description}</p>}
      </div>
      <div className="space-y-3">
        {choices.map((choice) => (
          <div
            key={choice.id}
            onClick={() => onAnswer(choice.id)}
            className={cn(
              "quiz-option",
              value === choice.id && "quiz-option-selected",
              error && !value && "border-red-300"
            )}
            role="button"
            aria-pressed={value === choice.id}
            tabIndex={0}
          >
            <div className="flex items-center gap-3">
              <div className={cn(
                "w-5 h-5 rounded-full border flex items-center justify-center",
                value === choice.id 
                  ? "border-quiz-accent bg-quiz-accent text-white" 
                  : "border-quiz-border bg-white"
              )}>
                {value === choice.id && <Check size={12} />}
              </div>
              <span>{choice.label}</span>
            </div>
          </div>
        ))}
        {error && !value && (
          <div className="flex items-center gap-2 text-sm text-red-500 mt-1">
            <AlertCircle size={14} />
            <span>{typeof error === 'string' ? error : 'Por favor, selecciona una opción'}</span>
          </div>
        )}
      </div>
    </div>
  );
};

// Other/Custom input for multiple choice
interface OtherChoiceQuestionProps extends ChoiceQuestionProps {
  otherValue: string;
  onOtherChange: (value: string) => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
}

export const OtherChoiceQuestion: React.FC<OtherChoiceQuestionProps> = ({
  question,
  description,
  choices,
  onAnswer,
  value,
  isRequired = false,
  otherValue,
  onOtherChange,
  error,
  onKeyDown
}) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-quiz-primary">
          {question}
          {isRequired && <span className="text-red-500 ml-1">*</span>}
        </h2>
        {description && <p className="text-quiz-subtle">{description}</p>}
      </div>
      <div className="space-y-3">
        {choices.map((choice) => (
          <div
            key={choice.id}
            onClick={() => onAnswer(choice.id)}
            className={cn(
              "quiz-option",
              value === choice.id && "quiz-option-selected",
              error && !value && "border-red-300"
            )}
            role="button"
            aria-pressed={value === choice.id}
            tabIndex={0}
          >
            <div className="flex items-center gap-3">
              <div className={cn(
                "w-5 h-5 rounded-full border flex items-center justify-center",
                value === choice.id 
                  ? "border-quiz-accent bg-quiz-accent text-white" 
                  : "border-quiz-border bg-white"
              )}>
                {value === choice.id && <Check size={12} />}
              </div>
              <span>{choice.label}</span>
            </div>
          </div>
        ))}
        
        <div 
          className={cn(
            "quiz-option",
            value === "other" && "quiz-option-selected",
            error && !value && "border-red-300"
          )}
        >
          <div className="flex items-center gap-3" onClick={() => onAnswer("other")} role="button" tabIndex={0}>
            <div className={cn(
              "w-5 h-5 rounded-full border flex items-center justify-center",
              value === "other" 
                ? "border-quiz-accent bg-quiz-accent text-white" 
                : "border-quiz-border bg-white"
            )}>
              {value === "other" && <Check size={12} />}
            </div>
            <span>Otra:</span>
          </div>
          
          {value === "other" && (
            <div className="mt-3 ml-8 space-y-2">
              <input
                type="text"
                value={otherValue}
                onChange={(e) => onOtherChange(e.target.value)}
                placeholder="Especifica aquí..."
                className={cn(
                  "quiz-input",
                  error && !otherValue && "border-red-500 focus:ring-red-500"
                )}
                autoFocus
                onKeyDown={onKeyDown}
                aria-invalid={error && !otherValue ? "true" : "false"}
              />
              {error && value === "other" && !otherValue && (
                <div className="flex items-center gap-2 text-sm text-red-500">
                  <AlertCircle size={14} />
                  <span>Por favor, especifica tu respuesta</span>
                </div>
              )}
            </div>
          )}
        </div>
        
        {error && !value && (
          <div className="flex items-center gap-2 text-sm text-red-500 mt-1">
            <AlertCircle size={14} />
            <span>{typeof error === 'string' ? error : 'Por favor, selecciona una opción'}</span>
          </div>
        )}
      </div>
    </div>
  );
};