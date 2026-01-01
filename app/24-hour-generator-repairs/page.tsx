import type { Metadata } from "next"
import { Phone, Clock, AlertTriangle, Shield, Zap, CheckCircle2, Timer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Breadcrumbs from "@/components/breadcrumbs"
import ContactCTASection from "@/components/contact-cta-section"

export const metadata: Metadata = {
  title: "24 Hour Generator Repairs | Emergency Service | Call 069 382 4908",
  description:
    "24/7 emergency generator repairs across Gauteng. Rapid response team available day and night. When your generator fails, we answer. Call 069 382 4908 anytime.",
  keywords:
    "24 hour generator repairs, 24/7 generator service, emergency generator repair, after hours generator repairs, weekend generator service",
}

export default function TwentyFourHourGeneratorRepairsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "24 Hour Generator Repairs" }]} />

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <Alert className="mb-8 border-destructive bg-destructive/10">
          <AlertTriangle className="h-5 w-5 text-destructive" />
          <AlertDescription className="text-lg">
            <strong>Generator Emergency Right Now?</strong> Join 5,000+ customers who trust our 24/7 service. Human
            answers instantly, technician dispatched in minutes. Call{" "}
            <a href="tel:0693824908" className="font-bold underline">
              069 382 4908
            </a>
          </AlertDescription>
        </Alert>

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full mb-4 font-bold text-lg">
            <Clock className="h-6 w-6" />
            <span>LIVE 24/7/365 - NEVER CLOSED</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            24 Hour Generator Repairs - <span className="text-primary">Guaranteed Response</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-2 text-pretty">
            Real humans answer 24/7. Certified technicians on-call across Gauteng. Under 2-hour arrival guaranteed.
          </p>
          <p className="text-lg font-semibold mb-8">
            🎯 <span className="text-primary">98% First Visit Fix Rate</span> • Last Emergency Call:{" "}
            <span className="text-destructive">9 Minutes Ago</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button size="lg" className="text-xl h-16 px-10" asChild>
              <a href="tel:0693824908">
                <Phone className="mr-2 h-6 w-6" />
                Emergency: 069 382 4908
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-xl h-16 px-10 border-2 bg-transparent" asChild>
              <a href="https://wa.me/27693824908" target="_blank" rel="noopener noreferrer">
                <AlertTriangle className="mr-2 h-6 w-6" />
                WhatsApp 24/7
              </a>
            </Button>
          </div>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <span className="flex items-center gap-1 text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              No After-Hours Surcharge
            </span>
            <span className="flex items-center gap-1 text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              Same-Day Parts Available
            </span>
            <span className="flex items-center gap-1 text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              All Major Brands
            </span>
          </div>
        </div>

        <section className="mb-12">
          <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Why Call Our 24-Hour Service Right Now?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-2xl font-bold">
                    1
                  </div>
                  <h3 className="font-bold mb-2">Human Answers Instantly</h3>
                  <p className="text-sm text-muted-foreground">
                    No voicemail, no callbacks. Speak to a qualified technician who can help immediately—even provide
                    phone diagnostics.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-2xl font-bold">
                    2
                  </div>
                  <h3 className="font-bold mb-2">Technician Dispatched in Minutes</h3>
                  <p className="text-sm text-muted-foreground">
                    On-call rotation across Gauteng. Nearest technician gets your location and departs immediately.
                    Typical arrival: 58 minutes.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-2xl font-bold">
                    3
                  </div>
                  <h3 className="font-bold mb-2">Fixed Tonight, Not Next Week</h3>
                  <p className="text-sm text-muted-foreground">
                    Fully equipped vans carry 200+ common parts. 98% of repairs completed same visit—even at 3 AM.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Emergency Alert Banner */}
        {/* <Alert className="mb-8 border-destructive bg-destructive/10">
          <AlertTriangle className="h-5 w-5 text-destructive" />
          <AlertDescription className="text-lg">
            <strong>Emergency Generator Breakdown?</strong> We're available 24/7 to restore your power. Call{" "}
            <a href="tel:0693824908" className="font-bold underline">
              069 382 4908
            </a>{" "}
            now for immediate assistance.
          </AlertDescription>
        </Alert> */}

        {/* Hero Section */}
        {/* <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Clock className="h-5 w-5" />
            <span className="font-semibold">Open 24 Hours, 7 Days a Week</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">24 Hour Generator Repairs Across Gauteng</h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Emergency Generator Repair Services Available Day and Night - No Call-Out Fees After Hours
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg">
              <a href="tel:0693824908">
                <Phone className="mr-2 h-5 w-5" />
                Emergency: 069 382 4908
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg bg-transparent">
              <a href="https://wa.me/27693824908" target="_blank" rel="noopener noreferrer">
                <AlertTriangle className="mr-2 h-5 w-5" />
                WhatsApp Emergency Line
              </a>
            </Button>
          </div>
        </div> */}

        {/* Introduction */}
        <section className="mb-12">
          <p className="text-lg leading-relaxed mb-6">
            Generator breakdowns don't follow business hours, and neither do we. Our 24-hour generator repair service
            ensures you're never left without power support, regardless of when problems occur. Whether it's 2 AM on a
            Sunday or during a major holiday, our emergency response team is standing by to take your call and dispatch
            a certified technician to your location anywhere in Gauteng.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            With South Africa's ongoing power challenges, reliable generator operation is critical for homes and
            businesses alike. A generator failure during load-shedding can leave you completely without power,
            disrupting operations, compromising security systems, affecting refrigeration, and creating significant
            inconvenience. Our round-the-clock emergency service exists specifically to address these urgent situations
            with the rapid response and expert repairs you need.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            We understand that generator emergencies create stress and urgency. Our 24-hour service is designed to
            provide peace of mind, knowing that expert help is always just a phone call away. Our emergency technicians
            carry fully stocked service vehicles with common spare parts, diagnostic equipment, and the expertise needed
            to resolve most generator problems on the first visit, even in the middle of the night.
          </p>
        </section>

        {/* Why 24-Hour Service Matters */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Why 24-Hour Generator Repair Service Is Essential</h2>
          <p className="text-lg leading-relaxed mb-6">
            The need for around-the-clock generator repair services has never been more critical in South Africa. Here's
            why having access to 24/7 emergency generator support can make all the difference:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Load-Shedding Happens Anytime
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Eskom's load-shedding schedules don't discriminate between day and night, weekday and weekend. Stage 5
                  and 6 load-shedding often occur during late evening and early morning hours. If your generator fails
                  during these critical periods, you need immediate assistance regardless of the time.
                </p>
                <p className="text-muted-foreground">
                  Our 24-hour service ensures that whenever load-shedding strikes and your generator fails to activate
                  or keep running, expert help arrives quickly to restore your backup power system. We understand the
                  urgency of these situations and prioritize emergency calls during active load-shedding periods.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Business Continuity Protection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Many businesses operate outside traditional hours—restaurants, security companies, medical facilities,
                  data centers, manufacturing plants, and more. For these operations, generator failure at any hour can
                  result in substantial financial losses, compromised safety, or interrupted critical services.
                </p>
                <p className="text-muted-foreground">
                  24-hour emergency repair service ensures business continuity regardless of when generator problems
                  occur. Whether you're running a night shift operation, managing patient care, or protecting valuable
                  inventory, our emergency technicians can restore your power backup system before losses mount.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Home Safety and Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Residential generator failures during nighttime hours create significant security vulnerabilities.
                  Without power, alarm systems may fail, electric fencing becomes ineffective, outdoor lighting goes
                  dark, and CCTV cameras stop functioning—all while you're trying to sleep.
                </p>
                <p className="text-muted-foreground">
                  Additionally, medical equipment, refrigeration for medications, temperature control for young children
                  or elderly family members, and other critical home systems may depend on generator power. Our 24-hour
                  service addresses these urgent residential needs with the same priority as commercial emergencies.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Timer className="h-5 w-5 text-primary" />
                  Prevent Cascade Failures
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Some generator problems, if left unaddressed, can worsen rapidly and cause additional damage. An
                  overheating generator can suffer catastrophic engine failure, electrical faults can damage connected
                  equipment, and fuel system problems can contaminate engines beyond economical repair.
                </p>
                <p className="text-muted-foreground">
                  Immediate 24-hour response to generator problems often prevents minor issues from escalating into
                  expensive major repairs. Our emergency technicians can shut down problematic systems safely, implement
                  temporary fixes to restore partial function, and prevent secondary damage while planning comprehensive
                  repairs.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Our 24-Hour Service Promise */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Our 24-Hour Emergency Service Commitment</h2>
          <p className="text-lg leading-relaxed mb-6">
            When you call our 24-hour emergency line, here's exactly what you can expect from our service:
          </p>

          <div className="space-y-6">
            <Card className="border-primary">
              <CardHeader>
                <CardTitle>Immediate Human Response</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  We don't use answering services, voicemail systems, or automated callbacks. When you call 069 382 4908
                  at any hour of the day or night, a qualified member of our team answers your call directly. You speak
                  immediately with someone who can assess your situation, provide initial troubleshooting guidance if
                  helpful, and dispatch a technician to your location.
                </p>
                <p className="text-muted-foreground">
                  Our emergency operators are trained to ask the right questions to understand your situation quickly.
                  They'll need your location, a description of the problem, generator model if known, and information
                  about any unusual circumstances. This initial assessment helps us dispatch the right technician with
                  appropriate equipment and parts.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary">
              <CardHeader>
                <CardTitle>Rapid Technician Dispatch</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Emergency calls trigger immediate technician dispatch. We maintain an on-call rotation of certified
                  technicians strategically positioned across Gauteng to ensure rapid response times. Our goal is to
                  have a qualified technician at your location within 60 minutes for emergency situations, and we often
                  achieve faster response times depending on your location and current technician positions.
                </p>
                <p className="text-muted-foreground">
                  You'll receive the technician's name, estimated arrival time, and direct contact number so you can
                  coordinate access and communicate any updates. Our technicians call before arriving to confirm access
                  arrangements and any specific location details they need to find you quickly.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary">
              <CardHeader>
                <CardTitle>Fully Equipped Emergency Response Vehicles</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Our emergency service vehicles function as mobile workshops, equipped with professional diagnostic
                  equipment, comprehensive tool sets, and an inventory of the most commonly needed spare parts. This
                  extensive preparation enables our technicians to complete most repairs on the first visit, even during
                  nighttime or weekend emergencies when parts suppliers are closed.
                </p>
                <p className="text-muted-foreground">
                  Common stock items include batteries, spark plugs, fuel filters, air filters, oil filters, fuses and
                  circuit breakers, voltage regulators, starter motors, capacitors, ignition coils, and various
                  consumables. For specialized parts not carried on vehicles, we maintain relationships with 24-hour
                  parts suppliers and can often source critical components even during emergency calls.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary">
              <CardHeader>
                <CardTitle>No After-Hours Surcharges</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Unlike many emergency service providers, we don't charge premium rates for after-hours, weekend, or
                  holiday calls. Our emergency service pricing is the same whether you call at 2 PM on Tuesday or 2 AM
                  on Sunday. You pay for the actual repair work and parts needed, plus our standard emergency call-out
                  fee, but no additional surcharges for inconvenient timing.
                </p>
                <p className="text-muted-foreground">
                  We believe that 24-hour service should be accessible when you need it most. Emergency generator
                  failures cause enough stress and expense without adding financial penalties for seeking help during
                  off-hours. Our transparent pricing means you receive the same honest, fair treatment regardless of
                  when disaster strikes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary">
              <CardHeader>
                <CardTitle>Expert Diagnosis and Repair</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  All our emergency technicians are fully certified and experienced with comprehensive training in
                  generator systems across all major brands. Emergency situations don't compromise our quality
                  standards—you receive the same expert diagnosis and professional repair work at 3 AM that you'd
                  receive during business hours.
                </p>
                <p className="text-muted-foreground">
                  We follow systematic diagnostic procedures even under emergency pressure, ensuring accurate problem
                  identification rather than hasty guesswork. Our technicians explain the problem clearly, provide a
                  detailed quote before beginning repairs, and complete work to the highest standards with appropriate
                  testing to verify successful resolution.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Common Emergency Scenarios */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Common 24-Hour Emergency Scenarios We Handle</h2>
          <p className="text-lg leading-relaxed mb-6">
            Our 24-hour emergency team responds to a wide range of urgent generator situations. Here are the most common
            emergency scenarios our after-hours technicians address:
          </p>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Generator Won't Start During Load-Shedding</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  This is the most critical emergency—power goes out for scheduled load-shedding, your automatic
                  transfer switch activates, but your generator fails to start. You're left in complete darkness with no
                  backup power. Common causes include dead batteries, fuel delivery problems, starter motor failures, or
                  ignition system issues.
                </p>
                <p className="text-muted-foreground">
                  Our emergency technicians can diagnose starting problems quickly using systematic testing procedures.
                  We carry replacement batteries, can clean or rebuild fuel systems on-site, repair or replace starter
                  motors, and address ignition problems to restore generator function during the remaining load-shedding
                  period.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Generator Stops Running Unexpectedly</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Your generator starts successfully but then stops running after minutes or hours of operation. This
                  scenario often indicates fuel supply issues, overheating problems, electrical system faults, or low
                  oil pressure shutdown. Repeated unexpected shutdowns can damage the generator and leave you cycling
                  between power and darkness.
                </p>
                <p className="text-muted-foreground">
                  Emergency technicians diagnose shutdown causes by checking fuel levels and delivery, examining cooling
                  system function, testing oil pressure and level, inspecting safety shutdown systems, and analyzing
                  electrical components. We can often resolve these issues quickly to restore reliable continuous
                  operation throughout the load-shedding period.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Electrical Power Fluctuations and Surges</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Your generator runs but produces unstable power output with voltage surges, brownouts, or frequency
                  variations. This condition is dangerous for connected equipment and electronics. Computers,
                  appliances, and sensitive devices can be damaged by irregular power. Common causes include voltage
                  regulator failures, governor problems, or alternator issues.
                </p>
                <p className="text-muted-foreground">
                  Our emergency response includes immediate power quality testing with specialized equipment. We can
                  identify failing voltage regulators, adjust governor settings, repair alternator components, and
                  implement temporary protective measures while sourcing specialized parts. Protecting your valuable
                  equipment from power quality problems often justifies emergency service calls even if the generator
                  continues running.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Strange Noises or Smoke from Generator</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Unusual sounds like knocking, grinding, or rattling, or visible smoke from the generator indicates
                  serious problems requiring immediate attention. Continuing to operate a generator showing these
                  symptoms can cause catastrophic failure and expensive engine damage. These symptoms might indicate
                  bearing failures, internal engine problems, exhaust issues, or overheating.
                </p>
                <p className="text-muted-foreground">
                  Emergency technicians can assess whether safe continued operation is possible or if immediate shutdown
                  is necessary. We identify the source of unusual noises or smoke, implement repairs if feasible, or
                  safely shut down the system and arrange alternative power solutions if major repairs are needed. Quick
                  response prevents minor issues from becoming complete engine failures.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Fuel Leaks or Fuel System Problems</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Fuel leaks present both fire safety hazards and operational problems. Leaking fuel can create
                  dangerous situations, especially in enclosed spaces, while also preventing proper generator operation.
                  Fuel system problems might include clogged filters causing starvation, water contamination from
                  condensation, old fuel that has degraded, or damaged fuel lines and connections.
                </p>
                <p className="text-muted-foreground">
                  Emergency fuel system repairs address safety concerns first, then restore proper operation. We can
                  contain and clean fuel spills, replace damaged fuel lines and connections, drain and flush
                  contaminated fuel systems, replace filters, and restore safe, reliable fuel delivery. These repairs
                  often need immediate attention to prevent fire hazards and restore generator function.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Transfer Switch Failures</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Automatic transfer switches that fail to operate properly leave you without power even if the
                  generator runs perfectly. The switch might fail to transfer from grid to generator power when
                  load-shedding starts, fail to transfer back when grid power returns, or get stuck in an intermediate
                  position providing no power at all.
                </p>
                <p className="text-muted-foreground">
                  Emergency transfer switch repairs require electrical expertise and specialized knowledge. Our
                  technicians can diagnose control circuit problems, repair or replace failed contactors and relays,
                  address mechanical binding issues, and restore proper automatic switching operation. In some cases, we
                  can implement manual transfer procedures while arranging replacement of failed automatic switches.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Response Time Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Our Emergency Response Times Across Gauteng</h2>
          <p className="text-lg leading-relaxed mb-6">
            We understand that during generator emergencies, every minute without power matters. Our technician
            positioning and dispatch procedures are optimized for rapid response across all areas of Gauteng:
          </p>

          <div className="bg-muted p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-4">Typical Emergency Response Times:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2 text-primary">Metropolitan Areas (30-60 minutes)</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>Johannesburg CBD and Inner City</li>
                  <li>Sandton, Rosebank, and Northern Suburbs</li>
                  <li>Pretoria CBD and Central Areas</li>
                  <li>Centurion and Midrand</li>
                  <li>Randburg and Roodepoort</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-primary">Extended Areas (60-90 minutes)</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>Pretoria East and Surrounding Areas</li>
                  <li>Soweto and Southern Johannesburg</li>
                  <li>Kempton Park and East Rand</li>
                  <li>Western suburbs and Krugersdorp</li>
                  <li>Pretoria North and Montana</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            These are typical response times under normal traffic conditions. During active load-shedding when traffic
            lights are out and roads are congested, we account for additional travel time in our estimates. We maintain
            communication throughout the response, providing realistic arrival time updates and notifications if delays
            occur.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            For remote areas outside our primary coverage zones, we provide honest estimates of arrival times during
            your initial call. In some cases, we can provide immediate phone guidance for simple troubleshooting while
            the technician is en route, potentially resolving basic problems before the technician arrives.
          </p>
        </section>

        {/* What to Do While Waiting */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What to Do While Waiting for Emergency Service</h2>
          <p className="text-lg leading-relaxed mb-6">
            After calling for emergency generator repair, there are several steps you can take to stay safe and prepare
            for the technician's arrival:
          </p>

          <div className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Ensure Safe Access for Technician</h3>
                    <p className="text-muted-foreground">
                      Make sure the technician can safely access your property and the generator location. If you have
                      security gates, alert guards or provide access codes. Ensure generator area lighting is available
                      using flashlights or portable lights. Clear any obstacles blocking access to the generator.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Don't Attempt Complex Repairs Yourself</h3>
                    <p className="text-muted-foreground">
                      While waiting, resist the temptation to attempt complex repairs or adjustments yourself. Generator
                      systems involve high voltages, explosive fuels, and hot components. Improper intervention can
                      create safety hazards and potentially worsen the problem. Leave technical work to our certified
                      professionals.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Gather Generator Information</h3>
                    <p className="text-muted-foreground">
                      If safe and possible, locate information about your generator including the brand name, model
                      number, serial number, and any previous service records. This information helps our technician
                      prepare and may speed diagnosis. Note when the generator was last serviced and any recent changes
                      or issues.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Implement Alternative Power Management</h3>
                    <p className="text-muted-foreground">
                      While waiting for repairs, manage your power usage to minimize the impact. Reduce non-essential
                      electrical loads, use battery-powered lights and devices where possible, close refrigerators and
                      freezers to maintain cold temperatures, and shut down sensitive computer equipment properly to
                      prevent data loss.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    5
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Stay in Contact</h3>
                    <p className="text-muted-foreground">
                      Keep your phone available for updates from our dispatch team and the responding technician. They
                      may need to contact you for additional information, clarification on directions, or updates about
                      arrival time. Having a charged mobile phone ensures uninterrupted communication during the
                      emergency response.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Service Benefits */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Why Choose Our 24-Hour Emergency Service</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Always Available</h3>
                    <p className="text-muted-foreground">
                      Real 24/7/365 service with human operators answering calls day and night, weekends, and public
                      holidays.
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
                    <h3 className="font-semibold mb-2">Rapid Response</h3>
                    <p className="text-muted-foreground">
                      Certified technicians dispatched immediately with typical arrival times of 60 minutes or less for
                      emergency situations.
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
                    <h3 className="font-semibold mb-2">No After-Hours Premiums</h3>
                    <p className="text-muted-foreground">
                      Fair, transparent pricing with no surcharges for nights, weekends, or holiday emergency calls.
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
                    <h3 className="font-semibold mb-2">Fully Equipped Vehicles</h3>
                    <p className="text-muted-foreground">
                      Mobile workshops carrying diagnostic tools and common spare parts for efficient first-visit
                      repairs.
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
                    <h3 className="font-semibold mb-2">Expert Technicians</h3>
                    <p className="text-muted-foreground">
                      All emergency responders are certified professionals with comprehensive training across all
                      generator brands.
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
                      Emergency repairs maintain the same quality standards and workmanship guarantees as scheduled
                      service.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Emergency Call to Action */}
        <section className="mb-12">
          <Card className="bg-destructive/10 border-destructive">
            <CardContent className="pt-8 text-center">
              <Clock className="h-16 w-16 text-destructive mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Generator Emergency? Call Now!</h2>
              <p className="text-xl mb-6 text-muted-foreground">
                Don't wait—our 24/7 emergency team is standing by to restore your power backup system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-lg">
                  <a href="tel:0693824908">
                    <Phone className="mr-2 h-5 w-5" />
                    Emergency: 069 382 4908
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg bg-transparent">
                  <a href="https://wa.me/27693824908" target="_blank" rel="noopener noreferrer">
                    WhatsApp Emergency Line
                  </a>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                Available 24 hours a day, 7 days a week, 365 days a year. No answering machines—speak to a real person
                immediately.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Regular Service CTA */}
        <ContactCTASection
          title="Prevent Emergencies with Regular Maintenance"
          description="While our 24-hour emergency service is always available, regular maintenance can prevent many emergency situations. Contact us to schedule preventive maintenance and reduce the risk of unexpected breakdowns."
        />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EmergencyService",
            name: "24 Hour Generator Repairs",
            serviceType: "Emergency Generator Repair",
            provider: {
              "@type": "LocalBusiness",
              name: "Generator Repair Services",
              telephone: "069-382-4908",
            },
            areaServed: {
              "@type": "State",
              name: "Gauteng, South Africa",
            },
            availableChannel: {
              "@type": "ServiceChannel",
              servicePhone: {
                "@type": "ContactPoint",
                telephone: "+27-69-382-4908",
                contactType: "Emergency",
                availableLanguage: ["English"],
                hoursAvailable: "24/7",
              },
            },
            openingHours: "Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59",
          }),
        }}
      />
    </>
  )
}
