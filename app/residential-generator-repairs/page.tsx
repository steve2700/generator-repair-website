import type { Metadata } from "next"
import { Phone, Home, Shield, Zap, Clock, CheckCircle2, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Breadcrumbs from "@/components/breadcrumbs"
import ContactCTASection from "@/components/contact-cta-section"

export const metadata: Metadata = {
  title: "★★★★★ Residential Generator Repairs 2025 | Home Generator Service",
  description:
    "★★★★★ Expert residential generator repairs across Gauteng. Keep your home powered during load-shedding. All brands serviced. Family-owned business since 2008. Call 069 382 4908.",
  openGraph: {
    title: "Residential Generator Repairs | Home Generator Service",
    description:
      "Expert residential generator repairs across Gauteng. Keep your home powered during load-shedding. All brands serviced.",
    url: "https://generatorrepairservices.co.za/residential-generator-repairs",
    siteName: "Generator Repair Services",
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://generatorrepairservices.co.za/residential-generator-repairs",
  },
}

export default function ResidentialGeneratorRepairsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Residential Generator Repairs" }]} />

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Home className="h-5 w-5" />
            <span className="font-semibold">Specialized Home Generator Service</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Residential Generator Repairs Across Gauteng
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Keep Your Family Safe and Comfortable During Load-Shedding with Reliable Generator Repairs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg">
              <a href="tel:0693824908">
                <Phone className="mr-2 h-5 w-5" />
                Call 069 382 4908
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg bg-transparent">
              <a href="https://wa.me/27693824908" target="_blank" rel="noopener noreferrer">
                WhatsApp for Home Service
              </a>
            </Button>
          </div>
        </div>

        {/* Introduction */}
        <section className="mb-12">
          <p className="text-lg leading-relaxed mb-6">
            Your home generator is more than just a backup power source—it's peace of mind for your family during South
            Africa's ongoing power challenges. When load-shedding strikes, your generator keeps lights on, security
            systems active, refrigerators running, and your household functioning normally. We specialize in residential
            generator repairs that restore this essential protection for homeowners throughout Gauteng.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Unlike commercial generator services that focus primarily on large industrial systems, we understand the
            unique needs of residential generator owners. Homeowners require affordable, trustworthy service from
            technicians who respect their property, explain technical issues clearly, and provide honest recommendations
            without high-pressure sales tactics. Our family-oriented approach has made us the preferred choice for
            thousands of Gauteng homeowners since 2008.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            We service all types and brands of home generators from portable units used occasionally during
            load-shedding to permanently installed automatic standby systems that activate seamlessly when power fails.
            Whether you own a small 2kVA inverter generator or a larger 10kVA whole-home standby system, our certified
            technicians have the expertise to diagnose problems accurately and complete repairs efficiently, getting
            your family's backup power protection restored quickly.
          </p>
        </section>

        {/* Why Residential Generators Need Professional Service */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Why Home Generators Need Professional Service</h2>
          <p className="text-lg leading-relaxed mb-6">
            Many homeowners attempt DIY generator repairs to save money, but residential generators require specialized
            knowledge and proper service procedures for safe, reliable operation:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Safety Considerations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Generators involve dangerous elements including high voltages, explosive fuels, toxic exhaust gases,
                  and hot components. Improper repairs or maintenance can create serious hazards including electrocution
                  risks, fire dangers, carbon monoxide poisoning, and burns. Professional service ensures all safety
                  systems function correctly and repairs don't introduce new hazards.
                </p>
                <p className="text-muted-foreground">
                  We're particularly careful with residential installations because families—including children and
                  elderly members—live in close proximity to these systems. Our technicians verify proper ventilation,
                  check carbon monoxide detector functionality, ensure appropriate clearances, inspect fuel storage
                  safety, and confirm all safety shutdowns work correctly.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Electrical System Integration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Residential generators integrate with your home's electrical system through transfer switches or
                  changeover switches. Improper electrical connections can backfeed power onto the grid (endangering
                  utility workers), damage appliances through power quality issues, create ground faults, or fail to
                  provide power when needed.
                </p>
                <p className="text-muted-foreground">
                  Our technicians understand residential electrical codes, proper grounding requirements, transfer
                  switch operation, and load management. We ensure your generator works seamlessly with your home's
                  electrical system while protecting both your equipment and utility infrastructure through proper
                  isolation and switching.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Family Protection Priority
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Your generator protects what matters most—your family's safety, comfort, and security. Professional
                  service ensures it functions reliably when needed, particularly during nighttime load-shedding when
                  security concerns are highest. We understand that for homeowners, generator reliability isn't just
                  about convenience—it's about protecting loved ones.
                </p>
                <p className="text-muted-foreground">
                  We test all aspects of generator operation thoroughly because failure during a critical moment could
                  compromise home security systems, disable medical equipment, spoil food and medications, or leave your
                  family in darkness during dangerous situations. This responsibility drives our commitment to quality
                  repairs and thorough testing.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Long-Term Reliability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Home generators are long-term investments that need to function reliably for years or decades.
                  Professional service using proper procedures and quality parts ensures longevity and dependable
                  operation. Quick DIY fixes might seem to work initially but often lead to premature failures, repeated
                  problems, and ultimately higher costs.
                </p>
                <p className="text-muted-foreground">
                  Our comprehensive approach addresses not just immediate problems but identifies developing issues that
                  could cause future failures. Preventive repairs and proper maintenance during service visits extend
                  generator lifespan dramatically, protecting your investment and ensuring your backup power system
                  remains dependable throughout its expected service life.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Common Residential Generator Problems */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Common Home Generator Problems We Fix</h2>
          <p className="text-lg leading-relaxed mb-6">
            Residential generators face unique challenges compared to commercial units. Here are the most common
            problems we encounter and repair in home generator systems:
          </p>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Starting Failures Due to Infrequent Use</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Many home generators sit unused for extended periods between load-shedding events, leading to starting
                  problems when you need them most. Batteries discharge sitting idle, fuel develops varnish deposits,
                  carburetors gum up, oil loses lubricity, and seals dry out. When load-shedding strikes and your
                  generator won't start, it creates immediate stress and leaves your family without backup power.
                </p>
                <p className="text-muted-foreground">
                  We repair these starting issues through systematic diagnosis—testing batteries and charging systems,
                  cleaning or rebuilding fuel delivery components, servicing ignition systems, replacing deteriorated
                  seals, and restoring proper lubrication. We also provide guidance on exercise schedules (running your
                  generator periodically) to prevent these inactivity-related problems from recurring.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Automatic Transfer Switch Problems</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Automatic standby generators depend on transfer switches to detect power outages and activate the
                  generator automatically. When these switches fail, your generator might run but not power your home,
                  fail to start when load-shedding begins, or not transfer back to grid power when restored. These
                  issues defeat the purpose of automatic backup systems.
                </p>
                <p className="text-muted-foreground">
                  Our technicians specialize in residential transfer switch diagnostics and repairs. We test sensing
                  circuits that detect outages, verify proper voltage monitoring, repair or replace failed contactors
                  and control relays, address mechanical binding issues, and ensure smooth, reliable automatic
                  operation. Proper transfer switch function is critical for true set-and-forget backup power
                  protection.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Overloading and Insufficient Capacity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Many homeowners discover during load-shedding that their generator can't handle the combined load of
                  all the appliances they need to run simultaneously. Attempting to power too many devices causes
                  generator overload, tripping breakers, voltage drops, or even generator shutdown. This typically
                  results from undersized generator selection or inadequate load management.
                </p>
                <p className="text-muted-foreground">
                  We help homeowners understand their generator's capacity limitations and implement practical load
                  management strategies. This might include load prioritization (determining which circuits or
                  appliances are essential), sequential starting of high-draw appliances, load shedding panels that
                  automatically disconnect non-essential loads, or recommendations for generator upgrades when current
                  capacity is genuinely insufficient for household needs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Fuel Quality and Storage Issues</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Home generators often run on fuel that's been stored for months between uses. Petrol degrades over
                  time, developing varnish, absorbing moisture, and losing volatility. Diesel fuel can develop algae
                  growth and waxing in cold weather. LPG systems face regulator freezing and pressure issues. These fuel
                  problems cause starting difficulties, rough running, power fluctuations, and potential engine damage.
                </p>
                <p className="text-muted-foreground">
                  Our fuel system services address contamination through tank cleaning, fuel replacement, filter
                  changes, and carburetor or injection system cleaning. We advise on proper fuel storage including
                  stabilizer use for petrol, proper diesel storage and treatment, and LP gas system maintenance. Proper
                  fuel management prevents the majority of residential generator problems and ensures reliable operation
                  when load-shedding strikes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Security-Related Damage and Theft</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Unfortunately, generator theft and vandalism are significant concerns for homeowners in South Africa.
                  Generators positioned for proper ventilation may be accessible to criminals. Theft attempts can damage
                  electrical connections, mounting systems, fuel lines, and exhaust systems even when unsuccessful.
                  Security-related damage requires specialized repair to restore safe, proper operation.
                </p>
                <p className="text-muted-foreground">
                  Beyond repairing theft-related damage, we advise on security improvements including proper anchoring
                  systems, protective cages and enclosures, alarm integration, improved positioning that balances
                  ventilation with security, and visible deterrents. We understand the security challenges South African
                  homeowners face and work to restore not just generator function but also peace of mind regarding your
                  investment's protection.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Our Residential Service Approach */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Our Homeowner-Focused Service Approach</h2>
          <p className="text-lg leading-relaxed mb-6">
            Servicing home generators requires a different approach than commercial work. Here's how we adapt our
            service specifically for residential customers:
          </p>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Clear Communication Without Technical Jargon</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Most homeowners aren't technical experts, and that's perfectly fine. We explain generator problems and
                  necessary repairs in clear, straightforward language without talking down to you or overwhelming you
                  with technical details. Our goal is to help you understand what's wrong, why it needs fixing, and what
                  your options are, empowering you to make informed decisions about your generator care.
                </p>
                <p className="text-muted-foreground">
                  We take time to answer your questions thoroughly, provide visual demonstrations when helpful, and
                  ensure you're comfortable with the recommended repairs before we begin work. Generator service
                  shouldn't feel confusing or intimidating—it should be a straightforward conversation between the
                  technical expert (us) and the equipment owner (you) working together toward reliable backup power.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Respect for Your Home and Property</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Our technicians treat your property with the same respect we'd want for our own homes. We use drop
                  cloths to protect surfaces when working indoors, clean up thoroughly after repairs, avoid tracking
                  dirt or oil through your home, and minimize disruption to your household. These might seem like small
                  details, but they reflect our professionalism and respect for your living space.
                </p>
                <p className="text-muted-foreground">
                  We're also mindful of residential settings with children, pets, and daily activities. We coordinate
                  timing to minimize inconvenience, secure our work areas and tools for safety, communicate what we're
                  doing if family members are present, and ensure everything is safe and tidy before we leave. Your home
                  should be in better condition after our service, not disrupted by it.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Honest, Pressure-Free Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  We provide honest assessments of your generator's condition and straightforward recommendations about
                  necessary repairs, beneficial upgrades, and optional improvements—without high-pressure sales tactics.
                  If your generator can be repaired economically, we'll recommend repair. If replacement makes more
                  sense, we'll explain why honestly. You'll never feel pressured into unnecessary services or premature
                  replacements.
                </p>
                <p className="text-muted-foreground">
                  Many service providers push unnecessary upgrades or overstate problems to increase revenue. We build
                  our business on trust and long-term relationships with homeowners, not one-time upselling. Our
                  customers often stay with us for years or decades because they know we'll always provide honest,
                  straightforward advice that prioritizes their needs and budget over our profits.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Flexible Scheduling for Your Convenience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  We understand that homeowners have work schedules, family commitments, and daily routines to
                  coordinate around. We offer flexible scheduling including evening and weekend appointments when
                  necessary to accommodate your availability. For non-emergency service, we work around your schedule
                  rather than forcing you to arrange time off work or disrupt your plans.
                </p>
                <p className="text-muted-foreground">
                  We also provide realistic time estimates for service visits and keep you informed if we're running
                  late due to previous calls. When scheduling, we ask about any timing constraints or special
                  considerations—such as young children's nap times or barking dogs that need advance warning—ensuring
                  our visit integrates smoothly with your household routine.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Residential Generator Types We Service */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Types of Home Generators We Service</h2>
          <p className="text-lg leading-relaxed mb-6">
            We service all types of residential backup power systems across Gauteng, each with unique service
            requirements and common problems:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Portable Generators</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Portable units from 2kVA to 8kVA including inverter generators and conventional portable generators.
                  Common service includes starter repairs, carburetor cleaning, voltage regulator replacement, recoil
                  starter service, and fuel system maintenance. We service all major brands including Honda, Yamaha,
                  Hyundai, and Champion.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Standby Generators</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Permanently installed automatic standby systems from 5kVA to 20kVA. Service includes automatic
                  transfer switch maintenance, battery and charging system service, fuel system work, exercise cycle
                  programming, and control panel diagnostics. We work with all major residential standby brands.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Inverter Generators</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Quiet, fuel-efficient inverter technology generators popular for residential use. Specialized service
                  includes inverter circuit diagnostics, electronic throttle system repairs, sensitive electronic
                  component handling, and parallel operation system maintenance for paired units.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Diesel Home Generators</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Diesel-powered residential backup systems valued for fuel economy and longevity. Service includes fuel
                  injection system maintenance, glow plug replacement, diesel fuel system cleaning, turbocharger service
                  when equipped, and emissions system maintenance.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Why Homeowners Choose Our Generator Service</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Residential Specialists</h3>
                    <p className="text-muted-foreground">
                      We specialize in home generator service with approaches specifically designed for residential
                      customers and household systems.
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
                    <h3 className="font-semibold mb-2">Trusted Local Service</h3>
                    <p className="text-muted-foreground">
                      Family-owned business serving Gauteng homeowners since 2008 with reputation built on trust and
                      honest service.
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
                    <h3 className="font-semibold mb-2">Affordable Transparent Pricing</h3>
                    <p className="text-muted-foreground">
                      Fair pricing with detailed quotes and no hidden fees. We respect your budget and provide honest
                      value for money.
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
                      We service every major generator brand found in South African homes—no need to search for
                      brand-specific technicians.
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
                    <h3 className="font-semibold mb-2">Property Respect</h3>
                    <p className="text-muted-foreground">
                      Professional technicians who treat your home and property with respect, working cleanly and
                      minimizing disruption.
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
                    <h3 className="font-semibold mb-2">Clear Communication</h3>
                    <p className="text-muted-foreground">
                      Jargon-free explanations that help you understand your generator without feeling overwhelmed or
                      confused.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <ContactCTASection
          title="Keep Your Home Protected During Load-Shedding"
          description="Contact us today for reliable residential generator repairs. Our homeowner-focused service ensures your family's backup power system works when you need it most."
        />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Residential Generator Repairs",
            provider: {
              "@type": "LocalBusiness",
              name: "Generator Repair Services",
              telephone: "069-382-4908",
            },
            areaServed: {
              "@type": "State",
              name: "Gauteng, South Africa",
            },
            audience: {
              "@type": "Audience",
              audienceType: "Homeowners",
            },
          }),
        }}
      />
    </>
  )
}
