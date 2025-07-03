// src/components/EasterEggModal.tsx
import React from 'react';

export const EasterEggModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999
    }}>
      <div style={{
        background: 'white',
        padding: '2rem',
        borderRadius: '1rem',
        textAlign: 'center',
        maxWidth: '400px'
      }}>
        <h2>🐣 Easter Egg Unlocked!</h2>
        <p>You found a secret feature. 🎉</p>
        <button onClick={onClose} style={{ marginTop: '1rem' }}>Close</button>
      </div>
    </div>
  );
};
