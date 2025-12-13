// Site Configuration - Replace tokens with actual values
// This file is the single source of truth for all site content

export const siteConfig = {
  // Company Information
  company: {
    name: "Eternity Pool",
    slug: "eternity-pool",
    phone: "9496906381",
    email: "eternitypool@gmail.com",
    address: "31441 Santa Margarita Parkway, Suite A-207",
    city: "Rancho Santa Margarita",
    state: "CA",
    stateFullName: "California",
    zip: "92688",
    license: "",
    yearsInBusiness: "10",
  },

  // Branding
  branding: {
    logoUrl: "",
    faviconUrl: "",
    primaryColor: "#0891b2",
    secondaryColor: "#0e7490",
    accentColor: "#f59e0b",
    fontHeading: "Inter",
    fontBody: "Inter",
  },

  // Industry Configuration
  industry: {
    type: "Pool Service",
    slug: "pool-service",
    serviceNoun: "Pool Experts",
    serviceVerb: "pool service",
    emergencyService: true,
    schemaType: "HomeAndConstructionBusiness",
  },

  // Service Area
  serviceArea: {
    areas: "Rancho Santa Margarita, Trabuco Canyon, Robinson Ranch, Coto de Caza, Dove Canyon, Mission Viejo, Ladera Ranch, Laguna Hills, Lake Forest".split(",").map(s => s.trim()),
    radius: "20",
    primaryCity: "Rancho Santa Margarita",
  },

  // Social Links
  social: {
    facebook: "",
    instagram: "",
    google: "",
    yelp: "",
    bbb: "",
    nextdoor: "",
  },

  // GHL Integration
  ghl: {
    calendarEmbed: "",
    formEmbed: "",
    chatWidget: "",
    trackingId: "",
    webhookUrl: "",  // GHL webhook URL for form submissions
  },

  // SEO & Analytics
  seo: {
    googleAnalyticsId: "",
    googleTagManagerId: "",
    facebookPixelId: "",
    metaDescription: "Eternity Pool offers professional pool cleaning, maintenance, and repair services in Rancho Santa Margarita and South Orange County. Keep your pool sparkling year-round. Free estimates!",
    metaKeywords: "pool service rancho santa margarita, pool cleaning mission viejo, pool maintenance orange county, swimming pool service ladera ranch",
  },

  // Site URL
  siteUrl: "",

  // Review Stats
  reviews: {
    rating: "4.9",
    count: "150",
    googleReviewLink: "",
  },

  // Business Hours
  hours: {
    weekdays: "8:00 AM - 5:00 PM",
    saturday: "8:00 AM - 5:00 PM",
    sunday: "Closed",
    emergencyNote: "Emergency service available for equipment failures",
  },
};

// Services Configuration
export const services: any[] = [
  {
    "name": "Weekly Pool Cleaning",
    "slug": "weekly-pool-cleaning",
    "shortDescription": "Regular weekly cleaning to keep your pool crystal clear and swim-ready all year.",
    "description": "Our comprehensive weekly cleaning service includes skimming, brushing, vacuuming, chemical balancing, and equipment checks. We handle everything so you can just enjoy your pool.",
    "icon": "🏊",
    "image": "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    "name": "Pool Equipment Repair",
    "slug": "pool-equipment-repair",
    "shortDescription": "Expert repair services for pumps, filters, heaters, and all pool equipment.",
    "description": "From pump failures to filter issues, our certified technicians diagnose and repair all types of pool equipment. We carry parts for most major brands and offer same-day service when possible.",
    "icon": "🔧",
    "image": "https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    "name": "Green Pool Recovery",
    "slug": "green-pool-recovery",
    "shortDescription": "Transform your green, algae-filled pool back to crystal clear in days.",
    "description": "Don't drain your green pool! Our proven recovery process eliminates algae and restores water clarity. We've rescued thousands of neglected pools and can save yours too.",
    "icon": "🌿",
    "image": "https://images.unsplash.com/photo-1598902108854-10e335adac99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    "name": "Pool Tile Cleaning",
    "slug": "pool-tile-cleaning",
    "shortDescription": "Remove calcium buildup and restore the beauty of your pool tile.",
    "description": "Our bead blasting and acid washing techniques safely remove stubborn calcium deposits, stains, and discoloration from your pool tile and waterline without damaging surfaces.",
    "icon": "✨",
    "image": "https://images.unsplash.com/photo-1562778612-e1e0cda9915c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    "name": "Pool Resurfacing",
    "slug": "pool-resurfacing",
    "shortDescription": "Revitalize your pool with professional resurfacing and refinishing services.",
    "description": "Whether you need plaster repair, pebble finish, or a complete resurface, we transform worn and stained pool surfaces into beautiful, durable finishes that last for years.",
    "icon": "🎨",
    "image": "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    "name": "Salt System Installation",
    "slug": "salt-system-installation",
    "shortDescription": "Convert to a salt water pool for softer water and easier maintenance.",
    "description": "Enjoy the benefits of salt water swimming! We install and service salt chlorine generators from leading brands. Say goodbye to harsh chlorine and hello to silky smooth water.",
    "icon": "🧂",
    "image": "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

// Testimonials
export const testimonials: any[] = [
  {
    "name": "Jennifer Martinez",
    "location": "Rancho Santa Margarita, CA",
    "text": "Eternity Pool has maintained our pool for years now. They're always on time, professional, and our pool has never looked better. Highly recommend!",
    "rating": 5,
    "service": "Weekly Pool Cleaning"
  },
  {
    "name": "Robert Thompson",
    "location": "Mission Viejo, CA",
    "text": "We bought a house with a neglected green pool. Eternity Pool had it sparkling in just a few days! Amazing transformation and fair pricing.",
    "rating": 5,
    "service": "Green Pool Recovery"
  },
  {
    "name": "Lisa Chen",
    "location": "Ladera Ranch, CA",
    "text": "Our pool pump died on a Saturday before a party. They came out same day and had us back up and running. Lifesavers! Great emergency service.",
    "rating": 5,
    "service": "Pool Equipment Repair"
  }
];

// FAQ Items
export const faqItems: any[] = [
  {
    "question": "How often should I have my pool professionally cleaned?",
    "answer": "For most Southern California pools, we recommend weekly service year-round. This keeps chemicals balanced and prevents algae growth, especially during our warm months."
  },
  {
    "question": "Can you fix my green pool without draining it?",
    "answer": "In most cases, yes! Our green pool recovery process can restore even severely neglected pools without draining. This saves water, money, and gets you swimming faster than a drain and refill."
  },
  {
    "question": "Do you service salt water pools?",
    "answer": "Absolutely! We service both traditional chlorine and salt water pools. We can also convert your existing pool to a salt system if you're interested in making the switch."
  }
];

// Gallery Images
export const galleryImages: any[] = [];

// Team Members (optional)
export const teamMembers: any[] = [];

export default siteConfig;
