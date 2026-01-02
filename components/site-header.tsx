"use client"

import Link from "next/link"
import { Phone, Menu, X, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="hidden md:flex items-center justify-between py-2 border-b border-border/40 text-sm">
          <div className="flex items-center gap-6 text-muted-foreground">
            <span className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5" />
              <span className="font-medium">24/7 Emergency Service Available</span>
            </span>
            <span>Serving All of Gauteng</span>
          </div>
          <a href="mailto:info@generatorrepairservices.co.za" className="hover:text-primary transition-colors">
            info@generatorrepairservices.co.za
          </a>
        </div>

        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Wrench className="h-6 w-6 text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary leading-tight">Generator Repair Services</span>
              <span className="text-xs text-muted-foreground">Professional & Reliable Since 2015</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <div className="relative group">
              <button className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1">
                Services
                <svg
                  className="h-4 w-4 transition-transform group-hover:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all bg-card border rounded-lg shadow-xl py-3 z-50">
                <Link
                  href="/generator-repairs"
                  className="block px-4 py-2.5 text-sm hover:bg-muted hover:text-primary transition-colors rounded-md mx-2"
                >
                  Generator Repairs
                </Link>
                <Link
                  href="/generator-servicing"
                  className="block px-4 py-2.5 text-sm hover:bg-muted hover:text-primary transition-colors rounded-md mx-2"
                >
                  Generator Servicing
                </Link>
                <Link
                  href="/generator-maintenance"
                  className="block px-4 py-2.5 text-sm hover:bg-muted hover:text-primary transition-colors rounded-md mx-2"
                >
                  Generator Maintenance
                </Link>
                <Link
                  href="/generator-installation"
                  className="block px-4 py-2.5 text-sm hover:bg-muted hover:text-primary transition-colors rounded-md mx-2"
                >
                  Generator Installation
                </Link>
                <div className="border-t my-2 mx-2" />
                <Link
                  href="/emergency-generator-repairs"
                  className="block px-4 py-2.5 text-sm hover:bg-muted hover:text-primary transition-colors rounded-md mx-2 font-semibold text-red-600"
                >
                  24-Hour Emergency Service
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1">
                Locations
                <svg
                  className="h-4 w-4 transition-transform group-hover:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all bg-card border rounded-lg shadow-xl py-3 z-50">
                <Link
                  href="/generator-repairs-johannesburg"
                  className="block px-4 py-2.5 text-sm hover:bg-muted hover:text-primary transition-colors rounded-md mx-2"
                >
                  Johannesburg
                </Link>
                <Link
                  href="/generator-repairs-pretoria"
                  className="block px-4 py-2.5 text-sm hover:bg-muted hover:text-primary transition-colors rounded-md mx-2"
                >
                  Pretoria
                </Link>
                <Link
                  href="/generator-repairs-sandton"
                  className="block px-4 py-2.5 text-sm hover:bg-muted hover:text-primary transition-colors rounded-md mx-2"
                >
                  Sandton
                </Link>
                <Link
                  href="/generator-repairs-centurion"
                  className="block px-4 py-2.5 text-sm hover:bg-muted hover:text-primary transition-colors rounded-md mx-2"
                >
                  Centurion
                </Link>
              </div>
            </div>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button asChild size="lg" className="relative overflow-hidden group">
              <a href="tel:0693824908" className="flex items-center gap-2">
                <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <Phone className="h-5 w-5 animate-pulse" />
                <span className="font-semibold">069 382 4908</span>
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-muted rounded-md transition-colors"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t">
            <div className="flex flex-col gap-3">
              <Link
                href="/"
                className="text-sm font-medium hover:text-primary px-2 py-1.5 rounded-md hover:bg-muted transition-colors"
              >
                Home
              </Link>
              <div className="text-xs font-semibold text-muted-foreground pl-2 pt-2">SERVICES</div>
              <Link
                href="/generator-repairs"
                className="text-sm pl-4 hover:text-primary px-2 py-1.5 rounded-md hover:bg-muted transition-colors"
              >
                Generator Repairs
              </Link>
              <Link
                href="/generator-servicing"
                className="text-sm pl-4 hover:text-primary px-2 py-1.5 rounded-md hover:bg-muted transition-colors"
              >
                Generator Servicing
              </Link>
              <Link
                href="/generator-maintenance"
                className="text-sm pl-4 hover:text-primary px-2 py-1.5 rounded-md hover:bg-muted transition-colors"
              >
                Generator Maintenance
              </Link>
              <Link
                href="/generator-installation"
                className="text-sm pl-4 hover:text-primary px-2 py-1.5 rounded-md hover:bg-muted transition-colors"
              >
                Generator Installation
              </Link>
              <Link
                href="/emergency-generator-repairs"
                className="text-sm pl-4 hover:text-primary px-2 py-1.5 rounded-md hover:bg-muted transition-colors font-semibold text-red-600"
              >
                24-Hour Emergency
              </Link>
              <div className="text-xs font-semibold text-muted-foreground pl-2 pt-2">LOCATIONS</div>
              <Link
                href="/generator-repairs-johannesburg"
                className="text-sm pl-4 hover:text-primary px-2 py-1.5 rounded-md hover:bg-muted transition-colors"
              >
                Johannesburg
              </Link>
              <Link
                href="/generator-repairs-pretoria"
                className="text-sm pl-4 hover:text-primary px-2 py-1.5 rounded-md hover:bg-muted transition-colors"
              >
                Pretoria
              </Link>
              <Link
                href="/generator-repairs-sandton"
                className="text-sm pl-4 hover:text-primary px-2 py-1.5 rounded-md hover:bg-muted transition-colors"
              >
                Sandton
              </Link>
              <Link
                href="/generator-repairs-centurion"
                className="text-sm pl-4 hover:text-primary px-2 py-1.5 rounded-md hover:bg-muted transition-colors"
              >
                Centurion
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium hover:text-primary px-2 py-1.5 rounded-md hover:bg-muted transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium hover:text-primary px-2 py-1.5 rounded-md hover:bg-muted transition-colors"
              >
                Contact
              </Link>
              <Button asChild className="mt-4" size="lg">
                <a href="tel:0693824908" className="flex items-center justify-center gap-2">
                  <Phone className="h-5 w-5" />
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
