import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, SkipBack, SkipForward, Music, Volume2 } from 'lucide-react';

const SONGS = [
  { title: "Until I Found You", artist: "Stephen Sanchez" },
  { title: "Glue Song", artist: "beabadoobee" },
  { title: "From The Start", artist: "Laufey" },
  { title: "Apocalypse", artist: "Cigarettes After Sex" },
  { title: "I Like Me Better", artist: "Lauv" },
];

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const togglePlay = () => setIsPlaying(!isPlaying);
  
  const nextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % SONGS.length);
    setIsPlaying(true);
  };

  const prevSong = () => {
    setCurrentSongIndex((prev) => (prev - 1 + SONGS.length) % SONGS.length);
    setIsPlaying(true);
  };

  return (
    <section className="w-full py-24 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 mb-12 text-primary"
      >
        <Music size={24} />
        <h2 className="text-2xl font-serif font-medium tracking-wide text-white/90">our playlist</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-black/40 border border-white/10 rounded-[2rem] p-6 backdrop-blur-xl shadow-2xl relative overflow-hidden"
      >
        {/* Glow effect behind player */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-[80px] -z-10 pointer-events-none" />

        {/* Album Art Placeholder */}
        <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-indigo-900 via-purple-900 to-primary/80 mb-8 relative flex items-center justify-center overflow-hidden group">
          <div className="absolute inset-0 bg-black/20" />
          <motion.div
            animate={{ rotate: isPlaying ? 360 : 0 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            className="relative z-10 w-32 h-32 rounded-full border-4 border-white/20 flex items-center justify-center"
            style={{
              background: 'radial-gradient(circle, #222 0%, #111 40%, #000 100%)'
            }}
          >
            <div className="w-8 h-8 rounded-full border border-white/10 bg-black" />
          </motion.div>
        </div>

        {/* Info */}
        <div className="flex justify-between items-end mb-6">
          <div>
            <h3 className="text-xl font-medium text-white mb-1">{SONGS[currentSongIndex].title}</h3>
            <p className="text-white/60 text-sm">{SONGS[currentSongIndex].artist}</p>
          </div>
          
          {/* Sound waves */}
          <div className="flex gap-1 h-6 items-end pb-1">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 bg-primary rounded-t-sm"
                animate={isPlaying ? {
                  height: ["20%", "100%", "40%", "80%", "30%"],
                } : { height: "20%" }}
                transition={isPlaying ? {
                  repeat: Infinity,
                  duration: 1 + Math.random(),
                  ease: "easeInOut",
                  delay: i * 0.1
                } : { duration: 0.3 }}
              />
            ))}
          </div>
        </div>

        {/* Progress */}
        <div className="w-full mb-6">
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden relative">
            <motion.div
              className="absolute top-0 left-0 h-full bg-white/80 rounded-full"
              initial={{ width: "0%" }}
              animate={isPlaying ? { width: "100%" } : { width: "30%" }}
              transition={isPlaying ? { duration: 180, ease: "linear" } : { duration: 0 }}
            />
          </div>
          <div className="flex justify-between text-[10px] text-white/40 mt-2 font-mono">
            <span>{isPlaying ? '0:34' : '0:00'}</span>
            <span>3:12</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-8">
          <button onClick={prevSong} className="text-white/70 hover:text-white transition-colors" data-testid="button-prev-song">
            <SkipBack size={24} />
          </button>
          <button 
            onClick={togglePlay}
            className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform"
            data-testid="button-play-pause"
          >
            {isPlaying ? <Pause size={24} className="fill-black" /> : <Play size={24} className="fill-black ml-1" />}
          </button>
          <button onClick={nextSong} className="text-white/70 hover:text-white transition-colors" data-testid="button-next-song">
            <SkipForward size={24} />
          </button>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-12 text-primary/70 font-serif italic text-lg"
      >
        "every song started sounding like you somehow"
      </motion.p>
    </section>
  );
}
