import React from 'react';
import { motion } from 'motion/react';
import { FileText, ArrowRight } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import usePageSEO from '../hooks/usePageSEO';

const signals = [
  {
    id: "001",
    author: "Nick Hamelin",
    pdfUrl: "https://b2006858-57c1-480a-9730-8e9f2057acb9.usrfiles.com/ugd/b20068_cbb3d8eb8ac648538736b348c9dbba3f.pdf",
    title: "The AI Transition System",
    excerpt: "From Governance Paralysis to Deployed Advantage. A comprehensive framework for moving organizational intelligence from pilot stall to compounding capability.",
  },
  {
    id: "002",
    author: "Akshay Lamba",
    pdfUrl: "https://b2006858-57c1-480a-9730-8e9f2057acb9.usrfiles.com/ugd/b20068_002c510789154f0885f2ead1f13a31ef.pdf",
    title: "The Career Stack",
    excerpt: "Why every layer of the organization has the same AI story — and why every layer is wrong in the same way. Scaling judgment over output.",
  }
];

export default function IntelligenceScreen() {
  usePageSEO({
    title: "POV | Transition Signals",
    description: "Exclusive strategic points-of-view from Psy Partners' leadership on Sovereign AI, Institutional Knowledge, and the Transition System."
  });

  return (
    <div className="w-full bg-void text-text-primary selection:bg-gold selection:text-void flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-32">
        {/* Hero Section */}
        <section className="px-6 pb-20 border-b border-white/5 bg-[radial-gradient(circle_at_top_right,rgba(197,160,89,0.05),transparent_40%)]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[0.9] mb-8">
                TRANSITION <br /> <span className="text-gold">SIGNALS.</span>
              </h1>
              <p className="max-w-2xl font-serif text-xl text-text-muted leading-relaxed">
                We move organizations from Governance Paralysis to Deployed Advantage. No fluff. No generic consulting. Just sector-specific intelligence terminals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Transition Signals Grid */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(197,160,89,0.03),transparent_50%)]"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <h2 className="font-display text-4xl text-white tracking-widest uppercase mb-4">TRANSITION SIGNALS</h2>
              <p className="font-mono text-[10px] text-text-muted tracking-[0.4em] uppercase">Intelligence Drops / Point of View</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
              {signals.map((signal, idx) => (
                <motion.div 
                  key={signal.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] hover:border-gold/30 hover:bg-white/[0.05] transition-all duration-700 p-8 flex flex-col h-full"
                >
                  <div className="absolute top-0 right-0 p-6">
                    <FileText className="w-8 h-8 text-gold/20 group-hover:text-gold transition-colors duration-500" />
                  </div>
                  
                  <div className="flex flex-col h-full relative z-10">
                    <div className="font-mono text-gold mb-4 text-[9px] tracking-widest uppercase flex items-center gap-2">
                       <span>#{signal.id}</span>
                       <span className="w-4 h-[1px] bg-gold/30"></span>
                       <span>{signal.author}</span>
                    </div>
                    <h3 className="font-display text-xl text-white mb-4 group-hover:text-gold transition-colors line-clamp-2">{signal.title}</h3>
                    <p className="font-serif text-sm text-text-muted mb-8 flex-grow leading-relaxed">
                      {signal.excerpt}
                    </p>
                    
                    <div className="flex flex-col gap-3 mt-auto">
                      {(signal as any).pdfUrl ? (
                        <a 
                          href={(signal as any).pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/60 font-mono text-[9px] uppercase tracking-widest flex items-center gap-2 hover:text-gold transition-colors"
                        >
                          Deep Dive <ArrowRight className="w-3 h-3" />
                        </a>
                      ) : (
                        <button className="text-white/60 font-mono text-[9px] uppercase tracking-widest flex items-center gap-2 hover:text-gold transition-colors">
                          Deep Dive <ArrowRight className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
