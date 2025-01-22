import React from 'react';
import Fireworks from '@fireworks-js/react';

const SecretPage = () => {
  return (
    <div className="relative min-h-screen">
      <h1 className="text-center text-black text-4xl pt-10">🎉 Secret Page 🎉</h1>
      <h1 className="text-center text-black text-4xl pt-10">👷‍♂️ WIP 👷‍♂️</h1>
      <Fireworks 
        options={{ 
          rocketsPoint: { min: 0, max: 100 }, 
          hue: { min: 0, max: 360 }, 
          delay: { min: 15, max: 20 }, 
          speed: 2, 
          acceleration: 1.05, 
          friction: 0.95, 
          gravity: 1.5, 
          particles: 50, 
          trace: 3, 
          explosion: 5, 
          autoresize: true, 
          brightness: { min: 50, max: 80, decay: { min: 0.015, max: 0.03 }}, 
          boundaries: { x: 50, y: 50, width: window.innerWidth, height: window.innerHeight }, 
          sound: { enable: true, files: ['explosion0.mp3', 'explosion1.mp3', 'explosion2.mp3'], volume: { min: 1, max: 3 }},
        }} 
        style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}
      />
    </div>
  );
};

export default SecretPage;
