import React from 'react';
import { Eye } from 'lucide-react';
import { motion } from 'motion/react';
import Navbar from './Navbar';
import Footer from './Footer';
import usePageSEO from '../hooks/usePageSEO';

export default function BoardGuardScreen() {
  usePageSEO({
    title: "BoardGuard AI | Psy Partners",
    description: "AI Governance & Navigation Program: Installing sector-specific governance rails that remove uncertainty."
  });

  return (
    <div className="w-full bg-void text-text-primary selection:bg-gold selection:text-void flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow flex flex-col justify-center py-40 px-6">
        <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-6 mb-8">
              <span className="font-serif text-6xl text-gold/20">01</span>
              <div>
                <h1 className="font-serif text-5xl md:text-6xl text-white italic mb-2">BoardGuard AI</h1>
                <p className="font-mono text-[10px] text-gold uppercase tracking-[0.3em]">AI Governance & Navigation Program</p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="p-8 glass-panel border-l-4 border-gold">
                <p className="text-text-muted font-light leading-relaxed mb-4">
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
                <p className="font-mono text-[10px] text-gold uppercase tracking-widest mb-2">Program Deliverables & Outcomes</p>
                <div className="overflow-hidden rounded-xl border border-white/5">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-white/5 font-mono text-[8px] uppercase tracking-widest text-text-muted">
                      <tr>
                        <th className="px-4 py-2">Deliverable</th>
                        <th className="px-4 py-2">Board Outcome</th>
                      </tr>
                    </thead>
                    <tbody className="font-light">
                      <tr className="border-t border-white/5">
                        <td className="px-4 py-3 text-white">Risk Landscape</td>
                        <td className="px-4 py-3 text-text-muted">Material risk clarity vs. regulatory noise</td>
                      </tr>
                      <tr className="border-t border-white/5">
                        <td className="px-4 py-3 text-white">Approval Frameworks</td>
                        <td className="px-4 py-3 text-text-muted">Blind-spot-free capital allocation</td>
                      </tr>
                      <tr className="border-t border-white/5">
                        <td className="px-4 py-3 text-white">Incident Protocols</td>
                        <td className="px-4 py-3 text-text-muted">Legally defensible sector-calibrated response</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="pt-8 border-t border-white/5">
                <p className="text-xl text-white font-serif italic mb-6 text-balance">
                  “We know where to place bets, when, and why — and we have the governance in place to move fast without recklessness.”
                </p>
                <div className="flex gap-12">
                  <div className="glass-panel p-4 rounded-xl border-white/5">
                    <p className="font-mono text-[8px] text-text-muted uppercase tracking-widest mb-1">Primary Buyer</p>
                    <p className="text-xs text-white">Board / Risk Committee</p>
                  </div>
                  <div className="glass-panel p-4 rounded-xl border-white/5">
                    <p className="font-mono text-[8px] text-text-muted uppercase tracking-widest mb-1">Primary Outcome</p>
                    <p className="text-xs text-gold">Governed Conviction</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative p-12 glass-panel rounded-3xl overflow-hidden border-gold/10"
          >
            <div className="absolute top-0 right-0 p-8">
              <span className="font-mono text-[10px] text-gold uppercase tracking-widest">Target: Board Chairs · Risk & Audit Committees</span>
            </div>
            
            <div className="flex flex-col items-center gap-12 pt-12">
              <div className="w-32 h-32 rounded-full border border-gold/30 flex items-center justify-center relative">
                <Eye className="text-gold w-16 h-16" />
                <div className="absolute inset-0 border border-gold/10 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
              </div>
              <div className="text-center space-y-4">
                <h4 className="font-display text-lg text-white uppercase tracking-widest">Strategic Conviction</h4>
                <p className="text-sm text-text-muted font-light">Establishes sector-specific governance rails to remove uncertainty and approve investments without blind spots.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
