import { JoinHeader } from "./components/JoinHeader";
import { JoinContent } from "./components/JoinContent";
import { GlobeWrapper } from "./components/GlobeWrapper";

export default function JoinSection() {
  return (
    <section 
      id="join" 
      aria-label="Join TechSpace"
      className="relative w-full pt-40 pb-[140px] overflow-hidden bg-[#050505]"
    >
      {/* Background Blending */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#020202] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
          
          {/* Left Content (55%) */}
          <div className="w-full lg:w-[55%] flex flex-col order-1 lg:order-1">
            <JoinHeader />
            <JoinContent />
          </div>

          {/* Right Globe (45%) */}
          <div className="w-full lg:w-[45%] order-2 lg:order-2 flex justify-center lg:justify-end">
            <GlobeWrapper />
          </div>
          
        </div>
      </div>
    </section>
  );
}
