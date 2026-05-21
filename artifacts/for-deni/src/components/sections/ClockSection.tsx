import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ClockSection() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date, offsetHours = 0) => {
    const newDate = new Date(date.getTime() + offsetHours * 60 * 60 * 1000);
    return newDate.toLocaleTimeString('ro-RO', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  return (
    <section className="w-full py-24 flex flex-col items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-48 h-48 rounded-3xl bg-white/5 border border-primary/20 backdrop-blur-md flex flex-col items-center justify-center shadow-[0_0_30px_rgba(249,168,212,0.1)] group hover:border-primary/50 hover:shadow-[0_0_40px_rgba(249,168,212,0.2)] transition-all duration-500"
        >
          <span className="text-sm text-white/50 uppercase tracking-widest mb-2 font-light">ora la mine</span>
          <span className="text-3xl font-mono text-white/90 font-medium tracking-wider">{formatTime(time)}</span>
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-48 h-48 rounded-3xl bg-white/5 border border-secondary/20 backdrop-blur-md flex flex-col items-center justify-center shadow-[0_0_30px_rgba(251,191,36,0.1)] group hover:border-secondary/50 hover:shadow-[0_0_40px_rgba(251,191,36,0.2)] transition-all duration-500"
        >
          <span className="text-sm text-white/50 uppercase tracking-widest mb-2 font-light">ora la tine</span>
          {/* Offset by 1 hour just to create a sense of distance, or use same time */}
          <span className="text-3xl font-mono text-white/90 font-medium tracking-wider">{formatTime(time, 1)}</span>
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6 }}
        className="mt-16 flex flex-col items-center text-center space-y-4"
      >
        <p className="text-white/60 font-serif italic text-lg md:text-xl">still thinking about you at every hour anyway</p>
        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <p className="text-white/40 text-sm tracking-wide">distance means nothing when someone means this much</p>
      </motion.div>
    </section>
  );
}
