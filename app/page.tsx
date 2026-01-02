import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ServicesGrid } from "@/components/services-grid"
import { SuburbsGrid } from "@/components/suburbs-grid"
import { ContactCTASection } from "@/components/contact-cta-section"
import { MobileStickyCTA } from "@/components/mobile-sticky-cta"
import { SchemaMarkup } from "@/components/schema-markup"
import { Clock, Shield, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import Button from "@/components/ui/button"
import Phone from "@/components/icons/phone"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Generator Repair Services Gauteng | 24-Hour Emergency Repairs | 069 382 4908",
  description:
    "Professional generator repairs, servicing & maintenance in Gauteng. 24/7 emergency service. Diesel, petrol & industrial generators. Call 069 382 4908 for same-day repairs in Johannesburg, Pretoria, Sandton.",
  keywords: [
    "generator repairs",
    "generator servicing",
    "generator maintenance",
    "Johannesburg",
    "Pretoria",
    "Sandton",
    "Centurion",
    "Gauteng",
    "emergency generator repairs",
    "diesel generator repairs",
    "24 hour generator repairs",
  ],
  alternates: {
    canonical: "https://generatorrepairservices.co.za",
  },
  openGraph: {
    title: "Generator Repair Services Gauteng | 24-Hour Emergency Repairs",
    description:
      "Expert generator repairs, servicing & maintenance across Gauteng. 24/7 emergency service. Call 069 382 4908.",
    url: "https://generatorrepairservices.co.za",
    type: "website",
  },
}

const johannesburgSuburbs = [
  "Sandton",
  "Rosebank",
  "Hyde Park",
  "Bryanston",
  "Fourways",
  "Sunninghill",
  "Morningside",
  "Rivonia",
  "Melrose",
  "Parktown",
  "Houghton",
  "Craighall",
  "Northcliff",
  "Randburg",
  "Roodepoort",
  "Midrand",
]

const pretoriaSuburbs = [
  "Brooklyn",
  "Hatfield",
  "Waterkloof",
  "Menlo Park",
  "Lynnwood",
  "Garsfontein",
  "Faerie Glen",
  "Silver Lakes",
  "Moreleta Park",
  "Monument Park",
  "Centurion",
  "Arcadia",
  "Queenswood",
  "Pretoria East",
  "Pretoria North",
  "Pretoria Central",
]

export default function HomePage() {
  return (
    <>
      <SchemaMarkup type="LocalBusiness" />
      <SiteHeader />
      <main>
        <section className="relative bg-gradient-to-b from-primary/10 via-background to-background py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img src="/professional-technician-repairing-industrial-gener.jpg" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-destructive/90 text-white px-4 py-2 rounded-full mb-6 animate-pulse">
                <Clock className="h-5 w-5" />
                <span className="font-bold">24/7 Emergency Response - Available Now</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                Generator Down? <span className="text-primary">We Fix It Fast.</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty leading-relaxed">
                Expert generator repairs across Gauteng in under 2 hours. Same-day service. All brands. 15+ years
                trusted by 5,000+ homes and businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button size="lg" className="text-lg h-14 px-8" asChild>
                  <a href="tel:0693824908">
                    <Phone className="mr-2 h-6 w-6" />
                    Call Now: 069 382 4908
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg h-14 px-8 border-2 bg-transparent" asChild>
                  <a href="https://wa.me/27693824908">
                    <svg className="mr-2 h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp 24/7
                  </a>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                ⚡ Average Response Time: <strong className="text-foreground">58 Minutes</strong> • No Call-Out Fees •
                Upfront Pricing
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 border-y bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">5,000+</div>
                <div className="text-sm text-muted-foreground">Customers Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Emergency Service</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">First Visit Fix Rate</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Don't Let Power Failures Disrupt Your Life</h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  When load shedding hits and your generator fails, every minute without backup power costs you money,
                  security, and peace of mind. Generator Repair Services delivers rapid, expert repairs that restore
                  your power fast—day or night, any day of the year. Our certified technicians arrive equipped to fix
                  most problems on the first visit, with transparent pricing and a 6-month workmanship guarantee.
                </p>
              </div>

              <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/professional-technician-working-on-diesel-generato.jpg"
                  alt="Professional generator repair technician servicing diesel generator"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <Card className="border-2 hover:border-primary transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-2">Under 2-Hour Response</h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      Fastest emergency response in Gauteng. We arrive ready to diagnose and repair—not just quote.
                    </p>
                    <p className="text-sm font-semibold text-primary">Average: 58 minutes</p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-2">98% First Visit Fix</h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      Fully stocked vans with common parts. Most repairs completed same visit—no waiting days for parts.
                    </p>
                    <p className="text-sm font-semibold text-primary">Back up in hours, not days</p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-2">6-Month Guarantee</h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      Quality parts, expert workmanship, fair pricing. All repairs backed by our comprehensive warranty.
                    </p>
                    <p className="text-sm font-semibold text-primary">Peace of mind included</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-primary/5 border-primary/20 mb-12">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">Transparent, Honest Pricing</h3>
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">R450-R850</div>
                      <div className="font-semibold mb-2">Basic Service</div>
                      <div className="text-sm text-muted-foreground">
                        Filter changes, spark plugs, oil service, minor adjustments
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">R1,200-R3,500</div>
                      <div className="font-semibold mb-2">Standard Repairs</div>
                      <div className="text-sm text-muted-foreground">
                        Fuel system cleaning, electrical repairs, starter motors, alternator service
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">R3,500+</div>
                      <div className="font-semibold mb-2">Major Repairs</div>
                      <div className="text-sm text-muted-foreground">
                        Engine overhauls, control panel replacement, complex diagnostics
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-sm text-muted-foreground">
                    <strong>No Hidden Fees:</strong> All quotes include parts, labor, and travel. Emergency call-out:
                    R650 (waived if repair proceeds)
                  </p>
                </CardContent>
              </Card>

              <div className="bg-card border-2 border-primary/20 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Why 5,000+ Customers Choose Us</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="relative rounded-lg overflow-hidden">
                    <img
                      src="/clean-professional-generator-service-van-with-tool.jpg"
                      alt="Fully equipped mobile generator repair service van"
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white font-semibold">Fully Stocked Service Vans</p>
                    </div>
                  </div>
                  <div className="relative rounded-lg overflow-hidden">
                    <img
                      src="/certified-technician-team-standing-confidently-wit.jpg"
                      alt="Professional certified generator repair technicians team"
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white font-semibold">Certified Expert Technicians</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "✅ 24/7 emergency service—real humans answer, not machines",
                    "✅ Under 2-hour response across all Gauteng",
                    "✅ Certified technicians with 15+ years experience",
                    "✅ 98% same-visit repairs—fully stocked service vans",
                    "✅ All generator brands: Honda, Cummins, Perkins, Kohler, Yamaha",
                    "✅ Upfront pricing—quote before we start, no surprises",
                    "✅ Mobile service—we come to you, zero downtime",
                    "✅ 6-month workmanship guarantee on all repairs",
                    "✅ Preventative maintenance programs from R850/year",
                    "✅ Fast insurance claims support with detailed reports",
                    "✅ Load shedding specialists—optimize runtime & efficiency",
                    "✅ Free phone diagnostics—might fix it without a callout",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-base leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-6 bg-muted rounded-lg">
                  <p className="text-lg font-semibold text-center mb-4">
                    "Best generator service in Johannesburg. They fixed our office generator during load shedding in
                    under an hour. Professional, affordable, and honest—highly recommend!"
                  </p>
                  <p className="text-center text-sm text-muted-foreground">— David M., Sandton Business Owner</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-destructive/90 to-destructive text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Generator Emergency? We're Standing By.</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Power failures don't wait. Neither should you. Call now for immediate dispatch of our nearest certified
              technician.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg h-14 px-8" asChild>
                <a href="tel:0693824908">
                  <Phone className="mr-2 h-6 w-6" />
                  069 382 4908 - Emergency Line
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg h-14 px-8 border-2 border-white text-white hover:bg-white hover:text-destructive bg-transparent"
                asChild
              >
                <a href="https://wa.me/27693824908">WhatsApp Emergency</a>
              </Button>
            </div>
            <p className="mt-6 text-sm opacity-75">
              Available 24/7/365 • Typical arrival: Under 2 hours • No after-hours surcharge
            </p>
          </div>
        </section>

        <ServicesGrid />

        <SuburbsGrid title="Generator Repairs Across Johannesburg" suburbs={johannesburgSuburbs} />

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Frequently Asked Questions About Generator Repairs
              </h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How quickly can you respond to emergency generator repairs?</AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed">
                    Generator Repair Services offers 24-hour emergency generator repair services across Gauteng. We aim
                    to respond to emergency callouts within 2-4 hours in the Johannesburg, Pretoria, Sandton, and
                    Centurion areas. Our mobile repair units are strategically positioned to provide fast response
                    times. Call 069 382 4908 for immediate assistance with generator breakdowns.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>What types of generators do you repair?</AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed">
                    We repair all types of generators including diesel generators, petrol generators, industrial
                    generators, commercial generators, residential backup generators, and standby power systems. Our
                    technicians are experienced with all major brands including Perkins, Cummins, Caterpillar, SDMO,
                    Volvo Penta, Kohler, Generac, and more. From small portable generators to large industrial power
                    systems, Generator Repair Services has the expertise to handle any repair job.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Do you offer generator servicing and maintenance plans?</AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed">
                    Yes, Generator Repair Services offers comprehensive generator servicing and preventative maintenance
                    plans throughout Gauteng. Regular generator maintenance helps prevent costly breakdowns, improves
                    fuel efficiency, and extends equipment lifespan. Our maintenance packages include oil changes,
                    filter replacements, fuel system cleaning, battery testing, load testing, and complete system
                    inspections. We can create custom maintenance schedules based on your generator's usage and
                    manufacturer recommendations.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Which areas in Gauteng do you service?</AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed">
                    Generator Repair Services provides generator repairs, servicing, and maintenance across all major
                    Gauteng areas including Johannesburg, Pretoria, Sandton, Centurion, Fourways, Midrand, Roodepoort,
                    Randburg, and surrounding suburbs. Our mobile repair service means we come directly to your location
                    whether you're in a residential area, commercial property, or industrial facility. Contact us at 069
                    382 4908 to confirm service availability in your specific area.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>How much do generator repairs cost?</AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed">
                    Generator repair costs vary depending on the type of repair needed, generator size, and parts
                    required. At Generator Repair Services, we provide transparent, upfront quotes before starting any
                    work. Simple repairs like filter changes or spark plug replacements may cost R500-R1500, while more
                    complex repairs involving engine work or electrical systems may range from R2000-R5000 or more. We
                    offer free, no-obligation quotes - call 069 382 4908 or WhatsApp us for a personalized estimate
                    based on your generator's specific needs.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <div className="text-center mt-8">
                <Link href="/faq" className="text-primary hover:underline font-medium">
                  View All FAQs →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <SuburbsGrid title="Generator Servicing Across Pretoria" suburbs={pretoriaSuburbs} />

        <ContactCTASection />
      </main>
      <SiteFooter />
      <MobileStickyCTA />
    </>
  )
}
