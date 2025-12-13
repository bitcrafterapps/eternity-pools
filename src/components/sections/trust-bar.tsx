"use client";

import { motion, useInView } from "framer-motion";
import { Shield, Award, Clock, Users, ThumbsUp, Star } from "lucide-react";
import { siteConfig } from "@/data/config";
import { useRef, useEffect, useState } from "react";

// Animated counter component
function AnimatedCounter({ value, suffix = "" }: { value: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const numericValue = parseInt(value.replace(/\D/g, "")) || 0;

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = numericValue / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setCount(numericValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, numericValue]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

const trustItems = [
  {
    icon: Shield,
    label: "Licensed & Insured",
    value: siteConfig.company.license || "Fully Licensed",
    isStatic: true,
  },
  {
    icon: Award,
    label: "Years of Experience",
    value: siteConfig.company.yearsInBusiness,
    suffix: "+ Years",
  },
  {
    icon: Star,
    label: "Customer Rating",
    value: siteConfig.reviews.rating,
    suffix: "/5 Stars",
    isStatic: true,
  },
  {
    icon: Users,
    label: "Satisfied Customers",
    value: siteConfig.reviews.count,
    suffix: "+ Reviews",
  },
  ...(siteConfig.industry.emergencyService
    ? [
        {
          icon: Clock,
          label: "Emergency Service",
          value: "24/7",
          suffix: " Available",
          isStatic: true,
        },
      ]
    : []),
];

export function TrustBar() {
  return (
    <section className="relative bg-gradient-to-r from-gray-50 via-white to-gray-50 py-10 border-y border-gray-100 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(8, 145, 178, 0.1) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }} />
      </div>

      <div className="container-custom relative">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {trustItems.slice(0, 5).map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-center gap-4 group"
            >
              <motion.div 
                className="p-3 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/10 group-hover:border-primary/30 transition-all duration-300"
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                <item.icon className="h-6 w-6 text-primary" />
              </motion.div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">{item.label}</p>
                <p className="font-bold text-gray-900 text-lg">
                  {item.isStatic ? (
                    <>{item.value}{item.suffix || ""}</>
                  ) : (
                    <AnimatedCounter value={item.value} suffix={item.suffix} />
                  )}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
