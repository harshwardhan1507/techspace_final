"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { TeamMember } from "./data";
// import { Github, Linkedin } from "lucide-react";

export function ExpandableTeamCards({ members }: { members: TeamMember[] }) {
  const [active, setActive] = useState<TeamMember | boolean | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm h-full w-full z-[100]"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 flex items-end sm:items-center justify-center z-[110] p-0 sm:p-4 md:p-8">
            <motion.div
              layoutId={`card-${active.id}-${id}`}
              ref={ref}
              className="w-full max-w-full sm:max-w-2xl max-h-[85vh] sm:max-h-[90vh] flex flex-col bg-[#08080C] border-t sm:border border-white/15 rounded-t-3xl sm:rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.9)] relative"
            >
              {/* Close Button */}
              <motion.button
                key={`button-${active.id}-${id}`}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.05 } }}
                className="absolute top-4 right-4 items-center justify-center bg-neutral-900/90 border border-white/20 rounded-full h-9 w-9 flex hover:bg-neutral-800 transition-colors z-[130] shadow-lg"
                onClick={() => setActive(null)}
                aria-label="Close details"
              >
                <CloseIcon />
              </motion.button>

              {/* Mobile Drag Handle Bar */}
              <div className="sm:hidden flex justify-center pt-2.5 pb-1 flex-shrink-0">
                <div className="w-12 h-1.5 rounded-full bg-white/20" />
              </div>

              <div className="flex flex-col md:flex-row flex-1 overflow-y-auto">
                {/* Left/Top side: Image */}
                <motion.div 
                  layoutId={`image-${active.id}-${id}`}
                  className="w-full md:w-2/5 h-44 sm:h-56 md:h-auto shrink-0 relative overflow-hidden bg-neutral-900"
                >
                  <img
                    src={active.image}
                    alt={active.name}
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#08080C] via-transparent to-transparent pointer-events-none" />
                </motion.div>

                {/* Right/Bottom side: Content */}
                <div className="flex-1 flex flex-col p-6 md:p-10 overflow-y-auto overflow-x-hidden [scrollbar-width:none]">
                  <div className="mb-6">
                    <motion.h3
                      layoutId={`title-${active.id}-${id}`}
                      className="text-2xl md:text-3xl font-bold text-white mb-1"
                    >
                      {active.name}
                    </motion.h3>
                    <motion.p
                      layoutId={`role-${active.id}-${id}`}
                      className="text-[#4682B4] font-medium text-lg tracking-wide"
                    >
                      {active.role}
                    </motion.p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, transition: { duration: 0.1 } }}
                    className="flex flex-col gap-6"
                  >
                    <div>
                      <p className="text-neutral-300 leading-relaxed">
                        {active.intro}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      {active.favoriteStack && (
                        <div>
                          <span className="block text-neutral-500 uppercase tracking-wider text-xs mb-1">Favorite Stack</span>
                          <span className="text-neutral-200">{active.favoriteStack}</span>
                        </div>
                      )}
                      {active.currentlyLearning && (
                        <div>
                          <span className="block text-neutral-500 uppercase tracking-wider text-xs mb-1">Currently Learning</span>
                          <span className="text-neutral-200">{active.currentlyLearning}</span>
                        </div>
                      )}
                    </div>

                    <div>
                      <span className="block text-neutral-500 uppercase tracking-wider text-xs mb-3">Technologies</span>
                      <div className="flex flex-wrap gap-2">
                        {active.technologies.map(tech => (
                          <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-neutral-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 mt-auto border-t border-white/5 flex gap-4">
                      {active.githubUrl && (
                        <a href={active.githubUrl} target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white transition-colors" aria-label="GitHub">
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {active.linkedinUrl && (
                        <a href={active.linkedinUrl} target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white transition-colors" aria-label="LinkedIn">
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
        {members.map((member) => (
          <motion.li
            layoutId={`card-${member.id}-${id}`}
            key={member.id}
            onClick={() => setActive(member)}
            className="group relative flex flex-col bg-[#050505] border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:border-[#4682B4]/50 transition-colors duration-300 min-h-[340px]"
          >
            <motion.div 
              layoutId={`image-${member.id}-${id}`}
              className="w-full aspect-[4/5] relative overflow-hidden"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
            </motion.div>

            <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col">
              <motion.h3
                layoutId={`title-${member.id}-${id}`}
                className="font-bold text-xl text-white mb-1"
              >
                {member.name}
              </motion.h3>
              <motion.p
                layoutId={`role-${member.id}-${id}`}
                className="text-[#4682B4] font-medium text-sm tracking-wide"
              >
                {member.role}
              </motion.p>
            </div>
          </motion.li>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-white"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

export const Github = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.3 6-1.5 6-6.76 0-1.5-.5-2.7-1.3-3.7.1-.3.6-1.7-.1-3.6 0 0-1-.3-3.3 1.2a11.5 11.5 0 0 0-6 0C7 3.3 6 3.6 6 3.6c-.7 1.9-.2 3.3-.1 3.6-1 .9-1.5 2.1-1.5 3.7 0 5.2 3 6.4 6 6.75-.8.8-1 2.1-1 3.25V22" />
    <path d="M9 20.3c-3 1-4-1-5-2" />
  </svg>
);

export const Linkedin = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
