# Inteligencia.pw - Premium Domain Landing Page

A production-ready, conversion-optimized landing page for selling the premium domain **Inteligencia.pw**. Built with Next.js 15, React 19, TypeScript, and Tailwind CSS v3.4+.

## 🚀 Features

- **Next.js 15** with App Router and React Server Components
- **TypeScript 5.x** for type safety
- **Tailwind CSS v3.4+** for modern, responsive styling
- **Framer Motion** for smooth animations
- **SEO Optimized** with dynamic metadata, OG images, and structured data
- **Performance Optimized** - targeting Lighthouse score ≥95
- **Accessibility Compliant** - WCAG AA standards
- **Responsive Design** - flawless from mobile to 4K displays
- **Vercel Analytics** integration
- **Dynamic OG Image Generation** via @vercel/og

## 📋 Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

## 🛠️ Installation

1. **Clone the repository:**

```bash
git clone <your-repo-url>
cd inteligencia-pw-landing
```

2. **Install dependencies:**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up environment variables:**

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Edit `.env.local` and update the values:

```env
NEXT_PUBLIC_BASE_URL=https://inteligencia.pw
NEXT_PUBLIC_DOMAIN_NAME=Inteligencia.pw
```

## 🏃 Running Locally

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Building for Production

```bash
npm run build
npm start
```

## 📦 Deployment to Vercel

### Manual Deployment via Vercel Dashboard

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Configure environment variables:
     - `NEXT_PUBLIC_BASE_URL` = `https://inteligencia.pw` (or your production URL)
     - `NEXT_PUBLIC_DOMAIN_NAME` = `Inteligencia.pw`
   - Click "Deploy"

3. **Configure Custom Domain (if applicable):**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

## 📁 Project Structure

```
inteligencia-pw-landing/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   ├── og-image/
│   │   └── route.tsx             # Dynamic OG image generation
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout with metadata
│   ├── page.tsx                  # Main landing page
│   ├── not-found.tsx             # Custom 404 page
│   ├── robots.ts                 # Robots.txt generator
│   └── sitemap.ts                # Sitemap generator
├── components/
│   ├── sections/                 # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── ValueProposition.tsx
│   │   ├── MarketProof.tsx
│   │   ├── DataValidation.tsx
│   │   ├── Provenance.tsx
│   │   ├── UseCases.tsx
│   │   ├── TrustProcess.tsx
│   │   ├── FAQ.tsx
│   │   ├── ContactSection.tsx
│   │   ├── SocialShare.tsx
│   │   └── Footer.tsx
│   ├── ui/
│   │   └── FloatingCTA.tsx       # Sticky WhatsApp button
│   └── StructuredData.tsx        # JSON-LD schema markup
├── public/
│   ├── manifest.json              # PWA manifest
│   └── robots.txt                # Fallback robots.txt
├── .env.example                   # Environment variables template
├── next.config.ts                # Next.js configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies

```

## 🎨 Customization

### Changing the Domain Name

1. Update `.env.local`:
   ```env
   NEXT_PUBLIC_DOMAIN_NAME=YourDomain.com
   NEXT_PUBLIC_BASE_URL=https://yourdomain.com
   ```

2. The entire site will automatically adapt to the new domain name, including:
   - All headings and copy
   - Metadata and SEO
   - OG images
   - Structured data

### Modifying Content

- **Hero Section:** Edit `components/sections/HeroSection.tsx`
- **Value Propositions:** Edit `components/sections/ValueProposition.tsx`
- **Use Cases:** Edit `components/sections/UseCases.tsx`
- **FAQs:** Edit `components/sections/FAQ.tsx`
- **Contact Links:** Update WhatsApp and email links in relevant components

### Styling

- **Colors:** Modify `tailwind.config.ts` to change the luxury color palette
- **Fonts:** Update font imports in `app/layout.tsx` and `tailwind.config.ts`
- **Spacing/Layout:** Adjust Tailwind classes in component files

## 🔧 Contact Form Integration

The contact form currently logs submissions to the console. To enable email sending:

1. **Option 1: Use Resend (Recommended)**
   - Sign up at [resend.com](https://resend.com)
   - Install: `npm install resend`
   - Update `app/api/contact/route.ts` to use Resend API

2. **Option 2: Use SendGrid**
   - Sign up at [sendgrid.com](https://sendgrid.com)
   - Install: `npm install @sendgrid/mail`
   - Update `app/api/contact/route.ts` to use SendGrid API

3. **Option 3: Custom SMTP**
   - Use nodemailer or similar
   - Configure SMTP settings in environment variables

## 📊 Performance Optimization

- Images are optimized with Next.js Image component
- Code splitting is automatic with Next.js
- Server Components for better performance
- Static generation where possible
- Vercel Analytics for monitoring

## 🔒 Privacy & Compliance

- No cookies set (except for Vercel Analytics)
- No tracking scripts (except Vercel Analytics)
- GDPR compliant
- Privacy notice in footer

## 📝 License

This project is private and proprietary. All rights reserved.

## 👤 Contact

**Created by:** imrulo.eth
**Email:** imrulo.eth@proton.me
**WhatsApp:** [Contact via WhatsApp](https://wa.link/6difl3)

## 🐛 Troubleshooting

### Build Errors

- Ensure all environment variables are set
- Check Node.js version (18.x+ required)
- Clear `.next` folder and rebuild: `rm -rf .next && npm run build`

### Image Loading Issues

- Verify image URLs in components
- Check `next.config.ts` remote patterns
- Ensure Unsplash/Pexels images are accessible

### Deployment Issues

- Verify environment variables in Vercel dashboard
- Check build logs for errors
- Ensure custom domain DNS is configured correctly

---

**Made with ❤️ by imrulo.eth**

