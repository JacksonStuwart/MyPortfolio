import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-zinc-950/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 pt-4 pb-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
            <span className="font-heading font-medium text-xl text-white">
              Jackson Stuwart
            </span>
            <p className="text-zinc-400 text-sm max-w-sm">
              I design systems, orchestrate agents, and ship AI-native products end-to-end.
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/JacksonStuwart"
              className="p-2 rounded-full border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-zinc-400 hover:text-white"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/stuwart18/"
              className="p-2 rounded-full border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-zinc-400 hover:text-[#0a66c2]"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:JSTUWART1820@gmail.com"
              className="p-2 rounded-full border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-zinc-400 hover:text-white"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/5 flex justify-center items-center text-sm text-zinc-500">
          <p className="mt-2 md:mt-0">
            Built with passion by Jackson Stuwart, © 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
