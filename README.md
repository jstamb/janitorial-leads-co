# Janitorial Leads Co

Marketing agency landing page specifically for commercial cleaning companies.

## Brand Overview

**Brand Name:** Janitorial Leads Co (alternative: "Janitorial Growth Marketing")

**Tagline:** "Stop competing on price. Start winning contracts."

**Target Market:** Commercial cleaning/janitorial companies, BSCs (Building Service Contractors)

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary (Deep Blue) | `#1e3a5f` | Trust, professionalism, headers |
| Primary Light | `#2d5a8a` | Hover states, accents |
| Secondary (Green) | `#22c55e` | CTAs, success, growth |
| Accent (Teal) | `#0d9488` | Balance, highlights |
| Slate (900) | `#0f172a` | Dark backgrounds |

### Typography
- **Font:** System font stack (fast loading, professional)
- **Headings:** Bold, large, impactful
- **Body:** Clean, readable, 16px base

## Key Sections

1. **Hero** - "Stop Competing on Price" headline with stats and strategy call CTA
2. **Pain Points** - 5 industry-specific problems with solutions
3. **Services** - Lead Gen, Website Design, SEO, Google Ads, Reputation Management
4. **Case Study** - Sparkling Professionals transformation story
5. **Contact** - Form with revenue qualifier, posts to `/api/contact`
6. **CTA** - Final conversion push with scarcity (5 clients/month)
7. **Footer** - Links, newsletter signup, contact info

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Language:** TypeScript
- **Deployment:** Vercel-ready

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── app/
│   ├── api/contact/   # Contact form endpoint
│   ├── globals.css    # Tailwind + custom theme
│   ├── layout.tsx     # Root layout with metadata
│   └── page.tsx       # Main landing page
├── components/
│   ├── sections/      # Page sections (Hero, Services, etc.)
│   └── ui/           # Reusable UI components
└── lib/
    └── utils.ts      # Utility functions (cn)
```

## Contact Form Integration

The contact form POSTs to `/api/contact`. To integrate with your CRM:

1. Edit `src/app/api/contact/route.ts`
2. Add your webhook URL or CRM API integration
3. Options: GHL, HubSpot, Zapier, Make, etc.

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Self-Hosted
```bash
npm run build
npm run start
```

## Customization

### Update Contact Info
- Edit `src/components/sections/Footer.tsx`
- Edit `src/components/sections/Contact.tsx`

### Update Colors
- Edit `src/app/globals.css` → `@theme` section

### Add More Case Studies
- Edit `src/components/sections/CaseStudy.tsx`

## License

Private project for internal use.

---

Built with ❤️ for the commercial cleaning industry.
