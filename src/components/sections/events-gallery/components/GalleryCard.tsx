import Image from "next/image";
import { GalleryItem } from "../data/galleryItems";

export function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <div className="group relative w-full mb-4 sm:mb-6 rounded-xl overflow-hidden cursor-pointer border border-[#262A31] bg-[#050505] shadow-sm transform-gpu transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#4169E1]/30">
      <div className="relative w-full h-auto overflow-hidden">
        {/* Next.js Image with natural aspect ratio */}
        <Image
          src={item.image}
          alt={item.title}
          width={800}
          height={600}
          className="w-full h-auto object-cover transform-gpu transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020202]/90 via-[#020202]/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
        
        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 w-full p-5 flex flex-col justify-end">
          {item.category && (
            <span className="mb-2 text-[10px] sm:text-xs font-bold tracking-wider text-[#4169E1] uppercase w-fit px-2 py-0.5 rounded-full bg-[#4169E1]/10 backdrop-blur-sm border border-[#4169E1]/20">
              {item.category}
            </span>
          )}
          <h4 className="text-lg sm:text-xl font-bold text-white mb-1 transform-gpu transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
            {item.title}
          </h4>
          <p className="text-sm text-[#B7BDC8] font-medium opacity-0 transform-gpu transition-all duration-300 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
            {item.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
