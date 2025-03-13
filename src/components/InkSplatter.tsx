
import React, { useEffect, useRef } from 'react';

interface InkSplatterProps {
  variant?: 1 | 2 | 3;
  className?: string;
}

const InkSplatter: React.FC<InkSplatterProps> = ({ 
  variant = 1,
  className = ""
}) => {
  const splatterRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (splatterRef.current) {
      const element = splatterRef.current;
      
      // Apply random rotation
      const rotation = Math.random() * 360;
      element.style.transform = `rotate(${rotation}deg)`;
      
      // Start the animation after a small delay
      setTimeout(() => {
        element.classList.add('animate-ink-expand');
      }, 100);
    }
  }, []);
  
  return (
    <div 
      ref={splatterRef}
      className={`ink-splatter ink-splatter-${variant} ${className}`}
    />
  );
};

export default InkSplatter;
