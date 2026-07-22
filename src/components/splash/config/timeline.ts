export const TIMELINE_CONFIG = {
  // Phase durations in milliseconds
  durations: {
    logoReveal: 400,
    bootLog: 500,
    gitTimeline: 600,
    repoReady: 300,
    transition: 400,
  },
  // Idle pause between phases
  idlePause: 100,
  // Minimum total intro time budget (2.0s - 2.2s)
  totalBudgetMs: 2100,
  // Session storage key
  sessionKey: "techspace-splash-seen",
};

export type SplashPhase = 
  | "logo-reveal"
  | "boot-log"
  | "git-timeline"
  | "repo-ready"
  | "transition"
  | "done";
