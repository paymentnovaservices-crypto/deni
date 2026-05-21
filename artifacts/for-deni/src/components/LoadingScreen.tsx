import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 3000;
    const intervalTime = 30;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 3500);

    return () => {
      clearInterval(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-[100px]" />
          </div>

          <div className="relative z-10 flex flex-col items-center max-w-sm w-full px-6">
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-serif text-3xl md:text-4xl text-white tracking-wide font-medium"
              style={{ textShadow: '0 0 20px rgba(249, 168, 212, 0.5)' }}
            >
              loading feelings…
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-3 text-sm text-primary/70 font-light tracking-widest uppercase"
            >
              made with too much attachment
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 text-5xl font-serif text-white/90"
            >
              {progress}%
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-6 w-full h-[2px] bg-white/10 rounded-full overflow-hidden"
            >
              <motion.div 
                className="h-full bg-gradient-to-r from-primary to-secondary"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear", duration: 0.03 }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
