import type { Metadata } from "next"
import Breadcrumbs from "@/components/breadcrumbs"
import ContactCTASection from "@/components/contact-cta-section"
import StructuredData from "@/components/structured-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MessageCircle, CheckCircle, Clock, Shield, Zap, Calendar, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "★★★★★ Generator Maintenance Near Me 2025 | Preventive Maintenance Plans",
  description:
    "★★★★★ Professional generator maintenance near me with comprehensive maintenance plans from R1,200/year. Prevent breakdowns, extend lifespan by 300%. Call 069 382 4908.",
  keywords:
    "generator maintenance near me, generator maintenance plans, preventive generator maintenance, generator upkeep near me, generator care near me",
  openGraph: {
    title: "Generator Maintenance Near Me | Comprehensive Maintenance Plans",
    description:
      "Expert generator maintenance plans. Prevent expensive breakdowns. Extend generator life by 300%. Call 069 382 4908.",
    url: "https://generatorrepairservices.co.za/generator-maintenance-near-me",
    siteName: "Generator Repair Services",
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://generatorrepairservices.co.za/generator-maintenance-near-me",
  },
}

export default function GeneratorMaintenanceNearMePage() {
  return (
    <>
      <StructuredData
        type="Service"
        name="Generator Maintenance Near Me"
        description="Comprehensive generator maintenance plans with local technicians covering all of Gauteng"
      />

      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Generator Maintenance Near Me" }]} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full mb-6">
              <Calendar className="h-4 w-4" />
              <span className="text-sm font-medium">⚡ Maintenance Plans from R1,200/Year</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Generator Maintenance Near Me - Extend Your Generator Life by 300%
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 text-pretty">
              Comprehensive generator maintenance plans designed for South African load shedding. Local technicians,
              scheduled maintenance, priority emergency support. From R1,200/year.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-primary font-bold text-lg px-8 py-6 h-auto group"
                asChild
              >
                <a href="tel:0693824908">
                  <Phone className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  Call Now: 069 382 4908
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white/30 text-lg px-8 py-6 h-auto"
                asChild
              >
                <a href="https://wa.me/27693824908" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>Scheduled Maintenance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>Load Shedding-Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>5,000+ Customers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-accent/10 border-y border-accent/20 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5,000+</div>
              <div className="text-sm text-muted-foreground">Generators Maintained</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Breakdown Prevention Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">300%</div>
              <div className="text-sm text-muted-foreground">Average Lifespan Increase</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Priority Emergency Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Professional Generator Maintenance Plans - Built for South African Conditions
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                Finding reliable generator maintenance near you is essential for South African generator owners facing
                frequent load shedding. Our comprehensive maintenance plans are specifically designed for Gauteng's
                challenging conditions—extended runtime requirements, dusty environments, temperature extremes, and the
                constant cycle of starting and stopping that load shedding demands. With over 5,000 generators under
                active maintenance contracts across Johannesburg, Pretoria, Sandton, and Centurion, we're the
                maintenance partner that local residents and businesses trust to keep their backup power systems running
                reliably.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Professional generator maintenance extends your generator's lifespan by up to 300%, prevents 95% of
                unexpected breakdowns, reduces fuel consumption by 15-20%, maintains manufacturer warranty requirements,
                and ensures your backup power system activates reliably during every load shedding cycle. Our
                maintenance plans include scheduled servicing, priority emergency support, genuine parts, detailed
                maintenance records, and proactive issue identification—all delivered by local certified technicians who
                understand South African generator requirements.
              </p>

              <div className="bg-blue-50 border-l-4 border-primary p-6 my-8 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <Calendar className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-2 mt-0">Ready for Worry-Free Generator Ownership?</h3>
                    <p className="mb-3">
                      Join 5,000+ satisfied customers with comprehensive maintenance plans starting at R1,200/year.
                    </p>
                    <Button className="bg-primary hover:bg-primary/90" asChild>
                      <a href="tel:0693824908">
                        <Phone className="mr-2 h-4 w-4" />
                        Call 069 382 4908 - Get Your Maintenance Plan
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-primary mb-6 mt-12">
                Comprehensive Maintenance Plans for Every Need
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                We offer three maintenance plan levels designed to match your generator's usage intensity, size, and
                your budget. Every plan includes scheduled maintenance visits, genuine parts, labor, priority emergency
                support, and detailed maintenance records—delivered by local technicians near you.
              </p>

              <div className="grid md:grid-cols-3 gap-6 my-8 not-prose">
                <Card className="border-primary/20 hover:border-primary transition-all hover:shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-2">Essential Plan</h3>
                    <div className="text-3xl font-bold text-primary mb-1">R1,200</div>
                    <div className="text-sm text-muted-foreground mb-4">per year</div>
                    <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded inline-block mb-4">
                      Best for occasional use
                    </div>
                    <ul className="space-y-2 text-sm mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>2 scheduled services per year</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Oil & filter changes included</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Spark plug inspection/replacement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Basic electrical system check</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Battery maintenance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>15% discount on repairs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Maintenance reminders</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-transparent" variant="outline" asChild>
                      <a href="tel:0693824908">Choose Essential</a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-primary bg-primary/5 hover:shadow-xl transition-all relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent text-primary px-4 py-1 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-2">Premium Plan</h3>
                    <div className="text-3xl font-bold text-primary mb-1">R2,800</div>
                    <div className="text-sm text-muted-foreground mb-4">per year</div>
                    <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded inline-block mb-4">
                      Best for regular load shedding
                    </div>
                    <ul className="space-y-2 text-sm mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>4 scheduled services per year</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Everything in Essential, plus:</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Full synthetic oil upgrade</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Load bank testing quarterly</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Comprehensive electrical testing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>25% discount on repairs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Priority emergency response</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Detailed performance reports</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                      <a href="tel:0693824908">Choose Premium</a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 hover:border-primary transition-all hover:shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-2">Business Plan</h3>
                    <div className="text-3xl font-bold text-primary mb-1">R5,500</div>
                    <div className="text-sm text-muted-foreground mb-4">per year</div>
                    <div className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded inline-block mb-4">
                      Best for commercial/industrial
                    </div>
                    <ul className="space-y-2 text-sm mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Monthly scheduled visits (12/year)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Everything in Premium, plus:</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Dedicated technician assigned</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Valve clearance adjustments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Governor calibration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>35% discount on repairs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>2-hour emergency response SLA</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Compliance documentation</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-transparent" variant="outline" asChild>
                      <a href="tel:0693824908">Choose Business</a>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-3xl font-bold text-primary mb-6 mt-12">
                What Makes Our Maintenance Plans Different?
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                Many companies offer generator maintenance, but few understand the unique demands South African
                generators face. Our maintenance plans are specifically designed for load shedding conditions and
                delivered by local technicians who live and work in your community:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
                <Card className="border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Zap className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Load Shedding Optimization</h3>
                        <p className="text-sm text-muted-foreground">
                          We tune and maintain your generator specifically for South Africa's extended load shedding
                          cycles—not standard manufacturer schedules designed for occasional emergency use.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Proactive Issue Prevention</h3>
                        <p className="text-sm text-muted-foreground">
                          Our technicians identify and address potential problems before they cause failures. We catch
                          95% of issues during routine maintenance, preventing expensive emergency breakdowns.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Flexible Scheduling</h3>
                        <p className="text-sm text-muted-foreground">
                          We schedule maintenance around load shedding schedules and your availability. Weekend and
                          after-hours appointments available at no extra charge.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <TrendingUp className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Performance Tracking</h3>
                        <p className="text-sm text-muted-foreground">
                          Detailed digital maintenance records track your generator's performance over time, identifying
                          trends and optimization opportunities. Access your records online 24/7.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <Shield className="h-8 w-8 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-2 mt-0">Satisfaction Guarantee</h3>
                    <p className="mb-3">
                      If you're not completely satisfied with our maintenance service, we'll refund your entire annual
                      fee—no questions asked. That's how confident we are in our maintenance quality.
                    </p>
                    <p className="font-semibold">
                      Call 069 382 4908 to join 5,000+ satisfied maintenance plan customers.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-primary mb-6 mt-12">
                Maintenance Plans Save You Money - Here's The Proof
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                Generator maintenance plans might seem like an extra expense, but they actually save significant money
                by preventing expensive repairs, extending equipment life, and improving efficiency. Here's the real
                financial comparison:
              </p>

              <div className="grid md:grid-cols-2 gap-8 my-8 not-prose">
                <div className="bg-green-50 border-2 border-green-600 rounded-lg p-6">
                  <h3 className="font-bold text-xl mb-4 text-green-700">With Premium Maintenance Plan</h3>
                  <ul className="space-y-3 text-sm mb-4">
                    <li className="flex justify-between">
                      <span>Annual maintenance plan cost:</span>
                      <span className="font-bold">R2,800</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Average emergency repairs (10yr):</span>
                      <span className="font-bold">R4,500</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Generator lifespan:</span>
                      <span className="font-bold">18 years</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Fuel efficiency gains (10yr):</span>
                      <span className="font-bold">R8,500</span>
                    </li>
                    <li className="flex justify-between border-t pt-2 mt-2">
                      <span className="font-bold">10-Year Total Cost:</span>
                      <span className="font-bold text-green-700">R24,300</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-xs">Replacement cost avoided:</span>
                      <span className="text-xs font-bold">R0</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 border-2 border-red-600 rounded-lg p-6">
                  <h3 className="font-bold text-xl mb-4 text-red-700">Without Maintenance Plan</h3>
                  <ul className="space-y-3 text-sm mb-4">
                    <li className="flex justify-between">
                      <span>Annual maintenance plan cost:</span>
                      <span className="font-bold">R0</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Average emergency repairs (10yr):</span>
                      <span className="font-bold">R45,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Generator lifespan:</span>
                      <span className="font-bold">6 years</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Fuel efficiency losses (10yr):</span>
                      <span className="font-bold">R12,000</span>
                    </li>
                    <li className="flex justify-between border-t pt-2 mt-2">
                      <span className="font-bold">10-Year Total Cost:</span>
                      <span className="font-bold text-red-700">R117,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-xs">Replacement cost (1x):</span>
                      <span className="text-xs font-bold">R60,000</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-lg leading-relaxed mb-6 font-semibold text-center">
                Our Premium Maintenance Plan saves you R92,700 over 10 years compared to reactive-only maintenance. The
                choice is financially obvious.
              </p>

              <div className="bg-primary text-white rounded-lg p-8 my-12 text-center">
                <h3 className="text-2xl font-bold mb-4">Start Your Maintenance Plan Today</h3>
                <p className="text-lg mb-6">
                  Local technicians ready to keep your generator running reliably through every load shedding cycle.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-primary font-bold text-lg px-8 py-6 h-auto"
                    asChild
                  >
                    <a href="tel:0693824908">
                      <Phone className="mr-2 h-5 w-5" />
                      Call 069 382 4908 Now
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/10 hover:bg-white/20 text-white border-white/30 text-lg px-8 py-6 h-auto"
                    asChild
                  >
                    <a href="https://wa.me/27693824908" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      WhatsApp Us
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTASection />
    </>
  )
}
