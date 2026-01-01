import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import OrganizationSchema from "@/components/organization-schema"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Generator Repair Services | Professional Generator Repairs in Gauteng",
  description:
    "Expert generator repairs, servicing, maintenance & installation in Gauteng. 24-hour emergency service. Call 069 382 4908 for same-day repairs in Johannesburg, Pretoria, Sandton.",
  keywords: [
    "generator repairs",
    "generator servicing",
    "generator maintenance",
    "Johannesburg",
    "Pretoria",
    "Sandton",
    "Gauteng",
    "emergency generator repairs",
  ],
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://generator-repairs.vercel.app",
    siteName: "Generator Repair Services Gauteng",
    title: "Generator Repair Services | Professional Generator Repairs in Gauteng",
    description:
      "Expert generator repairs, servicing, maintenance & installation in Gauteng. 24-hour emergency service. Call 069 382 4908.",
    images: [
      {
        url: "https://generator-repairs.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Generator Repair Services Gauteng",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Generator Repair Services | Professional Generator Repairs in Gauteng",
    description:
      "Expert generator repairs, servicing, maintenance & installation in Gauteng. 24-hour emergency service. Call 069 382 4908.",
    images: ["https://generator-repairs.vercel.app/og-image.jpg"],
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
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
