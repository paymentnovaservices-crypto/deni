import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Music, VolumeX } from 'lucide-react';

export default function SoundToggle() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 4 }}
      onClick={() => setIsPlaying(!isPlaying)}
      className="fixed top-6 right-6 z-40 p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/70 hover:text-primary hover:border-primary/50 transition-all duration-300"
      aria-label="Toggle ambient sound"
      data-testid="button-sound-toggle"
    >
      {isPlaying ? (
        <Music size={18} className="animate-pulse" />
      ) : (
        <VolumeX size={18} />
      )}
      
      {isPlaying && (
        <motion.div
          className="absolute inset-0 rounded-full border border-primary pointer-events-none"
          animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
      )}
    </motion.button>
  );
}
