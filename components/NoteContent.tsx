
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface NoteContentProps {
  title?: string;
  type?: 'scribble' | 'ancient' | 'personal' | 'normal';
  children: React.ReactNode;
  withSymbol?: boolean;
}

const NoteContent: React.FC<NoteContentProps> = ({ 
  title,
  type = 'normal',
  children,
  withSymbol = false
}) => {
  let className = '';
  
  switch (type) {
    case 'scribble':
      className = 'scribble';
      break;
    case 'ancient':
      className = 'ancient-text';
      break;
    case 'personal':
      className = 'personal-note';
      break;
    default:
      className = 'font-fell';
  }
  
  return (
    <motion.div 
      className={`mb-6 rotated-element ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {title && (
        <div className="flex items-center gap-2 mb-2">
          {withSymbol && (
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Star size={16} className="text-arcane" />
            </motion.div>
          )}
          <h3 className="text-lg font-bold">
            {title}
          </h3>
        </div>
      )}
      <div className="mt-1">
        {children}
      </div>
    </motion.div>
  );
};

export default NoteContent;
