import React from 'react';
import { useQuiz } from '../../_context/QuizContext';
import { calculateProfileType } from '../../lib/utils/quizUtils';

const ResultsComponent: React.FC = () => {
  const { answers, email } = useQuiz();
  const profileType = calculateProfileType(answers);

  return (
    <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-8 mt-8 text-center">
      <h2 className="text-3xl font-bold mb-4 text-quiz-accent">¡Gracias por completar el test!</h2>
      <p className="text-lg mb-2">Tu perfil ECOM es:</p>
      <div className="text-4xl font-extrabold text-quiz-primary mb-4">{profileType}</div>
      <p className="text-quiz-subtle mb-4">Revisa tu correo <span className="font-semibold">{email}</span> para recibir estrategias personalizadas y próximos pasos.</p>
      <p className="text-quiz-subtle">¿Quieres conocer más sobre tu mix? Elige una opción abajo para recibir información personalizada.</p>
    </div>
  );
};

export default ResultsComponent;
