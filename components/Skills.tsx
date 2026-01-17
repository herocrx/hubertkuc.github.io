"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/data/content";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = [...new Set(skills.map((s) => s.category))];

  return (
    <section id="skills" className="py-24 bg-terminal-surface">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="mb-12">
            <span className="text-terminal-green text-lg">$ cat skills.json</span>
            <h2 className="text-4xl font-bold text-terminal-text mt-4">Skills</h2>
          </div>

          {/* Skills by category */}
          <div className="space-y-12">
            {categories.map((category, catIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-terminal-cyan mb-6">
                  {category}
                </h3>

                <div className="space-y-5">
                  {skills
                    .filter((s) => s.category === category)
                    .map((skill, index) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-lg text-terminal-text">{skill.name}</span>
                          <span className="text-terminal-muted">{skill.level}%</span>
                        </div>
                        <div className="h-3 bg-terminal-bg rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-terminal-cyan rounded-full"
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : {}}
                            transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                          />
                        </div>
                      </div>
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
