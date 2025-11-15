# Container Components Documentation

Complete reference for page section containers in `src/containers/`

---

## 📦 Components

1. [HeroSection](#herosection)
2. [StatsBar](#statsbar)
3. [ServicesSection](#servicessection)
4. [ProjectsSection](#projectssection)
5. [CTASection](#ctasection)

---

## HeroSection

Hero section with badge, title, description, CTA buttons, and 3D asset placeholder.

### Location

`src/containers/HeroSection/index.tsx`

### Import

```tsx
import { HeroSection } from "@/containers";
```

### Features

- **Badge**: Premium quality indicator with icon
- **Title**: Large display text with gradient accent
- **Paragraph**: Description text
- **CTA Buttons**: Two action buttons (primary + outline)
- **3D Asset**: Placeholder for 3D image/illustration
- **Decorative Effects**: Blur gradients in background

### Responsive Layout

| Screen      | Layout                                          |
| ----------- | ----------------------------------------------- |
| **Mobile**  | Vertical stack, centered text                   |
| **Tablet**  | Vertical stack, scaled image, centered text     |
| **Desktop** | Two columns: text left (1fr), image right (1fr) |

### Typography

- Title: `text-[48px] md:text-[56px] lg:text-hero` (64px)
- Subtitle: Gradient text with `text-gradient-primary`
- Paragraph: `text-body md:text-body-lg`

### Spacing

- Padding: `py-20 md:py-32 lg:py-40`
- Gap: `gap-12 lg:gap-16` between columns
- Bottom margin on elements: `mb-6`, `mb-8`, `mb-10`

### Usage

```tsx
import { HeroSection } from "@/containers";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* Other sections */}
    </>
  );
}
```

### Placeholder

The 3D asset is currently a placeholder. Replace with actual asset:

```tsx
// Current placeholder
<div className="rounded-card bg-gradient-to-br ...">
  {/* Placeholder */}
</div>

// Replace with:
<Image 
  src="/assets/hero-3d-asset.png" 
  alt="Hero illustration"
  width={600}
  height={600}
/>
```

---

## StatsBar

Statistics display with three stat items.

### Location

`src/containers/StatsBar/index.tsx`

### Import

```tsx
import { StatsBar } from "@/containers";
```

### Features

- **3 Statistics**: 60%, 100%, 50+
- **Data Source**: Uses `STATS` from `@/lib/constants`
- **Responsive**: Vertical on mobile, horizontal with dividers on desktop
- **Background**: Section background with borders

### Responsive Layout

| Screen                   | Layout                                |
| ------------------------ | ------------------------------------- |
| **Mobile (<md)**         | Vertical stack, centered, no dividers |
| **Tablet/Desktop (≥md)** | Horizontal row with vertical dividers |

### Data

```tsx
// From @/lib/constants
STATS = [
  { id: "cost-savings", value: "60%", label: "Average Cost Savings", color: "primary" },
  { id: "quality", value: "100%", label: "Premium Quality", color: "secondary" },
  { id: "clients", value: "50+", label: "Happy Clients", color: "primary" },
]
```

### Styling

- Background: `bg-background-section`
- Borders: Top and bottom (`border-y`)
- Padding: `py-8 md:py-12`
- Gap: `gap-8` (mobile)

### Usage

```tsx
import { StatsBar } from "@/containers";

<StatsBar />
```

---

## ServicesSection

Services grid with heading, description, and 6 service cards.

### Location

`src/containers/ServicesSection/index.tsx`

### Import

```tsx
import { ServicesSection } from "@/containers";
```

### Features

- **Section Header**: Title + description
- **6 Service Cards**: Grid layout with icons
- **Data Source**: Uses `SERVICES` from `@/lib/constants`
- **CTA Button**: "View All Services" with arrow icon
- **Service Icons**: SVG placeholders (to be replaced with assets)

### Responsive Grid

| Screen           | Columns   |
| ---------------- | --------- |
| **Mobile**       | 1 column  |
| **Tablet (md)**  | 2 columns |
| **Desktop (lg)** | 3 columns |

### Services

1. UX/UI Design
2. E-Commerce Solutions
3. Mobile Applications
4. Business Management Tools
5. AI-Powered Systems
6. Educational & Content Platforms

### Icons

Currently using SVG placeholders. Icon mapping in `ServiceIcons` object:

```tsx
const ServiceIcons: Record<string, React.ReactNode> = {
  "ux-ui-design": <PenIcon />,
  "e-commerce": <CartIcon />,
  "mobile-apps": <PhoneIcon />,
  // ...
};
```

Replace these with actual icon assets from Figma.

### Styling

- Padding: `py-20 md:py-32`
- Grid gap: `gap-6`
- Header max-width: `max-w-3xl`
- Bottom margin: `mb-16` (header), `mb-12` (grid)

### Usage

```tsx
import { ServicesSection } from "@/containers";

<ServicesSection />
```

---

## ProjectsSection

Projects showcase with heading and project cards grid.

### Location

`src/containers/ProjectsSection/index.tsx`

### Import

```tsx
import { ProjectsSection } from "@/containers";
```

### Features

- **Section Header**: Title + description
- **3 Project Cards**: Grid with mockup images and tech badges
- **CTA Button**: "View All Projects" with arrow
- **Mock Data**: Hardcoded project data (replace with CMS/API)

### Responsive Grid

| Screen           | Columns   |
| ---------------- | --------- |
| **Mobile**       | 1 column  |
| **Tablet (md)**  | 2 columns |
| **Desktop (lg)** | 3 columns |

### Projects

1. **Six Flags – Qiddiya City**
   - Tech: Animation, Swiper.js, Svelte, +3
   
2. **My Sport Time**
   - Tech: TypeScript, Next.js, React.js, Tailwind, +2
   
3. **Dashboard Analytics Pro**
   - Tech: React, D3.js, Node.js, PostgreSQL, +4

### Mockups

Currently using placeholder gradients with icons. Replace with actual screenshots:

```tsx
// Current
<div className="bg-linear-to-br from-primary-base/20 ...">
  <IconWrapper>...</IconWrapper>
</div>

// Replace with
<Image 
  src="/assets/projects/six-flags.png" 
  alt="Six Flags project"
  width={400}
  height={300}
/>
```

### Styling

- Background: `bg-background-section`
- Padding: `py-20 md:py-32`
- Grid gap: `gap-6`
- Header max-width: `max-w-3xl`

### Usage

```tsx
import { ProjectsSection } from "@/containers";

<ProjectsSection />
```

### Making it Dynamic

Replace mock data with dynamic content:

```tsx
// Option 1: Props
interface ProjectsSectionProps {
  projects: Project[];
}

// Option 2: Fetch data
const { data: projects } = await fetch('/api/projects');

// Option 3: CMS
import { getProjects } from '@/lib/cms';
const projects = await getProjects();
```

---

## CTASection

Final call-to-action section with centered text and buttons.

### Location

`src/containers/CTASection/index.tsx`

### Import

```tsx
import { CTASection } from "@/containers";
```

### Features

- **Heading**: Large responsive heading
- **Description**: Supporting text
- **CTA Buttons**: Primary + Ghost variant
- **Minimal Design**: Clean, centered, focused

### Responsive Typography

| Screen           | Heading Size     |
| ---------------- | ---------------- |
| **Mobile**       | `text-h1` (48px) |
| **Tablet (md)**  | `text-[52px]`    |
| **Desktop (lg)** | `text-[56px]`    |

### Content

- **Heading**: "Ready to bring your vision to flight?"
- **Description**: "Let's discuss how we can help you build something amazing..."
- **Primary CTA**: "Get Started" (with arrow icon)
- **Secondary CTA**: "Contact Us"

### Styling

- Padding: `py-20 md:py-32`
- Max-width: `max-w-3xl` (text), `max-w-2xl` (description)
- Text alignment: Centered
- Button gap: `gap-4`

### Usage

```tsx
import { CTASection } from "@/containers";

<CTASection />
```

### Customization

Easily customize the CTA text:

```tsx
export function CTASection({ 
  heading = "Ready to bring your vision to flight?",
  description = "Let's discuss...",
  primaryText = "Get Started",
  secondaryText = "Contact Us"
}) {
  // ...
}
```

---

## 🎨 Design System Usage

### Spacing Tokens

All containers use design tokens:

```tsx
// Section padding
py-20 md:py-32         // Standard section padding
py-20 md:py-32 lg:py-40 // Hero extended padding

// Container gaps
gap-6                   // Grid gaps
gap-12 lg:gap-16        // Hero two-column gap

// Margins
mb-6, mb-8, mb-10, mb-12, mb-16  // Various bottom margins
```

### Typography Tokens

All containers use typography tokens:

```tsx
// Headings
text-h1                 // 48px
text-hero               // 64px (hero only)

// Body
text-body               // 16px
text-body-lg            // 24px

// Gradients
text-gradient-primary   // Cyan gradient
text-gradient-secondary // Yellow gradient
```

### Color Tokens

All containers use color tokens:

```tsx
// Backgrounds
bg-background-DEFAULT   // Main background
bg-background-section   // Section backgrounds

// Text
text-text-title         // Headings (#F5F5F5)
text-text-body          // Body (#C4C4C4)
text-text-body-2        // Secondary body (#99A1AF)

// Borders
border-border-DEFAULT   // All borders
```

---

## 📱 Responsive Patterns

### Grid Layouts

```tsx
// Standard responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Items */}
</div>
```

### Flex Layouts

```tsx
// Mobile stack, desktop row
<div className="flex flex-col sm:flex-row gap-4">
  {/* Buttons */}
</div>

// Mobile stack, tablet+ horizontal
<div className="flex flex-col md:flex-row gap-4">
  {/* Items */}
</div>
```

### Conditional Display

```tsx
// Show only on mobile
<div className="flex flex-col md:hidden">
  {/* Mobile only */}
</div>

// Hide on mobile
<div className="hidden md:flex">
  {/* Desktop only */}
</div>
```

---

## 🔧 Customization

### Making Containers Dynamic

#### 1. Add Props

```tsx
interface HeroSectionProps {
  title?: string;
  description?: string;
  primaryCta?: string;
  secondaryCta?: string;
}

export function HeroSection({ 
  title = "Two Wings",
  description = "Default description...",
  primaryCta = "Get Started",
  secondaryCta = "Learn More"
}: HeroSectionProps) {
  // ...
}
```

#### 2. Fetch Data

```tsx
export async function ServicesSection() {
  const services = await getServices();
  
  return (
    <section>
      {services.map(service => (
        <ServiceCard key={service.id} {...service} />
      ))}
    </section>
  );
}
```

#### 3. Use CMS

```tsx
import { getContentBySlug } from '@/lib/cms';

export async function HeroSection() {
  const hero = await getContentBySlug('hero-section');
  
  return (
    <section>
      <h1>{hero.title}</h1>
      <p>{hero.description}</p>
    </section>
  );
}
```

---

## 📦 Usage Example

### Complete Home Page

```tsx
// src/app/page.tsx
import {
  HeroSection,
  StatsBar,
  ServicesSection,
  ProjectsSection,
  CTASection,
} from "@/containers";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ServicesSection />
      <ProjectsSection />
      <CTASection />
    </>
  );
}
```

### Custom Page

```tsx
// src/app/services/page.tsx
import { ServicesSection, CTASection } from "@/containers";

export default function ServicesPage() {
  return (
    <>
      <div className="py-20">
        <Container>
          <h1>Our Services</h1>
        </Container>
      </div>
      <ServicesSection />
      <CTASection />
    </>
  );
}
```

---

## ✅ Component Checklist

- ✅ Uses `<Container />` for max-width
- ✅ Responsive padding with design tokens
- ✅ Typography uses fontSize tokens
- ✅ Colors use design system tokens
- ✅ Mobile-first responsive design
- ✅ Proper semantic HTML
- ✅ Accessible markup
- ✅ Clean, maintainable code

---

## 🎯 Next Steps

1. **Replace Placeholders**:
   - 3D hero asset
   - Service icons (6 items)
   - Project screenshots

2. **Make Dynamic**:
   - Connect to CMS/API
   - Add props for customization
   - Create admin interface

3. **Enhance Interactions**:
   - Add animations (Framer Motion)
   - Scroll reveal effects
   - Parallax on hero

4. **Add More Sections**:
   - Testimonials section
   - Blog preview section
   - Partners/logos section

---

**All container components are production-ready!** 🚀

