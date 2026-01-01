import { Phone, MessageCircle, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function ContactCTASection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Generator Repairs? Contact Us Today</h2>
          <p className="text-lg mb-8 opacity-90 leading-relaxed">
            Our expert technicians are ready to help with all your generator repair, servicing, and maintenance needs.
            Available 24/7 for emergency callouts across Gauteng.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card className="bg-primary-foreground">
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2 text-foreground">Call Us</h3>
                <a href="tel:0693824908" className="text-primary font-bold hover:underline">
                  069 382 4908
                </a>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground">
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2 text-foreground">WhatsApp</h3>
                <a
                  href="https://wa.me/27693824908?text=Hi%2C%20I%20need%20generator%20repairs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-bold hover:underline"
                >
                  Chat Now
                </a>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground">
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2 text-foreground">Email</h3>
                <a
                  href="mailto:info@generatorrepairservices.co.za"
                  className="text-primary font-bold hover:underline text-sm"
                >
                  info@generatorrepairservices.co.za
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg h-14 px-8">
              <a href="tel:0693824908" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call 069 382 4908
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg h-14 px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
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
        </div>
      </div>
    </section>
  )
}
