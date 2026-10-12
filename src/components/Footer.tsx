import React from 'react';
import PsiLogo from './PsiLogo';
import { Linkedin, Instagram, Youtube, MessageCircle } from 'lucide-react';
import { trackOutboundClick } from '../utils/analytics';

export default function Footer() {
  const socials = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/psypartners',
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/psypartners',
      icon: <Instagram className="w-5 h-5" />,
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@psypartners',
      icon: <Youtube className="w-5 h-5" />,
    },
    {
      name: 'X (Twitter)',
      href: 'https://x.com/psypartners',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: 'WhatsApp Contact',
      href: 'https://wa.me/',
      icon: <MessageCircle className="w-5 h-5" />,
    },
  ];

  return (
    <footer className="py-16 md:py-20 px-4 sm:px-6 text-center border-t border-white/5 relative z-10 bg-void">
      <div className="max-w-4xl mx-auto">
        <PsiLogo className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-5 block" />
        <p className="font-mono text-[11px] md:text-xs tracking-[0.35em] md:tracking-[0.4em] text-text-muted uppercase mb-8">
          Psy Partners AI Advisory
        </p>

        {/* Synchronized Socials Bar with full device reactivity */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-12">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackOutboundClick(social.name, social.href)}
              className="text-text-muted hover:text-gold transition-colors p-3 hover:bg-white/5 rounded-full inline-flex items-center justify-center min-w-[44px] min-h-[44px]"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
        
        {/* Responsive Footer Info Bar: mobile-friendly stacking, tablet/desktop row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 md:gap-12 border-t border-white/5 pt-10 text-center sm:text-left">
          <div className="flex flex-col items-center sm:items-start">
            <span className="font-mono text-[10px] uppercase tracking-widest text-gold block mb-2">Presence</span>
            <p className="text-xs sm:text-sm font-light text-text-muted">New Delhi | Dubai | Sydney</p>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <span className="font-mono text-[10px] uppercase tracking-widest text-gold block mb-2">Digital</span>
            <a 
              href="https://www.psy.partners" 
              onClick={() => trackOutboundClick('Website', 'https://www.psy.partners')}
              className="text-xs sm:text-sm font-light text-text-muted hover:text-gold transition-colors"
            >
              www.psy.partners
            </a>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <span className="font-mono text-[10px] uppercase tracking-widest text-gold block mb-2">Contact</span>
            <a 
              href="mailto:info@psy.partners" 
              onClick={() => trackOutboundClick('Email', 'mailto:info@psy.partners')}
              className="text-xs sm:text-sm font-light text-text-muted hover:text-gold transition-colors"
            >
              info@psy.partners
            </a>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="mt-12 pt-6 border-t border-white/5 text-center">
          <p className="font-mono text-[9px] uppercase tracking-widest text-text-muted/50">
            © {new Date().getFullYear()} Psy Partners. All rights reserved. Transition. Not Transformation.
          </p>
        </div>
      </div>
    </footer>
  );
}
