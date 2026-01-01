interface SchemaMarkupProps {
  type?: "LocalBusiness" | "Service"
  pageName?: string
  pageDescription?: string
  serviceType?: string
  areaServed?: string[]
}

export function SchemaMarkup({
  type = "LocalBusiness",
  pageName,
  pageDescription,
  serviceType,
  areaServed = ["Johannesburg", "Pretoria", "Sandton", "Centurion", "Fourways", "Midrand"],
}: SchemaMarkupProps) {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": type,
    name: "Generator Repair Services",
    image: "https://generatorrepairservices.co.za/logo.png",
    telephone: "+27693824908",
    email: "info@generatorrepairservices.co.za",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Gauteng",
      addressCountry: "ZA",
    },
    areaServed: areaServed.map((area) => ({
      "@type": "City",
      name: area,
    })),
    priceRange: "R500 - R5000",
    openingHours: "24/7",
    ...(serviceType && { serviceType }),
    ...(pageDescription && { description: pageDescription }),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(baseSchema) }} />
}
