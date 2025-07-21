# Aeonik Font Usage Guide

## Overview
Aeonik fonts are now properly set up in your project and available throughout your application. The fonts are automatically loaded and Aeonik is set as the default font family.

## Font Weights Available

| Class | Weight | Font File |
|-------|--------|-----------|
| `.font-aeonik-thin` | 100 | Aeonik-Thin.otf |
| `.font-aeonik-air` | 200 | Aeonik-Air.otf |
| `.font-aeonik-light` | 300 | Aeonik-Light.otf |
| `.font-aeonik-regular` | 400 | Aeonik-Regular.otf |
| `.font-aeonik-medium` | 500 | Aeonik-Medium.otf |
| `.font-aeonik-bold` | 700 | Aeonik-Bold.otf |
| `.font-aeonik-black` | 900 | Aeonik-Black.otf |

## Usage Examples

### 1. Basic Usage (Default)
Since Aeonik is now the default font, you don't need to specify it explicitly:

```jsx
<h1 className="text-4xl font-bold">This uses Aeonik Bold</h1>
<p className="text-base font-normal">This uses Aeonik Regular</p>
```

### 2. Specific Aeonik Weights
Use the utility classes for specific weights:

```jsx
// Ultra-light text
<p className="font-aeonik-thin text-2xl">Thin heading</p>

// Light text for body
<p className="font-aeonik-light text-base">Light body text</p>

// Medium weight for emphasis
<span className="font-aeonik-medium">Medium emphasis</span>

// Bold for headings
<h2 className="font-aeonik-bold text-xl">Bold heading</h2>

// Black for strong emphasis
<h1 className="font-aeonik-black text-3xl">Strong heading</h1>
```

### 3. Design System Mapping
Based on your Figma design, here are the recommended classes:

```jsx
// Text/Regular/Normal - 16px, weight 400
<p className="text-base font-normal">Regular text</p>

// Text/Regular/Medium - 16px, weight 500  
<p className="text-base font-medium">Medium text</p>

// Text/Regular/Semi Bold - 16px, weight 700
<p className="text-base font-bold">Bold text</p>

// Text/Small/Normal - 14px, weight 400
<p className="text-sm font-normal">Small text</p>

// Heading styles
<h1 className="text-[56px] font-bold leading-[1.2] tracking-[-0.56px]">H1 Title</h1>
<h2 className="text-[48px] font-bold leading-[1.2] tracking-[-0.48px]">H2 Title</h2>
<h3 className="text-[40px] font-bold leading-[1.2] tracking-[-0.4px]">H3 Title</h3>
```

### 4. Component Examples

#### Navigation Items
```jsx
<button className="text-[#000404] font-normal text-base leading-[1.5]">
  Navigation Link
</button>
```

#### Dropdown Menu Items
```jsx
<div className="font-bold text-base leading-[1.5]">
  Menu Title
</div>
<div className="font-normal text-sm leading-[1.5]">
  Menu Description
</div>
```

#### Cards and Content
```jsx
<div className="card">
  <h3 className="font-bold text-xl mb-2">Card Title</h3>
  <p className="font-normal text-base text-gray-600">Card description text</p>
</div>
```

## Font Loading Optimization

The fonts are loaded with `font-display: swap` for optimal performance:
- Fonts load in the background
- System font is shown first
- Seamless switch to Aeonik when loaded
- No layout shift

## Fallbacks

Your font stack includes fallbacks:
```css
font-family: 'Aeonik', system-ui, sans-serif;
```

If Aeonik fails to load, the system will use:
1. System UI font (SF Pro on macOS, Segoe UI on Windows)
2. Default sans-serif font

## CSS Custom Properties

You can also use the CSS custom properties directly:

```css
.custom-element {
  font-family: var(--font-family-aeonik);
}
```

## Performance Notes

- All font files are optimized for web use
- Files are served from your `/public/fonts/` directory
- Fonts are cached by the browser after first load
- Use `font-display: swap` for better perceived performance

## Italic Variants

Italic variants are available for all weights:
- Aeonik-ThinItalic.otf
- Aeonik-AirItalic.otf  
- Aeonik-LightItalic.otf
- Aeonik-RegularItalic.otf
- Aeonik-MediumItalic.otf
- Aeonik-BoldItalic.otf
- Aeonik-BlackItalic.otf

Use with the `italic` utility class:
```jsx
<em className="font-medium italic">Emphasized text</em>
```

## Troubleshooting

### Fonts Not Loading
1. Check that font files are in `/public/fonts/aeonik/`
2. Verify file names match exactly
3. Check browser network tab for 404 errors
4. Clear browser cache

### Font Weight Not Working
1. Ensure you're using the correct weight class
2. Check that the specific weight file exists
3. Use browser dev tools to inspect computed styles

### Layout Shifts
1. Fonts load with `font-display: swap` to minimize shifts
2. Consider using `font-display: optional` for critical above-fold content
3. Preload important font weights in your layout.tsx if needed
