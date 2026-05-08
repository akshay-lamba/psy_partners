import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PsiLogo from './PsiLogo';

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50 glass-panel px-8 py-5 flex justify-between items-center border-b border-white/5">
      <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
        <PsiLogo className="w-8 h-8 text-gold" strokeWidth={1.5} />
        <span className="font-display font-medium tracking-[0.2em] uppercase text-xs">Psy Partners</span>
      </Link>
      <div className="hidden lg:flex gap-12 font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted">
        <Link to="/" className={location.pathname === '/' ? "text-gold" : "hover:text-gold transition-colors"}>Home</Link>
        <Link to="/boardguard" className={location.pathname === '/boardguard' ? "text-gold" : "hover:text-gold transition-colors"}>BoardGuard AI</Link>
        <Link to="/transition" className={location.pathname === '/transition' ? "text-gold" : "hover:text-gold transition-colors"}>Transition AI</Link>
        <Link to="/velocity" className={location.pathname === '/velocity' ? "text-gold" : "hover:text-gold transition-colors"}>Velocity AI</Link>
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
