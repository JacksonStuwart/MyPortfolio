"use client";

import { motion } from "framer-motion";
import { Terminal, LayoutTemplate, Network, Bot, DatabaseZap, CloudCog, GitMerge, Server } from "lucide-react";

const stackGroups = [
  {
    category: "Languages",
    icon: Terminal,
    items: ["Python", "SQL", "JavaScript", "TypeScript"],
    color: "text-electric-light"
  },
  {
    category: "LLM & Agentic",
    icon: Bot,
    items: ["LangChain", "LlamaIndex", "LangGraph", "CrewAI", "AutoGen", "RAG"],
    color: "text-violet-400"
  },
  {
    category: "AI & ML",
    icon: Network,
    items: ["scikit-learn", "TensorFlow", "PyTorch", "MATLAB"],
    color: "text-cyan-400"
  },
  {
    category: "Cloud Architecture",
    icon: CloudCog,
    items: ["Google Cloud", "Azure", "Vertex AI", "AWS Basics", "Docker", "Kubernetes"],
    color: "text-blue-400"
  },
  {
    category: "Vector & Retrieval",
    icon: DatabaseZap,
    items: ["FAISS", "Pinecone", "Weaviate"],
    color: "text-emerald-400"
  },
  {
    category: "MLOps & Dev",
    icon: GitMerge,
    items: ["MLflow", "Kubeflow", "Git", "CI/CD"],
    color: "text-rose-400"
  },
  {
    category: "Backend & Data",
    icon: Server,
    items: ["Supabase", "REST APIs", "PostgreSQL", "MongoDB"],
    color: "text-amber-400"
  },
  {
    category: "Frontend",
    icon: LayoutTemplate,
    items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    color: "text-fuchsia-400"
  }
];

export default function TechStack() {
  return (
    <section id="stack" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            Technical Arsenal
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            My toolkit for building reliable, scalable, and intelligent software systems from the ground up.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stackGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-colors"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2 rounded-lg bg-white/5 border border-white/10 ${group.color}`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="font-heading font-semibold text-white">
                    {group.category}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span 
                      key={item} 
                      className="px-3 py-1.5 bg-black/30 border border-white/5 rounded-md text-sm text-zinc-300 hover:text-white transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
