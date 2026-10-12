import React from 'react';
import { Eye } from 'lucide-react';
import { motion } from 'motion/react';
import Navbar from './Navbar';
import Footer from './Footer';
import usePageSEO from '../hooks/usePageSEO';

export default function BoardGuardScreen() {
  usePageSEO({
    title: "BoardGuard AI | AI Governance & Navigation Program — Psy Partners",
    description: "AI Governance & Navigation Program: Installing sector-specific governance rails that remove uncertainty and empower boards with conviction.",
    keywords: "BoardGuard AI, AI Governance, Board Risk Committee, Board of Directors AI Oversight, EU AI Act, Material Risk Landscape",
    canonicalPath: "/boardguard",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.psy.partners/boardguard#service",
      "name": "BoardGuard AI",
      "serviceType": "AI Governance Advisory",
      "provider": {
        "@id": "https://www.psy.partners/#organization"
      },
      "description": "AI Governance & Navigation Program installing sector-specific governance rails that remove uncertainty and empower boards to move with conviction.",
      "audience": {
        "@type": "Audience",
        "audienceType": "Board Chairs, Non-Executive Directors, Risk & Audit Committees"
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
              <span className="font-serif text-5xl sm:text-6xl text-gold/20">01</span>
              <div>
                <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white italic mb-1 sm:mb-2 leading-tight">
                  BoardGuard AI
                </h1>
                <p className="font-mono text-[9px] sm:text-[10px] text-gold uppercase tracking-[0.25em] sm:tracking-[0.3em]">
                  AI Governance & Navigation Program
                </p>
              </div>
            </div>
            
            <div className="space-y-6 sm:space-y-8">
              <div className="p-6 sm:p-8 glass-panel border-l-4 border-gold rounded-r-2xl">
                <p className="text-text-muted font-light leading-relaxed mb-4 text-sm sm:text-base">
                  Boards that move slowly on AI are not being prudent. They are ceding ground. BoardGuard AI installs governance rails that are appropriate, defensible, and sector-specific — removing the uncertainty that causes boards to hesitate.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-white/5">
                  <div>
                    <h4 className="font-mono text-[10px] text-gold uppercase tracking-widest mb-2">The Governance Gap</h4>
                    <ul className="text-xs text-text-muted space-y-2 font-light">
                      <li>• <span className="text-white">Governance Paralysis:</span> Unresolved questions stalling strategic decisions.</li>
                      <li>• <span className="text-white">External Accountability:</span> EU AI Act and SEC scrutiny making boards personally liable.</li>
                      <li>• <span className="text-white">AI-Native Capability:</span> Moving beyond generic consulting to true executive fluency.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-mono text-[10px] text-gold uppercase tracking-widest mb-2">The BoardGuard Solution</h4>
                    <ul className="text-xs text-text-muted space-y-2 font-light">
                      <li>• <span className="text-white">Sector Architecture:</span> Industry-aligned risk landscapes and investment frameworks.</li>
                      <li>• <span className="text-white">Governed Conviction:</span> Clarity to approve AI investments without blind spots.</li>
                      <li>• <span className="text-white">"Move Fast Without Recklessness":</span> Knowing where to place bets with speed.</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                <p className="font-mono text-[10px] text-gold uppercase tracking-widest mb-1 sm:mb-2">
                  Program Deliverables & Outcomes
                </p>
                <div className="overflow-x-auto rounded-xl border border-white/5">
                  <table className="w-full text-left text-xs min-w-[420px] sm:min-w-0">
                    <thead className="bg-white/5 font-mono text-[8px] sm:text-[9px] uppercase tracking-widest text-text-muted">
                      <tr>
                        <th className="px-4 py-2.5">Deliverable</th>
                        <th className="px-4 py-2.5">Board Outcome</th>
                      </tr>
                    </thead>
                    <tbody className="font-light">
                      <tr className="border-t border-white/5">
                        <td className="px-4 py-3 text-white font-medium">Risk Landscape</td>
                        <td className="px-4 py-3 text-text-muted">Material risk clarity vs. regulatory noise</td>
                      </tr>
                      <tr className="border-t border-white/5">
                        <td className="px-4 py-3 text-white font-medium">Approval Frameworks</td>
                        <td className="px-4 py-3 text-text-muted">Blind-spot-free capital allocation</td>
                      </tr>
                      <tr className="border-t border-white/5">
                        <td className="px-4 py-3 text-white font-medium">Incident Protocols</td>
                        <td className="px-4 py-3 text-text-muted">Legally defensible sector-calibrated response</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="pt-6 sm:pt-8 border-t border-white/5">
                <p className="text-lg sm:text-xl text-white font-serif italic mb-6 text-balance leading-relaxed">
                  “We know where to place bets, when, and why — and we have the governance in place to move fast without recklessness.”
                </p>
                <div className="flex flex-wrap gap-4 sm:gap-8">
                  <div className="glass-panel p-4 rounded-xl border-white/5 flex-1 min-w-[140px]">
                    <p className="font-mono text-[8px] text-text-muted uppercase tracking-widest mb-1">Primary Buyer</p>
                    <p className="text-xs sm:text-sm text-white font-medium">Board / Risk Committee</p>
                  </div>
                  <div className="glass-panel p-4 rounded-xl border-white/5 flex-1 min-w-[140px]">
                    <p className="font-mono text-[8px] text-text-muted uppercase tracking-widest mb-1">Primary Outcome</p>
                    <p className="text-xs sm:text-sm text-gold font-medium">Governed Conviction</p>
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
                Target: Board Chairs · Risk & Audit Committees
              </span>
            </div>
            
            <div className="flex flex-col items-center gap-8 sm:gap-12 pt-4 sm:pt-12">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-gold/30 flex items-center justify-center relative">
                <Eye className="text-gold w-12 h-12 sm:w-16 sm:h-16" />
                <div className="absolute inset-0 border border-gold/10 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
              </div>
              <div className="text-center space-y-3 sm:space-y-4 max-w-sm">
                <h4 className="font-display text-base sm:text-lg text-white uppercase tracking-widest">Strategic Conviction</h4>
                <p className="text-xs sm:text-sm text-text-muted font-light leading-relaxed">
                  Establishes sector-specific governance rails to remove uncertainty and approve investments without blind spots.
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
