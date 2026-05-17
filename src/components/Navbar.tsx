import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import PsiLogo from './PsiLogo';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'BoardGuard AI', path: '/boardguard' },
    { name: 'Transition AI', path: '/transition' },
    { name: 'Velocity AI', path: '/velocity' },
    { name: 'POV', path: '/pov' },
    { name: 'Team', path: '/team' },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-void px-6 md:px-8 py-5 flex justify-between items-center border-b border-white/5">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity z-50">
          <PsiLogo className="w-8 h-8" />
          <span className="font-display font-medium tracking-[0.2em] uppercase text-xs">Psy Partners</span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-12 font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={location.pathname === link.path ? "text-gold" : "hover:text-gold transition-colors"}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <a 
            href="mailto:info@psy.partners"
            className="hidden sm:block px-6 py-2 border border-gold/30 text-gold font-mono text-[10px] uppercase tracking-widest hover:bg-gold hover:text-void transition-all duration-500"
          >
            Inquire
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gold hover:text-white transition-colors z-50"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-void/95 backdrop-blur-xl flex flex-col items-center justify-center lg:hidden"
          >
            <div className="flex flex-col items-center gap-8 font-mono text-sm uppercase tracking-[0.3em]">
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  onClick={() => setIsOpen(false)}
                  className={location.pathname === link.path ? "text-gold" : "text-text-muted hover:text-gold transition-colors"}
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href="mailto:info@psy.partners"
                onClick={() => setIsOpen(false)}
                className="mt-8 px-8 py-3 border border-gold/30 text-gold font-mono text-xs uppercase tracking-widest hover:bg-gold hover:text-void transition-all"
              >
                Inquire
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
