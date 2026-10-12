import React from 'react';
import { Layout, Zap, Users, Cpu, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import Navbar from './Navbar';
import Footer from './Footer';
import usePageSEO from '../hooks/usePageSEO';

export default function TransitionScreen() {
  usePageSEO({
    title: "Transition AI | AI Operating Model Alignment — Psy Partners",
    description: "AI Operating Model Alignment: Redesign enterprise workflows, data architecture, and talent structures for AI-native execution readiness.",
    keywords: "Transition AI, AI Operating Model, CAIO, CIO, COO, Enterprise AI Scaling, AI Capability Blueprint, Strategic Blocker Map",
    canonicalPath: "/transition",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.psy.partners/transition#service",
      "name": "Transition AI",
      "serviceType": "Enterprise AI Operating Model Alignment",
      "provider": {
        "@id": "https://www.psy.partners/#organization"
      },
      "description": "Evaluates organizational readiness and aligns data, talent, and workflows for sustained AI-native execution.",
      "audience": {
        "@type": "Audience",
        "audienceType": "Chief AI Officers, COOs, CIOs, Heads of Transformation"
      }
    }
  });

  return (
    <div className="w-full bg-void text-text-primary selection:bg-gold selection:text-void flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow flex flex-col justify-center py-28 sm:py-36 md:py-40 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="order-2 lg:order-1 relative p-6 sm:p-12 glass-panel rounded-3xl overflow-hidden border-gold/10"
          >
            <div className="sm:absolute sm:top-0 sm:left-0 sm:p-8 mb-6 sm:mb-0 text-center sm:text-left">
              <span className="font-mono text-[9px] sm:text-[10px] text-gold uppercase tracking-widest">
                Target: CAIO · COO · CIO
              </span>
            </div>

            <div className="flex flex-col items-center gap-8 sm:gap-12 pt-4 sm:pt-12">
              <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-[240px] sm:max-w-xs">
                <div className="aspect-square border border-white/10 rounded-xl flex items-center justify-center bg-white/5">
                  <Layout className="text-text-muted w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div className="aspect-square border border-gold rounded-xl flex items-center justify-center bg-gold/10">
                  <Zap className="text-gold w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div className="aspect-square border border-white/10 rounded-xl flex items-center justify-center bg-white/5">
                  <Users className="text-text-muted w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div className="aspect-square border border-white/10 rounded-xl flex items-center justify-center bg-white/5">
                  <Cpu className="text-text-muted w-6 h-6 sm:w-8 sm:h-8" />
                </div>
              </div>
              <div className="text-center space-y-3 sm:space-y-4 max-w-sm">
                <h4 className="font-display text-base sm:text-lg text-white uppercase tracking-widest">Execution Readiness</h4>
                <p className="text-xs sm:text-sm text-text-muted font-light leading-relaxed">
                  Redesigns the operating model to align data, talent, and workflows for AI-native performance.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
              <span className="font-serif text-5xl sm:text-6xl text-gold/20">02</span>
              <div>
                <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white italic mb-1 sm:mb-2 leading-tight">
                  Transition AI
                </h1>
                <p className="font-mono text-[9px] sm:text-[10px] text-gold uppercase tracking-[0.25em] sm:tracking-[0.3em]">
                  AI Operating Model Alignment
                </p>
              </div>
            </div>
            
            <div className="space-y-6 sm:space-y-8">
              <div className="p-6 sm:p-8 glass-panel border-l-4 border-gold rounded-r-2xl">
                <p className="text-text-muted font-light leading-relaxed mb-6 text-sm sm:text-base">
                  Most organizations try to deploy AI on top of fragmented systems and legacy workflows. Transition AI redesigns the operating model to align data, talent, and workflows for AI-native performance.
                </p>
                <div className="grid grid-cols-1 gap-6">
                  <h4 className="font-mono text-[10px] text-gold uppercase tracking-widest">The Three Lenses of Diagnosis</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { title: "Organizational Readiness", desc: "Evaluates if data, processes, architecture, and talent are capable of deploying AI at scale." },
                      { title: "Market Intelligence", desc: "Quantifies competitive positioning and sector-specific maturity levels vs. market peers." },
                      { title: "Operating Model Redesign", desc: "Identifies human bottlenecks and decision flows to create an AI-native accountability structure." }
                    ].map((lens, i) => (
                      <div key={i} className="p-4 bg-white/5 rounded-xl border border-white/5">
                        <p className="text-[10px] text-white font-medium mb-1 uppercase tracking-wider">{lens.title}</p>
                        <p className="text-[10px] text-text-muted font-light leading-relaxed">{lens.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                <p className="font-mono text-[10px] text-gold uppercase tracking-widest mb-1 sm:mb-2">
                  Deliverables for Execution
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { title: "Strategic Blocker Map", desc: "Identifies the top 3-6 organizational obstacles and the business cost of delay." },
                    { title: "AI Capability Blueprint", desc: "A sector-aligned guide detailing whether to build, buy, or partner." },
                    { title: "Execution Roadmap", desc: "A sequenced, owned plan with clear decision gates for sustained progress." }
                  ].map((del, i) => (
                    <div key={i} className="flex flex-col gap-2 p-3 bg-white/[0.02] rounded-xl border border-white/5">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="text-gold w-4 h-4 shrink-0" />
                        <span className="text-xs text-white font-medium">{del.title}</span>
                      </div>
                      <p className="text-[10px] text-text-muted font-light pl-6 leading-relaxed">{del.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 sm:pt-8 border-t border-white/5">
                <p className="text-lg sm:text-xl text-white font-serif italic mb-6 text-balance leading-relaxed">
                  “Our organization is now built to extract value from AI.”
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                  <div className="glass-panel p-4 rounded-xl border-white/5">
                    <p className="font-mono text-[8px] text-text-muted uppercase tracking-widest mb-1">Stakeholder</p>
                    <p className="text-xs sm:text-sm text-white font-medium">CAIO / COO / CIO</p>
                  </div>
                  <div className="glass-panel p-4 rounded-xl border-white/5">
                    <p className="font-mono text-[8px] text-text-muted uppercase tracking-widest mb-1">Primary Accountability</p>
                    <p className="text-xs sm:text-sm text-white font-medium">Scaling AI Operations</p>
                  </div>
                  <div className="glass-panel p-4 rounded-xl border-white/5">
                    <p className="font-mono text-[8px] text-text-muted uppercase tracking-widest mb-1">Program Outcome</p>
                    <p className="text-xs sm:text-sm text-gold font-medium">Unified Operating System</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
