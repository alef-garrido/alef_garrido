'use client';

import { useEffect } from 'react';
import { useLoading } from '@/app/_context/LoadingContext';
import Image from 'next/image';

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
      <div className="flex flex-col items-center gap-4 p-8 rounded-xl shadow-2xl bg-white dark:bg-neutral-900">
        <Image 
          src="/MD_Logo_861x163.png" 
          alt="MD Logo" 
          width={861}
          height={163}
          className="w-32 h-auto object-contain mb-4"
        />
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-red-500 rounded-full"></div>
          <div className="w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
          <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
