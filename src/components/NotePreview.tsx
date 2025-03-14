
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface NotePreviewProps {
  title: string;
  excerpt: string;
  date?: string;
  category?: string;
  onClick?: () => void;
}

const NotePreview: React.FC<NotePreviewProps> = ({
  title,
  excerpt,
  date,
  category,
  onClick
}) => {
  return (
    <motion.div
      whileHover={{ 
        y: -5, 
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" 
      }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className="notebook-page cursor-pointer transform rotate-0 hover:rotate-0 transition-all duration-300"
      style={{ transformOrigin: "center" }}
    >
      <div className="relative z-10">
        {category && (
          <div className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-arcane/10 text-arcane text-xs font-patrick mb-2">
            <Star className="w-3 h-3 mr-1" />
            {category}
          </div>
        )}
        
        <h3 className="text-xl font-fell font-bold text-ink mb-2">{title}</h3>
        
        {date && (
          <p className="text-sm font-patrick text-ink-faded mb-2">{date}</p>
        )}
        
        <p className="font-fell text-ink-light line-clamp-3">{excerpt}</p>
        
        <div className="mt-4 font-patrick text-arcane text-sm">
          Continue reading →
        </div>
      </div>
    </motion.div>
  );
};

export default NotePreview;
