"use client";

import { motion } from "framer-motion";
import { Cpu, Network, Lock, Fingerprint, Zap, HeartHandshake } from "lucide-react";

const reasons = [
  {
    title: "AI-First Mindset",
    description: "Treating AI as core infrastructure and reasoning engines rather than bolted-on features.",
    icon: Cpu,
  },
  {
    title: "Systems Thinking",
    description: "Designing architectures that gracefully handle complex agentic workflows and unpredictable LLM outputs.",
    icon: Network,
  },
  {
    title: "End-to-End Ownership",
    description: "From orchestrating the backend data pipelines to polishing the frontend user experience.",
    icon: Lock,
  },
  {
    title: "Agent Orchestration",
    description: "Moving beyond basic RAG; coordinating specialized sub-agents for resilient, autonomous systems.",
    icon: Fingerprint,
  },
  {
    title: "Fast Learning",
    description: "Aggressively adapting to new frameworks and papers in a space where state-of-the-art changes weekly.",
    icon: Zap,
  },
  {
    title: "Product & User Empathy",
    description: "Ensuring deep technical capabilities actually solve real human problems seamlessly.",
    icon: HeartHandshake,
  },
];

export default function WhyMe() {
  return (
    <section className="py-24 relative overflow-hidden bg-zinc-950/80">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            Why Work With Me
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Beyond the stack, I bring an engineering culture built for the AI era.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-3xl p-8 border border-white/5 hover:-translate-y-1 hover:border-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white mb-6 border border-white/10">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-3">
                  {reason.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
