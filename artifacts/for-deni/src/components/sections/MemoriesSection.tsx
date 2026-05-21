import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

import img1 from '@assets/Screenshot_20260517_190806_Instagram_1779352024463.jpg';
import img2 from '@assets/Screenshot_20260516_222011_Instagram_1779352024493.jpg';
import img3 from '@assets/Screenshot_20260521_112336_WhatsApp_1779352024518.jpg';
import img4 from '@assets/Screenshot_20260521_112420_WhatsApp_1779352024541.jpg';
import img5 from '@assets/Screenshot_20260513_171803_Discord_1779352024559.jpg';
import img6 from '@assets/Screenshot_20260512_180637_Instagram_1779352024574.jpg';
import img7 from '@assets/Screenshot_20260511_204656_WhatsApp_1779352024590.jpg';
import img8 from '@assets/Screenshot_20260508_181013_WhatsApp_1779352024605.jpg';
import img9 from '@assets/Screenshot_20260508_115008_Instagram_1779352024618.jpg';
import img10 from '@assets/Screenshot_20260507_221038_WhatsApp_1779352024641.jpg';
import img11 from '@assets/Screenshot_20260507_114851_Instagram_1779352024656.jpg';

const MEMORIES = [
  { src: img1,  caption: "asta e singura ta reacție? 😢 — you looked way too cute here",        tall: true  },
  { src: img6,  caption: "realizezi ca ești prima persoană care să facă așa ceva? 😢",          tall: false },
  { src: img2,  caption: "Still such a beauty. too late to deny it.",                            tall: false },
  { src: img3,  caption: "când te aperi de ea și ea îți trimite asta 🥺",                        tall: true  },
  { src: img10, caption: "stai că mi se întinde rimelul 😭 — favorite moment",                  tall: false },
  { src: img4,  caption: "Te scot la un matcha când mai vin? — chill im easy 😇",               tall: false },
  { src: img7,  caption: "still ramai my cutie, oricât de ametită ești",                        tall: false },
  { src: img5,  caption: "Cutieeeee <3 reacted ❤️ — notificația care mi-a făcut ziua",         tall: false },
  { src: img8,  caption: "ur a princess. BA NUUUU. da.",                                        tall: true  },
  { src: img11, caption: "miss u :< — conversațiile mele preferate",                            tall: false },
  { src: img9,  caption: "densuq.qx viewed your profile 👀 — săptămâna bună",                  tall: false },
];

export default function MemoriesSection() {
  const [selected, setSelected] = useState<typeof MEMORIES[0] | null>(null);

  return (
    <section className="w-full py-32 flex flex-col items-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-4 text-center"
      >
        <h2 className="text-3xl font-serif text-white/90">little memories</h2>
        <p className="text-white/40 mt-2 text-xs uppercase tracking-widest">de pe 3 mai 2026 · click to view</p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-white/30 italic text-sm mb-12 font-serif"
      >
        "every screenshot is a memory i keep coming back to"
      </motion.p>

      <div className="columns-2 md:columns-3 gap-3 w-full max-w-5xl space-y-3">
        {MEMORIES.map((memory, index) => (
          <motion.div
            key={index}
            data-testid={`memory-card-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelected(memory)}
            className={`relative break-inside-avoid rounded-2xl overflow-hidden cursor-none group ${memory.tall ? 'h-80' : 'h-56'}`}
          >
            <img
              src={memory.src}
              alt={memory.caption}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-white text-xs font-serif leading-snug drop-shadow-lg">
                {memory.caption}
              </p>
            </div>
            {/* subtle pink glow border on hover */}
            <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-1 ring-pink-400/30 transition-all duration-300" />
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
            onClick={() => setSelected(null)}
          >
            <button
              data-testid="memory-modal-close"
              className="absolute top-6 right-6 p-2 text-white/50 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
              onClick={() => setSelected(null)}
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.85, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0 }}
              className="relative max-w-sm w-full max-h-[85vh] rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(249,168,212,0.15)] border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selected.src}
                alt={selected.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                <p className="text-white font-serif text-lg leading-snug">{selected.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
