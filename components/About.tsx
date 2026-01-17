"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Mail } from "lucide-react";
import { aboutContent, siteConfig } from "@/data/content";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-terminal-surface">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="mb-12">
            <span className="text-terminal-green text-lg">$ cat about.md</span>
            <h2 className="text-4xl font-bold text-terminal-text mt-4">About Me</h2>
          </div>

          {/* Location & Email */}
          <div className="flex flex-wrap gap-6 mb-10">
            <div className="flex items-center gap-2 text-terminal-muted">
              <MapPin size={20} className="text-terminal-cyan" />
              <span>{siteConfig.location}</span>
            </div>
            <div className="flex items-center gap-2 text-terminal-muted">
              <Mail size={20} className="text-terminal-cyan" />
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-terminal-cyan transition-colors"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>

          {/* Description */}
          <div className="text-lg text-terminal-text leading-relaxed mb-12 whitespace-pre-line">
            {aboutContent.description}
          </div>

          {/* Highlights */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-terminal-cyan mb-6">Highlights</h3>
            {aboutContent.highlights.map((highlight, index) => (
              <motion.div
                key={highlight}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <span className="text-terminal-green text-xl">›</span>
                <span className="text-terminal-text text-lg">{highlight}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
