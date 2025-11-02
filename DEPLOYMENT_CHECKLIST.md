# Deployment Checklist

## Pre-Deployment

- [ ] Install dependencies: `npm install`
- [ ] Create `.env.local` from `.env.example`
- [ ] Set `NEXT_PUBLIC_BASE_URL` to your production URL
- [ ] Set `NEXT_PUBLIC_DOMAIN_NAME` to the domain being sold
- [ ] Test locally: `npm run dev`
- [ ] Verify all sections render correctly
- [ ] Test contact form functionality
- [ ] Check responsive design on mobile/tablet/desktop
- [ ] Verify WhatsApp and email links work
- [ ] Test OG image generation: `http://localhost:3000/og-image`

## Favicon Setup (Optional but Recommended)

- [ ] Create favicon.ico (see FAVICON_INSTRUCTIONS.md)
- [ ] Place in `public/favicon.ico`

## GitHub Setup

- [ ] Initialize git: `git init`
- [ ] Create `.gitignore` (already included)
- [ ] Add all files: `git add .`
- [ ] Initial commit: `git commit -m "Initial commit"`
- [ ] Create GitHub repository
- [ ] Add remote: `git remote add origin <repo-url>`
- [ ] Push to main: `git push -u origin main`

## Vercel Deployment

- [ ] Sign in to [vercel.com](https://vercel.com)
- [ ] Click "Add New Project"
- [ ] Import GitHub repository
- [ ] Configure environment variables:
  - `NEXT_PUBLIC_BASE_URL`
  - `NEXT_PUBLIC_DOMAIN_NAME`
- [ ] Deploy (Vercel auto-detects Next.js)
- [ ] Verify deployment success
- [ ] Test production URL

## Post-Deployment Verification

- [ ] Verify site loads correctly
- [ ] Check metadata in browser dev tools
- [ ] Test OG image: `<your-url>/og-image`
- [ ] Verify sitemap: `<your-url>/sitemap.xml`
- [ ] Check robots.txt: `<your-url>/robots.txt`
- [ ] Test WhatsApp link (mobile and desktop)
- [ ] Test email link
- [ ] Test contact form
- [ ] Run Lighthouse audit (target: ≥95)
- [ ] Test on multiple devices/browsers
- [ ] Verify all animations work
- [ ] Check for console errors

## Custom Domain (Optional)

- [ ] Add domain in Vercel project settings
- [ ] Configure DNS as instructed by Vercel
- [ ] Wait for DNS propagation
- [ ] Verify SSL certificate is active
- [ ] Test custom domain access

## Analytics & Monitoring

- [ ] Verify Vercel Analytics is tracking (no additional setup needed)
- [ ] Check Vercel dashboard for performance metrics

## Final Checks

- [ ] All sections display correctly
- [ ] All links work (WhatsApp, Email, Social Share)
- [ ] Contact form sends successfully (if email service configured)
- [ ] Mobile responsiveness verified
- [ ] SEO metadata correct
- [ ] No console errors
- [ ] Performance optimized
- [ ] Accessibility verified (WCAG AA)

---

**Ready to go live!** 🚀

