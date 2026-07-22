import { colors } from "./colors";
import { radius } from "./radius";
import { spacing } from "./spacing";
import { motion } from "./motion";
import { shadows } from "./shadows";

export const cards = {
  surface: {
    background: `linear-gradient(135deg, ${colors.surface} 0%, rgba(18, 18, 22, 0.4) 100%)`,
    backgroundHover: `linear-gradient(135deg, ${colors.surfaceHover} 0%, rgba(24, 24, 30, 0.5) 100%)`,
    backdropBlur: "blur(8px)",
  },
  border: {
    default: colors.border,
    hoverOpacity: 0.15, // When hovering, border opacity of accent color
  },
  glow: {
    radialOpacity: 0.08, // Radial background glow opacity
    spotlightOpacity: 0.15, // Spotlight opacity
  },
  radius: radius.card,
  padding: spacing.card.padding,
  transition: `all ${motion.hover.duration} ${motion.hover.easing}`,
  shadows: shadows.card,
};
