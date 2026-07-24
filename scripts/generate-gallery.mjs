import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const GALLERY_DIR = path.join(process.cwd(), "public", "assets", "gallery");
const OUTPUT_FILE = path.join(
  process.cwd(),
  "src",
  "components",
  "sections",
  "gallery",
  "data",
  "gallery.json"
);

const SUPPORTED_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

const EVENT_PRIORITY = {
  memocracy: 1,
  codeblitz: 2,
  artistic_aura: 3,
  artisticaura: 3,
  java_gui_workshop: 4,
  javaguiworkshop: 4,
  java_workshop: 4,
  javaworkshop: 4,
  devops_workshop: 5,
  devopsworkshop: 5,
  java_dsa: 6,
  javadsa: 6,
  dsa_workshop: 6,
  dsaworkshop: 6,
};

const DEFAULT_ACCENT_COLORS = [
  "#06B6D4", // Electric Cyan
  "#10B981", // Emerald Green
  "#EC4899", // Pink
  "#8B5CF6", // Purple
  "#0EA5E9", // Azure Blue
  "#2563EB", // Royal Blue
  "#F59E0B", // Amber
];

function formatTitle(folderName) {
  return folderName
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .replace(/\bGui\b/g, "GUI")
    .replace(/\bDsa\b/g, "DSA")
    .replace(/\bDevops\b/g, "DevOps")
    .replace(/\bAi\b/g, "AI");
}

function normalizeResources(rawResources) {
  if (!rawResources) return undefined;
  if (Array.isArray(rawResources)) return rawResources;

  if (typeof rawResources === "object") {
    const list = [];
    if (rawResources.github) {
      list.push({
        type: "github",
        label: "GitHub Repository",
        url: rawResources.github,
      });
    }
    if (rawResources.slides) {
      list.push({
        type: "document",
        label: "Workshop Slides",
        url: rawResources.slides,
      });
    }
    if (rawResources.recording) {
      list.push({
        type: "youtube",
        label: "Workshop Recording",
        url: rawResources.recording,
      });
    }
    if (rawResources.photos || rawResources.drive) {
      list.push({
        type: rawResources.photos ? "photos" : "drive",
        label: rawResources.photos ? "Event Photos" : "Google Drive Folder",
        url: rawResources.photos || rawResources.drive,
      });
    }
    Object.keys(rawResources).forEach((key) => {
      if (["github", "slides", "recording", "photos", "drive"].includes(key)) return;
      if (typeof rawResources[key] === "string") {
        list.push({
          type: "custom",
          label: formatTitle(key),
          url: rawResources[key],
        });
      }
    });
    return list.length > 0 ? list : undefined;
  }
  return undefined;
}

function generateGallery() {
  if (!fs.existsSync(GALLERY_DIR)) {
    console.warn(`[gallery-generator] Directory not found: ${GALLERY_DIR}`);
    fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify([], null, 2), "utf8");
    return;
  }

  const entries = fs.readdirSync(GALLERY_DIR, { withFileTypes: true });
  const eventFolders = entries.filter((entry) => entry.isDirectory());

  const memories = [];

  eventFolders.forEach((folder, folderIdx) => {
    const folderName = folder.name;
    const folderPath = path.join(GALLERY_DIR, folderName);

    // Read metadata.json if present
    let metadata = {};
    const metadataPath = path.join(folderPath, "metadata.json");
    if (fs.existsSync(metadataPath)) {
      try {
        metadata = JSON.parse(fs.readFileSync(metadataPath, "utf8"));
      } catch (err) {
        console.error(`[gallery-generator] Error parsing metadata.json in ${folderName}:`, err);
      }
    }

    // Read captions.json if present
    let captions = {};
    const captionsPath = path.join(folderPath, "captions.json");
    if (fs.existsSync(captionsPath)) {
      try {
        captions = JSON.parse(fs.readFileSync(captionsPath, "utf8"));
      } catch (err) {
        console.error(`[gallery-generator] Error parsing captions.json in ${folderName}:`, err);
      }
    }

    // List image files inside folder
    const allFiles = fs.readdirSync(folderPath);
    const validImages = allFiles.filter((file) => {
      if (file.startsWith(".") || file === "metadata.json" || file === "captions.json") {
        return false;
      }
      const ext = path.extname(file).toLowerCase();
      return SUPPORTED_EXTENSIONS.has(ext);
    });

    // Skip folder if no valid images are present
    if (validImages.length === 0) {
      console.log(`[gallery-generator] Skipping empty folder: ${folderName}`);
      return;
    }

    // Sort images (cover.* first, then natural sorting)
    validImages.sort((a, b) => {
      const aIsCover = path.basename(a, path.extname(a)).toLowerCase() === "cover";
      const bIsCover = path.basename(b, path.extname(b)).toLowerCase() === "cover";
      if (aIsCover && !bIsCover) return -1;
      if (!aIsCover && bIsCover) return 1;
      return a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });
    });

    const title = metadata.title || formatTitle(folderName);
    
    let coverPath = metadata.coverImage || metadata.cover;
    if (coverPath && !coverPath.startsWith("/") && !coverPath.startsWith("http")) {
      coverPath = `/assets/gallery/${folderName}/${encodeURI(coverPath)}`;
    }
    if (!coverPath) {
      const coverFile = validImages.find(
        (file) => path.basename(file, path.extname(file)).toLowerCase() === "cover"
      ) || validImages[0];
      coverPath = `/assets/gallery/${folderName}/${encodeURI(coverFile)}`;
    }

    const imagePaths = validImages.map((file) => `/assets/gallery/${folderName}/${encodeURI(file)}`);

    const galleryItems = validImages.map((file, idx) => {
      const customCaption = captions[file] || (metadata.captions && metadata.captions[file]) || null;
      const altText = customCaption || `Students participating during the ${title} organized by TechSpace.`;
      
      return {
        id: `img-${folderName.toLowerCase()}-${idx + 1}`,
        src: `/assets/gallery/${folderName}/${encodeURI(file)}`,
        caption: customCaption || title,
        alt: altText,
        aspectRatio: idx % 3 === 0 ? "wide" : idx % 3 === 1 ? "square" : "tall",
      };
    });

    const memoryId = metadata.id || `mem-${folderName.toLowerCase().replace(/[^a-z0-9]/g, "-")}`;
    const accentColor = metadata.accentColor || DEFAULT_ACCENT_COLORS[folderIdx % DEFAULT_ACCENT_COLORS.length];

    const parsedResources = normalizeResources(metadata.resources);

    memories.push({
      folderName,
      id: memoryId,
      title,
      category: metadata.category || "WORKSHOP",
      date: metadata.date || "Date coming soon",
      location: metadata.location || "TechSpace Lab",
      participants: metadata.participants || "TechSpace Community",
      duration: metadata.duration || undefined,
      track: metadata.track || undefined,
      quote: metadata.quote || `Memories and moments from ${title}.`,
      story: metadata.story || `Hands-on practical experience and interactive learning during ${title}.`,
      description: metadata.description || metadata.story || undefined,
      image: coverPath,
      eventImage: metadata.eventImage || metadata.cardImage || metadata.featuredImage || undefined,
      accentColor,
      images: imagePaths,
      gallery: galleryItems,
      highlights: metadata.highlights || undefined,
      technologies: metadata.technologies || undefined,
      resources: parsedResources,
    });
  });

  // Sort events based on EVENT_PRIORITY then title
  memories.sort((a, b) => {
    const keyA = a.folderName.toLowerCase().replace(/[^a-z0-9]/g, "_");
    const keyB = b.folderName.toLowerCase().replace(/[^a-z0-9]/g, "_");

    const prioA = EVENT_PRIORITY[keyA] || EVENT_PRIORITY[a.folderName.toLowerCase()] || 99;
    const prioB = EVENT_PRIORITY[keyB] || EVENT_PRIORITY[b.folderName.toLowerCase()] || 99;

    if (prioA !== prioB) {
      return prioA - prioB;
    }
    return a.title.localeCompare(b.title);
  });

  // Write output gallery.json
  const outputDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(memories, null, 2), "utf8");
  console.log(`[gallery-generator] Successfully generated ${memories.length} events into ${OUTPUT_FILE}`);
}

generateGallery();
