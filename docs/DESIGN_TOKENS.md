# Two Wings - Design Tokens Reference

This document provides a comprehensive reference for all design tokens configured in the Tailwind CSS v4 theme.

## 🎨 Colors

### Primary Colors
```css
bg-primary-base      /* #29ADC5 - Main primary color */
bg-primary-50        /* #4DBBCF - Lighter primary variant */
text-primary-base    /* Text with primary color */
```

### Secondary Colors
```css
bg-secondary-base    /* #FFC83A - Main accent color (yellow) */
text-secondary-base  /* Text with secondary color */
```

### Background Colors
```css
bg-background-DEFAULT  /* #0A0C0F - Main dark background */
bg-background-section  /* #16181B - Section background (slightly lighter) */
```

### Text Colors
```css
text-text-title      /* #F5F5F5 - Headings, titles */
text-text-body       /* #C4C4C4 - Main body text */
text-text-body-2     /* #99A1AF - Secondary body text */
text-text-secondary  /* #6A7282 - Muted text, captions */
```

### Border Colors
```css
border-border-DEFAULT  /* rgba(255, 255, 255, 0.1) - Default border */
```

---

## 📝 Typography

### Font Families
```css
font-display   /* Playfair Display - For hero headings */
font-sans      /* Lato - Main sans-serif */
font-heading   /* Manrope - Section headings */
font-body      /* Inter - Alternative body font */
```

### Font Sizes

#### Hero
```css
text-hero      /* 64px - Hero text only */
```

#### Headings
```css
text-h1        /* 48px / 58px line-height */
text-h2        /* 40px / 50px line-height */
text-h3        /* 28px / 36px line-height */
text-h4        /* 24px / 30px line-height */
text-h5        /* 20px / 100% line-height */
```

#### Body
```css
text-body-lg   /* 24px / 30px line-height - Larger body text */
text-body      /* 16px / 24px line-height - Default body */
text-body-para /* 18px / 28px line-height - Paragraph text */
```

#### Special
```css
text-stat      /* 60px - For statistics/numbers */
text-button    /* 16px / 24px line-height - Button text */
```

### Font Weight
Use standard Tailwind utilities:
```css
font-normal    /* 400 */
font-medium    /* 500 */
font-semibold  /* 600 */
font-bold      /* 700 */
```

---

## 📏 Spacing

### Section Spacing
```css
py-section-y      /* 120px - Vertical section padding */
py-section-y-sm   /* 80px - Smaller vertical padding */
```

### Container Spacing
```css
px-container-x     /* 135px - Desktop container padding */
px-container-x-md  /* 80px - Tablet container padding */
px-container-x-sm  /* 24px - Mobile container padding */
```

### Standard Spacing
Use Tailwind's default spacing scale:
```css
gap-4    /* 16px */
gap-6    /* 24px */
gap-8    /* 32px */
p-8      /* 32px padding */
mb-4     /* 16px margin bottom */
```

---

## 🔲 Border Radius

```css
rounded-button  /* 32px - For buttons */
rounded-card    /* 16px - For cards */
rounded-badge   /* 50px - For pill badges */
rounded-icon    /* 8px - For icon containers */
```

---

## 🎭 Shadows

```css
shadow-card            /* 0 4px 24px rgba(0, 0, 0, 0.1) */
shadow-glow-primary    /* 0 0 40px rgba(41, 173, 197, 0.2) */
shadow-glow-secondary  /* 0 0 40px rgba(255, 200, 58, 0.2) */
```

---

## 🌈 Custom Utilities

### Gradient Text
```css
text-gradient-primary    /* Primary blue gradient */
text-gradient-secondary  /* Secondary yellow gradient */
```

### Blur Backgrounds
```css
bg-blur-primary    /* Primary radial gradient blur */
bg-blur-secondary  /* Secondary radial gradient blur */
```

---

## 💡 Usage Examples

### Hero Section
```jsx
<h1 className="font-display text-hero text-text-title">
  Two Wings
</h1>
<p className="text-body-lg text-text-body">
  From vision to flight
</p>
```

### Primary Button
```jsx
<button className="bg-secondary-base text-background-DEFAULT px-6 py-3 rounded-button text-button font-sans font-bold hover:opacity-90 transition-opacity">
  Get Started
</button>
```

### Outline Button
```jsx
<button className="border border-secondary-base text-secondary-base px-6 py-3 rounded-button text-button font-sans font-bold hover:bg-secondary-base hover:text-background-DEFAULT transition-colors">
  Learn More
</button>
```

### Badge
```jsx
<span className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-primary-50 px-4 py-2 rounded-badge text-body font-sans">
  Premium Quality
</span>
```

### Service Card
```jsx
<div className="bg-background-section border border-border-DEFAULT rounded-card p-8">
  <div className="w-14 h-14 bg-primary-base rounded-icon flex items-center justify-center mb-6">
    {/* Icon */}
  </div>
  <h3 className="text-h3 text-text-title mb-4 font-heading">
    Service Title
  </h3>
  <p className="text-body text-text-body-2 font-sans">
    Service description goes here
  </p>
</div>
```

### Stat Display
```jsx
<div className="text-center">
  <p className="text-stat text-primary-base font-sans mb-2">
    60%
  </p>
  <p className="text-body text-text-body font-sans">
    Average Cost Savings
  </p>
</div>
```

### Gradient Text
```jsx
<h1 className="text-hero font-display text-gradient-primary">
  Two Wings
</h1>
```

---

## 📱 Responsive Design

### Breakpoints (Tailwind defaults)
- `sm:` 640px
- `md:` 768px
- `lg:` 1024px
- `xl:` 1280px
- `2xl:` 1536px

### Mobile-First Strategy
Always design for mobile first, then add breakpoints:
```jsx
<div className="px-container-x-sm md:px-container-x-md lg:px-container-x">
  {/* Content */}
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Cards */}
</div>
```

---

## 🎯 Component Patterns

### Container Wrapper
```jsx
<div className="container mx-auto px-container-x-sm md:px-container-x-md lg:px-container-x">
  {/* Content */}
</div>
```

### Section Spacing
```jsx
<section className="py-section-y-sm lg:py-section-y">
  {/* Section content */}
</section>
```

### Flex Center
```jsx
<div className="flex items-center justify-center gap-4">
  {/* Centered items */}
</div>
```

### Grid Layout
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Grid items */}
</div>
```

---

## ⚡ Performance Tips

1. **Font Loading**: Fonts are loaded via Next.js Font Optimization
2. **Color Variables**: All colors use CSS variables for consistent theming
3. **Transitions**: Use `transition-opacity` or `transition-colors` for smooth effects
4. **Hover States**: Always add `hover:` variants for interactive elements

---

## 📦 Available CSS Variables

All tokens are available as CSS variables in `:root`:

```css
/* Colors */
--primary-base: #29adc5;
--primary-50: #4dbbcf;
--secondary-base: #ffc83a;
--background: #0a0c0f;
--background-section: #16181b;
--text-title: #f5f5f5;
--text-body: #c4c4c4;
--text-body-2: #99a1af;
--text-secondary: #6a7282;
--border-default: rgba(255, 255, 255, 0.1);

/* Typography */
--font-display: "Playfair Display", serif;
--font-sans: "Lato", sans-serif;
--font-heading: "Manrope", sans-serif;
--font-body: "Inter", sans-serif;

/* Use in custom CSS */
.custom-class {
  color: var(--primary-base);
  font-family: var(--font-display);
}
```

---

## 🚀 Next Steps

1. View the design system demo at `/` (homepage)
2. Start building components in `src/components/ui/`
3. Create page containers in `src/containers/`
4. Reference this guide when styling components

For questions or updates, refer to the Figma design file:
https://www.figma.com/design/utcINFMS0AjFHi378Y85PI/Two-Wings

