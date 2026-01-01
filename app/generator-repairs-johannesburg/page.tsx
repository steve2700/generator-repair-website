import type { Metadata } from "next"
import { Phone, MapPin, Clock, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Breadcrumbs from "@/components/breadcrumbs"
import ContactCTASection from "@/components/contact-cta-section"
import StructuredData from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Generator Repairs Johannesburg | 24/7 Service | Call 069 382 4908",
  description:
    "Professional generator repairs across all Johannesburg suburbs. Fast response, expert technicians, 24/7 emergency service. Call 069 382 4908 for reliable generator repairs.",
  keywords:
    "generator repairs Johannesburg, generator service Johannesburg, generator repair near me, Johannesburg generator repairs",
}

export default function GeneratorRepairsJohannesburgPage() {
  const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Generator Repairs Johannesburg" }]

  const suburbs = [
    "Sandton",
    "Randburg",
    "Roodepoort",
    "Fourways",
    "Midrand",
    "Edenvale",
    "Bedfordview",
    "Bryanston",
    "Rosebank",
    "Melrose",
    "Craighall",
    "Parktown",
    "Houghton",
    "Observatory",
    "Auckland Park",
    "Northcliff",
    "Greenside",
    "Parkhurst",
    "Linden",
    "Victory Park",
  ]

  return (
    <>
      <StructuredData type="service" />
      <Breadcrumbs items={breadcrumbs} />

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <MapPin className="h-5 w-5" />
            <span className="font-semibold">Serving All Johannesburg Suburbs</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">
            Generator Repairs Johannesburg - Expert Service Across the City
          </h1>
          <p className="text-xl text-muted-foreground mb-6 text-pretty">
            Professional generator repair services for all Johannesburg residents and businesses
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
              <h3 className="text-xl font-bold text-primary mb-2">24/7 Emergency Service in Johannesburg</h3>
              <p className="text-lg leading-relaxed">
                Generator emergencies don't wait for business hours. We provide round-the-clock emergency repair
                services across all Johannesburg suburbs with rapid response times. Call{" "}
                <a href="tel:0693824908" className="font-semibold text-primary hover:underline">
                  069 382 4908
                </a>{" "}
                anytime for immediate assistance.
              </p>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Professional Generator Repairs Across Johannesburg</h2>
            <p className="text-lg leading-relaxed mb-4">
              Johannesburg, South Africa's economic powerhouse and largest city, faces ongoing power supply challenges
              that make backup generators essential for homes and businesses throughout the metropolitan area. From the
              affluent northern suburbs of Sandton and Fourways to the established neighborhoods of Rosebank and
              Parktown, from the industrial areas of Germiston to the residential communities of Roodepoort, generators
              have become critical infrastructure protecting residents and businesses from the disruptions of load
              shedding and power outages. Our specialized generator repair services support Johannesburg's diverse
              communities with expert diagnostics, comprehensive repairs, and reliable maintenance programs.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              As Johannesburg continues to grow and develop, the demand for reliable backup power solutions increases
              correspondingly. Residential properties throughout Johannesburg's suburbs depend on generators to maintain
              lighting, refrigeration, security systems, and comfortable living conditions during frequent load shedding
              schedules. Commercial businesses from small retail shops to large office complexes require backup power to
              continue operations, process transactions, maintain computer systems, and serve customers regardless of
              Eskom's power supply status. Industrial facilities, data centers, healthcare providers, and essential
              services face even more critical backup power requirements where generator failures can result in
              substantial financial losses, safety hazards, or service disruptions.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Our generator repair company specializes exclusively in backup power systems, serving Johannesburg
              residents and businesses with professional repair services, emergency assistance, and preventative
              maintenance programs. Unlike general electrical contractors or mechanical workshops that service
              generators as a sideline, our technicians focus entirely on generator technology across all brands, sizes,
              and fuel types. This specialization means we've developed deep expertise in diagnosing and repairing the
              full spectrum of generator problems from simple starting issues to complex electrical faults, from
              residential portable units to large industrial three-phase systems.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              We maintain strategic service locations throughout the greater Johannesburg area enabling rapid response
              times to all suburbs. Our fully equipped mobile service vehicles function as rolling workshops, carrying
              comprehensive diagnostic equipment, specialized tools, and extensive spare parts inventory for all major
              generator brands. This mobile capability enables us to diagnose and repair most generator problems on-site
              at your Johannesburg location without the inconvenience and expense of transporting generators to repair
              facilities. For repairs requiring workshop facilities, we offer convenient pickup and delivery services
              throughout Johannesburg.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Comprehensive Generator Repair Services for Johannesburg
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Our Johannesburg generator repair services address all types of backup power systems used throughout the
              city. We service residential generators from small 2kW portable camping units to large 20kW whole-house
              standby systems protecting family homes. Commercial generator repairs support businesses of all sizes
              including retail shops, restaurants, office buildings, shopping centers, and professional facilities
              requiring reliable backup power. Industrial generator services maintain the heavy-duty power systems that
              factories, warehouses, data centers, and critical infrastructure depend upon for continuous operations.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Diesel Generator Repairs</h3>
            <p className="text-lg leading-relaxed mb-4">
              Diesel generators dominate commercial and industrial backup power applications throughout Johannesburg due
              to their fuel efficiency, durability, and cost-effectiveness for larger power requirements. We maintain
              extensive experience servicing all diesel generator brands including Cummins, Perkins, FG Wilson, Kohler,
              Deutz, and Yanmar. Our diesel generator repair services address all common problems including starting
              difficulties from glow plug or fuel delivery issues, power output problems, excessive smoke indicating
              combustion or injection problems, cooling system failures, fuel system contamination, and electrical
              faults in alternators or control systems.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Diesel fuel quality presents particular challenges in South African climates. Contaminated fuel, water
              accumulation in tanks, and bacterial growth (diesel bug) frequently cause fuel system problems requiring
              professional cleaning, filter replacement, and fuel polishing services. Our technicians understand diesel
              fuel chemistry and utilize proper diagnostic procedures and cleaning techniques to restore fuel system
              function. We also provide fuel quality testing and recommend appropriate additives and maintenance
              practices to prevent recurring fuel problems in Johannesburg's climate.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Petrol Generator Repairs</h3>
            <p className="text-lg leading-relaxed mb-4">
              Petrol generators remain popular for residential backup power throughout Johannesburg's suburbs,
              particularly for portable units and smaller standby systems. These gasoline-powered generators offer lower
              initial costs, lighter weight, quieter operation, and simpler maintenance compared to diesel alternatives.
              We service all petrol generator brands including Honda, Yamaha, Champion, Generac, Briggs & Stratton, and
              Kipor. Common petrol generator problems we repair include carburetor issues from stale fuel, spark plug
              and ignition system failures, starting problems, alternator and voltage regulation faults, and engine
              mechanical issues.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Petrol generators that sit unused between load shedding events frequently develop carburetor problems as
              gasoline deteriorates and forms varnish deposits. Our carburetor cleaning and rebuilding services restore
              proper fuel delivery and engine performance. We also recommend and perform fuel system treatments,
              stabilizer additions, and storage procedures that prevent fuel-related problems for generators
              experiencing long periods between uses. Proper fuel management significantly improves petrol generator
              reliability when you need backup power during Johannesburg's frequent power interruptions.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Standby vs. Portable Generator Repairs</h3>
            <p className="text-lg leading-relaxed mb-4">
              Johannesburg residents utilize both permanently installed standby generators and portable generator units
              depending on their backup power requirements and budgets. Standby generators connect permanently to home
              or business electrical systems through automatic transfer switches, starting automatically when power
              fails and providing seamless backup power without manual intervention. These sophisticated systems require
              specialized repair services addressing automatic start systems, transfer switch problems, battery and
              charging system maintenance, and integration with building electrical systems.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Portable generators offer flexibility and lower costs but require manual starting and connection during
              power outages. Common portable generator problems stem from storage-related fuel issues, transportation
              damage, recoil starter failures, and electrical system faults. We service both standby and portable
              generator types throughout Johannesburg, understanding the unique requirements and common problems
              associated with each configuration. Whether your Johannesburg property utilizes a sophisticated automatic
              standby system or relies on portable backup power, our technicians provide expert repair services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Emergency Generator Repairs Throughout Johannesburg
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Generator failures during power outages represent genuine emergencies for Johannesburg residents and
              businesses. When load shedding strikes and your generator fails to start or operate properly, you face
              extended periods without power threatening security, comfort, food preservation, business operations, and
              critical systems. Our 24/7 emergency generator repair services specifically address these urgent
              situations with rapid response capabilities throughout all Johannesburg suburbs.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              When you call our emergency hotline at{" "}
              <a href="tel:0693824908" className="text-primary font-semibold hover:underline">
                069 382 4908
              </a>{" "}
              during a generator emergency, you'll speak directly with a qualified technician who can provide immediate
              troubleshooting guidance and dispatch the nearest available service vehicle to your Johannesburg location.
              We typically respond within 1-2 hours throughout central Johannesburg, northern suburbs, and surrounding
              areas. Our emergency service vehicles carry comprehensive diagnostic equipment and extensive spare parts
              enabling completion of most repairs on-site during the emergency call.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Common generator emergencies we address throughout Johannesburg include generators that won't start
              despite proper maintenance, units that run but produce no electrical output, generators that shut down
              shortly after starting due to safety system activation, electrical sparks or smoke indicating serious
              faults, and unusual mechanical noises suggesting internal damage. Our emergency technicians have
              authorization to proceed with necessary repairs immediately after confirming pricing, eliminating delays
              during critical situations. We understand that extended generator downtime during power outages is
              unacceptable for many Johannesburg homes and businesses, and we work efficiently to restore backup power.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Generator Maintenance Services in Johannesburg</h2>
            <p className="text-lg leading-relaxed mb-4">
              Preventative maintenance is essential for ensuring generators start reliably during Johannesburg's
              frequent load shedding events. Generators that sit unused for extended periods develop problems including
              fuel deterioration, battery discharge, cooling system corrosion, and lubrication breakdown. Regular
              maintenance prevents these issues and identifies developing problems before they cause emergency failures.
              Our comprehensive maintenance programs keep Johannesburg generators in peak operating condition.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Our generator maintenance services include regular oil and filter changes using quality lubricants
              appropriate for the generator engine type and operating conditions. We perform air filter cleaning or
              replacement to ensure adequate engine airflow. Spark plugs receive inspection and replacement on petrol
              generators while diesel generators receive glow plug testing and fuel injection system inspection. Fuel
              system servicing includes filter replacement, fuel quality testing, and stabilizer treatment. Battery
              testing and maintenance prevents starting failures on electric-start generators. Cooling system inspection
              and servicing prevents overheating problems.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              We recommend maintenance scheduling based on generator runtime hours and calendar intervals. Standby
              generators experiencing frequent load shedding operation require more frequent maintenance than units that
              rarely run. Our maintenance programs include detailed service records documenting all work performed,
              component conditions, and recommendations for future service. We also provide reminder notifications when
              maintenance is due, ensuring your Johannesburg generator receives timely servicing. Customers enrolled in
              maintenance programs receive priority scheduling and preferential emergency response when problems occur.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Johannesburg Suburbs We Service</h2>
            <p className="text-lg leading-relaxed mb-4">
              Our generator repair services cover all Johannesburg suburbs and surrounding areas. We provide regular and
              emergency service throughout the northern suburbs including Sandton, Fourways, Bryanston, Randburg,
              Northcliff, and Linden. Central Johannesburg areas including Rosebank, Parktown, Houghton, and Auckland
              Park receive comprehensive generator services. Eastern suburbs including Edenvale, Bedfordview, Germiston,
              Boksburg, and Benoni are fully covered. Western areas including Roodepoort, Florida, and surrounding
              suburbs receive prompt service.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-8">
              {suburbs.map((suburb) => (
                <div key={suburb} className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>{suburb}</span>
                </div>
              ))}
            </div>

            <p className="text-lg leading-relaxed mb-4">
              Beyond these primary areas, we service generators throughout the greater Johannesburg metropolitan region
              including Midrand, Kempton Park, and all surrounding suburbs. Our strategic service vehicle positioning
              enables efficient response throughout this expansive service area. Whether you're located in an affluent
              northern suburb, an established central neighborhood, an eastern residential area, or anywhere else in
              greater Johannesburg, our generator repair services are available to support your backup power needs.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Why Johannesburg Residents Choose Our Generator Services
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Johannesburg residents and businesses select our generator repair services because we specialize
              exclusively in backup power systems rather than treating generators as a sideline service. Our technicians
              receive ongoing training in the latest generator technologies across all major brands. We invest in
              professional diagnostic equipment, specialized tools, and comprehensive spare parts inventory specifically
              for generator work. Our mobile service capabilities bring professional repair services directly to your
              Johannesburg location.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              We provide transparent pricing with detailed written quotations before proceeding with repairs. Our
              competitive rates reflect fair pricing for quality work rather than the inflated emergency rates some
              companies charge during load shedding periods. All our repairs are warranted, demonstrating confidence in
              our workmanship and the quality of replacement parts we utilize. We communicate clearly throughout the
              service process, explaining technical issues in understandable terms and providing honest recommendations.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Our commitment to customer service has earned us a strong reputation throughout Johannesburg. We respond
              promptly to service calls, arrive when scheduled, complete work efficiently, and stand behind our
              services. Many Johannesburg customers have relied on our generator expertise for years, trusting us to
              maintain their critical backup power systems. Whether you need emergency repairs, routine maintenance, or
              expert advice about generator issues, we deliver professional services that keep your backup power system
              reliable.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Common Generator Problems in Johannesburg Climate</h2>
            <p className="text-lg leading-relaxed mb-4">
              Johannesburg's highveld climate presents specific challenges for generator operation and reliability. The
              city's high altitude (approximately 1,753 meters above sea level) affects engine performance and
              carburetor settings, particularly for petrol generators. Our technicians understand these altitude-related
              adjustments and optimize generator performance for Johannesburg's elevation. Summer afternoon
              thunderstorms common in Johannesburg can introduce moisture into fuel systems and electrical components,
              requiring proper weatherproofing and drainage provisions.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Johannesburg's dry winter climate with overnight frost affects battery performance and can cause cold
              starting difficulties, especially for diesel generators relying on glow plugs for cold-weather starting.
              We test and maintain battery systems to ensure reliable starting throughout Johannesburg's temperature
              variations. Dust and air pollution in urban and industrial areas necessitate more frequent air filter
              maintenance to prevent engine performance degradation. Our maintenance programs account for these local
              environmental factors affecting generator reliability in Johannesburg conditions.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Generator Installation and Replacement Services</h2>
            <p className="text-lg leading-relaxed mb-4">
              Beyond repairs and maintenance, we provide complete generator installation services for Johannesburg
              properties requiring new backup power systems. Our installation services begin with site assessment and
              generator sizing recommendations based on your power requirements, property characteristics, and budget.
              We coordinate equipment procurement from reputable suppliers, arrange delivery, and manage all aspects of
              professional installation including electrical connections, fuel system setup, exhaust routing, and
              automatic transfer switch integration.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              For aging generators approaching end-of-life, we provide honest assessments about repair versus
              replacement decisions. Sometimes extensive repairs on old generators prove uneconomical compared to
              replacement with modern, more efficient, and more reliable units. We help Johannesburg customers make
              informed decisions about their backup power investments, considering factors like repair costs,
              replacement costs, ongoing maintenance requirements, and expected service life. Our goal is ensuring you
              have reliable backup power through the most cost-effective means, whether that involves repairing existing
              equipment or installing new systems.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Contact Us for Generator Services in Johannesburg</h2>
            <p className="text-lg leading-relaxed mb-4">
              Don't let generator problems leave your Johannesburg home or business without backup power during load
              shedding. Whether you need emergency repairs, routine maintenance, diagnostic services, or installation of
              new backup power systems, our generator specialists are ready to help. We service all generator brands,
              sizes, and fuel types throughout all Johannesburg suburbs.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Call us today at{" "}
              <a href="tel:0693824908" className="text-primary font-semibold hover:underline">
                069 382 4908
              </a>{" "}
              to schedule service or discuss your generator needs. Our knowledgeable staff can answer questions, provide
              guidance on generator problems, schedule convenient service appointments, or dispatch emergency assistance
              when needed. You can also contact us via WhatsApp for quick responses to generator questions or service
              requests.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Experience professional generator repair services from Johannesburg's backup power specialists. We
              understand the critical importance of reliable generators for Johannesburg residents and businesses facing
              ongoing load shedding challenges. Contact us now and ensure your generator provides dependable backup
              power whenever Eskom power fails. Our expert technicians, comprehensive services, and commitment to
              customer satisfaction make us Johannesburg's trusted generator repair company.
            </p>
          </section>
        </div>
      </div>

      <ContactCTASection />
    </>
  )
}
