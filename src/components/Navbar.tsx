import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="fixed top-0 w-full z-50 glass-panel px-8 py-5 flex justify-between items-center border-b border-white/5">
      <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
        <span className="text-3xl text-gold font-serif">Ψ</span>
        <span className="font-display font-medium tracking-[0.2em] uppercase text-xs">Psy Partners</span>
      </Link>
      <div className="hidden lg:flex gap-12 font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted">
        <a href={isHome ? "#problem" : "/#problem"} className="hover:text-gold transition-colors">The Problem</a>
        <a href={isHome ? "#boardguard" : "/#boardguard"} className="hover:text-gold transition-colors">BoardGuard AI</a>
        <a href={isHome ? "#transition" : "/#transition"} className="hover:text-gold transition-colors">Transition AI</a>
        <a href={isHome ? "#velocity" : "/#velocity"} className="hover:text-gold transition-colors">Velocity AI</a>
        <Link to="/team" className={location.pathname === '/team' ? "text-gold" : "hover:text-gold transition-colors"}>Team</Link>
      </div>
      <a 
        href="mailto:info@psy.partners"
        className="px-6 py-2 border border-gold/30 text-gold font-mono text-[10px] uppercase tracking-widest hover:bg-gold hover:text-void transition-all duration-500"
      >
        Inquire
      </a>
    </nav>
  );
}
