import React from "react";
import { DomainTile } from "./DomainTile";
import { domainsData } from "@/data/domains";
import { layout } from "@/design/tokens/layout";

export function BentoGrid() {
  return (
    <div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(200px,auto)]"
      style={{
        gap: layout.gridGap.medium,
        marginTop: layout.rhythm.headerToGrid,
      }}
    >
      {domainsData.map((domain, index) => {
        // Asymmetric balanced grid:
        // Programming and AI are "large" (span 2 cols, 2 rows on large screens)
        // Cyber, Open Source, CP, Mobile are "medium" (span 1 col, 1 row on large screens)
        // This gives us 2 large and 4 equal cards.
        
        let sizeClass = "md:col-span-1 lg:col-span-1";
        
        // Let's use the first two as large to create the 2 large + 4 equal balanced grid
        if (index === 0 || index === 1) {
           sizeClass = "md:col-span-2 lg:col-span-2 lg:row-span-2";
        }

        return (
          <div key={domain.id} className={sizeClass}>
            <DomainTile domain={domain} index={index} />
          </div>
        );
      })}
    </div>
  );
}
