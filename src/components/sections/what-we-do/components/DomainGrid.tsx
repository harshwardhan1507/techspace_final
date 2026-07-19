import React from "react";
import { DomainCard } from "./DomainCard";
import { domains } from "../data";

export function DomainGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {domains.map((domain, index) => (
        <DomainCard key={domain.id} domain={domain} index={index} />
      ))}
    </div>
  );
}
