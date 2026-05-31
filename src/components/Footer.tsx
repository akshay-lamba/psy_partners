import React from 'react';
import PsiLogo from './PsiLogo';
import { Linkedin, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-20 px-6 text-center border-t border-white/5 relative z-10 bg-void">
      <div className="max-w-4xl mx-auto">
        <PsiLogo className="w-12 h-12 mx-auto mb-6 block" />
        <p className="font-mono text-xs tracking-[0.4em] text-text-muted uppercase mb-8">
          Psy Partners AI Advisory
        </p>

        {/* Social Bar */}
        <div className="flex items-center justify-center gap-6 mb-12">
          <a 
            href="https://www.linkedin.com/company/psypartners" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-text-muted hover:text-gold transition-colors p-2 hover:bg-white/5 rounded-full"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="https://www.instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-text-muted hover:text-gold transition-colors p-2 hover:bg-white/5 rounded-full"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a 
            href="https://www.youtube.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-text-muted hover:text-gold transition-colors p-2 hover:bg-white/5 rounded-full"
            aria-label="YouTube"
          >
            <Youtube className="w-5 h-5" />
          </a>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 border-t border-white/5 pt-12">
          <div className="text-left">
            <span className="font-mono text-[10px] uppercase tracking-widest text-gold block mb-2">Presence</span>
            <p className="text-sm font-light text-text-muted">New Delhi | Dubai | Sydney</p>
          </div>
          <div className="text-left">
            <span className="font-mono text-[10px] uppercase tracking-widest text-gold block mb-2">Digital</span>
            <a href="https://www.psy.partners" className="text-sm font-light text-text-muted hover:text-gold transition-colors">www.psy.partners</a>
          </div>
          <div className="text-left">
            <span className="font-mono text-[10px] uppercase tracking-widest text-gold block mb-2">Contact</span>
            <a href="mailto:info@psy.partners" className="text-sm font-light text-text-muted hover:text-gold transition-colors">info@psy.partners</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
