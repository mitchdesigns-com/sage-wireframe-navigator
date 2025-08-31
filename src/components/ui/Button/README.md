# Button Component

A comprehensive, design-system-compliant Button component matching Figma specifications.

## 📁 Structure

```
Button/
├── index.tsx      # Main component logic and hooks
├── types.ts       # TypeScript type definitions
├── constants.ts   # Design system configuration
└── README.md      # This documentation
```

## 🚀 Features

- **5 Variants**: Primary, Dark, Light, Dark Link, Light Link
- **3 Sizes**: Small, Medium, Large  
- **Icon Support**: Left, Right, Both, or None
- **Loading States**: Built-in spinner with proper states
- **Link Support**: Internal Next.js links and external URLs
- **Motion Support**: Framer Motion animations via MotionButton
- **Accessibility**: Focus states, ARIA attributes, proper semantics
- **Type Safety**: Full TypeScript support with proper overloads

## 📦 Usage

### Basic Button
```tsx
import Button from '@/components/ui/Button'

<Button variant="primary" size="medium">
  Click me
</Button>
```

### Link Button
```tsx
<Button href="/dashboard" variant="dark" leftIcon>
  Go to Dashboard
</Button>
```

### Motion Button
```tsx
import { MotionButton } from '@/components/ui/Button'

<MotionButton 
  variant="light" 
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Animated Button
</MotionButton>
```

### Loading State
```tsx
<Button variant="primary" loading>
  Processing...
</Button>
```

## 🎨 Design System

All styling is centralized in `constants.ts`:
- **Variants**: Color schemes and hover states
- **Sizes**: Padding, typography, and icon configurations  
- **Icons**: Container sizes and positioning
- **Base Styles**: Common styles applied to all buttons

## 🛡️ Type Safety

All types are defined in `types.ts`:
- `ButtonProps` - Standard button properties
- `LinkButtonProps` - Link-specific properties
- `MotionButtonProps` - Animation properties
- `SizeConfig` & `VariantConfig` - Design system types

## 🔧 Customization

### Adding New Variants
1. Add to `ButtonVariant` type in `types.ts`
2. Add configuration in `DESIGN_CONFIG.variants` in `constants.ts`

### Adding New Sizes  
1. Add to `ButtonSize` type in `types.ts`
2. Add configuration in `DESIGN_CONFIG.sizes` in `constants.ts`

## 🎯 Benefits of This Structure

- **Separation of Concerns**: Logic, types, and constants are separate
- **Maintainability**: Easy to modify design system values
- **Reusability**: Types can be imported by other components  
- **Scalability**: Easy to extend with new variants and sizes
- **Developer Experience**: Clear organization and documentation
