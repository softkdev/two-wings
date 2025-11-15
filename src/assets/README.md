# Assets

This folder contains all static assets used in the application.

## Structure

```
assets/
  ├── icons/          SVG icons
  ├── images/         PNG/WebP images
  └── logos/          Brand logos
```

## SVG Icons to Export from Figma

### Logo
- [ ] `logo-icon.svg` - Two Wings eagle icon
- [ ] `logo-text.svg` - Two Wings text

### Service Icons
- [ ] `icon-design.svg` - UX/UI Design
- [ ] `icon-cart.svg` - E-Commerce
- [ ] `icon-mobile.svg` - Mobile Apps
- [ ] `icon-dashboard.svg` - Business Tools
- [ ] `icon-ai.svg` - AI Systems
- [ ] `icon-education.svg` - Educational Platforms

### Social Media
- [ ] `social-linkedin.svg`
- [ ] `social-instagram.svg`
- [ ] `social-twitter.svg`

### Contact Icons
- [ ] `icon-email.svg`
- [ ] `icon-whatsapp.svg`
- [ ] `icon-location.svg`

### UI Icons
- [ ] `icon-sparkle.svg` - Premium badge icon
- [ ] `icon-arrow-right.svg`
- [ ] `icon-close.svg`
- [ ] `icon-menu.svg`

## Images
- [ ] `hero-asset.png` - 3D crystal/geometric illustration

## Guidelines

1. **SVG Icons**: Use SVGR for React component conversion
2. **Optimization**: Run through SVGO before committing
3. **Naming**: Use kebab-case for all file names
4. **Size**: Keep file sizes under 100KB when possible
5. **Format**: 
   - Icons: SVG
   - Photos: WebP (with PNG fallback)
   - Illustrations: SVG or PNG

## Usage

```tsx
// Using Next.js Image component
import Image from 'next/image';
import heroAsset from '@/assets/images/hero-asset.png';

<Image src={heroAsset} alt="Hero" />

// Using SVGR (after setup)
import { LogoIcon } from '@/assets/icons';

<LogoIcon className="w-6 h-6" />
```

