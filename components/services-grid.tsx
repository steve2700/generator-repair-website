import Link from "next/link"
import { Wrench, Settings, Shield, Zap, Fuel, Factory, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Wrench,
    title: "Generator Repairs",
    description: "Expert repair services for all generator makes and models. Fast, reliable, and affordable repairs.",
    href: "/generator-repairs",
  },
  {
    icon: Settings,
    title: "Generator Servicing",
    description:
      "Regular servicing to keep your generator running efficiently. Preventative maintenance plans available.",
    href: "/generator-servicing",
  },
  {
    icon: Shield,
    title: "Generator Maintenance",
    description: "Comprehensive maintenance programs to extend the lifespan of your generator equipment.",
    href: "/generator-maintenance",
  },
  {
    icon: Zap,
    title: "Generator Installation",
    description: "Professional installation services for new generators. Complete setup and testing included.",
    href: "/generator-installation",
  },
  {
    icon: Fuel,
    title: "Diesel Generator Repairs",
    description: "Specialized diesel generator repairs. Fuel system diagnostics and engine repairs.",
    href: "/diesel-generator-repairs",
  },
  {
    icon: Fuel,
    title: "Petrol Generator Repairs",
    description: "Petrol generator specialists. Carburetor cleaning, spark plug replacement, and more.",
    href: "/petrol-generator-repairs",
  },
  {
    icon: Factory,
    title: "Industrial Generator Repairs",
    description: "Heavy-duty industrial generator repairs. Large capacity systems and commercial setups.",
    href: "/industrial-generator-repairs",
  },
  {
    icon: Clock,
    title: "Emergency Generator Repairs",
    description: "24-hour emergency callout service. Fast response times across Gauteng.",
    href: "/emergency-generator-repairs",
  },
]

export function ServicesGrid() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Generator Services</h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive generator repair, servicing, and maintenance solutions across Gauteng. Professional, certified
            technicians ready to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-3 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription className="leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="ghost" size="sm" className="w-full">
                    <Link href={service.href}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
