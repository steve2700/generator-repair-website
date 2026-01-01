import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { HeroSection } from "@/components/hero-section"
import { ContactCTASection } from "@/components/contact-cta-section"
import { MobileStickyCTA } from "@/components/mobile-sticky-cta"
import { SchemaMarkup } from "@/components/schema-markup"
import { SuburbsGrid } from "@/components/suburbs-grid"
import { Check, Settings, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Generator Servicing Gauteng | Professional Generator Service | 069 382 4908",
  description:
    "Professional generator servicing in Gauteng. Regular maintenance for diesel & petrol generators. Certified technicians. Call 069 382 4908 for same-day service.",
  keywords: [
    "generator servicing",
    "generator service",
    "Gauteng",
    "Johannesburg",
    "Pretoria",
    "generator maintenance",
    "diesel service",
  ],
  alternates: {
    canonical: "https://generatorrepairservices.co.za/generator-servicing",
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

export default function GeneratorServicingPage() {
  return (
    <>
      <SchemaMarkup
        serviceType="Generator Servicing"
        pageDescription="Professional generator servicing and maintenance across Gauteng"
      />
      <SiteHeader />
      <main>
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Generator Servicing" }]} />
        </div>

        <HeroSection
          title="Professional Generator Servicing Across Gauteng"
          description="Expert generator servicing for diesel, petrol and industrial generators. Regular maintenance, oil changes, filter replacements and comprehensive inspections. Certified technicians with 15+ years experience serving Johannesburg, Pretoria, Sandton and Centurion."
        />

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mb-6">
                  Keep Your Generator Running Reliably with Professional Servicing
                </h2>
                <p className="text-lg leading-relaxed mb-6">
                  Generator Repair Services provides comprehensive generator servicing throughout Gauteng to keep your
                  backup power system running reliably when you need it most. With over 15 years of specialized
                  experience in generator maintenance and servicing, our certified technicians deliver professional,
                  thorough service for all types of generators including diesel generators, petrol generators,
                  industrial generators, commercial backup systems, and residential standby generators. Regular
                  generator servicing is essential for maintaining peak performance, preventing costly breakdowns,
                  improving fuel efficiency, and extending the operational lifespan of your generator equipment. At
                  Generator Repair Services, we understand that your generator is a critical investment that must be
                  ready to perform when power fails, which is why we follow comprehensive servicing procedures using
                  quality oils, filters, and parts that meet or exceed manufacturer specifications. Our mobile generator
                  servicing means we come directly to your location in Johannesburg, Pretoria, Sandton, Centurion,
                  Fourways, Midrand, or anywhere across Gauteng with fully equipped service vehicles, providing
                  convenient on-site servicing that minimizes disruption to your operations. Whether you need a one-time
                  generator service, regular scheduled servicing, or a comprehensive preventative maintenance program,
                  Generator Repair Services delivers the professional workmanship, transparent pricing, and exceptional
                  customer service that has made us Gauteng's most trusted generator servicing company.
                </p>

                <div className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-lg">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">Why Regular Generator Servicing Matters</h3>
                  <p className="text-foreground leading-relaxed">
                    Many generator owners overlook regular servicing until problems occur, resulting in expensive
                    emergency repairs and potential power outages at critical times. Professional generator servicing
                    from Generator Repair Services helps prevent these issues by identifying and addressing potential
                    problems before they cause breakdowns. Regular servicing improves reliability, maintains warranty
                    validity, reduces fuel consumption, prevents carbon buildup, ensures safety systems function
                    properly, and gives you peace of mind that your generator will start and run when needed. Call 069
                    382 4908 to schedule your generator service today.
                  </p>
                </div>

                <h2 className="text-3xl font-bold mb-6">Comprehensive Generator Servicing Procedures</h2>
                <p className="leading-relaxed mb-6">
                  Generator Repair Services follows thorough, systematic servicing procedures to ensure your generator
                  receives complete care and maintenance. Our standard generator service includes engine oil and oil
                  filter replacement using quality oils suitable for your generator type and operating conditions. We
                  inspect and replace air filters to ensure proper airflow and engine performance, recognizing that
                  clogged air filters reduce efficiency and can cause engine damage. Fuel filters are replaced to
                  prevent contamination from reaching the engine and fuel injectors. We check coolant levels and
                  condition, topping up or replacing coolant as needed to prevent overheating issues. Battery testing
                  includes load testing, voltage checks, and terminal cleaning to ensure reliable starting. We inspect
                  belts and hoses for wear, cracks, or damage that could lead to failures, replacing any components
                  showing signs of deterioration. For petrol generators, we inspect and replace spark plugs as needed,
                  cleaning or replacing air filters, and checking fuel system components. Diesel generators receive fuel
                  injector inspection, turbocharger checks if applicable, and diesel particulate filter inspection. All
                  generators receive electrical system testing including voltage output verification, control panel
                  function testing, and safety shutdown system checks. We perform visual inspections for oil leaks, fuel
                  leaks, coolant leaks, exhaust system condition, wiring condition, and overall generator condition.
                  Finally, we conduct full load testing under controlled conditions to verify the generator produces
                  rated power output and all systems function correctly under load. Each service includes a detailed
                  report documenting work performed, parts replaced, test results, and recommendations for any
                  additional maintenance or repairs needed.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                  <Card>
                    <CardContent className="p-6">
                      <Settings className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-xl font-bold mb-3">Standard Service</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Oil and filter change</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Air filter inspection</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Fuel filter replacement</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Battery testing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Coolant level check</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Visual inspection</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <Check className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-xl font-bold mb-3">Comprehensive Service</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>All standard service items</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Spark/glow plug inspection</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Electrical system testing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Load bank testing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Control panel diagnostics</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Detailed service report</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <Calendar className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-xl font-bold mb-3">Maintenance Plans</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Scheduled servicing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Priority booking</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Discounted rates</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Service history tracking</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Priority emergency response</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Customized service intervals</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <h2 className="text-3xl font-bold mb-6">How Often Should You Service Your Generator?</h2>
                <p className="leading-relaxed mb-6">
                  The recommended generator servicing frequency depends on several factors including usage patterns,
                  generator type, operating environment, and manufacturer specifications. Generator Repair Services
                  generally recommends servicing generators every 6-12 months or after every 100-200 hours of operation,
                  whichever comes first. For standby generators that run infrequently only during power outages, annual
                  servicing is typically sufficient to maintain reliability and readiness. However, these generators
                  should still receive regular exercise runs and basic checks between annual services. Generators used
                  for prime power or operating regularly should be serviced more frequently, typically every 3-6 months
                  or every 100 operating hours to prevent wear-related issues. Industrial generators running
                  continuously or near-continuously require servicing every 250-500 operating hours or every 2-3 months
                  depending on conditions. Generators operating in harsh environments with high dust levels, temperature
                  extremes, or poor fuel quality may require more frequent servicing to prevent premature wear and
                  failures. Additionally, most generator manufacturers specify servicing intervals in the owner's
                  manual, and following these recommendations is important for maintaining warranty coverage. Generator
                  Repair Services can help you establish an appropriate servicing schedule based on your specific
                  generator, usage patterns, and operating conditions. Call 069 382 4908 to discuss generator servicing
                  intervals and schedule your next service appointment. For more information about preventative
                  maintenance programs, visit our{" "}
                  <Link href="/generator-maintenance" className="text-primary hover:underline font-medium">
                    Generator Maintenance
                  </Link>{" "}
                  page.
                </p>

                <h2 className="text-3xl font-bold mb-6">Benefits of Regular Generator Servicing</h2>
                <p className="leading-relaxed mb-6">
                  Investing in regular professional generator servicing from Generator Repair Services delivers
                  significant benefits that far outweigh the cost of periodic maintenance. Regular servicing prevents
                  costly emergency breakdowns by identifying and addressing potential problems before they cause
                  generator failures, saving you from expensive emergency repair bills and the inconvenience of power
                  outages at critical times. Well-maintained generators start more reliably and produce consistent power
                  output, giving you confidence that your backup power system will work when needed. Regular oil
                  changes, filter replacements, and system cleaning improve fuel efficiency, reducing operating costs
                  over time. Professional servicing extends generator lifespan by preventing premature wear and ensuring
                  all components operate within proper parameters. Regular maintenance helps maintain manufacturer
                  warranty coverage, as most warranties require proof of regular servicing according to manufacturer
                  schedules. Servicing identifies safety issues such as fuel leaks, exhaust problems, or electrical
                  faults that could pose safety risks if left unaddressed. Clean air filters, proper engine tuning, and
                  well-maintained emission systems reduce harmful exhaust emissions. Regular load testing ensures your
                  generator can handle its rated capacity when needed, preventing failures during actual power outages.
                  Detailed service records provide valuable documentation for insurance purposes, equipment valuation,
                  and resale value. Perhaps most importantly, regular servicing provides peace of mind knowing your
                  generator is properly maintained and ready to provide reliable backup power when you need it.
                  Generator Repair Services makes generator servicing convenient with mobile service, flexible
                  scheduling, competitive pricing, and professional technicians who take pride in delivering thorough,
                  quality work.
                </p>

                <h2 className="text-3xl font-bold mb-6">Servicing All Generator Types and Brands</h2>
                <p className="leading-relaxed mb-6">
                  Generator Repair Services provides professional servicing for all types of generators and all major
                  brands. We service diesel generators of all sizes from compact 5kVA units to large industrial diesel
                  generators producing 500kVA or more, including water-cooled and air-cooled diesel generators. Our
                  technicians service petrol generators from small portable camping generators to larger residential
                  backup systems, including inverter generators and conventional generators. We service industrial
                  generators used in manufacturing, mining, agriculture, and other industrial applications, as well as
                  commercial generators providing backup power for businesses, offices, retail stores, restaurants, and
                  commercial buildings. Our servicing covers residential standby generators protecting homes against
                  power outages, portable generators for construction sites and events, and continuous duty generators
                  operating as primary power sources in off-grid locations. We work with all major generator brands
                  including Perkins, Cummins, Caterpillar, SDMO, Volvo Penta, Kohler, Generac, Honda, Yamaha, Lister
                  Petter, FG Wilson, Deutz, Yanmar, Kubota, and many more manufacturers. Whether you have an open frame
                  generator, enclosed soundproof generator, single-phase or three-phase generator, manual or automatic
                  start system, Generator Repair Services has the expertise and proper parts to service it according to
                  manufacturer specifications. Our technicians stay current with the latest generator technologies and
                  servicing procedures through ongoing training. Visit our location-specific pages for servicing in{" "}
                  <Link href="/generator-servicing-johannesburg" className="text-primary hover:underline font-medium">
                    Johannesburg
                  </Link>
                  ,{" "}
                  <Link href="/generator-servicing-pretoria" className="text-primary hover:underline font-medium">
                    Pretoria
                  </Link>
                  , and other Gauteng areas.
                </p>

                <h2 className="text-3xl font-bold mb-6">Mobile Generator Servicing Across Gauteng</h2>
                <p className="leading-relaxed mb-6">
                  Generator Repair Services provides convenient mobile generator servicing throughout Gauteng province.
                  We come to your location with fully equipped service vehicles containing all necessary tools,
                  diagnostic equipment, oils, filters, and common parts to complete servicing on-site. Our mobile
                  servicing saves you the time, expense, and hassle of transporting your generator to a workshop, while
                  minimizing downtime for your backup power system. We provide generator servicing across all areas of
                  Johannesburg, Pretoria, Sandton, Centurion, Fourways, Midrand, Randburg, Roodepoort, and throughout
                  Gauteng. Whether your generator is installed at a residential property, commercial building,
                  industrial facility, construction site, farm, or any other location within Gauteng, Generator Repair
                  Services can provide professional on-site servicing. Our technicians arrive at scheduled appointment
                  times with all necessary equipment and materials, complete the servicing work efficiently, and leave
                  your site clean and tidy. Mobile servicing is ideal for large installed generators that cannot easily
                  be moved, for businesses that need servicing completed outside normal operating hours, and for clients
                  who value convenience and minimal disruption. Call 069 382 4908 to schedule mobile generator servicing
                  at your location or to discuss your generator maintenance needs. Generator Repair Services - bringing
                  professional generator servicing to you across Gauteng.
                </p>

                <div className="bg-card border rounded-lg p-8 my-8">
                  <h3 className="text-2xl font-bold mb-4">Related Generator Services</h3>
                  <p className="mb-4 leading-relaxed">
                    Generator Repair Services offers comprehensive generator solutions beyond regular servicing:
                  </p>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/generator-repairs" className="text-primary hover:underline font-medium">
                        Generator Repairs
                      </Link>{" "}
                      - Professional repairs for all generator problems
                    </li>
                    <li>
                      <Link href="/generator-maintenance" className="text-primary hover:underline font-medium">
                        Generator Maintenance
                      </Link>{" "}
                      - Comprehensive preventative maintenance programs
                    </li>
                    <li>
                      <Link href="/diesel-generator-repairs" className="text-primary hover:underline font-medium">
                        Diesel Generator Servicing
                      </Link>{" "}
                      - Specialized servicing for diesel generators
                    </li>
                    <li>
                      <Link href="/emergency-generator-repairs" className="text-primary hover:underline font-medium">
                        Emergency Generator Repairs
                      </Link>{" "}
                      - 24/7 emergency service when breakdowns occur
                    </li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold mb-6">Schedule Your Generator Service Today</h2>
                <p className="leading-relaxed mb-6">
                  Don't wait for generator problems to occur - schedule regular professional servicing with Generator
                  Repair Services to keep your backup power system running reliably. Call us at 069 382 4908 to book
                  your generator service appointment, discuss servicing intervals for your specific generator, or
                  inquire about preventative maintenance programs. You can also reach us via WhatsApp for quick
                  scheduling or email info@generatorrepairservices.co.za. Our friendly team serves all areas of Gauteng
                  including Johannesburg, Pretoria, Sandton, Centurion, and beyond with professional mobile generator
                  servicing. Generator Repair Services - keeping Gauteng's generators running reliably through expert
                  servicing and maintenance.
                </p>
              </div>
            </div>
          </div>
        </section>

        <SuburbsGrid title="Generator Servicing Available In These Areas" suburbs={serviceAreas} />

        <ContactCTASection />
      </main>
      <SiteFooter />
      <MobileStickyCTA />
    </>
  )
}
