import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function FinalSection() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center py-32 overflow-hidden">
      <div className="absolute inset-0 bg-black -z-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-primary/10 rounded-full blur-[150px] -z-10 pointer-events-none" />

      <div className="flex flex-col items-center text-center space-y-16 max-w-4xl px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1.5 }}
          className="text-white/60 font-serif text-xl"
        >
          and honestly?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 2, delay: 1 }}
          className="text-4xl md:text-6xl font-serif text-white/90 drop-shadow-[0_0_20px_rgba(249,168,212,0.4)] leading-tight"
        >
          cred că ai schimbat ceva în mine.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 2, delay: 2.5 }}
          className="text-xl md:text-2xl text-white/70 font-light max-w-2xl"
        >
          și chiar sper să rămâi în viața mea pentru foarte mult timp.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 2, delay: 4 }}
          className="text-lg md:text-xl text-primary/70 italic font-serif"
        >
          because life started feeling softer after you appeared in it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 2, delay: 6 }}
          className="w-full text-right mt-12"
        >
          <p className="text-3xl font-serif text-secondary drop-shadow-[0_0_15px_rgba(251,191,36,0.3)]">— gabi</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 8 }}
          className="mt-32"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <Heart size={32} className="fill-primary/50 text-primary drop-shadow-[0_0_15px_rgba(249,168,212,0.8)]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
