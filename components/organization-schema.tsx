export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://generator-repairs.vercel.app",
    name: "Generator Repair Services Gauteng",
    image: "https://generator-repairs.vercel.app/og-image.jpg",
    description:
      "Professional generator repair, servicing, and maintenance across Gauteng. 24/7 emergency service. All brands. Call 069 382 4908.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Johannesburg",
      addressRegion: "Gauteng",
      addressCountry: "ZA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -26.2041,
      longitude: 28.0473,
    },
    url: "https://generator-repairs.vercel.app",
    telephone: "+27693824908",
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    areaServed: [
      {
        "@type": "City",
        name: "Johannesburg",
      },
      {
        "@type": "City",
        name: "Pretoria",
      },
      {
        "@type": "City",
        name: "Sandton",
      },
      {
        "@type": "City",
        name: "Centurion",
      },
      {
        "@type": "City",
        name: "Midrand",
      },
      {
        "@type": "City",
        name: "Randburg",
      },
      {
        "@type": "City",
        name: "Roodepoort",
      },
    ],
    sameAs: ["https://www.facebook.com/generatorrepairsgauteng", "https://www.instagram.com/generatorrepairsgauteng"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Generator Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Generator Repairs",
            description: "Professional generator repair services for all brands and models",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Generator Servicing",
            description: "Comprehensive generator servicing and maintenance",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Emergency Generator Repairs",
            description: "24/7 emergency generator repair services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Generator Installation",
            description: "Professional generator installation and setup",
          },
        },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}
