import type { Metadata } from "next"
import { Phone, DollarSign, CheckCircle2, Shield, FileText, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Breadcrumbs from "@/components/breadcrumbs"
import ContactCTASection from "@/components/contact-cta-section"

export const metadata: Metadata = {
  title: "★★★★★ Affordable Generator Repairs 2025 | Quality Service at Fair Prices",
  description:
    "★★★★★ Quality generator repairs at affordable prices across Gauteng. Transparent quotes, no hidden fees, honest service. Professional repairs that don't break the bank. Call 069 382 4908.",
  openGraph: {
    title: "Affordable Generator Repairs | Quality Service at Fair Prices",
    description:
      "Quality generator repairs at affordable prices. Transparent quotes, no hidden fees, honest service across Gauteng.",
    url: "https://generatorrepairservices.co.za/affordable-generator-repairs",
    siteName: "Generator Repair Services",
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://generatorrepairservices.co.za/affordable-generator-repairs",
  },
}

export default function AffordableGeneratorRepairsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Affordable Generator Repairs" }]} />

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Affordable Generator Repairs Across Gauteng
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Quality Professional Service at Fair, Transparent Prices - No Hidden Fees
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
                Get Free Quote on WhatsApp
              </a>
            </Button>
          </div>
        </div>

        {/* Introduction */}
        <section className="mb-12">
          <p className="text-lg leading-relaxed mb-6">
            Generator repairs don't have to drain your budget. We provide affordable, professional generator repair
            services throughout Gauteng without compromising on quality or reliability. Our commitment to fair pricing,
            transparent quotes, and honest service has made us the preferred choice for homeowners and businesses
            seeking cost-effective generator repairs that actually last.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Many people delay necessary generator repairs due to concerns about cost, but this often leads to more
            expensive problems down the line. Our affordable pricing structure ensures you can address issues promptly
            before minor problems escalate into major failures. We believe everyone deserves access to reliable backup
            power, and our pricing reflects this philosophy while maintaining the professional standards you need for
            safe, effective repairs.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            What makes our generator repairs affordable isn't cutting corners or using inferior parts—it's our efficient
            operations, honest diagnostics, and commitment to solving the actual problem rather than recommending
            unnecessary services. We focus on providing real value through expert workmanship, quality parts, and
            repairs that stand the test of time, all at prices that won't shock you when the bill arrives.
          </p>
        </section>

        {/* What Makes Our Service Affordable */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What Makes Our Generator Repairs Affordable</h2>
          <p className="text-lg leading-relaxed mb-6">
            Affordable doesn't mean cheap or low-quality. Our competitive pricing comes from smart business practices
            and a customer-first philosophy, not from cutting corners on service quality:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Transparent, Itemized Quotes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  We provide detailed, itemized quotes that break down exactly what you're paying for—labor hours, parts
                  with part numbers and costs, consumables, and any additional fees. You receive this quote before we
                  begin any work, giving you the opportunity to understand the costs, ask questions, and make informed
                  decisions about your repairs.
                </p>
                <p className="text-muted-foreground">
                  Our quotes include clear explanations of why each repair or replacement is necessary. We never pad
                  estimates with unnecessary services or mysterious charges. If alternatives exist—such as repairing
                  versus replacing a component—we present options with honest assessments of the pros and cons of each
                  approach, empowering you to choose the solution that fits your budget and needs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-primary" />
                  Efficient, Expert Diagnostics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Our certified technicians diagnose problems accurately the first time, using systematic testing
                  procedures and professional diagnostic equipment. This efficiency means you're not paying for trial
                  and error approaches or unnecessary parts replacement. We identify root causes rather than just
                  treating symptoms, ensuring repairs actually solve your problems.
                </p>
                <p className="text-muted-foreground">
                  Accurate diagnostics also prevent unnecessary repeat visits. When we fix something, it stays fixed
                  because we addressed the actual problem. This saves you money in the long run by avoiding multiple
                  service calls, repeated repairs for the same issue, and the frustration of ongoing generator problems.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Quality Parts at Fair Prices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  We source quality replacement parts through established supplier relationships, allowing us to offer
                  competitive pricing on both OEM (original equipment manufacturer) and quality aftermarket components.
                  We discuss part options with you, explaining the differences between OEM and aftermarket alternatives
                  so you can make budget-conscious decisions without sacrificing reliability.
                </p>
                <p className="text-muted-foreground">
                  Unlike some service providers who mark up parts excessively, our parts pricing remains reasonable
                  while still covering our costs and ensuring we're using components that will last. We never install
                  the cheapest possible parts that will fail quickly—that's false economy that ultimately costs you more
                  in repeated repairs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-primary" />
                  No Hidden Fees or Surprise Charges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  The price we quote is the price you pay—period. No surprise diagnostic fees, no hidden environmental
                  charges, no mysterious "shop fees" or administrative costs appearing on your final bill. Our quotes
                  include everything needed to complete the repair properly, and we honor those quotes even if the job
                  takes longer than anticipated.
                </p>
                <p className="text-muted-foreground">
                  If unforeseen issues arise during repairs—which occasionally happens when working on older generators
                  or complex problems—we contact you immediately to discuss the situation and provide a supplementary
                  quote before proceeding. You maintain complete control over your repair costs with no obligation to
                  approve additional work.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Our Affordable Pricing Structure */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Our Affordable Pricing Structure</h2>
          <p className="text-lg leading-relaxed mb-6">
            Understanding how generator repair pricing works helps you appreciate the value we provide. Here's a
            transparent look at our pricing structure:
          </p>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Call-Out and Diagnostic Fees</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  We charge a reasonable call-out fee that covers the technician's travel time and initial diagnostic
                  work. This fee is clearly stated when you book the service—no surprises. If you proceed with the
                  recommended repairs, we credit a portion of the diagnostic fee against the total repair cost, reducing
                  your overall expense.
                </p>
                <p className="text-muted-foreground">
                  The diagnostic process includes comprehensive testing of all major generator systems to identify not
                  just the immediate problem but any developing issues that might cause failures soon. This thorough
                  approach provides value beyond just fixing today's symptom—it helps you plan for upcoming maintenance
                  needs before they become emergencies.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Labor Rates</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  Our labor rates are competitive with the industry while reflecting the expertise and certification of
                  our technicians. We charge for actual time spent on your repair, not inflated "book time" estimates
                  that add unnecessary hours to your bill. Straightforward repairs are completed efficiently, and you
                  only pay for the actual work time required.
                </p>
                <p className="text-muted-foreground">
                  Complex repairs requiring specialized skills or additional time are quoted transparently with clear
                  explanations of why extra labor is necessary. We provide time estimates upfront and strive to complete
                  work within estimated timeframes. If complications arise that extend repair time significantly, we
                  discuss this with you before continuing.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Parts and Components</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  Parts are charged at our cost plus a modest markup that covers inventory management, warranty
                  handling, and quality assurance. We itemize all parts on your quote with specific part numbers and
                  individual prices, so you can verify pricing independently if desired. This transparency builds trust
                  and ensures you understand exactly what you're purchasing.
                </p>
                <p className="text-muted-foreground">
                  When multiple part options exist—such as OEM versus quality aftermarket alternatives—we present these
                  options with honest assessments of quality, reliability, and longevity differences. For many
                  applications, quality aftermarket parts provide excellent performance at lower cost, and we're happy
                  to discuss which option makes sense for your specific situation and budget.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Emergency and After-Hours Service</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  Unlike many service providers, we don't charge premium rates for after-hours, weekend, or emergency
                  calls. Our commitment to affordable service extends to emergency situations. The same competitive
                  rates apply whether you call at 2 PM Tuesday or 2 AM Sunday. We believe emergency service should be
                  accessible when you need it most, not priced beyond reach.
                </p>
                <p className="text-muted-foreground">
                  Emergency calls do incur a call-out fee to compensate technicians for immediate availability and rapid
                  response, but this fee remains reasonable and is clearly communicated when you call. All other
                  pricing—labor rates, parts costs—remains unchanged regardless of when service is provided.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Money-Saving Tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">How to Keep Generator Repair Costs Down</h2>
          <p className="text-lg leading-relaxed mb-6">
            Beyond our competitive pricing, there are several ways you can minimize your overall generator repair and
            maintenance costs:
          </p>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Regular Preventive Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  The most effective way to control generator repair costs is preventing major problems through regular
                  maintenance. Scheduled servicing costs a fraction of emergency repairs and extends your generator's
                  lifespan significantly. Regular oil changes, filter replacements, and system checks identify small
                  issues before they become expensive failures.
                </p>
                <p className="text-muted-foreground">
                  We offer affordable maintenance packages that spread the cost of preventive care throughout the year.
                  These packages typically cost less than a single major repair while dramatically reducing the
                  likelihood of breakdowns. Think of maintenance as insurance against expensive emergency repairs and
                  extended downtime.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Address Problems Promptly</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  When you notice generator issues—unusual noises, starting difficulties, power fluctuations—contact us
                  promptly rather than waiting for complete failure. Early intervention typically costs much less than
                  emergency repairs after catastrophic breakdown. A bearing that's starting to wear might cost a few
                  hundred rands to replace; if left until it fails completely, you might face engine rebuild costs of
                  several thousand rands.
                </p>
                <p className="text-muted-foreground">
                  We can often schedule proactive repairs during convenient times at regular rates, whereas emergency
                  repairs must happen immediately regardless of timing. Scheduled repairs also allow time for us to
                  source the most cost-effective parts rather than needing immediate availability at premium prices.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Proper Generator Operation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Following proper operating procedures reduces wear and prevents many common problems. This includes
                  appropriate warm-up periods before loading, proper cool-down before shutdown, correct load management,
                  regular exercise of standby generators, and following manufacturer guidelines for operation and
                  storage.
                </p>
                <p className="text-muted-foreground">
                  We provide operation guidance as part of our service, explaining best practices that protect your
                  investment and minimize repair frequency. Simple habits like checking oil levels regularly, keeping
                  the generator clean, ensuring proper ventilation, and using fresh, properly stored fuel prevent many
                  expensive repairs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quality Fuel and Oil Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Using quality fuel and oil, implementing proper fuel storage practices, and following recommended
                  change intervals prevents a huge percentage of generator problems. Contaminated or old fuel causes
                  fuel system damage costing thousands to repair. Using the wrong oil or extending oil change intervals
                  excessively leads to engine wear and eventual failure.
                </p>
                <p className="text-muted-foreground">
                  The relatively small cost of premium fuel, quality oil, and fuel stabilizers for storage is far less
                  than repairing damage caused by poor fuel and oil management. We advise on proper products and
                  practices tailored to your generator and usage patterns, helping you protect your investment
                  affordably.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Keep Service Records</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Maintaining comprehensive service records helps our technicians work more efficiently, reducing
                  diagnostic time and costs. When we know your generator's service history, previous repairs, and
                  maintenance schedule, we can diagnose problems faster and avoid redundant testing or troubleshooting
                  of previously addressed issues.
                </p>
                <p className="text-muted-foreground">
                  Service records also help plan preventive maintenance effectively, catching issues at optimal timing
                  rather than too early (wasting money on premature replacements) or too late (after damage occurs). We
                  maintain detailed records for all our customers, and we encourage you to keep copies as well for
                  warranty purposes and if you eventually sell the generator.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Common Affordable Repairs */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Common Affordable Repairs We Perform</h2>
          <p className="text-lg leading-relaxed mb-6">
            Many generator problems can be resolved affordably when addressed promptly by experienced technicians. Here
            are some of the most common cost-effective repairs we perform:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Battery Replacement and Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Battery problems are among the most common and most affordable generator repairs. Replacing a failed
                  battery, cleaning corroded terminals, or repairing charging system issues typically costs far less
                  than you might expect. Regular battery testing during maintenance can identify weakening batteries
                  before they fail at inconvenient times.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Spark Plug and Ignition Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Spark plug replacement, ignition coil repair, and ignition system troubleshooting are straightforward,
                  affordable repairs that dramatically improve generator performance. These simple services often
                  resolve starting problems, rough running, and power output issues at minimal cost.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Filter Replacements</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Air filter, fuel filter, and oil filter replacements are inexpensive but essential maintenance tasks.
                  Clean filters prevent more expensive engine and fuel system damage while ensuring efficient operation.
                  These affordable services provide excellent return on investment in reliability and longevity.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Carburetor Cleaning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Professional carburetor cleaning resolves many fuel delivery and starting problems at reasonable cost.
                  This service removes varnish and deposits from old fuel, restoring proper operation without the
                  expense of carburetor replacement. Regular cleaning prevents more extensive fuel system damage.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Oil and Coolant Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Regular oil changes, coolant system flushes, and fluid level checks are among the most cost-effective
                  services for extending generator life. These routine maintenance tasks prevent expensive engine damage
                  and overheating problems while keeping your generator running reliably.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Belt and Hose Replacement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Replacing worn drive belts and deteriorated hoses before they fail prevents unexpected breakdowns and
                  potential engine damage from overheating or failed charging systems. These inexpensive components are
                  quick to replace and provide significant protection against more expensive problems.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Value Comparison */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The Real Value of Affordable Professional Service</h2>
          <p className="text-lg leading-relaxed mb-6">
            When evaluating generator repair costs, it's important to consider total value rather than just the initial
            price. Here's why our affordable professional service provides better value than cheaper alternatives:
          </p>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Professional vs. Amateur Repairs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  While hiring an unlicensed handyman might seem cheaper initially, improper repairs often create
                  additional problems, void warranties, create safety hazards, and ultimately cost more to correct.
                  Professional service by certified technicians ensures repairs are done right the first time, using
                  proper procedures and quality parts.
                </p>
                <p className="text-muted-foreground">
                  Our affordable rates provide professional expertise, proper diagnostic equipment, warranty-backed
                  repairs, insurance coverage, and accountability—value that amateur repairs can't match. The peace of
                  mind knowing your generator has been serviced correctly by qualified professionals is worth the modest
                  difference in cost.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quality Parts vs. Cheap Components</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Using the cheapest possible parts might save money initially but typically results in shorter service
                  life, repeated failures, and more frequent repairs. We use quality components—either OEM or reputable
                  aftermarket parts—that provide reliable, long-lasting performance. This approach reduces your total
                  cost of ownership even if individual repairs cost slightly more.
                </p>
                <p className="text-muted-foreground">
                  Quality parts also protect other generator components. For example, a cheap voltage regulator that
                  fails might damage expensive alternator components or connected electronic equipment. Using reliable
                  parts from the start prevents these cascade failures and their associated repair costs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Comprehensive Service vs. Quick Fixes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Some service providers offer very low prices by addressing only the immediate symptom without
                  investigating root causes. This "band-aid" approach results in recurring problems and repeated service
                  calls. Our thorough diagnostic process identifies and addresses underlying issues, providing lasting
                  repairs that solve problems permanently.
                </p>
                <p className="text-muted-foreground">
                  While our initial service might cost slightly more than a superficial quick fix, you save money by
                  avoiding repeated repairs for the same problem. Additionally, identifying and addressing developing
                  issues during the initial service prevents future breakdowns and emergency calls.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefits of Our Service */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Why Choose Our Affordable Generator Repair Service</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Transparent Pricing</h3>
                    <p className="text-muted-foreground">
                      Detailed itemized quotes before work begins with no hidden fees or surprise charges on your final
                      bill.
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
                      Certified professionals with comprehensive training ensure accurate diagnostics and quality
                      repairs that last.
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
                    <h3 className="font-semibold mb-2">Quality Parts</h3>
                    <p className="text-muted-foreground">
                      Reliable OEM and quality aftermarket components at fair prices for long-lasting repairs and
                      optimal performance.
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
                    <h3 className="font-semibold mb-2">Service Guarantee</h3>
                    <p className="text-muted-foreground">
                      All repairs backed by warranty on parts and workmanship for your peace of mind and protection.
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
                    <h3 className="font-semibold mb-2">Honest Advice</h3>
                    <p className="text-muted-foreground">
                      Straightforward recommendations about what you need without pressure for unnecessary services or
                      upgrades.
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
                    <h3 className="font-semibold mb-2">Fast Service</h3>
                    <p className="text-muted-foreground">
                      Efficient repairs completed quickly without sacrificing quality, minimizing your downtime and
                      inconvenience.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <ContactCTASection
          title="Get an Affordable Quote for Your Generator Repairs"
          description="Contact us today for transparent pricing and professional service. We'll diagnose your generator problem and provide a detailed, honest quote with no obligation."
        />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Affordable Generator Repairs",
            provider: {
              "@type": "LocalBusiness",
              name: "Generator Repair Services",
              telephone: "069-382-4908",
            },
            areaServed: {
              "@type": "State",
              name: "Gauteng, South Africa",
            },
            priceRange: "$$",
          }),
        }}
      />
    </>
  )
}
