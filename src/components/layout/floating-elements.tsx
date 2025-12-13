"use client";

import { useState, useEffect } from "react";
import { Phone, ArrowUp, MessageCircle, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/config";
import { formatPhoneLink } from "@/lib/utils";

export function FloatingElements() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Click-to-Call FAB - Always visible on mobile */}
      <motion.a
        href={formatPhoneLink(siteConfig.company.phone)}
        className="fixed bottom-20 right-4 z-50 lg:hidden flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary to-secondary text-white rounded-full shadow-lg shadow-primary/30"
        aria-label="Call us"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Phone className="h-6 w-6" />
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-25" />
      </motion.a>

      {/* Get Quote Sticky Bar - Mobile only */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-gradient-to-r from-primary via-primary to-secondary text-white p-4 shadow-[0_-4px_20px_-1px_rgba(0,0,0,0.2)]">
        <a
          href="/free-estimate"
          className="flex items-center justify-center gap-2 font-semibold text-lg"
        >
          <Sparkles className="h-5 w-5" />
          Get Your Free Estimate
          <span className="ml-1">→</span>
        </a>
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-24 right-4 lg:bottom-8 lg:right-8 z-40 flex items-center justify-center w-12 h-12 bg-white text-primary rounded-xl shadow-xl border border-gray-100 hover:bg-primary hover:text-white transition-all duration-300"
            aria-label="Back to top"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
