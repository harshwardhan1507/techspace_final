import generatedGallery from "./gallery.json";

export type ResourceType =
  | "github"
  | "drive"
  | "photos"
  | "youtube"
  | "certificate"
  | "website"
  | "registration"
  | "document"
  | "custom";

export interface Resource {
  type: ResourceType;
  label: string;
  url: string;
  icon?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  caption?: string | null;
  alt?: string;
  aspectRatio?: "wide" | "square" | "tall";
}

export interface EventPhase {
  title: string;
  date: string;
  focus: string;
}

export interface Memory {
  id: string;
  title: string;
  category: string;
  date: string;
  location: string;
  participants: string;
  quote: string;
  story: string;
  image: string;
  eventImage?: string;
  accentColor: string;
  folderName?: string;
  duration?: string;
  track?: string;
  description?: string;
  images?: string[];
  gallery?: GalleryImage[];
  highlights?: string[];
  technologies?: string[];
  resources?: Resource[];
  phases?: EventPhase[];
}

export const memories: Memory[] = generatedGallery as Memory[];
