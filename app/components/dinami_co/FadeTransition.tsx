
import React, { useRef, useState, useEffect } from 'react';
import { cn } from '../../lib/utils/utils';

interface FadeTransitionProps {
  show: boolean;
  children: React.ReactNode;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  delay?: number;
}

const FadeTransition: React.FC<FadeTransitionProps> = ({
  show,
  children,
  duration = 300,
  direction = 'up',
  className,
  delay = 0
}) => {
  const [shouldRender, setShouldRender] = useState(show);
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (show) setShouldRender(true);
    
    let timeoutId: NodeJS.Timeout;
    if (!show) {
      timeoutId = setTimeout(() => {
        setShouldRender(false);
      }, duration);
    }
    
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [show, duration]);

  if (!shouldRender) return null;

  // Calculate transform based on direction
  let transform = 'translateY(10px)';
  if (direction === 'down') transform = 'translateY(-10px)';
  if (direction === 'left') transform = 'translateX(10px)';
  if (direction === 'right') transform = 'translateX(-10px)';
  if (direction === 'none') transform = 'none';

  return (
    <div
      ref={nodeRef}
      className={cn(
        'transition-all will-change-transform will-change-opacity',
        className
      )}
      style={{
        opacity: show ? 1 : 0,
        transform: show ? 'none' : transform,
        transitionProperty: 'opacity, transform',
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default FadeTransition;