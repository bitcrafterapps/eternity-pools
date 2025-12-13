"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight, Clock, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/config";
import { Button } from "@/components/ui/button";
import { formatPhone, formatPhoneLink } from "@/lib/utils";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary" />
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse-slow" />

      {/* Animated wave at top */}
      <div className="absolute top-0 left-0 right-0 h-20 overflow-hidden rotate-180">
        <svg 
          className="absolute bottom-0 w-full h-full" 
          viewBox="0 0 1440 80" 
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,40 C480,80 960,0 1440,40 L1440,80 L0,80 Z"
            fill="rgba(255,255,255,1)"
            animate={{
              d: [
                "M0,40 C480,80 960,0 1440,40 L1440,80 L0,80 Z",
                "M0,50 C480,10 960,70 1440,30 L1440,80 L0,80 Z",
                "M0,40 C480,80 960,0 1440,40 L1440,80 L0,80 Z",
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          {siteConfig.industry.emergencyService && (
            <motion.div 
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full mb-8 border border-white/30"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
              </span>
              <Clock className="h-5 w-5 text-white" />
              <span className="text-white font-medium">
                24/7 Emergency Service Available
              </span>
            </motion.div>
          )}

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
            Ready to Get{" "}
            <span className="relative inline-block">
              Started?
              <motion.span 
                className="absolute -bottom-2 left-0 right-0 h-1 bg-white/50 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
            </span>
          </h2>

          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Get your free, no-obligation estimate today. Our team is standing by
            to help with all your {siteConfig.industry.type.toLowerCase()} needs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="xl"
              className="bg-white text-primary hover:bg-white/95 shadow-xl shadow-black/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
              asChild
            >
              <Link href="/free-estimate">
                <Sparkles className="h-5 w-5 mr-2 group-hover:animate-bounce-subtle" />
                Get Free Estimate
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              size="xl"
              variant="outline"
              className="border-2 border-white/50 text-white hover:bg-white hover:text-primary backdrop-blur-sm transition-all duration-300"
              asChild
            >
              <a href={formatPhoneLink(siteConfig.company.phone)}>
                <Phone className="h-5 w-5 mr-2" />
                {formatPhone(siteConfig.company.phone)}
              </a>
            </Button>
          </div>

          <motion.p 
            className="text-white/70 mt-8 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            Serving {siteConfig.serviceArea.primaryCity} &amp; surrounding areas
            for {siteConfig.company.yearsInBusiness}+ years
          </motion.p>
        </motion.div>
      </div>

      {/* Animated wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
        <svg 
          className="absolute bottom-0 w-full h-full" 
          viewBox="0 0 1440 80" 
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,40 C480,80 960,0 1440,40 L1440,80 L0,80 Z"
            fill="rgba(249,250,251,1)"
            animate={{
              d: [
                "M0,40 C480,80 960,0 1440,40 L1440,80 L0,80 Z",
                "M0,50 C480,10 960,70 1440,30 L1440,80 L0,80 Z",
                "M0,40 C480,80 960,0 1440,40 L1440,80 L0,80 Z",
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>
    </section>
  );
}
