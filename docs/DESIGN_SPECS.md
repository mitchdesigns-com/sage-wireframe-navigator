# Design Specifications

## Overview

This document provides detailed design specifications for the Sage Healthcare Platform wireframe navigator, ensuring consistency and quality across all pages and components.

## Design System Foundation

### Color Palette

#### Primary Colors
```css
/* Sage Green - Primary Brand Color */
--sage-50: #f6f8f4
--sage-100: #e9f1e6
--sage-200: #d4e3ce
--sage-300: #b3cda6
--sage-400: #87a96b  /* Primary */
--sage-500: #6b8c52
--sage-600: #546f40
--sage-700: #435834
--sage-800: #36472c
--sage-900: #2d3c26
```

#### Secondary Colors
```css
/* Healthcare Blue - Trust & Reliability */
--healthcare-blue: #1E3A8A

/* Warm Gold - Saudi Hospitality */
--healthcare-gold: #F59E0B

/* Neutral Grays */
--gray-50: #f9fafb
--gray-100: #f3f4f6
--gray-200: #e5e7eb
--gray-300: #d1d5db
--gray-400: #9ca3af
--gray-500: #6b7280
--gray-600: #4b5563
--gray-700: #374151
--gray-800: #1f2937
--gray-900: #111827
```

#### Color Usage Guidelines
- **Sage Green**: Primary actions, brand elements, success states
- **Healthcare Blue**: Secondary actions, information elements
- **Warm Gold**: Accent elements, highlights, premium features
- **Gray Scale**: Text, backgrounds, borders, disabled states

### Typography

#### Font Stack
```css
/* Primary Font - Inter */
font-family: 'Inter', system-ui, -apple-system, sans-serif;

/* Arabic Support - Noto Sans Arabic */
font-family: 'Noto Sans Arabic', system-ui, sans-serif;
```

#### Typography Scale
```css
/* Headings */
.heading-xl: 3.5rem (56px) - 4rem (64px) - 6rem (96px)
.heading-lg: 2.25rem (36px) - 3rem (48px)
.heading-md: 1.875rem (30px) - 2.25rem (36px)
.heading-sm: 1.5rem (24px)

/* Body Text */
.text-body: 1.125rem (18px) - line-height: 1.75
.text-base: 1rem (16px) - line-height: 1.5
.text-sm: 0.875rem (14px) - line-height: 1.25
.text-xs: 0.75rem (12px) - line-height: 1

/* Font Weights */
font-weight: 400 (Regular)
font-weight: 500 (Medium)
font-weight: 600 (Semibold)
font-weight: 700 (Bold)
```

#### Typography Usage
- **Heading XL**: Page titles, hero headlines
- **Heading LG**: Section titles, major headings
- **Heading MD**: Subsection titles, card headers
- **Body Text**: Main content, descriptions
- **Small Text**: Captions, metadata, fine print

### Spacing System

#### Spacing Scale (Tailwind CSS)
```css
/* Base unit: 0.25rem (4px) */
0.5: 0.125rem (2px)
1: 0.25rem (4px)
2: 0.5rem (8px)
3: 0.75rem (12px)
4: 1rem (16px)
6: 1.5rem (24px)
8: 2rem (32px)
12: 3rem (48px)
16: 4rem (64px)
20: 5rem (80px)
24: 6rem (96px)
```

#### Section Spacing
```css
/* Section Padding */
.section-padding: padding: 4rem 1rem (64px 16px)

/* Container Max Width */
.container: max-width: 80rem (1280px)

/* Component Spacing */
.card-padding: padding: 1.5rem (24px)
.button-padding: padding: 0.75rem 1.5rem (12px 24px)
```

## Component Specifications

### Buttons

#### Primary Button
```css
.btn-primary {
  background-color: var(--sage-400);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: background-color 0.2s;
}

.btn-primary:hover {
  background-color: var(--sage-500);
}
```

#### Secondary Button
```css
.btn-secondary {
  background-color: var(--healthcare-blue);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: background-color 0.2s;
}
```

#### Outline Button
```css
.btn-outline {
  border: 2px solid var(--sage-400);
  color: var(--sage-400);
  background-color: transparent;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.2s;
}

.btn-outline:hover {
  background-color: var(--sage-400);
  color: white;
}
```

### Cards

#### Standard Card
```css
.card {
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--gray-100);
  padding: 1.5rem;
  transition: box-shadow 0.2s;
}

.card:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}
```

#### Service Card
```css
.service-card {
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}
```

### Forms

#### Input Fields
```css
.form-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--gray-300);
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.form-input:focus {
  outline: none;
  border-color: var(--sage-400);
  box-shadow: 0 0 0 3px rgba(135, 169, 107, 0.1);
}
```

#### Select Dropdowns
```css
.form-select {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--gray-300);
  border-radius: 0.5rem;
  background-color: white;
  font-size: 1rem;
  transition: border-color 0.2s;
}
```

#### Textarea
```css
.form-textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--gray-300);
  border-radius: 0.5rem;
  resize: vertical;
  min-height: 6rem;
  font-size: 1rem;
}
```

## Layout Specifications

### Grid System

#### Responsive Breakpoints
```css
/* Mobile First Approach */
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X large devices */
```

#### Grid Layouts
```css
/* Homepage Grid */
.hero-grid: grid-cols-1
.services-grid: grid-cols-1 md:grid-cols-3
.feature-grid: grid-cols-1 lg:grid-cols-2

/* Services Page Grid */
.service-detail-grid: grid-cols-1 lg:grid-cols-3
.process-grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-4
```

### Header Specifications

#### Desktop Header
```css
.header {
  height: 4rem (64px);
  background-color: white;
  border-bottom: 1px solid var(--gray-100);
  position: sticky;
  top: 0;
  z-index: 50;
}

.logo {
  font-size: 1.5rem (24px);
  font-weight: 700;
}

.nav-link {
  font-weight: 500;
  color: var(--gray-700);
  transition: color 0.2s;
}

.nav-link:hover {
  color: var(--sage-400);
}
```

#### Mobile Header
```css
.mobile-header {
  height: 4rem (64px);
  padding: 0 1rem;
}

.mobile-menu {
  position: fixed;
  top: 4rem;
  left: 0;
  right: 0;
  background-color: white;
  border-top: 1px solid var(--gray-100);
  padding: 1rem;
}
```

### Footer Specifications

```css
.footer {
  background-color: var(--gray-900);
  color: white;
  padding: 3rem 1rem 2rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.footer-link {
  color: var(--gray-400);
  transition: color 0.2s;
}

.footer-link:hover {
  color: white;
}
```

## Page-Specific Specifications

### Homepage

#### Hero Section
```css
.hero {
  padding: 4rem 1rem;
  text-align: center;
  background: linear-gradient(135deg, #f6f8f4 0%, white 100%);
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.hero-description {
  font-size: 1.125rem;
  max-width: 56rem;
  margin: 0 auto 2rem;
  color: var(--gray-600);
}
```

#### Service Cards
```css
.service-icon {
  width: 4rem;
  height: 4rem;
  background-color: var(--sage-100);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  transition: all 0.2s;
}

.service-card:hover .service-icon {
  background-color: var(--sage-400);
  color: white;
}
```

### Services Pages

#### Service Detail Layout
```css
.service-hero {
  background: linear-gradient(135deg, #f6f8f4 0%, white 100%);
  padding: 4rem 1rem;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 4rem 0;
}
```

### Contact Page

#### Form Layout
```css
.contact-form {
  background-color: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}
```

## Animation Specifications

### Transitions
```css
/* Standard transition timing */
.transition-standard {
  transition: all 0.2s ease-in-out;
}

/* Hover effects */
.hover-lift:hover {
  transform: translateY(-4px);
}

.hover-scale:hover {
  transform: scale(1.05);
}
```

### Loading States
```css
.loading-shimmer {
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent
  );
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
```

## Accessibility Specifications

### Focus States
```css
.focus-visible {
  outline: 2px solid var(--sage-400);
  outline-offset: 2px;
}

/* Remove default focus for mouse users */
.focus:not(.focus-visible) {
  outline: none;
}
```

### Color Contrast
- **Normal Text**: Minimum 4.5:1 contrast ratio
- **Large Text**: Minimum 3:1 contrast ratio
- **UI Elements**: Minimum 3:1 contrast ratio

### Text Sizing
- **Minimum Text Size**: 16px for body text
- **Touch Target Size**: Minimum 44px × 44px
- **Line Height**: Minimum 1.5 for body text

## Responsive Design Specifications

### Mobile (< 768px)
```css
/* Typography scaling */
.heading-xl { font-size: 2.5rem; }
.heading-lg { font-size: 2rem; }
.section-padding { padding: 2rem 1rem; }

/* Touch-friendly spacing */
.mobile-spacing { gap: 1rem; }
.mobile-padding { padding: 1rem; }
```

### Tablet (768px - 1024px)
```css
/* Intermediate sizing */
.heading-xl { font-size: 3rem; }
.section-padding { padding: 3rem 1.5rem; }
```

### Desktop (> 1024px)
```css
/* Full desktop experience */
.heading-xl { font-size: 4rem; }
.section-padding { padding: 4rem 2rem; }
```

## Performance Specifications

### Image Optimization
- **Format**: WebP with JPEG fallback
- **Responsive Images**: Multiple sizes for different breakpoints
- **Lazy Loading**: Implement for images below the fold
- **Compression**: 85% quality for photographs, lossless for graphics

### Font Loading
```css
/* Font display optimization */
@font-face {
  font-family: 'Inter';
  font-display: swap;
  src: url('...');
}
```

### Critical CSS
- Inline critical CSS for above-the-fold content
- Defer non-critical CSS loading
- Minimize unused CSS

This design specification ensures consistent implementation across all wireframe pages and provides clear guidelines for development handoff.