"use client";

import { motion } from "framer-motion";
import { Phone, Star, Clock, Shield, CheckCircle, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/config";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/forms/contact-form";
import { formatPhone, formatPhoneLink } from "@/lib/utils";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")`,
        }}
      />

      {/* Dark Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-primary/30" />

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/10 animate-pulse-slow" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Water wave effect at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
        <svg 
          className="absolute bottom-0 w-full h-full" 
          viewBox="0 0 1440 120" 
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,60 C360,120 720,0 1080,60 C1260,90 1440,60 1440,60 L1440,120 L0,120 Z"
            fill="rgba(255,255,255,0.05)"
            animate={{
              d: [
                "M0,60 C360,120 720,0 1080,60 C1260,90 1440,60 1440,60 L1440,120 L0,120 Z",
                "M0,80 C360,20 720,100 1080,40 C1260,70 1440,80 1440,80 L1440,120 L0,120 Z",
                "M0,60 C360,120 720,0 1080,60 C1260,90 1440,60 1440,60 L1440,120 L0,120 Z",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Trust Badge */}
            <motion.div 
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-white/90 text-sm ml-2">
                  {siteConfig.reviews.rating} • {siteConfig.reviews.count}+ Reviews
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              {siteConfig.serviceArea.primaryCity}&apos;s Most Trusted{" "}
              <span className="relative">
                <span className="text-gradient bg-gradient-to-r from-cyan-400 to-primary bg-clip-text text-transparent">
                  {siteConfig.industry.type}
                </span>
                <motion.span 
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-primary rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />
              </span>{" "}
              {siteConfig.industry.serviceNoun}
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-white/80 mb-8 max-w-xl leading-relaxed">
              Professional {siteConfig.industry.type.toLowerCase()} services with{" "}
              {siteConfig.company.yearsInBusiness}+ years of experience. Licensed,
              insured, and committed to your satisfaction.
            </p>

            {/* Trust Points */}
            <div className="flex flex-wrap gap-4 mb-8">
              {[
                { icon: Shield, text: "Licensed & Insured" },
                { icon: CheckCircle, text: "Free Estimates" },
                ...(siteConfig.industry.emergencyService ? [{ icon: Clock, text: "24/7 Emergency" }] : []),
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-2 text-white/90 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10"
                >
                  <item.icon className="h-5 w-5 text-cyan-400" />
                  <span className="text-sm font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Button size="xl" variant="glow" className="group" asChild>
                <Link href="/free-estimate">
                  <Sparkles className="h-5 w-5 mr-2 group-hover:animate-bounce-subtle" />
                  Get Your Free Estimate
                </Link>
              </Button>
              <Button 
                size="xl" 
                variant="outline" 
                className="border-white/50 text-white hover:bg-white hover:text-gray-900 backdrop-blur-sm" 
                asChild
              >
                <a href={formatPhoneLink(siteConfig.company.phone)}>
                  <Phone className="h-5 w-5 mr-2" />
                  {formatPhone(siteConfig.company.phone)}
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Quote Form */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            {/* Glow effect behind card */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl blur-2xl opacity-50" />
            
            <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/50">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-3">
                  <Sparkles className="h-4 w-4" />
                  Free Quote
                </div>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                  Get Your Free Estimate
                </h2>
                <p className="text-gray-600">
                  Fast response • No obligation • Free quote
                </p>
              </div>

              {/* Quote Form */}
              <ContactForm variant="hero" showServices={true} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
