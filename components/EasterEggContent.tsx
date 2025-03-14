import React from 'react';

const EasterEggContent: React.FC = () => {
  return (
    <div style={{
      color: '#00ff00',
      fontFamily: 'monospace',
      textAlign: 'center',
      backgroundColor: '#000',
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1 style={{ fontSize: '3rem', textShadow: '0 0 10px #00ff00' }}>
        SECRET FOUND
      </h1>
      <div style={{ fontSize: '1.5rem', maxWidth: '600px', margin: '0 auto' }}>
        <p>You've discovered the hidden realm of The Fool's Tattered Notebook.</p>
        <p>All secrets will be revealed in time...</p>
        <pre style={{ textAlign: 'left' }}>
{`
  _____                   _                 
 |_   _|                 | |                
   | |  _ __   ___ _ __ | |_ _   _ _ __ ___ 
   | | | '_ \\ / _ \\ '_ \\| __| | | | '_ \` _ \\
  _| |_| | | |  __/ |_) | |_| |_| | | | | | |
 |_____|_| |_|\\___| .__/ \\__|\\__,_|_| |_| |_|
                  | |                       
                  |_|                       
`}
        </pre>
      </div>
    </div>
  );
};

export default EasterEggContent;