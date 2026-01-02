import type { Metadata } from "next"
import { Phone, AlertCircle, Clock, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Breadcrumbs from "@/components/breadcrumbs"
import ContactCTASection from "@/components/contact-cta-section"
import StructuredData from "@/components/structured-data"
import Card from "@/components/ui/card"
import CardContent from "@/components/ui/card-content"

export const metadata: Metadata = {
  title: "★★★★★ 24/7 Emergency Generator Repairs Gauteng 2025 | Fast Response | 069 382 4908",
  description:
    "★★★★★ Urgent generator repairs 24/7 across Gauteng. Under 2-hour response. All brands. Emergency breakdown service. Call 069 382 4908 for immediate assistance now!",
  keywords: [
    "emergency generator repairs",
    "24 hour generator repairs",
    "urgent generator repairs",
    "generator breakdown service",
    "generator emergency service gauteng",
    "24/7 generator repairs johannesburg",
    "emergency generator repairs pretoria",
    "same day generator repairs",
  ],
  openGraph: {
    title: "24/7 Emergency Generator Repairs Gauteng | Fast Response",
    description:
      "Urgent generator repairs 24/7 across Gauteng. Under 2-hour response. Emergency breakdown service. Call 069 382 4908 now.",
    url: "https://generatorrepairservices.co.za/emergency-generator-repairs",
    siteName: "Generator Repair Services",
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://generatorrepairservices.co.za/emergency-generator-repairs",
  },
}

export default function EmergencyGeneratorRepairsPage() {
  const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Emergency Generator Repairs" }]

  return (
    <>
      <StructuredData data={{
  "@context": "https://schema.org",
  "@type": "EmergencyService",
  "name": "24/7 Emergency Generator Repairs",
  "serviceType": "Emergency Generator Repair",
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
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  },
  "description": "24/7 emergency generator repairs across Gauteng. Under 2-hour response time. All brands. Emergency breakdown service.",
  "url": "https://generatorrepairservices.co.za/emergency-generator-repairs",
  "availableChannel": {
    "@type": "ServiceChannel",
    "servicePhone": {
      "@type": "ContactPoint",
      "telephone": "069 382 4908",
      "availableLanguage": "English",
      "contactType": "Emergency"
    }
  }
}} />
      <Breadcrumbs items={breadcrumbs} />
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-destructive text-white px-6 py-3 rounded-full mb-4 animate-pulse text-lg font-bold">
            <AlertCircle className="h-6 w-6" />
            <span>EMERGENCY SERVICE ACTIVE 24/7</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">
            Generator Failed? <span className="text-destructive">We Respond in Under 2 Hours</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-2 text-pretty">
            Certified technicians dispatched immediately. Fully equipped vans. Same-visit repairs guaranteed.
          </p>
          <p className="text-lg font-semibold text-primary mb-6">
            ⚡ Average Emergency Response: 58 Minutes • Last Callout: 14 Minutes Ago
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            <Button size="lg" variant="destructive" className="h-16 px-10 text-xl" asChild>
              <a href="tel:0693824908">
                <Phone className="mr-2 h-6 w-6" />
                CALL NOW: 069 382 4908
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-16 px-10 text-xl border-2 bg-transparent" asChild>
              <a href="https://wa.me/27693824908">
                <svg className="mr-2 h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Emergency
              </a>
            </Button>
          </div>
          <div className="flex flex-wrap gap-4 justify-center text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              No Call-Out Fees
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              Parts On Board
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              6-Month Guarantee
            </span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-destructive/10 to-destructive/5 border-2 border-destructive/30 rounded-lg p-8 mb-12">
          <div className="flex items-start gap-4">
            <Clock className="h-10 w-10 text-destructive flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold text-destructive mb-3">Every Minute Costs You Money</h3>
              <p className="text-lg mb-4 leading-relaxed">
                Generator failures during load shedding mean <strong>zero backup power</strong>. Spoiled food. Security
                vulnerabilities. Lost business revenue. Frozen operations. The longer you wait, the more you lose.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-4 text-sm">
                <div className="bg-background/80 p-3 rounded">
                  <div className="font-bold text-destructive mb-1">Residential Loss</div>
                  <div>R500-R2,000 per day in spoiled food, security risks, discomfort</div>
                </div>
                <div className="bg-background/80 p-3 rounded">
                  <div className="font-bold text-destructive mb-1">Small Business</div>
                  <div>R5,000-R20,000 per day in lost revenue, staff downtime</div>
                </div>
                <div className="bg-background/80 p-3 rounded">
                  <div className="font-bold text-destructive mb-1">Industrial</div>
                  <div>R50,000+ per day in production stops, contract penalties</div>
                </div>
              </div>
              <p className="text-lg font-semibold">
                Our average emergency repair cost: <span className="text-destructive">R1,800-R3,200</span> — pays for
                itself in hours saved.
              </p>
              <div className="mt-4 pt-4 border-t border-destructive/20">
                <p className="font-bold text-lg">
                  Don't waste another minute. Call{" "}
                  <a href="tel:0693824908" className="text-destructive underline hover:no-underline">
                    069 382 4908
                  </a>{" "}
                  and we dispatch immediately.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="mb-12">
          <Card className="border-primary/30 bg-primary/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Emergency Repair Investment vs. Waiting Costs</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="bg-green-50 border-2 border-green-600 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-green-700 mb-4">✓ Call Us Now</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex justify-between">
                        <span>Emergency dispatch:</span>
                        <span className="font-semibold">R650</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Typical repair cost:</span>
                        <span className="font-semibold">R1,500-R2,800</span>
                      </li>
                      <li className="flex justify-between border-t pt-2">
                        <span className="font-bold">Total investment:</span>
                        <span className="font-bold text-green-700">R2,150-R3,450</span>
                      </li>
                      <li className="mt-4 pt-4 border-t text-green-700 font-semibold">Power restored in 2-4 hours ✓</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="bg-red-50 border-2 border-red-600 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-red-700 mb-4">✗ Wait Until Tomorrow</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex justify-between">
                        <span>Lost business (1 day):</span>
                        <span className="font-semibold">R5,000+</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Spoiled inventory:</span>
                        <span className="font-semibold">R1,500+</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Security/comfort cost:</span>
                        <span className="font-semibold">R500+</span>
                      </li>
                      <li className="flex justify-between border-t pt-2">
                        <span className="font-bold">Total losses:</span>
                        <span className="font-bold text-red-700">R7,000+</span>
                      </li>
                      <li className="mt-4 pt-4 border-t text-red-700 font-semibold">Still need repair anyway... ✗</li>
                    </ul>
                  </div>
                </div>
              </div>
              <p className="text-center mt-6 text-lg font-semibold">
                Emergency repairs pay for themselves within hours. The real cost is waiting.
              </p>
            </CardContent>
          </Card>
        </section>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">24/7 Emergency Generator Repair Services</h2>
            <p className="text-lg leading-relaxed mb-4">
              Generator failures never occur at convenient times. More often, generators fail precisely when you need
              them most - during power outages, load shedding events, storms, or other emergencies. When your home is
              plunged into darkness, your business loses critical systems, your data center faces downtime, or your
              facility experiences power loss, every minute without backup power matters. Our comprehensive 24/7
              emergency generator repair services address these critical situations with rapid response, expert
              diagnostics, and effective repairs that restore your backup power quickly.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              We understand the urgency and stress associated with generator emergencies. Extended power outages mean
              lost productivity for businesses, spoiled food and medications for homeowners, compromised security
              systems, failed sump pumps risking flooding, disabled medical equipment threatening health and safety, and
              countless other serious consequences. Our emergency repair service exists specifically to address these
              critical situations, providing the expertise, equipment, and parts needed to restore generator operation
              as quickly as possible.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Our emergency service covers all of Gauteng including Johannesburg, Pretoria, Sandton, Centurion, Midrand,
              Randburg, Roodepoort, Kempton Park, Boksburg, Benoni, and all surrounding suburbs. We maintain
              strategically located service vehicles equipped with comprehensive diagnostic equipment, common
              replacement parts, specialized tools, and safety gear enabling our technicians to diagnose and repair most
              generator problems on the first emergency visit. Our technicians carry spare parts for all major generator
              brands including batteries, spark plugs, filters, fuel pumps, alternators, voltage regulators, control
              modules, and many other components that commonly fail.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Common Generator Emergencies We Handle</h2>
            <p className="text-lg leading-relaxed mb-4">
              Generator emergencies manifest in various ways, each requiring specific diagnostic approaches and repair
              techniques. Understanding common emergency scenarios helps homeowners and businesses recognize when
              immediate professional assistance is needed. Our emergency technicians have extensive experience
              addressing all types of generator failures under urgent conditions.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Generator Won't Start During Power Outage</h3>
            <p className="text-lg leading-relaxed mb-4">
              The most common and frustrating emergency involves generators that fail to start when power fails. You
              flip the switch or press the start button, but nothing happens - or the engine cranks but won't start.
              Starting failures stem from numerous causes including dead batteries preventing starter motor operation,
              fuel delivery problems from empty tanks or clogged lines, spark system failures preventing ignition,
              automatic transfer switch problems preventing starting signals, control system faults, or engine
              mechanical issues. The challenge during emergencies is rapidly identifying the specific cause among these
              possibilities and implementing effective repairs under pressure.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Our emergency technicians follow systematic diagnostic procedures even under urgent conditions. We verify
              fuel availability and delivery, test battery voltage and cranking current, check spark plug operation,
              inspect control system indicators and fault codes, and test starter motor function. This methodical
              approach identifies problems quickly, enabling targeted repairs. Common emergency repairs include battery
              replacement or charging, fuel system priming after running out of fuel, spark plug replacement, control
              circuit repairs, and starter motor repairs or replacement. Our service vehicles carry replacement
              components enabling most starting problem repairs on-site during the emergency call.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Generator Running But No Power Output</h3>
            <p className="text-lg leading-relaxed mb-4">
              Another critical emergency scenario involves generators that start and run normally but produce no
              electrical power output. The engine runs smoothly but your lights remain dark and appliances don't
              operate. This situation indicates alternator problems, automatic transfer switch failures, circuit breaker
              trips, or severe electrical faults. While less common than starting failures, no-power situations are
              equally urgent as the generator appears operational yet provides no backup power.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Diagnosing no-power emergencies requires systematic electrical testing. We verify generator voltage output
              at the alternator terminals using multimeters, test circuit breaker and switch positions, check automatic
              transfer switch operation and load transfer, inspect main power connections and terminals, and test for
              internal alternator failures including AVR problems, diode failures, or winding damage. Emergency repairs
              depend on the specific fault but may include circuit breaker reset, transfer switch repairs, AVR
              replacement, alternator repairs, or connection repairs. Some alternator failures require workshop repairs,
              in which cases we can arrange temporary generator rentals to maintain power while repairs proceed.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
              Generator Shuts Down Shortly After Starting
            </h3>
            <p className="text-lg leading-relaxed mb-4">
              Generators that start but shut down after several seconds or minutes present particularly frustrating
              emergency situations. The brief operation suggests the generator has some functionality, but safety
              shutdown systems detect problems and stop the engine. Common causes include low oil pressure triggering
              safety shutdowns, overheating from cooling system problems, fuel delivery issues causing starvation after
              startup, exhaust system blockages, or control system faults triggering false shutdowns.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Our emergency diagnostics for shutdown problems focus on identifying which safety system activated and
              why. We check engine oil level and pressure, verify cooling system function and coolant levels, test fuel
              delivery and filter condition, inspect exhaust system for blockages, and review control system fault codes
              when available. Emergency repairs address the underlying problem - adding oil if low, clearing exhaust
              blockages, replacing fuel filters, repairing cooling system leaks, or addressing control system faults.
              Understanding generator safety systems enables our technicians to diagnose shutdown problems efficiently
              even under emergency conditions.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
              Electrical Sparks, Smoke, or Burning Smells
            </h3>
            <p className="text-lg leading-relaxed mb-4">
              Electrical sparks, smoke, or burning smells from a generator represent serious emergencies requiring
              immediate shutdown and professional assistance. These symptoms indicate electrical faults, overheating
              components, or imminent failures that could cause fires or electrocution hazards. Common causes include
              short circuits from damaged wiring insulation, overloaded circuits exceeding generator capacity, failed
              electrical components, loose connections creating arcing, or control board failures.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              If you observe sparks, smoke, or smell burning odors from your generator, immediately shut it down and
              call our emergency service at{" "}
              <a href="tel:0693824908" className="text-primary font-semibold hover:underline">
                069 382 4908
              </a>
              . Do not attempt to restart the generator. Our technicians will respond quickly to assess the situation,
              identify the electrical fault, and perform necessary repairs safely. These situations require particular
              caution due to fire and electrocution risks. Our technicians follow strict safety protocols when
              diagnosing and repairing electrical faults, protecting both themselves and your property.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
              Unusual Noises or Vibration During Operation
            </h3>
            <p className="text-lg leading-relaxed mb-4">
              Generators that suddenly develop loud knocking, rattling, grinding, or excessive vibration indicate
              serious mechanical problems requiring immediate shutdown and emergency repair. Continuing to operate
              generators with severe mechanical symptoms can transform repairable problems into catastrophic failures
              requiring engine replacement. Common causes of unusual noises include low oil causing bearing damage,
              loose or broken engine components, failed mufflers or exhaust components, damaged alternator bearings, or
              loose mounting systems.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              When experiencing unusual noises or vibration, shut down the generator immediately and call for emergency
              service. Our technicians will inspect the generator thoroughly to identify the source of the problem
              before attempting restart. Mechanical problems may require workshop repairs, but early detection through
              emergency service calls often prevents minor issues from escalating into major component failures. We
              provide honest assessments of mechanical problems and repair options, helping you make informed decisions
              about repair versus replacement when facing major mechanical damage.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Our Emergency Response Process</h2>
            <p className="text-lg leading-relaxed mb-4">
              When you call our 24/7 emergency hotline at{" "}
              <a href="tel:0693824908" className="text-primary font-semibold hover:underline">
                069 382 4908
              </a>
              , you'll speak directly with a qualified technician, not an answering service or call center. This direct
              communication enables our technician to gather important information about your generator problem, provide
              immediate troubleshooting guidance if appropriate, and dispatch the nearest available service vehicle to
              your location. We ask targeted questions about generator symptoms, recent operating history, and any error
              messages or unusual observations to help our technician prepare appropriate diagnostic equipment and parts
              before arrival.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Our service vehicles are strategically positioned throughout Gauteng to enable rapid response times. We
              typically arrive within 1-2 hours for emergency calls in major areas including Johannesburg, Pretoria,
              Sandton, and Centurion, with slightly longer response times to outlying areas depending on traffic
              conditions and distance. Upon arrival, our technician immediately begins systematic diagnostics following
              proven procedures to identify the root cause of the generator failure. Even under emergency pressure, we
              maintain methodical diagnostic approaches because accurate diagnosis is essential for effective repairs.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Once we identify the problem, our technician will explain the issue clearly, describe necessary repairs,
              and provide pricing information before proceeding with repairs. For urgent situations where extended
              generator downtime is unacceptable, our emergency technicians have authorization to proceed with necessary
              repairs immediately after confirming pricing approval. We carry common replacement parts enabling most
              emergency repairs on-site without delays for parts ordering. For problems requiring components we don't
              stock on service vehicles, we can often source parts from suppliers even during after-hours emergencies,
              or arrange temporary generator rentals to maintain your power while obtaining parts for permanent repairs.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              After completing emergency repairs, we thoroughly test generator operation including starting tests, load
              testing when possible, voltage and frequency verification, and extended runtime testing to ensure reliable
              operation before departing. We also provide recommendations about maintenance, operating practices, or
              component replacements that may prevent future emergencies. Our goal is not just restoring generator
              operation but ensuring reliable long-term performance.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Preventing Generator Emergencies Through Maintenance
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              While our emergency repair services provide critical support when generators fail, preventing emergencies
              through regular maintenance is far preferable to emergency repairs during power outages. Most generator
              failures that we address during emergency calls could have been prevented through routine maintenance and
              proactive servicing. We strongly advocate for preventative maintenance programs that keep generators
              reliable and minimize emergency situations.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Regular maintenance services include oil and filter changes preventing engine damage, spark plug
              replacement ensuring reliable starting, fuel system servicing preventing carburetor clogs and fuel
              delivery problems, battery testing and maintenance preventing starting failures, cooling system inspection
              preventing overheating, and comprehensive inspections identifying problems before they cause failures. We
              recommend maintenance scheduling based on generator runtime hours, calendar intervals (typically 6-12
              months for standby generators), and manufacturer recommendations.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Load bank testing is particularly valuable for standby generators that run infrequently. Regular exercise
              under load prevents fuel system problems, verifies performance, and identifies developing issues before
              they cause emergency failures. We offer load bank testing services as part of comprehensive maintenance
              programs. Additionally, fuel quality management prevents many generator problems. Old or contaminated fuel
              causes starting difficulties and fuel system damage. We recommend fuel stabilizer use, periodic fuel
              replacement, and tank cleaning to maintain fuel quality in generators that experience long storage periods
              between uses.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Customers enrolled in our maintenance programs receive priority scheduling for routine service and
              priority response during emergencies. Regular maintenance customers also receive service history
              documentation, reminder notifications when service is due, and preferential pricing on emergency calls.
              These programs provide peace of mind knowing your generator receives proper care and expert support is
              available 24/7 if problems occur despite regular maintenance.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Emergency Situations Requiring Professional Service
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              While some minor generator problems can be addressed through basic troubleshooting, many situations
              require immediate professional assistance. Understanding when to call for emergency service versus
              attempting DIY solutions protects both your safety and your generator investment. Always call for
              professional emergency service in the following situations: any electrical sparks, smoke, or burning
              smells; fuel leaks or strong gasoline/diesel odors; loud knocking, grinding, or unusual mechanical noises;
              generators that won't start after basic troubleshooting; generators producing no power output; repeated
              circuit breaker trips or electrical faults; overheating or coolant leaks; control panel error messages you
              don't understand; or any situation where you feel unsafe or uncertain.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Generator repair involves high voltages, rotating machinery, hot components, flammable fuels, and
              potential carbon monoxide exposure. Safety must be the primary consideration during any generator work.
              Our professional technicians have training, experience, and safety equipment to work on generators safely.
              DIY repairs by unqualified individuals risk electrocution, fire, equipment damage, and voided warranties.
              When facing generator emergencies, professional assistance is not just convenient - it's essential for
              safety and effective repairs.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Why Choose Our Emergency Generator Repair Services</h2>
            <p className="text-lg leading-relaxed mb-4">
              When facing generator emergencies, selecting the right service provider is crucial for rapid restoration
              of backup power. Our emergency services distinguish themselves through genuine 24/7 availability with
              actual technicians on call, not answering services that schedule callbacks during business hours. We
              maintain strategic service vehicle deployment throughout Gauteng enabling rapid response times. Our
              technicians bring specialized generator expertise, not general electrical or mechanical knowledge. We
              invest in comprehensive diagnostic equipment, specialized tools, and extensive parts inventory
              specifically for generator repair work.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Our emergency technicians have authorization to perform necessary repairs on-site after providing pricing
              information, eliminating delays for approvals during critical situations. We maintain transparent pricing
              even during emergencies, providing clear explanations of problems and repair costs before proceeding. Our
              service vehicles function as mobile workshops, carrying diagnostic equipment and common replacement parts
              enabling completion of most repairs on the first emergency visit without return trips.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              We warranty all emergency repairs despite the urgent circumstances, standing behind our workmanship and
              the quality of replacement parts. Customer testimonials from previous emergency situations demonstrate our
              commitment to rapid response, effective repairs, and professional service even under pressure. We
              understand the stress and urgency of generator emergencies, and we work efficiently while maintaining
              quality standards and safety protocols. Our goal is restoring your backup power quickly while ensuring
              repairs will provide long-term reliability.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Emergency Generator Services Coverage Area</h2>
            <p className="text-lg leading-relaxed mb-4">
              Our 24/7 emergency generator repair services cover all of Gauteng province with fastest response times in
              major metropolitan areas. We provide emergency service throughout Johannesburg including all suburbs,
              Pretoria and surrounding areas, Sandton and the northern suburbs, Centurion, Midrand, Randburg,
              Roodepoort, Fourways, Kempton Park, Boksburg, Benoni, Germiston, Edenvale, Bedfordview, and all
              surrounding suburbs and industrial areas.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Response times vary based on your location, traffic conditions, and technician availability, but we
              typically arrive within 1-2 hours throughout the greater Gauteng area. During widespread power outages
              affecting multiple customers simultaneously, response times may be extended, but we prioritize emergency
              calls based on urgency and criticality of the situation. Critical facilities like hospitals, data centers,
              and businesses with perishable inventory receive priority emergency response.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Contact Us for Emergency Generator Repairs</h2>
            <p className="text-lg leading-relaxed mb-4">
              Don't let generator failures leave you without power during emergencies. Our 24/7 emergency repair
              services are standing by to provide rapid response and expert repairs when you need them most. Whether
              you're experiencing complete generator failure, starting problems, power output issues, unusual noises,
              electrical faults, or any other generator emergency, our qualified technicians are ready to help.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Call our emergency hotline now at{" "}
              <a href="tel:0693824908" className="text-primary font-semibold hover:underline">
                069 382 4908
              </a>{" "}
              for immediate assistance. Our emergency line is answered 24 hours a day, 7 days a week, 365 days a year by
              qualified technicians ready to respond to your generator emergency. You can also contact us via WhatsApp
              for urgent assistance. Don't wait until the next power outage to address generator problems - call now and
              ensure your backup power system is ready when you need it most.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              For non-emergency service scheduling, maintenance programs, or general generator questions, you can also
              reach us during business hours at the same number. We're here to support all your generator service needs
              from emergency repairs to routine maintenance, ensuring your backup power system provides reliable
              operation whenever power fails. Contact us today and experience professional emergency generator repair
              services from Gauteng's generator specialists.
            </p>
          </section>
        </div>
      </div>

      <ContactCTASection />
    </>
  )
}
