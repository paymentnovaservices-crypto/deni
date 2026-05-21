import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

type Msg = { sender: 'D' | 'G'; text: string; time?: string };
type ConvoBlock = { date: string; messages: Msg[] };

const CONVERSATIONS: ConvoBlock[] = [
  {
    date: '7 mai 2026',
    messages: [
      { sender: 'G', text: 'Miss u :<', time: '10:53' },
      { sender: 'D', text: 'Heyyy', time: '10:54' },
      { sender: 'D', text: 'Imyyyyyyy', time: '10:54' },
      { sender: 'G', text: 'Vad =)))', time: '10:55' },
      { sender: 'D', text: 'vere da nu pot vb doar cand ne lasă pe tlf', time: '10:56' },
      { sender: 'G', text: 'Glumeam ma 😢', time: '10:56' },
    ],
  },
  {
    date: '7 mai 2026 · seară',
    messages: [
      { sender: 'D', text: 'gen pe scurt e legat de noi doi și ca sunt eu prea sensibilă', time: '21:09' },
      { sender: 'G', text: 'Uhm', time: '21:10' },
      { sender: 'G', text: 'Ascult mai explicit', time: '21:10' },
      { sender: 'D', text: 'stai puțin ca mi se întinde rimelul', time: '21:10' },
      { sender: 'D', text: 'ce amuzantă sunt', time: '21:11' },
      { sender: 'G', text: 'Dar si astept', time: '21:11' },
      { sender: 'G', text: 'Si daca vrei apel dont hesitate to call', time: '21:11' },
    ],
  },
  {
    date: '8 mai 2026',
    messages: [
      { sender: 'D', text: 'ca și eu sunt o ratata 😢', time: '18:00' },
      { sender: 'G', text: 'BA NUUUU', time: '18:00' },
      { sender: 'D', text: 'WOW', time: '18:00' },
      { sender: 'G', text: 'Ur a princess', time: '18:00' },
    ],
  },
  {
    date: '11 mai 2026',
    messages: [
      { sender: 'D', text: 'ce ametita sunt mor', time: '20:35' },
      { sender: 'G', text: 'Pai de ce', time: '20:41' },
      { sender: 'D', text: 'de betivă ce sunt', time: '20:44' },
      { sender: 'G', text: 'Hahahahhahaa', time: '20:44' },
      { sender: 'G', text: 'Still ramai my cutie', time: '20:44' },
      { sender: 'D', text: 'ce rizz', time: '20:46' },
      { sender: 'G', text: 'Nah', time: '20:46' },
      { sender: 'G', text: 'Truth', time: '20:46' },
    ],
  },
  {
    date: '12 mai 2026',
    messages: [
      { sender: 'G', text: 'Tried my best', time: '18:06' },
      { sender: 'D', text: 'te omor', time: '18:07' },
      { sender: 'D', text: 'VERE CE DRĂGUȚ E', time: '18:07' },
      { sender: 'D', text: 'BUNE CA PLÂNG', time: '18:07' },
      { sender: 'D', text: 'doamne ce drăguț ești vere', time: '18:08' },
      { sender: 'G', text: 'Ai tot dreptul', time: '18:08' },
      { sender: 'D', text: 'realizezi ca ești prima persoana care să facă așa ceva? 😢', time: '18:10' },
    ],
  },
  {
    date: '16 mai 2026',
    messages: [
      { sender: 'D', text: 'EW NUNU', time: '22:20' },
      { sender: 'G', text: 'Too late', time: '22:20' },
      { sender: 'G', text: 'Still such a beauty', time: '22:20' },
      { sender: 'D', text: 'FIXXX', time: '22:21' },
      { sender: 'G', text: 'DA FIX TU. SI CE, AI CEVA IMPOTRIVA?', time: '22:21' },
      { sender: 'D', text: 'DA', time: '22:21' },
      { sender: 'G', text: 'EU NU', time: '22:21' },
      { sender: 'D', text: 'stai ca am unu în care arăt mai decent 🥰🥰🥰', time: '22:22' },
    ],
  },
  {
    date: '21 mai 2026',
    messages: [
      { sender: 'D', text: 'Gabi, nu trebuie sa pui la suflet ce zic alte persoane despre munca ta', time: '20:07' },
      { sender: 'D', text: 'Eu chiar sunt mândra de tine că ai reușit să refaci acea proiect și să iei un punctaj chiar bun', time: '20:07' },
      { sender: 'D', text: 'munca și efortul tău contează cel mai mult, pentru mine ai luat și 1000 de puncte', time: '20:09' },
      { sender: 'D', text: 'Sunt aici pentru tine dacă vrei să vorbim, chiar sunt extraordinar de mândra de tine', time: '20:11' },
      { sender: 'G', text: 'Te scot la un matcha când mai vin?', time: '23:15' },
      { sender: 'D', text: 'chill im easy 😇', time: '23:15' },
    ],
  },
];

export default function ChatSection() {
  const [visibleConvo, setVisibleConvo] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [showTyping, setShowTyping] = useState(false);

  const current = CONVERSATIONS[visibleConvo];

  useEffect(() => {
    setVisibleMessages(0);
    setShowTyping(false);
    let i = 0;
    const next = () => {
      if (i < current.messages.length) {
        setShowTyping(true);
        setTimeout(() => {
          setShowTyping(false);
          setVisibleMessages(i + 1);
          i++;
          setTimeout(next, 400 + Math.random() * 500);
        }, 600);
      }
    };
    const t = setTimeout(next, 300);
    return () => clearTimeout(t);
  }, [visibleConvo, current.messages.length]);

  return (
    <section className="w-full py-32 flex flex-col items-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 mb-4 text-primary"
      >
        <MessageSquare size={24} />
        <h2 className="text-3xl font-serif text-white/90">conversații reale</h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-white/30 italic text-sm mb-8 font-serif"
      >
        "saved every message. don't regret it."
      </motion.p>

      {/* Convo selector tabs */}
      <div className="flex flex-wrap gap-2 justify-center mb-8 max-w-xl">
        {CONVERSATIONS.map((c, i) => (
          <button
            key={i}
            data-testid={`chat-tab-${i}`}
            onClick={() => setVisibleConvo(i)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
              visibleConvo === i
                ? 'bg-primary/30 text-primary border border-primary/40 shadow-[0_0_10px_rgba(249,168,212,0.2)]'
                : 'bg-white/5 text-white/40 border border-white/10 hover:border-white/20'
            }`}
          >
            {c.date}
          </button>
        ))}
      </div>

      {/* Chat window */}
      <div className="w-full max-w-md bg-black/60 border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl backdrop-blur-xl">
        {/* Header */}
        <div className="flex items-center gap-3 px-6 py-4 border-b border-white/10 bg-white/5">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white text-sm font-bold shadow-[0_0_15px_rgba(249,168,212,0.3)]">
            D
          </div>
          <div>
            <p className="text-white font-medium text-sm">Deni 💗</p>
            <p className="text-white/40 text-[11px]">Brașov · active now</p>
          </div>
          <div className="ml-auto w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)]" />
        </div>

        {/* Date label */}
        <div className="text-center py-3">
          <span className="text-white/25 text-[11px] uppercase tracking-widest">{current.date}</span>
        </div>

        {/* Messages */}
        <div className="flex flex-col gap-2 px-4 pb-4 min-h-[320px]">
          <AnimatePresence mode="popLayout">
            {current.messages.slice(0, visibleMessages).map((msg, index) => {
              const isMe = msg.sender === 'G';
              return (
                <motion.div
                  key={`${visibleConvo}-${index}`}
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3, type: 'spring', stiffness: 200, damping: 20 }}
                  className={`flex items-end gap-2 ${isMe ? 'justify-end' : 'justify-start'}`}
                >
                  {!isMe && (
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-[10px] font-bold text-white mb-1 flex-shrink-0 shadow-[0_0_10px_rgba(249,168,212,0.2)]">
                      D
                    </div>
                  )}
                  <div className="flex flex-col gap-0.5 max-w-[72%]">
                    <div className={`px-4 py-2.5 ${
                      isMe
                        ? 'bg-primary/80 text-white rounded-2xl rounded-br-sm shadow-[0_0_15px_rgba(249,168,212,0.15)]'
                        : 'bg-white/10 text-white/90 rounded-2xl rounded-bl-sm'
                    }`}>
                      <p className="text-[14px] leading-snug">{msg.text}</p>
                    </div>
                    {msg.time && (
                      <p className={`text-[10px] text-white/25 px-1 ${isMe ? 'text-right' : 'text-left'}`}>
                        {msg.time}
                      </p>
                    )}
                  </div>
                  {isMe && (
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-[10px] font-bold text-white mb-1 flex-shrink-0">
                      G
                    </div>
                  )}
                </motion.div>
              );
            })}

            {showTyping && (
              <motion.div
                key="typing"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2 justify-start"
              >
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0">
                  D
                </div>
                <div className="flex items-center gap-1 bg-white/10 px-4 py-3 rounded-2xl rounded-bl-sm">
                  {[0, 0.2, 0.4].map((delay, i) => (
                    <motion.div
                      key={i}
                      animate={{ y: [0, -4, 0] }}
                      transition={{ repeat: Infinity, duration: 0.8, delay }}
                      className="w-1.5 h-1.5 bg-white/50 rounded-full"
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {visibleMessages >= current.messages.length && (
          <div className="text-right text-[10px] text-white/25 px-6 pb-4">
            Read ✓✓
          </div>
        )}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-white/30 italic text-sm font-serif text-center"
      >
        "every conversation felt too short"
      </motion.p>
    </section>
  );
}
