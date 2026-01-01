import type { Metadata } from "next"
import { Phone, MapPin, Clock, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Breadcrumbs from "@/components/breadcrumbs"
import ContactCTASection from "@/components/contact-cta-section"
import StructuredData from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Generator Repairs Centurion | 24/7 Service | Call 069 382 4908",
  description:
    "Professional generator repairs in Centurion. Expert service across all Centurion suburbs including Irene, Highveld, Wierdapark. Call 069 382 4908 for reliable repairs.",
  keywords:
    "generator repairs Centurion, generator service Centurion, generator repair Irene, Centurion generator repairs",
}

export default function GeneratorRepairsCenturionPage() {
  const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Generator Repairs Centurion" }]

  const suburbs = [
    "Irene",
    "Highveld",
    "Wierdapark",
    "Eldoraigne",
    "Lyttelton",
    "Clubview",
    "Eldoraigne",
    "Pierre van Ryneveld",
    "Centurion CBD",
    "Zwartkop",
    "Laudium",
    "Doringkloof",
    "Rooihuiskraal",
    "Erasmia",
    "Cornwall Hill",
  ]

  return (
    <>
      <StructuredData type="service" />
      <Breadcrumbs items={breadcrumbs} />

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <MapPin className="h-5 w-5" />
            <span className="font-semibold">Serving All Centurion Suburbs</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">
            Generator Repairs Centurion - Expert Service Between Pretoria & Johannesburg
          </h1>
          <p className="text-xl text-muted-foreground mb-6 text-pretty">
            Professional generator repair services for Centurion homes, businesses, and estates
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
              <h3 className="text-xl font-bold text-primary mb-2">Fast Emergency Response in Centurion</h3>
              <p className="text-lg leading-relaxed">
                Centurion's strategic location enables rapid generator repair response. We provide 24/7 emergency
                service throughout all Centurion suburbs with fast response times. Call{" "}
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
            <h2 className="text-3xl font-bold text-primary mb-6">
              Professional Generator Repairs Throughout Centurion
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Centurion occupies a strategic position between Pretoria and Johannesburg along the N1 highway corridor,
              hosting a diverse mix of residential suburbs, commercial developments, industrial facilities, and retail
              centers. Originally established as Verwoerdburg and renamed Centurion in 1995, this vibrant municipality
              has grown into one of Gauteng's most important economic zones. From the established residential areas of
              Irene and Lyttelton to the modern estates of Cornwall Hill and Midstream, from the commercial centers
              along the N1 to the industrial zones of Samrand and Hennopspark, backup generators have become essential
              infrastructure protecting Centurion residents and businesses from South Africa's persistent load shedding
              challenges.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Centurion's residential communities ranging from middle-income family neighborhoods to upscale security
              estates increasingly depend on backup generators maintaining comfortable living standards during frequent
              power outages. Many Centurion homes installed generators initially for essential circuits but have
              upgraded to whole-house systems as reliance on backup power increases. Gated communities and security
              estates throughout Centurion utilize generators maintaining access control systems, perimeter security,
              street lighting, and community facilities. Individual homes depend on generators protecting security
              systems, refrigeration, communications, and modern conveniences that have become essential for daily life.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Commercial and industrial facilities throughout Centurion require reliable backup power maintaining
              operations, protecting inventory, preserving data, and continuing customer service during load shedding
              periods. Shopping centers including Centurion Mall, Mall@Reds, and various retail developments depend on
              generators maintaining lighting, payment systems, refrigeration, and security. Office parks along the N1
              corridor and throughout Centurion utilize backup generators supporting business operations, data systems,
              and telecommunications. Industrial facilities in Samrand, Hennopspark, and other industrial areas require
              generators maintaining production equipment, process control systems, and critical infrastructure.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Our generator repair company specializes exclusively in backup power systems, serving Centurion with
              expert diagnostics, comprehensive repairs, emergency assistance, and preventative maintenance programs.
              Our technicians service all generator brands from portable residential units to large industrial
              three-phase systems. Strategic positioning in the Centurion area enables rapid response throughout all
              suburbs. Our fully equipped service vehicles carry professional diagnostic equipment, specialized tools,
              and comprehensive spare parts inventory enabling most repairs on-site at your Centurion location.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Comprehensive Generator Repair Services for Centurion
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Our Centurion generator repair services address all types of backup power systems used throughout
              residential, commercial, and industrial applications. We service diesel generators favored for commercial
              and industrial applications due to fuel efficiency and durability. Petrol generators popular for
              residential backup power receive expert service including carburetor cleaning, spark system repairs, and
              fuel system maintenance. Automatic standby generators with sophisticated control systems and transfer
              switches receive specialized diagnostics and repairs maintaining automatic operation. Portable generators
              used for flexible backup power receive comprehensive servicing and repairs.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Common Generator Problems in Centurion</h3>
            <p className="text-lg leading-relaxed mb-4">
              Centurion generators experience typical backup power system problems requiring professional diagnosis and
              repair. Starting failures represent the most common service calls, resulting from battery discharge, fuel
              system problems, spark ignition faults, or control system issues. Generators that start but produce
              insufficient power indicate alternator problems, voltage regulator failures, or engine performance issues
              requiring systematic diagnostics. Automatic transfer switch problems prevent generators from assuming
              building loads despite proper engine operation. Control system faults cause failed automatic starting,
              nuisance shutdowns, or prevent proper operation.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Fuel system problems particularly affect petrol generators stored between uses as gasoline deteriorates
              forming varnish deposits clogging carburetors and fuel lines. Our carburetor cleaning and fuel system
              services restore proper operation. Diesel generators experience fuel contamination, water accumulation,
              and bacterial growth requiring fuel polishing, filter replacement, and tank cleaning. Cooling system
              problems cause overheating shutdowns requiring radiator service, water pump replacement, or coolant system
              repairs. Electrical faults in alternators, control systems, or wiring require systematic diagnostics and
              repairs.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Residential Generator Services</h3>
            <p className="text-lg leading-relaxed mb-4">
              Centurion residential properties utilize various generator configurations from portable petrol units
              manually connected during outages to sophisticated automatic standby systems providing seamless
              whole-house backup power. Established suburbs like Irene, Lyttelton, and Highveld feature mix of generator
              types depending on home size and power requirements. Modern estates like Cornwall Hill, Midstream, and
              Centurion Golf Estate commonly feature whole-house automatic standby generators protecting entire
              properties. Our residential services include maintenance programs, battery replacement, automatic transfer
              switch testing, control system repairs, and emergency assistance when generators fail during load
              shedding.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Commercial and Industrial Services</h3>
            <p className="text-lg leading-relaxed mb-4">
              Commercial properties throughout Centurion including office parks, retail centers, hotels, and service
              businesses depend on our generator services maintaining reliable backup power. We provide scheduled
              maintenance programs, load bank testing, emergency repairs, and comprehensive diagnostics for commercial
              generator systems. Industrial facilities in Centurion's industrial areas utilize our expertise maintaining
              heavy-duty backup power systems supporting production equipment, process control, and critical
              infrastructure. Our industrial services include preventative maintenance, major component overhauls,
              control system upgrades, and priority emergency response for critical facilities.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">24/7 Emergency Generator Repairs in Centurion</h2>
            <p className="text-lg leading-relaxed mb-4">
              Generator failures during power outages create urgent situations requiring immediate professional
              response. Our 24/7 emergency repair services address these critical situations throughout all Centurion
              suburbs. When you call our emergency hotline at{" "}
              <a href="tel:0693824908" className="text-primary font-semibold hover:underline">
                069 382 4908
              </a>
              , you'll speak directly with a qualified technician who can provide troubleshooting guidance and dispatch
              emergency service to your Centurion location. Our strategic positioning enables response typically within
              1-2 hours throughout Centurion.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Common emergency situations include generators failing to start when power fails, automatic systems not
              transferring loads to generator power, generators producing insufficient voltage or power, control system
              errors preventing operation, fuel delivery problems, cooling system failures, unusual mechanical noises,
              or electrical faults. Our emergency service vehicles carry diagnostic equipment and comprehensive spare
              parts enabling most repairs on-site during emergency calls. For complex problems requiring workshop
              facilities or major component replacement, we can arrange temporary generator rentals maintaining your
              Centurion property's power while permanent repairs proceed.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Centurion Suburbs and Areas We Service</h2>
            <p className="text-lg leading-relaxed mb-4">
              Our generator repair services cover all Centurion suburbs and surrounding areas. We provide comprehensive
              service throughout central Centurion including Centurion CBD, Wierdapark, and Clubview. Eastern suburbs
              including Irene, Highveld, Zwartkop, and Pierre van Ryneveld receive full coverage. Western areas
              including Eldoraigne, Lyttelton, and Rooihuiskraal are completely serviced. Northern suburbs including
              Doringkloof and Cornwall Hill, plus southern areas including Erasmia and Laudium all fall within our
              service area.
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
              Beyond Centurion proper, our service area extends to neighboring areas including Midrand to the north and
              surrounding regions. Centurion's central location between Pretoria and Johannesburg positions us to
              provide efficient service throughout the broader Gauteng region. Whether your property is located in an
              established residential suburb, a modern security estate, a commercial development, or an industrial area,
              our professional generator repair services are readily available.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Preventative Maintenance Programs for Centurion Generators
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Regular preventative maintenance is essential for ensuring generator reliability protecting Centurion
              homes and businesses from load shedding disruptions. Generators experiencing long idle periods between
              uses develop problems from fuel deterioration, battery discharge, cooling system corrosion, and
              lubrication breakdown. Our comprehensive maintenance programs prevent these issues through scheduled
              servicing, systematic inspections, and proactive component replacement before failures occur. Centurion
              customers enrolled in maintenance programs experience significantly fewer emergency breakdowns.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Maintenance services include engine oil and filter changes, air filter servicing, spark plug replacement
              for petrol generators, fuel system maintenance including filter replacement and fuel treatment, battery
              testing and maintenance, cooling system inspection and servicing, electrical system inspection, control
              system testing, and comprehensive visual inspections. We also perform periodic load testing verifying
              performance under actual load conditions and regular exercise runs preventing fuel system problems. Our
              maintenance programs include detailed service records, condition reports, and recommendations for future
              service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Why Centurion Residents Choose Our Generator Services
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Centurion residents and businesses select our generator services because we specialize exclusively in
              backup power systems rather than treating generators as sideline work. Our technicians receive ongoing
              training across all generator brands and technologies. We invest in professional diagnostic equipment,
              specialized tools, and comprehensive spare parts inventory specifically for generator work. Our mobile
              service capabilities bring professional repairs directly to your Centurion location. We provide
              transparent pricing with detailed written quotations before proceeding with repairs.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Our competitive rates reflect fair pricing for quality professional service. All our work is warranted,
              demonstrating confidence in our workmanship and replacement parts quality. We communicate clearly
              throughout the service process, explaining technical issues in understandable terms and providing honest
              recommendations. Many Centurion customers have trusted our generator expertise for years, relying on us
              for ongoing maintenance and rapid emergency response. Whether you need emergency repairs, routine
              maintenance, or expert advice, we deliver professional services maintaining generator reliability.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Contact Us for Generator Services in Centurion</h2>
            <p className="text-lg leading-relaxed mb-4">
              Don't let generator problems leave your Centurion property without backup power during load shedding.
              Whether you need emergency repairs, routine maintenance, diagnostic services, generator upgrades, or
              installation of new systems, our generator specialists are ready to help. We service all generator brands
              and configurations throughout all Centurion suburbs.
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
              Experience professional generator repair services from Centurion's backup power specialists. We understand
              the critical importance of reliable generators for Centurion residents and businesses facing ongoing load
              shedding challenges. Contact us now and ensure your generator provides dependable backup power whenever
              power fails at your Centurion property.
            </p>
          </section>
        </div>
      </div>

      <ContactCTASection />
    </>
  )
}
