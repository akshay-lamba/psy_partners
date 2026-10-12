import React from 'react';
import { Rocket, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import Navbar from './Navbar';
import Footer from './Footer';
import usePageSEO from '../hooks/usePageSEO';

export default function VelocityScreen() {
  usePageSEO({
    title: "Velocity AI | Executive AI Acceleration Program — Psy Partners",
    description: "Executive AI Acceleration Program: Integrates AI into live CXO workflows for documented 40%+ operational velocity improvement.",
    keywords: "Velocity AI, Executive AI Acceleration, CXO AI Workflows, CEO AI, CFO AI, CMO AI, AI Deployment, Enterprise AI Velocity",
    canonicalPath: "/velocity",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.psy.partners/velocity#service",
      "name": "Velocity AI",
      "serviceType": "Executive AI Acceleration",
      "provider": {
        "@id": "https://www.psy.partners/#organization"
      },
      "description": "Executive AI Acceleration Program integrating AI into live CXO workflows to achieve 40%+ documented velocity improvement.",
      "audience": {
        "@type": "Audience",
        "audienceType": "CEOs, CFOs, CMOs, Executive Leadership"
      }
    }
  });

  return (
    <div className="w-full bg-void text-text-primary selection:bg-gold selection:text-void flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow flex flex-col justify-center py-28 sm:py-36 md:py-40 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
              <span className="font-serif text-5xl sm:text-6xl text-gold/20">03</span>
              <div>
                <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white italic mb-1 sm:mb-2 leading-tight">
                  Velocity AI
                </h1>
                <p className="font-mono text-[9px] sm:text-[10px] text-gold uppercase tracking-[0.25em] sm:tracking-[0.3em]">
                  Executive AI Acceleration Program
                </p>
              </div>
            </div>
            
            <div className="space-y-6 sm:space-y-8">
              <div className="p-6 sm:p-8 glass-panel border-l-4 border-gold rounded-r-2xl">
                <p className="text-text-muted font-light leading-relaxed mb-6 text-sm sm:text-base">
                  Most AI programs optimize tasks, run pilots, produce demos. They don’t change competitive dynamics. Velocity AI integrates AI into live CXO workflows to achieve documented velocity improvement.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-mono text-[10px] text-gold uppercase tracking-widest mb-3">The Deployment Gap</h4>
                    <p className="text-xs text-text-muted font-light leading-relaxed">
                      95% of AI pilots fail to reach production. The deployment model is broken, not the technology. Generic tools fail because they are not calibrated to specific sector roles or workflows.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-mono text-[10px] text-gold uppercase tracking-widest mb-3">The Velocity Framework</h4>
                    <ul className="text-xs text-text-muted space-y-2 font-light">
                      <li>• <span className="text-white">Sector-Aligned Mapping:</span> Identifying leadership gaps in actual work patterns.</li>
                      <li>• <span className="text-white">Live Workflow Integration:</span> Agnostic tool selection deployed directly into systems.</li>
                      <li>• <span className="text-white">40%+ Velocity Improvement:</span> Sustained gains benchmarked against industry peers.</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                <p className="font-mono text-[10px] text-gold uppercase tracking-widest mb-1 sm:mb-2">
                  From Uncertainty to Market Dominance
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-2">
                  {[
                    { title: "BoardGuard AI", focus: "Governance", outcome: "Strategic Conviction" },
                    { title: "Transition AI", focus: "Operating Model", outcome: "Execution Readiness" },
                    { title: "Velocity AI", focus: "Deployment", outcome: "Market Dominance" }
                  ].map((step, i) => (
                    <div key={i} className="p-3 bg-white/5 rounded-xl border border-white/5 text-center">
                      <p className="text-[8px] text-gold uppercase tracking-widest mb-1">{step.title}</p>
                      <p className="text-[10px] text-white font-medium mb-1">{step.focus}</p>
                      <p className="text-[8px] text-text-muted uppercase tracking-tighter">{step.outcome}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 sm:pt-8 border-t border-white/5">
                <p className="text-lg sm:text-xl text-white font-serif italic mb-6 text-balance leading-relaxed">
                  “We move faster than competitors can respond.”
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                  <div className="glass-panel p-4 rounded-xl border-white/5">
                    <p className="font-mono text-[8px] text-text-muted uppercase tracking-widest mb-1">Primary Buyer</p>
                    <p className="text-xs sm:text-sm text-white font-medium">CEO / CFO / CMO</p>
                  </div>
                  <div className="glass-panel p-4 rounded-xl border-white/5">
                    <p className="font-mono text-[8px] text-text-muted uppercase tracking-widest mb-1">Strategic Focus</p>
                    <p className="text-xs sm:text-sm text-white font-medium">Deployment</p>
                  </div>
                  <div className="glass-panel p-4 rounded-xl border-white/5">
                    <p className="font-mono text-[8px] text-text-muted uppercase tracking-widest mb-1">Primary Outcome</p>
                    <p className="text-xs sm:text-sm text-gold font-medium">Market Dominance</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative p-6 sm:p-12 glass-panel rounded-3xl overflow-hidden border-gold/10"
          >
            <div className="sm:absolute sm:top-0 sm:right-0 sm:p-8 mb-6 sm:mb-0 text-center sm:text-right">
              <span className="font-mono text-[9px] sm:text-[10px] text-gold uppercase tracking-widest">
                Target: C-suite & Senior Leaders
              </span>
            </div>

            <div className="flex flex-col items-center gap-8 sm:gap-12 pt-4 sm:pt-12">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-gold/30 flex items-center justify-center relative">
                <Rocket className="text-gold w-12 h-12 sm:w-16 sm:h-16" />
                <motion.div 
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-3 sm:-top-4 right-0"
                >
                  <TrendingUp className="text-gold w-6 h-6 sm:w-8 sm:h-8 opacity-50" />
                </motion.div>
              </div>
              <div className="text-center space-y-3 sm:space-y-4 max-w-sm">
                <h4 className="font-display text-base sm:text-lg text-white uppercase tracking-widest">Deployed Advantage</h4>
                <p className="text-xs sm:text-sm text-text-muted font-light leading-relaxed">
                  Integrates AI into live CXO workflows to achieve 40%+ documented velocity improvement.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
