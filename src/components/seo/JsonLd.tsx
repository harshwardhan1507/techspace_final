import React from "react";

export function JsonLd() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://techspace.srmuniversity.ac.in";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${baseUrl}/#organization`,
    "name": "TechSpace SRM",
    "alternateName": ["TechSpace", "TechSpace Student Developer Community", "SRM Sonipat Coding Club"],
    "url": baseUrl,
    "logo": `${baseUrl}/techspace.png`,
    "image": `${baseUrl}/techspace.png`,
    "description": "TechSpace is the flagship student technology community and developer club at SRM University Delhi-NCR, Sonipat. We foster learning, open source, hackathons, AI, web development, and cybersecurity.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Sonipat",
      "addressRegion": "Haryana",
      "addressCountry": "IN"
    },
    "parentOrganization": {
      "@type": "CollegeOrUniversity",
      "name": "SRM University Delhi-NCR, Sonipat",
      "url": "https://www.srmuniversity.ac.in"
    },
    "sameAs": [
      "https://github.com/harshwardhan1507",
      "https://linkedin.com/in/harsh-wardhan-singh-cse",
      "https://harshwardhanportfolio.vercel.app/"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    "url": baseUrl,
    "name": "TechSpace — Student Developer Community at SRM University",
    "description": "Discover workshops, hackathons, open-source projects, and technical domains at TechSpace, SRM University Sonipat.",
    "publisher": {
      "@id": `${baseUrl}/#organization`
    },
    "inLanguage": "en-US"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
