
import React from 'react';

// SVG Arcane Symbols as React Components
export const AlchemySymbol: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
    <line x1="12" y1="2" x2="12" y2="22" stroke="currentColor" strokeWidth="1.5" />
    <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const MoonSymbol: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

export const StarSymbol: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L14.5 9H22L16 13.5L18 21L12 17L6 21L8 13.5L2 9H9.5L12 2Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

export const ElementalSymbol: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22L2 12L12 2L22 12L12 22Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M12 2V22"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M2 12H22"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

// Component to render random arcane symbol
export const RandomArcaneSymbol: React.FC<{ className?: string }> = ({ className = "" }) => {
  const symbols = [
    <AlchemySymbol className={className} />,
    <MoonSymbol className={className} />,
    <StarSymbol className={className} />,
    <ElementalSymbol className={className} />
  ];
  
  // Randomly select a symbol (using a fixed seed for server-side rendering)
  const randomIndex = Math.floor(Math.random() * symbols.length);
  
  return (
    <span className="arcane-symbol">
      {symbols[randomIndex]}
    </span>
  );
};
