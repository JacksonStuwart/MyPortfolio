"use client";

import { motion } from "framer-motion";
import { ArrowRight, Activity, Stethoscope, AppWindow, Workflow } from "lucide-react";

const projects = [
  {
    title: "Personal Agentic Swarm",
    category: "Multi-Agent Automation",
    description: "A comprehensive orchestration system where a main reasoning AI delegates daily human tasks to specialized sub-agents. It actively manages my WhatsApp messages on a priority basis, auto-sorts my primary email inbox, and keeps me thoroughly updated on global news impact. It even has direct access to my online codebase—I can simply ask it to alter a project without touching my local stack, and it will execute, review, and push code directly to GitHub autonomously.",
    stack: ["Autonomous Agents", "Cloud Reasoning", "API Workflows", "Auto-deploy"],
    icon: Workflow,
    link: "#",
  },
  {
    title: "AI-Native Support Applications",
    category: "Freelance & Day-to-Day Ops",
    description: "Building an expanding suite of AI-native applications designed to automate day-to-day operations and help users streamline their workflows. Constantly exploring and integrating state-of-the-art architectures using Vertex AI, Google Cloud pipelines, and Azure to bring enterprise-level automation into the hands of independent creators.",
    stack: ["Vertex AI", "Azure", "Google Cloud", "Next.js"],
    icon: AppWindow,
    link: "#",
  },
  {
    title: "AI-Powered Predictive Maintenance",
    category: "Industrial AI + Decision Support",
    description: "End-to-end ML pipeline using raw vibration sensor data for anomaly detection. Reached 98% classification accuracy via benchmarked models (Random Forest, CNN, Isolation Forest) and integrated LLM summaries for actionable maintenance insights.",
    stack: ["Python", "TensorFlow", "scikit-learn", "LLMs"],
    icon: Activity,
    link: "#",
  },
  {
    title: "Oxygen Dependency Classifier",
    category: "Healthcare AI",
    description: "Clinical decision-support workflow utilizing computer vision on chest X-rays. Leveraged transfer learning with PyTorch to predict oxygen dependency, achieving a robust 97% validation accuracy with practical clinical impact.",
    stack: ["PyTorch", "Computer Vision", "Python"],
    icon: Stethoscope,
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
              Featured Work
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl">
              From applied multi-agent orchestrations to full-stack AI-native products and automation workflows.
            </p>
          </div>
          <a href="https://github.com/JacksonStuwart" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white hover:text-electric-light transition-colors group pb-2">
            View All on GitHub <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const isLarge = index === 0;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group relative glass rounded-3xl p-8 border border-white/5 hover:border-white/20 transition-all duration-300 overflow-hidden ${isLarge ? 'md:col-span-2' : ''}`}
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white border border-white/10 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={24} />
                    </div>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-zinc-300 border border-white/10">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-heading font-bold text-white mb-3 group-hover:text-electric-light transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/10">
                    {project.stack.map(tech => (
                      <span key={tech} className="text-xs font-medium text-zinc-500 bg-black/20 px-2.5 py-1 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
