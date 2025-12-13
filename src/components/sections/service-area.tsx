"use client";

import { motion } from "framer-motion";
import { MapPin, CheckCircle } from "lucide-react";
import { siteConfig } from "@/data/config";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ServiceAreaSection() {
  return (
    <section id="service-area" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-semibold uppercase tracking-wide">
              Service Area
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mt-2 mb-4">
              Proudly Serving {siteConfig.serviceArea.primaryCity} &amp; Surrounding Areas
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              {siteConfig.company.name} provides professional {siteConfig.industry.type.toLowerCase()} services
              throughout {siteConfig.company.stateFullName}. We serve a {siteConfig.serviceArea.radius}-mile
              radius from {siteConfig.serviceArea.primaryCity}, ensuring prompt response times for all
              our valued customers.
            </p>

            {/* Cities Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 text-left max-w-2xl mx-auto">
              {siteConfig.serviceArea.areas.slice(0, 12).map((city: string, index: number) => (
                <motion.div
                  key={city}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-gray-700">{city}</span>
                </motion.div>
              ))}
            </div>

            <Button size="lg" asChild>
              <Link href="/service-areas">
                <MapPin className="h-5 w-5 mr-2" />
                View All Service Areas
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
