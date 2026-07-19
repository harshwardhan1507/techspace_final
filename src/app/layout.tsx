import type { Metadata, Viewport } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { MotionProvider } from "@/components/providers/MotionProvider";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "TechSpace | SRM University Sonipat",
    template: "%s | TechSpace",
  },
  description: "Official website for TechSpace, the student technology community of SRM University Sonipat. We build, learn, and innovate together.",
  keywords: ["TechSpace", "SRM University", "Tech Club", "Student Community", "Sonipat", "Technology"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${inter.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col font-sans antialiased bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground">
        <ThemeProvider>
          <MotionProvider>
            <main className="flex-1">
              {children}
            </main>
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
