import type { Metadata } from "next"
import { Phone, MapPin, Clock, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Breadcrumbs from "@/components/breadcrumbs"
import ContactCTASection from "@/components/contact-cta-section"
import StructuredData from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Generator Repairs Sandton | 24/7 Service | Call 069 382 4908",
  description:
    "Professional generator repairs in Sandton. Fast response to all Sandton suburbs including Bryanston, Fourways, Morningside. Call 069 382 4908 for expert generator repairs.",
  keywords:
    "generator repairs Sandton, generator service Sandton, generator repair Bryanston, Fourways generator repairs",
}

export default function GeneratorRepairsSandtonPage() {
  const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Generator Repairs Sandton" }]

  const suburbs = [
    "Bryanston",
    "Fourways",
    "Morningside",
    "Sandhurst",
    "Sandton CBD",
    "Rivonia",
    "Sunninghill",
    "Woodmead",
    "Paulshof",
    "Lonehill",
    "Douglasdale",
    "Dainfern",
    "Cedar Lakes",
    "Broadacres",
    "Buccleuch",
  ]

  return (
    <>
      <StructuredData type="service" />
      <Breadcrumbs items={breadcrumbs} />

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <MapPin className="h-5 w-5" />
            <span className="font-semibold">Serving All Sandton Suburbs</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">
            Generator Repairs Sandton - Premium Service for Gauteng's Business Hub
          </h1>
          <p className="text-xl text-muted-foreground mb-6 text-pretty">
            Expert generator repair services for Sandton homes, offices, and commercial properties
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

        <div className="bg-card border rounded-lg p-6 mb-12">
          <div className="flex items-start gap-4">
            <Clock className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Priority Emergency Service in Sandton</h3>
              <p className="text-lg leading-relaxed">
                Sandton's business and residential properties require rapid generator repair response. We provide 24/7
                emergency service throughout all Sandton suburbs with typical response times under 90 minutes. Call{" "}
                <a href="tel:0693824908" className="font-semibold text-primary hover:underline">
                  069 382 4908
                </a>{" "}
                for immediate assistance.
              </p>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Professional Generator Repairs Throughout Sandton</h2>
            <p className="text-lg leading-relaxed mb-4">
              Sandton stands as Africa's richest square mile and Gauteng's premier business district, hosting major
              corporate headquarters, international financial institutions, luxury residential estates, upscale shopping
              centers, and premium office developments. This concentration of high-value properties and critical
              business operations makes reliable backup power absolutely essential throughout Sandton. From Sandton
              City's bustling commercial precinct to the exclusive residential estates of Sandhurst and Bryanston, from
              the technology parks of Woodmead to the gated communities of Dainfern and Fourways, generators protect
              valuable assets, maintain business continuity, and ensure comfortable living standards during South
              Africa's ongoing load shedding challenges.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Sandton's corporate environment demands uninterrupted power for data centers, trading floors, server
              rooms, telecommunications infrastructure, and essential business systems that cannot tolerate power
              disruptions. Financial institutions process millions of rands in transactions that require continuous
              power availability. Technology companies host critical servers and cloud infrastructure requiring
              enterprise-grade backup power reliability. Professional services firms depend on generators to maintain
              operations, communications, and client services regardless of Eskom's load shedding schedules. Generator
              failures in these environments result in substantial financial losses, reputational damage, and
              operational disruptions.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Sandton's luxury residential properties feature sophisticated whole-house generator systems providing
              seamless automatic backup power maintaining security systems, climate control, refrigeration, lighting,
              entertainment systems, and all modern conveniences. These upscale installations often utilize premium
              generator brands like Kohler, Cummins residential series, or Generac Guardian systems featuring advanced
              control systems, weather-resistant enclosures, and quiet operation appropriate for residential
              neighborhoods. Our generator repair services support these premium installations with expert maintenance,
              rapid emergency response, and specialized repairs maintaining the high reliability standards Sandton
              property owners expect.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Our generator repair company specializes exclusively in backup power systems, bringing concentrated
              expertise to every service call throughout Sandton. Our technicians service all generator brands from
              residential systems to large commercial three-phase installations. We maintain strategic positioning in
              the Sandton area enabling rapid response times typically under 90 minutes throughout Bryanston, Fourways,
              Morningside, Rivonia, Sunninghill, and all surrounding suburbs. Our fully equipped service vehicles carry
              professional diagnostic equipment, specialized tools, and comprehensive spare parts inventory enabling
              most repairs on-site at your Sandton location.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Commercial Generator Services for Sandton Businesses
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Sandton's status as Gauteng's primary business district creates unique backup power requirements for
              commercial properties. Office towers throughout Sandton CBD, Rivonia, and Woodmead depend on generators to
              power elevators, HVAC systems, lighting, computer networks, telecommunications equipment, and security
              systems. Shopping centers including Sandton City, Nelson Mandela Square, Fourways Mall, and Cedar Square
              require substantial backup power maintaining operations, security, refrigeration, and customer services.
              Data centers and technology facilities demand enterprise-grade generator reliability with automatic
              transfer switching, redundant systems, and sophisticated monitoring.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Office Building Generator Maintenance</h3>
            <p className="text-lg leading-relaxed mb-4">
              Commercial office buildings throughout Sandton typically operate large diesel generators ranging from 50kW
              to several hundred kilowatts providing three-phase power through automatic transfer switches. These
              systems support hundreds or thousands of occupants requiring continuous power for essential building
              systems. Our commercial generator services include scheduled preventative maintenance programs,
              comprehensive load bank testing, automatic transfer switch testing and maintenance, control system
              diagnostics and repairs, cooling system servicing, fuel system maintenance including tank cleaning and
              fuel polishing, and 24/7 emergency repair response.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              We work closely with building management companies and facilities managers throughout Sandton, scheduling
              maintenance during off-peak hours to minimize tenant disruption. Our maintenance programs include detailed
              documentation meeting insurance and compliance requirements. We provide advance notice of recommended
              component replacements enabling proper budgeting for major expenditures. Emergency repairs receive
              priority response because building generator failures affect multiple tenants and create liability
              concerns for property management.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Retail and Hospitality Generator Services</h3>
            <p className="text-lg leading-relaxed mb-4">
              Sandton's premium retail environment including shopping centers, restaurants, hotels, and entertainment
              venues depends on backup generators maintaining operations during load shedding. Retail generators support
              lighting, payment systems, security, refrigeration, and climate control essential for customer experience
              and business operations. Restaurant and hospitality generators power kitchen equipment, refrigeration,
              HVAC, lighting, and all systems required for continuous service. Generator failures in these environments
              directly impact revenue, customer satisfaction, and food safety.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Our retail and hospitality generator services provide rapid emergency response because extended downtime
              in customer-facing environments is particularly costly. We schedule maintenance during closed hours or
              slow periods minimizing operational impact. Our technicians understand the urgency of generator problems
              in revenue-generating environments and work efficiently to restore backup power. We also provide
              consultation on generator sizing, upgrade options, and operational best practices for retail and
              hospitality applications.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Residential Generator Services in Sandton Suburbs</h2>
            <p className="text-lg leading-relaxed mb-4">
              Sandton's prestigious residential suburbs including Sandhurst, Bryanston, Morningside, Lonehill, Dainfern,
              and surrounding estates feature some of Gauteng's most valuable properties where residents expect
              uninterrupted power supply maintaining luxury lifestyles. Whole-house generator systems have become
              standard installations in Sandton's upscale properties, providing automatic backup power that activates
              within seconds of utility power failure. These sophisticated systems maintain all home systems including
              security, climate control, kitchen appliances, entertainment systems, pool equipment, and gate motors
              without requiring manual intervention.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Automatic Standby Generator Systems</h3>
            <p className="text-lg leading-relaxed mb-4">
              Sandton residential properties typically utilize automatic standby generators ranging from 15kW to 50kW
              featuring permanent installation, automatic transfer switches, and sophisticated control systems. Premium
              brands popular in Sandton include Kohler residential generators known for quiet operation and reliability,
              Cummins QuietConnect series offering advanced features, Generac Guardian systems providing excellent
              value, and various imported European brands. These systems require specialized installation, annual
              maintenance, battery replacement every 3-5 years, and occasional repairs addressing control system
              problems, automatic transfer switch issues, or engine mechanical concerns.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Our residential generator services include comprehensive annual maintenance programs, battery testing and
              replacement, automatic transfer switch testing and repairs, control system diagnostics and programming,
              load testing to verify performance, and 24/7 emergency repairs when generators fail during power outages.
              We understand that Sandton homeowners expect prompt, professional service maintaining the high standards
              appropriate for premium properties. Our technicians arrive in clearly marked professional vehicles,
              maintain tidy work areas, and communicate clearly throughout the service process.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Generator Installation and Upgrades</h3>
            <p className="text-lg leading-relaxed mb-4">
              Many Sandton properties initially installed smaller generators adequate for essential circuits but now
              require whole-house coverage as reliance on backup power increases. We provide generator upgrade services
              including sizing assessments, equipment recommendations, installation coordination, and integration with
              existing electrical systems. New installations require site assessment, generator selection appropriate
              for power requirements, foundation preparation, fuel system installation, electrical connections,
              automatic transfer switch installation, and commissioning. We manage all aspects of generator
              installations for Sandton properties ensuring compliance with electrical codes and homeowner association
              requirements.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">24/7 Emergency Generator Repairs in Sandton</h2>
            <p className="text-lg leading-relaxed mb-4">
              Generator emergencies in Sandton require immediate professional response due to the high value of
              properties, critical business operations, and security concerns associated with extended power outages.
              Our 24/7 emergency repair services specifically address urgent situations with rapid response throughout
              all Sandton suburbs. When you call our emergency hotline at{" "}
              <a href="tel:0693824908" className="text-primary font-semibold hover:underline">
                069 382 4908
              </a>
              , you'll speak directly with a qualified technician who can provide immediate troubleshooting guidance and
              dispatch emergency service to your Sandton location typically within 90 minutes.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Common emergency situations we address throughout Sandton include generators failing to start during load
              shedding when backup power is urgently needed, automatic transfer switches failing to transfer loads to
              generator power, generators running but producing insufficient voltage or power, control system errors
              preventing automatic operation, fuel delivery problems, cooling system failures causing overheating
              shutdowns, and electrical faults. Our emergency service vehicles carry diagnostic equipment and
              comprehensive spare parts enabling most repairs on-site without delays for parts ordering or workshop
              visits.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              We understand that generator emergencies in Sandton often involve high-value properties, critical business
              operations, or security concerns requiring urgent resolution. Our emergency technicians have authorization
              to proceed with necessary repairs immediately after confirming pricing approval, eliminating delays during
              critical situations. For complex problems requiring major component replacement, we can arrange temporary
              generator rentals maintaining your Sandton property's power while permanent repairs proceed. Our goal is
              restoring reliable backup power as quickly as possible minimizing disruption to your home or business.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Sandton Suburbs and Areas We Service</h2>
            <p className="text-lg leading-relaxed mb-4">
              Our generator repair services cover all Sandton suburbs and surrounding areas with rapid response times.
              We provide comprehensive service throughout central Sandton including Sandton CBD, Sandhurst, Morningside,
              and Hyde Park. Northern suburbs including Bryanston, Fourways, Lonehill, Douglasdale, Broadacres,
              Dainfern, and Cedar Lakes receive full coverage. Eastern areas including Rivonia, Sunninghill, Woodmead,
              Paulshof, and Buccleuch are completely serviced. All Sandton residential estates, business parks, and
              commercial properties fall within our service area.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-8">
              {suburbs.map((suburb) => (
                <div key={suburb} className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>{suburb}</span>
                </div>
              ))}
            </div>

            <p className="text-lg leading-relaxed mb-4">
              Our strategic positioning in the Sandton area enables response times typically under 90 minutes throughout
              this service area. During widespread load shedding events, we prioritize calls based on urgency and
              criticality but maintain sufficient emergency capacity to respond to all Sandton customers promptly.
              Whether your property is located in central Sandton's business district, an exclusive residential estate,
              or surrounding suburban areas, our professional generator repair services are readily available.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Preventative Maintenance Programs for Sandton Generators
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Preventative maintenance is essential for ensuring generator reliability protecting Sandton's high-value
              properties and critical business operations. Regular maintenance prevents unexpected failures, extends
              equipment lifespan, maintains warranty compliance, and provides confidence that backup power will function
              reliably when needed. Our comprehensive maintenance programs serve Sandton residential and commercial
              properties with scheduled servicing appropriate for each generator's operating conditions and usage
              patterns.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Residential maintenance programs include annual or semi-annual comprehensive servicing, battery testing
              and replacement when needed, automatic transfer switch testing, control system verification, load testing,
              and detailed condition reports. Commercial maintenance programs feature more frequent servicing based on
              runtime hours, quarterly or monthly inspections, load bank testing, fuel system maintenance, cooling
              system servicing, and comprehensive documentation for insurance and compliance requirements. We schedule
              maintenance at convenient times for Sandton properties, provide reminder notifications when service is
              due, and offer priority emergency response to maintenance program customers.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Why Sandton Properties Choose Our Generator Services
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Sandton property owners and businesses select our generator services because we deliver the professional
              standards, rapid response, and technical expertise appropriate for Gauteng's premier business and
              residential district. Our specialized focus on generator repair and maintenance means our technicians
              develop deep expertise across all generator brands and technologies. We invest in professional diagnostic
              equipment, specialized tools, and comprehensive spare parts inventory specifically for generator work. Our
              service vehicles and technicians present a professional appearance appropriate for Sandton's upscale
              environment.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              We provide transparent pricing with detailed written quotations before proceeding with repairs. Our
              competitive rates reflect fair pricing for quality professional service. All our work is warranted,
              demonstrating confidence in our workmanship and the quality of replacement parts. We communicate clearly
              throughout the service process, respecting our customers' time and property while delivering efficient,
              effective repairs. Many Sandton customers have trusted our generator expertise for years, relying on us
              for ongoing maintenance and rapid emergency response when needed.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Contact Us for Generator Services in Sandton</h2>
            <p className="text-lg leading-relaxed mb-4">
              Don't let generator problems compromise your Sandton property's backup power reliability. Whether you need
              emergency repairs, routine maintenance, diagnostic services, generator upgrades, or installation of new
              systems, our generator specialists are ready to assist. We service all generator brands and configurations
              throughout all Sandton suburbs.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Call us today at{" "}
              <a href="tel:0693824908" className="text-primary font-semibold hover:underline">
                069 382 4908
              </a>{" "}
              to schedule service, discuss your generator requirements, or request emergency assistance. Our
              knowledgeable staff can answer questions, provide guidance, schedule convenient service appointments, or
              dispatch emergency technicians when needed. You can also contact us via WhatsApp for quick responses.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Experience professional generator repair services from Sandton's backup power specialists. We understand
              the high standards expected for Sandton properties and deliver services that maintain generator
              reliability protecting your valuable assets and critical operations. Contact us now and ensure your
              generator provides dependable backup power whenever load shedding affects your Sandton property.
            </p>
          </section>
        </div>
      </div>

      <ContactCTASection />
    </>
  )
}
