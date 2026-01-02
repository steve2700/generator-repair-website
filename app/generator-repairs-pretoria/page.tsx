import type { Metadata } from "next"
import { Phone, MapPin, Clock, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Breadcrumbs from "@/components/breadcrumbs"
import ContactCTASection from "@/components/contact-cta-section"
import StructuredData from "@/components/structured-data"

export const metadata: Metadata = {
  title: "★★★★★ Generator Repairs Pretoria 2025 | #1 Expert 24-Hour Service",
  description:
    "★★★★★ #1 professional generator repairs in Pretoria. Diesel & petrol generators. 24-hour emergency service. Certified technicians. All suburbs. Call 069 382 4908 now!",
  keywords: [
    "generator repairs pretoria",
    "diesel generator repairs pretoria",
    "petrol generator repairs pretoria",
    "generator servicing pretoria",
    "emergency generator repairs pretoria",
    "24 hour generator repairs pretoria",
    "generator maintenance pretoria",
    "generator repair near me pretoria",
  ],
  openGraph: {
    title: "Generator Repairs Pretoria | Expert 24-Hour Service",
    description:
      "Professional generator repairs in Pretoria. Diesel & petrol generators. 24-hour emergency service. Certified technicians serving all suburbs.",
    url: "https://generatorrepairservices.co.za/generator-repairs-pretoria",
    siteName: "Generator Repair Services",
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://generatorrepairservices.co.za/generator-repairs-pretoria",
  },
}

export default function GeneratorRepairsPretoriaPage() {
  const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Generator Repairs Pretoria" }]

  const suburbs = [
    "Centurion",
    "Menlyn",
    "Hatfield",
    "Brooklyn",
    "Waterkloof",
    "Lynnwood",
    "Faerie Glen",
    "Montana",
    "Mooikloof",
    "Garsfontein",
    "Equestria",
    "Erasmuskloof",
    "Eldoraigne",
    "Moreleta Park",
    "Waverley",
    "Arcadia",
    "Sunnyside",
    "Muckleneuk",
    "Constantia Park",
    "Elarduspark",
  ]

  return (
    <>
      <StructuredData type="service" />
      <Breadcrumbs items={breadcrumbs} />

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <MapPin className="h-5 w-5" />
            <span className="font-semibold">Serving All Pretoria and Tshwane Suburbs</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">
            Generator Repairs Pretoria - Professional Service Across Tshwane
          </h1>
          <p className="text-xl text-muted-foreground mb-6 text-pretty">
            Expert generator repair services for Pretoria residents, businesses, and government facilities
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
              <h3 className="text-xl font-bold text-primary mb-2">24/7 Emergency Generator Service in Pretoria</h3>
              <p className="text-lg leading-relaxed">
                Generator failures during load shedding require immediate professional response. We provide 24-hour
                emergency repair services throughout all Pretoria and Tshwane suburbs. Call{" "}
                <a href="tel:0693824908" className="font-semibold text-primary hover:underline">
                  069 382 4908
                </a>{" "}
                anytime for urgent generator assistance.
              </p>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Comprehensive Generator Repair Services Throughout Pretoria
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Pretoria, officially known as Tshwane Metropolitan Municipality and serving as South Africa's
              administrative capital, hosts thousands of government buildings, diplomatic missions, corporate offices,
              educational institutions, and residential properties all requiring reliable backup power systems. The
              city's critical role in government operations, combined with ongoing load shedding challenges affecting
              all of South Africa, makes generator reliability absolutely essential for Pretoria's diverse
              establishments. Our specialized generator repair services support this vital infrastructure with expert
              diagnostics, comprehensive repairs, emergency assistance, and preventative maintenance programs throughout
              all Pretoria suburbs.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              From the diplomatic enclave of Waterkloof to the bustling commercial centers of Menlyn and Centurion, from
              the university areas of Hatfield to the established residential suburbs of Brooklyn and Lynnwood, from the
              modern developments of Mooikloof to the historic neighborhoods surrounding the Union Buildings, generators
              have become indispensable backup power solutions protecting Pretoria residents and organizations from
              power supply disruptions. Government departments cannot afford interrupted operations during critical
              administrative functions. Embassies and consulates require uninterrupted power for security and diplomatic
              activities. Businesses throughout Pretoria depend on backup generators to maintain productivity, process
              transactions, and serve customers regardless of Eskom's load shedding schedules.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Our generator repair company focuses exclusively on backup power systems, bringing specialized expertise
              to every service call throughout the greater Pretoria area. Our technicians understand the unique
              requirements of different generator applications from small residential portable units protecting family
              homes to large three-phase industrial systems powering critical facilities. We service all generator
              brands including Cummins, Perkins, FG Wilson, Kohler, Honda, Yamaha, Champion, Generac, and many others.
              Our experience spans all fuel types including diesel generators favored for commercial and industrial
              applications, petrol generators popular for residential backup power, and natural gas generators utilized
              where piped gas supplies are available.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Strategic positioning of our service vehicles throughout the greater Pretoria area enables rapid response
              to all suburbs. Our fully equipped mobile service units carry comprehensive diagnostic equipment,
              specialized generator repair tools, and extensive spare parts inventory enabling completion of most
              repairs on-site at your Pretoria location. This mobile capability eliminates the inconvenience and expense
              of transporting generators to repair workshops for most service needs. For complex repairs requiring
              workshop facilities, we offer convenient pickup and delivery services throughout Pretoria and surrounding
              areas.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Generator Repair Services for All Pretoria Sectors</h2>
            <p className="text-lg leading-relaxed mb-4">
              Pretoria's diverse economy and its role as administrative capital create varied backup power requirements
              across different sectors. Our generator repair services support all these sectors with appropriate
              expertise and service capabilities. Government facilities throughout Pretoria depend on our services to
              maintain critical backup power systems supporting administrative operations, data centers, security
              systems, and essential services that cannot be interrupted by power outages. We understand the importance
              of reliable backup power for government operations and provide priority emergency response when needed.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
              Residential Generator Repairs Throughout Pretoria
            </h3>
            <p className="text-lg leading-relaxed mb-4">
              Pretoria's residential communities throughout suburbs like Waterkloof, Brooklyn, Lynnwood, Montana, Faerie
              Glen, Moreleta Park, and Mooikloof increasingly rely on backup generators to maintain comfortable living
              conditions during frequent load shedding schedules. Residential generator applications range from small
              portable petrol units powering essential circuits to sophisticated whole-house standby systems with
              automatic transfer switches providing seamless backup power. Common residential generator problems include
              starting failures from battery discharge or fuel system issues, power output problems affecting voltage
              regulation, control system faults preventing automatic operation, and maintenance-related failures from
              neglected servicing.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Our residential generator services provide convenient on-site repairs, comprehensive maintenance programs,
              emergency assistance when generators fail during power outages, and expert advice about generator
              operation and care. We understand the frustration of generator failures during load shedding when your
              family depends on backup power for security, refrigeration, lighting, and comfort. Our technicians respond
              quickly to residential service calls throughout all Pretoria suburbs, diagnose problems efficiently, and
              implement effective repairs that restore your backup power reliability.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Commercial and Office Generator Services</h3>
            <p className="text-lg leading-relaxed mb-4">
              Pretoria's extensive commercial sector including office buildings in Menlyn, Centurion, Brooklyn, and the
              CBD requires reliable backup power to maintain business operations during load shedding. Commercial
              generators support computer systems, telecommunications equipment, lighting, HVAC systems, security
              systems, and payment processing equipment. Generator failures in commercial environments result in lost
              productivity, inability to serve customers, compromised security, and potential data loss. Our commercial
              generator services provide rapid emergency response, scheduled maintenance programs, and comprehensive
              repairs that minimize business disruption.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              We understand the urgency of generator problems in commercial settings where every hour of downtime
              affects revenue and customer service. Our commercial service agreements provide priority response,
              scheduled maintenance during off-peak hours, and comprehensive documentation for insurance and compliance
              requirements. Whether your Pretoria business operates a single generator or maintains multiple backup
              power systems across different locations, we deliver professional services that keep your commercial
              operations running during power outages.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Government and Institutional Services</h3>
            <p className="text-lg leading-relaxed mb-4">
              As South Africa's administrative capital, Pretoria hosts numerous government departments, state-owned
              enterprises, embassies, and institutional facilities all requiring reliable backup power for critical
              operations. These facilities often operate large diesel generators with three-phase power output,
              sophisticated control systems, and automatic transfer switching. Our technicians maintain appropriate
              security clearances and professional conduct required for work at sensitive government and diplomatic
              locations. We provide scheduled maintenance programs, emergency repair services, and load bank testing to
              verify performance of critical backup power systems.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">24/7 Emergency Generator Repairs in Pretoria</h2>
            <p className="text-lg leading-relaxed mb-4">
              Generator emergencies don't respect business hours or load shedding schedules. In fact, most generator
              problems become apparent precisely when you need backup power during power outages. Our 24/7 emergency
              repair services address these urgent situations with rapid response throughout all Pretoria suburbs. When
              you call our emergency hotline at{" "}
              <a href="tel:0693824908" className="text-primary font-semibold hover:underline">
                069 382 4908
              </a>
              , you'll speak directly with a qualified technician who can provide immediate troubleshooting guidance and
              dispatch emergency service to your location.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Our emergency response typically reaches Pretoria locations within 1-2 hours depending on your specific
              suburb and traffic conditions. Our service vehicles carry diagnostic equipment and spare parts enabling
              most emergency repairs on-site without delays for parts ordering or workshop visits. Common emergency
              situations we address include generators that won't start when power fails, units producing no electrical
              output despite running, generators shutting down shortly after starting, unusual mechanical noises
              indicating damage, electrical sparks or smoke, and control system failures preventing automatic operation.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              During widespread load shedding events affecting multiple customers simultaneously, we prioritize
              emergency calls based on urgency and criticality. Government facilities, healthcare providers, businesses
              with perishable inventory, and other critical applications receive priority response. However, we maintain
              sufficient emergency service capacity to respond to all Pretoria customers promptly even during peak
              demand periods. Our commitment is ensuring every generator emergency receives professional attention and
              effective repairs as quickly as possible.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Preventative Maintenance Programs for Pretoria Generators
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Regular preventative maintenance is the most effective strategy for ensuring generator reliability when
              power fails. Generators that sit idle between load shedding events develop problems from fuel
              deterioration, battery discharge, cooling system corrosion, and lubrication breakdown. Our comprehensive
              maintenance programs prevent these issues through scheduled servicing, systematic inspections, and
              proactive component replacement before failures occur. Pretoria customers enrolled in our maintenance
              programs experience significantly fewer emergency breakdowns and enjoy greater confidence in their backup
              power systems.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Our maintenance services include engine oil and filter changes using appropriate lubricants for the
              generator engine type and operating conditions. Air filter servicing ensures adequate engine airflow for
              efficient combustion. Fuel system maintenance includes filter replacement, fuel quality testing, and
              treatment with appropriate stabilizers and additives. Cooling system inspection and servicing prevents
              overheating problems. Battery testing and maintenance ensures reliable starting. Electrical system
              inspection identifies loose connections, worn components, and developing faults before they cause
              failures.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              We also perform periodic load bank testing for standby generators to verify performance under actual load
              conditions and burn off carbon deposits that accumulate during light-load operation. Regular exercise runs
              prevent fuel system problems and ensure generators remain ready for emergency operation. Our maintenance
              programs include detailed service records, condition reports, and recommendations for future service or
              component replacements. We schedule maintenance at convenient times for your Pretoria location and provide
              reminder notifications when service is due. Maintenance customers also receive priority scheduling and
              preferential pricing on emergency repairs when needed.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Pretoria Suburbs and Areas We Service</h2>
            <p className="text-lg leading-relaxed mb-4">
              Our generator repair services cover the entire Tshwane Metropolitan Municipality including all Pretoria
              suburbs and surrounding areas. We provide comprehensive service throughout eastern suburbs including
              Menlyn, Lynnwood, Faerie Glen, Garsfontein, Moreleta Park, and Mooikloof. Central Pretoria areas including
              Hatfield, Brooklyn, Waterkloof, Muckleneuk, and Arcadia receive full service coverage. Western suburbs
              including Centurion, Eldoraigne, Erasmuskloof, and surrounding areas are completely covered. Northern
              areas including Montana, Wonderboom, and surrounding suburbs receive prompt service.
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
              Beyond these primary suburbs, we service generators throughout the greater Tshwane area including outlying
              regions. Our service area extends to cover neighboring municipalities when needed. Whether your Pretoria
              property is located in an established urban suburb, a developing residential area, an industrial zone, or
              a rural smallholding on the outskirts, our generator repair services are available to support your backup
              power needs. Contact us regardless of your specific Pretoria location - if you're within reasonable
              distance of the city, we can service your generator.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Generator Challenges Specific to Pretoria Climate</h2>
            <p className="text-lg leading-relaxed mb-4">
              Pretoria's climate presents specific considerations for generator operation and maintenance. The city's
              location at approximately 1,339 meters above sea level affects engine performance, particularly carburetor
              settings for petrol generators. Our technicians understand altitude-related adjustments and optimize
              generators for Pretoria's elevation. Summer brings afternoon thunderstorms that can introduce moisture
              into generator components requiring proper weatherproofing and drainage. We ensure generators installed at
              Pretoria locations include appropriate weather protection for local conditions.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Pretoria experiences significant temperature variations between hot summers and cold winters with
              occasional frost. These temperature extremes affect battery performance, fuel characteristics, and cold
              starting reliability. We test and maintain batteries to ensure reliable starting throughout seasonal
              temperature changes. Diesel generators require properly functioning glow plugs for cold-weather starting,
              which we test and replace as part of maintenance services. Fuel management is particularly important in
              Pretoria's climate to prevent wax formation in diesel fuel during winter and maintain gasoline quality in
              petrol generators stored during warm summers.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Why Choose Our Pretoria Generator Services</h2>
            <p className="text-lg leading-relaxed mb-4">
              Pretoria residents, businesses, and institutions choose our generator services because we combine
              specialized expertise with local knowledge and commitment to customer service. Our technicians focus
              exclusively on generator repair and maintenance, developing deep expertise across all brands and
              technologies. We maintain professional diagnostic equipment, specialized tools, and comprehensive parts
              inventory specifically for generator work. Our service vehicles bring professional repair capabilities
              directly to your Pretoria location.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              We provide transparent, competitive pricing with detailed written quotations before proceeding with
              repairs. Our rates remain consistent rather than inflating prices during load shedding emergencies when
              some companies charge premium rates. All our work is warranted, demonstrating confidence in our
              workmanship and the quality of parts we utilize. We communicate clearly throughout the service process,
              explaining technical issues in understandable terms and providing honest recommendations about repairs,
              maintenance, and generator lifecycle management.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Our reputation throughout Pretoria reflects our commitment to quality service, reliable repairs, and
              customer satisfaction. Many Pretoria customers have trusted our generator expertise for years, relying on
              us to maintain their critical backup power systems through professional maintenance and rapid emergency
              response when needed. Whether you require emergency repairs, routine maintenance, generator installation,
              or expert advice, we deliver professional services that keep your Pretoria backup power system reliable.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Contact Us for Generator Services Throughout Pretoria
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Don't let generator problems compromise your backup power reliability during Pretoria's ongoing load
              shedding challenges. Whether you need emergency repairs, routine maintenance, diagnostic services, or
              installation of new backup power systems, our generator specialists are ready to assist. We service all
              generator brands, sizes, and configurations throughout all Pretoria and Tshwane suburbs.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Call us today at{" "}
              <a href="tel:0693824908" className="text-primary font-semibold hover:underline">
                069 382 4908
              </a>{" "}
              to schedule service, discuss your generator requirements, or request emergency assistance. Our
              knowledgeable staff can answer questions about generator problems, provide guidance on maintenance
              requirements, schedule convenient service appointments, or dispatch emergency technicians when needed. You
              can also contact us via WhatsApp for quick responses to generator inquiries.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Experience professional generator repair services from Pretoria's backup power specialists. We understand
              the critical importance of reliable generators for Pretoria's government facilities, businesses, and
              residential properties facing ongoing power supply challenges. Contact us now and ensure your generator
              provides dependable backup power whenever load shedding affects your Pretoria location. Our expert
              technicians, comprehensive services, and commitment to customer satisfaction make us the trusted choice
              for generator repairs throughout Pretoria and Tshwane.
            </p>
          </section>
        </div>
      </div>

      <ContactCTASection />
    </>
  )
}
