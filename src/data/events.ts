import generatedGallery from "@/components/sections/gallery/data/gallery.json";

export interface FeaturedEvent {
  id: string;
  title: string;
  category: "Workshop" | "Event";
  date?: string;
  description: string;
  image: string;
  src: string;
  galleryLink?: string;
}

/**
 * Custom images mapping for the Events Section.
 * You can set custom image paths or URLs here by event key or ID,
 * or specify "eventImage": "/path/to/image.jpg" inside any event folder's metadata.json!
 */
export const customEventImages: Record<string, string> = {
  // Example overrides:
  // "mem-java-gui": "/assets/gallery/Java_gui_workshop/DSC_8709.JPG",
  // "memocracy": "/assets/gallery/memocracy/cover.jpg",
};

// Fallback list for events not yet present in public/assets/gallery/
const fallbackEvents: FeaturedEvent[] = [
  {
    id: "evt-dsa-java",
    title: "DSA using Java",
    category: "Workshop",
    date: "Date coming soon",
    description:
      "Master fundamental data structures, core algorithms, and time complexity analysis in Java through interactive problem-solving and coding practice.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop",
    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop",
    galleryLink: "#gallery",
  },
];

function normalizeKey(str: string): string {
  return str.toLowerCase().replace(/[^a-z0-9]/g, "");
}

// Automatically construct featuredEvents from scanned gallery metadata + custom image overrides
export const featuredEvents: FeaturedEvent[] = (() => {
  const galleryEvents: FeaturedEvent[] = generatedGallery.map((item) => {
    // Priority: customEventImages override > metadata.eventImage > item.image (cover image)
    const customImg =
      customEventImages[item.id] ||
      (item.folderName && customEventImages[item.folderName]) ||
      (item as { eventImage?: string }).eventImage ||
      item.image;

    return {
      id: `evt-${item.id.replace(/^mem-/, "")}`,
      title: item.title,
      category: item.category.toUpperCase().includes("WORKSHOP") ? "Workshop" : "Event",
      date: item.date,
      description: item.description || item.story || item.quote,
      image: customImg,
      src: customImg,
      galleryLink: "#gallery",
    };
  });

  const galleryKeys = new Set(generatedGallery.map((item) => normalizeKey(item.title)));
  const remainingFallbacks = fallbackEvents.filter(
    (fb) => !galleryKeys.has(normalizeKey(fb.title))
  );

  return [...galleryEvents, ...remainingFallbacks];
})();
