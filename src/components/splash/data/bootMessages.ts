export interface BootMessage {
  id: string;
  label: string;
  timestamp?: string;
}

export const bootMessages: BootMessage[] = [
  { id: "repo", label: "Initializing Repository" },
  { id: "domains", label: "Loading Community Domains" },
  { id: "graph", label: "Building Knowledge Graph" },
  { id: "network", label: "Connecting Developer Network" },
  { id: "ready", label: "Repository Ready" },
];

export const easterEggCommands = [
  "git checkout -b future-builders",
  "git clone techspace/community",
  "git pull origin main --rebase",
  "git status: working tree clean",
];
