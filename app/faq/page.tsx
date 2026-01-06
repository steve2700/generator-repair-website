
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ContactCTASection } from "@/components/contact-cta-section"
import { SchemaMarkup } from "@/components/schema-markup"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "★★★★★ Generator Repair FAQ 2025 | Common Questions Answered",
  description:
    "★★★★★ Find answers to common questions about generator repairs, servicing, maintenance and costs. Expert advice from Generator Repair Services. Call 069 382 4908.",
  openGraph: {
    title: "Generator Repair FAQ | Common Questions Answered",
    description:
      "Find answers to common generator repair questions. Expert advice on repairs, servicing, maintenance, costs, and more.",
    url: "https://generatorrepairservices.co.za/faq",
    siteName: "Generator Repair Services",
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://generatorrepairservices.co.za/faq",
  },
}

export default function FAQPage() {
  return (
    <>
      <SchemaMarkup />
      
      <main>
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />
        </div>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Frequently Asked Questions About Generator Repairs and Servicing
              </h1>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                Get answers to the most common questions about generator repairs, servicing, maintenance, and costs from
                the experts at Generator Repair Services. If you don't find your answer here, call us at 069 382 4908 or
                WhatsApp us for personalized assistance.
              </p>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">General Generator Repair Questions</h2>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>How quickly can you respond to emergency generator repairs?</AccordionTrigger>
                      <AccordionContent className="text-base leading-relaxed space-y-4">
                        <p>
                          Generator Repair Services offers 24-hour emergency generator repair services across Gauteng
                          with rapid response times. For emergency callouts in Johannesburg, Pretoria, Sandton, and
                          Centurion, we typically respond within 2-4 hours. Our mobile repair units are strategically
                          positioned throughout Gauteng to provide the fastest possible response to generator
                          breakdowns.
                        </p>
                        <p>
                          When you call 069 382 4908 for emergency generator repairs, our dispatch team will immediately
                          coordinate with the nearest available technician to your location. We understand that
                          generator failures can cause significant disruption to your home, business, or operations,
                          which is why we prioritize emergency callouts and work efficiently to diagnose and repair your
                          generator as quickly as possible. Our technicians carry common parts and tools in their mobile
                          service vehicles, enabling many repairs to be completed on the first visit.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                      <AccordionTrigger>What types of generators do you repair and service?</AccordionTrigger>
                      <AccordionContent className="text-base leading-relaxed space-y-4">
                        <p>
                          Generator Repair Services repairs and services all types of generators including diesel
                          generators, petrol generators, industrial generators, commercial generators, residential
                          backup generators, standby generators, portable generators, and prime power systems. We work
                          with generators of all sizes from small 2kW portable units to large industrial generators
                          producing 500kW or more.
                        </p>
                        <p>
                          Our certified technicians have extensive experience with all major generator brands including
                          Perkins, Cummins, Caterpillar, SDMO, Volvo Penta, Kohler, Generac, Honda, Yamaha, Lister
                          Petter, FG Wilson, Deutz, Yanmar, Kubota, and many more. Whether you have an open frame
                          generator, enclosed soundproof generator, automatic transfer switch system, or manual start
                          generator, Generator Repair Services has the expertise and equipment to repair and service it
                          properly. We service generators used in residential applications, commercial buildings,
                          industrial facilities, construction sites, events, hospitals, data centers, and any other
                          application requiring reliable backup or prime power.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                      <AccordionTrigger>Which areas in Gauteng do you service?</AccordionTrigger>
                      <AccordionContent className="text-base leading-relaxed space-y-4">
                        <p>
                          Generator Repair Services provides comprehensive generator repairs, servicing, and maintenance
                          across all major areas of Gauteng province. Our primary service areas include Johannesburg and
                          all suburbs (Sandton, Rosebank, Hyde Park, Bryanston, Fourways, Sunninghill, Morningside,
                          Rivonia, Melrose, Parktown, Houghton, Randburg, Roodepoort, and more), Pretoria and
                          surrounding suburbs (Brooklyn, Hatfield, Waterkloof, Menlo Park, Lynnwood, Garsfontein, Faerie
                          Glen, Silver Lakes, Moreleta Park, Centurion, and more), as well as Midrand, Kempton Park,
                          Benoni, Boksburg, Germiston, Alberton, Krugersdorp, and other Gauteng areas.
                        </p>
                        <p>
                          Our mobile generator repair service means we come directly to your location whether you're in
                          a residential suburb, commercial district, industrial park, or remote site within Gauteng.
                          Call 069 382 4908 to confirm service availability in your specific area or to schedule a
                          generator repair or servicing appointment. For more information about our services in specific
                          cities, visit our location pages:{" "}
                          <Link href="/generator-repairs-johannesburg" className="text-primary hover:underline">
                            Generator Repairs Johannesburg
                          </Link>
                          ,{" "}
                          <Link href="/generator-repairs-pretoria" className="text-primary hover:underline">
                            Generator Repairs Pretoria
                          </Link>
                          ,{" "}
                          <Link href="/generator-repairs-sandton" className="text-primary hover:underline">
                            Generator Repairs Sandton
                          </Link>
                          , and{" "}
                          <Link href="/generator-repairs-centurion" className="text-primary hover:underline">
                            Generator Repairs Centurion
                          </Link>
                          .
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Generator Servicing and Maintenance</h2>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-4">
                      <AccordionTrigger>How often should I service my generator?</AccordionTrigger>
                      <AccordionContent className="text-base leading-relaxed space-y-4">
                        <p>
                          The recommended generator servicing frequency depends on usage patterns and manufacturer
                          specifications, but Generator Repair Services generally recommends servicing your generator
                          every 6-12 months or after every 100-200 hours of operation, whichever comes first. For
                          generators in standby applications that run infrequently, annual servicing is typically
                          sufficient. However, generators used for prime or continuous power should be serviced more
                          frequently, potentially every 3-6 months or every 100 operating hours.
                        </p>
                        <p>
                          Regular generator servicing is crucial for maintaining reliability, fuel efficiency, and
                          equipment longevity. During a standard generator service, our technicians perform oil and
                          filter changes, check and replace air filters, inspect fuel systems, test batteries, check
                          coolant levels, inspect belts and hoses, test electrical systems, perform load testing, and
                          conduct comprehensive visual inspections for potential issues. Preventative maintenance
                          through regular servicing helps avoid costly emergency breakdowns and extends your generator's
                          operational life. Contact Generator Repair Services at 069 382 4908 to discuss a customized
                          generator maintenance schedule based on your specific equipment and usage patterns. Learn more
                          about our{" "}
                          <Link href="/generator-servicing" className="text-primary hover:underline">
                            generator servicing
                          </Link>{" "}
                          and{" "}
                          <Link href="/generator-maintenance" className="text-primary hover:underline">
                            maintenance programs
                          </Link>
                          .
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                      <AccordionTrigger>What is included in a standard generator service?</AccordionTrigger>
                      <AccordionContent className="text-base leading-relaxed space-y-4">
                        <p>
                          A standard generator service from Generator Repair Services includes comprehensive maintenance
                          and inspection procedures designed to keep your generator running reliably. Our standard
                          service package includes: engine oil and oil filter replacement, air filter inspection and
                          replacement if needed, fuel filter replacement, coolant level check and top-up, battery
                          testing and terminal cleaning, belt and hose inspection for wear or damage, spark plug
                          inspection and replacement (petrol generators), fuel system inspection and cleaning,
                          electrical system testing, control panel function testing, safety shutdown system testing,
                          exhaust system inspection, visual inspection for leaks or damage, full load testing under
                          controlled conditions, and a comprehensive service report with recommendations for any
                          additional repairs or maintenance.
                        </p>
                        <p>
                          For diesel generators, we also perform fuel injector inspection, turbocharger checks (if
                          applicable), and diesel particulate filter inspection. All services use quality oils, filters,
                          and parts that meet or exceed manufacturer specifications. Generator Repair Services can also
                          provide customized service packages for industrial and commercial clients with specific
                          requirements or compliance needs. Call 069 382 4908 or visit our{" "}
                          <Link href="/generator-servicing" className="text-primary hover:underline">
                            generator servicing page
                          </Link>{" "}
                          for detailed information about our service offerings.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6">
                      <AccordionTrigger>Do you offer preventative maintenance contracts?</AccordionTrigger>
                      <AccordionContent className="text-base leading-relaxed space-y-4">
                        <p>
                          Yes, Generator Repair Services offers comprehensive preventative maintenance contracts for
                          residential, commercial, and industrial clients throughout Gauteng. Our maintenance contracts
                          provide scheduled generator servicing at regular intervals to prevent breakdowns, maintain
                          peak performance, and extend equipment lifespan. Preventative maintenance contracts include
                          all standard servicing procedures, priority scheduling for your service appointments,
                          discounted rates on additional repairs if needed, detailed maintenance records and service
                          history documentation, and priority response for emergency callouts.
                        </p>
                        <p>
                          We offer flexible contract terms including monthly, quarterly, bi-annual, and annual
                          maintenance schedules customized to your generator's usage patterns and manufacturer
                          recommendations. Preventative maintenance contracts are particularly valuable for businesses,
                          hospitals, data centers, and other facilities where generator reliability is critical. Our
                          maintenance programs help you budget for generator upkeep, reduce unexpected repair costs, and
                          ensure your backup power system is always ready when needed. Contact Generator Repair Services
                          at 069 382 4908 to discuss maintenance contract options and pricing, or visit our{" "}
                          <Link href="/generator-maintenance" className="text-primary hover:underline">
                            generator maintenance page
                          </Link>{" "}
                          for more information about our preventative maintenance programs.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Generator Repair Costs and Pricing</h2>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-7">
                      <AccordionTrigger>How much do generator repairs cost?</AccordionTrigger>
                      <AccordionContent className="text-base leading-relaxed space-y-4">
                        <p>
                          Generator repair costs vary significantly depending on the type of repair needed, generator
                          size and type, parts required, and complexity of the work. At Generator Repair Services, we
                          provide transparent, upfront quotes before starting any repair work so you know exactly what
                          to expect. As a general guide, simple repairs like filter replacements, spark plug changes, or
                          battery replacements typically cost between R500-R1,500. More involved repairs such as fuel
                          system cleaning, alternator repairs, or starter motor replacement generally range from
                          R1,500-R3,500. Complex repairs involving engine work, control panel replacement, or major
                          component overhauls may cost R3,500-R8,000 or more depending on the extent of work required.
                        </p>
                        <p>
                          For accurate pricing specific to your generator's needs, Generator Repair Services offers
                          free, no-obligation quotes. Contact us at 069 382 4908 or WhatsApp us with details about your
                          generator and the issues you're experiencing, and we'll provide a detailed estimate. Our
                          pricing is competitive, honest, and includes all labor, parts, and testing. We believe in
                          transparent pricing with no hidden fees or surprise charges - you'll know the full cost before
                          we begin work. For more information about specific repair services and typical costs, check
                          out our pages on{" "}
                          <Link href="/diesel-generator-repairs" className="text-primary hover:underline">
                            diesel generator repairs
                          </Link>
                          ,{" "}
                          <Link href="/petrol-generator-repairs" className="text-primary hover:underline">
                            petrol generator repairs
                          </Link>
                          , or{" "}
                          <Link
                            href="/affordable-generator-repairs-johannesburg"
                            className="text-primary hover:underline"
                          >
                            affordable generator repairs in Johannesburg
                          </Link>
                          .
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-8">
                      <AccordionTrigger>Do you charge for quotes or diagnostics?</AccordionTrigger>
                      <AccordionContent className="text-base leading-relaxed space-y-4">
                        <p>
                          Generator Repair Services provides free, no-obligation quotes for most standard generator
                          repairs and servicing throughout Gauteng. If you can describe the issue over the phone or via
                          WhatsApp, we can often provide an estimated cost range without a site visit. For more complex
                          issues requiring on-site diagnosis, we may charge a callout fee that covers the technician's
                          travel time and diagnostic work. However, this diagnostic fee is typically credited toward the
                          repair cost if you proceed with our services.
                        </p>
                        <p>
                          Our goal is to make the quotation process as transparent and customer-friendly as possible. We
                          want you to have all the information needed to make an informed decision about your generator
                          repairs without pressure or hidden costs. Before dispatching a technician for on-site
                          diagnostics, we'll clearly communicate any applicable fees. Call 069 382 4908 to discuss your
                          generator issues and get pricing information. Many simple repairs can be accurately quoted
                          over the phone, saving you both time and money.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-9">
                      <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                      <AccordionContent className="text-base leading-relaxed space-y-4">
                        <p>
                          Generator Repair Services accepts various payment methods for your convenience including cash,
                          EFT (Electronic Funds Transfer), credit cards, debit cards, and payment via online banking.
                          For larger commercial and industrial clients, we can arrange invoice billing with payment
                          terms upon approval of credit application.
                        </p>
                        <p>
                          Payment is typically due upon completion of the repair or service work unless other
                          arrangements have been made in advance. We provide detailed invoices showing all work
                          performed, parts used, labor costs, and any applicable warranties. For preventative
                          maintenance contracts, we offer flexible payment options including monthly billing. Contact
                          our office at 069 382 4908 to discuss payment arrangements that work best for your needs.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Specific Generator Problems and Solutions</h2>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-10">
                      <AccordionTrigger>Why won't my generator start?</AccordionTrigger>
                      <AccordionContent className="text-base leading-relaxed space-y-4">
                        <p>
                          A generator that won't start can have several causes, and Generator Repair Services has
                          diagnosed and repaired thousands of non-starting generators across Gauteng. Common reasons for
                          generator starting problems include dead or weak batteries (one of the most common issues),
                          empty fuel tank or fuel supply problems, clogged fuel filters blocking fuel flow, old or
                          contaminated fuel causing starting difficulties, faulty spark plugs (on petrol generators),
                          faulty glow plugs (on diesel generators), electrical issues with the starter motor or
                          solenoid, control panel faults preventing start sequence, low engine oil triggering safety
                          shutdowns, or air filter blockages restricting airflow.
                        </p>
                        <p>
                          Our certified technicians use systematic diagnostic procedures to quickly identify why your
                          generator won't start and implement the appropriate repair. Many starting issues can be
                          resolved quickly with simple repairs like battery replacement, fuel system cleaning, or spark
                          plug replacement. However, persistent starting problems may indicate more serious issues
                          requiring detailed diagnosis and repair. If your generator won't start, call Generator Repair
                          Services at 069 382 4908 for emergency assistance. Our mobile repair service means we come to
                          your location in Johannesburg, Pretoria, Sandton, Centurion, or anywhere in Gauteng to get
                          your generator running again. For more information about starting problems and solutions,
                          check our{" "}
                          <Link href="/emergency-generator-repairs" className="text-primary hover:underline">
                            emergency generator repairs page
                          </Link>
                          .
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-11">
                      <AccordionTrigger>
                        My generator is running but not producing power - what's wrong?
                      </AccordionTrigger>
                      <AccordionContent className="text-base leading-relaxed space-y-4">
                        <p>
                          When your generator starts and runs but doesn't produce electrical power, this typically
                          indicates a problem with the alternator, voltage regulator, or electrical system rather than
                          the engine itself. Common causes include alternator failure requiring repair or replacement,
                          faulty or damaged voltage regulator (AVR), tripped circuit breakers on the generator, blown
                          fuses in the electrical system, worn or damaged brushes in the alternator, capacitor failure
                          (on smaller generators), wiring faults or loose connections, or loss of residual magnetism in
                          the alternator requiring re-flashing.
                        </p>
                        <p>
                          Generator Repair Services specializes in electrical system diagnosis and repair for all types
                          of generators. Our technicians use specialized testing equipment to pinpoint electrical faults
                          and restore power output. Many electrical issues can be repaired on-site during the same
                          visit, while more complex alternator repairs may require workshop facilities. If your
                          generator is running but not producing power, don't continue running it as this won't solve
                          the problem and may cause additional damage. Call 069 382 4908 for professional diagnosis and
                          repair. Our electrical specialists service Johannesburg, Pretoria, Sandton, Centurion, and all
                          Gauteng areas. Learn more about our comprehensive{" "}
                          <Link href="/generator-repairs" className="text-primary hover:underline">
                            generator repair services
                          </Link>
                          .
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-12">
                      <AccordionTrigger>How do I know if my generator needs professional repair?</AccordionTrigger>
                      <AccordionContent className="text-base leading-relaxed space-y-4">
                        <p>
                          Generator Repair Services recommends calling for professional repair service if you notice any
                          of these warning signs: generator fails to start or has difficulty starting, engine runs
                          roughly or unevenly, generator produces no electrical output or fluctuating voltage, unusual
                          noises such as knocking, grinding, or excessive vibration, visible fuel leaks or oil leaks,
                          excessive smoke from exhaust (white, black, or blue), generator overheating or high
                          temperature warnings, frequent shutdowns or tripping, loss of power under load, battery not
                          charging properly, control panel error codes or warning lights, excessive fuel consumption, or
                          any burning smells or unusual odors.
                        </p>
                        <p>
                          While some basic maintenance like oil changes and filter replacements can be performed by
                          owners with mechanical aptitude, most generator repairs should be handled by qualified
                          technicians. Generator systems involve complex electrical components, high voltage, fuel
                          systems, and engine mechanics that require specialized knowledge and tools. Attempting DIY
                          repairs beyond basic maintenance can result in further damage, safety hazards, or voided
                          warranties. When in doubt, call Generator Repair Services at 069 382 4908 for professional
                          assessment. Our certified technicians have the expertise, diagnostic equipment, and genuine
                          parts to repair your generator properly the first time. We service all areas of Gauteng
                          including{" "}
                          <Link href="/generator-repairs-johannesburg" className="text-primary hover:underline">
                            Johannesburg
                          </Link>
                          ,{" "}
                          <Link href="/generator-repairs-pretoria" className="text-primary hover:underline">
                            Pretoria
                          </Link>
                          ,{" "}
                          <Link href="/generator-repairs-sandton" className="text-primary hover:underline">
                            Sandton
                          </Link>
                          , and{" "}
                          <Link href="/generator-repairs-centurion" className="text-primary hover:underline">
                            Centurion
                          </Link>
                          .
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mt-12">
                  <h3 className="text-xl font-bold mb-3">Still Have Questions?</h3>
                  <p className="mb-4 leading-relaxed">
                    If you didn't find the answer to your question about generator repairs, servicing, or maintenance,
                    our friendly team at Generator Repair Services is here to help. Call us at 069 382 4908, send us a
                    WhatsApp message, or email info@generatorrepairservices.co.za and we'll provide the information you
                    need.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    For more information about our services, visit our{" "}
                    <Link href="/generator-repairs" className="text-primary hover:underline">
                      Generator Repairs
                    </Link>
                    ,{" "}
                    <Link href="/generator-servicing" className="text-primary hover:underline">
                      Generator Servicing
                    </Link>
                    ,{" "}
                    <Link href="/generator-maintenance" className="text-primary hover:underline">
                      Generator Maintenance
                    </Link>
                    , or{" "}
                    <Link href="/contact" className="text-primary hover:underline">
                      Contact Us
                    </Link>{" "}
                    pages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactCTASection />
      </main>
      
    </>
  )
}
