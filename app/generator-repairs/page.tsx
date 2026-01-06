
import { Breadcrumbs } from "@/components/breadcrumbs"
import { HeroSection } from "@/components/hero-section"
import { ContactCTASection } from "@/components/contact-cta-section"
import { SchemaMarkup } from "@/components/schema-markup"
import { SuburbsGrid } from "@/components/suburbs-grid"
import { Check, Wrench, AlertCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "★★★★★ Expert Generator Repairs Gauteng 2025 | #1 Professional Service",
  description:
    "★★★★★ #1 professional generator repairs in Gauteng. Diesel, petrol & industrial generators. 24/7 emergency service. Certified technicians. Call 069 382 4908 for same-day repairs.",
  openGraph: {
    title: "Expert Generator Repairs Gauteng | Professional Generator Repair Service",
    description:
      "Professional generator repairs across Gauteng. 24/7 emergency service, certified technicians, all brands serviced. Call 069 382 4908.",
    url: "https://generatorrepairservices.co.za/generator-repairs",
    siteName: "Generator Repair Services",
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://generatorrepairservices.co.za/generator-repairs",
  },
}

const serviceAreas = [
  "Johannesburg",
  "Pretoria",
  "Sandton",
  "Centurion",
  "Fourways",
  "Midrand",
  "Randburg",
  "Roodepoort",
  "Rosebank",
  "Bryanston",
  "Sunninghill",
  "Rivonia",
  "Brooklyn",
  "Hatfield",
  "Waterkloof",
  "Lynnwood",
]

export default function GeneratorRepairsPage() {
  return (
    <>
      <SchemaMarkup serviceType="Generator Repairs" pageDescription="Professional generator repairs across Gauteng" />
      
      <main>
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Generator Repairs" }]} />
        </div>

        <HeroSection
          title="Professional Generator Repairs Across Gauteng"
          description="Expert generator repair services for diesel, petrol and industrial generators. 24-hour emergency callouts. Certified technicians with 15+ years experience. Same-day repairs available in Johannesburg, Pretoria, Sandton and Centurion."
        />

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mb-6">
                  Gauteng's Leading Generator Repair Specialists - Fast, Reliable, Affordable
                </h2>
                <p className="text-lg leading-relaxed mb-6">
                  Generator Repair Services is your trusted partner for professional generator repairs throughout
                  Gauteng. With over 15 years of specialized experience in generator repairs, our team of certified
                  technicians provides fast, reliable, and affordable repair solutions for all types of generators
                  including diesel generators, petrol generators, industrial generators, commercial backup systems, and
                  residential standby generators. We understand that generator breakdowns can cause significant
                  disruption to your home, business, or operations, which is why Generator Repair Services offers
                  24-hour emergency generator repair services across Johannesburg, Pretoria, Sandton, Centurion,
                  Fourways, Midrand, and all surrounding Gauteng areas. Our mobile repair service means we come directly
                  to your location with fully equipped service vehicles, enabling us to diagnose and repair most
                  generator problems on-site during the same visit. Whether you're experiencing starting problems,
                  electrical faults, fuel system issues, engine problems, or any other generator malfunction, our
                  experienced technicians have the knowledge, tools, and genuine parts to get your generator back up and
                  running quickly. At Generator Repair Services, we pride ourselves on transparent pricing with no
                  hidden fees, quality workmanship backed by solid warranties, and exceptional customer service that has
                  made us Gauteng's most trusted generator repair company.
                </p>

                <div className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-lg">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">Why Choose Our Generator Repair Services?</h3>
                  <p className="text-foreground leading-relaxed">
                    Generator Repair Services delivers professional generator repairs that you can trust. Our certified
                    technicians undergo continuous training on the latest generator technologies and repair techniques.
                    We service all major generator brands including Perkins, Cummins, Caterpillar, SDMO, Volvo Penta,
                    Kohler, Generac, Honda, Yamaha, and more. With rapid response times, competitive pricing, and a
                    commitment to getting the job done right the first time, Generator Repair Services is your reliable
                    partner for all generator repair needs across Gauteng.
                  </p>
                </div>

                <h2 className="text-3xl font-bold mb-6">Comprehensive Generator Repair Services</h2>
                <p className="leading-relaxed mb-6">
                  Generator Repair Services offers comprehensive repair solutions for all types of generator problems
                  and malfunctions. Our expert technicians specialize in diagnosing and repairing engine issues
                  including starting problems, rough running, loss of power, overheating, excessive smoke, and engine
                  knocking or unusual noises. We repair electrical system faults such as no power output, fluctuating
                  voltage, faulty alternators, voltage regulator failures, control panel malfunctions, and wiring
                  problems. Our fuel system repairs include fuel filter replacements, fuel pump repairs, carburetor
                  cleaning and rebuilding, fuel injector cleaning and replacement, fuel line repairs, and fuel
                  contamination issues. For cooling system problems, we repair radiator leaks, replace water pumps, fix
                  coolant leaks, repair thermostat issues, and clean blocked cooling systems. Battery and starting
                  system repairs include battery testing and replacement, starter motor repairs, solenoid replacements,
                  charging system diagnostics, and electrical connection repairs. We also handle exhaust system repairs,
                  oil leaks, gasket replacements, bearing replacements, control panel upgrades, automatic transfer
                  switch repairs, and complete generator overhauls. Whatever generator problem you're experiencing,
                  Generator Repair Services has the expertise to diagnose the issue accurately and implement effective
                  repairs using quality parts and proper procedures.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <Card>
                    <CardContent className="p-6">
                      <Wrench className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-xl font-bold mb-3">Engine Repairs</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Starting problems and diagnosis</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Engine overhaul and rebuilds</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Piston and cylinder repairs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Valve adjustments and repairs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Gasket and seal replacements</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Oil leak repairs</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <AlertCircle className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-xl font-bold mb-3">Electrical Repairs</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Alternator repairs and replacement</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Voltage regulator (AVR) repairs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Control panel diagnostics</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Wiring fault repairs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Starter motor repairs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Battery testing and replacement</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <h2 className="text-3xl font-bold mb-6">24-Hour Emergency Generator Repair Service</h2>
                <p className="leading-relaxed mb-6">
                  Generator breakdowns don't follow a schedule, and neither do we. Generator Repair Services provides
                  24-hour emergency generator repair services across all of Gauteng, available day or night, weekends,
                  and public holidays. When your generator fails and you need urgent assistance, simply call 069 382
                  4908 and our emergency dispatch team will immediately coordinate with the nearest available technician
                  to your location. We maintain rapid response times with the goal of reaching emergency callouts in
                  Johannesburg, Pretoria, Sandton, and Centurion within 2-4 hours. Our mobile repair vehicles are fully
                  equipped with diagnostic equipment, common parts, and specialized tools to handle most emergency
                  repairs on-site. Whether you're a homeowner needing your backup generator repaired, a business facing
                  downtime due to generator failure, or an industrial facility requiring immediate power restoration,
                  Generator Repair Services delivers the fast, professional emergency repairs you need. We understand
                  that generator failures can result in significant costs, disruption, and inconvenience, which is why
                  we prioritize emergency callouts and work efficiently to diagnose problems and implement effective
                  solutions. Our emergency repair service covers all types of generator issues including generators that
                  won't start, generators running but not producing power, generators overheating, unusual noises or
                  vibrations, electrical failures, fuel system problems, and any other urgent generator malfunctions.
                  Trust Generator Repair Services for reliable 24-hour emergency generator repairs throughout Gauteng -
                  call 069 382 4908 now for immediate assistance.
                </p>

                <h2 className="text-3xl font-bold mb-6">All Generator Brands and Types Serviced</h2>
                <p className="leading-relaxed mb-6">
                  Generator Repair Services has extensive experience repairing all major generator brands and
                  manufacturers. Our certified technicians work with Perkins generators, Cummins generators, Caterpillar
                  generators, SDMO generators, Volvo Penta generators, Kohler generators, Generac generators, Honda
                  generators, Yamaha generators, Lister Petter generators, FG Wilson generators, Deutz generators,
                  Yanmar generators, Kubota generators, Stamford alternators, Mecc Alte alternators, and many more
                  brands. We repair all types of generators including diesel generators ranging from small 5kVA units to
                  large industrial diesel generators of 500kVA or more, petrol generators from portable 2kW camping
                  generators to larger residential backup systems, industrial generators powering manufacturing
                  facilities and commercial operations, standby generators providing automatic backup power, prime power
                  generators operating as primary power sources, continuous duty generators running 24/7, open frame
                  generators, enclosed soundproof generators, portable generators, stationary installed generators,
                  single-phase and three-phase generators, and generators with manual or automatic start systems. No
                  matter what brand, type, or size of generator you have, Generator Repair Services has the knowledge,
                  experience, and resources to repair it properly. Our technicians stay current with the latest
                  generator technologies through ongoing training and have access to technical documentation, diagnostic
                  software, and genuine OEM parts for all major brands.
                </p>

                <h2 className="text-3xl font-bold mb-6">Generator Repair Process - What to Expect</h2>
                <p className="leading-relaxed mb-6">
                  When you contact Generator Repair Services for generator repairs, we follow a systematic process to
                  ensure quality repairs and customer satisfaction. First, you'll speak with our friendly team who will
                  gather information about your generator problem, type and brand of generator, location, and whether
                  you need emergency or scheduled service. Based on this information, we'll provide an estimated cost
                  range and schedule a technician visit. Our certified technician arrives at your location in a fully
                  equipped mobile service vehicle and begins with thorough diagnostics using specialized testing
                  equipment to identify the root cause of the problem. Before proceeding with repairs, the technician
                  will explain the issue in clear terms, outline the necessary repairs, and provide a detailed written
                  quote including parts and labor costs. Once you approve the quote, we proceed with the repair work
                  using quality genuine or aftermarket parts that meet manufacturer specifications. After completing
                  repairs, we thoroughly test your generator under load to verify proper operation and ensure all
                  systems are functioning correctly. You'll receive a detailed service report documenting the work
                  performed, parts used, and any recommendations for future maintenance or additional repairs. All
                  repairs come with warranties on both parts and labor for your peace of mind. Payment is due upon
                  completion unless other arrangements have been made. Generator Repair Services maintains detailed
                  records of all work performed on your generator, creating a valuable service history that helps with
                  future maintenance planning and potential warranty claims. Our transparent, professional approach to
                  generator repairs has earned us the trust of hundreds of satisfied customers across Gauteng.
                </p>

                <h2 className="text-3xl font-bold mb-6">Service Areas - Generator Repairs Across Gauteng</h2>
                <p className="leading-relaxed mb-6">
                  Generator Repair Services provides mobile generator repair services throughout Gauteng province. We
                  serve all areas of{" "}
                  <Link href="/generator-repairs-johannesburg" className="text-primary hover:underline font-medium">
                    Johannesburg
                  </Link>{" "}
                  including Sandton, Rosebank, Hyde Park, Bryanston, Fourways, Sunninghill, Morningside, Rivonia,
                  Melrose, Parktown, Houghton, Randburg, Roodepoort, and all surrounding suburbs. Our technicians also
                  cover all areas of{" "}
                  <Link href="/generator-repairs-pretoria" className="text-primary hover:underline font-medium">
                    Pretoria
                  </Link>{" "}
                  including Brooklyn, Hatfield, Waterkloof, Menlo Park, Lynnwood, Garsfontein, Faerie Glen, Silver
                  Lakes, Moreleta Park, Centurion, and surrounding suburbs. We provide generator repairs in{" "}
                  <Link href="/generator-repairs-sandton" className="text-primary hover:underline font-medium">
                    Sandton
                  </Link>
                  ,{" "}
                  <Link href="/generator-repairs-centurion" className="text-primary hover:underline font-medium">
                    Centurion
                  </Link>
                  , Midrand, Kempton Park, Benoni, Boksburg, Germiston, Alberton, Krugersdorp, and other Gauteng
                  municipalities. Our mobile repair service means we come to your location whether you're in a
                  residential area, commercial property, industrial facility, construction site, or any other location
                  within Gauteng. Call 069 382 4908 to schedule generator repairs in your area or for emergency service
                  anywhere in Gauteng.
                </p>

                <div className="bg-card border rounded-lg p-8 my-8">
                  <h3 className="text-2xl font-bold mb-4">Related Generator Services</h3>
                  <p className="mb-4 leading-relaxed">
                    In addition to generator repairs, Generator Repair Services offers comprehensive generator solutions
                    including:
                  </p>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/generator-servicing" className="text-primary hover:underline font-medium">
                        Generator Servicing
                      </Link>{" "}
                      - Regular maintenance and servicing to prevent breakdowns
                    </li>
                    <li>
                      <Link href="/generator-maintenance" className="text-primary hover:underline font-medium">
                        Generator Maintenance
                      </Link>{" "}
                      - Preventative maintenance programs for optimal performance
                    </li>
                    <li>
                      <Link href="/generator-installation" className="text-primary hover:underline font-medium">
                        Generator Installation
                      </Link>{" "}
                      - Professional installation of new generators
                    </li>
                    <li>
                      <Link href="/diesel-generator-repairs" className="text-primary hover:underline font-medium">
                        Diesel Generator Repairs
                      </Link>{" "}
                      - Specialized diesel generator repair services
                    </li>
                    <li>
                      <Link href="/emergency-generator-repairs" className="text-primary hover:underline font-medium">
                        Emergency Generator Repairs
                      </Link>{" "}
                      - 24/7 emergency callout service
                    </li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold mb-6">Contact Generator Repair Services Today</h2>
                <p className="leading-relaxed mb-6">
                  When you need reliable, professional generator repairs in Gauteng, trust the experts at Generator
                  Repair Services. Call us now at 069 382 4908 for immediate assistance with emergency generator
                  breakdowns or to schedule a repair appointment. You can also reach us via WhatsApp for quick responses
                  or email us at info@generatorrepairservices.co.za. Our friendly team is ready to help with all your
                  generator repair needs across Johannesburg, Pretoria, Sandton, Centurion, and throughout Gauteng.
                  Generator Repair Services - your trusted partner for fast, reliable, and affordable generator repairs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <SuburbsGrid title="Generator Repairs Available In These Areas" suburbs={serviceAreas} />

        <ContactCTASection />
      </main>
    </>
  )
}
