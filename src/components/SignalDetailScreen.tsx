import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  FileText, 
  ArrowLeft, 
  ArrowRight, 
  Copy, 
  Check, 
  Download, 
  Share2, 
  Sparkles, 
  ShieldCheck, 
  ExternalLink 
} from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import usePageSEO from '../hooks/usePageSEO';
import { trackDownload, trackEvent } from '../utils/analytics';
import { SIGNALS, findSignal } from '../data/signals';

export default function SignalDetailScreen() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const signal = findSignal(id);

  // If signal not found, handle gracefully
  if (!signal) {
    return (
      <div className="w-full bg-void text-text-primary selection:bg-gold selection:text-void flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-32 pb-20 px-4 sm:px-6 md:px-8 flex items-center justify-center">
          <div className="max-w-xl mx-auto text-center py-16 px-6 sm:px-10 rounded-2xl border border-white/10 bg-white/[0.02]">
            <div className="inline-flex p-3 rounded-full bg-gold/10 text-gold mb-6">
              <FileText className="w-8 h-8" />
            </div>
            <h1 className="font-display text-3xl sm:text-4xl text-white mb-4">
              Signal Not Found
            </h1>
            <p className="font-serif text-text-muted text-base sm:text-lg mb-8 leading-relaxed">
              The requested transition signal <span className="text-gold font-mono">"{id}"</span> could not be resolved or may have been reorganized.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/pov"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gold text-void font-mono text-xs uppercase tracking-[0.2em] font-semibold hover:bg-gold-light transition-all"
              >
                <ArrowLeft className="w-4 h-4" /> View All POV Signals
              </Link>
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/10 text-white font-mono text-xs uppercase tracking-[0.2em] hover:bg-white/5 transition-all"
              >
                Return Home
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Find previous and next signals for navigation
  const currentIndex = SIGNALS.findIndex(s => s.id === signal.id);
  const nextSignal = currentIndex > 0 ? SIGNALS[currentIndex - 1] : undefined; // Higher number (newer)
  const prevSignal = currentIndex < SIGNALS.length - 1 ? SIGNALS[currentIndex + 1] : undefined; // Lower number (older)

  const directUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}/pov/${signal.id}`
    : `https://www.psy.partners/pov/${signal.id}`;

  const canonicalUrl = `https://www.psy.partners/pov/${signal.id}`;

  usePageSEO({
    title: `Signal #${signal.id}: ${signal.title} — Psy Partners POV`,
    description: `${signal.excerpt} Direct executive POV briefing by ${signal.author}.`,
    keywords: `Transition Signal ${signal.id}, ${signal.title}, ${signal.author}, ${signal.domain}, Sovereign AI, Enterprise AI Transition, Psy Partners`,
    canonicalPath: `/pov/${signal.id}`,
    type: 'article',
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "DigitalDocument",
          "@id": `${canonicalUrl}#document`,
          "url": canonicalUrl,
          "name": `Transition Signal #${signal.id}: ${signal.title}`,
          "headline": signal.title,
          "description": signal.excerpt,
          "datePublished": "2026-10-12",
          "inLanguage": "en-US",
          "author": {
            "@type": "Person",
            "name": signal.author,
            "jobTitle": `Managing Partner — ${signal.domain}`,
            "worksFor": {
              "@id": "https://www.psy.partners/#organization"
            }
          },
          "publisher": {
            "@id": "https://www.psy.partners/#organization"
          },
          "encodingFormat": "application/pdf",
          "associatedMedia": {
            "@type": "MediaObject",
            "contentUrl": signal.pdfUrl,
            "encodingFormat": "application/pdf"
          }
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${canonicalUrl}#breadcrumb`,
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.psy.partners/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "POV Signals",
              "item": "https://www.psy.partners/pov"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": `Signal #${signal.id}: ${signal.title}`,
              "item": canonicalUrl
            }
          ]
        }
      ]
    }
  });

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(directUrl);
      setCopied(true);
      trackEvent('copy_deep_link', {
        signal_id: signal.id,
        signal_title: signal.title,
        url: directUrl
      });
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback if clipboard API is restricted
      const input = document.createElement('input');
      input.value = directUrl;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleShare = (platform: 'linkedin' | 'x' | 'whatsapp') => {
    trackEvent('share_signal', {
      platform,
      signal_id: signal.id,
      signal_title: signal.title
    });

    const text = encodeURIComponent(`" ${signal.title} " — Transition Signal #${signal.id} by ${signal.author} via Psy Partners`);
    const shareUrl = encodeURIComponent(directUrl);

    let url = '';
    if (platform === 'linkedin') {
      url = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`;
    } else if (platform === 'x') {
      url = `https://twitter.com/intent/tweet?text=${text}&url=${shareUrl}`;
    } else if (platform === 'whatsapp') {
      url = `https://api.whatsapp.com/send?text=${text}%20${shareUrl}`;
    }

    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="w-full bg-void text-text-primary selection:bg-gold selection:text-void flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-24 sm:pt-32 pb-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumbs & Navigation Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 sm:mb-12 border-b border-white/5 pb-4">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-mono text-[11px] sm:text-xs text-text-muted">
              <Link to="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link to="/pov" className="hover:text-gold transition-colors">POV</Link>
              <span>/</span>
              <span className="text-gold font-semibold">Signal #{signal.id}</span>
            </nav>

            <Link
              to="/pov"
              className="inline-flex items-center gap-2 font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-text-muted hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to All Signals
            </Link>
          </div>

          {/* Main Signal Header */}
          <motion.article 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-10 md:p-14 mb-10 overflow-hidden shadow-2xl"
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>

            {/* Signal Tag & Meta */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-gold/30 bg-gold/10 font-mono text-xs uppercase tracking-[0.2em] text-gold font-semibold">
                <Sparkles className="w-3.5 h-3.5" /> Transition Signal #{signal.id}
              </div>

              <div className="font-mono text-xs text-text-muted tracking-[0.15em] uppercase">
                {signal.publishedDate}
              </div>
            </div>

            {/* Title */}
            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.05] mb-6">
              {signal.title}
            </h1>

            {/* Author Byline */}
            <div className="flex flex-wrap items-center gap-4 py-4 px-5 rounded-xl border border-white/5 bg-white/[0.02] mb-8">
              <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center font-display text-lg text-gold font-semibold">
                {signal.author.charAt(0)}
              </div>
              <div>
                <div className="text-white font-medium text-base sm:text-lg">
                  {signal.author}
                </div>
                <div className="font-mono text-[10px] sm:text-xs text-text-muted uppercase tracking-[0.2em]">
                  Managing Partner — {signal.domain}
                </div>
              </div>
            </div>

            {/* Direct Deep Link Banner (copyable URL) */}
            <div className="p-4 sm:p-5 rounded-xl border border-white/10 bg-void/80 mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3 overflow-hidden">
                <span className="font-mono text-[10px] sm:text-xs text-text-muted uppercase tracking-[0.2em] shrink-0">
                  Direct Deeplink:
                </span>
                <span className="font-mono text-xs sm:text-sm text-gold/90 truncate select-all">
                  {directUrl}
                </span>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-gold hover:text-void text-white font-mono text-xs uppercase tracking-[0.15em] transition-all min-h-[40px]"
                  aria-label="Copy direct deep link to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Link</span>
                    </>
                  )}
                </button>

                {/* Share dropdown / icons */}
                <button
                  type="button"
                  onClick={() => handleShare('linkedin')}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-text-muted hover:text-gold transition-colors"
                  title="Share on LinkedIn"
                  aria-label="Share on LinkedIn"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Executive Excerpt */}
            <div className="mb-10">
              <h2 className="font-mono text-xs text-gold uppercase tracking-[0.3em] mb-3">
                Executive Excerpt
              </h2>
              <blockquote className="font-serif text-xl sm:text-2xl text-white/95 leading-relaxed italic border-l-2 border-gold/50 pl-5 sm:pl-7 py-2">
                "{signal.excerpt}"
              </blockquote>
            </div>

            {/* Strategic Thesis */}
            <div className="mb-10 border-t border-white/5 pt-8">
              <h2 className="font-mono text-xs text-gold uppercase tracking-[0.3em] mb-4">
                Strategic Thesis
              </h2>
              <p className="font-serif text-base sm:text-lg text-text-muted leading-relaxed">
                {signal.strategicThesis}
              </p>
            </div>

            {/* Key Insights */}
            <div className="mb-12 border-t border-white/5 pt-8">
              <h2 className="font-mono text-xs text-gold uppercase tracking-[0.3em] mb-6">
                Key Strategic Takeaways
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {signal.keyInsights.map((insight, idx) => (
                  <li 
                    key={idx}
                    className="flex items-start gap-3.5 p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:border-gold/20 transition-colors"
                  >
                    <ShieldCheck className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="font-serif text-sm sm:text-base text-white/90 leading-normal">
                      {insight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Primary Action / PDF Download */}
            <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <div className="text-white font-medium text-base mb-1">
                  Complete Strategic Terminal Drop
                </div>
                <div className="font-mono text-xs text-text-muted">
                  Formal Sector Whitepaper (PDF Document)
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                <a
                  href={signal.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackDownload(`Transition Signal #${signal.id} - ${signal.title}`, signal.pdfUrl)}
                  className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 rounded-full bg-gold text-void font-mono text-xs uppercase tracking-[0.2em] font-semibold hover:bg-gold-light transition-all shadow-lg shadow-gold/10 w-full sm:w-auto min-h-[48px]"
                  aria-label={`Download full PDF for Transition Signal #${signal.id}`}
                >
                  <Download className="w-4 h-4" /> Download Full POV (PDF)
                </a>

                <a
                  href={signal.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full border border-white/10 text-white font-mono text-xs uppercase tracking-[0.2em] hover:bg-white/5 transition-all w-full sm:w-auto min-h-[48px]"
                  aria-label={`Open PDF in new tab`}
                >
                  <ExternalLink className="w-4 h-4" /> View in Tab
                </a>
              </div>
            </div>
          </motion.article>

          {/* Previous / Next Signal Navigation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-4">
            {prevSignal ? (
              <Link
                to={`/pov/${prevSignal.id}`}
                className="group flex flex-col p-5 sm:p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-gold/30 hover:bg-white/[0.04] transition-all"
              >
                <div className="flex items-center gap-2 font-mono text-[10px] text-text-muted uppercase tracking-[0.2em] mb-2 group-hover:text-gold transition-colors">
                  <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                  Signal #{prevSignal.id}
                </div>
                <div className="font-display text-base sm:text-lg text-white group-hover:text-gold transition-colors line-clamp-1">
                  {prevSignal.title}
                </div>
              </Link>
            ) : <div />}

            {nextSignal ? (
              <Link
                to={`/pov/${nextSignal.id}`}
                className="group flex flex-col text-right p-5 sm:p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-gold/30 hover:bg-white/[0.04] transition-all ml-auto w-full"
              >
                <div className="flex items-center justify-end gap-2 font-mono text-[10px] text-text-muted uppercase tracking-[0.2em] mb-2 group-hover:text-gold transition-colors">
                  Signal #{nextSignal.id}
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
                <div className="font-display text-base sm:text-lg text-white group-hover:text-gold transition-colors line-clamp-1">
                  {nextSignal.title}
                </div>
              </Link>
            ) : <div />}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
