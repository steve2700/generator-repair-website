import type { Metadata } from "next"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Breadcrumbs from "@/components/breadcrumbs"
import ContactCTASection from "@/components/contact-cta-section"
import StructuredData from "@/components/structured-data"

export const metadata: Metadata = {
  title: "★★★★★ Diesel Generator Repairs Gauteng 2025 | Expert Diesel Engine Service",
  description:
    "★★★★★ Professional diesel generator repairs across Gauteng. All brands: Cummins, Perkins, Kohler, FG Wilson. 24/7 emergency service. Call 069 382 4908 for expert repairs!",
  keywords: [
    "diesel generator repairs",
    "diesel generator service gauteng",
    "diesel engine repairs",
    "diesel generator maintenance",
    "diesel generator repairs johannesburg",
    "diesel generator repairs pretoria",
    "cummins generator repairs",
    "perkins generator repairs",
  ],
  openGraph: {
    title: "Diesel Generator Repairs Gauteng | Expert Diesel Engine Service",
    description:
      "Professional diesel generator repairs. All brands: Cummins, Perkins, Kohler. 24/7 emergency service across Gauteng.",
    url: "https://generatorrepairservices.co.za/diesel-generator-repairs",
    siteName: "Generator Repair Services",
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://generatorrepairservices.co.za/diesel-generator-repairs",
  },
}

export default function DieselGeneratorRepairsPage() {
  const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Diesel Generator Repairs" }]

  return (
    <>
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Diesel Generator Repair",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Generator Repair Services",
          "telephone": "069 382 4908",
          "url": "https://generatorrepairservices.co.za",
          "areaServed": {
            "@type": "City",
            "name": "Gauteng",
            "containedInPlace": {
              "@type": "Country",
              "name": "South Africa"
            }
          }
        },
        "description": "Professional diesel generator repairs across Gauteng. All brands: Cummins, Perkins, Kohler, FG Wilson. 24/7 emergency service.",
        "url": "https://generatorrepairservices.co.za/diesel-generator-repairs"
      }} />
      <Breadcrumbs items={breadcrumbs} />

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">
            Professional Diesel Generator Repairs in Gauteng
          </h1>
          <p className="text-xl text-muted-foreground mb-6 text-pretty">
            Expert diesel generator repair services for residential, commercial, and industrial applications
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="tel:0693824908">
                <Phone className="mr-2 h-5 w-5" />
                069 382 4908
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://wa.me/27693824908">
                <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </Button>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Comprehensive Diesel Generator Repair Services</h2>
            <p className="text-lg leading-relaxed mb-4">
              Diesel generators are the backbone of reliable backup power systems across South Africa, particularly in
              Gauteng where load shedding and power interruptions remain a significant challenge. At our professional
              generator repair facility, we specialize exclusively in diesel generator repairs, servicing, and
              maintenance for all makes and models. Our team of certified diesel mechanics and generator technicians
              brings decades of combined experience to every repair job, ensuring your diesel generator operates at peak
              performance when you need it most.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Diesel generators differ significantly from their petrol counterparts, featuring compression ignition
              engines, heavier duty components, and specialized fuel injection systems. These robust machines require
              specialized knowledge, diagnostic equipment, and repair techniques that our team has mastered through
              years of hands-on experience with diesel engine technology. Whether you own a small residential backup
              generator or manage a large industrial power plant, we have the expertise and equipment to diagnose and
              repair any diesel generator issue efficiently and affordably.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              We understand that generator failures often occur at the most inconvenient times, which is why we offer
              comprehensive 24/7 emergency diesel generator repair services throughout Gauteng. From Johannesburg to
              Pretoria, Sandton to Centurion, and all surrounding suburbs, our mobile repair units are ready to respond
              quickly to your emergency. We carry extensive spare parts inventory for all major diesel generator brands
              including Cummins, Perkins, Kohler, FG Wilson, Deutz, Yanmar, and many others, enabling us to complete
              most repairs on the first visit.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Common Diesel Generator Problems We Repair</h2>
            <p className="text-lg leading-relaxed mb-4">
              Diesel generators experience a unique set of mechanical and electrical issues that require specialized
              diagnostic and repair skills. Our comprehensive repair services address all common diesel generator
              problems including starting difficulties, power output issues, excessive smoke production, fuel system
              failures, cooling system problems, electrical faults, and control panel malfunctions. Understanding the
              root cause of these issues is essential for effective repairs that prevent recurring problems.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Starting System Failures</h3>
            <p className="text-lg leading-relaxed mb-4">
              One of the most common complaints we receive involves diesel generators that fail to start when power is
              lost. Starting system failures can result from multiple factors including weak or dead batteries, corroded
              battery terminals, faulty starter motors, damaged starter solenoids, glow plug failures, or issues with
              the fuel delivery system. Unlike petrol engines, diesel engines rely on compression ignition and often
              require glow plugs to preheat the combustion chamber, especially in cooler weather. Our technicians
              systematically diagnose starting problems using advanced diagnostic equipment, testing battery voltage and
              cranking amperage, inspecting the starter motor and solenoid, checking glow plug operation, and verifying
              proper fuel delivery to the injection system.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Fuel System Issues</h3>
            <p className="text-lg leading-relaxed mb-4">
              The diesel fuel system is complex and highly sensitive to contamination. Common fuel system problems
              include clogged fuel filters, air in the fuel lines, failed fuel lift pumps, faulty fuel injectors,
              contaminated fuel, and damaged fuel injection pumps. Diesel fuel can absorb moisture from the atmosphere,
              leading to bacterial growth (diesel bug) that clogs filters and damages injection components. Our fuel
              system repair services include comprehensive fuel system cleaning, replacement of fuel filters and water
              separators, fuel injector testing and reconditioning, fuel pump repairs and replacements, fuel line
              repairs, and complete fuel tank cleaning when necessary. We also test fuel quality and can recommend
              additives to prevent future contamination issues.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Cooling System Problems</h3>
            <p className="text-lg leading-relaxed mb-4">
              Diesel engines generate considerable heat during operation, making an effective cooling system absolutely
              critical for preventing catastrophic engine damage. Overheating issues can result from low coolant levels,
              coolant leaks, failed thermostats, damaged water pumps, clogged radiators, broken cooling fans, or faulty
              temperature sensors. Our cooling system diagnostics involve pressure testing to identify leaks, thermostat
              function testing, water pump inspection, radiator flow testing, and fan operation verification. We repair
              or replace all cooling system components using quality parts designed for the high operating temperatures
              and pressures of diesel engines.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Excessive Smoke and Emissions</h3>
            <p className="text-lg leading-relaxed mb-4">
              While some smoke is normal during diesel generator startup, excessive or continuous smoke indicates
              serious problems requiring immediate attention. Black smoke typically indicates incomplete fuel combustion
              caused by clogged air filters, faulty injectors, or improper air-fuel ratio. Blue smoke suggests oil
              burning in the combustion chamber due to worn piston rings, damaged cylinder walls, or valve guide
              problems. White smoke often indicates coolant entering the combustion chamber through a blown head gasket
              or cracked cylinder head. Our emissions diagnostics identify the exact cause of smoke problems, and our
              repairs address the underlying mechanical or fuel system issues to restore clean, efficient operation.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Electrical System Faults</h3>
            <p className="text-lg leading-relaxed mb-4">
              Modern diesel generators feature complex electrical systems including battery charging alternators,
              voltage regulators, automatic transfer switches, control panels, and safety shutdown systems. Electrical
              problems manifest as charging failures, voltage fluctuations, control panel errors, failed automatic start
              systems, or complete electrical shutdown. Our electrical diagnostics utilize advanced multimeters and
              diagnostic scanners to test all electrical components systematically. We repair or replace alternators,
              voltage regulators, control modules, wiring harnesses, sensors, and switches to restore complete
              electrical functionality.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Our Diesel Generator Repair Process</h2>
            <p className="text-lg leading-relaxed mb-4">
              We follow a systematic, thorough approach to diesel generator repairs that ensures accurate diagnosis and
              effective repairs. Our process begins with a comprehensive initial assessment where we gather information
              about the generator's symptoms, operating history, and maintenance records. We then perform visual
              inspections checking for obvious problems like leaks, damaged components, loose connections, or signs of
              overheating. This is followed by systematic diagnostic testing using specialized equipment including
              multimeters, compression testers, fuel pressure gauges, and computerized diagnostic scanners when
              applicable.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Once we identify the root cause of the problem, we provide you with a detailed explanation of the issue,
              recommended repairs, and a comprehensive written quotation. We believe in transparent communication and
              never proceed with repairs without your approval. Our repairs utilize quality replacement parts sourced
              from reputable suppliers, and we stock genuine OEM parts for most major diesel generator brands. For
              critical components like fuel injection pumps and alternators, we often recommend genuine manufacturer
              parts to ensure optimal performance and longevity.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              After completing repairs, we perform extensive testing to verify that the generator operates correctly
              under load conditions. This includes starting system testing, load bank testing to verify power output,
              voltage and frequency stability testing, safety system verification, and extended run testing to ensure
              reliable operation. We also perform final quality checks and adjustments to optimize performance before
              returning the generator to service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Diesel Generator Brands We Service</h2>
            <p className="text-lg leading-relaxed mb-4">
              Our diesel generator repair expertise extends across all major manufacturer brands. We regularly service
              and repair Cummins generators known for their robust construction and reliability in commercial
              applications. Perkins diesel generators are another specialty, with these British-engineered units being
              popular in South African markets. We maintain extensive experience with FG Wilson generators, Kohler
              diesel units, Deutz generators, Yanmar compact diesel generators, and many other imported and local
              brands.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Each manufacturer designs their diesel generators with unique specifications, control systems, and
              component configurations. Our technicians receive ongoing training on the latest generator technologies
              and maintain access to manufacturer technical documentation, wiring diagrams, and service bulletins. This
              brand-specific knowledge enables us to diagnose problems quickly and perform repairs according to
              manufacturer specifications, preserving any existing warranties when applicable.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Preventative Maintenance to Avoid Costly Repairs</h2>
            <p className="text-lg leading-relaxed mb-4">
              While we excel at repairing diesel generators, we strongly advocate for preventative maintenance programs
              that can prevent many common failures before they occur. Regular maintenance significantly extends
              generator lifespan, improves reliability during power outages, and reduces the likelihood of expensive
              emergency repairs. Our comprehensive maintenance services include regular oil and filter changes using
              diesel-rated lubricants, fuel filter replacements, air filter servicing, coolant system testing and
              servicing, battery testing and maintenance, and load bank testing to verify performance under actual
              operating conditions.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Diesel fuel deteriorates over time, making fuel quality management an essential aspect of generator
              maintenance. We recommend and provide fuel polishing services, fuel additive treatments, tank cleaning,
              and water separator maintenance to prevent fuel-related problems. Additionally, diesel generators that sit
              idle for extended periods can experience fuel gelling, battery discharge, cooling system corrosion, and
              lubrication breakdown. Our maintenance programs include regular exercise runs, battery charging, and
              preservation procedures to keep standby generators ready for emergency operation.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Emergency Diesel Generator Repair Services</h2>
            <p className="text-lg leading-relaxed mb-4">
              Generator emergencies don't follow business hours, which is why we maintain 24-hour emergency repair
              services throughout Gauteng. When your diesel generator fails during a power outage or load shedding
              event, every minute without backup power can mean lost productivity, spoiled inventory, security concerns,
              or even safety hazards. Our emergency response teams are equipped with fully stocked service vehicles,
              diagnostic equipment, and common replacement parts to facilitate rapid on-site repairs.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              We prioritize emergency calls and typically respond within 1-2 hours throughout the greater Gauteng area
              including Johannesburg, Pretoria, Sandton, Centurion, and all surrounding suburbs. Our emergency
              technicians have authorization to perform necessary repairs on-site after providing you with pricing
              information, eliminating delays associated with obtaining approvals. We understand that extended generator
              downtime is unacceptable for many businesses and facilities, and we work efficiently to restore your
              backup power as quickly as possible.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Why Choose Our Diesel Generator Repair Services</h2>
            <p className="text-lg leading-relaxed mb-4">
              Selecting the right diesel generator repair provider is crucial for ensuring quality repairs, fair
              pricing, and long-term reliability. Our company stands out through our specialized focus on generator
              repairs, unlike general electrical or mechanical workshops that treat generators as a sideline service.
              Our technicians are specifically trained and certified in diesel engine technology and generator systems,
              bringing deep expertise to every repair job.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              We invest in professional diagnostic equipment, specialized tools, and ongoing training to stay current
              with evolving generator technologies. Our comprehensive parts inventory enables us to complete most
              repairs quickly without waiting for parts orders. We provide transparent pricing with detailed written
              quotations before commencing work, and we warranty all our repairs giving you confidence in the quality of
              our workmanship.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Customer service is central to our business philosophy. We communicate clearly throughout the repair
              process, explaining problems in understandable terms and providing honest recommendations about repair
              versus replacement decisions. Our long-term relationships with customers throughout Gauteng testify to our
              commitment to quality, reliability, and fair dealing. We treat every generator repair as if it were our
              own, ensuring the highest standards of workmanship on every job.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Contact Us for Diesel Generator Repairs</h2>
            <p className="text-lg leading-relaxed mb-4">
              Whether you're experiencing starting problems, power output issues, unusual noises, excessive smoke, or
              complete generator failure, our diesel generator repair specialists are ready to help. We service all
              residential, commercial, and industrial diesel generators throughout Gauteng. Call us today at{" "}
              <a href="tel:0693824908" className="text-primary font-semibold hover:underline">
                069 382 4908
              </a>{" "}
              to schedule a service appointment or request emergency assistance. Our friendly staff will answer your
              questions, provide guidance on troubleshooting steps if applicable, and dispatch a qualified technician to
              your location promptly.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Don't let diesel generator problems leave you without backup power during the next power outage. Whether
              you need routine maintenance, diagnostic services, or comprehensive repairs, we deliver professional
              diesel generator services that keep your power systems running reliably. Contact us today and experience
              the difference that specialized expertise and professional service make in diesel generator repairs.
            </p>
          </section>
        </div>
      </div>

      <ContactCTASection />
    </>
  )
}
