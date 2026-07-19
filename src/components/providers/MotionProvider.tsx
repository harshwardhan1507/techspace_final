"use client";

import React, { ReactNode } from "react";
// MotionProvider can be used to set up LazyMotion or global Animation contexts.

export function MotionProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
