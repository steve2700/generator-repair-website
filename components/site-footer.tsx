import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Wrench, Shield, Award } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t bg-gradient-to-br from-muted/30 to-muted/10">
      <div className="border-b bg-background/50">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold">Licensed & Insured</h4>
              <p className="text-sm text-muted-foreground">Fully certified technicians</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold">24/7 Emergency Service</h4>
              <p className="text-sm text-muted-foreground">Available anytime you need us</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold">10+ Years Experience</h4>
              <p className="text-sm text-muted-foreground">5,000+ satisfied customers</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                <Wrench className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-bold text-lg text-primary">Generator Repair Services</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Professional generator repairs, servicing, and maintenance across Gauteng. Our certified technicians
              provide reliable, same-day service for all generator types. Available 24/7 for emergencies.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:0693824908"
                className="flex items-center gap-3 text-sm group hover:text-primary transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Call Us Anytime</div>
                  <div className="font-semibold">069 382 4908</div>
                </div>
              </a>
              <a
                href="mailto:info@generatorrepairservices.co.za"
                className="flex items-center gap-3 text-sm group hover:text-primary transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Email Us</div>
                  <div className="font-semibold">info@generatorrepairservices.co.za</div>
                </div>
              </a>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Service Area</div>
                  <div className="font-semibold">All of Gauteng, South Africa</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-base">Our Services</h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link
                  href="/generator-repairs"
                  className="text-sm hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Generator Repairs
                </Link>
              </li>
              <li>
                <Link
                  href="/generator-servicing"
                  className="text-sm hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Generator Servicing
                </Link>
              </li>
              <li>
                <Link
                  href="/generator-maintenance"
                  className="text-sm hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Maintenance Plans
                </Link>
              </li>
              <li>
                <Link
                  href="/generator-installation"
                  className="text-sm hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Installation Services
                </Link>
              </li>
              <li>
                <Link
                  href="/diesel-generator-repairs"
                  className="text-sm hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Diesel Generators
                </Link>
              </li>
              <li>
                <Link
                  href="/petrol-generator-repairs"
                  className="text-sm hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Petrol Generators
                </Link>
              </li>
              <li>
                <Link
                  href="/industrial-generator-repairs"
                  className="text-sm hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Industrial Repairs
                </Link>
              </li>
              <li>
                <Link
                  href="/emergency-generator-repairs"
                  className="text-sm hover:text-primary transition-colors hover:translate-x-1 inline-block font-semibold text-red-600"
                >
                  Emergency Service 24/7
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-base">Service Areas</h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link
                  href="/generator-repairs-johannesburg"
                  className="text-sm hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Johannesburg
                </Link>
              </li>
              <li>
                <Link
                  href="/generator-repairs-pretoria"
                  className="text-sm hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Pretoria
                </Link>
              </li>
              <li>
                <Link
                  href="/generator-repairs-sandton"
                  className="text-sm hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Sandton
                </Link>
              </li>
              <li>
                <Link
                  href="/generator-repairs-centurion"
                  className="text-sm hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Centurion
                </Link>
              </li>
              <li>
                <Link
                  href="/generator-repairs-near-me"
                  className="text-sm hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Near Me
                </Link>
              </li>
              <li>
                <Link
                  href="/24-hour-generator-repairs"
                  className="text-sm hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  24-Hour Service
                </Link>
              </li>
              <li>
                <Link
                  href="/affordable-generator-repairs"
                  className="text-sm hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Affordable Repairs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-base">Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link
                  href="/about"
                  className="text-sm hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/generator-servicing-near-me"
                  className="text-sm hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Servicing Near Me
                </Link>
              </li>
              <li>
                <Link
                  href="/generator-maintenance-near-me"
                  className="text-sm hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Maintenance Near Me
                </Link>
              </li>
              <li>
                <Link
                  href="/residential-generator-repairs"
                  className="text-sm hover:text-primary transition-colors hover:translate-x-1 inline-block"
                >
                  Residential Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} Generator Repair Services. All rights reserved. Licensed & Insured.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/terms-of-service" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
