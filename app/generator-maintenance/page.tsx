import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { HeroSection } from "@/components/hero-section"
import { ContactCTASection } from "@/components/contact-cta-section"
import { MobileStickyCTA } from "@/components/mobile-sticky-cta"
import { SchemaMarkup } from "@/components/schema-markup"
import { SuburbsGrid } from "@/components/suburbs-grid"
import { Check, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Generator Maintenance Gauteng | Preventative Maintenance Plans | 069 382 4908",
  description:
    "Professional generator maintenance programs in Gauteng. Preventative maintenance contracts for diesel & petrol generators. Call 069 382 4908.",
  keywords: [
    "generator maintenance",
    "preventative maintenance",
    "Gauteng",
    "Johannesburg",
    "Pretoria",
    "maintenance contracts",
  ],
  alternates: {
    canonical: "https://generatorrepairservices.co.za/generator-maintenance",
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
]

export default function GeneratorMaintenancePage() {
  return (
    <>
      <SchemaMarkup
        serviceType="Generator Maintenance"
        pageDescription="Comprehensive generator maintenance programs across Gauteng"
      />
      <SiteHeader />
      <main>
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Generator Maintenance" }]} />
        </div>

        <HeroSection
          title="Professional Generator Maintenance Programs in Gauteng"
          description="Comprehensive preventative maintenance contracts for diesel, petrol and industrial generators. Scheduled servicing, priority support and extended equipment lifespan. Certified technicians serving Johannesburg, Pretoria, Sandton and Centurion."
        />

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mb-6">
                  Protect Your Investment with Professional Generator Maintenance
                </h2>
                <p className="text-lg leading-relaxed mb-6">
                  Generator Repair Services offers comprehensive generator maintenance programs throughout Gauteng
                  designed to keep your backup power system operating reliably while minimizing unexpected breakdowns
                  and repair costs. Our preventative generator maintenance contracts provide scheduled servicing,
                  priority emergency response, detailed maintenance tracking, and peace of mind knowing your generator
                  receives expert care from certified technicians. With over 15 years of experience in generator
                  maintenance across Johannesburg, Pretoria, Sandton, Centurion, and throughout Gauteng, Generator
                  Repair Services understands that regular preventative maintenance is the most cost-effective approach
                  to generator ownership. Our maintenance programs extend equipment lifespan, improve reliability,
                  reduce fuel consumption, maintain warranty coverage, and prevent expensive emergency repairs through
                  early problem detection. Whether you have a residential backup generator, commercial generator system,
                  or industrial power installation, Generator Repair Services can design a customized maintenance
                  program tailored to your generator type, usage patterns, and specific requirements. Our mobile
                  maintenance service brings professional care directly to your location with fully equipped service
                  vehicles and certified technicians who follow comprehensive maintenance procedures using quality parts
                  and proper techniques. Generator Repair Services maintenance contracts include flexible scheduling
                  options, competitive pricing with predictable costs, detailed service documentation, and priority
                  support when you need assistance. Trust Gauteng's leading generator maintenance specialists to protect
                  your backup power investment with professional preventative maintenance programs.
                </p>

                <div className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-lg">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    Why Choose Preventative Maintenance Contracts?
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    Many generator owners wait until problems occur before scheduling service, resulting in costly
                    emergency repairs, potential safety issues, and backup power failures when generators are needed
                    most. Generator Repair Services preventative maintenance contracts eliminate these risks through
                    scheduled servicing that identifies and resolves potential issues before they cause breakdowns.
                    Maintenance contracts provide budget predictability, priority service, comprehensive care, and the
                    confidence that your generator will perform reliably during power outages. Call 069 382 4908 to
                    discuss maintenance contract options for your generator.
                  </p>
                </div>

                <h2 className="text-3xl font-bold mb-6">Comprehensive Generator Maintenance Programs</h2>
                <p className="leading-relaxed mb-6">
                  Generator Repair Services designs maintenance programs to meet your specific needs and generator
                  requirements. Our standard maintenance contracts include regularly scheduled servicing at intervals
                  appropriate for your generator type and usage patterns, typically quarterly, bi-annual, or annual
                  visits. Each scheduled maintenance visit includes comprehensive procedures such as engine oil and
                  filter changes using quality oils meeting manufacturer specifications, air filter inspection and
                  replacement to maintain proper airflow and engine performance, fuel filter replacement preventing
                  contamination from reaching engines and fuel systems, coolant level checks and condition assessment
                  with top-ups or replacements as needed, battery testing including load tests and voltage verification
                  to ensure reliable starting, belt and hose inspection for wear or damage with replacements when
                  necessary, spark plug inspection and replacement for petrol generators maintaining optimal combustion,
                  fuel system inspection and cleaning to prevent fuel-related problems, electrical system testing
                  verifying voltage output and system function, control panel diagnostics checking all functions and
                  settings, safety shutdown system testing ensuring protective systems work properly, exhaust system
                  inspection checking for leaks or blockages, comprehensive visual inspection for leaks, damage, or
                  unusual conditions, full load testing under controlled conditions verifying rated power output, and
                  detailed service reports documenting all work performed, parts replaced, test results, and
                  recommendations. Generator Repair Services maintenance contracts also include priority scheduling for
                  your regular service appointments, priority emergency response if breakdowns occur between scheduled
                  services, discounted rates on additional repairs or parts if needed beyond regular maintenance,
                  detailed maintenance history tracking creating valuable service records, reminder notifications before
                  scheduled service appointments, and direct contact with dedicated service coordinators familiar with
                  your equipment and site.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                  <Card>
                    <CardContent className="p-6">
                      <Shield className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-xl font-bold mb-3">Basic Plan</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Annual servicing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Oil and filter changes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Basic inspections</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Service reports</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>10% discount on repairs</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <Shield className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-xl font-bold mb-3">Professional Plan</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Bi-annual servicing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Comprehensive maintenance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Load testing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Priority scheduling</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>15% discount on repairs</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <Shield className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-xl font-bold mb-3">Premium Plan</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Quarterly servicing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Full maintenance program</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Priority emergency response</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Extended load testing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>20% discount on repairs</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <h2 className="text-3xl font-bold mb-6">Benefits of Generator Maintenance Contracts</h2>
                <p className="leading-relaxed mb-6">
                  Investing in a Generator Repair Services maintenance contract delivers significant benefits that
                  protect your generator investment and provide long-term value. Preventative maintenance prevents
                  costly emergency breakdowns by identifying and addressing potential problems during scheduled service
                  visits before they cause generator failures, saving thousands in emergency repair costs and preventing
                  downtime during critical power outages. Regular maintenance extends generator lifespan by ensuring
                  proper lubrication, clean filters, correct fluid levels, and optimal operating conditions that prevent
                  premature wear and component failures. Well-maintained generators operate more efficiently with better
                  fuel consumption, reduced emissions, and improved performance compared to neglected equipment.
                  Maintenance contracts provide budget predictability with fixed service costs that help you plan and
                  budget for generator upkeep without unexpected emergency repair expenses. Most generator manufacturers
                  require proof of regular maintenance to maintain warranty coverage, and our detailed service records
                  provide the documentation needed for warranty claims. Priority emergency response means if problems do
                  occur between scheduled services, maintenance contract clients receive priority scheduling and
                  discounted repair rates. Regular maintenance ensures your generator will start reliably and produce
                  rated power output when you need backup power during utility failures. Scheduled maintenance visits
                  identify safety issues such as fuel leaks, exhaust problems, or electrical faults before they pose
                  risks to people or property. Comprehensive service records increase generator resale value and provide
                  documentation for insurance purposes. Perhaps most importantly, maintenance contracts provide peace of
                  mind knowing certified technicians regularly inspect, service, and test your generator to ensure
                  reliable operation. Generator Repair Services makes preventative maintenance convenient, affordable,
                  and effective with professional technicians, quality parts, thorough procedures, and customer-focused
                  service throughout Gauteng.
                </p>

                <h2 className="text-3xl font-bold mb-6">
                  Maintenance for All Generator Types - Residential, Commercial, Industrial
                </h2>
                <p className="leading-relaxed mb-6">
                  Generator Repair Services provides maintenance programs for all types of generators serving
                  residential, commercial, and industrial applications across Gauteng. For residential generators, we
                  offer maintenance contracts for home backup generators typically ranging from 5kVA to 30kVA, including
                  diesel and petrol standby generators protecting homes against load shedding and power outages. Our
                  residential maintenance ensures your family has reliable backup power when needed most. Commercial
                  generator maintenance covers backup power systems for businesses, offices, retail stores, restaurants,
                  medical facilities, and other commercial properties where power reliability is critical for operations
                  and customer service. We understand that commercial generator failures can result in lost revenue,
                  spoiled inventory, and disrupted operations, which is why our commercial maintenance programs
                  emphasize reliability and minimize downtime. Industrial generator maintenance serves manufacturing
                  facilities, warehouses, mining operations, agricultural operations, construction sites, and other
                  industrial applications requiring robust backup power or prime power generation. Industrial generators
                  often operate under demanding conditions with higher utilization, making regular preventative
                  maintenance essential for avoiding costly production interruptions. Generator Repair Services works
                  with all generator sizes from small portable units to large installations producing several hundred
                  kVA or more. We service all major brands including Perkins, Cummins, Caterpillar, SDMO, Volvo Penta,
                  Kohler, Generac, and others. Whether you have a single generator or multiple generators across
                  different locations, Generator Repair Services can design maintenance programs meeting your specific
                  requirements. Our flexible contract terms, professional service, competitive pricing, and proven
                  results have made us Gauteng's preferred generator maintenance provider for hundreds of residential,
                  commercial, and industrial clients. Call 069 382 4908 to discuss maintenance programs for your
                  generators.
                </p>

                <h2 className="text-3xl font-bold mb-6">Mobile Maintenance Service Across Gauteng</h2>
                <p className="leading-relaxed mb-6">
                  Generator Repair Services delivers convenient mobile maintenance service throughout Gauteng province,
                  bringing professional care directly to your generator location. Our fully equipped service vehicles
                  contain all necessary tools, diagnostic equipment, quality oils and lubricants, filters, and common
                  parts enabling our technicians to complete comprehensive maintenance procedures on-site. Mobile
                  maintenance eliminates the need to transport generators to workshops, saving time and expense while
                  minimizing downtime for your backup power system. We provide scheduled mobile maintenance visits in
                  Johannesburg and all surrounding areas including Sandton, Rosebank, Hyde Park, Bryanston, Fourways,
                  Sunninghill, Randburg, Roodepoort, and throughout the greater Johannesburg metropolitan area. Our
                  mobile service covers all areas of Pretoria including Brooklyn, Hatfield, Waterkloof, Menlo Park,
                  Lynnwood, Garsfontein, Centurion, and surrounding Pretoria suburbs. We also serve Midrand, Kempton
                  Park, Benoni, Boksburg, Germiston, Alberton, Krugersdorp, and other Gauteng municipalities. Whether
                  your generator is installed at a residential property, office building, retail location, industrial
                  facility, construction site, or any other location within Gauteng, Generator Repair Services
                  technicians will arrive at your scheduled appointment time with everything needed to complete your
                  maintenance service. Our technicians work efficiently, complete services during convenient times
                  including after-hours or weekends if needed, and leave your site clean and organized. Mobile
                  maintenance is ideal for installed generators, multiple generator locations, clients who value
                  convenience, and businesses requiring service during non-operating hours to avoid disruption.
                  Generator Repair Services mobile maintenance brings professional generator care to you across Gauteng.
                </p>

                <div className="bg-card border rounded-lg p-8 my-8">
                  <h3 className="text-2xl font-bold mb-4">Related Generator Services</h3>
                  <p className="mb-4 leading-relaxed">
                    Generator Repair Services provides complete generator solutions throughout Gauteng:
                  </p>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/generator-servicing" className="text-primary hover:underline font-medium">
                        Generator Servicing
                      </Link>{" "}
                      - One-time servicing and maintenance
                    </li>
                    <li>
                      <Link href="/generator-repairs" className="text-primary hover:underline font-medium">
                        Generator Repairs
                      </Link>{" "}
                      - Professional repairs for all generator problems
                    </li>
                    <li>
                      <Link href="/emergency-generator-repairs" className="text-primary hover:underline font-medium">
                        Emergency Generator Repairs
                      </Link>{" "}
                      - 24/7 emergency service
                    </li>
                    <li>
                      <Link
                        href="/generator-maintenance-johannesburg"
                        className="text-primary hover:underline font-medium"
                      >
                        Generator Maintenance Johannesburg
                      </Link>{" "}
                      - Maintenance programs in Johannesburg
                    </li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold mb-6">Schedule Your Generator Maintenance Program Today</h2>
                <p className="leading-relaxed mb-6">
                  Protect your generator investment with a professional maintenance contract from Generator Repair
                  Services. Contact us at 069 382 4908 to discuss maintenance program options, pricing, and scheduling
                  for your diesel, petrol, or industrial generator. Our experienced team will help you select the
                  appropriate maintenance plan based on your generator type, usage patterns, and specific requirements.
                  You can also reach us via WhatsApp for quick responses or email info@generatorrepairservices.co.za
                  with your maintenance needs. Generator Repair Services serves all areas of Gauteng including
                  Johannesburg, Pretoria, Sandton, Centurion, and beyond with professional mobile generator maintenance.
                  Trust Gauteng's leading generator maintenance specialists to keep your backup power system operating
                  reliably for years to come.
                </p>
              </div>
            </div>
          </div>
        </section>

        <SuburbsGrid title="Generator Maintenance Available In These Areas" suburbs={serviceAreas} />

        <ContactCTASection />
      </main>
      <SiteFooter />
      <MobileStickyCTA />
    </>
  )
}
