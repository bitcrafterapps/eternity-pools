"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials, siteConfig } from "@/data/config";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function TestimonialsSection() {
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section id="reviews" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-accent/5 to-transparent rounded-full blur-3xl" />

      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 text-primary font-semibold uppercase tracking-wide bg-primary/5 px-4 py-2 rounded-full text-sm mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mt-2 mb-4">
            What Our{" "}
            <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Customers
            </span>{" "}
            Say
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="flex items-center gap-1 bg-yellow-50 px-4 py-2 rounded-full border border-yellow-200">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-700 font-semibold ml-2">
                {siteConfig.reviews.rating}/5
              </span>
              <span className="text-gray-500 ml-1">
                from {siteConfig.reviews.count}+ reviews
              </span>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 6).map((testimonial: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-white to-gray-50/50 rounded-2xl p-7 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 h-full flex flex-col">
                {/* Decorative quote icon */}
                <div className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
                  <Quote className="h-5 w-5 text-white" />
                </div>

                {/* Rating */}
                <div className="flex mb-4 pt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < (testimonial.rating || 5)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-200"
                      }`}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 mb-6 leading-relaxed flex-grow">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Reviewer Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  {/* Avatar with gradient border */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full" />
                    <div className="relative w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center m-0.5">
                      <span className="text-primary font-bold text-lg">
                        {testimonial.name?.charAt(0) || "A"}
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    {testimonial.location && (
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    )}
                  </div>
                </div>

                {/* Service Tag */}
                {testimonial.service && (
                  <span className="inline-block mt-4 text-xs bg-gradient-to-r from-primary/10 to-accent/10 text-primary px-4 py-1.5 rounded-full font-medium border border-primary/10">
                    {testimonial.service}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All & Google Review CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16"
        >
          <Button size="lg" variant="gradient" asChild>
            <Link href="/reviews">Read All Reviews</Link>
          </Button>
          {siteConfig.reviews.googleReviewLink && (
            <Button size="lg" variant="outline" asChild>
              <a
                href={siteConfig.reviews.googleReviewLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Leave Us a Review
              </a>
            </Button>
          )}
        </motion.div>
      </div>
    </section>
  );
}
