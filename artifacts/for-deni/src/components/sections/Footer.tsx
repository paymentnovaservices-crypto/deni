import React from 'react';
import { Moon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full py-12 flex flex-col items-center justify-center border-t border-white/5 relative z-10 bg-black/50 backdrop-blur-md">
      <div className="flex items-center gap-2 mb-4 group cursor-none">
        <span className="text-white/60 font-serif">made with</span>
        <span className="text-white/40 group-hover:text-primary group-hover:drop-shadow-[0_0_10px_rgba(249,168,212,0.8)] transition-all duration-300">✦</span>
        <span className="text-white/60 font-serif">for deni.</span>
      </div>

      <p className="text-white/30 text-xs tracking-widest uppercase mb-2">
        © 2026 — de pe 3 mai 2026
      </p>
      <p className="text-white/20 text-xs tracking-widest uppercase mb-6">
        piatra neamț → brașov · still thinking about you
      </p>

      <Moon size={16} className="text-white/20" />
    </footer>
  );
}
