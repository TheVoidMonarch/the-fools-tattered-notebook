import React, { useState, useEffect, useRef } from 'react';
import '../styles/EasterEggButton.css';

interface EasterEggButtonProps {
  easterEggContent: React.ReactNode;
}

const EasterEggButton: React.FC<EasterEggButtonProps> = ({ easterEggContent }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showGlitch, setShowGlitch] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const visibilityTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Function to generate random position
  const generateRandomPosition = () => {
    const maxX = window.innerWidth - 60; // button width
    const maxY = window.innerHeight - 60; // button height
    
    return {
      x: Math.floor(Math.random() * maxX),
      y: Math.floor(Math.random() * maxY)
    };
  };

  // Function to schedule next appearance
  const scheduleNextAppearance = () => {
    // Random time between 10 and 60 seconds
    const nextAppearanceTime = Math.floor(Math.random() * 50000) + 10000;
    
    timerRef.current = setTimeout(() => {
      setPosition(generateRandomPosition());
      setIsVisible(true);
      
      // Hide button after 5 seconds if not clicked
      visibilityTimerRef.current = setTimeout(() => {
        setIsVisible(false);
        scheduleNextAppearance();
      }, 5000);
    }, nextAppearanceTime);
  };

  // Handle visibility change
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Page is not visible, clear timers
        if (timerRef.current) clearTimeout(timerRef.current);
        if (visibilityTimerRef.current) clearTimeout(visibilityTimerRef.current);
      } else {
        // Page is visible again, restart the process
        scheduleNextAppearance();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Initial schedule
    scheduleNextAppearance();

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (timerRef.current) clearTimeout(timerRef.current);
      if (visibilityTimerRef.current) clearTimeout(visibilityTimerRef.current);
    };
  }, []);

  // Handle button click
  const handleClick = () => {
    // Clear the visibility timer
    if (visibilityTimerRef.current) clearTimeout(visibilityTimerRef.current);
    
    // Hide the button
    setIsVisible(false);
    
    // Show glitch effect
    setShowGlitch(true);
    
    // Hide glitch effect after 1 second
    setTimeout(() => {
      setShowGlitch(false);
      scheduleNextAppearance();
    }, 1000);
  };

  return (
    <>
      {isVisible && (
        <button
          className="easter-egg-button"
          style={{
            position: 'fixed',
            left: `${position.x}px`,
            top: `${position.y}px`,
          }}
          onClick={handleClick}
        >
          ?
        </button>
      )}
      
      {showGlitch && (
        <div className="glitch-overlay">
          <div className="glitch-content">
            {easterEggContent}
          </div>
        </div>
      )}
    </>
  );
};

export default EasterEggButton;