import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function ClockSection() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date) =>
    date.toLocaleTimeString('ro-RO', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });

  const formatDate = (date: Date) =>
    date.toLocaleDateString('ro-RO', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
    });

  const startDate = new Date('2026-05-03');
  const diffMs = time.getTime() - startDate.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  return (
    <section className="w-full py-24 flex flex-col items-center justify-center px-4">

      {/* "de pe" badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10 px-5 py-2 rounded-full bg-white/5 border border-primary/20 text-white/50 text-xs uppercase tracking-widest backdrop-blur-sm"
      >
        de pe 3 mai 2026 · {diffDays} {diffDays === 1 ? 'zi' : 'zile'} 🌙
      </motion.div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full max-w-2xl">

        {/* His clock — Piatra Neamț */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-56 rounded-3xl bg-white/5 border border-amber-400/20 backdrop-blur-md flex flex-col items-center justify-center py-8 px-6 shadow-[0_0_30px_rgba(251,191,36,0.08)] group hover:border-amber-400/50 hover:shadow-[0_0_40px_rgba(251,191,36,0.15)] transition-all duration-500"
        >
          <div className="flex items-center gap-1.5 mb-1">
            <MapPin size={12} className="text-amber-400/60" />
            <span className="text-xs text-white/40 uppercase tracking-widest">Piatra Neamț</span>
          </div>
          <span className="text-[11px] text-amber-400/50 mb-3">gabi</span>
          <span className="text-3xl font-mono text-white/90 font-medium tracking-wider tabular-nums">
            {formatTime(time)}
          </span>
          <span className="text-[11px] text-white/25 mt-2 capitalize">{formatDate(time)}</span>
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>

        {/* Separator hearts */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center gap-1"
        >
          <motion.span
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-primary text-2xl"
          >
            ♡
          </motion.span>
          <span className="text-white/20 text-[10px] uppercase tracking-widest">aceeași oră</span>
          <span className="text-white/20 text-[10px] uppercase tracking-widest">același gând</span>
        </motion.div>

        {/* Her clock — Brașov */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-56 rounded-3xl bg-white/5 border border-primary/20 backdrop-blur-md flex flex-col items-center justify-center py-8 px-6 shadow-[0_0_30px_rgba(249,168,212,0.08)] group hover:border-primary/50 hover:shadow-[0_0_40px_rgba(249,168,212,0.15)] transition-all duration-500"
        >
          <div className="flex items-center gap-1.5 mb-1">
            <MapPin size={12} className="text-primary/60" />
            <span className="text-xs text-white/40 uppercase tracking-widest">Brașov</span>
          </div>
          <span className="text-[11px] text-primary/50 mb-3">deni</span>
          <span className="text-3xl font-mono text-white/90 font-medium tracking-wider tabular-nums">
            {formatTime(time)}
          </span>
          <span className="text-[11px] text-white/25 mt-2 capitalize">{formatDate(time)}</span>
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6 }}
        className="mt-16 flex flex-col items-center text-center space-y-4"
      >
        <p className="text-white/60 font-serif italic text-lg md:text-xl">
          still thinking about you at every hour anyway
        </p>
        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <p className="text-white/35 text-sm tracking-wide">
          distance means nothing when someone means this much
        </p>
        <p className="text-white/20 text-xs tracking-wider">
          Piatra Neamț → Brașov · aceeași țară · aceeași oră · gânduri diferite la aceeași persoană
        </p>
      </motion.div>
    </section>
  );
}
