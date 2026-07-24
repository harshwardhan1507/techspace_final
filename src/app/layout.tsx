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

import { JoinModalProvider } from "@/components/join/hooks/useJoinModal";
import { JoinCommunityModal } from "@/components/join/JoinCommunityModal";
import { JsonLd } from "@/components/seo/JsonLd";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://techspace.srmuniversity.ac.in";

export const viewport: Viewport = {
  themeColor: "#020202",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "TechSpace — Student Developer Community at SRM University",
    template: "%s | TechSpace",
  },
  description:
    "TechSpace is the flagship student developer community and technical club at SRM University Delhi-NCR, Sonipat. Join us to learn Web Development, AI/ML, Cybersecurity, Mobile Dev, and participate in hackathons & workshops.",
  keywords: [
    "TechSpace",
    "TechSpace SRM",
    "SRM University Delhi-NCR",
    "SRM Sonipat Coding Club",
    "Student Developer Community",
    "AI Workshops",
    "Programming Club",
    "Cybersecurity Club",
    "Web Development",
    "Hackathons",
    "TechSpace Community",
    "Software Engineering Club"
  ],
  authors: [
    { name: "TechSpace Team", url: SITE_URL },
    { name: "Harsh Wardhan", url: "https://harshwardhanportfolio.vercel.app/" }
  ],
  creator: "TechSpace Community",
  publisher: "SRM University Delhi-NCR, Sonipat",
  applicationName: "TechSpace",
  category: "Technology & Education",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "TechSpace — Student Developer Community at SRM University",
    description:
      "TechSpace is the flagship student technology community at SRM University Delhi-NCR, Sonipat. Discover workshops, hackathons, open-source projects, and technical domains.",
    siteName: "TechSpace",
    images: [
      {
        url: "/techspace.png",
        width: 1200,
        height: 630,
        alt: "TechSpace — Student Developer Community at SRM University",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TechSpace — Student Developer Community at SRM University",
    description:
      "TechSpace is the flagship student technology community at SRM University Delhi-NCR, Sonipat. Discover workshops, hackathons, and developer events.",
    images: ["/techspace.png"],
    creator: "@techspacesrm",
    site: "@techspacesrm",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/techspace.png", type: "image/png" }
    ],
    apple: [
      { url: "/techspace.png" }
    ],
  },
  verification: {
    google: "nablWOI5D9ymyYASK94_msyDn4WBr5hc41DH4vwts8w",
  },
};

import Script from "next/script";

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
      <head>
        <Script
          id="techspace-splash-check"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var navEntries = performance.getEntriesByType('navigation');
                var isReload = navEntries && navEntries.length > 0 && navEntries[0].type === 'reload';
                if (!isReload && (sessionStorage.getItem('techspace-splash-seen') === 'true' || sessionStorage.getItem('techspace-intro-seen') === 'true')) {
                  document.documentElement.classList.add('no-splash');
                }
              } catch (e) {}
            `,
          }}
        />
        <JsonLd />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground">
        <ThemeProvider>
          <MotionProvider>
            <JoinModalProvider>
              <main className="flex-1 overflow-x-clip">
                {children}
              </main>
              <JoinCommunityModal />
            </JoinModalProvider>
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
