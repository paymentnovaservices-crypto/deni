import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Heart, Moon, Camera, Image, Sparkles, Sun, Coffee, X } from 'lucide-react';

const MEMORIES = [
  { caption: "still one of my favorite moments", icon: Star, color: "from-pink-900/40 to-purple-900/40" },
  { caption: "you looked way too cute here", icon: Camera, color: "from-amber-900/40 to-red-900/40" },
  { caption: "i still smile at this", icon: SmileIcon, color: "from-rose-900/40 to-pink-900/40" },
  { caption: "how are you even real", icon: Sparkles, color: "from-indigo-900/40 to-purple-900/40" },
  { caption: "favorite girl ever", icon: Heart, color: "from-fuchsia-900/40 to-rose-900/40" },
  { caption: "this picture owns my heart", icon: Image, color: "from-orange-900/40 to-amber-900/40" },
  { caption: "still obsessed with this", icon: Moon, color: "from-blue-900/40 to-indigo-900/40" },
  { caption: "pretty girl alert", icon: Sun, color: "from-yellow-900/40 to-orange-900/40" }
];

function SmileIcon(props: any) {
  return <Heart {...props} />; // Placeholder
}

export default function MemoriesSection() {
  const [selectedImage, setSelectedImage] = useState<typeof MEMORIES[0] | null>(null);

  return (
    <section className="w-full py-32 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl font-serif text-white/90">little memories</h2>
        <p className="text-white/40 mt-2 text-sm uppercase tracking-widest">click to view</p>
      </motion.div>

      <div className="columns-1 sm:columns-2 md:columns-3 gap-6 w-full max-w-5xl space-y-6">
        {MEMORIES.map((memory, index) => {
          const Icon = memory.icon;
          const isTall = index % 3 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedImage(memory)}
              className={`relative break-inside-avoid rounded-3xl overflow-hidden cursor-none group ${isTall ? 'h-80' : 'h-64'}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${memory.color} transition-all duration-500 group-hover:scale-110`} />
              
              {/* Pattern Overlay */}
              <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <Icon size={32} className="text-white/50 mb-4 drop-shadow-md group-hover:text-white transition-colors" />
                <p className="text-white/90 font-serif text-lg leading-snug drop-shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                  {memory.caption}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 p-2 text-white/50 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`w-full max-w-2xl aspect-[4/5] md:aspect-video rounded-[3rem] bg-gradient-to-br ${selectedImage.color} relative overflow-hidden flex flex-col items-center justify-center shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]" />
              
              <selectedImage.icon size={80} className="text-white/40 mb-8 drop-shadow-2xl" />
              <h3 className="text-3xl md:text-4xl font-serif text-white text-center px-8 drop-shadow-xl font-medium">
                {selectedImage.caption}
              </h3>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
