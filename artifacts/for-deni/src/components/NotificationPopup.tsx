import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function NotificationPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showNotification = () => {
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 4000);
    };

    const interval = setInterval(showNotification, 90000); // 90 seconds
    
    // First notification after 15 seconds
    const initialTimeout = setTimeout(showNotification, 15000);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100, y: -20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 100, scale: 0.9 }}
          className="fixed top-6 right-6 z-50 px-4 py-3 bg-black/60 backdrop-blur-md border border-primary/30 rounded-2xl shadow-[0_0_15px_rgba(249,168,212,0.2)]"
        >
          <p className="text-sm font-medium text-white/90">
            new thought about deni unlocked 😭
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
