export function EventsHeader() {
  return (
    <div className="flex flex-col items-start gap-4 mb-12 sm:mb-16">
      <div className="flex items-center gap-2">
        <div className="h-[1px] w-8 bg-[#4169E1]" />
        <span className="text-sm font-semibold tracking-wider text-[#4169E1] uppercase">
          Upcoming Events
        </span>
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F5F5]">
        Learn. Build.{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4169E1] to-[#8A2BE2]">
          Collaborate.
        </span>
      </h2>
      <p className="text-[#B7BDC8] text-lg md:text-xl max-w-2xl leading-relaxed mt-2">
        Every workshop is designed to help students explore new technologies, build practical skills, and connect with fellow developers.
      </p>
    </div>
  );
}
