"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "React Developer",
    company: "Saem Mosae",
    period: "",
    description: [
      "Engineered a scalable, modular component library in React, accelerating UI feature delivery.",
      "Integrated complex REST APIs to synchronize real-time data flows across the application front-end.",
      "Executed A/B tests and iterative UX improvements based on analytical feedback."
    ]
  },
  {
    id: 2,
    role: "Software Developer",
    company: "REACHH NGO",
    period: "",
    description: [
      "Built a robust inventory management system from scratch using Flutter and Firebase.",
      "Implemented comprehensive Role-Based Access Control (RBAC) securely structuring internal data handling.",
      "Engineered automated alerts, analytics processing, and reporting layers to optimize NGO operations."
    ]
  },
  {
    id: 3,
    role: "Customer Service Representative",
    company: "Diligenta",
    period: "",
    description: [
      "Maintained rigorous client-customer communication, bridging complex service gaps with extreme empathy and active listening.",
      "Ensured exceptionally strong client engagement, building trust and solidifying bonds that delivered real business value.",
      "Managed strict compliance standards and SLAs while prioritizing rapid, humane conflict resolution."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-zinc-950/30">
      <div className="absolute top-1/2 left-0 w-[400px] h-[600px] bg-violet/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4 flex items-center gap-4">
            <Briefcase className="text-violet-400" size={32} />
            Experience
          </h2>
          <p className="text-zinc-400 text-lg">
            A track record of building products, optimizing systems, and delivering user value.
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline dot & line (mobile) */}
              <div className="md:hidden absolute left-0 top-2 bottom-[-48px] w-px bg-white/10">
                <div className="absolute top-0 left-[-4px] w-2 h-2 rounded-full bg-violet-400 border-[3px] border-zinc-950 box-content" />
              </div>

              <div className="md:grid md:grid-cols-4 md:gap-8">
                {/* Timeline info (desktop) */}
                <div className="hidden md:block col-span-1 text-right relative pr-8">
                  <div className="absolute right-0 top-2 bottom-[-48px] w-px bg-white/10">
                    <div className="absolute top-0 right-[-4px] w-2 h-2 rounded-full bg-violet-400 border-[3px] border-zinc-950 box-content" />
                  </div>
                  <span className="text-zinc-500 font-medium text-sm block mt-1 tracking-wider uppercase">
                    {exp.period}
                  </span>
                </div>

                {/* Content */}
                <div className="md:col-span-3">
                  <div className="mb-1 md:hidden">
                    <span className="text-violet-400 font-medium text-xs tracking-wider uppercase bg-violet-400/10 px-2 py-1 rounded">
                      {exp.period}
                    </span>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-white group-hover:text-violet-400 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="text-electric-light font-medium mb-4">
                    {exp.company}
                  </div>

                  <ul className="space-y-3">
                    {exp.description.map((bullet, i) => (
                      <li key={i} className="text-zinc-400 text-sm md:text-base leading-relaxed flex items-start">
                        <span className="text-white/20 mr-3 mt-1.5">•</span>
                        <span className="flex-1">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
