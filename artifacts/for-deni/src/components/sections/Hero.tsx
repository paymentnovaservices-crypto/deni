import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SecretSection from './SecretSection';

const PHRASES = [
  "notificatia mea favorita",
  "persoana la care ma gandesc nonstop",
  "motivul pentru care zambesc la telefon",
  "fata pentru care as sta treaz iar",
  "you feel like peace",
  "my comfort person",
  "the prettiest girl ever",
  "the person i wait for",
  "you became part of my routine",
  "my favorite late night conversation"
];

function Typewriter() {
  const [text, setText] = React.useState('');
  const [phraseIndex, setPhraseIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const currentPhrase = PHRASES[phraseIndex];
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), 30);
      } else {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
      }
    } else {
      if (text.length < currentPhrase.length) {
        timeout = setTimeout(() => setText(currentPhrase.slice(0, text.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex]);

  return (
    <div className="h-8 mt-6">
      <span className="text-lg md:text-xl text-secondary/90 font-light italic">
        {text}
        <motion.span 
          animate={{ opacity: [0, 1, 0] }} 
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block ml-1 w-1 h-5 bg-secondary/80 align-middle"
        />
      </span>
    </div>
  );
}

export default function Hero() {
  const [isSecretOpen, setIsSecretOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center py-20 text-center">
        {/* Background Glows */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 md:w-96 h-64 md:h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 md:w-96 h-64 md:h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Secret Star */}
        <motion.div 
          className="absolute top-[20%] right-[20%] md:top-1/4 md:right-1/3 w-3 h-3 bg-secondary rounded-full shadow-[0_0_15px_rgba(251,191,36,0.8)] cursor-none z-50 group"
          animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 3 }}
          whileHover={{ scale: 1.5 }}
          onClick={() => setIsSecretOpen(true)}
          title="✦"
        >
          <div className="absolute inset-0 rounded-full bg-secondary animate-ping opacity-50" />
        </motion.div>

        <div className="relative z-10 flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-white/50 tracking-[0.3em] text-sm uppercase mb-6"
          >
            pentru tine ✦
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-7xl md:text-9xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-br from-white via-primary/90 to-primary drop-shadow-[0_0_30px_rgba(249,168,212,0.3)] mb-8 pb-4"
          >
            for deni.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-xl md:text-2xl text-white/60 font-light max-w-lg mx-auto"
          >
            cred că ai devenit mult prea importantă pentru mine 😭
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <Typewriter />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 flex flex-col items-center gap-2 text-white/40"
        >
          <span className="text-xs uppercase tracking-widest">scroll slowly :)</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown size={20} className="text-primary/70" />
          </motion.div>
        </motion.div>
      </section>

      <SecretSection isOpen={isSecretOpen} onClose={() => setIsSecretOpen(false)} />
    </>
  );
}
