import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { FileText, ArrowRight, Copy, Check, ExternalLink, Bookmark } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import usePageSEO from '../hooks/usePageSEO';
import { trackDownload, trackEvent } from '../utils/analytics';
import { SIGNALS } from '../data/signals';

export default function IntelligenceScreen() {
  const location = useLocation();
  const [highlightedId, setHighlightedId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const HERO_IMAGE = "https://static.wixstatic.com/media/b20068_a15c4f31a18c4955b9073845bed22101~mv2.jpg";

  // Check URL hash or query params on load to support direct deep linking within the page
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const querySignal = params.get('signal');
    const hash = location.hash.replace(/^#/, '');

    const targetId = querySignal || hash;
    if (targetId) {
      const clean = targetId.toLowerCase().replace(/^signal-/, '');
      const matched = SIGNALS.find(s => 
        s.id.toLowerCase() === clean || 
        parseInt(s.id, 10).toString() === clean ||
        s.slug.toLowerCase() === clean
      );

      if (matched) {
        setHighlightedId(matched.id);
        const timer = setTimeout(() => {
          const el = document.getElementById(`signal-${matched.id}`) || document.getElementById(matched.id);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 300);
        return () => clearTimeout(timer);
      }
    }
  }, [location]);

  usePageSEO({
    title: "POV | Transition Signals — Psy Partners",
    description: "Exclusive strategic points-of-view from Psy Partners leadership on Sovereign AI, Enterprise Resource Orchestration, and the AI Transition System. Explore deep links and terminal briefs.",
    keywords: "Transition Signals, Enterprise Resource Orchestration, Akshay Lamba, Gautam Mohanty, Dr. Nicolas Hamelin, AI Governance POV, Sovereign AI, The K Human, The Efficiency Illusion, Deeplinks",
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
        "itemListElement": SIGNALS.map((s, index) => ({
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
            "url": `https://www.psy.partners/pov/${s.id}`,
            "sameAs": s.pdfUrl,
            "encodingFormat": "application/pdf"
          }
        }))
      }
    }
  });

  const handleCopyCardLink = async (e: React.MouseEvent, signalId: string) => {
    e.preventDefault();
    e.stopPropagation();

    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://www.psy.partners';
    const link = `${origin}/pov/${signalId}`;

    try {
      await navigator.clipboard.writeText(link);
      setCopiedId(signalId);
      trackEvent('copy_deep_link_from_list', { signal_id: signalId, link });
      setTimeout(() => setCopiedId(null), 2500);
    } catch {
      const input = document.createElement('input');
      input.value = link;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      setCopiedId(signalId);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

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
                <div className="inline-flex items-center gap-2 self-center lg:self-start px-3.5 py-1.5 rounded-full border border-gold/30 bg-gold/5 font-mono text-[10px] sm:text-xs text-gold uppercase tracking-[0.2em] mb-4">
                  <Bookmark className="w-3 h-3" /> Direct Deep Links Active
                </div>
                <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[0.95] sm:leading-[0.9] mb-6 sm:mb-8">
                  TRANSITION <br /> <span className="text-gold">SIGNALS.</span>
                </h1>
                <div className="flex items-center justify-center lg:justify-start gap-6 mb-4">
                  <p className="max-w-2xl font-serif text-lg sm:text-xl text-text-muted leading-relaxed">
                    We move organizations from Governance Paralysis to Deployed Advantage. No fluff. No generic consulting. Just sector-specific intelligence terminals with direct executive deeplinks.
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
                Intelligence Drops / Point of View / Direct Deeplinks
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {SIGNALS.map((signal, idx) => {
                const isHighlighted = highlightedId === signal.id;
                const isCopied = copiedId === signal.id;

                return (
                  <motion.div 
                    key={signal.id}
                    id={`signal-${signal.id}`}
                    data-slug={signal.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.06 }}
                    className={`group relative overflow-hidden rounded-2xl border transition-all duration-700 p-6 sm:p-8 md:p-10 flex flex-col h-full scroll-mt-32 ${
                      isHighlighted
                        ? 'border-gold bg-gold/[0.08] shadow-[0_0_30px_rgba(184,115,51,0.3)] ring-1 ring-gold'
                        : 'border-white/5 bg-white/[0.02] hover:border-gold/30 hover:bg-white/[0.05]'
                    }`}
                  >
                    <div className="absolute top-0 right-0 p-6 sm:p-8 flex items-center gap-2">
                      {/* Copy Direct Deep Link Button on Card */}
                      <button
                        type="button"
                        onClick={(e) => handleCopyCardLink(e, signal.id)}
                        className="p-2 rounded-lg bg-white/5 hover:bg-gold/20 text-text-muted hover:text-gold transition-colors"
                        title={`Copy direct deep link for Signal #${signal.id}`}
                        aria-label={`Copy direct deep link for Signal #${signal.id}`}
                      >
                        {isCopied ? (
                          <Check className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>

                      <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-gold/10 group-hover:text-gold/25 transition-colors duration-500" />
                    </div>
                    
                    <div className="flex flex-col h-full relative z-10">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-mono text-gold text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-semibold">
                          Transition Signal #{signal.id}
                        </span>
                        {isCopied && (
                          <span className="font-mono text-[10px] text-emerald-400 tracking-wider animate-pulse">
                            • Link Copied!
                          </span>
                        )}
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
                        <Link 
                          to={`/pov/${signal.id}`}
                          className="block group/title"
                        >
                          <h4 className="font-serif text-lg sm:text-xl text-white/95 mb-3 sm:mb-4 italic leading-snug group-hover/title:text-gold transition-colors">
                            "{signal.title}"
                          </h4>
                        </Link>
                        <p className="font-serif text-base sm:text-lg text-text-muted leading-relaxed">
                          {signal.excerpt}
                        </p>
                      </div>
                      
                      <div className="mt-auto pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
                        {/* Direct Deep Link button */}
                        <Link
                          to={`/pov/${signal.id}`}
                          className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-gold hover:text-white transition-colors py-2"
                        >
                          Deep Dive <ExternalLink className="w-3 h-3" />
                        </Link>

                        {/* PDF Download Link */}
                        {signal.pdfUrl ? (
                          <a 
                            href={signal.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => trackDownload(`Transition Signal #${signal.id} - ${signal.title}`, signal.pdfUrl)}
                            className="inline-flex items-center justify-center gap-2 sm:gap-2.5 text-white/90 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] group/link hover:text-gold hover:border-gold/40 transition-colors px-4 py-2 border border-white/10 rounded-full bg-white/5 min-h-[40px]"
                            aria-label={`Download Transition Signal #${signal.id} PDF`}
                          >
                            PDF <ArrowRight className="w-3 h-3 transition-transform group-hover/link:translate-x-1" />
                          </a>
                        ) : (
                          <button 
                            disabled
                            className="inline-flex items-center justify-center gap-2 text-white/40 font-mono text-[10px] uppercase tracking-[0.18em] px-3.5 py-2 border border-white/5 rounded-full cursor-not-allowed min-h-[40px]"
                          >
                            Coming Soon
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
