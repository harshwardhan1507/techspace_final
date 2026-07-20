import { joinCtaConfig } from "../data";

export function JoinHeader() {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center gap-2">
        <div className="h-px w-8 bg-[#262A31]" />
        <span className="text-sm font-medium tracking-widest text-[#B7BDC8] uppercase">
          {joinCtaConfig.eyebrow}
        </span>
      </div>
      
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F5F5] max-w-xl">
        {joinCtaConfig.heading}
      </h2>
      
      <div className="space-y-2 mt-4 max-w-xl">
        <p className="text-lg md:text-xl text-[#B7BDC8] leading-relaxed">
          {joinCtaConfig.description}
        </p>
        <p className="text-sm font-medium text-[#7D8795]">
          {joinCtaConfig.trustSignal}
        </p>
      </div>
    </div>
  );
}
