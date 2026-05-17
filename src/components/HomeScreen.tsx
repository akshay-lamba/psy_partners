import React from 'react';
import { Layers, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import Navbar from './Navbar';
import Footer from './Footer';
import PsiLogo from './PsiLogo';
import usePageSEO from '../hooks/usePageSEO';

export default function HomeScreen() {
  usePageSEO({
    title: "Psy Partners | The AI Transition System",
    description: "Board-level AI governance and transition readiness advisory services. From Governance Paralysis to Deployed Advantage."
  });

  return (
    <div className="w-full bg-void text-text-primary selection:bg-gold selection:text-void flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center relative px-6 pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0D0D0D_0%,#000000_100%)]"></div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="z-10 w-full max-w-6xl text-center"
          >
            <div className="flex flex-col items-center mb-12">
              <h2 className="font-display text-4xl text-white tracking-widest uppercase">Psy Partners</h2>
              <p className="font-mono text-xs text-text-muted tracking-[0.4em] uppercase mt-2">Transition. Not Transformation.</p>
            </div>

            <h1 className="font-serif italic text-3xl md:text-4xl text-gold mb-16 tracking-tight text-balance">
              The AI Transition System: From Governance Paralysis to Deployed Advantage
            </h1>

            <div className="grid md:grid-cols-2 gap-8 mb-20">
              <div className="glass-panel p-10 rounded-2xl border-white/5 flex flex-col items-center justify-center text-center">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-7xl font-display font-bold text-gold">95%</span>
                  <div className="text-left">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-white">Of AI Pilots Fail to</p>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-white">Reach Production</p>
                  </div>
                </div>
                <p className="text-text-muted font-light text-sm max-w-xs">
                  Most enterprises struggle to scale AI across functions despite high activity levels.
                </p>
              </div>

              <div className="glass-panel p-10 rounded-2xl border-white/5 flex flex-col items-center justify-center text-center">
                <h3 className="font-display text-xl text-gold uppercase tracking-widest mb-4">Governance is the Catalyst, Not the Brake</h3>
                <p className="text-text-muted font-light text-sm max-w-sm">
                  Clarity on risk allows boards to move with conviction rather than hesitation.
                </p>
              </div>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-20">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 border border-white/10 rounded-full flex items-center justify-center opacity-40">
                  <Layers className="text-white w-10 h-10" />
                </div>
                <h4 className="font-mono text-[10px] uppercase tracking-widest text-text-muted mb-2">Transformation</h4>
                <p className="text-xs text-text-muted font-light">Consultants advise, then leave. Executives delegate. Pilots stall.</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="font-serif italic text-2xl text-gold mb-4">vs</div>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 border border-gold rounded-full flex items-center justify-center bg-gold/5">
                  <Zap className="text-gold w-10 h-10" />
                </div>
                <h4 className="font-mono text-[10px] uppercase tracking-widest text-gold mb-2">Transition</h4>
                <p className="text-xs text-text-primary font-light">Executives become AI-native. Organizations deploy intelligence. Capabilities compound.</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* The Problem Section */}
        <section className="py-32 px-6 bg-charcoal border-y border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-mono text-[10px] text-gold uppercase tracking-[0.4em] mb-8">The Problem</h2>
            <h3 className="font-serif text-5xl md:text-7xl text-white italic mb-12">High AI activity. <br/>Zero AI impact.</h3>
            <div className="space-y-8 text-xl text-text-muted font-light leading-relaxed text-balance">
              <p>
                95% of AI pilots fail to reach production. Only one-third of enterprises have scaled AI across functions. 
                Boards are now accountable for AI decisions they don’t fully understand. Regulation is live. Investors are pricing AI governance maturity into valuations.
              </p>
              <p className="text-white font-medium">
                The technology is not broken. The model is.
              </p>
            </div>
          </div>
        </section>

        {/* The Answer Section */}
        <section className="py-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-mono text-[10px] text-gold uppercase tracking-[0.4em] mb-8">The Answer</h2>
            <h3 className="font-serif text-5xl md:text-7xl text-white italic mb-12">Three programs. <br/>One system.</h3>
            <p className="text-xl text-text-muted font-light leading-relaxed mb-16 text-balance">
              Psy Partners delivers three distinct, complementary programs targeting different buyers at different stages of the AI adoption challenge. 
              Together, they move an organization from uncertainty to deployed competitive advantage.
            </p>
          </div>
        </section>

        {/* Differentiation */}
        <section className="py-32 px-6 bg-charcoal border-y border-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="font-mono text-[10px] text-gold uppercase tracking-[0.4em] mb-8">Differentiation</h2>
              <h3 className="font-serif text-5xl text-white italic">What makes Psy Partners different</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <div key={i} className="p-8 glass-panel rounded-2xl border-white/5">
                  <h4 className="font-display text-gold uppercase tracking-widest mb-4 text-sm">{item.title}</h4>
                  <p className="text-sm text-text-muted font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-40 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(184,115,51,0.05),transparent_70%)]"></div>
          
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative overflow-hidden rounded-[2rem] border border-gold/20 bg-black p-12 md:p-20 text-center"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
              
              <div className="relative z-10">
                <h2 className="font-serif text-4xl md:text-6xl text-white italic mb-8 leading-tight">
                  Build your structural business advantage with Psy Partners.
                </h2>
                
                <div className="flex flex-col items-center gap-6">
                  <a 
                    href="https://b2006858-57c1-480a-9730-8e9f2057acb9.usrfiles.com/ugd/b20068_d95c2f34c0ca418f8121c9fa4bf965eb.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative px-12 py-5 bg-gold text-void font-mono text-xs uppercase tracking-[0.3em] font-bold rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95"
                  >
                    <span className="relative z-10">Download Strategy Deck</span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity"></div>
                  </a>
                  
                  <p className="font-serif italic text-text-muted/60 text-sm">
                    Psy Partners — Transition. Not Transformation.
                  </p>
                </div>
              </div>

              {/* Edge glow */}
              <div className="absolute inset-0 border border-gold/10 rounded-[2rem] group-hover:border-gold/30 transition-colors duration-700"></div>
            </motion.div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
