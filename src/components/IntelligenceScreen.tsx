import React from 'react';
import { motion } from 'motion/react';
import { FileText, ArrowRight } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import usePageSEO from '../hooks/usePageSEO';
import { trackDownload } from '../utils/analytics';

const signals = [
  {
    id: "008",
    author: "Akshay Lamba",
    domain: "Business AI",
    pdfUrl: "https://42ae7d60-8d7b-4cc0-be9e-7f4325977122.usrfiles.com/ugd/42ae7d_f6554051e29347bca39074a59d2f0d07.pdf",
    title: "Orchestrating Enterprise Maturation",
    excerpt: "Fifty years of systemic evolution naturally culminates in active operational orchestration. Moving from passive systems of record to active systems of agency, Enterprise Resource Orchestration (ERO) animates accumulated organizational knowledge into autonomous execution.",
  },
  {
    id: "007",
    author: "Akshay Lamba",
    domain: "Business AI",
    pdfUrl: "https://b2006858-57c1-480a-9730-8e9f2057acb9.usrfiles.com/ugd/b20068_27b6069b1793426684a98caff837f5ec.pdf",
    title: "The Efficiency Illusion",
    excerpt: "Treating AI as a human replacement is a profound strategic fallacy that destroys competitive moats and forces enterprises into the 'Pure Efficiency Trap.' True differentiation and long-term viability come from building localized Sovereign Knowledge Systems to leverage and scale elite human talent.",
  },
  {
    id: "006",
    author: "Gautam Mohanty",
    domain: "Real Estate AI",
    pdfUrl: "https://b2006858-57c1-480a-9730-8e9f2057acb9.usrfiles.com/ugd/b20068_402ef1882bfd4e6682b45c8f153339c2.pdf",
    title: "The K Human",
    excerpt: "The K-Economy divides us now. Multipliers leverage AI to keep their people, capture deep context, and grow exponentially, while Shrinkers cut headcount, bleed institutional context, and become hollow. Secure your position on the upper stroke with five tactical human moves.",
  },
  {
    id: "005",
    author: "Dr. Nicolas Hamelin",
    domain: "Education AI",
    pdfUrl: "https://b2006858-57c1-480a-9730-8e9f2057acb9.usrfiles.com/ugd/b20068_249559aca302492e9ca153264d5102a9.pdf",
    title: "The CEO's Mandate",
    excerpt: "95% of AI pilots die in the dark because enterprises attempt to delegate thinking to machines. The true mandate of a CEO is to prevent 'Context Leak' — retaining your people's deep, unwritten institutional context to construct a proprietary, compounding Intellectual Moat.",
  },
  {
    id: "004",
    author: "Akshay Lamba",
    domain: "Business AI",
    pdfUrl: "https://b2006858-57c1-480a-9730-8e9f2057acb9.usrfiles.com/ugd/b20068_33c1ee7f74bd4f858edd4fdd841cc97c.pdf",
    title: "Your Data Never Leaves Your Building",
    excerpt: "You own the intelligence outright — the hardware, the model, the outputs. It compounds in business value the longer you run it. Every competitor using rented cloud tools is feeding their business data to someone else's servers.",
  },
  {
    id: "003",
    author: "Gautam Mohanty",
    domain: "Real Estate AI",
    pdfUrl: "https://b2006858-57c1-480a-9730-8e9f2057acb9.usrfiles.com/ugd/b20068_7908a710fe444ab2899aa30fbc6bfa57.pdf",
    title: "Sovereign AI Design",
    excerpt: "Instead of relying on external providers who can change rules or raise prices, a sovereign moat is built on a private, secure internal AI setup. This ensures that your most precious asset—your corporate intelligence—stays 'in your house' and remains safe from the outside world.",
  },
  {
    id: "002",
    author: "Akshay Lamba",
    domain: "Business AI",
    pdfUrl: "https://b2006858-57c1-480a-9730-8e9f2057acb9.usrfiles.com/ugd/b20068_002c510789154f0885f2ead1f13a31ef.pdf",
    title: "The Career Stack",
    excerpt: "Why every layer of the organization has the same AI story — and why every layer is wrong in the same way. Scaling judgment over output.",
  },
  {
    id: "001",
    author: "Dr. Nicolas Hamelin",
    domain: "Education AI",
    pdfUrl: "https://b2006858-57c1-480a-9730-8e9f2057acb9.usrfiles.com/ugd/b20068_cbb3d8eb8ac648538736b348c9dbba3f.pdf",
    title: "The AI Transition System",
    excerpt: "From Governance Paralysis to Deployed Advantage. A comprehensive framework for moving organizational intelligence from pilot stall to compounding capability.",
  }
];

export default function IntelligenceScreen() {
  const HERO_IMAGE = "https://static.wixstatic.com/media/b20068_a15c4f31a18c4955b9073845bed22101~mv2.jpg";

  usePageSEO({
    title: "POV | Transition Signals — Psy Partners",
    description: "Exclusive strategic points-of-view from Psy Partners leadership on Sovereign AI, Enterprise Resource Orchestration, and the AI Transition System.",
    keywords: "Transition Signals, Enterprise Resource Orchestration, Akshay Lamba, Gautam Mohanty, Dr. Nicolas Hamelin, AI Governance POV, Sovereign AI, The K Human, The Efficiency Illusion",
    canonicalPath: "/pov",
    image: HERO_IMAGE,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": "https://www.psy.partners/pov#collection",
      "url": "https://www.psy.partners/pov",
      "name": "Transition Signals POV — Psy Partners",
      "description": "Exclusive strategic points-of-view and executive research on Sovereign AI, Institutional Knowledge, and Enterprise Transition.",
      "publisher": {
        "@id": "https://www.psy.partners/#organization"
      },
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": signals.map((s, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "DigitalDocument",
            "name": `Transition Signal #${s.id}: ${s.title}`,
            "headline": s.title,
            "author": {
              "@type": "Person",
              "name": s.author,
              "jobTitle": `Managing Partner — ${s.domain}`
            },
            "description": s.excerpt,
            "url": s.pdfUrl,
            "encodingFormat": "application/pdf"
          }
        }))
      }
    }
  });

  return (
    <div className="w-full bg-void text-text-primary selection:bg-gold selection:text-void flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-24 sm:pt-32">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 md:px-8 pb-16 sm:pb-20 border-b border-white/5 bg-[radial-gradient(circle_at_top_right,rgba(184,115,51,0.05),transparent_40%)]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left"
              >
                <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[0.95] sm:leading-[0.9] mb-6 sm:mb-8">
                  TRANSITION <br /> <span className="text-gold">SIGNALS.</span>
                </h1>
                <div className="flex items-center justify-center lg:justify-start gap-6 mb-4">
                  <p className="max-w-2xl font-serif text-lg sm:text-xl text-text-muted leading-relaxed">
                    We move organizations from Governance Paralysis to Deployed Advantage. No fluff. No generic consulting. Just sector-specific intelligence terminals.
                  </p>
                </div>
              </motion.div>

              {/* Framed Image: Classy subtle minimalist framing with B&W to color hover effect */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="lg:col-span-5 flex justify-center lg:justify-end w-full"
              >
                <div className="relative p-2.5 sm:p-3 bg-void border border-white/10 rounded-lg group max-w-md lg:max-w-lg w-full shadow-2xl shadow-black/80 transition-all duration-500 hover:border-gold/30">
                  {/* Outer accent corner lines for classy framing */}
                  <div className="absolute top-0 left-0 w-5 sm:w-6 h-5 sm:h-6 border-t border-l border-gold/40 group-hover:border-gold transition-colors duration-700"></div>
                  <div className="absolute top-0 right-0 w-5 sm:w-6 h-5 sm:h-6 border-t border-r border-gold/40 group-hover:border-gold transition-colors duration-700"></div>
                  <div className="absolute bottom-0 left-0 w-5 sm:w-6 h-5 sm:h-6 border-b border-l border-gold/40 group-hover:border-gold transition-colors duration-700"></div>
                  <div className="absolute bottom-0 right-0 w-5 sm:w-6 h-5 sm:h-6 border-b border-r border-gold/40 group-hover:border-gold transition-colors duration-700"></div>
                  
                  <div className="relative overflow-hidden rounded border border-white/5 bg-void">
                    <img 
                      src={HERO_IMAGE} 
                      alt="Psy Partners Sovereign AI Governance Transition" 
                      referrerPolicy="no-referrer"
                      className="w-full h-auto block grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out scale-100 group-hover:scale-[1.01]"
                    />
                    {/* Subtle border overlay */}
                    <div className="absolute inset-0 border border-white/5 pointer-events-none"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Transition Signals Grid */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(184,115,51,0.03),transparent_50%)]"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-12 sm:mb-20">
              <h2 className="font-display text-2xl sm:text-4xl text-white tracking-widest uppercase mb-3 sm:mb-4">
                TRANSITION SIGNALS
              </h2>
              <p className="font-mono text-[10px] sm:text-xs text-text-muted tracking-[0.35em] sm:tracking-[0.4em] uppercase">
                Intelligence Drops / Point of View
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {signals.map((signal, idx) => (
                <motion.div 
                  key={signal.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] hover:border-gold/30 hover:bg-white/[0.05] transition-all duration-700 p-6 sm:p-8 md:p-10 flex flex-col h-full"
                >
                  <div className="absolute top-0 right-0 p-6 sm:p-8">
                    <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-gold/10 group-hover:text-gold/25 transition-colors duration-500" />
                  </div>
                  
                  <div className="flex flex-col h-full relative z-10">
                    <div className="font-mono text-gold mb-2 text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-semibold">
                       Transition Signal #{signal.id}
                    </div>
                    
                    <div className="mb-6 sm:mb-8">
                      <h3 className="font-display text-xl sm:text-2xl text-white group-hover:text-gold transition-colors duration-500 leading-tight">
                        {signal.author}
                      </h3>
                      <div className="font-mono text-[9px] sm:text-[10px] text-text-muted uppercase tracking-[0.25em] sm:tracking-[0.3em] mt-1">
                        Managing Partner — {signal.domain}
                      </div>
                    </div>

                    <div className="mb-8 sm:mb-10 flex-grow">
                      <h4 className="font-serif text-lg sm:text-xl text-white/95 mb-3 sm:mb-4 italic leading-snug">
                        "{signal.title}"
                      </h4>
                      <p className="font-serif text-base sm:text-lg text-text-muted leading-relaxed">
                        {signal.excerpt}
                      </p>
                    </div>
                    
                    <div className="mt-auto pt-6 border-t border-white/5">
                      {signal.pdfUrl ? (
                        <a 
                          href={signal.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => trackDownload(`Transition Signal #${signal.id} - ${signal.title}`, signal.pdfUrl)}
                          className="inline-flex items-center justify-center gap-2.5 sm:gap-3 text-white/90 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] group/link hover:text-gold hover:border-gold/40 transition-colors px-4 sm:px-5 py-2.5 border border-white/10 rounded-full bg-white/5 min-h-[44px]"
                          aria-label={`Download Transition Signal #${signal.id} PDF`}
                        >
                          Download POV <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                        </a>
                      ) : (
                        <button 
                          disabled
                          className="inline-flex items-center justify-center gap-3 text-white/40 font-mono text-[10px] uppercase tracking-[0.2em] px-4 py-2.5 border border-white/5 rounded-full cursor-not-allowed min-h-[44px]"
                        >
                          Coming Soon <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
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
