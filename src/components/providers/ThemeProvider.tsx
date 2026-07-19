"use client";

import React, { createContext, useContext, ReactNode } from "react";

interface ThemeContextType {
  theme: "dark" | "light";
  setTheme: (theme: "dark" | "light") => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Simple provider placeholder, defaulting to dark as per requirements
  const [theme, setTheme] = React.useState<"dark" | "light">("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
