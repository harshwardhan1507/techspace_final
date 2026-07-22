export const shadows = {
  // Base elevation
  elevation: {
    low: "0 2px 10px rgba(0, 0, 0, 0.1)",
    medium: "0 4px 20px rgba(0, 0, 0, 0.3)",
    high: "0 8px 30px rgba(0, 0, 0, 0.5)",
  },
  
  // Specific use cases
  card: {
    default: "0 4px 20px rgba(0, 0, 0, 0.3)",
    hover: "0 8px 30px rgba(0, 0, 0, 0.4)",
  },
  glow: {
    subtle: (color: string) => `0 0 20px ${color}`,
    strong: (color: string) => `0 0 40px ${color}`,
  }
};
