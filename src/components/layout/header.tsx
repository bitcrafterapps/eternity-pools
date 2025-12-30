"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig, services } from "@/data/config";
import { cn, formatPhone, formatPhoneLink } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services", hasDropdown: true },
  { href: "/gallery", label: "Gallery" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-gradient-to-r from-primary via-primary to-secondary text-white py-2.5">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-white/60 rounded-full" />
              Serving {siteConfig.serviceArea.primaryCity} & Surrounding Areas
            </span>

          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/80">Licensed & Insured C61/D35 s{siteConfig.company.license && `• Lic# ${siteConfig.company.license}`}</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-gray-900/5 py-2"
            : "bg-white py-4"
        )}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <Image
                src="/logo.png"
                alt={siteConfig.company.name}
                width={400}
                height={120}
                className={cn(
                  "w-auto max-w-[80vw] object-contain transition-all duration-300",
                  isScrolled ? "h-20" : "h-40 lg:h-24"
                )}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.href} className="relative">
                  {link.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium px-4 py-2 rounded-lg hover:bg-primary/5">
                        {link.label}
                        <ChevronDown className={cn("h-4 w-4 transition-transform", isServicesOpen && "rotate-180")} />
                      </button>
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 py-3 overflow-hidden"
                          >
                            {services.map((service: any) => (
                              <Link
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                className="flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-gradient-to-r hover:from-primary/5 hover:to-transparent hover:text-primary transition-all duration-200"
                              >
                                <span className="text-xl">{service.icon}</span>
                                <span className="font-medium">{service.name}</span>
                              </Link>
                            ))}
                            <div className="border-t border-gray-100 mt-2 pt-2 mx-4" />
                            <Link
                              href="/services"
                              className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-primary hover:bg-primary/5 transition-colors"
                            >
                              View All Services
                              <span>→</span>
                            </Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="relative text-foreground hover:text-primary transition-colors font-medium px-4 py-2 rounded-lg hover:bg-primary/5 group"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={formatPhoneLink(siteConfig.company.phone)}
                className="flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
              >
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Phone className="h-5 w-5" />
                </div>
                <span className="hidden xl:inline">{formatPhone(siteConfig.company.phone)}</span>
              </a>
              <Button variant="gradient" asChild>
                <Link href="/free-estimate">Get Free Estimate</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t shadow-lg fixed top-[72px] left-0 right-0 z-40 max-h-[calc(100vh-72px)] overflow-y-auto"
          >
            <div className="container-custom py-6">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium text-foreground hover:text-primary hover:bg-primary/5 transition-all py-3 px-4 rounded-lg border-b border-gray-100"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 mt-2 border-t border-gray-200">
                  <a
                    href={formatPhoneLink(siteConfig.company.phone)}
                    className="flex items-center gap-3 text-primary font-semibold text-lg py-3 px-4"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Phone className="h-5 w-5" />
                    </div>
                    {formatPhone(siteConfig.company.phone)}
                  </a>
                  <Button variant="gradient" asChild className="w-full mt-3">
                    <Link href="/free-estimate">Get Free Estimate</Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
