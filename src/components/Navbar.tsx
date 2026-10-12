import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import PsiLogo from './PsiLogo';
import { motion, AnimatePresence } from 'motion/react';
import { trackOutboundClick } from '../utils/analytics';

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
      <nav className="fixed top-0 w-full z-50 bg-void/85 backdrop-blur-md px-4 sm:px-6 md:px-8 py-4 sm:py-5 flex justify-between items-center border-b border-white/5 transition-all">
        <Link 
          to="/" 
          className="flex items-center gap-2.5 sm:gap-3 hover:opacity-85 transition-opacity z-50"
          aria-label="Psy Partners Home"
        >
          <PsiLogo className="w-7 h-7 sm:w-8 sm:h-8" />
          <span className="font-display font-medium tracking-[0.18em] sm:tracking-[0.2em] uppercase text-[11px] sm:text-xs text-white">
            Psy Partners
          </span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-8 xl:gap-12 font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.path}
                to={link.path} 
                className={`relative py-1 transition-colors ${isActive ? "text-gold font-semibold" : "hover:text-gold"}`}
              >
                {link.name}
                {isActive && (
                  <motion.div 
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gold"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3 sm:gap-6">
          <a 
            href="mailto:info@psy.partners"
            onClick={() => trackOutboundClick('Navbar Inquire', 'mailto:info@psy.partners')}
            className="hidden sm:inline-flex items-center justify-center px-5 sm:px-6 py-2 border border-gold/30 text-gold font-mono text-[10px] uppercase tracking-widest hover:bg-gold hover:text-void transition-all duration-300"
          >
            Inquire
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gold hover:text-white transition-colors p-2 z-50 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-white/5"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-void/98 backdrop-blur-2xl flex flex-col items-center justify-center lg:hidden px-6"
          >
            <div className="flex flex-col items-center gap-6 sm:gap-8 font-mono text-xs sm:text-sm uppercase tracking-[0.25em] w-full max-w-xs text-center">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link 
                    key={link.path}
                    to={link.path} 
                    onClick={() => setIsOpen(false)}
                    className={`w-full py-2.5 transition-colors ${isActive ? "text-gold font-bold border-b border-gold/30" : "text-text-muted hover:text-gold"}`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <a 
                href="mailto:info@psy.partners"
                onClick={() => {
                  trackOutboundClick('Mobile Nav Inquire', 'mailto:info@psy.partners');
                  setIsOpen(false);
                }}
                className="mt-6 w-full py-3.5 border border-gold/40 text-gold font-mono text-xs uppercase tracking-widest hover:bg-gold hover:text-void transition-all text-center block font-semibold"
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
