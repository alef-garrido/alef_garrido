'use client'
import React, { useState } from 'react';
import { ArrowRight, AlertTriangle, Clock } from 'lucide-react';
import FadeTransition from '../components/dinami_co/FadeTransition';
import { useQuiz } from '../_context/QuizContext';
import { useRouter } from 'next/navigation';

const LandingPage: React.FC = () => {
  const { email, setEmail, submitEmail } = useQuiz();
  const [emailError, setEmailError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setEmailError('Por favor, ingresa tu correo electrónico');
      return;
    }
    if (!validateEmail(email)) {
      setEmailError('Por favor, ingresa un correo electrónico válido');
      return;
    }
    setEmailError(null);
    setIsLoading(true);
    submitEmail();
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (emailError) setEmailError(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="w-full max-w-4xl px-6 py-12 mx-auto">
        <div className="flex flex-col items-center gap-16">
          {/* Logo */}
          <FadeTransition show={true} delay={0}>
            <div className="w-full flex justify-center mb-4">
              <img 
                src="/lovable-uploads/a43a4d6f-abe7-453c-a09b-256d45238327.png" 
                alt="Nomad Proxy Logo" 
                className="h-16 md:h-20" 
              />
            </div>
          </FadeTransition>
          
          {/* Hero Section with Staggered Animation */}
          <div className="text-center space-y-8">
            <FadeTransition show={true} delay={100}>
              <div className="inline-block mb-4">
                <span className="quiz-chip">
                  Test de Personalidad ECOM + Bienestar Empresarial
                </span>
              </div>
            </FadeTransition>
            
            <FadeTransition show={true} delay={300}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Descubre cómo equilibrar <br className="hidden md:block" />
                <span className="text-quiz-accent">caos y control</span> en tu negocio
              </h1>
            </FadeTransition>
            
            <FadeTransition show={true} delay={500}>
              <p className="text-lg md:text-xl text-quiz-subtle max-w-2xl mx-auto">
                Para emprendedores que quieren sistemas que funcionen sin perder la esencia de su negocio.
              </p>
            </FadeTransition>
          </div>

          {/* Email Registration Form */}
          <FadeTransition show={true} delay={700}>
            <div className="w-full max-w-md">
              <div className="quiz-card">
                <h2 className="text-xl font-semibold mb-4">Comienza tu descubrimiento</h2>
                
                <div className="flex items-center gap-2 mb-4 text-sm text-quiz-subtle">
                  <Clock size={16} className="text-quiz-accent" />
                  <span>Tiempo estimado de respuesta: 3 minutos</span>
                </div>
                
                <p className="text-quiz-subtle mb-6">
                  Responde 27 preguntas para revelar tu perfil ECOM y recibe estrategias personalizadas para tu negocio.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Correo electrónico
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      placeholder="tu@correo.com"
                      required
                      className={`quiz-input ${emailError ? 'border-red-500' : ''}`}
                    />
                    {emailError && (
                      <div className="mt-2 flex items-center gap-1 text-red-500 text-sm">
                        <AlertTriangle size={14} />
                        <span>{emailError}</span>
                      </div>
                    )}
                  </div>
                  
                  <button 
                    type="submit" 
                    className="quiz-button w-full flex items-center justify-center gap-2"
                    disabled={!email || isLoading}
                  >
                    {isLoading ? (
                      <>
                        Cargando...
                        <ArrowRight size={18} className="animate-pulse" />
                      </>
                    ) : (
                      <>
                        Comenzar Quiz
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                  
                  <div className="mt-3 text-xs text-quiz-subtle">
                    <p>Al registrarte, aceptas recibir información relacionada con tu perfil de emprendedor.</p>
                    <p className="mt-1">No compartiremos tu información con terceros.</p>
                  </div>
                </form>
              </div>
            </div>
          </FadeTransition>

          {/* Features/Benefits Section */}
          <FadeTransition show={true} delay={900}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
              <div className="p-5 rounded-lg border border-quiz-border">
                <div className="w-10 h-10 rounded-full bg-quiz-accent/10 flex items-center justify-center mb-4">
                  <span className="text-quiz-accent font-semibold">1</span>
                </div>
                <h3 className="font-semibold mb-2">Responde con honestidad</h3>
                <p className="text-quiz-subtle text-sm">
                  Nadie juzga tus 15 intentos fallidos de usar un CRM.
                </p>
              </div>
              
              <div className="p-5 rounded-lg border border-quiz-border">
                <div className="w-10 h-10 rounded-full bg-quiz-accent/10 flex items-center justify-center mb-4">
                  <span className="text-quiz-accent font-semibold">2</span>
                </div>
                <h3 className="font-semibold mb-2">Recibe tu perfil ECOM</h3>
                <p className="text-quiz-subtle text-sm">
                  ¿Eres más Visionario soñador, Administrador organizado, o Operador perfeccionista?
                </p>
              </div>
              
              <div className="p-5 rounded-lg border border-quiz-border">
                <div className="w-10 h-10 rounded-full bg-quiz-accent/10 flex items-center justify-center mb-4">
                  <span className="text-quiz-accent font-semibold">3</span>
                </div>
                <h3 className="font-semibold mb-2">Equilibra tu negocio</h3>
                <p className="text-quiz-subtle text-sm">
                  Descubre sistemas que te liberen del caos manteniendo la esencia.
                </p>
              </div>
            </div>
          </FadeTransition>
        </div>
      </div>
      
      {/* Footer Quote */}
      <div className="w-full py-10 bg-quiz-secondary mt-auto">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-lg italic text-quiz-subtle">
            "Tu negocio no debería ser un reflejo de ti, sino un sistema que funcione independientemente."
          </p>
          <div className="mt-6 flex justify-center">
            <img 
              src="/lovable-uploads/a43a4d6f-abe7-453c-a09b-256d45238327.png" 
              alt="Nomad Proxy Logo" 
              className="h-8" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;