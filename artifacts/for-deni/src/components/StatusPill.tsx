import React from 'react';
import { motion } from 'framer-motion';

export default function StatusPill() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 4, duration: 1 }}
      className="fixed bottom-6 left-6 z-40 flex items-center gap-3 px-4 py-2 bg-black/40 backdrop-blur-md border border-white/5 rounded-full"
    >
      <div className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
      </div>
      <span className="text-xs text-white/70 font-light tracking-wide">
        currently thinking about deni…
      </span>
    </motion.div>
  );
}
