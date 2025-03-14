
import React from 'react';
import { motion } from 'framer-motion';
import { Wand } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-6 px-4 mt-12 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-3">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="animate-glow"
          >
            <Wand size={24} className="text-arcane" />
          </motion.div>
          
          <p className="font-patrick text-ink-faded text-center text-sm">
            <span className="font-shadows">{currentYear}</span> • The Fool's Tattered Notebook •
            <span className="font-fell italic"> A compendium of arcane ramblings</span>
          </p>
        </div>
      </div>
      
      {/* Decorative ink splatters */}
      <div 
        className="absolute bottom-0 left-1/4 w-32 h-32 opacity-5 -mb-16 -ml-16" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath fill='%23222' d='M30,40 Q40,20 50,30 T70,40 Q90,35 80,50 T60,70 Q40,75 30,60 T30,40'/%3E%3C/svg%3E")`,
          transform: 'rotate(30deg)'
        }}
      />
      <div 
        className="absolute bottom-0 right-1/4 w-24 h-24 opacity-5 -mb-8 -mr-8" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle fill='%23222' cx='50' cy='50' r='25' /%3E%3Ccircle fill='%23222' cx='60' cy='40' r='10' /%3E%3Ccircle fill='%23222' cx='35' cy='60' r='15' /%3E%3C/svg%3E")`,
          transform: 'rotate(-20deg)'
        }}
      />
    </footer>
  );
};

export default Footer;
