"use client";

import { motion, Variants } from "framer-motion";
import { galleryItems } from "../data/galleryItems";
import { GalleryCard } from "./GalleryCard";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 20 } 
  },
};

export function GalleryGrid() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      // CSS Masonry classes (Tailwind natively supports columns)
      className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 sm:gap-6 w-full max-w-[1400px] mx-auto"
    >
      {galleryItems.map((item) => (
        <motion.div
          key={item.id}
          variants={itemVariants}
          className="break-inside-avoid"
        >
          <GalleryCard item={item} />
        </motion.div>
      ))}
    </motion.div>
  );
}
