import type { Metadata } from "next"
import Breadcrumbs from "@/components/breadcrumbs"
import ContactCTASection from "@/components/contact-cta-section"
import StructuredData from "@/components/structured-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MessageCircle, CheckCircle, Clock, Shield, Wrench, MapPin, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "★★★★★ Generator Servicing Near Me 2025 | Local Expert Technicians",
  description:
    "★★★★★ Looking for generator servicing near me? Expert local technicians available 24/7 across Gauteng. Comprehensive servicing from R850. Call 069 382 4908 for same-day service.",
  keywords:
    "generator servicing near me, generator service near me, local generator servicing, generator maintenance near me, generator technician near me",
  openGraph: {
    title: "Generator Servicing Near Me | Same-Day Local Service",
    description:
      "Expert generator servicing in your area. 5,000+ satisfied customers. Same-day service available. Call 069 382 4908 now.",
    url: "https://generatorrepairservices.co.za/generator-servicing-near-me",
    siteName: "Generator Repair Services",
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://generatorrepairservices.co.za/generator-servicing-near-me",
  },
}

export default function GeneratorServicingNearMePage() {
  return (
    <>
      <StructuredData
        type="Service"
        name="Generator Servicing Near Me"
        description="Professional generator servicing with local technicians available 24/7 across Gauteng"
      />

      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Generator Servicing Near Me" }]} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('/professional-technician-repairing-industrial-gener.jpg')] bg-cover bg-center opacity-10" />
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full mb-6">
              <MapPin className="h-4 w-4" />
              <span className="text-sm font-medium">📍 Local Technicians Available Now</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Generator Servicing Near Me - Same-Day Local Service
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 text-pretty">
              Expert generator servicing in your area. Response within 60 minutes. 5,000+ local customers served.
              Comprehensive service from R850.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-primary font-bold text-lg px-8 py-6 h-auto group"
                asChild
              >
                <a href="tel:0693824908">
                  <Phone className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  Call Now: 069 382 4908
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white/30 text-lg px-8 py-6 h-auto"
                asChild
              >
                <a href="https://wa.me/27693824908" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>60-Minute Response</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>Same-Day Service</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>5,000+ Happy Customers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-Time Availability Alert */}
      <section className="bg-accent/10 border-y border-accent/20 py-4">
        <div className="container">
          <div className="flex items-center justify-center gap-3 text-center">
            <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse" />
            <p className="font-semibold text-lg">
              <span className="text-primary">3 technicians available in your area right now</span>
              <span className="text-muted-foreground ml-2">• Average arrival: 45 minutes</span>
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Professional Generator Servicing Near You - Available 24/7
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                When you search for "generator servicing near me," you need immediate results from trusted local
                professionals who can service your generator quickly and effectively. Our network of certified
                technicians covers all areas across Gauteng, ensuring that expert generator servicing is always within
                reach. With over 5,000 satisfied customers and a 60-minute average response time, we're the local
                generator servicing company that Johannesburg, Pretoria, Sandton, and Centurion residents trust most.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Generator servicing is not just routine maintenance—it's essential protection for your power security
                investment. Regular professional servicing extends your generator's lifespan by up to 300%, prevents
                costly emergency breakdowns during load shedding, and ensures your backup power system activates
                reliably when you need it most. Our local technicians provide comprehensive servicing that includes
                detailed inspections, oil changes, filter replacements, electrical system testing, and performance
                optimization—all backed by our satisfaction guarantee.
              </p>

              <div className="bg-blue-50 border-l-4 border-primary p-6 my-8 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <Clock className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-2 mt-0">Need Generator Servicing Right Now?</h3>
                    <p className="mb-3">
                      Local technician available in your area. Average arrival time: 45-60 minutes.
                    </p>
                    <Button className="bg-primary hover:bg-primary/90" asChild>
                      <a href="tel:0693824908">
                        <Phone className="mr-2 h-4 w-4" />
                        Call 069 382 4908 for Immediate Service
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-primary mb-6 mt-12">
                Why Choose Our Local Generator Servicing Team?
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                Finding reliable generator servicing near you shouldn't be a challenge. Our local team has built a
                reputation across Gauteng for exceptional service quality, rapid response times, and honest transparent
                pricing. Here's what sets our generator servicing apart from other local providers:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
                <Card className="border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">True Local Coverage</h3>
                        <p className="text-muted-foreground">
                          Technicians based in Johannesburg, Pretoria, Sandton, and Centurion. We're genuinely local,
                          not a call center routing to distant contractors.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">60-Minute Response Guarantee</h3>
                        <p className="text-muted-foreground">
                          Call us and we'll have a technician at your location within 60 minutes, or your service call
                          is free. That's our promise.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Certified & Insured</h3>
                        <p className="text-muted-foreground">
                          All technicians are factory-trained, certified, and fully insured. We carry R5 million public
                          liability insurance for your peace of mind.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Star className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">5,000+ Satisfied Customers</h3>
                        <p className="text-muted-foreground">
                          We've serviced over 5,000 generators across Gauteng. Check our Google reviews to see what your
                          neighbors are saying.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-3xl font-bold text-primary mb-6 mt-12">Comprehensive Generator Servicing Packages</h2>

              <p className="text-lg leading-relaxed mb-6">
                Our generator servicing packages are designed to meet every need and budget. Whether you need basic
                maintenance or comprehensive premium servicing, we have a package that protects your investment and
                ensures reliable power during load shedding.
              </p>

              <div className="grid md:grid-cols-3 gap-6 my-8 not-prose">
                <Card className="border-primary/20 hover:border-primary transition-all hover:shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-2">Basic Service</h3>
                    <div className="text-3xl font-bold text-primary mb-4">R850</div>
                    <ul className="space-y-2 text-sm mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Oil change (synthetic blend)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Air filter replacement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Spark plug inspection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Basic electrical check</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Fuel system inspection</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-transparent" variant="outline" asChild>
                      <a href="tel:0693824908">Book Basic Service</a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-primary bg-primary/5 hover:shadow-xl transition-all relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent text-primary px-4 py-1 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-2">Standard Service</h3>
                    <div className="text-3xl font-bold text-primary mb-4">R1,450</div>
                    <ul className="space-y-2 text-sm mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Everything in Basic, plus:</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Spark plug replacement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Battery load test</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Fuel filter replacement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Coolant system check</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Load bank testing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>3-month warranty</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                      <a href="tel:0693824908">Book Standard Service</a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 hover:border-primary transition-all hover:shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-2">Premium Service</h3>
                    <div className="text-3xl font-bold text-primary mb-4">R2,450</div>
                    <ul className="space-y-2 text-sm mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Everything in Standard, plus:</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Full synthetic oil upgrade</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Valve clearance adjustment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Full electrical system test</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Alternator performance test</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Governor adjustment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>6-month warranty</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Priority emergency support</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-transparent" variant="outline" asChild>
                      <a href="tel:0693824908">Book Premium Service</a>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-3xl font-bold text-primary mb-6 mt-12">
                Areas We Cover - Generator Servicing Near You
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                Our local generator servicing technicians cover all major areas across Gauteng. No matter where you're
                located, we have a qualified technician near you ready to provide professional generator servicing:
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-8 not-prose">
                {[
                  "Johannesburg CBD",
                  "Sandton",
                  "Pretoria",
                  "Centurion",
                  "Midrand",
                  "Randburg",
                  "Roodepoort",
                  "Benoni",
                  "Boksburg",
                  "Germiston",
                  "Kempton Park",
                  "Alberton",
                  "Edenvale",
                  "Bedfordview",
                  "Fourways",
                  "Rosebank",
                  "Bryanston",
                  "Hyde Park",
                  "Melrose",
                  "Illovo",
                ].map((area) => (
                  <div key={area} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>

              <p className="text-lg leading-relaxed mb-6">
                Don't see your area listed? Call us at{" "}
                <a href="tel:0693824908" className="text-primary font-bold hover:underline">
                  069 382 4908
                </a>{" "}
                - we likely service your location too. Our coverage extends throughout Gauteng and surrounding areas.
              </p>

              <h2 className="text-3xl font-bold text-primary mb-6 mt-12">
                What's Included in Professional Generator Servicing?
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                Professional generator servicing goes far beyond a simple oil change. Our comprehensive servicing
                includes detailed inspection and maintenance of every critical system:
              </p>

              <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Engine Service & Maintenance</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Oil Change:</strong> Complete oil system flush and refill with premium synthetic or
                    synthetic blend oil appropriate for your generator model and usage patterns
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Air Filter Service:</strong> Inspection, cleaning, or replacement of air filters to ensure
                    optimal combustion efficiency and engine longevity
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Spark Plug Maintenance:</strong> Inspection, gap adjustment, and replacement of spark plugs
                    to maintain reliable starting and smooth operation
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Valve Adjustment:</strong> Checking and adjusting valve clearances to manufacturer
                    specifications for optimal performance
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Cooling System Check:</strong> Inspection of coolant levels, hoses, and heat exchanger to
                    prevent overheating during extended load shedding periods
                  </span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Electrical System Testing</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Battery Testing:</strong> Load testing, voltage verification, and terminal cleaning to
                    ensure reliable starting power
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Alternator Verification:</strong> Testing output voltage, frequency stability, and current
                    delivery under various load conditions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Control Panel Inspection:</strong> Checking all switches, indicators, and safety interlocks
                    for proper operation
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Automatic Transfer Switch Testing:</strong> Verifying your ATS switches properly between
                    mains and generator power
                  </span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Fuel System Service</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Fuel Filter Replacement:</strong> Installing new fuel filters to prevent contamination and
                    ensure clean fuel delivery
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Fuel Line Inspection:</strong> Checking for leaks, cracks, or deterioration in fuel lines
                    and connections
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Fuel Quality Check:</strong> Testing fuel for water contamination or degradation, especially
                    important in South African climate
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Carburetor/Injection Service:</strong> Cleaning and adjusting fuel delivery systems for
                    optimal performance
                  </span>
                </li>
              </ul>

              <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <Shield className="h-8 w-8 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-2 mt-0">Service Guarantee</h3>
                    <p className="mb-3">
                      Every generator service includes a comprehensive warranty. If you experience any issues related to
                      the service work, we'll return and make it right at no additional charge.
                    </p>
                    <p className="font-semibold">Call 069 382 4908 to schedule your guaranteed service today.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-primary mb-6 mt-12">
                How Often Should You Service Your Generator?
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                Generator servicing frequency depends on usage, but with South Africa's load shedding reality, most
                generators need more frequent servicing than manufacturer recommendations suggest. Here's our expert
                guidance:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
                <Card className="border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-3">Frequent Load Shedding Use</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Running 4+ hours daily during Stage 4-6 load shedding
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="font-medium">Basic Service:</span>
                        <span className="text-primary font-bold">Every 50 hours</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="font-medium">Standard Service:</span>
                        <span className="text-primary font-bold">Every 100 hours</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="font-medium">Premium Service:</span>
                        <span className="text-primary font-bold">Every 250 hours</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-3">Moderate Use</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Running 1-3 hours daily during occasional load shedding
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="font-medium">Basic Service:</span>
                        <span className="text-primary font-bold">Every 100 hours</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="font-medium">Standard Service:</span>
                        <span className="text-primary font-bold">Every 200 hours</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="font-medium">Premium Service:</span>
                        <span className="text-primary font-bold">Every 500 hours</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                Even if you're not reaching these hour thresholds, we recommend servicing at least twice annually due to
                South Africa's climate conditions. Heat, humidity, and dust can degrade lubricants and filters even when
                the generator isn't running. Our technicians can assess your specific usage patterns and recommend an
                optimal service schedule during your next appointment.
              </p>

              <h2 className="text-3xl font-bold text-primary mb-6 mt-12">
                Signs Your Generator Needs Immediate Servicing
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                Don't wait for your scheduled service if you notice these warning signs. Call us immediately at{" "}
                <a href="tel:0693824908" className="text-primary font-bold hover:underline">
                  069 382 4908
                </a>{" "}
                for urgent servicing:
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="bg-red-100 p-2 rounded-full mt-0.5">
                    <Wrench className="h-5 w-5 text-red-600 flex-shrink-0" />
                  </div>
                  <div>
                    <strong className="text-lg">Difficulty Starting or Won't Start:</strong>
                    <p className="text-muted-foreground mt-1">
                      If your generator struggles to start or fails to start entirely, this indicates battery, fuel
                      system, or ignition problems requiring immediate attention.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-red-100 p-2 rounded-full mt-0.5">
                    <Wrench className="h-5 w-5 text-red-600 flex-shrink-0" />
                  </div>
                  <div>
                    <strong className="text-lg">Unusual Noises or Vibrations:</strong>
                    <p className="text-muted-foreground mt-1">
                      Knocking, grinding, or excessive vibration suggests internal engine problems, loose components, or
                      mounting issues that can cause severe damage if ignored.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-red-100 p-2 rounded-full mt-0.5">
                    <Wrench className="h-5 w-5 text-red-600 flex-shrink-0" />
                  </div>
                  <div>
                    <strong className="text-lg">Visible Smoke or Strong Fuel Smell:</strong>
                    <p className="text-muted-foreground mt-1">
                      Blue smoke indicates burning oil, black smoke suggests fuel problems, and white smoke can mean
                      coolant issues. Any fuel smell indicates dangerous leaks.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-red-100 p-2 rounded-full mt-0.5">
                    <Wrench className="h-5 w-5 text-red-600 flex-shrink-0" />
                  </div>
                  <div>
                    <strong className="text-lg">Low Oil Pressure Warning:</strong>
                    <p className="text-muted-foreground mt-1">
                      If the low oil pressure light illuminates or oil pressure gauge drops, shut down immediately and
                      call for service to prevent catastrophic engine damage.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-red-100 p-2 rounded-full mt-0.5">
                    <Wrench className="h-5 w-5 text-red-600 flex-shrink-0" />
                  </div>
                  <div>
                    <strong className="text-lg">Power Fluctuations or Surging:</strong>
                    <p className="text-muted-foreground mt-1">
                      If your lights flicker or appliances cycle on and off, your generator may have voltage regulation
                      or governor problems requiring immediate servicing.
                    </p>
                  </div>
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-primary mb-6 mt-12">Load Shedding-Ready Servicing</h2>

              <p className="text-lg leading-relaxed mb-6">
                South African generator owners face unique challenges. Extended load shedding periods mean your
                generator works harder and longer than generators in most other countries. Our servicing packages are
                specifically designed for South African load shedding conditions:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Extended Runtime Optimization:</strong> We adjust your generator for reliable performance
                    during 4-8 hour load shedding cycles common during Stage 4-6
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Dust Protection:</strong> South African dust conditions require more frequent air filter
                    maintenance than standard schedules suggest
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Temperature Tolerance:</strong> We use lubricants and coolants rated for Gauteng's
                    temperature extremes, from winter cold starts to summer heat
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Fuel Stability:</strong> We treat and stabilize fuel systems for South African fuel quality
                    and storage conditions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Quick Turnaround:</strong> We understand you can't be without backup power for long. Most
                    servicing completed in 2-3 hours on-site
                  </span>
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-primary mb-6 mt-12">Why Regular Servicing Saves You Money</h2>

              <p className="text-lg leading-relaxed mb-6">
                Some generator owners skip regular servicing to save money, but this decision typically costs far more
                in the long run. Here's the real financial impact of regular servicing versus neglect:
              </p>

              <div className="grid md:grid-cols-2 gap-8 my-8 not-prose">
                <div className="bg-green-50 border-2 border-green-600 rounded-lg p-6">
                  <h3 className="font-bold text-xl mb-4 text-green-700">With Regular Servicing</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Annual service cost:</strong> R2,900 (2x standard services)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Generator lifespan:</strong> 15-20 years (12,000-16,000 hours)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Emergency repairs:</strong> Rare (~R1,500 every 3-4 years)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Fuel efficiency:</strong> Optimal (saves ~15% on fuel costs)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Total 10-year cost:</strong> R34,000
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 border-2 border-red-600 rounded-lg p-6">
                  <h3 className="font-bold text-xl mb-4 text-red-700">Without Regular Servicing</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <Wrench className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Annual service cost:</strong> R0 (appears cheaper initially)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Wrench className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Generator lifespan:</strong> 5-7 years (4,000-5,000 hours)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Wrench className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Emergency repairs:</strong> Frequent (R8,000-R15,000 annually)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Wrench className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Fuel efficiency:</strong> Poor (wastes ~20% more fuel)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Wrench className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Total 10-year cost:</strong> R145,000+ (includes early replacement)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-lg leading-relaxed mb-6 font-semibold">
                Regular servicing saves you over R111,000 over 10 years while providing reliable power when you need it
                most. The choice is clear.
              </p>

              <h2 className="text-3xl font-bold text-primary mb-6 mt-12">Book Your Generator Service Now</h2>

              <p className="text-lg leading-relaxed mb-6">
                Don't wait for your generator to fail during the next load shedding cycle. Our local technicians are
                standing by to provide professional generator servicing that keeps your backup power system running
                reliably. With same-day service available across Gauteng and transparent pricing from R850, there's no
                reason to delay essential maintenance.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                Call us now at{" "}
                <a href="tel:0693824908" className="text-primary font-bold text-xl hover:underline">
                  069 382 4908
                </a>{" "}
                and speak directly with our service coordinator. We'll schedule your service at a time convenient for
                you, typically within 24 hours. Our technicians arrive fully equipped with all necessary parts and tools
                to complete your service in one visit.
              </p>

              <div className="bg-primary text-white rounded-lg p-8 my-12 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Service Your Generator?</h3>
                <p className="text-lg mb-6">Local technician available in your area. Same-day service appointments.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-primary font-bold text-lg px-8 py-6 h-auto"
                    asChild
                  >
                    <a href="tel:0693824908">
                      <Phone className="mr-2 h-5 w-5" />
                      Call 069 382 4908 Now
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/10 hover:bg-white/20 text-white border-white/30 text-lg px-8 py-6 h-auto"
                    asChild
                  >
                    <a href="https://wa.me/27693824908" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      WhatsApp Us
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTASection />
    </>
  )
}
