# UI Components Documentation

Complete reference for all UI components in `src/components/ui/`

---

## 📦 Available Components

1. [Button](#button)
2. [Badge](#badge)
3. [IconWrapper](#iconwrapper)
4. [Container](#container)
5. [Logo](#logo)
6. [StatItem](#statitem)
7. [ServiceCard](#servicecard)
8. [ProjectCard](#projectcard)

---

## Button

Versatile button component with multiple variants, sizes, and icon support.

### Import

```tsx
import { Button } from "@/components/ui";
```

### Props

| Prop        | Type                                               | Default      | Description            |
| ----------- | -------------------------------------------------- | ------------ | ---------------------- |
| `variant`   | `'primary' \| 'secondary' \| 'outline' \| 'ghost'` | `'primary'`  | Visual style variant   |
| `size`      | `'sm' \| 'md' \| 'lg'`                             | `'md'`       | Button size            |
| `leftIcon`  | `ReactNode`                                        | -            | Icon on the left side  |
| `rightIcon` | `ReactNode`                                        | -            | Icon on the right side |
| `disabled`  | `boolean`                                          | `false`      | Disabled state         |
| `className` | `string`                                           | -            | Additional CSS classes |
| `children`  | `ReactNode`                                        | **required** | Button content         |

### Usage Examples

```tsx
// Primary button
<Button variant="primary">Get Started</Button>

// Outline button with icon
<Button 
  variant="outline" 
  rightIcon={<ArrowIcon />}
>
  Learn More
</Button>

// Small secondary button
<Button variant="secondary" size="sm">
  Small Button
</Button>

// With left icon
<Button 
  variant="primary" 
  leftIcon={<PlusIcon />}
>
  Add Item
</Button>

// Disabled state
<Button disabled>Cannot Click</Button>
```

### Variants

- **primary**: Yellow background (`bg-secondary-base`), dark text
- **secondary**: Cyan background (`bg-primary-base`), light text
- **outline**: Transparent with yellow border, hover fills background
- **ghost**: Transparent, subtle hover effect

### Accessibility

- Includes `disabled` state with cursor and opacity changes
- Focus visible ring with keyboard navigation
- Semantic `<button>` element

---

## Badge

Pill-shaped tag component for labels and categories.

### Import

```tsx
import { Badge } from "@/components/ui";
```

### Props

| Prop        | Type                                 | Default  | Description            |
| ----------- | ------------------------------------ | -------- | ---------------------- |
| `size`      | `'sm' \| 'md'`                       | `'md'`   | Badge size             |
| `color`     | `'primary' \| 'secondary' \| 'text'` | `'text'` | Text color variant     |
| `className` | `string`                             | -        | Additional CSS classes |
| `children`  | `ReactNode`                          | -        | Badge content          |

### Usage Examples

```tsx
// Default badge
<Badge>TypeScript</Badge>

// Primary colored
<Badge color="primary">Featured</Badge>

// Small secondary badge
<Badge size="sm" color="secondary">
  New
</Badge>

// Multiple badges
<div className="flex gap-2">
  <Badge>React</Badge>
  <Badge>Next.js</Badge>
  <Badge>Tailwind</Badge>
</div>
```

### Color Variants

- **primary**: Cyan text (`text-primary-50`)
- **secondary**: Yellow text (`text-secondary-base`)
- **text**: Gray text (`text-text-body-2`)

---

## IconWrapper

Background container for icons with consistent sizing and styling.

### Import

```tsx
import { IconWrapper } from "@/components/ui";
```

### Props

| Prop        | Type                   | Default | Description            |
| ----------- | ---------------------- | ------- | ---------------------- |
| `size`      | `'sm' \| 'md' \| 'lg'` | `'md'`  | Wrapper size           |
| `className` | `string`               | -       | Additional CSS classes |
| `children`  | `ReactNode`            | -       | Icon content           |

### Usage Examples

```tsx
// Medium icon wrapper (default)
<IconWrapper>
  <DesignIcon className="w-8 h-8" />
</IconWrapper>

// Small wrapper
<IconWrapper size="sm">
  <CheckIcon className="w-5 h-5" />
</IconWrapper>

// Large wrapper with custom background
<IconWrapper size="lg" className="bg-secondary-base">
  <StarIcon className="w-10 h-10" />
</IconWrapper>
```

### Sizes

- **sm**: `40px × 40px` (w-10 h-10)
- **md**: `56px × 56px` (w-14 h-14)
- **lg**: `64px × 64px` (w-16 h-16)

---

## Container

Responsive wrapper component with max-width and dynamic padding.

### Import

```tsx
import { Container } from "@/components/ui";
```

### Props

| Prop        | Type                 | Default | Description            |
| ----------- | -------------------- | ------- | ---------------------- |
| `as`        | `'div' \| 'section'` | `'div'` | HTML element to render |
| `className` | `string`             | -       | Additional CSS classes |
| `children`  | `ReactNode`          | -       | Container content      |

### Usage Examples

```tsx
// As div (default)
<Container>
  <h1>Page Content</h1>
</Container>

// As semantic section
<Container as="section">
  <HeroSection />
</Container>

// With custom classes
<Container className="py-20">
  <Content />
</Container>
```

### Responsive Behavior

- **Max Width**: 1440px (centered)
- **Mobile**: 24px horizontal padding
- **Tablet (md)**: 80px horizontal padding
- **Desktop (lg)**: 135px horizontal padding

---

## Logo

Company logo component with icon and optional text.

### Import

```tsx
import { Logo } from "@/components/ui";
```

### Props

| Prop        | Type      | Default | Description                |
| ----------- | --------- | ------- | -------------------------- |
| `showText`  | `boolean` | `true`  | Show/hide "Two Wings" text |
| `className` | `string`  | -       | Additional CSS classes     |

### Usage Examples

```tsx
// Full logo with text
<Logo />

// Icon only
<Logo showText={false} />

// With custom styling
<Logo className="opacity-80 hover:opacity-100" />
```

### Notes

- Currently uses placeholder SVG
- Will be replaced with actual asset from Figma
- Dimensions: 40×40px icon

---

## StatItem

Display component for statistics with value, label, and optional divider.

### Import

```tsx
import { StatItem } from "@/components/ui";
```

### Props

| Prop          | Type                       | Default      | Description                    |
| ------------- | -------------------------- | ------------ | ------------------------------ |
| `value`       | `string`                   | **required** | Statistic value (e.g., "60%")  |
| `label`       | `string`                   | **required** | Descriptive label              |
| `color`       | `'primary' \| 'secondary'` | `'primary'`  | Value text color               |
| `showDivider` | `boolean`                  | `false`      | Show vertical divider on right |
| `className`   | `string`                   | -            | Additional CSS classes         |

### Usage Examples

```tsx
// Single stat
<StatItem 
  value="60%" 
  label="Average Cost Savings"
  color="primary"
/>

// Multiple stats with dividers
<div className="flex items-center">
  <StatItem 
    value="60%" 
    label="Cost Savings"
    color="primary"
    showDivider
  />
  <StatItem 
    value="100%" 
    label="Quality"
    color="secondary"
    showDivider
  />
  <StatItem 
    value="50+" 
    label="Clients"
    color="primary"
  />
</div>
```

### Typography

- **Value**: 60px font size (`text-stat`)
- **Label**: 16px body text (`text-body`)

---

## ServiceCard

Card component for displaying services with icon, title, and description.

### Import

```tsx
import { ServiceCard } from "@/components/ui";
```

### Props

| Prop          | Type        | Default      | Description                           |
| ------------- | ----------- | ------------ | ------------------------------------- |
| `icon`        | `ReactNode` | **required** | Service icon (wrapped in IconWrapper) |
| `title`       | `string`    | **required** | Service title                         |
| `description` | `string`    | **required** | Service description                   |
| `className`   | `string`    | -            | Additional CSS classes                |

### Usage Examples

```tsx
<ServiceCard
  icon={<DesignIcon className="w-8 h-8" />}
  title="UX/UI Design"
  description="User research, wireframing, prototyping, and visual design"
/>

// In a grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <ServiceCard {...service1} />
  <ServiceCard {...service2} />
  <ServiceCard {...service3} />
</div>
```

### Features

- **Hover Effect**: Glow border and icon scale animation
- **Responsive**: Works in grid layouts
- **Semantic**: Uses `<article>` element
- **Auto IconWrapper**: Icon is automatically wrapped

### Styling

- Background: `bg-background-section`
- Border: `border-border-DEFAULT`
- Hover: Primary glow effect

---

## ProjectCard

Card component for showcasing projects with image, title, description, and tech stack.

### Import

```tsx
import { ProjectCard } from "@/components/ui";
```

### Props

| Prop           | Type        | Default      | Description               |
| -------------- | ----------- | ------------ | ------------------------- |
| `image`        | `ReactNode` | **required** | Project mockup/image      |
| `title`        | `string`    | **required** | Project title             |
| `description`  | `string`    | **required** | Project description       |
| `technologies` | `string[]`  | **required** | Array of tech stack items |
| `className`    | `string`    | -            | Additional CSS classes    |

### Usage Examples

```tsx
<ProjectCard
  image={<img src="/project.png" alt="Project" />}
  title="Six Flags – Qiddiya City"
  description="An immersive landing experience for the theme park"
  technologies={["Animation", "Swiper.js", "Svelte", "+3"]}
/>

// With Next.js Image
<ProjectCard
  image={
    <Image 
      src={projectImage} 
      alt="Project"
      width={300}
      height={200}
    />
  }
  title="My Sport Time"
  description="Sports management platform"
  technologies={["TypeScript", "Next.js", "React"]}
/>
```

### Features

- **Decorative Effects**: Blur gradients in image container
- **Tech Badges**: Horizontal scrollable on mobile
- **Hover Effect**: Border color and shadow change
- **Semantic**: Uses `<article>` element

### Layout

- **Image Section**: Dark background with blur effects
- **Content Section**: Title, description, tech badges
- **Tech Badges**: Auto-wrapped with horizontal scroll

---

## 🎨 Design Patterns

### Grid Layouts

```tsx
// 3-column responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <ServiceCard {...} />
  <ServiceCard {...} />
  <ServiceCard {...} />
</div>
```

### Flex Layouts

```tsx
// Centered stat items
<div className="flex items-center justify-center gap-8">
  <StatItem {...} showDivider />
  <StatItem {...} showDivider />
  <StatItem {...} />
</div>
```

### Button Groups

```tsx
// CTA buttons
<div className="flex gap-4">
  <Button variant="primary">Primary Action</Button>
  <Button variant="outline">Secondary Action</Button>
</div>
```

---

## 🔧 Customization

All components accept a `className` prop for additional styling:

```tsx
// Custom margin
<Button className="mt-8">Click Me</Button>

// Custom width
<Badge className="w-full justify-center">Full Width</Badge>

// Override background
<IconWrapper className="bg-secondary-base">
  <Icon />
</IconWrapper>
```

---

## ♿ Accessibility

- **Semantic HTML**: Proper element usage (`<button>`, `<article>`, etc.)
- **ARIA**: Hidden decorative elements marked with `aria-hidden`
- **Focus States**: Visible focus rings for keyboard navigation
- **Disabled States**: Proper cursor and opacity for disabled buttons

---

## 📱 Responsive Design

All components follow mobile-first approach:

- Start with mobile styles
- Add `md:` prefix for tablet (768px+)
- Add `lg:` prefix for desktop (1024px+)

Example:
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
  {/* Content */}
</div>
```

---

## 🚀 Usage Tips

1. **Combine Components**: ServiceCard uses IconWrapper, ProjectCard uses Badge
2. **Consistent Spacing**: Use design tokens (`gap-6`, `p-8`, etc.)
3. **Type Safety**: All props are fully typed with TypeScript
4. **Import Path**: Always import from `@/components/ui`

---

## 📦 All Imports

```tsx
import {
  Button,
  Badge,
  IconWrapper,
  Container,
  Logo,
  StatItem,
  ServiceCard,
  ProjectCard,
} from "@/components/ui";
```

---

## 🎯 Next Steps

1. Replace Logo SVG with actual asset from Figma
2. Add more icon variants to IconWrapper
3. Create additional card variants (TestimonialCard, BlogCard, etc.)
4. Add loading states to buttons
5. Implement tooltip component for badges

---

**All components are production-ready and fully responsive!** 🚀

