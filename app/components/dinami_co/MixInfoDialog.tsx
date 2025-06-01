'use client';
import React, { useState, useEffect } from 'react';
import { Calendar, Video, MessageSquare, X, Loader2, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '../../_integrations/supabase/client';
import { useRouter } from 'next/navigation';

interface MixInfoDialogProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
  profileType: string;
}

const MixInfoDialog: React.FC<MixInfoDialogProps> = ({ isOpen, onClose, email, profileType }) => {
  const [option, setOption] = useState<'video' | 'chat' | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userName, setUserName] = useState<string>('');
  const router = useRouter();

  // Fetch user's name from the quiz_submissions table
  useEffect(() => {
    if (isOpen && email) {
      const fetchUserData = async () => {
        setIsLoading(true);
        try {
          // Get the most recent submission for this email
          const { data, error } = await supabase
            .from('quiz_submissions')
            .select('answers')
            .eq('user_email', email)
            .order('created_at', { ascending: false })
            .limit(1)
            .single();
          
          if (error) {
            console.error('Error fetching user data:', error);
            setUserName('');
          } else if (data) {
            // Extract name from answers - assuming the first question is the name
            const answers = data.answers;
            
            // Properly type check and access the name property
            if (typeof answers === 'object' && answers !== null) {
              // Cast answers to Record<string, any> to safely check for nested properties
              const answersObj = answers as Record<string, any>;
              
              if ('name' in answersObj && answersObj.name && typeof answersObj.name === 'object') {
                const nameValue = answersObj.name.answer;
                if (typeof nameValue === 'string') {
                  setUserName(nameValue);
                } else {
                  setUserName('');
                }
              } else {
                setUserName('');
              }
            } else {
              setUserName('');
            }
          }
        } catch (error) {
          console.error('Error in data fetching:', error);
          setUserName('');
        } finally {
          setIsLoading(false);
        }
      };
      
      fetchUserData();
    }
  }, [isOpen, email]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!userName.trim()) {
      toast.error('No pudimos encontrar tu nombre');
      return;
    }
    
    if (!option) {
      toast.error('Por favor, selecciona un método de contacto');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Save to Supabase
      const { error } = await supabase
        .from('user_info_requests')
        .insert({
          name: userName.trim(),
          email: email,
          profile_type: profileType,
          preferred_method: option
        });
      
      if (error) {
        console.error('Error saving info request:', error);
        toast.error('Ha ocurrido un error al enviar tu solicitud. Por favor, intenta de nuevo.');
        setIsSubmitting(false);
        return;
      }
      
      console.log('Info request saved:', {
        name: userName,
        email,
        profileType,
        preferredMethod: option
      });
      
      toast.success('¡Solicitud enviada con éxito!');
      setSubmitted(true);
      
      // After 1.5 seconds, navigate to thank you page with profile type as query param
      setTimeout(() => {
        onClose();
        router.push(`/thankyou?profileType=${encodeURIComponent(profileType)}`);
      }, 1500);
      
    } catch (error) {
      console.error('Error in form submission:', error);
      toast.error('Ha ocurrido un error. Por favor, intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full relative animate-scale-in">
        <button 
          onClick={onClose} 
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          aria-label="Cerrar"
        >
          <X size={20} />
        </button>
        
        <div className="p-6">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-8">
              <Loader2 className="h-8 w-8 animate-spin text-quiz-accent mb-4" />
              <p className="text-quiz-subtle">Cargando información...</p>
            </div>
          ) : !submitted ? (
            <>
              <h3 className="text-xl font-semibold mb-2">¿Quieres conocer más sobre tu mix?</h3>
              <p className="text-quiz-subtle mb-6">
                Descubre no solo tu rasgo principal de {profileType}, sino también cómo se combina con otros perfiles para crear tu estilo único de emprendimiento.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                {userName ? (
                  <div className="p-3 bg-quiz-secondary/20 rounded-lg">
                    <p className="text-sm text-quiz-subtle">¡Hola <span className="font-medium text-quiz-accent">{userName}</span>!</p>
                  </div>
                ) : (
                  <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-sm text-yellow-700 flex items-center gap-2">
                      <AlertCircle size={16} />
                      No pudimos encontrar tu nombre en la encuesta
                    </p>
                  </div>
                )}
                
                <div>
                  <p className="text-sm font-medium mb-2">¿Cómo prefieres recibir la información?</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                    <button
                      type="button"
                      onClick={() => setOption('video')}
                      className={`p-4 rounded-lg border text-left flex items-start gap-3 transition-colors
                        ${option === 'video' 
                          ? 'border-quiz-accent bg-quiz-accent/5' 
                          : 'border-quiz-border hover:border-quiz-accent/30'}`}
                    >
                      <Video className={option === 'video' ? 'text-quiz-accent' : 'text-quiz-subtle'} size={24} />
                      <div>
                        <p className="font-medium">Videollamada</p>
                        <p className="text-xs text-quiz-subtle mt-1">
                          Sesión de 20 minutos con un experto
                        </p>
                      </div>
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => setOption('chat')}
                      className={`p-4 rounded-lg border text-left flex items-start gap-3 transition-colors
                        ${option === 'chat' 
                          ? 'border-quiz-accent bg-quiz-accent/5' 
                          : 'border-quiz-border hover:border-quiz-accent/30'}`}
                    >
                      <MessageSquare className={option === 'chat' ? 'text-quiz-accent' : 'text-quiz-subtle'} size={24} />
                      <div>
                        <p className="font-medium">Chat</p>
                        <p className="text-xs text-quiz-subtle mt-1">
                          Conversación por mensajes
                        </p>
                      </div>
                    </button>
                  </div>
                </div>
                
                <button 
                  type="submit"
                  disabled={isSubmitting || !option}
                  className="quiz-button w-full mt-4 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin h-4 w-4 border-2 border-white border-r-transparent rounded-full mr-2" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Solicitar información
                      <Calendar size={18} />
                    </>
                  )}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-4">
              <h3 className="text-xl font-semibold mb-4">¡Gracias por tu interés!</h3>
              <p className="text-quiz-subtle">
                Hemos recibido tu solicitud y nos pondremos en contacto contigo pronto para agendar tu {option === 'video' ? 'videollamada' : 'chat'}.
              </p>
              <p className="text-quiz-primary mt-4 text-sm">
                Redireccionando a tu página personalizada...
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MixInfoDialog;
