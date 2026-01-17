"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypingTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  showCursor?: boolean;
  onComplete?: () => void;
}

export default function TypingText({
  text,
  speed = 50,
  delay = 0,
  className = "",
  showCursor = true,
  onComplete,
}: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!isTyping) return;

    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
      onComplete?.();
    }
  }, [displayedText, isTyping, text, speed, onComplete]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && (
        <motion.span
          className="inline-block w-2 h-[1.1em] bg-terminal-green ml-0.5 align-text-bottom"
          animate={{ opacity: isComplete ? [1, 0] : 1 }}
          transition={{
            duration: 0.5,
            repeat: isComplete ? Infinity : 0,
            repeatType: "reverse"
          }}
        />
      )}
    </span>
  );
}
