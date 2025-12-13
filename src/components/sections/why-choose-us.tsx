"use client";

import { motion } from "framer-motion";
import { Shield, Award, Clock, Wrench, ThumbsUp, BadgeCheck } from "lucide-react";
import { siteConfig } from "@/data/config";

const features = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: `Fully licensed and insured for your peace of mind. ${siteConfig.company.license ? `License #${siteConfig.company.license}` : "All work guaranteed."}`,
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Award,
    title: `${siteConfig.company.yearsInBusiness}+ Years Experience`,
    description: `Trusted by ${siteConfig.company.city} homeowners for over ${siteConfig.company.yearsInBusiness} years. Proven track record of quality work.`,
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Clock,
    title: siteConfig.industry.emergencyService ? "24/7 Emergency Service" : "Fast Response Time",
    description: siteConfig.industry.emergencyService
      ? "Day or night, we're here when you need us. Emergency service available around the clock."
      : "Quick response times and efficient service. We value your time as much as you do.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: ThumbsUp,
    title: "100% Satisfaction Guaranteed",
    description: "We're not happy until you're happy. Every job comes with our satisfaction guarantee.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Wrench,
    title: "Quality Workmanship",
    description: "Expert technicians using premium materials. We do the job right the first time, every time.",
    color: "from-red-500 to-rose-500",
  },
  {
    icon: BadgeCheck,
    title: "Upfront Pricing",
    description: "No hidden fees or surprise charges. You'll know the price before any work begins.",
    color: "from-indigo-500 to-blue-500",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 text-primary font-semibold uppercase tracking-wide bg-primary/5 px-4 py-2 rounded-full text-sm mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mt-2 mb-4">
            The <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{siteConfig.company.name}</span> Difference
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            When you choose {siteConfig.company.name}, you&apos;re choosing quality,
            reliability, and a commitment to excellence that&apos;s unmatched in{" "}
            {siteConfig.company.city}.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative"
            >
              {/* Card with glassmorphism */}
              <div className="relative h-full bg-white/80 backdrop-blur-sm rounded-2xl p-7 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden flex flex-col">
                {/* Gradient accent on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon */}
                <motion.div 
                  className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-5 shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <feature.icon className="h-7 w-7 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed flex-grow">
                  {feature.description}
                </p>

                {/* Decorative corner accent */}
                <div className={`absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br ${feature.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
