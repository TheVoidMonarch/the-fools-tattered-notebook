
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Book, Scroll, Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  
  const navItems = [
    { title: 'Tome', path: '/', icon: <Book className="h-5 w-5" /> },
    { title: 'Scrolls', path: '/notes', icon: <Scroll className="h-5 w-5" /> },
    { title: 'About the Fool', path: '/about', icon: <Sparkles className="h-5 w-5" /> }
  ];
  
  return (
    <header className="w-full py-6 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <NavLink to="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ rotate: [0, -5, 5, -5, 0] }}
              transition={{ duration: 0.5 }}
            >
              <Book size={36} className="text-arcane" />
            </motion.div>
            <h1 className="text-3xl font-fell font-bold tracking-tight text-ink">
              The Fool's Tattered Notebook
            </h1>
          </NavLink>
          
          <nav className="flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink 
                key={item.path} 
                to={item.path}
                className={({ isActive }) => 
                  `relative p-2 font-patrick text-lg transition-all duration-300 hover:text-arcane
                   ${isActive ? 'text-arcane' : 'text-ink-faded'}`
                }
                onMouseEnter={() => setHoveredItem(item.path)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="flex items-center gap-2">
                  {item.icon}
                  <span>{item.title}</span>
                </div>
                
                {hoveredItem === item.path && (
                  <motion.div 
                    className="absolute bottom-0 left-0 h-0.5 bg-arcane"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
