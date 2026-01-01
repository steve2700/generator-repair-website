import { Phone, MessageCircle, Clock, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface HeroSectionProps {
  title: string
  description: string
  showTrustBadges?: boolean
}

export function HeroSection({ title, description, showTrustBadges = true }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">{title}</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance leading-relaxed">{description}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild size="lg" className="text-lg h-14 px-8">
              <a href="tel:0693824908" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call 069 382 4908
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg" className="text-lg h-14 px-8">
              <a
                href="https://wa.me/27693824908?text=Hi%2C%20I%20need%20generator%20repairs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </a>
            </Button>
          </div>

          {showTrustBadges && (
            <div className="flex flex-wrap gap-4 justify-center items-center text-sm">
              <Badge variant="outline" className="flex items-center gap-2 py-2 px-4">
                <Clock className="h-4 w-4" />
                24/7 Emergency Service
              </Badge>
              <Badge variant="outline" className="flex items-center gap-2 py-2 px-4">
                <Shield className="h-4 w-4" />
                15+ Years Experience
              </Badge>
              <Badge variant="outline" className="flex items-center gap-2 py-2 px-4">
                Certified Technicians
              </Badge>
              <Badge variant="outline" className="flex items-center gap-2 py-2 px-4">
                Same-Day Service
              </Badge>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
