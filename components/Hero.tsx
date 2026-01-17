"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import { siteConfig } from "@/data/content";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-terminal-bg px-4"
    >
      <div className="max-w-3xl mx-auto text-center py-20">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="text-terminal-green text-lg">$ whoami</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-terminal-text mb-6"
        >
          {siteConfig.name}
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-3xl text-terminal-cyan mb-8"
        >
          {siteConfig.title}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl text-terminal-muted mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          {siteConfig.description}
        </motion.p>

        {/* Status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-2 mb-12"
        >
          <span className="w-3 h-3 rounded-full bg-terminal-green animate-pulse" />
          <span className="text-terminal-green">Open to opportunities</span>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 bg-terminal-surface border border-terminal-border rounded-lg text-terminal-text hover:border-terminal-cyan hover:text-terminal-cyan transition-all"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 bg-terminal-surface border border-terminal-border rounded-lg text-terminal-text hover:border-terminal-cyan hover:text-terminal-cyan transition-all"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-terminal-green text-terminal-bg font-semibold rounded-lg hover:bg-terminal-green/90 transition-colors text-lg"
          >
            Get in Touch
          </a>
          <a
            href="#experience"
            className="px-8 py-4 border-2 border-terminal-cyan text-terminal-cyan font-semibold rounded-lg hover:bg-terminal-cyan/10 transition-colors text-lg"
          >
            View Experience
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="mx-auto text-terminal-muted" size={28} />
        </motion.div>
      </div>
    </section>
  );
}
