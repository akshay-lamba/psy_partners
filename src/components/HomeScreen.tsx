import React from 'react';
import { Layers, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import Navbar from './Navbar';
import Footer from './Footer';
import usePageSEO from '../hooks/usePageSEO';
import { trackDownload } from '../utils/analytics';

export default function HomeScreen() {
  usePageSEO({
    title: "Psy Partners | Board-Level AI Transition System",
    description: "Move from AI paralysis to deployed advantage with sector-specific AI intelligence terminals. Board-level AI governance and transition advisory.",
    keywords: "AI Transition, AI Governance, Board AI Advisory, Sovereign AI Systems, Psy Partners, BoardGuard AI, Transition AI, Velocity AI, Enterprise AI Strategy",
    canonicalPath: "/",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://www.psy.partners/#webpage",
      "url": "https://www.psy.partners/",
      "name": "Psy Partners | Board-Level AI Transition System",
      "description": "Move from AI paralysis to deployed advantage with sector-specific AI intelligence terminals.",
      "about": {
        "@id": "https://www.psy.partners/#organization"
      }
    }
  });

  const STRATEGY_DECK_URL = "https://b2006858-57c1-480a-9730-8e9f2057acb9.usrfiles.com/ugd/b20068_d95c2f34c0ca418f8121c9fa4bf965eb.pdf";

  return (
    <div className="w-full bg-void text-text-primary selection:bg-gold selection:text-void flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="min-h-[90vh] sm:min-h-screen flex flex-col items-center justify-center relative px-4 sm:px-6 md:px-8 pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0D0D0D_0%,#000000_100%)]"></div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="z-10 w-full max-w-6xl text-center"
          >
            <div className="flex flex-col items-center mb-8 sm:mb-12">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-white tracking-[0.2em] sm:tracking-widest uppercase">
                Psy Partners
              </h2>
              <p className="font-mono text-[10px] sm:text-xs text-text-muted tracking-[0.3em] sm:tracking-[0.4em] uppercase mt-2">
                Transition. Not Transformation.
              </p>
            </div>

            <h1 className="font-serif italic text-2xl sm:text-3xl md:text-5xl text-gold mb-10 sm:mb-16 tracking-tight text-balance max-w-4xl mx-auto leading-tight">
              The AI Transition System: From Governance Paralysis to Deployed Advantage
            </h1>

            {/* Problem stats grid: mobile 1 col, tablet 2 cols */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20 max-w-5xl mx-auto">
              <div className="glass-panel p-6 sm:p-10 rounded-2xl border-white/5 flex flex-col items-center justify-center text-center">
                <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-2 sm:gap-4 mb-4">
                  <span className="text-6xl sm:text-7xl font-display font-bold text-gold">95%</span>
                  <div className="text-center sm:text-left">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-white">Of AI Pilots Fail to</p>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-white">Reach Production</p>
                  </div>
                </div>
                <p className="text-text-muted font-light text-xs sm:text-sm max-w-xs">
                  Most enterprises struggle to scale AI across functions despite high activity levels.
                </p>
              </div>

              <div className="glass-panel p-6 sm:p-10 rounded-2xl border-white/5 flex flex-col items-center justify-center text-center">
                <h3 className="font-display text-lg sm:text-xl text-gold uppercase tracking-widest mb-3 sm:mb-4">
                  Governance is the Catalyst, Not the Brake
                </h3>
                <p className="text-text-muted font-light text-xs sm:text-sm max-w-sm">
                  Clarity on risk allows boards to move with conviction rather than hesitation.
                </p>
              </div>
            </div>

            {/* Comparison vs block */}
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center mb-16 sm:mb-20">
              <div className="text-center p-4 sm:p-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 border border-white/10 rounded-full flex items-center justify-center opacity-40">
                  <Layers className="text-white w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <h4 className="font-mono text-[10px] uppercase tracking-widest text-text-muted mb-2">Transformation</h4>
                <p className="text-xs text-text-muted font-light">Consultants advise, then leave. Executives delegate. Pilots stall.</p>
              </div>
              
              <div className="flex flex-col items-center my-2 md:my-0">
                <div className="font-serif italic text-xl sm:text-2xl text-gold mb-2 md:mb-4">vs</div>
                <div className="h-px w-24 md:w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
              </div>

              <div className="text-center p-4 sm:p-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 border border-gold rounded-full flex items-center justify-center bg-gold/5">
                  <Zap className="text-gold w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <h4 className="font-mono text-[10px] uppercase tracking-widest text-gold mb-2">Transition</h4>
                <p className="text-xs text-text-primary font-light">Executives become AI-native. Organizations deploy intelligence. Capabilities compound.</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* The Problem Section */}
        <section className="py-20 sm:py-32 px-4 sm:px-6 md:px-8 bg-charcoal border-y border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-mono text-[10px] text-gold uppercase tracking-[0.4em] mb-6 sm:mb-8">The Problem</h2>
            <h3 className="font-serif text-3xl sm:text-5xl md:text-7xl text-white italic mb-8 sm:mb-12 leading-tight">
              High AI activity. <br/>Zero AI impact.
            </h3>
            <div className="space-y-6 sm:space-y-8 text-base sm:text-xl text-text-muted font-light leading-relaxed text-balance">
              <p>
                95% of AI pilots fail to reach production. Only one-third of enterprises have scaled AI across functions. 
                Boards are now accountable for AI decisions they don’t fully understand. Regulation is live. Investors are pricing AI governance maturity into valuations.
              </p>
              <p className="text-white font-medium text-lg sm:text-2xl">
                The technology is not broken. The model is.
              </p>
            </div>
          </div>
        </section>

        {/* The Answer Section */}
        <section className="py-20 sm:py-32 px-4 sm:px-6 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-mono text-[10px] text-gold uppercase tracking-[0.4em] mb-6 sm:mb-8">The Answer</h2>
            <h3 className="font-serif text-3xl sm:text-5xl md:text-7xl text-white italic mb-8 sm:mb-12 leading-tight">
              Three programs. <br/>One system.
            </h3>
            <p className="text-base sm:text-xl text-text-muted font-light leading-relaxed mb-12 sm:mb-16 text-balance">
              Psy Partners delivers three distinct, complementary programs targeting different buyers at different stages of the AI adoption challenge. 
              Together, they move an organization from uncertainty to deployed competitive advantage.
            </p>
          </div>
        </section>

        {/* Differentiation */}
        <section className="py-20 sm:py-32 px-4 sm:px-6 md:px-8 bg-charcoal border-y border-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-20">
              <h2 className="font-mono text-[10px] text-gold uppercase tracking-[0.4em] mb-4 sm:mb-8">Differentiation</h2>
              <h3 className="font-serif text-3xl sm:text-5xl text-white italic">What makes Psy Partners different</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                {
                  title: "vs. Consulting",
                  desc: "They send generalists. We send sector specialists. They deliver slide decks. We deploy working capability."
                },
                {
                  title: "vs. Vendors",
                  desc: "They sell tools. We are fully agnostic. No vendor relationships. No lock-in. We select what's right for you."
                },
                {
                  title: "vs. Generic AI",
                  desc: "They treat all sectors the same. We build everything around your sector and your specific role."
                },
                {
                  title: "vs. Internal Teams",
                  desc: "They lack external perspective and are politically constrained. We bring benchmarks and infrastructure."
                }
              ].map((item, i) => (
                <div key={i} className="p-6 sm:p-8 glass-panel rounded-2xl border-white/5">
                  <h4 className="font-display text-gold uppercase tracking-widest mb-3 sm:mb-4 text-xs sm:text-sm">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-text-muted font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 sm:py-40 px-4 sm:px-6 md:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(184,115,51,0.05),transparent_70%)]"></div>
          
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-gold/20 bg-black p-8 sm:p-14 md:p-20 text-center"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-gold/5 rounded-full blur-[80px] sm:blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-gold/5 rounded-full blur-[80px] sm:blur-[100px] translate-x-1/2 translate-y-1/2"></div>
              
              <div className="relative z-10">
                <h2 className="font-serif text-2xl sm:text-4xl md:text-6xl text-white italic mb-6 sm:mb-8 leading-tight">
                  Build your structural business advantage with Psy Partners.
                </h2>
                
                <div className="flex flex-col items-center gap-4 sm:gap-6">
                  <a 
                    href={STRATEGY_DECK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackDownload('Psy Partners Strategy Deck', STRATEGY_DECK_URL, 'Strategy Deck')}
                    className="group/btn relative px-8 sm:px-12 py-4 sm:py-5 bg-gold text-void font-mono text-[11px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] font-bold rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95 inline-flex items-center justify-center min-h-[48px]"
                  >
                    <span className="relative z-10">Download Strategy Deck</span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity"></div>
                  </a>
                  
                  <p className="font-serif italic text-text-muted/70 text-xs sm:text-sm">
                    Psy Partners — Transition. Not Transformation.
                  </p>
                </div>
              </div>

              {/* Edge glow */}
              <div className="absolute inset-0 border border-gold/10 rounded-[1.5rem] sm:rounded-[2rem] group-hover:border-gold/30 transition-colors duration-700 pointer-events-none"></div>
            </motion.div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
