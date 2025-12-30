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
    license: "1003581",
    yearsInBusiness: "15",
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
    serviceNoun: "Experts",
    serviceVerb: "pool service",
    emergencyService: false,
    schemaType: "HomeAndConstructionBusiness",
  },

  // Service Area
  serviceArea: {
    areas: "Rancho Santa Margarita, Trabuco Canyon, Robinson Ranch, Coto de Caza, Dove Canyon, Mission Viejo, Ladera Ranch, Laguna Hills, Lake Forest".split(",").map(s => s.trim()),
    radius: "20",
    primaryCity: "South Orange County",
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
    rating: "5",
    count: "1",
    googleReviewLink: "",
  },

  // Business Hours
  hours: {
    weekdays: "8:00 AM - 5:00 PM",
    saturday: "8:00 AM - 5:00 PM",
    sunday: "Closed",
    emergencyNote: "",
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
    "image": "/images/services/weekly-pool-cleaning.png"
  },
  {
    "name": "Pool Equipment Repair",
    "slug": "pool-equipment-repair",
    "shortDescription": "Expert repair services for pumps, filters, heaters, and all pool equipment.",
    "description": "From pump failures to filter issues, our certified technicians diagnose and repair all types of pool equipment. We carry parts for most major brands and offer same-day service when possible.",
    "icon": "🔧",
    "image": "/images/services/pool-equipment-repair.png"
  },
  {
    "name": "Green Pool Recovery",
    "slug": "green-pool-recovery",
    "shortDescription": "Transform your green, algae-filled pool back to crystal clear in days.",
    "description": "Don't drain your green pool! Our proven recovery process eliminates algae and restores water clarity. We've rescued thousands of neglected pools and can save yours too.",
    "icon": "🌿",
    "image": "/images/services/green-pool-recovery.png"
  },
  {
    "name": "Pool Tile Cleaning",
    "slug": "pool-tile-cleaning",
    "shortDescription": "Remove calcium buildup and restore the beauty of your pool tile.",
    "description": "Our bead blasting and acid washing techniques safely remove stubborn calcium deposits, stains, and discoloration from your pool tile and waterline without damaging surfaces.",
    "icon": "✨",
    "image": "/images/services/pool-tile-cleaning.png"
  },

  {
    "name": "Salt System Installation",
    "slug": "salt-system-installation",
    "shortDescription": "Convert to a salt water pool for softer water and easier maintenance.",
    "description": "Enjoy the benefits of salt water swimming! We install and service salt chlorine generators from leading brands. Say goodbye to harsh chlorine and hello to silky smooth water.",
    "icon": "🧂",
    "image": "/images/services/salt-system-installation.png"
  }
];

// Testimonials
export const testimonials: any[] = [
  {
    "name": "The Friedman Family",
    "location": "Rancho Santa Margarita, CA",
    "text": "Eternity Pool has maintained our pool for years now. They're always on time, professional, and our pool has never looked better. Highly recommend!",
    "rating": 5,
    "service": "Weekly Pool Cleaning"
  },
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
