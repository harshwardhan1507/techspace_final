export function GalleryHeader() {
  return (
    <div className="flex flex-col items-center text-center gap-4 mb-12 sm:mb-16 mt-28">
      <div className="flex items-center gap-2">
        <div className="h-[1px] w-8 bg-[#4169E1]" />
        <span className="text-sm font-semibold tracking-wider text-[#4169E1] uppercase">
          Community
        </span>
        <div className="h-[1px] w-8 bg-[#4169E1]" />
      </div>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#F5F5F5] max-w-3xl">
        Moments That Define TechSpace
      </h2>
      <p className="text-[#B7BDC8] text-lg md:text-xl max-w-2xl leading-relaxed mt-2">
        From coding sessions and workshops to hackathons and community meetups, every event is another opportunity to learn, collaborate, and create something meaningful.
      </p>
    </div>
  );
}
