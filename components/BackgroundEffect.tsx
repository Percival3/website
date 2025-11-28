import React, { useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface Particle {
  id: number;
  left: number;
  animationDuration: number;
  animationDelay: number;
  size: number; // width/height
  opacity: number;
}

export const BackgroundEffect: React.FC = () => {
  const { theme } = useTheme();
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Re-generate particles when theme changes to suit the effect type
    const count = theme === 'light' ? 20 : 60; // More rain drops than petals
    
    const newParticles = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // random horizontal position %
      // Sakura falls slower (10-20s), Rain falls faster (0.5-1.5s)
      animationDuration: theme === 'light' ? 10 + Math.random() * 10 : 0.5 + Math.random() * 0.5,
      animationDelay: Math.random() * 5, 
      // Sakura is larger (10-25px), Rain is thin (1-2px width)
      size: theme === 'light' ? 10 + Math.random() * 15 : 20 + Math.random() * 20, // using size as length for rain
      opacity: theme === 'light' ? 0.8 : 0.4 + Math.random() * 0.3,
    }));
    setParticles(newParticles);
  }, [theme]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      <style>{`
        /* Sakura Animation */
        @keyframes fall-sakura {
          0% {
            opacity: 0;
            top: -10%;
            transform: translateX(0) rotate(0deg);
          }
          10% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            opacity: 0;
            top: 110%;
            transform: translateX(100px) rotate(360deg);
          }
        }

        /* Rain Animation */
        @keyframes fall-rain {
          0% {
            top: -20%;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            top: 120%;
            opacity: 0;
          }
        }

        .petal {
          position: absolute;
          background: linear-gradient(to bottom right, #ffc0cb, #ffb7b2);
          border-radius: 100% 0 100% 0;
          animation-name: fall-sakura;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          box-shadow: 0 0 5px rgba(255, 192, 203, 0.5);
        }

        .raindrop {
          position: absolute;
          background: rgba(174, 194, 224, 0.6);
          width: 1px;
          border-radius: 2px;
          animation-name: fall-rain;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
      
      {theme === 'light' && particles.map((p) => (
        <div
          key={p.id}
          className="petal"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.animationDuration}s`,
            animationDelay: `-${p.animationDelay}s`,
            opacity: p.opacity,
          }}
        />
      ))}

      {theme === 'dark' && particles.map((p) => (
        <div
          key={p.id}
          className="raindrop"
          style={{
            left: `${p.left}%`,
            height: `${p.size}px`, // Rain uses vertical length
            animationDuration: `${p.animationDuration}s`,
            animationDelay: `-${p.animationDelay}s`,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
};
