"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Code, 
  Brain, 
  Shield, 
  Trophy, 
  GitBranch, 
  Lightbulb,
  LucideIcon 
} from "lucide-react";
import SpotlightCard from "@/components/ui/reactbits/SpotlightCard/SpotlightCard";
import { Domain } from "../data";

interface DomainCardProps {
  domain: Domain;
  index: number;
}

const iconMap: Record<string, LucideIcon> = {
  Code,
  Brain,
  Shield,
  Trophy,
  GitBranch,
  Lightbulb,
};

export function DomainCard({ domain, index }: DomainCardProps) {
  const Icon = iconMap[domain.icon] || Code;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <SpotlightCard
        className="group h-full p-8 rounded-2xl bg-white/5 dark:bg-neutral-900/50 backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-800/50 flex flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-neutral-900/10 dark:hover:shadow-neutral-100/5"
        spotlightColor="rgba(0,229,255,0.15)"
      >
        <div className="flex items-start justify-between mb-6">
          <div className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800/50 group-hover:bg-neutral-200 dark:group-hover:bg-neutral-800 transition-colors duration-300">
            <Icon className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />
          </div>
          <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-neutral-400 dark:via-neutral-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors duration-300">
          {domain.title}
        </h3>
        
        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed flex-grow">
          {domain.description}
        </p>
        
        <div className="mt-6 pt-6 border-t border-neutral-200/50 dark:border-neutral-800/50">
          <motion.span
            className="inline-flex items-center text-sm font-medium text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors duration-300"
            whileHover={{ x: 4 }}
          >
            Learn More
            <svg 
              className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </motion.span>
        </div>
      </SpotlightCard>
    </motion.div>
  );
}
