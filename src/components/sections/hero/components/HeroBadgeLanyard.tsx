"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";

// Dynamically import the Lanyard component (client-side only) to avoid SSR issues with Three.js
const Lanyard = dynamic(() => import("@/components/ui/react-bits/lanyard/Lanyard"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <Loader2 className="w-12 h-12 text-muted-foreground animate-spin" />
    </div>
  ),
});

export function HeroBadgeLanyard() {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden">
      <Suspense fallback={
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader2 className="w-12 h-12 text-muted-foreground animate-spin" />
        </div>
      }>
        <div className="absolute inset-0 -top-20 md:-top-32 w-full h-[120%] pointer-events-auto">
          {/* @ts-expect-error: React Bits Lanyard infers null for image props because of JS default params */}
          <Lanyard
            frontImage="/assets/lanyard/front.svg"
            backImage="/assets/lanyard/back.svg"
            lanyardImage="/assets/lanyard/lanyard.png"
            lanyardWidth={1}
            imageFit="contain" // Ensures our SVG designs fit perfectly
            fov={22}
            position={[0, 0, 20]} // Push it slightly closer
          />
        </div>
      </Suspense>
    </div>
  );
}
