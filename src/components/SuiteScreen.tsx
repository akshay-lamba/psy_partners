import React from 'react';
import { 
  ShieldCheck, Map, Rocket, CheckCircle2, 
  Layers, Zap, TrendingUp, XCircle, 
  ArrowRight, Target, Search, Settings, 
  Briefcase, Globe, Cpu, BarChart, Eye, Layout, Users
} from 'lucide-react';
import { motion } from 'motion/react';

export default function SuiteScreen() {
  return (
    <div className="w-full bg-void text-text-primary selection:bg-gold selection:text-void">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-panel px-8 py-5 flex justify-between items-center border-b border-white/5">
        <div className="flex items-center gap-3">
          <span className="text-3xl text-gold font-serif">Ψ</span>
          <span className="font-display font-medium tracking-[0.2em] uppercase text-xs">Psy Partners</span>
        </div>
        <div className="hidden lg:flex gap-12 font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted">
          <a href="#problem" className="hover:text-gold transition-colors">The Problem</a>
          <a href="#boardguard" className="hover:text-gold transition-colors">BoardGuard AI</a>
          <a href="#transition" className="hover:text-gold transition-colors">Transition AI</a>
          <a href="#velocity" className="hover:text-gold transition-colors">Velocity AI</a>
          <a href="#differentiation" className="hover:text-gold transition-colors">Differentiation</a>
        </div>
        <a 
          href="mailto:info@psy.partners"
          className="px-6 py-2 border border-gold/30 text-gold font-mono text-[10px] uppercase tracking-widest hover:bg-gold hover:text-void transition-all duration-500"
        >
          Inquire
        </a>
      </nav>

      {/* Hero Section: The AI Transition System */}
      <section className="min-h-screen flex flex-col items-center justify-center relative px-6 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1A1A1A_0%,#050505_100%)]"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-10 w-full max-w-6xl text-center"
        >
          <div className="flex flex-col items-center mb-12">
            <span className="text-6xl text-gold font-serif mb-4">Ψ</span>
            <h2 className="font-display text-4xl text-white tracking-widest uppercase">Psy Partners</h2>
            <p className="font-mono text-xs text-text-muted tracking-[0.4em] uppercase mt-2">Transition. Not Transformation.</p>
          </div>

          <h1 className="font-serif italic text-3xl md:text-4xl text-gold mb-16 tracking-tight text-balance">
            The AI Transition System: From Governance Paralysis to Deployed Advantage
          </h1>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {/* 95% Stat */}
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

            {/* Governance Catalyst */}
            <div className="glass-panel p-10 rounded-2xl border-white/5 flex flex-col items-center justify-center text-center">
              <h3 className="font-display text-xl text-gold uppercase tracking-widest mb-4">Governance is the Catalyst, Not the Brake</h3>
              <p className="text-text-muted font-light text-sm max-w-sm">
                Clarity on risk allows boards to move with conviction rather than hesitation.
              </p>
            </div>
          </div>

          {/* Transformation vs Transition Infographic */}
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
      <section id="problem" className="py-32 px-6 bg-charcoal border-y border-white/5">
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

      {/* 01 BoardGuard AI */}
      <section id="boardguard" className="min-h-screen py-32 px-6 flex flex-col items-center justify-center border-t border-white/5 relative">
        <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-6 mb-8">
              <span className="font-serif text-6xl text-gold/20">01</span>
              <div>
                <h2 className="font-serif text-5xl text-white italic">BoardGuard AI</h2>
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
                <p className="text-xl text-white font-serif italic mb-6">
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
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative p-12 glass-panel rounded-3xl overflow-hidden border-gold/10"
          >
            <div className="absolute top-0 right-0 p-8">
              <span className="font-mono text-[10px] text-gold uppercase tracking-widest">Target: Board Chairs · Risk & Audit Committees</span>
            </div>
            
            <div className="flex flex-col items-center gap-12 pt-12">
              <div className="w-32 h-32 rounded-full border border-gold/30 flex items-center justify-center relative">
                <Eye className="text-gold w-16 h-16" />
                <div className="absolute inset-0 border border-gold/10 rounded-full animate-ping"></div>
              </div>
              <div className="text-center space-y-4">
                <h4 className="font-display text-lg text-white uppercase tracking-widest">Strategic Conviction</h4>
                <p className="text-sm text-text-muted font-light">Establishes sector-specific governance rails to remove uncertainty and approve investments without blind spots.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 02 Transition AI */}
      <section id="transition" className="min-h-screen py-32 px-6 flex flex-col items-center justify-center bg-charcoal relative">
        <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="order-2 lg:order-1 relative p-12 glass-panel rounded-3xl overflow-hidden border-gold/10"
          >
            <div className="absolute top-0 left-0 p-8">
              <span className="font-mono text-[10px] text-gold uppercase tracking-widest">Target: CAIO · COO · CIO</span>
            </div>

            <div className="flex flex-col items-center gap-12 pt-12">
              <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
                <div className="aspect-square border border-white/10 rounded-xl flex items-center justify-center bg-white/5">
                  <Layout className="text-text-muted w-8 h-8" />
                </div>
                <div className="aspect-square border border-gold rounded-xl flex items-center justify-center bg-gold/10">
                  <Zap className="text-gold w-8 h-8" />
                </div>
                <div className="aspect-square border border-white/10 rounded-xl flex items-center justify-center bg-white/5">
                  <Users className="text-text-muted w-8 h-8" />
                </div>
                <div className="aspect-square border border-white/10 rounded-xl flex items-center justify-center bg-white/5">
                  <Cpu className="text-text-muted w-8 h-8" />
                </div>
              </div>
              <div className="text-center space-y-4">
                <h4 className="font-display text-lg text-white uppercase tracking-widest">Execution Readiness</h4>
                <p className="text-sm text-text-muted font-light">Redesigns the operating model to align data, talent, and workflows for AI-native performance.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center gap-6 mb-8">
              <span className="font-serif text-6xl text-gold/20">02</span>
              <div>
                <h2 className="font-serif text-5xl text-white italic">Transition AI</h2>
                <p className="font-mono text-[10px] text-gold uppercase tracking-[0.3em]">AI Operating Model Alignment Program</p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="p-8 glass-panel border-l-4 border-gold">
                <p className="text-text-muted font-light leading-relaxed mb-6">
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
                <p className="font-mono text-[10px] text-gold uppercase tracking-widest mb-2">Deliverables for Execution</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { title: "Strategic Blocker Map", desc: "Identifies the top 3-6 organizational obstacles and the business cost of delay." },
                    { title: "AI Capability Blueprint", desc: "A sector-aligned guide detailing whether to build, buy, or partner." },
                    { title: "Execution Roadmap", desc: "A sequenced, owned plan with clear decision gates for sustained progress." }
                  ].map((del, i) => (
                    <div key={i} className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="text-gold w-4 h-4" />
                        <span className="text-xs text-white font-medium">{del.title}</span>
                      </div>
                      <p className="text-[10px] text-text-muted font-light pl-6">{del.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-white/5">
                <p className="text-xl text-white font-serif italic mb-6">
                  “Our organization is now built to extract value from AI.”
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="glass-panel p-4 rounded-xl border-white/5">
                    <p className="font-mono text-[8px] text-text-muted uppercase tracking-widest mb-1">Stakeholder</p>
                    <p className="text-xs text-white">CAIO / COO / CIO</p>
                  </div>
                  <div className="glass-panel p-4 rounded-xl border-white/5">
                    <p className="font-mono text-[8px] text-text-muted uppercase tracking-widest mb-1">Primary Accountability</p>
                    <p className="text-xs text-white">Scaling AI Operations</p>
                  </div>
                  <div className="glass-panel p-4 rounded-xl border-white/5">
                    <p className="font-mono text-[8px] text-text-muted uppercase tracking-widest mb-1">Program Outcome</p>
                    <p className="text-xs text-gold">Unified Operating System</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 03 Velocity AI */}
      <section id="velocity" className="min-h-screen py-32 px-6 flex flex-col items-center justify-center border-t border-white/5 relative">
        <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-6 mb-8">
              <span className="font-serif text-6xl text-gold/20">03</span>
              <div>
                <h2 className="font-serif text-5xl text-white italic">Velocity AI</h2>
                <p className="font-mono text-[10px] text-gold uppercase tracking-[0.3em]">Executive AI Acceleration Program</p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="p-8 glass-panel border-l-4 border-gold">
                <p className="text-text-muted font-light leading-relaxed mb-6">
                  Most AI programs optimize tasks, run pilots, produce demos. They don’t change competitive dynamics. Velocity AI integrates AI into live CXO workflows to achieve documented velocity improvement.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-mono text-[10px] text-gold uppercase tracking-widest mb-3">The Deployment Gap</h4>
                    <p className="text-[10px] text-text-muted font-light leading-relaxed">
                      95% of AI pilots fail to reach production. The deployment model is broken, not the technology. Generic tools fail because they are not calibrated to specific sector roles or workflows.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-mono text-[10px] text-gold uppercase tracking-widest mb-3">The Velocity Framework</h4>
                    <ul className="text-[10px] text-text-muted space-y-2 font-light">
                      <li>• <span className="text-white">Sector-Aligned Mapping:</span> Identifying leadership gaps in actual work patterns.</li>
                      <li>• <span className="text-white">Live Workflow Integration:</span> Agnostic tool selection deployed directly into systems.</li>
                      <li>• <span className="text-white">40%+ Velocity Improvement:</span> Sustained gains benchmarked against industry peers.</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                <p className="font-mono text-[10px] text-gold uppercase tracking-widest mb-2">From Uncertainty to Market Dominance</p>
                <div className="grid grid-cols-3 gap-2">
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

              <div className="pt-8 border-t border-white/5">
                <p className="text-xl text-white font-serif italic mb-6">
                  “We move faster than competitors can respond.”
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="glass-panel p-4 rounded-xl border-white/5">
                    <p className="font-mono text-[8px] text-text-muted uppercase tracking-widest mb-1">Primary Buyer</p>
                    <p className="text-xs text-white">CEO / CFO / CMO</p>
                  </div>
                  <div className="glass-panel p-4 rounded-xl border-white/5">
                    <p className="font-mono text-[8px] text-text-muted uppercase tracking-widest mb-1">Strategic Focus</p>
                    <p className="text-xs text-white">Deployment</p>
                  </div>
                  <div className="glass-panel p-4 rounded-xl border-white/5">
                    <p className="font-mono text-[8px] text-text-muted uppercase tracking-widest mb-1">Primary Outcome</p>
                    <p className="text-xs text-gold">Market Dominance</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative p-12 glass-panel rounded-3xl overflow-hidden border-gold/10"
          >
            <div className="absolute top-0 right-0 p-8">
              <span className="font-mono text-[10px] text-gold uppercase tracking-widest">Target: C-suite & Senior Leaders</span>
            </div>

            <div className="flex flex-col items-center gap-12 pt-12">
              <div className="w-32 h-32 rounded-full border border-gold/30 flex items-center justify-center relative">
                <Rocket className="text-gold w-16 h-16" />
                <motion.div 
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-4 right-0"
                >
                  <TrendingUp className="text-gold w-8 h-8 opacity-50" />
                </motion.div>
              </div>
              <div className="text-center space-y-4">
                <h4 className="font-display text-lg text-white uppercase tracking-widest">Deployed Advantage</h4>
                <p className="text-sm text-text-muted font-light">Integrates AI into live CXO workflows to achieve 40%+ documented velocity improvement.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Differentiation Section */}
      <section id="differentiation" className="py-32 px-6 bg-charcoal border-y border-white/5">
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

      {/* System Logic Section */}
      <section id="system" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-mono text-[10px] text-gold uppercase tracking-[0.4em] mb-8">The System</h2>
          <h3 className="font-serif text-5xl text-white italic mb-12">How the programs compound</h3>
          <p className="text-xl text-text-muted font-light leading-relaxed mb-16 text-balance">
            Each program is self-contained. But the system compounds when used in sequence. 
            BoardGuard AI removes paralysis. Transition AI builds the foundation. Velocity AI deploys the advantage.
          </p>
          <div className="inline-block px-12 py-6 border border-gold/30 rounded-full bg-gold/5">
            <span className="font-display text-2xl text-white uppercase tracking-[0.2em]">Institutional AI Advantage</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-32 px-6 text-center border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <span className="text-6xl text-gold font-serif mb-8 block">Ψ</span>
          <h2 className="font-serif text-5xl md:text-7xl text-white italic mb-8">
            Transition. Not Transformation.
          </h2>
          <p className="font-mono text-xs tracking-[0.4em] text-text-muted uppercase mb-16">
            Psy Partners AI Advisory
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 border-t border-white/5 pt-16">
            <div className="text-left">
              <span className="font-mono text-[10px] uppercase tracking-widest text-gold block mb-2">Presence</span>
              <p className="text-sm font-light text-text-muted">New Delhi | Dubai | Sydney</p>
            </div>
            <div className="text-left">
              <span className="font-mono text-[10px] uppercase tracking-widest text-gold block mb-2">Digital</span>
              <a href="https://www.psy.partners" className="text-sm font-light text-text-muted hover:text-gold transition-colors">www.psy.partners</a>
            </div>
            <div className="text-left">
              <span className="font-mono text-[10px] uppercase tracking-widest text-gold block mb-2">Contact</span>
              <a href="mailto:info@psy.partners" className="text-sm font-light text-text-muted hover:text-gold transition-colors">info@psy.partners</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
