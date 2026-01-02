import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import OrganizationSchema from "@/components/organization-schema"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://generatorrepairservices.co.za"),
  title: {
    default: "★★★★★ Generator Repair Services Gauteng 2025 | #1 Professional Repairs",
    template: "%s | Generator Repair Services",
  },
  description:
    "★★★★★ #1 professional generator repairs in Gauteng. 24/7 emergency service. Expert repairs, servicing & maintenance for all generator types. Serving Johannesburg, Pretoria, Sandton, Centurion. Call 069 382 4908!",
  keywords: [
    "generator repairs gauteng",
    "generator servicing johannesburg",
    "generator maintenance pretoria",
    "emergency generator repairs",
    "24 hour generator repairs",
    "diesel generator repairs",
    "petrol generator repairs",
    "industrial generator repairs",
    "generator installation",
    "generator repairs near me",
    "affordable generator repairs",
    "certified generator technicians",
    "sandton generator repairs",
    "centurion generator repairs",
  ],
  authors: [{ name: "Generator Repair Services" }],
  creator: "Generator Repair Services",
  publisher: "Generator Repair Services",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://generatorrepairservices.co.za",
    siteName: "Generator Repair Services",
    title: "★★★★★ Generator Repair Services Gauteng | Professional Generator Repairs",
    description:
      "★★★★★ #1 professional generator repairs in Gauteng. 24/7 emergency service. Expert repairs, servicing & maintenance. Call 069 382 4908!",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Generator Repair Services - Professional Generator Repairs Gauteng",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "★★★★★ Generator Repair Services Gauteng | Professional Generator Repairs",
    description:
      "★★★★★ #1 professional generator repairs in Gauteng. 24/7 emergency service. Expert repairs, servicing & maintenance. Call 069 382 4908!",
    images: ["/og-image.jpg"],
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
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://generatorrepairservices.co.za",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-ZA">
      <head>
        <OrganizationSchema />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
