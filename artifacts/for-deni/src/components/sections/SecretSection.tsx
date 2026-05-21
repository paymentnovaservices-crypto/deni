import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const SECRETS = [
  "imi place de tine mai mult decât planuiam",
  "you became my comfort person",
  "you feel safe",
  "i still wait for your notifications",
  "mă faci să zâmbesc random",
  "sper să rămâi",
  "you matter to me",
  "you make my days softer",
  "i could listen to you forever",
  "i got attached accidentally",
  "you became part of my routine",
  "you're genuinely special to me",
  "i hope there will be an us",
  "you feel like home somehow"
];

interface SecretSectionProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SecretSection({ isOpen, onClose }: SecretSectionProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, filter: "blur(20px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(20px)", scale: 1.1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[99999] bg-gradient-to-br from-[#0a0515] via-[#13072e] to-[#03000a] overflow-hidden"
        >
          {/* Cosmic background elements */}
          <div className="absolute inset-0 opacity-50">
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-800/20 rounded-full blur-[150px]" />
          </div>

          <button 
            onClick={onClose}
            className="absolute top-8 right-8 z-50 p-4 text-white/40 hover:text-white transition-colors cursor-none"
            data-testid="button-close-secret"
          >
            <X size={32} />
          </button>

          <div className="relative w-full h-full">
            {SECRETS.map((text, i) => {
              const top = 15 + Math.random() * 70; // 15% to 85%
              const left = 10 + Math.random() * 80; // 10% to 90%
              const size = 1 + Math.random() * 1.5; // 1rem to 2.5rem
              const opacity = 0.3 + Math.random() * 0.7;
              
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ 
                    opacity: opacity, 
                    y: [0, Math.random() * 20 - 10, 0],
                    x: [0, Math.random() * 20 - 10, 0]
                  }}
                  transition={{ 
                    opacity: { duration: 2, delay: i * 0.2 },
                    x: { repeat: Infinity, duration: 10 + Math.random() * 10, ease: "easeInOut" },
                    y: { repeat: Infinity, duration: 10 + Math.random() * 10, ease: "easeInOut" }
                  }}
                  className="absolute font-serif italic text-white whitespace-nowrap drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] pointer-events-none"
                  style={{
                    top: `${top}%`,
                    left: `${left}%`,
                    fontSize: `${size}rem`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  {text}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
