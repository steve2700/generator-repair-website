"use client"

import { Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background border-t shadow-lg">
      <div className="flex gap-2 p-3">
        <Button asChild className="flex-1" size="lg">
          <a href="tel:0693824908" className="flex items-center justify-center gap-2">
            <Phone className="h-5 w-5" />
            Call Now
          </a>
        </Button>
        <Button asChild variant="secondary" className="flex-1" size="lg">
          <a
            href="https://wa.me/27693824908?text=Hi%2C%20I%20need%20generator%20repairs"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp
          </a>
        </Button>
      </div>
    </div>
  )
}
