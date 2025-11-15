# Layout Components Documentation

Complete reference for layout components in `src/layouts/`

---

## 📦 Components

1. [Navigation](#navigation)
2. [NavLink](#navlink)
3. [Footer](#footer)
4. [RootLayout](#rootlayout)

---

## Navigation

Sticky navigation bar with responsive mobile menu.

### Import

```tsx
import { Navigation } from "@/layouts";
```

### Features

- **Sticky Positioning**: Stays at top on scroll
- **Responsive**: Desktop horizontal nav, mobile hamburger menu
- **Mobile Menu**: Slides down with smooth animation
- **Active States**: Highlights current page
- **CTA Button**: "Get a Free Quote" button
- **Logo**: Company logo on the left

### Structure

**Desktop (lg+)**:
```
┌──────────────────────────────────────────────────┐
│  [Logo]  Home Services Projects About Blog  [CTA]│
└──────────────────────────────────────────────────┘
```

**Mobile (<lg)**:
```
┌──────────────────────────────┐
│  [Logo]              [☰]     │
├──────────────────────────────┤  (when open)
│  Home                        │
│  Services                    │
│  Projects                    │
│  About us                    │
│  Blog                        │
│  [Get a Free Quote]          │
└──────────────────────────────┘
```

### Usage

```tsx
// In layout.tsx
import { Navigation } from "@/layouts";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
```

### Styling

- **Height**: 73px (matches Figma)
- **Background**: Dark background with bottom border
- **Z-Index**: 50 (stays above content)
- **Transition**: 300ms ease-in-out for mobile menu

### Behavior

1. **Desktop**: All links visible inline with CTA button
2. **Mobile**: Hamburger icon toggles menu
3. **Menu Open**: Slides down with fade-in
4. **Menu Close**: Slides up with fade-out
5. **Link Click**: Automatically closes mobile menu

---

## NavLink

Navigation link component with active state styling.

### Import

```tsx
import { NavLink } from "@/layouts";
```

### Props

| Prop        | Type        | Default | Description              |
| ----------- | ----------- | ------- | ------------------------ |
| `href`      | `string`    | **req** | Link destination         |
| `isActive`  | `boolean`   | `false` | Active state (current)   |
| `className` | `string`    | -       | Additional classes       |
| `onClick`   | `function`  | -       | Click handler            |
| `children`  | `ReactNode` | **req** | Link text                |

### Usage

```tsx
import { NavLink } from "@/layouts";
import { usePathname } from "next/navigation";

function MyNav() {
  const pathname = usePathname();
  
  return (
    <NavLink href="/about" isActive={pathname === "/about"}>
      About Us
    </NavLink>
  );
}
```

### States

- **Default**: Gray text (`text-text-body`)
- **Hover**: White text (`text-text-title`)
- **Active**: Yellow text (`text-secondary-base`)

### Typography

- **Font**: Manrope (heading font)
- **Size**: 18px
- **Weight**: 600 (semibold)

---

## Footer

Multi-column footer with links, contact info, and social media.

### Import

```tsx
import { Footer } from "@/layouts";
```

### Structure

**Desktop (lg)**:
```
┌──────────────────────────────────────────────────┐
│  [Logo & Desc]  │  Quick Links │  Services │ Contact │
│  [Social Icons] │  Home        │  UX/UI    │ Email    │
│                 │  Services    │  E-Comm   │ Phone    │
│                 │  Projects    │  Mobile   │ Location │
│                 │  About Us    │  Dashbrd  │          │
│                 │  Blog        │  See All  │          │
├──────────────────────────────────────────────────┤
│  © 2025 Two Wings. All rights reserved.          │
└──────────────────────────────────────────────────┘
```

**Mobile**:
- Columns stack vertically
- Logo/description → Quick Links → Services → Contact
- Copyright at bottom

### Columns

#### Column 1: Company
- Logo
- Short description
- Social media icons (LinkedIn, Instagram, Twitter)

#### Column 2: Quick Links
- Home
- Services
- Projects
- About Us
- Blog

#### Column 3: Our Services
- UX/UI Design
- E-Commerce Solutions
- Mobile Applications
- Custom Dashboards
- See All Services

#### Column 4: Contact Us
- Email (with icon)
- WhatsApp (with icon)
- Location (with icon)

### Usage

```tsx
// In layout.tsx
import { Footer } from "@/layouts";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

### Features

- **Responsive Grid**: 1 column mobile, 2 on tablet, 4 on desktop
- **Dynamic Year**: Shows current year in copyright
- **External Links**: WhatsApp opens in new tab
- **Hover States**: Links change color on hover
- **Icons**: SVG icons inline for email, phone, location

### Data Source

Footer uses constants from `@/lib/constants`:
- `ROUTES` - Page links
- `CONTACT_INFO` - Email, phone, location
- `COMPANY_INFO` - Company name and description

---

## RootLayout

Root layout wrapper that includes Navigation and Footer.

### Location

`src/app/layout.tsx`

### Structure

```tsx
<html lang="en" className="scroll-smooth">
  <body className="bg-background-DEFAULT text-text-body">
    <Navigation />
    <main className="min-h-screen">
      {children}
    </main>
    <Footer />
  </body>
</html>
```

### Features

1. **Font Loading**: All 4 Google Fonts loaded
   - Playfair Display (display)
   - Lato (sans)
   - Manrope (heading)
   - Inter (body)

2. **Global Styles**: Background and text colors applied
   - Background: `#0A0C0F` (dark)
   - Text: `#C4C4C4` (gray)

3. **Smooth Scroll**: Added to HTML element

4. **Structure**:
   - Navigation at top (sticky)
   - Main content area (min-h-screen)
   - Footer at bottom

### Metadata

```tsx
export const metadata: Metadata = {
  title: "Two Wings | From Vision to Flight",
  description: "Professional web solutions at smart prices...",
  keywords: ["web development", "no-code", ...],
  authors: [{ name: "Two Wings" }],
  openGraph: { ... },
};
```

---

## 🎨 Styling Details

### Navigation

**Desktop**:
- Height: `73px`
- Padding: Container responsive padding
- Gap between links: `32px` (gap-8)
- Background: Dark with bottom border

**Mobile**:
- Hamburger icon: `24px × 24px`
- Menu padding: `24px` vertical
- Link size: `20px` (larger than desktop)
- Full width CTA button

### Footer

**Desktop**:
- Padding: `64px` vertical (py-16)
- Column gap: `48px` (gap-12)
- Copyright padding: `32px` top

**Mobile**:
- Padding: `48px` vertical (py-12)
- Column gap: `48px` (gap-12)
- Stacked layout

### Colors

- Background: `bg-background-DEFAULT` (#0A0C0F)
- Border: `border-border-DEFAULT` (rgba(255,255,255,0.1))
- Text: `text-text-body` (#C4C4C4)
- Active: `text-secondary-base` (#FFC83A)
- Links: `text-primary-base` (#29ADC5)

---

## 📱 Responsive Behavior

### Breakpoints

- **Mobile**: < 1024px → Hamburger menu
- **Desktop**: ≥ 1024px → Full navigation

### Navigation

```tsx
// Desktop nav (hidden on mobile)
<div className="hidden lg:flex">
  {/* links */}
</div>

// Mobile menu button (hidden on desktop)
<button className="lg:hidden">
  {/* hamburger icon */}
</button>
```

### Footer

```tsx
// Responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
  {/* columns */}
</div>
```

---

## ♿ Accessibility

### Navigation

- **Role**: `role="navigation"`
- **Aria Label**: `aria-label="Main navigation"`
- **Menu Button**: `aria-label` and `aria-expanded`
- **Keyboard**: Tab navigation works correctly

### Footer

- **Role**: `role="contentinfo"`
- **Links**: Proper anchor tags with hover states
- **External Links**: `rel="noopener noreferrer"` for security

### General

- **Semantic HTML**: `<nav>`, `<footer>`, `<main>`
- **Focus States**: Visible focus rings
- **Link Text**: Descriptive and meaningful

---

## 🔧 Customization

### Change Navigation Links

Edit `navigationLinks` array in `Navigation.tsx`:

```tsx
const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  // Add more...
];
```

### Change Footer Columns

Edit arrays in `Footer.tsx`:

```tsx
const quickLinks = [
  { label: "Home", href: "/" },
  // Add more...
];

const services = [
  { label: "UX/UI Design", href: "/services#ux-ui" },
  // Add more...
];
```

### Update Contact Info

Edit `src/lib/constants.ts`:

```tsx
export const CONTACT_INFO = {
  EMAIL: "your@email.com",
  PHONE: "+1234567890",
  LOCATION: "Your Location",
};
```

---

## 🚀 Usage Tips

1. **Active Links**: Use `usePathname()` hook for active state
2. **Mobile Menu**: Closes automatically on link click
3. **Footer Data**: Centralized in constants file
4. **SEO**: Metadata configured in layout
5. **Fonts**: Auto-optimized by Next.js

---

## 📦 All Imports

```tsx
// Layout components
import { Navigation, Footer, NavLink } from "@/layouts";

// In pages
import { usePathname } from "next/navigation";
```

---

## 🎯 Next Steps

1. Add real social media URLs in Footer
2. Create service and project detail pages
3. Implement contact form
4. Add scroll-to-top button
5. Add loading states for navigation

---

**All layout components are production-ready!** 🚀

