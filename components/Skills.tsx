"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/data/content";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = [...new Set(skills.map((s) => s.category))];

  const categoryColors: Record<string, string> = {
    Languages: "border-terminal-cyan text-terminal-cyan",
    Platforms: "border-terminal-green text-terminal-green",
    Technical: "border-terminal-purple text-terminal-purple",
    Graphics: "border-terminal-orange text-terminal-orange",
    Engineering: "border-terminal-pink text-terminal-pink",
  };

  return (
    <section id="skills" className="py-24 bg-terminal-bg">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-terminal-text">Skills</h2>
          </div>

          {/* Skills by category */}
          <div className="space-y-10">
            {categories.map((category, catIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-terminal-muted mb-4">
                  {category}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {skills
                    .filter((s) => s.category === category)
                    .map((skill, index) => (
                      <motion.span
                        key={skill.name}
                        className={`px-4 py-2 rounded-lg border bg-terminal-surface/50 text-base ${categoryColors[category] || "border-terminal-border text-terminal-text"}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                      >
                        {skill.name}
                      </motion.span>
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
