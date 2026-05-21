import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Smile, Users, Mic, Moon, Star, CloudMoon, Sparkles, Home, Flame } from 'lucide-react';

const TRAITS = [
  { icon: MessageCircle, text: "felul în care vorbești" },
  { icon: Smile, text: "cum mă faci să râd" },
  { icon: Users, text: "cum îți pasă de oameni" },
  { icon: Mic, text: "vocea ta" },
  { icon: Moon, text: "cum devii cute când ești obosită" },
  { icon: Star, text: "cum mă faci să mă simt important" },
  { icon: CloudMoon, text: "cum rămâi în mintea mea nonstop" },
  { icon: Sparkles, text: "how you became my peace" },
  { icon: Smile, text: "your smile" },
  { icon: Flame, text: "your energy" },
  { icon: Heart, text: "literally everything 😭" },
  { icon: Home, text: "how you feel like home" }
];

export default function AdoreSection() {
  return (
    <section className="w-full py-32 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 mb-16 text-primary"
      >
        <Heart className="fill-primary/20" size={28} />
        <h2 className="text-3xl font-serif text-white/90">things i adore about you</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {TRAITS.map((trait, index) => {
          const Icon = trait.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="relative group bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center gap-4 cursor-none backdrop-blur-sm"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10" />
              
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                <Icon size={24} />
              </div>
              <p className="text-white/80 font-medium text-lg leading-snug font-serif">
                {trait.text}
              </p>

              {/* Sparkle particles on hover simulated by child divs */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity overflow-hidden rounded-2xl">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    initial={{ top: '50%', left: '50%' }}
                    animate={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      opacity: [1, 0]
                    }}
                    transition={{ repeat: Infinity, duration: 1 + Math.random(), delay: Math.random() }}
                  />
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
