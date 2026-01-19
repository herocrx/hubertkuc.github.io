"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Linkedin, Send } from "lucide-react";
import { siteConfig } from "@/data/content";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Contact from ${name || "Website Visitor"}`;
    const body = `${message}\n\n---\nFrom: ${name}\nEmail: ${email}`;

    const mailtoUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 bg-terminal-bg">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-terminal-text">Get in Touch</h2>
            <p className="text-xl text-terminal-muted mt-4">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-4 p-6 bg-terminal-surface border border-terminal-border rounded-lg hover:border-terminal-cyan transition-colors"
            >
              <Mail size={24} className="text-terminal-cyan" />
              <div>
                <div className="text-terminal-muted text-sm">Email</div>
                <div className="text-terminal-text text-lg">{siteConfig.email}</div>
              </div>
            </a>

            <div className="flex items-center gap-4 p-6 bg-terminal-surface border border-terminal-border rounded-lg">
              <MapPin size={24} className="text-terminal-cyan" />
              <div>
                <div className="text-terminal-muted text-sm">Location</div>
                <div className="text-terminal-text text-lg">{siteConfig.location}</div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mb-16">
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 bg-terminal-surface border border-terminal-border rounded-lg text-terminal-text hover:border-terminal-cyan hover:text-terminal-cyan transition-all"
            >
              <Linkedin size={22} />
              <span className="text-lg">LinkedIn</span>
            </a>
          </div>

          {/* Contact Form */}
          <div className="bg-terminal-surface border border-terminal-border rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-terminal-text mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-terminal-muted mb-2">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-terminal-bg border border-terminal-border rounded-lg text-terminal-text text-lg focus:outline-none focus:border-terminal-cyan transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-terminal-muted mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-terminal-bg border border-terminal-border rounded-lg text-terminal-text text-lg focus:outline-none focus:border-terminal-cyan transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-terminal-muted mb-2">Message</label>
                <textarea
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 bg-terminal-bg border border-terminal-border rounded-lg text-terminal-text text-lg focus:outline-none focus:border-terminal-cyan transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-terminal-green text-terminal-bg font-semibold rounded-lg flex items-center justify-center gap-3 hover:bg-terminal-green/90 transition-colors text-lg"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="max-w-5xl mx-auto px-6 mt-16 text-center text-terminal-muted">
        <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
      </div>
    </section>
  );
}
