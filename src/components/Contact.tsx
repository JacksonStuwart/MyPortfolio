"use client";

import { motion } from "framer-motion";
import { Copy, Mail, ExternalLink, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const email = "jstuwart1820@gmail.com";

  return (
    <section id="contact" className="pt-32 pb-20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-electric-light font-medium tracking-wide uppercase mb-4 block">Whats Next?</span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Building something AI-native?
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
            I am currently open to AI Engineering, Full Stack, and Product Engineering opportunities. Let&apos;s build the next generation of software together.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${email}`}
              className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto group"
            >
              <Mail size={18} />
              Say Hello
            </a>

            <button
              onClick={() => navigator.clipboard.writeText(email)}
              className="px-8 py-4 rounded-full border border-white/10 glass hover:bg-white/10 transition-colors text-white font-medium flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <Copy size={18} />
              Copy Email
            </button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            <a href="https://github.com/JacksonStuwart" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
              <Github size={20} />
              <span className="font-medium">GitHub</span>
              <ExternalLink size={14} className="opacity-50" />
            </a>
            <a href="https://www.linkedin.com/in/stuwart18/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-zinc-400 hover:text-[#0a66c2] transition-colors">
              <Linkedin size={20} />
              <span className="font-medium">LinkedIn</span>
              <ExternalLink size={14} className="opacity-50" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
