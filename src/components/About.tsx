"use client";

import { motion } from "framer-motion";
import { GraduationCap, BrainCircuit, Rocket, MessagesSquare } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl">
            My background combines deep academic rigor in AI with high-velocity product shipping.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass-strong rounded-3xl p-8 md:p-10 border border-white/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-electric/10 blur-[80px] rounded-full pointer-events-none" />
            
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-electric-light">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold text-white">MSc in Artificial Intelligence</h3>
                <p className="text-zinc-400">University of Stirling</p>
              </div>
            </div>

            <div className="space-y-4 text-zinc-300 relative z-10 text-lg leading-relaxed">
              <p>
                As an AI-first engineer, I build more than just wrappers. My experience spans machine learning models, complex LLM applications, scalable data pipelines, and robust API-driven services.
              </p>
              <p>
                I am deeply interested in autonomous systems and AI-native product building. I don&apos;t just write code; I design systems where AI acts as core infrastructure, orchestration layers, and workflow multipliers, not just experimental features.
              </p>
            </div>
          </motion.div>

          {/* Positioning Cards */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass rounded-3xl p-6 border border-white/5 flex gap-4"
            >
              <div className="mt-1 text-cyan-light">
                <Rocket size={24} />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">High-Agency Builder</h4>
                <p className="text-sm text-zinc-400">Early-career but relentlessly fast learner, built for the pace of elite startup teams.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass rounded-3xl p-6 border border-white/5 flex gap-4"
            >
              <div className="mt-1 text-violet-light">
                <BrainCircuit size={24} />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">System Thinker</h4>
                <p className="text-sm text-zinc-400">Combining AI tools, cloud architecture, and engineering judgment to solve real problems.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass rounded-3xl p-6 border border-white/5 flex gap-4"
            >
              <div className="mt-1 text-electric-light">
                <MessagesSquare size={24} />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Communicative</h4>
                <p className="text-sm text-zinc-400">Strong customer-facing experience ensuring products align with user needs and business goals.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
