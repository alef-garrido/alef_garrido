'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import QuizForm from '../components/dinami_co/QuizForm';
import { useQuiz } from '../_context/QuizContext';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';

const Quiz = () => {
  const { isEmailSubmitted } = useQuiz();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  
  // Redirect if email hasn't been submitted
  useEffect(() => {
    // Short timeout to ensure smooth transition
    const timer = setTimeout(() => {
      if (!isEmailSubmitted) {
        toast.error('Por favor ingresa tu correo electrónico primero', {
          description: 'Necesitamos tu correo para enviar los resultados',
          duration: 4000,
        });
        router.push('/');
      } else {
        setIsLoading(false);
      }
    }, 500);
    
    return () => clearTimeout(timer);
  }, [isEmailSubmitted, router]);
  
  // Before confirmation dialog when user tries to leave the page
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      const message = '¿Estás seguro que deseas salir? Perderás tu progreso.';
      e.returnValue = message;
      return message;
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="glassmorphism p-8 rounded-xl">
          <Loader2 className="h-12 w-12 animate-spin text-quiz-accent mb-4" />
          <p className="text-quiz-subtle">Cargando cuestionario...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen">
      <QuizForm />
    </div>
  );
};

export default Quiz;