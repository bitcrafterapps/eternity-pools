"use client";

import { useState } from "react";
import { siteConfig, services } from "@/data/config";
import { Button } from "@/components/ui/button";
import { CheckCircle, Loader2 } from "lucide-react";

interface ContactFormProps {
  variant?: "hero" | "page";
  showServices?: boolean;
  className?: string;
}

export function ContactForm({ 
  variant = "page", 
  showServices = true,
  className = "" 
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          formSource: variant === "hero" ? "hero-form" : "contact-page",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setIsSubmitted(true);
      setFormData({ name: "", phone: "", email: "", service: "", message: "" });
    } catch (err) {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // If GHL form embed is configured, use that instead
  if (siteConfig.ghl.formEmbed) {
    return <div dangerouslySetInnerHTML={{ __html: siteConfig.ghl.formEmbed }} />;
  }

  // Success state
  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">
          Thank You!
        </h3>
        <p className="text-gray-600 mb-4">
          We&apos;ve received your request and will contact you shortly.
        </p>
        <Button
          variant="outline"
          onClick={() => setIsSubmitted(false)}
        >
          Submit Another Request
        </Button>
      </div>
    );
  }

  const inputClasses = variant === "hero"
    ? "w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 bg-gray-50/50"
    : "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent";

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      {error && (
        <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg text-sm">
          {error}
        </div>
      )}

      {variant === "page" ? (
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={inputClasses}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className={inputClasses}
            />
          </div>
        </div>
      ) : (
        <>
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name *"
              required
              className={inputClasses}
            />
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number *"
              required
              className={inputClasses}
            />
          </div>
        </>
      )}

      {variant === "page" ? (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputClasses}
          />
        </div>
      ) : (
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address *"
            required
            className={inputClasses}
          />
        </div>
      )}

      {showServices && (
        <div>
          {variant === "page" && (
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Service Needed
            </label>
          )}
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`${inputClasses} ${!formData.service ? "text-gray-500" : "text-gray-700"}`}
          >
            <option value="">Select Service Needed</option>
            {services.map((service: any) => (
              <option key={service.slug} value={service.name}>
                {service.name}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>
      )}

      <div>
        {variant === "page" && (
          <label className="block text-sm font-medium text-gray-700 mb-1">
            How Can We Help? *
          </label>
        )}
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={variant === "hero" ? "Describe your project..." : "Tell us about your project or question..."}
          rows={variant === "hero" ? 3 : 4}
          required={variant === "page"}
          className={`${inputClasses} resize-none`}
        />
      </div>

      {variant === "hero" ? (
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-primary to-secondary text-white py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            "Get My Free Estimate →"
          )}
        </button>
      ) : (
        <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      )}

      <p className="text-xs text-center text-gray-500">
        By submitting, you agree to receive calls and texts about your inquiry.
      </p>
    </form>
  );
}
