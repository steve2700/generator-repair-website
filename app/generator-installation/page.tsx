import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { HeroSection } from "@/components/hero-section"
import { ContactCTASection } from "@/components/contact-cta-section"
import { MobileStickyCTA } from "@/components/mobile-sticky-cta"
import { SchemaMarkup } from "@/components/schema-markup"
import { Check } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "★★★★★ Generator Installation Gauteng 2025 | #1 Professional Installers",
  description:
    "★★★★★ #1 professional generator installation in Gauteng. Diesel & petrol generator setup. Complete installation including wiring, transfer switches. Call 069 382 4908.",
  openGraph: {
    title: "Generator Installation Gauteng | Professional Generator Installers",
    description:
      "Expert generator installation for residential, commercial and industrial applications. Complete setup with transfer switches. Call 069 382 4908.",
    url: "https://generatorrepairservices.co.za/generator-installation",
    siteName: "Generator Repair Services",
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://generatorrepairservices.co.za/generator-installation",
  },
}

export default function GeneratorInstallationPage() {
  return (
    <>
      <SchemaMarkup
        serviceType="Generator Installation"
        pageDescription="Professional generator installation services across Gauteng"
      />
      <SiteHeader />
      <main>
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Generator Installation" }]} />
        </div>

        <HeroSection
          title="Professional Generator Installation Services in Gauteng"
          description="Expert generator installation for residential, commercial and industrial applications. Complete setup including electrical work, transfer switches and commissioning. Certified installers serving Johannesburg, Pretoria, Sandton and Centurion."
        />

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mb-6">
                  Professional Generator Installation by Certified Technicians
                </h2>
                <p className="text-lg leading-relaxed mb-6">
                  Generator Repair Services provides professional generator installation services throughout Gauteng for
                  residential, commercial, and industrial applications. With over 15 years of experience installing
                  generators of all types and sizes, our certified technicians deliver complete turnkey installation
                  solutions from initial site assessment through final commissioning and testing. We understand that
                  proper generator installation is critical for reliable operation, safety, and optimal performance,
                  which is why Generator Repair Services follows industry best practices, manufacturer specifications,
                  and electrical regulations for every installation project. Our comprehensive installation service
                  includes site evaluation and planning, generator sizing and selection assistance, foundation or
                  mounting preparation, electrical work including automatic transfer switch installation, fuel system
                  setup, exhaust system installation, testing and commissioning, and complete documentation. Whether you
                  need a standby generator installed to protect your home against load shedding, a commercial backup
                  power system for your business, or an industrial generator installation for your facility, Generator
                  Repair Services has the expertise, equipment, and commitment to quality that ensures your generator
                  installation is completed properly, safely, and to your complete satisfaction. We work with all major
                  generator brands including Perkins, Cummins, Caterpillar, SDMO, Volvo Penta, Kohler, Generac, and
                  others, installing diesel generators, petrol generators, and industrial power systems across
                  Johannesburg, Pretoria, Sandton, Centurion, and throughout Gauteng province. Call 069 382 4908 today
                  to discuss your generator installation needs with our experienced team.
                </p>

                <div className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-lg">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">Why Choose Professional Installation?</h3>
                  <p className="text-foreground leading-relaxed">
                    Generator installation involves electrical work, fuel systems, exhaust routing, and safety
                    considerations that require professional expertise. Improper installation can result in safety
                    hazards, poor performance, voided warranties, and non-compliance with regulations. Generator Repair
                    Services certified installers ensure your generator is installed correctly, operates safely,
                    performs optimally, and meets all applicable codes and standards. Professional installation protects
                    your investment and provides peace of mind that your backup power system will function reliably when
                    needed.
                  </p>
                </div>

                <h2 className="text-3xl font-bold mb-6">Comprehensive Generator Installation Services</h2>
                <p className="leading-relaxed mb-6">
                  Generator Repair Services provides complete turnkey generator installation encompassing all aspects
                  from planning through commissioning. Our installation process begins with thorough site assessment
                  where our technicians evaluate your property, electrical system, power requirements, and site-specific
                  conditions to determine optimal generator placement, sizing requirements, and installation
                  specifications. We assist with generator sizing and selection ensuring you choose the right generator
                  capacity for your power needs, whether standby backup power or prime power applications. Foundation
                  and mounting preparation includes concrete pad installation for stationary generators or proper
                  mounting systems for enclosed generators, ensuring stable, level, and properly drained installations.
                  Our certified technicians handle all electrical work including running proper gauge cabling from
                  generator to electrical panel, installing and wiring automatic transfer switches that seamlessly
                  switch between utility and generator power, integrating with your existing electrical system, and
                  ensuring proper grounding and electrical safety. Fuel system installation covers fuel tank
                  installation or connection to existing fuel supplies, fuel lines with proper fittings and shutoff
                  valves, and fuel system testing for leaks. Exhaust system installation routes exhaust gases safely
                  away from buildings, windows, and occupied areas using proper exhaust piping and mufflers. We install
                  battery systems with proper charging connections, install control panels and monitoring systems, and
                  connect coolant systems for liquid-cooled generators. After physical installation, Generator Repair
                  Services conducts thorough commissioning including initial startup, load testing to verify proper
                  operation and power output, automatic transfer switch testing to confirm seamless transitions, and
                  adjustment of all systems for optimal performance. We provide complete documentation including
                  installation records, warranty information, operating manuals, and maintenance schedules. Our
                  technicians also provide operator training on generator startup, shutdown, and basic maintenance
                  procedures. Generator Repair Services stands behind every installation with workmanship guarantees and
                  ongoing service support throughout Gauteng.
                </p>

                <div className="bg-card border rounded-lg p-8 my-8">
                  <h3 className="text-2xl font-bold mb-4">Generator Installation Includes</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Site assessment and planning",
                      "Generator sizing assistance",
                      "Foundation or mounting preparation",
                      "Complete electrical installation",
                      "Automatic transfer switch setup",
                      "Fuel system installation",
                      "Exhaust system installation",
                      "Battery and charging system setup",
                      "Control panel installation",
                      "System commissioning and testing",
                      "Load testing and verification",
                      "Operator training",
                      "Complete documentation",
                      "Warranty registration",
                      "Ongoing service support",
                      "Compliance with regulations",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-6">
                  Residential Generator Installation - Protect Your Home from Load Shedding
                </h2>
                <p className="leading-relaxed mb-6">
                  Generator Repair Services specializes in residential generator installation throughout Gauteng,
                  providing homeowners with reliable backup power protection against load shedding and power outages.
                  Our residential installation service covers standby generators typically ranging from 5kVA to 30kVA
                  capacity, both diesel and petrol models, suitable for powering essential home circuits or entire
                  homes. We work with homeowners to determine appropriate generator sizing based on power requirements,
                  budget, and which circuits or appliances need backup power. Our installers handle complete electrical
                  integration including automatic transfer switches that detect power outages and automatically start
                  your generator, seamlessly switching your home to generator power within seconds. When utility power
                  returns, the system automatically transfers back to grid power and shuts down the generator. We ensure
                  proper placement considering noise levels, ventilation requirements, fuel access, and aesthetic
                  appearance. Generator Repair Services residential installations comply with municipal regulations,
                  electrical codes, and homeowners association requirements where applicable. We coordinate with
                  electricians, plumbers, and other trades as needed to ensure complete, professional installations.
                  After installation, we provide thorough training on generator operation, basic maintenance, and answer
                  all questions. Our residential installation service serves all areas of Johannesburg, Pretoria,
                  Sandton, Centurion, and throughout Gauteng. Call 069 382 4908 to schedule a free consultation and
                  quote for residential generator installation.
                </p>

                <h2 className="text-3xl font-bold mb-6">Commercial and Industrial Generator Installation Services</h2>
                <p className="leading-relaxed mb-6">
                  Generator Repair Services provides commercial and industrial generator installation for businesses,
                  facilities, and operations requiring robust, reliable backup power systems. Commercial generator
                  installations serve offices, retail stores, restaurants, medical facilities, hotels, data centers, and
                  other commercial properties where power outages disrupt operations, cause lost revenue, or compromise
                  safety and security. Our commercial installations typically range from 20kVA to 200kVA or more,
                  incorporating automatic transfer switches, load management systems, and remote monitoring
                  capabilities. We understand business requirements for minimizing downtime and work efficiently to
                  complete installations with minimal disruption to operations. Industrial generator installation serves
                  manufacturing facilities, warehouses, mining operations, agricultural operations, construction sites,
                  and other industrial applications requiring prime power or large-capacity backup power. Industrial
                  installations often involve generators producing several hundred kVA or more, three-phase power
                  systems, complex electrical integration, and specialized requirements such as synchronization panels,
                  load banks, and sophisticated control systems. Generator Repair Services has experience with
                  large-scale industrial installations, works with consulting engineers and electrical contractors as
                  needed, and manages all aspects of complex installation projects. Our commercial and industrial
                  installation service includes detailed project planning, equipment procurement, installation
                  management, testing and commissioning, regulatory compliance, and comprehensive documentation. We work
                  with all major generator manufacturers and can install generators for prime power applications,
                  standby backup power, peak shaving, or other specialized uses. Generator Repair Services serves
                  commercial and industrial clients throughout Gauteng with professional generator installation
                  solutions tailored to specific operational requirements. Contact us at 069 382 4908 to discuss your
                  commercial or industrial generator installation needs.
                </p>

                <h2 className="text-3xl font-bold mb-6">Generator Installation Process and Timeline</h2>
                <p className="leading-relaxed mb-6">
                  Generator Repair Services follows a systematic installation process ensuring quality results and
                  customer satisfaction. The process begins with initial consultation where you discuss your power
                  requirements, budget, and expectations with our experienced team. We schedule a site visit where our
                  technician assesses your property, electrical system, and site conditions, taking measurements and
                  documenting requirements. Based on site assessment, we provide a detailed written quote including
                  generator specifications, installation scope, timeline, and costs. Once you approve the quote,
                  Generator Repair Services orders equipment, schedules installation dates, and coordinates any required
                  permits or approvals. Installation typically requires 1-3 days depending on project complexity, with
                  larger commercial or industrial installations potentially requiring longer timeframes. Our technicians
                  arrive at scheduled times, complete installation work professionally and efficiently, and maintain
                  clean, organized work areas. After physical installation, we conduct commissioning including initial
                  startup, comprehensive testing, and system optimization. We provide operator training, complete
                  documentation, and answer all questions before considering the project complete. Generator Repair
                  Services maintains contact after installation to ensure your satisfaction and provide ongoing service
                  support. Installation timelines from initial consultation to final commissioning typically range from
                  2-6 weeks depending on equipment availability, site preparation requirements, and project complexity.
                  Rush installations can sometimes be accommodated for urgent requirements. Call 069 382 4908 to
                  schedule your generator installation consultation and receive a detailed quote.
                </p>

                <div className="bg-card border rounded-lg p-8 my-8">
                  <h3 className="text-2xl font-bold mb-4">Related Generator Services</h3>
                  <p className="mb-4 leading-relaxed">
                    Generator Repair Services offers complete generator solutions beyond installation:
                  </p>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/generator-servicing" className="text-primary hover:underline font-medium">
                        Generator Servicing
                      </Link>{" "}
                      - Regular servicing after installation
                    </li>
                    <li>
                      <Link href="/generator-maintenance" className="text-primary hover:underline font-medium">
                        Generator Maintenance
                      </Link>{" "}
                      - Maintenance programs for installed generators
                    </li>
                    <li>
                      <Link href="/generator-repairs" className="text-primary hover:underline font-medium">
                        Generator Repairs
                      </Link>{" "}
                      - Professional repairs when needed
                    </li>
                    <li>
                      <Link
                        href="/generator-installation-pretoria"
                        className="text-primary hover:underline font-medium"
                      >
                        Generator Installation Pretoria
                      </Link>{" "}
                      - Installation services in Pretoria
                    </li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold mb-6">Contact Us for Professional Generator Installation</h2>
                <p className="leading-relaxed mb-6">
                  Ready to protect your home, business, or facility with professional generator installation? Contact
                  Generator Repair Services today at 069 382 4908 to schedule a consultation and receive a detailed
                  installation quote. Our experienced team serves all areas of Gauteng including Johannesburg, Pretoria,
                  Sandton, Centurion, and surrounding areas with professional generator installation services. You can
                  also reach us via WhatsApp for quick responses or email info@generatorrepairservices.co.za with your
                  installation requirements. Generator Repair Services - your trusted partner for professional generator
                  installation throughout Gauteng.
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
