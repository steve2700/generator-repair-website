import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">Generator Repair Services</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Professional generator repairs, servicing, and maintenance across Gauteng. Available 24/7 for emergencies.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a href="tel:0693824908" className="flex items-center gap-2 hover:text-primary">
                <Phone className="h-4 w-4" />
                069 382 4908
              </a>
              <a
                href="mailto:info@generatorrepairservices.co.za"
                className="flex items-center gap-2 hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                info@generatorrepairservices.co.za
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Gauteng, South Africa
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link href="/generator-repairs" className="hover:text-primary">
                  Generator Repairs
                </Link>
              </li>
              <li>
                <Link href="/generator-servicing" className="hover:text-primary">
                  Generator Servicing
                </Link>
              </li>
              <li>
                <Link href="/generator-maintenance" className="hover:text-primary">
                  Generator Maintenance
                </Link>
              </li>
              <li>
                <Link href="/generator-installation" className="hover:text-primary">
                  Generator Installation
                </Link>
              </li>
              <li>
                <Link href="/diesel-generator-repairs" className="hover:text-primary">
                  Diesel Generator Repairs
                </Link>
              </li>
              <li>
                <Link href="/petrol-generator-repairs" className="hover:text-primary">
                  Petrol Generator Repairs
                </Link>
              </li>
              <li>
                <Link href="/industrial-generator-repairs" className="hover:text-primary">
                  Industrial Generator Repairs
                </Link>
              </li>
              <li>
                <Link href="/emergency-generator-repairs" className="hover:text-primary">
                  Emergency Generator Repairs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Service Areas</h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link href="/generator-repairs-johannesburg" className="hover:text-primary">
                  Johannesburg
                </Link>
              </li>
              <li>
                <Link href="/generator-repairs-pretoria" className="hover:text-primary">
                  Pretoria
                </Link>
              </li>
              <li>
                <Link href="/generator-repairs-sandton" className="hover:text-primary">
                  Sandton
                </Link>
              </li>
              <li>
                <Link href="/generator-repairs-centurion" className="hover:text-primary">
                  Centurion
                </Link>
              </li>
              <li>
                <Link href="/generator-servicing-johannesburg" className="hover:text-primary">
                  Servicing Johannesburg
                </Link>
              </li>
              <li>
                <Link href="/generator-maintenance-johannesburg" className="hover:text-primary">
                  Maintenance Johannesburg
                </Link>
              </li>
              <li>
                <Link href="/diesel-generator-repairs-johannesburg" className="hover:text-primary">
                  Diesel Repairs JHB
                </Link>
              </li>
              <li>
                <Link href="/emergency-generator-repairs-johannesburg" className="hover:text-primary">
                  Emergency Repairs JHB
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/affordable-generator-repairs-johannesburg" className="hover:text-primary">
                  Affordable Repairs
                </Link>
              </li>
              <li>
                <Link href="/24-hour-emergency-generator-repairs-johannesburg" className="hover:text-primary">
                  24-Hour Service
                </Link>
              </li>
              <li>
                <Link href="/certified-generator-technicians-gauteng" className="hover:text-primary">
                  Certified Technicians
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Generator Repair Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
