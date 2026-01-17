"use client";

import { motion } from "framer-motion";
import { ArrowDown, Linkedin } from "lucide-react";
import { siteConfig } from "@/data/content";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-terminal-bg px-4"
    >
      <div className="max-w-5xl mx-auto text-center py-20">
        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 relative"
        >
          {/* Glowing ring behind the photo */}
          <div className="absolute inset-0 mx-auto w-[200px] h-[200px] rounded-full bg-gradient-to-r from-terminal-cyan via-terminal-green to-terminal-cyan opacity-60 blur-xl animate-pulse" />
          <div className="relative">
            <Image
              src="/profile.jpg"
              alt={siteConfig.name}
              width={180}
              height={180}
              className="rounded-full mx-auto border-4 border-terminal-cyan/80 shadow-[0_0_40px_rgba(0,255,255,0.3),0_0_80px_rgba(0,255,255,0.1),0_20px_40px_rgba(0,0,0,0.5)] ring-2 ring-terminal-green/30 ring-offset-4 ring-offset-terminal-bg"
              priority
            />
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6"
        >
          <span className="text-terminal-green text-lg">$ whoami</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-terminal-text mb-6"
        >
          {siteConfig.name}
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-2xl md:text-3xl text-terminal-cyan mb-8"
        >
          {siteConfig.title}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl text-terminal-muted mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          {siteConfig.description}
        </motion.p>

        {/* Status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
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
          transition={{ delay: 0.6 }}
        >
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
          transition={{ delay: 0.7 }}
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
