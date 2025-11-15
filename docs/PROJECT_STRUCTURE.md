# Project Structure

Complete folder organization for the Two Wings Next.js application.

## 📁 Structure Overview

```
two-wings/
├── src/
│   ├── app/                    # Next.js 16 App Router
│   │   ├── layout.tsx          # Root layout with fonts & metadata
│   │   ├── page.tsx            # Home page (design system demo)
│   │   └── favicon.ico         # App favicon
│   │
│   ├── components/             # Reusable components
│   │   ├── ui/                 # Atomic UI components
│   │   │   └── index.ts        # UI exports
│   │   └── index.ts            # Component exports
│   │
│   ├── containers/             # Page-specific sections
│   │   └── index.ts            # Container exports
│   │
│   ├── layouts/                # Layout components
│   │   └── index.ts            # Layout exports
│   │
│   ├── lib/                    # Utilities & helpers
│   │   ├── utils.ts            # Helper functions (cn, formatDate, etc.)
│   │   ├── constants.ts        # App constants (routes, services, etc.)
│   │   └── index.ts            # Lib exports
│   │
│   ├── hooks/                  # Custom React hooks
│   │   └── index.ts            # Hook exports
│   │
│   ├── types/                  # TypeScript types
│   │   └── index.ts            # Type definitions
│   │
│   ├── assets/                 # Static assets
│   │   └── README.md           # Asset guidelines
│   │
│   └── styles/                 # Global styles
│       └── globals.css         # Tailwind config + design tokens
│
├── public/                     # Static public files
├── DESIGN_TOKENS.md           # Design system reference
├── SETUP_COMPLETE.md          # Setup summary
├── PROJECT_STRUCTURE.md       # This file
└── package.json               # Dependencies
```

---

## 📂 Directory Details

### `/src/app/`
**Purpose**: Next.js App Router pages and layouts

**Files**:
- `layout.tsx` - Root layout component with:
  - Font loading (Playfair Display, Lato, Manrope, Inter)
  - Global CSS import
  - SEO metadata
- `page.tsx` - Homepage / design system demo
- `favicon.ico` - App favicon

**Import**: Direct from Next.js routing

---

### `/src/components/ui/`
**Purpose**: Atomic, reusable UI components

**Planned Components**:
- `Button.tsx` - Button component (4 variants)
- `Badge.tsx` - Pill-shaped tags
- `Card.tsx` - Card container
- `Logo.tsx` - Company logo
- `IconWrapper.tsx` - Icon background container
- `Container.tsx` - Max-width wrapper

**Import**: 
```tsx
import { Button, Badge } from '@/components/ui';
```

**Guidelines**:
- Pure, presentational components
- No business logic or API calls
- Highly reusable and composable
- Well-typed props with TypeScript
- Include variants and sizes

---

### `/src/containers/`
**Purpose**: Smart components tied to specific pages/sections

**Planned Containers**:
- `HeroSection.tsx` - Hero section with CTA
- `StatsBar.tsx` - Statistics display (60%, 100%, 50+)
- `ServicesSection.tsx` - Services grid
- `ProjectsSection.tsx` - Project showcase
- `CTASection.tsx` - Call-to-action sections

**Import**: 
```tsx
import { HeroSection, StatsBar } from '@/containers';
```

**Guidelines**:
- Can contain business logic
- May fetch or manage state
- Compose multiple UI components
- Section-specific, less reusable

---

### `/src/layouts/`
**Purpose**: Layout wrappers and structural components

**Planned Layouts**:
- `Navigation.tsx` - Header navigation
- `Footer.tsx` - Site footer
- `MarketingLayout.tsx` - Marketing page wrapper

**Import**: 
```tsx
import { Navigation, Footer } from '@/layouts';
```

**Guidelines**:
- Provide consistent page structure
- Handle global navigation
- Wrap multiple pages

---

### `/src/lib/`
**Purpose**: Utility functions and constants

**Files**:
- `utils.ts` - Helper functions:
  - `cn()` - ClassNames utility
  - `formatDate()` - Date formatting
  - `truncate()` - Text truncation
  - `debounce()` - Function debouncing

- `constants.ts` - App constants:
  - `ROUTES` - Application routes
  - `CONTACT_INFO` - Contact details
  - `SOCIAL_LINKS` - Social media URLs
  - `COMPANY_INFO` - Company data
  - `SERVICES` - Service definitions
  - `STATS` - Statistics data

**Import**: 
```tsx
import { cn, ROUTES, SERVICES } from '@/lib';
```

**Guidelines**:
- Keep functions pure
- Use enums over strings
- Add JSDoc comments
- Write unit tests

---

### `/src/hooks/`
**Purpose**: Custom React hooks

**Planned Hooks**:
- `useMediaQuery.ts` - Responsive breakpoint hook
- `useScroll.ts` - Scroll position hook
- `useLocalStorage.ts` - LocalStorage management

**Import**: 
```tsx
import { useMediaQuery } from '@/hooks';
```

**Guidelines**:
- Follow "use" prefix convention
- Keep hooks focused and single-purpose
- Document hook parameters and return values

---

### `/src/types/`
**Purpose**: TypeScript type definitions and interfaces

**Defined Types**:
- `ButtonVariant` - Button style variants
- `Size` - Common size types
- `Service` - Service interface
- `Project` - Project interface
- `Stat` - Statistic interface
- `NavLink` - Navigation link
- `SocialLink` - Social media link

**Import**: 
```tsx
import type { ButtonVariant, Service } from '@/types';
```

**Guidelines**:
- Use `type` for unions and primitives
- Use `interface` for object shapes
- Export types, not values
- Add JSDoc descriptions

---

### `/src/assets/`
**Purpose**: Static assets (SVGs, images, logos)

**Subfolders** (to be created):
- `icons/` - SVG icons
- `images/` - PNG/WebP images
- `logos/` - Brand logos

**Import**: 
```tsx
import { LogoIcon } from '@/assets/icons';
// or
import heroAsset from '@/assets/images/hero-asset.png';
```

**Guidelines**:
- See `assets/README.md` for SVG export checklist
- Use SVGR for React component conversion
- Optimize with SVGO
- Use kebab-case naming

---

### `/src/styles/`
**Purpose**: Global styles and CSS

**Files**:
- `globals.css` - Tailwind CSS v4 configuration with:
  - CSS variables (colors, fonts, spacing)
  - `@theme` declarations
  - Base styles
  - Custom utilities

**Import**: 
```tsx
// Already imported in layout.tsx
import '@/styles/globals.css';
```

**Guidelines**:
- All design tokens in one place
- Use Tailwind CSS v4 `@theme` syntax
- Minimal custom CSS
- Document custom utilities

---

## 🔧 Path Aliases

TypeScript path alias configured in `tsconfig.json`:

```json
{
  "paths": {
    "@/*": ["./src/*"]
  }
}
```

**Usage Examples**:
```tsx
import { Button } from '@/components/ui';
import { HeroSection } from '@/containers';
import { Navigation } from '@/layouts';
import { cn, ROUTES } from '@/lib';
import { useMediaQuery } from '@/hooks';
import type { Service } from '@/types';
```

---

## 📦 Export Pattern

Each folder has an `index.ts` file for clean imports:

**❌ Bad**:
```tsx
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
```

**✅ Good**:
```tsx
import { Button, Badge, Card } from '@/components/ui';
```

---

## 🎯 Component Creation Flow

### 1. Create Component File
```tsx
// src/components/ui/Button.tsx
export function Button({ children, variant = 'fill' }) {
  return <button className={...}>{children}</button>;
}
```

### 2. Export from Index
```tsx
// src/components/ui/index.ts
export { Button } from './Button';
```

### 3. Use in App
```tsx
// src/app/page.tsx or src/containers/HeroSection.tsx
import { Button } from '@/components/ui';

<Button variant="fill">Click Me</Button>
```

---

## 🚀 Next Steps

### Phase 2: UI Components
Create in `src/components/ui/`:
- [ ] Button.tsx
- [ ] Badge.tsx
- [ ] Card.tsx
- [ ] Logo.tsx
- [ ] IconWrapper.tsx
- [ ] Container.tsx

### Phase 3: Layouts
Create in `src/layouts/`:
- [ ] Navigation.tsx (desktop + mobile)
- [ ] Footer.tsx

### Phase 4: Containers
Create in `src/containers/`:
- [ ] HeroSection.tsx
- [ ] StatsBar.tsx
- [ ] ServicesSection.tsx
- [ ] ProjectsSection.tsx

### Phase 5: Assets
Export from Figma to `src/assets/`:
- [ ] Logo SVGs
- [ ] Service icons (6 items)
- [ ] Social media icons (3 items)
- [ ] Contact icons (3 items)
- [ ] Hero 3D asset

---

## 📝 File Naming Conventions

| Type | Convention | Example |
|------|-----------|---------|
| Components | PascalCase | `Button.tsx`, `HeroSection.tsx` |
| Hooks | camelCase | `useMediaQuery.ts`, `useScroll.ts` |
| Utilities | camelCase | `utils.ts`, `constants.ts` |
| Types | PascalCase | `Service`, `ButtonVariant` |
| Assets | kebab-case | `logo-icon.svg`, `hero-asset.png` |
| Styles | kebab-case | `globals.css` |

---

## ✅ Setup Status

✅ Folder structure created  
✅ Index files with documentation  
✅ Utility functions (`cn`, `formatDate`, etc.)  
✅ Constants file with app data  
✅ Type definitions  
✅ Asset guidelines  
✅ Path aliases configured  
✅ Global CSS moved to `styles/`  
✅ Import paths updated  
✅ Zero linting errors  

---

## 🎨 Related Documentation

- **DESIGN_TOKENS.md** - Complete design system reference
- **SETUP_COMPLETE.md** - Setup summary and next steps
- **src/assets/README.md** - Asset export guidelines

---

**Project is ready for component development!** 🚀

