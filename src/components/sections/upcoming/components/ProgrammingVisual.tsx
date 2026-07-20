"use client";

import React from "react";
import { motion } from "framer-motion";

export function ProgrammingVisual() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Blueprint Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Abstract Code Brackets - Floating */}
      <motion.div
        className="absolute top-12 right-12 text-white/5 font-mono text-6xl font-light"
        animate={{
          y: [0, -10, 0],
          opacity: [0.05, 0.08, 0.05]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {"< />"}
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-16 text-white/4 font-mono text-5xl font-light"
        animate={{
          y: [0, 8, 0],
          opacity: [0.04, 0.07, 0.04]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        {"{ }"}
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-1/4 text-white/3 font-mono text-4xl font-light"
        animate={{
          y: [0, -6, 0],
          opacity: [0.03, 0.06, 0.03]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        {"( )"}
      </motion.div>

      {/* Floating Syntax Tokens */}
      <motion.div
        className="absolute top-24 left-24 text-white/3 font-mono text-sm tracking-wider"
        animate={{
          x: [0, 5, 0],
          opacity: [0.03, 0.05, 0.03]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {"if"}
      </motion.div>

      <motion.div
        className="absolute top-32 right-32 text-white/2 font-mono text-xs tracking-wider"
        animate={{
          x: [0, -4, 0],
          opacity: [0.02, 0.04, 0.02]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      >
        {"for"}
      </motion.div>

      <motion.div
        className="absolute bottom-32 right-24 text-white/3 font-mono text-sm tracking-wider"
        animate={{
          x: [0, 3, 0],
          opacity: [0.03, 0.05, 0.03]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      >
        {"class"}
      </motion.div>

      <motion.div
        className="absolute bottom-24 left-32 text-white/2 font-mono text-xs tracking-wider"
        animate={{
          x: [0, -3, 0],
          opacity: [0.02, 0.04, 0.02]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2.5
        }}
      >
        {"main()"}
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-20 text-white/2 font-mono text-xs tracking-wider"
        animate={{
          y: [0, 4, 0],
          opacity: [0.02, 0.04, 0.02]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      >
        {"int"}
      </motion.div>

      <motion.div
        className="absolute top-2/3 right-20 text-white/2 font-mono text-xs tracking-wider"
        animate={{
          y: [0, -3, 0],
          opacity: [0.02, 0.04, 0.02]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        {"print()"}
      </motion.div>

      {/* Glowing Connection Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 400 300" preserveAspectRatio="none">
        <motion.line
          x1="50" y1="50" x2="150" y2="100"
          stroke="rgba(14, 165, 233, 0.3)"
          strokeWidth="1"
          animate={{
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.line
          x1="150" y1="100" x2="250" y2="80"
          stroke="rgba(14, 165, 233, 0.3)"
          strokeWidth="1"
          animate={{
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.line
          x1="250" y1="80" x2="350" y2="150"
          stroke="rgba(14, 165, 233, 0.3)"
          strokeWidth="1"
          animate={{
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.circle
          cx="50" cy="50" r="3"
          fill="rgba(14, 165, 233, 0.4)"
          animate={{
            r: [3, 4, 3],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.circle
          cx="150" cy="100" r="2"
          fill="rgba(14, 165, 233, 0.4)"
          animate={{
            r: [2, 3, 2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        <motion.circle
          cx="250" cy="80" r="2"
          fill="rgba(14, 165, 233, 0.4)"
          animate={{
            r: [2, 3, 2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.circle
          cx="350" cy="150" r="3"
          fill="rgba(14, 165, 233, 0.4)"
          animate={{
            r: [3, 4, 3],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />
      </svg>

      {/* Blinking Terminal Cursor */}
      <motion.div
        className="absolute bottom-16 right-16 w-2 h-5 bg-white/10 rounded-sm"
        animate={{
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}
