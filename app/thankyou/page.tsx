'use client';
import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import LeadershipThankYou from '../components/thankyou/LeadershipThankYou';
import ProductThankYou from '../components/thankyou/ProductThankYou';
import OperationsThankYou from '../components/thankyou/OperationsThankYou';
import { Loader2 } from 'lucide-react';

const ThankYouContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  // Get profile type from query string
  const profileType = searchParams.get('profileType');

  useEffect(() => {
    // Redirect if no profile type found
    if (!profileType) {
      router.push('/');
      return;
    }
    // Add a small delay to show loading state
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [profileType, router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
        <div className="flex flex-col items-center">
          <Loader2 className="h-10 w-10 animate-spin text-quiz-accent mb-4" />
          <p className="text-quiz-subtle">Preparando tu página personalizada...</p>
        </div>
      </div>
    );
  }

  // Render the appropriate thank you page based on profile type
  switch (profileType) {
    case 'Visionario':
      return <LeadershipThankYou />;
    case 'Administrador':
      return <ProductThankYou />;
    case 'Operador':
      return <OperationsThankYou />;
    default:
      // Fallback to Leadership thank you as default
      return <LeadershipThankYou />;
  }
};

const ThankYou = () => {
  return (
    <React.Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
        <div className="flex flex-col items-center">
          <Loader2 className="h-10 w-10 animate-spin text-quiz-accent mb-4" />
          <p className="text-quiz-subtle">Preparando tu página personalizada...</p>
        </div>
      </div>
    }>
      <ThankYouContent />
    </React.Suspense>
  );
};

export default ThankYou;
