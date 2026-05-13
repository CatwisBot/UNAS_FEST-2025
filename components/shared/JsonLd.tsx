import Script from "next/script";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "UNASFEST 2025",
  alternateName: "UNAS FEST 2025",
  url: "https://unasfest.com",
  description:
    "UNAS FEST 2025 is a spectacular festival organized by the students of Universitas Nasional, Jakarta. Celebrate culture, creativity, and community with us.",
  inLanguage: "id-ID",
  publisher: {
    "@type": "Organization",
    name: "Universitas Nasional",
    url: "https://www.unas.ac.id",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Universitas Nasional",
  alternateName: "UNAS",
  url: "https://www.unas.ac.id",
  logo: "https://unasfest.com/icons/Home/Logo_UF25.png",
  sameAs: [
    "https://www.instagram.com/unasfest",
    "https://www.tiktok.com/@unasfest",
    "https://www.youtube.com/@unasfest",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Sawo Manila No.61",
    addressLocality: "Jakarta Selatan",
    addressRegion: "DKI Jakarta",
    postalCode: "12520",
    addressCountry: "ID",
  },
};

const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "UNAS FEST 2025",
  description:
    "UNAS FEST 2025 is a spectacular national student festival organized by Universitas Nasional, Jakarta. Featuring debate competitions (KDBI & EDC), Scientific Paper Competition, Infographic Competition, and Short Movie Competition.",
  startDate: "2025-08-25",
  endDate: "2025-11-10",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Universitas Nasional",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Sawo Manila No.61",
      addressLocality: "Jakarta Selatan",
      addressRegion: "DKI Jakarta",
      postalCode: "12520",
      addressCountry: "ID",
    },
  },
  image: "https://unasfest.com/preview_UF25.png",
  organizer: {
    "@type": "Organization",
    name: "UNASFEST Committee - Universitas Nasional",
    url: "https://unasfest.com",
  },
  performer: {
    "@type": "EducationalOrganization",
    name: "Universitas Nasional Students",
  },
  offers: {
    "@type": "Offer",
    url: "https://caturnawa.unasfest.com",
    availability: "https://schema.org/InStock",
    priceCurrency: "IDR",
    validFrom: "2025-08-25",
  },
  subEvent: [
    {
      "@type": "Event",
      name: "Kompetisi Debat Bahasa Indonesia (KDBI)",
      description:
        "Indonesian language debate competition as a platform for participants to express arguments on current national issues.",
      url: "https://unasfest.com/activities/KDBI",
    },
    {
      "@type": "Event",
      name: "English Debate Competition (EDC)",
      description:
        "English language debate competition where participants deliver argumentation regarding current issues.",
      url: "https://unasfest.com/activities/EDC",
    },
    {
      "@type": "Event",
      name: "Scientific Paper Competition (SPC)",
      description:
        "National scientific paper competition based on research using data collection methods.",
      url: "https://unasfest.com/activities/SPC",
    },
    {
      "@type": "Event",
      name: "Infographic Competition",
      description:
        "Design competition encouraging participants to present information concisely and creatively through infographics.",
      url: "https://unasfest.com/activities/Infographic",
    },
    {
      "@type": "Event",
      name: "Short Movie Competition",
      description:
        "Short movie competition showcasing creative filmmaking skills of students.",
      url: "https://unasfest.com/activities/Short",
    },
  ],
};

export function JsonLd() {
  return (
    <>
      <Script
        id="schema-website"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <Script
        id="schema-organization"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="schema-event"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(eventSchema),
        }}
      />
    </>
  );
}
