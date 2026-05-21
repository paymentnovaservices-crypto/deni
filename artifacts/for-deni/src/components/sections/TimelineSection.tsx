import React from 'react';
import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';

const ITEMS = [
  { emoji: "☕", text: "matcha together" },
  { emoji: "🌙", text: "late night walks" },
  { emoji: "🌅", text: "beach sunsets" },
  { emoji: "📞", text: "fall asleep on call" },
  { emoji: "🤗", text: "hug you for way too long" },
  { emoji: "📸", text: "take cute pictures together" },
  { emoji: "🎵", text: "listen to music together" },
  { emoji: "⭐", text: "watch stars together" },
  { emoji: "😂", text: "annoy you irl" },
  { emoji: "🤝", text: "hold your hand" },
  { emoji: "🎬", text: "watch movies together" },
  { emoji: "🚗", text: "random night drives" },
  { emoji: "✨", text: "make more memories" }
];

export default function TimelineSection() {
  return (
    <section className="w-full py-32 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 mb-24 text-secondary"
      >
        <Compass size={28} className="opacity-80" />
        <h2 className="text-3xl font-serif text-white/90 text-center">things i still wanna do with you</h2>
      </motion.div>

      <div className="relative w-full max-w-3xl">
        {/* Center Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2" />

        <div className="space-y-8 md:space-y-12 relative">
          {ITEMS.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`relative flex items-center ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} pl-12 md:pl-0`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-secondary shadow-[0_0_10px_rgba(251,191,36,0.8)] -translate-x-1/2 z-10" />

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${isEven ? 'md:text-right' : 'md:text-left'} group`}>
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 md:p-6 hover:bg-white/10 transition-colors duration-300 hover:border-secondary/30 hover:shadow-[0_0_20px_rgba(251,191,36,0.1)] inline-block w-full text-left">
                    <div className={`flex items-center gap-4 ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                      <span className="text-3xl drop-shadow-md">{item.emoji}</span>
                      <p className="text-white/80 font-medium font-serif text-lg">{item.text}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
