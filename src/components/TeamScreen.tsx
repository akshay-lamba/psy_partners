import React from 'react';
import { motion } from 'motion/react';
import Navbar from './Navbar';
import Footer from './Footer';
import usePageSEO from '../hooks/usePageSEO';

export default function TeamScreen() {
  usePageSEO({
    title: "Team & Credentials | Psy Partners",
    description: "Psy Partners is led by industry veterans bridging the gap between enterprise strategy and deep AI integration."
  });

  const team = [
    {
      name: "Akshay Lamba",
      role: "Managing Partner - Business AI",
      image: "https://static.wixstatic.com/media/b20068_cafbe1c9ca214fc8aa0cee04a3415c07~mv2.png",
      slide: "https://static.wixstatic.com/media/b20068_be9a2eac7e554d90a671c83ddff5edcc~mv2.jpeg"
    },
    {
      name: "Nick Hamelin",
      role: "Managing Partner - Education AI",
      image: "https://static.wixstatic.com/media/b20068_57b16edf928f403d88dd1d161ef8ac68~mv2.png",
      slide: "https://static.wixstatic.com/media/b20068_ed2d05a5acbe49f289a6a38fb8316306~mv2.jpeg"
    },
    {
      name: "Gautam Mohanty",
      role: "Managing Partner - Real Estate AI",
      image: "https://static.wixstatic.com/media/b20068_7d08c13fe65f4c2d9caa84f6944c43b2~mv2.png",
      slide: "https://static.wixstatic.com/media/b20068_498890d72d524268b28b1600976b8264~mv2.jpeg"
    },
    {
      name: "Gitanjali Bandha",
      role: "Managing Partner - Law AI",
      image: "https://static.wixstatic.com/media/b20068_ee8a3efb7d9a4cb683b9b52abf61970a~mv2.png",
      slide: "https://static.wixstatic.com/media/b20068_e91b64f1ebed4619bb65289647af1252~mv2.jpeg"
    },
    {
      name: "Shree Parthasarathy",
      role: "Managing Partner - Trust AI",
      image: "https://static.wixstatic.com/media/b20068_6e2864cd7d9a4f41b1f2492fc9cc742b~mv2.png",
      slide: "https://static.wixstatic.com/media/b20068_2c36635441524f078976e314ee56c4a2~mv2.jpeg"
    }
  ];

  return (
    <div className="w-full bg-void text-text-primary selection:bg-gold selection:text-void min-h-screen flex flex-col">
      <Navbar />

      <section className="flex-grow pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1A1A1A_0%,#000000_100%)]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-24"
          >
            <h2 className="font-mono text-[10px] text-gold uppercase tracking-[0.4em] mb-6">Our Leadership</h2>
            <h1 className="font-serif text-5xl md:text-7xl text-white italic mb-8">
              The Team
            </h1>
            <p className="text-xl text-text-muted font-light leading-relaxed max-w-2xl mx-auto text-balance">
              Psy Partners is led by industry veterans who bridge the gap between enterprise strategy and deep AI integration.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
            {team.map((member, idx) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="group flex flex-col items-center w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-2rem)] xl:w-[calc(20%-1.5rem)] max-w-sm"
              >
                <div className="relative w-full aspect-[4/5] mb-8 overflow-hidden rounded-3xl border border-white/5 glass-panel">
                  <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <img 
                     src={member.image} 
                     alt={member.name} 
                     className="w-full h-full object-cover object-center filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-void/20 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                    <h3 className="font-serif text-3xl text-white mb-2">{member.name}</h3>
                    <p className="font-mono text-[10px] text-gold uppercase tracking-widest">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 border-t border-white/5 relative bg-charcoal">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="font-mono text-[10px] text-gold uppercase tracking-[0.4em] mb-4">Detailed Profiles</h2>
            <h3 className="font-serif text-4xl text-white italic">Partner Credentials</h3>
          </motion.div>

          <div className="flex flex-col gap-24 md:gap-32">
            {team.map((member, idx) => member.slide ? (
              <motion.div 
                key={`${member.name}-slide`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full flex justify-center"
              >
                <div className="w-full max-w-5xl rounded-2xl overflow-hidden glass-panel border border-white/10 shadow-2xl p-2 bg-void/30">
                  <img src={member.slide} alt={`${member.name} credentials`} className="w-full h-auto object-contain rounded-xl opacity-90 hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ) : null)}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
