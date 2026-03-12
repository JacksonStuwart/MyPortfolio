"use client";

import { motion } from "framer-motion";
import { Brain, Code2, ShieldCheck, Rocket, GitMerge } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Reason",
    icon: Brain,
    description: "The main reasoning agent analyzes requirements and architects robust systems, abstracting away isolated tasks.",
    color: "from-violet-500/20 to-violet-500/0",
    iconColor: "text-violet-400",
  },
  {
    id: "02",
    title: "Build",
    icon: Code2,
    description: "Specialized sub-agents handle generation, debugging, and analysis. Emphasizing orchestration over manual typing.",
    color: "from-blue-500/20 to-blue-500/0",
    iconColor: "text-blue-400",
  },
  {
    id: "03",
    title: "Verify",
    icon: ShieldCheck,
    description: "Automated verification agents validate logic, while human oversight guards critical security points.",
    color: "from-cyan-500/20 to-cyan-500/0",
    iconColor: "text-cyan-400",
  },
  {
    id: "04",
    title: "Ship",
    icon: Rocket,
    description: "Deploy AI-native products with CI/CD, creating multipliers in speed, quality, and scale.",
    color: "from-emerald-500/20 to-emerald-500/0",
    iconColor: "text-emerald-400",
  },
];

export default function HowIBuild() {
  return (
    <section id="workflow" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-electric/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 glass-strong mb-6"
          >
            <GitMerge size={16} className="text-cyan-light" />
            <span className="text-sm font-medium text-zinc-300">Multi-Agent Workflow</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            How I Build
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            I don&apos;t just write code manually. I orchestrate tools and multi-agent workflows to increase leverage, speed, and quality across the entire product lifecycle.
          </p>
        </div>

        {/* Pipeline Diagram */}
        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-10 right-10 h-[2px] bg-white/5">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-violet-500 via-blue-500 to-emerald-500"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative group"
                >
                  {/* Step Card */}
                  <div className="glass-strong rounded-3xl p-6 border border-white/5 relative z-10 h-full hover:border-white/10 transition-colors bg-white/[0.02]">
                    <div className={`absolute inset-0 bg-gradient-to-b ${step.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center relative">
                        <Icon size={24} className={step.iconColor} />
                      </div>
                      <span className="text-4xl font-heading font-bold text-white/5">
                        {step.id}
                      </span>
                    </div>

                    <h3 className="text-xl font-heading font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
