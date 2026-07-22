"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

interface JoinModalContextType {
  isOpen: boolean;
  openJoinModal: () => void;
  closeJoinModal: () => void;
}

const JoinModalContext = createContext<JoinModalContextType | undefined>(undefined);

export function JoinModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openJoinModal = useCallback(() => setIsOpen(true), []);
  const closeJoinModal = useCallback(() => setIsOpen(false), []);

  return (
    <JoinModalContext.Provider value={{ isOpen, openJoinModal, closeJoinModal }}>
      {children}
    </JoinModalContext.Provider>
  );
}

export function useJoinModal() {
  const context = useContext(JoinModalContext);
  if (!context) {
    throw new Error("useJoinModal must be used within a JoinModalProvider");
  }
  return context;
}
