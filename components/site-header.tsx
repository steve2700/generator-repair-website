"use client"

import Link from "next/link"
import { Phone, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="text-xl font-bold text-primary">Generator Repair Services</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <div className="relative group">
              <button className="text-sm font-medium hover:text-primary transition-colors">Services</button>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all bg-card border rounded-lg shadow-lg py-2">
                <Link href="/generator-repairs" className="block px-4 py-2 text-sm hover:bg-muted">
                  Generator Repairs
                </Link>
                <Link href="/generator-servicing" className="block px-4 py-2 text-sm hover:bg-muted">
                  Generator Servicing
                </Link>
                <Link href="/generator-maintenance" className="block px-4 py-2 text-sm hover:bg-muted">
                  Generator Maintenance
                </Link>
                <Link href="/generator-installation" className="block px-4 py-2 text-sm hover:bg-muted">
                  Generator Installation
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className="text-sm font-medium hover:text-primary transition-colors">Locations</button>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all bg-card border rounded-lg shadow-lg py-2">
                <Link href="/generator-repairs-johannesburg" className="block px-4 py-2 text-sm hover:bg-muted">
                  Johannesburg
                </Link>
                <Link href="/generator-repairs-pretoria" className="block px-4 py-2 text-sm hover:bg-muted">
                  Pretoria
                </Link>
                <Link href="/generator-repairs-sandton" className="block px-4 py-2 text-sm hover:bg-muted">
                  Sandton
                </Link>
                <Link href="/generator-repairs-centurion" className="block px-4 py-2 text-sm hover:bg-muted">
                  Centurion
                </Link>
              </div>
            </div>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/faq" className="text-sm font-medium hover:text-primary transition-colors">
              FAQ
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button asChild size="sm" variant="default">
              <a href="tel:0693824908" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                069 382 4908
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-sm font-medium hover:text-primary">
                Home
              </Link>
              <div className="text-sm font-medium text-muted-foreground pl-2">Services</div>
              <Link href="/generator-repairs" className="text-sm pl-4 hover:text-primary">
                Generator Repairs
              </Link>
              <Link href="/generator-servicing" className="text-sm pl-4 hover:text-primary">
                Generator Servicing
              </Link>
              <Link href="/generator-maintenance" className="text-sm pl-4 hover:text-primary">
                Generator Maintenance
              </Link>
              <Link href="/generator-installation" className="text-sm pl-4 hover:text-primary">
                Generator Installation
              </Link>
              <div className="text-sm font-medium text-muted-foreground pl-2">Locations</div>
              <Link href="/generator-repairs-johannesburg" className="text-sm pl-4 hover:text-primary">
                Johannesburg
              </Link>
              <Link href="/generator-repairs-pretoria" className="text-sm pl-4 hover:text-primary">
                Pretoria
              </Link>
              <Link href="/generator-repairs-sandton" className="text-sm pl-4 hover:text-primary">
                Sandton
              </Link>
              <Link href="/generator-repairs-centurion" className="text-sm pl-4 hover:text-primary">
                Centurion
              </Link>
              <Link href="/about" className="text-sm font-medium hover:text-primary">
                About
              </Link>
              <Link href="/faq" className="text-sm font-medium hover:text-primary">
                FAQ
              </Link>
              <Link href="/contact" className="text-sm font-medium hover:text-primary">
                Contact
              </Link>
              <Button asChild className="mt-2">
                <a href="tel:0693824908" className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call 069 382 4908
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
