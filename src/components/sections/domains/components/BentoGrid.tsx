import React from "react";
import { DomainTile } from "./DomainTile";
import { domainsData } from "@/data/domains";

export function BentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(200px,auto)]">
      {domainsData.map((domain, index) => {
        const sizeClass = {
          large: "md:row-span-1 md:col-span-2 lg:row-span-2 lg:col-span-2",
          medium: "md:row-span-1 md:col-span-1 lg:row-span-1 lg:col-span-1",
          small: "md:row-span-1 md:col-span-1 lg:row-span-1 lg:col-span-1",
        }[domain.size];

        return (
          <div key={domain.id} className={sizeClass}>
            <DomainTile domain={domain} index={index} />
          </div>
        );
      })}
    </div>
  );
}
