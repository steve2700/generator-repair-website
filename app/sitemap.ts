import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://generator-repairs.vercel.app"
  const currentDate = new Date()

  // Core pages
  const routes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ]

  // Main service pages
  const servicePages = [
    "/generator-repairs",
    "/generator-servicing",
    "/generator-maintenance",
    "/generator-installation",
    "/diesel-generator-repairs",
    "/petrol-generator-repairs",
    "/industrial-generator-repairs",
    "/emergency-generator-repairs",
  ]

  const services = servicePages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }))

  // Geo-location pages
  const geoPages = [
    "/generator-repairs-johannesburg",
    "/generator-repairs-pretoria",
    "/generator-repairs-sandton",
    "/generator-repairs-centurion",
  ]

  const geoLocations = geoPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }))

  // Long-tail keyword pages
  const keywordPages = [
    "/generator-repairs-near-me",
    "/24-hour-generator-repairs",
    "/affordable-generator-repairs",
    "/residential-generator-repairs",
  ]

  const keywords = keywordPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  return [...routes, ...services, ...geoLocations, ...keywords]
}
