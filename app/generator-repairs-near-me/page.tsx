import type { Metadata } from "next"
import { Phone, MapPin, Clock, CheckCircle2, Shield, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Breadcrumbs from "@/components/breadcrumbs"
import ContactCTASection from "@/components/contact-cta-section"
import SuburbsGrid from "@/components/suburbs-grid"

export const metadata: Metadata = {
  title: "Generator Repairs Near Me | Local 24/7 Service | 069 382 4908",
  description:
    "Looking for generator repairs near you? Fast local service across Gauteng. Same-day repairs, certified technicians, 24/7 emergency support. Call 069 382 4908 now.",
  keywords:
    "generator repairs near me, local generator repair, generator service near me, emergency generator repair nearby, generator technician near me",
}

export default function GeneratorRepairsNearMePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Generator Repairs Near Me" }]} />

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4 font-semibold">
            <MapPin className="h-5 w-5" />
            <span>Serving All Gauteng • Under 2-Hour Arrival</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Generator Repairs Near You, <span className="text-primary">Fast.</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-2 text-pretty">
            Local certified technicians across Johannesburg, Pretoria, Sandton, Centurion & all Gauteng suburbs
          </p>
          <p className="text-lg font-semibold text-primary mb-8">
            ⚡ Currently servicing customers in:{" "}
            <span className="text-foreground">Sandton, Fourways, Centurion, Pretoria East</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button size="lg" className="text-lg h-14 px-8" asChild>
              <a href="tel:0693824908">
                <Phone className="mr-2 h-5 w-5" />
                Call Local: 069 382 4908
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg h-14 px-8 border-2 bg-transparent" asChild>
              <a href="https://wa.me/27693824908" target="_blank" rel="noopener noreferrer">
                WhatsApp Your Location
              </a>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            📍 Technicians currently in your area • Average arrival:{" "}
            <strong className="text-foreground">58 minutes</strong> • Same-day service available
          </p>
        </div>

        <section className="mb-12">
          <Card className="border-2 border-primary bg-gradient-to-br from-primary/10 to-transparent">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Get an Instant Phone Quote</h2>
              <p className="text-lg mb-6">
                Call now and describe your generator problem. Our technicians can often diagnose over the phone and give
                you an accurate repair estimate <strong>before we even arrive</strong>.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-6 text-left">
                <div className="bg-background p-4 rounded-lg border">
                  <div className="font-bold text-primary mb-2">Step 1: Call</div>
                  <div className="text-sm">Describe symptoms to our technician</div>
                </div>
                <div className="bg-background p-4 rounded-lg border">
                  <div className="font-bold text-primary mb-2">Step 2: Quote</div>
                  <div className="text-sm">Get likely diagnosis & cost estimate</div>
                </div>
                <div className="bg-background p-4 rounded-lg border">
                  <div className="font-bold text-primary mb-2">Step 3: Fixed</div>
                  <div className="text-sm">Technician arrives & completes repair</div>
                </div>
              </div>
              <Button size="lg" className="text-xl h-14 px-10" asChild>
                <a href="tel:0693824908">
                  <Phone className="mr-2 h-6 w-6" />
                  069 382 4908 - Get Quote Now
                </a>
              </Button>
              <p className="mt-4 text-sm text-muted-foreground">
                No obligation • Honest assessments • Transparent pricing • Many issues resolved under R2,000
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Introduction */}
        <section className="mb-12">
          <p className="text-lg leading-relaxed mb-6">
            When your generator breaks down, you need a reliable repair service near you—fast. Whether you're
            experiencing a complete power failure, unusual noises, starting problems, or reduced output, our local team
            of certified generator technicians is ready to help. We provide comprehensive generator repair services
            across Gauteng, with technicians strategically located to reach you quickly no matter where you are.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Searching for "generator repairs near me" brings you to the right place. We understand that generator
            problems rarely happen at convenient times, which is why we offer 24/7 emergency repair services throughout
            Johannesburg, Pretoria, Sandton, Centurion, and surrounding areas. Our rapid response team can typically
            reach your location within 60 minutes for emergency situations, ensuring minimal disruption to your home or
            business operations.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            With over 15 years of experience serving the Gauteng community, we've built our reputation on reliable,
            honest service and expert technical knowledge. Our technicians are equipped with fully stocked service
            vehicles, carrying the most common spare parts and diagnostic tools needed to complete most repairs on the
            first visit. We service all major generator brands including Honda, Yamaha, Champion, Briggs & Stratton,
            Kohler, Cummins, Perkins, and more.
          </p>
        </section>

        {/* Why Choose Local */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Why Choose Local Generator Repair Services?</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Faster Response Times
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Local technicians mean shorter travel distances and quicker arrival times. For emergency repairs, we
                  aim to reach your location within 60 minutes. Even for scheduled maintenance, our proximity ensures we
                  can accommodate your preferred timing with flexible scheduling options that work around your daily
                  routine.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Knowledge of Local Conditions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We understand Gauteng's unique challenges—from Highveld altitude effects on engine performance to the
                  impact of local power grid instability on generator usage patterns. Our experience with local weather
                  conditions, from intense summer thunderstorms to dry winter conditions, ensures we can diagnose and
                  prevent region-specific issues.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Community Reputation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  As a local business, our reputation is built on satisfied customers in your community. We rely on
                  word-of-mouth referrals and positive reviews from your neighbors and local businesses. This
                  accountability ensures we consistently deliver honest, high-quality service at fair prices because our
                  success depends on maintaining the trust of the community we serve.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Ongoing Support Relationship
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Local service means building long-term relationships with our customers. We maintain detailed service
                  histories for all our clients, enabling us to provide personalized maintenance recommendations and
                  quickly diagnose recurring issues. Many of our customers have trusted us with their generator care for
                  over a decade, relying on our familiar faces and consistent service quality.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Service Coverage */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Our Service Coverage Across Gauteng</h2>
          <p className="text-lg leading-relaxed mb-6">
            We provide comprehensive generator repair services throughout the Gauteng province, with technicians
            positioned strategically to ensure rapid response times across all areas. Our service coverage includes
            major cities, suburbs, industrial areas, and rural communities throughout the region.
          </p>

          <div className="bg-muted p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">Primary Service Areas:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2 text-primary">Johannesburg Region</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>Sandton & Surrounding Suburbs</li>
                  <li>Randburg & Northern Suburbs</li>
                  <li>Roodepoort & Western Areas</li>
                  <li>Johannesburg CBD & Inner City</li>
                  <li>Soweto & Southern Areas</li>
                  <li>Midrand & Surrounding Areas</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-primary">Pretoria Region</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>Centurion & Surrounding Areas</li>
                  <li>Pretoria East & Eastern Suburbs</li>
                  <li>Pretoria North & Northern Areas</li>
                  <li>Pretoria CBD & Central Areas</li>
                  <li>Pretoria West & Western Suburbs</li>
                  <li>Pretoria South & Southern Areas</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            Our coverage extends beyond these primary areas to include surrounding towns and communities throughout
            Gauteng. Whether you're located in an established suburb, an industrial park, a gated estate, or a rural
            property, our team can reach you promptly with the expertise and equipment needed to resolve your generator
            issues.
          </p>
        </section>

        {/* Common Generator Problems */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Common Generator Problems We Fix Near You</h2>
          <p className="text-lg leading-relaxed mb-6">
            Our local technicians are experienced in diagnosing and repairing all types of generator problems, from
            simple maintenance issues to complex electrical and mechanical failures. Here are the most common problems
            we encounter and repair daily across Gauteng:
          </p>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Starting Problems and Failure to Start</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  One of the most common issues we're called to address is generators that won't start or have
                  difficulty starting. This problem can stem from various causes including dead batteries, faulty
                  starter motors, fuel delivery issues, or ignition system failures. Our technicians carry diagnostic
                  equipment to quickly identify the root cause and implement the appropriate repair.
                </p>
                <p className="text-muted-foreground">
                  Battery-related starting problems are particularly common, especially after extended periods of
                  disuse. We test battery voltage and charging systems, cleaning corroded terminals and replacing
                  batteries when necessary. For fuel-related starting issues, we check fuel quality, inspect fuel
                  filters, examine fuel pumps, and clean or rebuild carburetors as needed.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Power Output Problems and Voltage Irregularities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  Generators that run but don't produce adequate power or produce unstable voltage present serious
                  concerns for equipment safety. These issues can damage sensitive electronics and appliances connected
                  to your generator. Common causes include failing voltage regulators, worn brushes in alternators,
                  dirty slip rings, or problems with the automatic voltage regulator (AVR).
                </p>
                <p className="text-muted-foreground">
                  Our technicians use specialized testing equipment to measure voltage output, frequency stability, and
                  load performance. We can repair or replace voltage regulators, service alternator components, adjust
                  governor settings, and recalibrate control systems to restore proper power output and protect your
                  connected equipment.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Fuel System Issues and Contamination</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  Fuel system problems are widespread in South Africa due to fuel quality variations and extended
                  storage periods between load-shedding events. Contaminated fuel, clogged fuel filters, faulty fuel
                  pumps, and carburetor issues can prevent proper engine operation. Old fuel can develop varnish and gum
                  deposits that clog jets and passages in carburetors.
                </p>
                <p className="text-muted-foreground">
                  We provide complete fuel system cleaning and repair services, including fuel tank cleaning and
                  restoration, fuel filter replacement, carburetor cleaning and rebuilding, fuel pump testing and
                  replacement, and fuel line inspection and replacement. We also advise on proper fuel storage and
                  stabilization practices to prevent future contamination issues.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Overheating and Cooling System Failures</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  Generator overheating is a serious problem that can cause catastrophic engine damage if not addressed
                  promptly. Common causes include low coolant levels, blocked cooling fins, faulty cooling fans,
                  restricted air flow, contaminated oil, or thermostat failures. Gauteng's hot summer conditions and
                  high altitude can exacerbate overheating problems.
                </p>
                <p className="text-muted-foreground">
                  Our repair services address all cooling system components. We inspect and clean cooling fins, verify
                  cooling fan operation, check and replenish coolant levels, replace thermostats, clear ventilation
                  obstructions, and ensure proper air flow. Regular cooling system maintenance can prevent expensive
                  engine repairs and extend generator lifespan significantly.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Unusual Noises and Mechanical Problems</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  Unusual sounds from your generator often indicate developing mechanical problems that require
                  immediate attention. Knocking sounds may indicate bearing wear or internal engine damage, grinding
                  noises might suggest starter motor problems, rattling could indicate loose components or exhaust
                  issues, and squealing often points to belt problems.
                </p>
                <p className="text-muted-foreground">
                  Our experienced technicians can diagnose the source of unusual noises through careful listening and
                  inspection. We repair or replace worn bearings, tighten loose components, adjust or replace drive
                  belts, repair exhaust systems, and address any mechanical wear before it leads to complete failure.
                  Early intervention based on unusual sounds can save significant repair costs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Electrical System and Control Panel Issues</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  Modern generators feature sophisticated electrical systems and control panels that can develop various
                  faults. Problems include malfunctioning automatic transfer switches, failed circuit breakers, wiring
                  deterioration, control panel errors, sensor failures, and communication issues with monitoring
                  systems. These problems require specialized diagnostic equipment and electrical expertise.
                </p>
                <p className="text-muted-foreground">
                  Our technicians are trained in generator electrical systems and use advanced diagnostic tools to
                  identify electrical faults. We repair wiring issues, replace faulty sensors and switches, reprogram
                  control panels, test and repair automatic transfer switches, and ensure all safety systems function
                  correctly. Proper electrical system maintenance prevents unexpected shutdowns and protects connected
                  equipment.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Our Repair Process */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Our Local Generator Repair Process</h2>
          <p className="text-lg leading-relaxed mb-6">
            When you contact us for generator repairs, we follow a systematic process designed to diagnose problems
            accurately, provide transparent pricing, and complete repairs efficiently. Here's what you can expect when
            you work with our local team:
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Initial Contact and Dispatch</h3>
                <p className="text-muted-foreground">
                  Contact us by phone at 069 382 4908 or via WhatsApp. We'll ask about your generator symptoms,
                  location, and urgency level. For emergency situations, we dispatch the nearest available technician
                  immediately. For scheduled appointments, we arrange a convenient time that works with your schedule.
                  Our friendly staff will provide an estimated arrival time and technician details.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">On-Site Assessment and Diagnosis</h3>
                <p className="text-muted-foreground">
                  Our certified technician arrives with a fully equipped service vehicle containing diagnostic tools and
                  common spare parts. They perform a comprehensive assessment, testing all systems to identify the root
                  cause of problems. We use diagnostic equipment to measure voltage output, test battery systems,
                  analyze fuel quality, check compression, inspect cooling systems, and evaluate all mechanical and
                  electrical components.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Transparent Quote and Explanation</h3>
                <p className="text-muted-foreground">
                  After diagnosis, we provide a detailed explanation of the problems found and a transparent quote for
                  all necessary repairs. We explain exactly what needs to be done and why, outlining parts and labor
                  costs separately. There are no hidden fees or surprise charges. We'll discuss repair options if
                  alternatives exist and answer all your questions before beginning any work.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Expert Repair Work</h3>
                <p className="text-muted-foreground">
                  Once you approve the quote, our technician begins repair work immediately if parts are available on
                  the service vehicle. We use quality replacement parts and follow manufacturer specifications for all
                  repairs. Our technicians work efficiently while maintaining high quality standards, keeping you
                  informed of progress throughout the repair process.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                5
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Testing and Quality Verification</h3>
                <p className="text-muted-foreground">
                  After completing repairs, we thoroughly test your generator under load conditions to verify all
                  systems function correctly. We check voltage output stability, listen for unusual sounds, monitor
                  operating temperatures, verify automatic transfer switch operation if applicable, and ensure all
                  safety systems work properly. Your generator isn't considered repaired until it passes our
                  comprehensive testing protocol.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                6
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Documentation and Maintenance Advice</h3>
                <p className="text-muted-foreground">
                  We provide detailed documentation of all repairs performed, parts replaced, and tests conducted.
                  You'll receive maintenance recommendations to prevent future problems and extend your generator's
                  lifespan. We explain proper operating procedures and answer questions about generator care. For
                  business clients, we maintain comprehensive service records for compliance and warranty purposes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Benefits of Choosing Our Local Service</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Rapid Emergency Response</h3>
                    <p className="text-muted-foreground">
                      24/7 emergency service with typical response times under 60 minutes for urgent situations across
                      Gauteng.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Certified Expert Technicians</h3>
                    <p className="text-muted-foreground">
                      All our technicians are certified and experienced with ongoing training in the latest generator
                      technologies and repair techniques.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Fully Stocked Service Vehicles</h3>
                    <p className="text-muted-foreground">
                      Our mobile workshops carry common spare parts and professional diagnostic equipment for efficient
                      first-visit repairs.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Transparent Pricing</h3>
                    <p className="text-muted-foreground">
                      Detailed quotes before work begins with no hidden fees or surprise charges. You always know
                      exactly what you're paying for.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">All Brands Serviced</h3>
                    <p className="text-muted-foreground">
                      We repair and service all major generator brands including Honda, Yamaha, Champion, Kohler,
                      Cummins, Perkins, and more.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Quality Guarantee</h3>
                    <p className="text-muted-foreground">
                      All our repair work is guaranteed. We stand behind our workmanship and use quality replacement
                      parts for reliable, long-lasting repairs.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Service Areas Grid */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Areas We Service Near You</h2>
          <SuburbsGrid />
        </section>

        {/* Call to Action */}
        <ContactCTASection
          title="Need Generator Repairs Near You?"
          description="Contact us now for fast, reliable generator repair services. Our local technicians are ready to help."
        />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Generator Repairs Near Me",
            provider: {
              "@type": "LocalBusiness",
              name: "Generator Repair Services",
              telephone: "069-382-4908",
              areaServed: {
                "@type": "State",
                name: "Gauteng, South Africa",
              },
            },
            areaServed: [
              {
                "@type": "City",
                name: "Johannesburg",
              },
              {
                "@type": "City",
                name: "Pretoria",
              },
              {
                "@type": "City",
                name: "Sandton",
              },
              {
                "@type": "City",
                name: "Centurion",
              },
            ],
            availableChannel: {
              "@type": "ServiceChannel",
              servicePhone: {
                "@type": "ContactPoint",
                telephone: "+27-69-382-4908",
                contactType: "Customer Service",
                availableLanguage: ["English"],
                areaServed: "ZA",
              },
            },
          }),
        }}
      />
    </>
  )
}
