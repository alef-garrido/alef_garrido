'use client';
import React, { createContext, useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from "../_integrations/supabase/client";
import { toast } from "sonner";
import { quizQuestions } from "../_data/quizQuestions";
import { calculateProfileType } from "../lib/utils/quizUtils";
import { QuizContextType, QuizAnswers } from "../types/quiz";

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [email, setEmail] = useState('');
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Submit email and start quiz
  const submitEmail = () => {
    if (email && email.includes('@')) {
      setIsEmailSubmitted(true);
      router.push('/quiz');
    }
  };

  // Handle answering a question
  const handleAnswer = (questionId: string, answer: string, otherAnswer?: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: {
        answer,
        ...(otherAnswer ? { otherAnswer } : {})
      }
    }));
  };

  // Navigate to next question
  const nextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      submitQuiz();
    }
  };

  // Navigate to previous question
  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  // Submit the quiz
  const submitQuiz = async () => {
    setIsSubmitting(true);
    
    try {
      // Calculate profile type
      const profileType = calculateProfileType(answers);
      
      // Save to Supabase
      const { error } = await supabase
        .from('quiz_submissions')
        .insert({
          user_email: email,
          answers: answers,
          profile_type: profileType
        });
      
      if (error) {
        console.error('Error saving quiz submission:', error);
        toast.error('Ha ocurrido un error al guardar tus respuestas. Por favor, intenta de nuevo.');
        setIsSubmitting(false);
        return;
      }
      
      // Navigate to results
      console.log('Quiz answers:', answers);
      console.log('User email:', email);
      console.log('Profile type:', profileType);
      
      setIsSubmitting(false);
      router.push('/results');
    } catch (error) {
      console.error('Error in quiz submission:', error);
      toast.error('Ha ocurrido un error. Por favor, intenta de nuevo.');
      setIsSubmitting(false);
    }
  };

  // Calculate progress
  const currentProgress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

  const value = {
    currentQuestionIndex,
    questions: quizQuestions,
    answers,
    email,
    setEmail,
    isEmailSubmitted,
    submitEmail,
    handleAnswer,
    nextQuestion,
    prevQuestion,
    submitQuiz,
    currentProgress,
    isSubmitting
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};