import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { commits } from "../data/commits";
import { IntroPhase } from "../hooks/useIntro";
import { CommitNode } from "./CommitNode";

interface GitTimelineProps {
  phase: IntroPhase;
}

export function GitTimeline({ phase }: GitTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  
  // Start the line animation when phase reaches timeline
  useEffect(() => {
    if (phase === "timeline" || phase === "head-slide" || phase === "checkout") {
      controls.start({
        pathLength: 1,
        transition: { duration: 1.5, ease: "linear" }
      });
    } else if (phase === "done") {
      controls.stop();
    }
  }, [phase, controls]);

  return (
    <div className="relative flex flex-col items-start pt-16" ref={containerRef}>
      {/* SVG Connector Line */}
      <div className="absolute left-[5.5px] top-[74px] bottom-[30px] w-1 z-0 pointer-events-none">
        <svg 
          width="4" 
          height="100%" 
          viewBox="0 0 4 100" 
          preserveAspectRatio="none"
          className="overflow-visible"
        >
          <motion.line
            x1="2"
            y1="0"
            x2="2"
            y2="100"
            stroke="#262A31"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={controls}
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      {/* Nodes */}
      {commits.map((commit, index) => (
        <CommitNode
          key={commit.id}
          id={commit.id}
          message={commit.message}
          index={index}
          total={commits.length}
          phase={phase}
        />
      ))}
    </div>
  );
}
