'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ResultsComponent from '../components/dinami_co/Results';
import MixInfoDialog from '../components/dinami_co/MixInfoDialog';
import { useQuiz } from '../_context/QuizContext';
import { calculateProfileType } from '../lib/utils/quizUtils';

const Results = () => {
  const { isEmailSubmitted, answers, email } = useQuiz();
  const router = useRouter();
  const [showDialog, setShowDialog] = useState(false);

  // Get profile type using utility function
  const getProfileType = () => calculateProfileType(answers);

  // Redirect if email hasn't been submitted or no answers
  useEffect(() => {
    if (!isEmailSubmitted || Object.keys(answers).length === 0) {
      router.push('/');
    } else {
      // Show popup dialog after 2 seconds
      const timer = setTimeout(() => {
        setShowDialog(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isEmailSubmitted, answers, router]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-quiz-secondary/30">
      {/* Add logo at top */}
      <div className="w-full flex justify-center pt-8">
        <img 
          src="/lovable-uploads/a43a4d6f-abe7-453c-a09b-256d45238327.png" 
          alt="Nomad Proxy Logo" 
          className="h-12 md:h-16" 
        />
      </div>
      <ResultsComponent />
      <MixInfoDialog 
        isOpen={showDialog}
        onClose={() => setShowDialog(false)}
        email={email}
        profileType={getProfileType()}
      />
    </div>
  );
};

export default Results;