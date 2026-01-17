"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Award } from "lucide-react";
import { education } from "@/data/content";
import Image from "next/image";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 bg-terminal-surface">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="mb-12">
            <span className="text-terminal-green text-lg">$ cat education.log</span>
            <h2 className="text-4xl font-bold text-terminal-text mt-4">Education</h2>
          </div>

          {/* Education list */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                className="flex gap-6 p-6 bg-terminal-bg border border-terminal-border rounded-xl hover:border-terminal-cyan transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                {/* Logo */}
                <div className="flex-shrink-0 w-16 h-16 bg-white rounded-lg border border-terminal-border flex items-center justify-center p-2">
                  <Image
                    src={edu.logo}
                    alt={`${edu.institution} logo`}
                    width={48}
                    height={48}
                    className="object-contain w-full h-full"
                  />
                </div>

                {/* Content */}
                <div className="flex-grow">
                  {/* Period */}
                  <div className="text-terminal-green text-sm mb-1">{edu.period}</div>

                  {/* Institution */}
                  <h3 className="text-xl font-bold text-terminal-text mb-1">
                    {edu.institution}
                  </h3>

                  {/* Degree */}
                  <div className="text-lg text-terminal-cyan mb-2">
                    {edu.degree}
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-terminal-muted text-sm mb-3">
                    <MapPin size={14} />
                    <span>{edu.location}</span>
                  </div>

                  {/* Highlights */}
                  {edu.highlights.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="inline-flex items-center gap-1 px-3 py-1 text-sm bg-terminal-surface border border-terminal-border rounded-full text-terminal-muted"
                        >
                          {highlight.includes("award") ? (
                            <Award size={12} className="text-terminal-yellow" />
                          ) : (
                            <GraduationCap size={12} className="text-terminal-purple" />
                          )}
                          {highlight}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
