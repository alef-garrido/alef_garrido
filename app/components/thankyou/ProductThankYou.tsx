import React from 'react';
import { Share } from 'lucide-react';
import { useRouter } from 'next/navigation';
import FadeTransition from '../dinami_co/FadeTransition';
import DinnerInvitation from './DinnerInvitation';

const ProductThankYou: React.FC = () => {
  const router = useRouter();
  
  return (
    <FadeTransition show={true} direction="up" duration={500}>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-100 flex flex-col items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12">
          {/* Header with logo */}
          <div className="w-full flex justify-center mb-8">
            <img 
              src="/lovable-uploads/a43a4d6f-abe7-453c-a09b-256d45238327.png" 
              alt="Nomad Proxy Logo" 
              className="h-12 md:h-16" 
            />
          </div>
          
          {/* Main content */}
          <div className="text-center">
            <div className="inline-block p-4 bg-blue-500 rounded-full mb-6">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12L9 16L19 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">¡Gracias, Administrador!</h1>
            
            <div className="mb-8 text-blue-900/80">
              <p className="text-lg md:text-xl mb-4">
                Hemos recibido tu solicitud para conocer más sobre tu perfil de <span className="font-semibold">Gestión</span>.
              </p>
              <p>
                Como administrador, tu capacidad para organizar y gestionar recursos de manera eficiente es excepcional.
                Pronto recibirás información detallada sobre cómo potenciar estas cualidades en tu emprendimiento.
              </p>
            </div>
            
            {/* Personality trait card */}
            <div className="bg-gradient-to-br from-blue-100 to-teal-100 p-6 rounded-xl mb-8">
              <h3 className="font-semibold text-lg text-blue-900 mb-2">Tus características destacadas:</h3>
              <ul className="space-y-2 text-left">
                <li className="flex items-start">
                  <span className="inline-block w-4 h-4 bg-blue-500 rounded-full mt-1 mr-2"></span>
                  <span>Excelente planificación y organización de recursos</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-4 h-4 bg-blue-500 rounded-full mt-1 mr-2"></span>
                  <span>Habilidad para sistematizar procesos y optimizar flujos de trabajo</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-4 h-4 bg-blue-500 rounded-full mt-1 mr-2"></span>
                  <span>Enfoque metódico para resolver problemas complejos</span>
                </li>
              </ul>
            </div>
            
            {/* Dinner Invitation */}
            <DinnerInvitation profileType="Administrador" />
            
            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button 
                onClick={() => router.push('/')}
                className="flex items-center justify-center gap-2 bg-white text-blue-700 font-medium py-3 px-6 rounded-lg shadow hover:shadow-md transition-all border border-blue-200"
              >
                Volver al inicio
              </button>
              <button 
                onClick={() => {
                  // Share functionality could be implemented here
                  alert('Función de compartir próximamente disponible');
                }}
                className="flex items-center justify-center gap-2 bg-blue-500 text-white font-medium py-3 px-6 rounded-lg shadow hover:bg-blue-600 transition-colors"
              >
                Compartir resultados
                <Share size={16} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-6 text-sm text-blue-900/60 max-w-md text-center">
          <p>Nos pondremos en contacto contigo pronto para proporcionarte más información sobre tu perfil de administración.</p>
        </div>
      </div>
    </FadeTransition>
  );
};

export default ProductThankYou;
