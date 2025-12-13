"use client";

import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqItems, siteConfig } from "@/data/config";
import { cn } from "@/lib/utils";
import { formatPhone, formatPhoneLink } from "@/lib/utils";

export function FAQSection() {
  if (!faqItems || faqItems.length === 0) {
    return null;
  }

  return (
    <section id="faq" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-custom relative">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 text-primary font-semibold uppercase tracking-wide bg-primary/5 px-4 py-2 rounded-full text-sm mb-4">
              <HelpCircle className="h-4 w-4" />
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mt-2 mb-4">
              Frequently Asked{" "}
              <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              Have questions about our {siteConfig.industry.type.toLowerCase()} services?
              We&apos;ve got answers.
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <Accordion.Root type="single" collapsible className="space-y-4">
            {faqItems.map((item: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Accordion.Item
                  value={`item-${index}`}
                  className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group"
                >
                  <Accordion.Trigger className="flex items-center justify-between w-full p-6 text-left hover:bg-gray-50/50 transition-colors">
                    <span className="font-heading font-semibold text-gray-900 pr-4 text-lg group-hover:text-primary transition-colors">
                      {item.question}
                    </span>
                    <div className="p-2 bg-primary/10 rounded-lg group-data-[state=open]:bg-primary group-data-[state=open]:rotate-180 transition-all duration-300">
                      <ChevronDown className="h-5 w-5 text-primary group-data-[state=open]:text-white transition-colors" />
                    </div>
                  </Accordion.Trigger>
                  <Accordion.Content className="overflow-hidden data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up">
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                      {item.answer}
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              </motion.div>
            ))}
          </Accordion.Root>

          {/* Additional Help */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12 p-8 bg-gradient-to-br from-primary/5 via-white to-accent/5 rounded-2xl border border-gray-100"
          >
            <p className="text-gray-700 mb-3 text-lg">
              Still have questions? We&apos;re here to help!
            </p>
            <a
              href={formatPhoneLink(siteConfig.company.phone)}
              className="inline-flex items-center gap-2 text-primary font-semibold text-lg hover:text-primary/80 transition-colors"
            >
              Call us at {formatPhone(siteConfig.company.phone)}
              <span className="text-2xl">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
