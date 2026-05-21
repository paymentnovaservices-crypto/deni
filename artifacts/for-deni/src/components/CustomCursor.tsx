import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [trails, setTrails] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    let lastTime = 0;
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const now = Date.now();
      if (now - lastTime > 50) {
        setTrails(prev => [...prev.slice(-15), { id: now, x: e.clientX, y: e.clientY }]);
        lastTime = now;
      }

      const target = e.target as HTMLElement;
      setIsHovering(
        window.getComputedStyle(target).cursor === 'pointer' || 
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button'
      );
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null; // Disable on touch devices
  }

  return (
    <>
      {trails.map(trail => (
        <motion.div
          key={trail.id}
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed w-1.5 h-1.5 bg-primary rounded-full pointer-events-none z-[9998]"
          style={{ 
            left: trail.x, 
            top: trail.y,
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 0 8px var(--color-primary)'
          }}
        />
      ))}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-primary rounded-full pointer-events-none z-[9999]"
        style={{
          boxShadow: '0 0 10px var(--color-primary), 0 0 20px var(--color-primary)',
        }}
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovering ? 2 : 1,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-primary/50 rounded-full pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: "tween", ease: "circOut", duration: 0.3 }}
      />
    </>
  );
}
