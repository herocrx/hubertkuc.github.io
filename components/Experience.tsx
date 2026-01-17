"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";
import { experiences } from "@/data/content";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 bg-terminal-bg">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="mb-12">
            <span className="text-terminal-green text-lg">$ cat experience.log</span>
            <h2 className="text-4xl font-bold text-terminal-text mt-4">Experience</h2>
          </div>

          {/* Experience list */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="border-l-2 border-terminal-border pl-8 hover:border-terminal-cyan transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                {/* Period */}
                <div className="text-terminal-green mb-2">{exp.period}</div>

                {/* Role & Company */}
                <h3 className="text-2xl font-bold text-terminal-text mb-1">
                  {exp.role}
                </h3>
                <div className="text-xl text-terminal-cyan mb-3">
                  {exp.company}
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 text-terminal-muted mb-4">
                  <MapPin size={16} />
                  <span>{exp.location}</span>
                </div>

                {/* Description */}
                <p className="text-terminal-text text-lg leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm bg-terminal-surface border border-terminal-border rounded-md text-terminal-cyan"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
