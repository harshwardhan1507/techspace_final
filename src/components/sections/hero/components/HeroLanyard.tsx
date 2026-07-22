"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// Lazy load the 3D Lanyard component to improve initial page load performance
const Lanyard = dynamic(() => import("@/components/ui/reactbits/Lanyard/Lanyard"), {
  ssr: false,
});

export function HeroLanyard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Custom ease-out
        delay: 0.2
      }}
      className="relative w-full h-[420px] sm:h-[550px] md:h-[825px] lg:h-[962.5px] flex items-center justify-center overflow-visible pointer-events-auto"
    >
      <Lanyard
        fov={15.4}
        model="/hero/card.glb"
        bandTexture="/hero/lanyard_img.png"
        frontImage="/hero/lanyard_img.png"
        backImage="/hero/lanyard_img.png"
        lanyardImage="/hero/lanyard-band.svg"
        lanyardWidth={1.375}
      />
    </motion.div>
  );
}
