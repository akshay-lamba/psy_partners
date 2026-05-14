import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Download, Video, Shield, Building2, GraduationCap, Briefcase, FileText, ArrowRight } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import PsiLogo from './PsiLogo';
import usePageSEO from '../hooks/usePageSEO';

const signals = [
  {
    id: "001",
    author: "Psy Partners",
    title: "Firing Humans Is Dumb.",
    excerpt: "Institutional knowledge is the only moat that survives the AI transition. Decoupling human intelligence from your operating model is a strategic error.",
    slides: [
      "AI is not a replacement for talent; it's a multiplier for institutional memory.",
      "The 'Context Tax' is real: AI without human oversight loses strategic nuance.",
      "95% of AI pilots fail because they ignore the human-in-the-loop requirement.",
      "Sovereign AI requires Sovereign People to govern it.",
      "Transition over Transformation: Scaling what works, not breaking what's broken.",
      "The value of a firm is the sum of its unrecorded decisions.",
      "Deploy advantage by empowering your best assets, not replacing them."
    ]
  },
  {
    id: "002",
    author: "Psy Partners",
    title: "Vendor Lock-in is the new technical debt.",
    excerpt: "Dependency on third-party black-box models is a risk to board-level governance. The future belongs to Sovereign AI stacks.",
    slides: [
      "Open source is no longer optional; it's a governance requirement.",
      "Compute is a commodity; data is the asset; logic is the moat.",
      "Diversification of models is the first step in risk management.",
      "If you don't own your weights, you don't own your future.",
      "Latency is the silent killer of Deployed Advantage.",
      "Privacy is not a feature; it's a prerequisite for Enterprise AI.",
      "Build for portability, or prepare for the pivot tax."
    ]
  },
  {
    id: "003",
    author: "Akshay Lamba",
    pdfUrl: "https://b2006858-57c1-480a-9730-8e9f2057acb9.usrfiles.com/ugd/b20068_002c510789154f0885f2ead1f13a31ef.pdf",
    title: "The Career Stack",
    excerpt: "Why every layer of the organization has the same AI story — and why every layer is wrong in the same way. Scaling judgment over output.",
    slides: [
      {
        title: "The Career Stack",
        content: "Every layer of the organization has the same AI story — and why every layer is wrong in the same way.",
        sub: "Judgment vs Output"
      },
      {
        title: "The Pitch vs Reality",
        content: "Removing layers is not transformation. It is controlled decline with a productivity veneer.",
        sub: "AI makes layers faster, not unnecessary."
      },
      {
        title: "The 7-Layer Stack",
        content: "From Entry Level to the Board, we mistake mechanical output for human essence.",
        sub: "Let us walk up the stack."
      },
      {
        title: "Entry Level",
        content: "Cutting entry-level roles stops the seeding of your own future. The senior talent you need in five years is the junior you didn't hire today.",
        sub: "The Output Illusion vs The Hidden Value"
      },
      {
        title: "Lower Management",
        content: "Dashboards cannot detect the human texture of a team. Removing this layer creates risk you can no longer see.",
        sub: "Managing Tension vs Tracking Progress"
      },
      {
        title: "Middle Management",
        content: "Middle managers are the connective tissue. When you remove them, the AI doesn't get smarter. It gets dumber.",
        sub: "Curating Context vs Raw Data"
      },
      {
        title: "Senior Management",
        content: "Machines produce analysis. Leaders produce judgment. Trust is the only thing that makes strategy executable at speed.",
        sub: "Judgment vs Synthesis"
      },
      {
        title: "The CXO",
        content: "Autopilot does not land the plane in a crosswind. The winning CXO designs the interface between machine speed and human judgment.",
        sub: "Accountability vs Automation"
      },
      {
        title: "The CEO",
        content: "Strategic weather requires physical presence. Decisions under existential uncertainty require skin in the game.",
        sub: "Presence vs Optimization"
      },
      {
        title: "The Board",
        content: "The intelligence is borrowed. The accountability remains human. AI can't be held responsible in court.",
        sub: "Governance vs Outsourcing"
      },
      {
        title: "The Collapse",
        content: "The stack fails structurally if any layer is removed. AI cannot bridge the gap between Board strategy and Entry execution.",
        sub: "Structural Integrity"
      },
      {
        title: "The Matrix",
        content: "AI makes every layer of the career stack faster, more informed, and more capable. Compound, do not contract.",
        sub: "Strategic Summary"
      }
    ]
  },
  {
    id: "004",
    author: "Dr. Nicolas Hamelin",
    pdfUrl: "https://b2006858-57c1-480a-9730-8e9f2057acb9.usrfiles.com/ugd/b20068_cbb3d8eb8ac648538736b348c9dbba3f.pdf",
    title: "The AI Transition System",
    excerpt: "From Governance Paralysis to Deployed Advantage. A comprehensive framework for moving organizational intelligence from pilot stall to compounding capability.",
    slides: [
      {
        title: "The AI Transition System",
        content: "From Governance Paralysis to Deployed Advantage. Institutional intelligence is not an upgrade; it's a transition.",
        sub: "Strategic Overview"
      },
      {
        title: "95% Fail Rate",
        content: "Of AI Pilots fail to reach production. High activity. Zero impact. Only 1/3 scale AI successfully.",
        sub: "The Implementation Gap"
      },
      {
        title: "The technology is not broken. The model is.",
        content: "Boards are accountable for decisions they don't understand. Legal frameworks are enforcing strict penalties.",
        sub: "Accountability & Valuation"
      },
      {
        title: "Transformation vs Transition",
        content: "Governance is the Catalyst, Not the Brake. Clarity on risk allows boards to move with conviction.",
        sub: "Risk as Velocity"
      },
      {
        title: "Three Programs. One System.",
        content: "Psy Partners delivers three distinct, complementary programs: BoardGuard, Transition, and Velocity.",
        sub: "The Compounding System"
      },
      {
        title: "BoardGuard AI",
        content: "The first critical phase. A self-contained program that establishes immediate clarity on risk.",
        sub: "Removing the Paralysis"
      },
      {
        title: "Transition AI",
        content: "Building the foundation. Transitioning executives into AI-native leaders capable of navigating agnostic choices.",
        sub: "Architectural Readiness"
      },
      {
        title: "Velocity AI",
        content: "Deploying the advantage. Accelerating past pilot purgatory to scale AI capabilities across functions.",
        sub: "Institutional Speed"
      },
      {
        title: "Psychology vs Market",
        content: "We send sector specialists and deploy working capability. We are fully agnostic. No vendor lock-in.",
        sub: "The Deployed Advantage"
      },
      {
        title: "Global Sector Specialists",
        content: "Our presence is built on specialized expertise anchored in key global hubs: Dubai, New Delhi, Sydney.",
        sub: "Global Execution"
      }
    ]
  }
];

const partners = [
  { name: "Akshay Lamba", role: "Business AI" },
  { name: "Nick Hamelin", role: "Education AI" },
  { name: "Gautam Mohanty", role: "Real Estate AI" },
  { name: "Gitanjali Bandha", role: "Law AI" },
  { name: "Shree Parthasarathy", role: "Trust AI" }
];

export default function IntelligenceScreen() {
  usePageSEO({
    title: "POV | Psy Partners",
    description: "Transition Signals: Board-level POVs, Executive Playbooks, and Sector-Specific AI insights."
  });

  const [activeSignal, setActiveSignal] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSignalChange = (newSignalIndex: number) => {
    setActiveSignal(newSignalIndex);
    setActiveSlide(0);
    const element = document.getElementById('context-preview');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % (signals[activeSignal].slides.length));
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + signals[activeSignal].slides.length) % (signals[activeSignal].slides.length));

  const currentSignal = signals[activeSignal];
  const isComplexSlide = typeof currentSignal.slides[0] !== 'string';

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
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-[1px] bg-gold"></span>
                <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-gold">POV Hub [V.01]</span>
              </div>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[0.9] mb-8">
                TRANSITION <br /> <span className="text-gold">SIGNALS.</span>
              </h1>
              <p className="max-w-2xl font-serif text-xl text-text-muted leading-relaxed">
                We move organizations from Governance Paralysis to Deployed Advantage. No fluff. No generic consulting. Just sector-specific intelligence terminals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 2. Transition Signals Grid */}
        <section className="py-24 px-6 border-b border-white/5">
          <div className="max-w-7xl mx-auto">
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
                  onClick={() => handleSignalChange(idx)}
                  className={`group relative overflow-hidden rounded-2xl border transition-all duration-700 p-8 flex flex-col h-full cursor-pointer ${activeSignal === idx ? 'bg-gold/10 border-gold/50 shadow-[0_0_50px_rgba(197,160,89,0.1)]' : 'border-white/5 bg-white/[0.02] hover:border-gold/30 hover:bg-white/[0.05]'}`}
                >
                  <div className="absolute top-0 right-0 p-6">
                    <FileText className={`w-8 h-8 transition-colors duration-500 ${activeSignal === idx ? 'text-gold' : 'text-gold/20'}`} />
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
                      <button className="text-white/60 font-mono text-[9px] uppercase tracking-widest flex items-center gap-2 hover:text-gold transition-colors">
                        Deep Dive <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Glassy Overlay effect */}
                  <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Context Detail Preview */}
        <section id="context-preview" className="py-24 px-6 border-b border-white/5 bg-[#080808]">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="font-display text-2xl text-white tracking-widest uppercase mb-4">CONTEXT PREVIEW</h2>
                <p className="font-mono text-[10px] text-text-muted tracking-[0.2em] uppercase">Interactive POV Assessment</p>
              </div>
              <div className="hidden md:flex gap-4">
                <button 
                  onClick={() => handleSignalChange((activeSignal - 1 + signals.length) % signals.length)}
                  className="p-3 border border-white/10 hover:bg-white/5 transition-colors rounded-full"
                >
                  <ChevronLeft className="w-5 h-5 text-gold" />
                </button>
                <button 
                  onClick={() => handleSignalChange((activeSignal + 1) % signals.length)}
                  className="p-3 border border-white/10 hover:bg-white/5 transition-colors rounded-full"
                >
                  <ChevronRight className="w-5 h-5 text-gold" />
                </button>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                key={activeSignal}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass-panel p-10 border border-white/5 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-3xl -mr-16 -mt-16"></div>
                <div className="font-mono text-gold mb-6 text-sm tracking-widest flex items-center gap-3">
                  <span>SIGNAL #{currentSignal.id}</span>
                  <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                  <span className="text-white/40 uppercase tracking-[0.2em] text-[10px]">by {currentSignal.author}</span>
                </div>
                <h3 className="font-display text-4xl text-white tracking-tight leading-tight mb-8">
                  {currentSignal.title}
                </h3>
                <div className="flex flex-wrap items-center gap-6">
                  {(currentSignal as any).pdfUrl && (
                    <a 
                      href={(currentSignal as any).pdfUrl} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3 bg-gold text-void font-mono text-[10px] uppercase tracking-widest hover:bg-white transition-colors flex items-center gap-2"
                    >
                      <Download className="w-4 h-4" /> Download Full PDF
                    </a>
                  )}
                  <button className="text-gold font-mono text-[10px] uppercase tracking-widest flex items-center gap-2 group">
                    Inquire for Advisory <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>

              <div id="carousel" className="relative aspect-[4/3] md:aspect-video lg:aspect-[4/3] perspective-2000">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeSignal}-${activeSlide}`}
                    initial={{ opacity: 0, scale: 0.9, rotateY: 20, z: -100 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0, z: 0 }}
                    exit={{ opacity: 0, scale: 1.1, rotateY: -20, z: 100 }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center items-center text-center glass-panel bg-void/40 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-white/5 opacity-50"></div>
                    
                    {isComplexSlide ? (
                      <div className="relative z-10 w-full">
                        <div className="font-mono text-gold/60 text-[10px] uppercase tracking-[0.4em] mb-6">
                          {(currentSignal.slides[activeSlide] as any).sub}
                        </div>
                        <h4 className="font-display text-2xl md:text-3xl text-white tracking-tight leading-tight mb-8 px-4">
                          {(currentSignal.slides[activeSlide] as any).title}
                        </h4>
                        <p className="text-lg md:text-xl font-serif text-text-muted italic leading-relaxed max-w-lg mx-auto border-t border-white/5 pt-8">
                          "{(currentSignal.slides[activeSlide] as any).content}"
                        </p>
                      </div>
                    ) : (
                      <div className="relative z-10">
                        <div className="w-16 h-16 mx-auto mb-8 border border-gold/30 rounded-full flex items-center justify-center bg-void/50">
                          <PsiLogo className="w-8 h-8" />
                        </div>
                        <p className="text-2xl md:text-3xl font-serif text-white italic leading-relaxed max-w-lg">
                          "{currentSignal.slides[activeSlide]}"
                        </p>
                      </div>
                    )}

                    <div className="mt-12 flex items-center gap-2 relative z-10">
                       {currentSignal.slides.map((_, i) => (
                         <div key={i} className={`h-1 transition-all duration-500 rounded-full ${i === activeSlide ? 'w-8 bg-gold' : 'w-2 bg-white/20'}`}></div>
                       ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
                
                <div className="absolute bottom-8 right-8 flex gap-2">
                  <button onClick={prevSlide} className="p-3 bg-void/80 border border-white/10 text-white rounded-full hover:bg-gold hover:text-void transition-colors">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button onClick={nextSlide} className="p-3 bg-void/80 border border-white/10 text-white rounded-full hover:bg-gold hover:text-void transition-colors">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Partner Briefing Room */}
        <section className="py-24 px-6 border-b border-white/5 bg-[#080808]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div className="max-w-2xl">
                <h2 className="font-display text-4xl text-white tracking-widest uppercase mb-6">PARTNER BRIEFING ROOM</h2>
                <p className="font-serif text-xl text-text-muted leading-relaxed">
                  Institutional Knowledge Preservation is not just a catchphrase; it's our first directive. Hear from our specialist partners on how we anchor AI to the human logic of your firm.
                </p>
              </div>
              <button className="px-8 py-3 border border-white/10 text-white font-mono text-[10px] uppercase tracking-widest hover:bg-gold hover:text-void transition-colors">
                View All Briefings
              </button>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {partners.map((partner, idx) => (
                <motion.div 
                  key={partner.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative aspect-[3/4] rounded-xl overflow-hidden glass-panel border border-white/5"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent z-10"></div>
                  <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity z-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center z-30 opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100">
                    <div className="w-16 h-16 bg-gold text-void rounded-full flex items-center justify-center">
                      <Video className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 p-6 z-40 w-full text-center">
                    <p className="font-display text-lg text-white mb-1">{partner.name}</p>
                    <p className="font-mono text-[9px] text-gold uppercase tracking-wider">{partner.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Media Engine */}
        <section className="py-24 px-6 border-b border-white/5 bg-gold/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl text-white tracking-widest uppercase mb-8">THE MEDIA ENGINE</h2>
            <p className="font-serif text-xl text-text-muted leading-relaxed mb-12 italic">
              "We provide the context journalists miss: the intersection of Sovereign AI and institutional survival."
            </p>
            <div className="glass-panel p-10 border border-gold/20 relative">
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="text-left flex-grow">
                  <h4 className="font-display text-2xl text-white mb-3 tracking-wide">2026 SIGNAL KIT</h4>
                  <p className="font-serif text-text-muted mb-6">Market evidence, tech layoff data analysis, and Gartner ROI benchmarks for board-level briefings.</p>
                  <div className="flex flex-wrap gap-4">
                     <span className="font-mono text-[9px] text-gold/80 uppercase">Data Cited: Oxford AI Ethics</span>
                     <span className="font-mono text-[9px] text-gold/80 uppercase">Reports: McKinsey Q4</span>
                  </div>
                </div>
                <button className="flex-shrink-0 px-10 py-5 bg-gold text-void font-mono text-xs uppercase tracking-widest hover:bg-white transition-all flex items-center gap-3">
                  <Download className="w-4 h-4" /> Download Signal Kit
                </button>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

function Scale({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="M7 21h10" />
      <path d="M12 3v18" />
      <path d="M3 7h18" />
    </svg>
  );
}
