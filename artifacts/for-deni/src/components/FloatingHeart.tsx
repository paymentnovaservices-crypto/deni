import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function FloatingHeart() {
  const [hearts, setHearts] = useState<{ id: number; x: number; scale: number }[]>([]);

  useEffect(() => {
    const spawnHeart = () => {
      const newHeart = {
        id: Date.now(),
        x: Math.random() * 80 + 10, // 10% to 90% of screen width
        scale: Math.random() * 0.5 + 0.5, // 0.5 to 1.0 scale
      };

      setHearts(prev => [...prev, newHeart]);

      // Remove heart after animation completes
      setTimeout(() => {
        setHearts(prev => prev.filter(h => h.id !== newHeart.id));
      }, 10000);
    };

    const interval = setInterval(spawnHeart, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      <AnimatePresence>
        {hearts.map(heart => (
          <motion.div
            key={heart.id}
            initial={{ 
              opacity: 0, 
              y: '100vh', 
              x: `${heart.x}vw`,
              scale: heart.scale 
            }}
            animate={{ 
              opacity: [0, 0.8, 0.8, 0], 
              y: '-20vh',
              x: [`${heart.x}vw`, `${heart.x + (Math.random() * 10 - 5)}vw`, `${heart.x - (Math.random() * 10 - 5)}vw`]
            }}
            transition={{ 
              duration: 8 + Math.random() * 4,
              ease: "easeInOut" 
            }}
            className="absolute bottom-0"
          >
            <Heart 
              className="text-primary/60 fill-primary/40 drop-shadow-[0_0_10px_rgba(249,168,212,0.5)]" 
              size={24} 
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
