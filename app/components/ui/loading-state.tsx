'use client';

import { useEffect } from 'react';
import { useLoading } from '@/app/_context/LoadingContext';

export function LoadingState() {
  const { isLoading, setIsLoading } = useLoading();

  useEffect(() => {
    // Set loading to false once all resources are loaded
    const handleLoad = () => {
      if (document.readyState === 'complete') {
        setIsLoading(false);
      }
    };

    if (document.readyState === 'complete') {
      setIsLoading(false);
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => window.removeEventListener('load', handleLoad);
  }, [setIsLoading]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 dark:bg-black/80 page-loading">
      <div className="w-3/4 max-w-lg p-8 rounded-xl shadow-2xl bg-white dark:bg-neutral-900">
        <div className="h-8 w-1/2 mb-4 rounded loading-skeleton" />
        <div className="h-4 w-full mb-2 rounded loading-skeleton" />
        <div className="h-4 w-5/6 mb-2 rounded loading-skeleton" />
        <div className="h-4 w-2/3 mb-2 rounded loading-skeleton" />
        <div className="h-4 w-1/2 rounded loading-skeleton" />
      </div>
    </div>
  );
}
