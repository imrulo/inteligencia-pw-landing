# Favicon Setup Instructions

## Quick Setup

1. **Create a favicon.ico file** (16x16, 32x32, or 48x48 pixels recommended)
   - You can use online tools like [favicon.io](https://favicon.io) or [realfavicongenerator.net](https://realfavicongenerator.net)
   - Design should represent "Inteligencia" or use initials "IP"
   - Recommended colors: Gold (#d4af37) and Navy (#1e293b)

2. **Place the file in the `public` directory:**
   ```
   public/favicon.ico
   ```

3. **For best results, also create:**
   - `public/apple-touch-icon.png` (180x180px)
   - `public/android-chrome-192x192.png` (192x192px)
   - `public/android-chrome-512x512.png` (512x512px)

4. **Update `public/manifest.json`** to include all icon sizes if you add them.

## Temporary Solution

If you need to deploy immediately without a custom favicon, Next.js will use the default favicon placeholder. You can add a custom one later without affecting functionality.

