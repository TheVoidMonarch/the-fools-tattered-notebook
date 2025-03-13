
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import InkSplatter from './InkSplatter';

interface NotePageProps {
  title: string;
  date?: string;
  children: React.ReactNode;
  variant?: 'main' | 'secondary';
  inkSplatters?: number;
}

const NotePage: React.FC<NotePageProps> = ({ 
  title, 
  date, 
  children, 
  variant = 'main',
  inkSplatters = 2
}) => {
  const pageRef = useRef<HTMLDivElement>(null);
  
  // Place random ink splatters
  useEffect(() => {
    if (pageRef.current && inkSplatters > 0) {
      const page = pageRef.current;
      const pageWidth = page.offsetWidth;
      const pageHeight = page.offsetHeight;
      
      // Clear existing splatters
      const existingSplatters = page.querySelectorAll('.ink-splatter');
      existingSplatters.forEach((splatter) => {
        if (splatter.parentNode === page) {
          page.removeChild(splatter);
        }
      });
      
      // Add new splatters
      for (let i = 0; i < inkSplatters; i++) {
        const splatter = document.createElement('div');
        const variant = Math.floor(Math.random() * 3) + 1 as 1 | 2 | 3;
        
        splatter.className = `ink-splatter ink-splatter-${variant}`;
        
        // Random position
        const left = Math.random() * (pageWidth - 100);
        const top = Math.random() * (pageHeight - 100);
        
        splatter.style.left = `${left}px`;
        splatter.style.top = `${top}px`;
        splatter.style.transform = `rotate(${Math.random() * 360}deg)`;
        splatter.style.opacity = '0';
        
        page.appendChild(splatter);
        
        // Animate with delay
        setTimeout(() => {
          splatter.classList.add('animate-ink-expand');
        }, 100 + i * 200);
      }
    }
  }, [inkSplatters]);
  
  const isMain = variant === 'main';
  
  return (
    <motion.div
      ref={pageRef}
      className={`notebook-page relative ${isMain ? 'mt-8 mb-12' : 'my-8'}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        transform: `rotate(${isMain ? 0 : Math.random() * 2 - 1}deg)`
      }}
    >
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <BookOpen size={20} className="text-arcane" />
          <h2 className={`${isMain ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'} font-fell font-bold text-ink tracking-tight leading-tight`}>
            {title}
          </h2>
        </div>
        
        {date && (
          <p className="text-sm font-patrick text-ink-faded mb-4 italic">
            {date}
          </p>
        )}
        
        <div className="relative z-10 prose prose-slate max-w-none">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default NotePage;
