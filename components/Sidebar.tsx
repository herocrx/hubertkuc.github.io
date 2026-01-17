"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, User, Briefcase, Code, Mail } from "lucide-react";
import { siteConfig } from "@/data/content";

const navItems = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Skills", href: "#skills", icon: Code },
  { label: "Contact", href: "#contact", icon: Mail },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.replace("#", ""));

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed left-0 top-0 h-screen w-20 hidden lg:flex flex-col items-center justify-between py-8 bg-terminal-surface/50 backdrop-blur-sm border-r border-terminal-border z-50"
    >
      {/* Logo / Initials */}
      <a
        href="#home"
        className="w-12 h-12 rounded-xl bg-terminal-cyan/10 border border-terminal-cyan/30 flex items-center justify-center text-terminal-cyan font-bold text-lg hover:bg-terminal-cyan/20 transition-all"
      >
        {siteConfig.name.split(" ").map((n) => n[0]).join("")}
      </a>

      {/* Navigation Icons */}
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.href.replace("#", "");

          return (
            <a
              key={item.href}
              href={item.href}
              className={`group relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                isActive
                  ? "bg-terminal-cyan/20 text-terminal-cyan"
                  : "text-terminal-muted hover:text-terminal-text hover:bg-terminal-bg"
              }`}
            >
              <Icon size={22} />

              {/* Active indicator */}
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute left-0 w-1 h-8 bg-terminal-cyan rounded-r-full"
                />
              )}

              {/* Tooltip */}
              <span className="absolute left-full ml-4 px-3 py-1.5 bg-terminal-surface border border-terminal-border rounded-lg text-sm text-terminal-text opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap">
                {item.label}
              </span>
            </a>
          );
        })}
      </nav>

      {/* Bottom decoration */}
      <div className="w-8 h-8 rounded-full border border-terminal-border flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-terminal-green animate-pulse" />
      </div>
    </motion.aside>
  );
}
