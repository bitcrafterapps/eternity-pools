"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/config";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/forms/contact-form";
import { formatPhone, formatPhoneLink, formatEmailLink, formatAddressLink } from "@/lib/utils";

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")`,
          }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Have a question or need service? We&apos;re here to help. Reach out to
              us today and we&apos;ll get back to you as soon as possible.
            </p>
            {siteConfig.industry.emergencyService && (
              <div className="inline-flex items-center gap-2 bg-red-500/20 px-4 py-2 rounded-full">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                <span className="text-white font-medium">24/7 Emergency Service Available</span>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>

              {/* GHL Form Embed or Default Form */}
              <div className="bg-gray-50 rounded-xl p-6">
                <ContactForm variant="page" showServices={true} />
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>

              <div className="space-y-6">
                {/* Phone */}
                <a
                  href={formatPhoneLink(siteConfig.company.phone)}
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-primary text-lg font-medium">
                      {formatPhone(siteConfig.company.phone)}
                    </p>
                    <p className="text-sm text-gray-500">Call or text us anytime</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={formatEmailLink(siteConfig.company.email)}
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-primary">{siteConfig.company.email}</p>
                    <p className="text-sm text-gray-500">We&apos;ll respond within 24 hours</p>
                  </div>
                </a>

                {/* Address */}
                <a
                  href={formatAddressLink(
                    siteConfig.company.address,
                    siteConfig.company.city,
                    siteConfig.company.state,
                    siteConfig.company.zip
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Location</p>
                    <p className="text-gray-600">
                      {siteConfig.company.address}<br />
                      {siteConfig.company.city}, {siteConfig.company.state} {siteConfig.company.zip}
                    </p>
                    <p className="text-sm text-primary">Get Directions →</p>
                  </div>
                </a>

                {/* Hours */}
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Business Hours</p>
                    <div className="text-gray-600 text-sm space-y-1 mt-1">
                      <p>Mon-Fri: {siteConfig.hours.weekdays}</p>
                      <p>Saturday: {siteConfig.hours.saturday}</p>
                      <p>Sunday: {siteConfig.hours.sunday}</p>
                    </div>
                    {siteConfig.industry.emergencyService && (
                      <p className="text-primary text-sm font-medium mt-2">
                        24/7 Emergency Service Available
                      </p>
                    )}
                  </div>
                </div>
                </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      {siteConfig.industry.emergencyService && (
        <section className="bg-red-600 py-8">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-white text-center md:text-left">
                <p className="font-bold text-xl">
                  {siteConfig.industry.type} Emergency?
                </p>
                <p className="text-white/90">
                  We&apos;re available 24/7 for urgent service calls.
                </p>
              </div>
              <Button size="lg" className="bg-white text-red-600 hover:bg-white/90" asChild>
                <a href={formatPhoneLink(siteConfig.company.phone)}>
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now: {formatPhone(siteConfig.company.phone)}
                </a>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Free Estimate CTA */}
      <section className="bg-primary py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Need a Free Estimate?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a detailed, no-obligation estimate for your{" "}
            {siteConfig.industry.type.toLowerCase()} project.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
            <Link href="/free-estimate">
              <MessageCircle className="h-5 w-5 mr-2" />
              Get Free Estimate
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
