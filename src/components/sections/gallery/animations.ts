export const stageVariants = {
  initial: { opacity: 0, scale: 1.05, x: 20 },
  animate: { 
    opacity: 1, 
    scale: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  },
  exit: { 
    opacity: 0, 
    scale: 0.98, 
    x: -20,
    transition: { duration: 0.4, ease: "easeIn" }
  }
};

export const overlayStagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const overlayItem = {
  initial: { opacity: 0, y: 15 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
  }
};
