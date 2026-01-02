import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { MobileStickyCTA } from "@/components/mobile-sticky-cta"
import { SchemaMarkup } from "@/components/schema-markup"
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "★★★★★ Contact Generator Repair Services 2025 | 24/7 Emergency Service | Call 069 382 4908",
  description:
    "★★★★★ Contact Generator Repair Services for professional generator repairs in Gauteng. Call 069 382 4908, WhatsApp, or email info@generatorrepairservices.co.za. 24/7 emergency service available!",
  openGraph: {
    title: "Contact Generator Repair Services | 24/7 Emergency Service Available",
    description:
      "Contact Generator Repair Services for professional generator repairs in Gauteng. Call 069 382 4908, WhatsApp, or email. 24/7 emergency service available.",
    url: "https://generatorrepairservices.co.za/contact",
    siteName: "Generator Repair Services",
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://generatorrepairservices.co.za/contact",
  },
}

export default function ContactPage() {
  return (
    <>
      <SchemaMarkup />
      <SiteHeader />
      <main>
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact Us" }]} />
        </div>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                  Contact Generator Repair Services - We're Here to Help
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Need generator repairs, servicing, or maintenance across Gauteng? Contact Generator Repair Services
                  today. Our expert team is available 24/7 for emergency callouts and scheduled service appointments in
                  Johannesburg, Pretoria, Sandton, Centurion, and throughout Gauteng province.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-2">Call Us</h3>
                    <p className="text-muted-foreground mb-4">Speak directly with our team for immediate assistance</p>
                    <a href="tel:0693824908" className="text-2xl font-bold text-primary hover:underline">
                      069 382 4908
                    </a>
                    <Button asChild className="mt-4 w-full">
                      <a href="tel:0693824908">Call Now</a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-2">WhatsApp</h3>
                    <p className="text-muted-foreground mb-4">Send us a message for quick responses</p>
                    <p className="text-lg font-bold text-primary mb-1">069 382 4908</p>
                    <Button asChild variant="secondary" className="mt-4 w-full">
                      <a
                        href="https://wa.me/27693824908?text=Hi%2C%20I%20need%20generator%20repairs"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        WhatsApp Us
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-2">Email</h3>
                    <p className="text-muted-foreground mb-4">Send us your enquiry anytime</p>
                    <a
                      href="mailto:info@generatorrepairservices.co.za"
                      className="text-sm font-bold text-primary hover:underline block mb-4"
                    >
                      info@generatorrepairservices.co.za
                    </a>
                    <Button asChild variant="outline" className="w-full bg-transparent">
                      <a href="mailto:info@generatorrepairservices.co.za">Email Us</a>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-primary text-primary-foreground rounded-lg p-8 mb-12">
                <div className="flex items-start gap-4">
                  <Clock className="h-8 w-8 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3">24/7 Emergency Generator Repairs</h3>
                    <p className="text-lg mb-4 opacity-90 leading-relaxed">
                      Generator Repair Services provides round-the-clock emergency callout service across all of
                      Gauteng. When your generator fails and you need urgent assistance, our emergency response team is
                      available 24 hours a day, 7 days a week, including weekends and public holidays. We understand
                      that generator breakdowns can happen at any time, which is why we maintain 24-hour availability
                      for emergency repairs in Johannesburg, Pretoria, Sandton, Centurion, Fourways, Midrand, and
                      throughout Gauteng.
                    </p>
                    <p className="text-lg opacity-90 leading-relaxed">
                      For emergency generator repairs, call 069 382 4908 immediately. Our dispatch team will coordinate
                      with the nearest available technician to your location and provide rapid response to get your
                      power restored as quickly as possible.
                    </p>
                  </div>
                </div>
              </div>

              <Card className="mb-12">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6">Our Service Areas Across Gauteng</h2>
                  <div className="flex items-start gap-4 mb-6">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="leading-relaxed mb-4">
                        Generator Repair Services provides mobile generator repairs, servicing, and maintenance
                        throughout Gauteng province. Our technicians travel to your location for convenient on-site
                        service, minimizing downtime and disruption to your operations. We serve all major Gauteng
                        cities, towns, and suburbs including but not limited to:
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                        {[
                          "Johannesburg & Suburbs",
                          "Pretoria & Suburbs",
                          "Sandton",
                          "Centurion",
                          "Fourways",
                          "Midrand",
                          "Rosebank",
                          "Randburg",
                          "Roodepoort",
                          "Bryanston",
                          "Kempton Park",
                          "Benoni",
                          "Boksburg",
                          "Germiston",
                          "Alberton",
                          "Krugersdorp",
                          "Sunninghill",
                          "Rivonia",
                          "Brooklyn",
                          "Hatfield",
                          "Waterkloof",
                          "Lynnwood",
                          "Garsfontein",
                          "Silver Lakes",
                        ].map((area, index) => (
                          <div key={index} className="bg-muted rounded px-3 py-2">
                            {area}
                          </div>
                        ))}
                      </div>
                      <p className="mt-6 leading-relaxed">
                        If you're located in Gauteng and need generator repairs or servicing, call 069 382 4908 to
                        confirm service availability in your area. Our extensive service network means we can reach most
                        Gauteng locations quickly for both emergency and scheduled service appointments.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-muted/30 rounded-lg p-8">
                <h2 className="text-3xl font-bold mb-6">What to Expect When You Contact Us</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">1. Initial Contact</h3>
                    <p className="leading-relaxed text-muted-foreground">
                      When you call, WhatsApp, or email Generator Repair Services, you'll speak with our knowledgeable
                      team who will ask about your generator issue, type of generator you have, and your location. For
                      emergency situations, we prioritize your call and immediately begin coordinating technician
                      dispatch.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">2. Quote and Scheduling</h3>
                    <p className="leading-relaxed text-muted-foreground">
                      Based on the information you provide, we'll give you an estimated cost range for the repair or
                      service. For emergency callouts, we dispatch immediately. For scheduled maintenance or
                      non-emergency repairs, we'll arrange a convenient appointment time that works with your schedule.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">3. Professional Service</h3>
                    <p className="leading-relaxed text-muted-foreground">
                      Our certified technician arrives at your location with fully equipped mobile service vehicle.
                      They'll diagnose the issue, explain the problem and solution, provide a detailed quote if
                      additional work is needed, and complete the repair or service efficiently using quality parts and
                      proper procedures.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">4. Testing and Completion</h3>
                    <p className="leading-relaxed text-muted-foreground">
                      After completing repairs or servicing, we thoroughly test your generator under load to ensure
                      proper operation. You'll receive a detailed service report, invoice, and any recommendations for
                      future maintenance. We stand behind our work with solid warranties on parts and labor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Your Generator Repaired?</h2>
              <p className="text-lg mb-8 opacity-90 leading-relaxed">
                Don't let generator problems leave you without power. Contact Generator Repair Services today for fast,
                professional repairs and servicing throughout Gauteng. Available 24/7 for emergencies.
              </p>
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
      </main>
      <SiteFooter />
      <MobileStickyCTA />
    </>
  )
}
