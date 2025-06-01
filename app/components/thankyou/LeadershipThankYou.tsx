import React from 'react';
import { Share } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import FadeTransition from '../dinami_co/FadeTransition';
import DinnerInvitation from './DinnerInvitation';

const LeadershipThankYou: React.FC = () => {
  const router = useRouter();
  
  return (
    <FadeTransition show={true} direction="up" duration={500}>
      <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-violet-100 flex flex-col items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12">
          {/* Header with logo */}
          <div className="w-full flex justify-center mb-8">
            <Image 
              src="/lovable-uploads/a43a4d6f-abe7-453c-a09b-256d45238327.png" 
              alt="Nomad Proxy Logo" 
              className="h-12 md:h-16" 
              width={160} height={80}
              priority
            />
          </div>
          
          {/* Main content */}
          <div className="text-center">
            <div className="inline-block p-4 bg-purple-600 rounded-full mb-6">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12L9 16L19 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-purple-800 mb-4">¡Gracias, Visionario!</h1>
            
            <div className="mb-8 text-purple-900/80">
              <p className="text-lg md:text-xl mb-4">
                Hemos recibido tu solicitud para conocer más sobre tu perfil de <span className="font-semibold">Liderazgo</span>.
              </p>
              <p>
                Como visionario, tu capacidad para innovar y liderar el cambio te distingue. 
                Pronto recibirás información detallada sobre cómo potenciar estas cualidades en tu emprendimiento.
              </p>
            </div>
            
            {/* Personality trait card */}
            <div className="bg-gradient-to-br from-purple-200 to-indigo-200 p-6 rounded-xl mb-8">
              <h3 className="font-semibold text-lg text-purple-900 mb-2">Tus características destacadas:</h3>
              <ul className="space-y-2 text-left">
                <li className="flex items-start">
                  <span className="inline-block w-4 h-4 bg-purple-600 rounded-full mt-1 mr-2"></span>
                  <span>Capacidad para visualizar oportunidades donde otros no las ven</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-4 h-4 bg-purple-600 rounded-full mt-1 mr-2"></span>
                  <span>Pensamiento innovador y orientado al futuro</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-4 h-4 bg-purple-600 rounded-full mt-1 mr-2"></span>
                  <span>Habilidad para inspirar y movilizar equipos</span>
                </li>
              </ul>
            </div>
            
            {/* Dinner Invitation */}
            <DinnerInvitation profileType="Visionario" />
            
            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button 
                onClick={() => router.push('/')}
                className="flex items-center justify-center gap-2 bg-white text-purple-700 font-medium py-3 px-6 rounded-lg shadow hover:shadow-md transition-all border border-purple-200"
              >
                Volver al inicio
              </button>
              <button 
                onClick={() => {
                  // Share functionality could be implemented here
                  alert('Función de compartir próximamente disponible');
                }}
                className="flex items-center justify-center gap-2 bg-purple-600 text-white font-medium py-3 px-6 rounded-lg shadow hover:bg-purple-700 transition-colors"
              >
                Compartir resultados
                <Share size={16} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-6 text-sm text-purple-900/60 max-w-md text-center">
          <p>Nos pondremos en contacto contigo pronto para proporcionarte más información sobre tu perfil de liderazgo.</p>
        </div>
      </div>
    </FadeTransition>
  );
};

export default LeadershipThankYou;
