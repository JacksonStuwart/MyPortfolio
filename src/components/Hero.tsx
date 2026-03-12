"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";

export default function Hero() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-electric/20 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-[20%] -translate-y-[80%] w-[600px] h-[400px] bg-violet/20 blur-[100px] rounded-full pointer-events-none z-0" />

      {/* Abstract Integrated Background Portrait */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-30 mix-blend-screen mix-blend-luminosity">
        <div 
           className="w-full h-full max-w-5xl mx-auto bg-[url('/profile.jpg')] bg-contain md:bg-cover bg-center bg-no-repeat transition-all grayscale contrast-[1.4] brightness-[0.8]"
           style={{ maskImage: "radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 60%)", WebkitMaskImage: "radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 60%)" }}
        />
        {/* Soft overlay blends portrait smoothly into dark theme completely */}
        <div className="absolute inset-0 bg-zinc-950/70" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          {/* Tag */}
          <motion.div variants={item} className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 glass-strong backdrop-blur-md">
            <Terminal size={14} className="text-cyan-light" />
            <span className="text-sm font-medium text-zinc-300 tracking-wide uppercase">AI-First Full Stack Engineer</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight text-white leading-[1.1] mb-6 drop-shadow-xl"
          >
            I Design Systems. <br className="hidden md:block" />
            Orchestrate Agents. <br className="hidden md:block" />
            <span className="text-gradient bg-gradient-to-r from-electric-light via-violet-light to-cyan-light">
              Ship AI-Native Products.
            </span>
          </motion.h1>

          {/* Subheadline containing the name explicitly centered like original */}
          <motion.p
            variants={item}
            className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md font-medium"
          >
            <span className="text-white">I&apos;m Jackson Stuwart.</span> I combine intelligent sub-agents, cloud-native architectures, and deep product sense to build the next generation of software faster and better.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 group shadow-lg"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/10 glass hover:bg-white/10 transition-colors text-white font-medium flex items-center justify-center gap-2 backdrop-blur-md shadow-lg"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
