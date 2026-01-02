import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ContactCTASection } from "@/components/contact-cta-section"
import { MobileStickyCTA } from "@/components/mobile-sticky-cta"
import { SchemaMarkup } from "@/components/schema-markup"
import { Shield, Award, Clock, Check, Wrench } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "★★★★★ About Generator Repair Services 2025 | #1 15+ Years Experience | Certified Technicians",
  description:
    "★★★★★ Learn about Generator Repair Services - Gauteng's #1 leading generator repair specialists. 15+ years experience, certified technicians, 24/7 emergency service. Call 069 382 4908.",
  openGraph: {
    title: "About Generator Repair Services | Expert Generator Specialists",
    description:
      "Gauteng's leading generator repair specialists. 15+ years experience, certified technicians, 24/7 emergency service. Call 069 382 4908.",
    url: "https://generatorrepairservices.co.za/about",
    siteName: "Generator Repair Services",
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://generatorrepairservices.co.za/about",
  },
}

export default function AboutPage() {
  return (
    <>
      <SchemaMarkup />
      <SiteHeader />
      <main>
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About Us" }]} />
        </div>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                About Generator Repair Services - Your Trusted Generator Specialists in Gauteng
              </h1>
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Generator Repair Services is Gauteng's premier provider of professional generator repairs, servicing,
                  maintenance, and installation solutions. With over 15 years of dedicated experience in the generator
                  industry, we have built a reputation as the most reliable and trusted generator repair company serving
                  Johannesburg, Pretoria, Sandton, Centurion, and surrounding areas throughout Gauteng province.
                </p>

                <div className="bg-primary/5 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h2>
                  <p className="text-foreground leading-relaxed">
                    At Generator Repair Services, our mission is to provide exceptional generator repair, servicing, and
                    maintenance solutions that keep our clients powered when they need it most. We are committed to
                    delivering fast, reliable, and affordable generator services with a focus on quality workmanship,
                    transparent pricing, and outstanding customer service. Whether you need emergency generator repairs
                    at 3 AM or scheduled preventative maintenance, Generator Repair Services is your dependable partner
                    for all generator-related needs across Gauteng.
                  </p>
                </div>

                <h2 className="text-3xl font-bold mb-6">Why Choose Generator Repair Services?</h2>
                <p className="leading-relaxed mb-6">
                  Generator Repair Services has established itself as the leading generator repair company in Gauteng
                  through consistent delivery of expert service, technical excellence, and unwavering commitment to
                  customer satisfaction. Our team of certified generator technicians brings extensive knowledge and
                  hands-on experience with all types of generators including diesel generators, petrol generators,
                  industrial generators, commercial backup systems, and residential standby generators. We service all
                  major generator brands including Perkins, Cummins, Caterpillar, SDMO, Volvo Penta, Kohler, Generac,
                  Honda, Yamaha, and many more. What sets Generator Repair Services apart is our 24-hour emergency
                  response capability, mobile repair service that comes directly to your location, and our commitment to
                  using only quality OEM and aftermarket parts that meet or exceed manufacturer specifications. Our
                  transparent pricing means no hidden fees or surprise charges - you'll know exactly what you're paying
                  before we start any work. With Generator Repair Services, you're not just getting a repair technician;
                  you're gaining a long-term partner dedicated to keeping your generator running reliably for years to
                  come.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                  <Card>
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-bold text-xl mb-3">Certified Technicians</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        All Generator Repair Services technicians are fully certified and undergo continuous training on
                        the latest generator technologies and repair techniques. Our team has 15+ years of combined
                        experience working with diesel generators, petrol generators, and industrial power systems
                        across residential, commercial, and industrial applications.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-bold text-xl mb-3">24/7 Emergency Service</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Generator breakdowns don't follow business hours, and neither do we. Generator Repair Services
                        offers 24-hour emergency generator repair services across all of Gauteng. Our rapid response
                        teams are available day or night, weekends and public holidays, to get your generator back
                        online quickly.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Wrench className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-bold text-xl mb-3">Comprehensive Services</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        From emergency breakdown repairs to routine servicing, generator maintenance programs,
                        installation of new generators, and complete system overhauls, Generator Repair Services offers
                        a complete range of generator solutions. We handle everything from fuel system repairs and
                        electrical troubleshooting to engine rebuilds and control panel upgrades.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-bold text-xl mb-3">Quality Guaranteed</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We stand behind our work with comprehensive warranties on all repairs and installations.
                        Generator Repair Services uses only quality parts from reputable suppliers and follows strict
                        manufacturer specifications to ensure your generator operates at peak performance and
                        reliability.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <h2 className="text-3xl font-bold mb-6">Our Expertise and Services</h2>
                <p className="leading-relaxed mb-6">
                  Generator Repair Services specializes in all aspects of generator repairs, servicing, and maintenance
                  for clients throughout Gauteng. Our comprehensive service offerings include diesel generator repairs,
                  petrol generator repairs, industrial generator maintenance, commercial generator servicing, emergency
                  generator callouts, preventative maintenance programs, generator installations, fuel system cleaning
                  and repairs, electrical system diagnostics and repairs, engine diagnostics and repairs, control panel
                  repairs and upgrades, battery testing and replacement, load bank testing, generator upgrades and
                  modifications, and complete generator overhauls. Whether you have a small portable generator for home
                  backup power or a large industrial generator system powering your facility, our experienced
                  technicians have the knowledge and equipment to service it properly. We work with all generator types
                  including open frame generators, enclosed generators, portable generators, standby generators, prime
                  power generators, and continuous duty generators. Our mobile repair service means minimal downtime for
                  your operations as we bring our expertise and tools directly to your location anywhere in
                  Johannesburg, Pretoria, Sandton, Centurion, Fourways, Midrand, Roodepoort, Randburg, and throughout
                  Gauteng province.
                </p>

                <h2 className="text-3xl font-bold mb-6">Service Areas Across Gauteng</h2>
                <p className="leading-relaxed mb-6">
                  Generator Repair Services proudly serves all major areas across Gauteng province with our mobile
                  generator repair and servicing solutions. Our primary service areas include Johannesburg and all
                  surrounding suburbs such as Sandton, Rosebank, Hyde Park, Bryanston, Fourways, Sunninghill,
                  Morningside, Rivonia, Melrose, Parktown, Houghton, Craighall, Northcliff, and Randburg. We also
                  provide comprehensive generator services throughout Pretoria including Brooklyn, Hatfield, Waterkloof,
                  Menlo Park, Lynnwood, Garsfontein, Faerie Glen, Silver Lakes, Moreleta Park, Monument Park, Arcadia,
                  and Queenswood. Our service coverage extends to Sandton, Centurion, Midrand, Roodepoort, Kempton Park,
                  Benoni, Boksburg, Germiston, Alberton, Krugersdorp, and other Gauteng municipalities. No matter where
                  you are located in Gauteng, Generator Repair Services can dispatch a certified technician to your
                  location for generator repairs, servicing, or emergency assistance. Call us at 069 382 4908 to confirm
                  service availability in your specific area or to schedule a service appointment.
                </p>

                <div className="bg-card border rounded-lg p-8 my-12">
                  <h3 className="text-2xl font-bold mb-6">What Our Clients Value Most</h3>
                  <div className="space-y-4">
                    {[
                      "Fast response times for emergency generator repairs across Gauteng",
                      "Honest, transparent pricing with no hidden fees or surprise charges",
                      "Experienced, certified technicians with proven expertise",
                      "Mobile service that comes to your location for convenience",
                      "Quality parts and workmanship backed by solid warranties",
                      "Comprehensive testing to ensure your generator is fully operational",
                      "Friendly, professional customer service from initial call to job completion",
                      "Preventative maintenance programs that save money long-term",
                      "Availability 24/7 including weekends and public holidays",
                      "Expertise with all generator brands and types",
                      "Commitment to getting the job done right the first time",
                      "Clear communication throughout the repair or service process",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-6">Contact Generator Repair Services Today</h2>
                <p className="leading-relaxed mb-6">
                  When you need reliable, professional generator repairs, servicing, or maintenance in Gauteng, trust
                  the experts at Generator Repair Services. Our team is ready to assist with emergency breakdowns,
                  scheduled maintenance, new generator installations, or any generator-related needs. We serve
                  residential, commercial, and industrial clients throughout Johannesburg, Pretoria, Sandton, Centurion,
                  and all surrounding Gauteng areas. Call us now at 069 382 4908 for immediate assistance or to schedule
                  a service appointment. You can also reach us via WhatsApp or email at
                  info@generatorrepairservices.co.za. Generator Repair Services - keeping Gauteng powered, one generator
                  at a time.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ContactCTASection />
      </main>
      <SiteFooter />
      <MobileStickyCTA />
    </>
  )
}
