import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowRight, Home, Compass } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import usePageSEO from '../hooks/usePageSEO';

export default function NotFoundScreen() {
  usePageSEO({
    title: "404 — Signal Not Found | Psy Partners",
    description: "The requested enterprise transition route or intelligence signal could not be resolved. Return to Psy Partners terminals.",
    canonicalPath: "/404"
  });

  const pathways = [
    { name: "BoardGuard AI Governance", path: "/boardguard", desc: "Board-level fiduciary navigation and AI risk guardrails." },
    { name: "AI Transition System", path: "/transition", desc: "Operating model alignment from pilot stall to deployed advantage." },
    { name: "Velocity AI Acceleration", path: "/velocity", desc: "Executive workflow acceleration and 40%+ operational velocity." },
    { name: "Transition Signals (POV)", path: "/pov", desc: "Executive research terminals, strategic papers, and signal drops." },
    { name: "Leadership Team", path: "/team", desc: "Managing partners, academic credentials, and sector leads." }
  ];

  return (
    <div className="w-full bg-void text-text-primary selection:bg-gold selection:text-void flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-28 sm:pt-36 pb-20 px-4 sm:px-6 md:px-8 flex items-center justify-center">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex p-3 sm:p-4 rounded-full bg-gold/10 border border-gold/30 text-gold mb-6">
            <Compass className="w-8 h-8 sm:w-10 sm:h-10 animate-spin" style={{ animationDuration: '20s' }} />
          </div>

          <div className="font-mono text-xs sm:text-sm text-gold tracking-[0.3em] uppercase mb-3">
            System Error 404
          </div>

          <h1 className="font-display text-4xl sm:text-6xl text-white tracking-tight mb-4 sm:mb-6">
            SIGNAL UNRESOLVED
          </h1>

          <p className="font-serif text-text-muted text-base sm:text-xl leading-relaxed max-w-xl mx-auto mb-10">
            The requested direct link or terminal address could not be located in our sovereign deployment rails. Select an active pathway below:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-10">
            {pathways.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="group p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-gold/40 hover:bg-white/[0.04] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="font-display text-lg text-white group-hover:text-gold transition-colors flex items-center justify-between">
                    {item.name}
                    <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-gold group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="font-serif text-sm text-text-muted mt-2 line-clamp-2">
                    {item.desc}
                  </p>
                </div>
                <div className="font-mono text-[10px] text-gold/70 uppercase tracking-[0.2em] mt-3">
                  Direct Deeplink: {item.path}
                </div>
              </Link>
            ))}
          </div>

          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gold text-void font-mono text-xs uppercase tracking-[0.2em] font-semibold hover:bg-gold-light transition-all shadow-lg shadow-gold/10"
          >
            <Home className="w-4 h-4" /> Return to Main Terminal
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
