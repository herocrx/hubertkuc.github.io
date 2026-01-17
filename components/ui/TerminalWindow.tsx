"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TerminalWindowProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export default function TerminalWindow({ title, children, className = "" }: TerminalWindowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`bg-terminal-surface border border-terminal-border rounded-lg overflow-hidden ${className}`}
    >
      {/* Title bar */}
      <div className="flex items-center gap-4 px-4 py-3 bg-terminal-bg border-b border-terminal-border">
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-terminal-red" />
          <span className="w-3 h-3 rounded-full bg-terminal-yellow" />
          <span className="w-3 h-3 rounded-full bg-terminal-green" />
        </div>
        <span className="text-terminal-muted text-sm">{title}</span>
      </div>

      {/* Content */}
      <div className="p-6">
        {children}
      </div>
    </motion.div>
  );
}
