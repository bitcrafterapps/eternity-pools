# Eternity Pool 🏊

Professional pool cleaning, maintenance, and repair services in Rancho Santa Margarita and South Orange County.

## About

Eternity Pool has been serving South Orange County for over 10 years, providing top-quality pool services to keep your pool sparkling year-round. We're your trusted local pool experts!

**Contact:**
- 📞 Phone: (949) 690-6381
- 📧 Email: eternitypool@gmail.com
- 📍 Address: 31441 Santa Margarita Parkway, Suite A-207, Rancho Santa Margarita, CA 92688

## Services

- **Weekly Pool Cleaning** - Regular weekly cleaning to keep your pool crystal clear
- **Pool Equipment Repair** - Expert repair for pumps, filters, heaters, and all equipment
- **Green Pool Recovery** - Transform your green, algae-filled pool back to crystal clear
- **Pool Tile Cleaning** - Remove calcium buildup and restore the beauty of your pool tile
- **Pool Resurfacing** - Professional resurfacing and refinishing services
- **Salt System Installation** - Convert to a salt water pool for easier maintenance

## Service Areas

We proudly serve the following communities in South Orange County:

- Rancho Santa Margarita
- Trabuco Canyon
- Robinson Ranch
- Coto de Caza
- Dove Canyon
- Mission Viejo
- Ladera Ranch
- Laguna Hills
- Lake Forest

## Tech Stack

Built with modern web technologies:

- **Next.js 14** - React framework with App Router
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **TypeScript** - Type safety

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Configuration

Site configuration is managed via `client-config.json`. See `client-config.example.json` for the full schema.

## Project Structure

```
├── public/                 # Static assets
├── src/
│   ├── app/               # Next.js pages
│   │   ├── about/         # About page
│   │   ├── contact/       # Contact page
│   │   ├── free-estimate/ # Free estimate page
│   │   ├── gallery/       # Gallery page
│   │   ├── reviews/       # Reviews page
│   │   ├── service-areas/ # Service areas page
│   │   └── services/      # Services pages
│   ├── components/
│   │   ├── forms/         # Form components
│   │   ├── layout/        # Header, Footer
│   │   ├── sections/      # Homepage sections
│   │   └── ui/            # Reusable UI components
│   ├── data/
│   │   └── config.ts      # Site configuration
│   └── styles/
│       └── globals.css    # Global styles
└── client-config.json     # Client configuration
```

## Pages

| Page | Path | Description |
|------|------|-------------|
| Home | `/` | Landing page with hero, services, testimonials |
| About | `/about` | Company information and team |
| Services | `/services` | All services overview |
| Service Detail | `/services/[slug]` | Individual service pages |
| Service Areas | `/service-areas` | Areas we serve |
| Gallery | `/gallery` | Project photos |
| Reviews | `/reviews` | Customer testimonials |
| Contact | `/contact` | Contact form and information |
| Free Estimate | `/free-estimate` | Request a quote |

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import to Vercel
3. Deploy

### Manual

```bash
npm run build
npm start
```

## Hours of Operation

| Day | Hours |
|-----|-------|
| Monday - Friday | 8:00 AM - 5:00 PM |
| Saturday | 8:00 AM - 5:00 PM |
| Sunday | Closed |

*Emergency service available for equipment failures*

## License

Proprietary - BitCrafter Apps
