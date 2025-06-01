import React from 'react';
import Image from 'next/image';

interface BackgroundImageProps {
  src: string;
  alt: string;
  className?: string;
  children?: React.ReactNode;
}

export default function BackgroundImage({
  src,
  alt,
  className = '',
  children
}: BackgroundImageProps) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority
        className="object-cover"
        placeholder="blur"
        blurDataURL={src} // Next.js will automatically generate a small blurred version
        sizes="100vw"
        quality={90}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
