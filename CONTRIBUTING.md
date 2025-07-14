# Contributing to Sage Healthcare Platform Wireframe Navigator

Thank you for your interest in contributing to the Sage Healthcare Platform wireframe navigator! This document provides guidelines and information for contributors.

## Table of Contents

- [Getting Started](#getting-started)
- [Development Process](#development-process)
- [Code Standards](#code-standards)
- [Testing Guidelines](#testing-guidelines)
- [Documentation](#documentation)
- [Submitting Changes](#submitting-changes)
- [Issue Reporting](#issue-reporting)
- [Design Contributions](#design-contributions)

## Getting Started

### Prerequisites

- Node.js 18.18.0 or higher
- npm, yarn, pnpm, or bun
- Git
- Code editor (VS Code recommended)

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/ojja/sage-wireframe-navigator.git
   cd sage-wireframe-navigator
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Project Structure Understanding

Familiarize yourself with the project structure documented in `docs/PROJECT_STRUCTURE.md`.

## Development Process

### Branch Strategy

- **main**: Production-ready wireframes
- **develop**: Integration branch for new features
- **feature/[feature-name]**: Individual feature development
- **fix/[issue-description]**: Bug fixes
- **docs/[documentation-type]**: Documentation updates

### Workflow

1. **Create a feature branch**
   ```bash
   git checkout -b feature/new-page-layout
   ```

2. **Make your changes**
   - Follow code standards
   - Add appropriate documentation
   - Test your changes

3. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add new service page layout"
   ```

4. **Push to your branch**
   ```bash
   git push origin feature/new-page-layout
   ```

5. **Create a Pull Request**
   - Use the PR template
   - Provide clear description
   - Reference related issues

## Code Standards

### TypeScript Guidelines

- Use TypeScript for all new files
- Define proper interfaces and types
- Avoid `any` type - use specific types
- Use type assertions sparingly

```typescript
// Good
interface ServiceCardProps {
  title: string
  description: string
  icon: React.ComponentType<{ size?: number }>
}

// Avoid
function ServiceCard(props: any) {
  // ...
}
```

### React Component Guidelines

- Use functional components with hooks
- Follow the component naming convention
- Use proper prop types and default values
- Implement proper error boundaries

```tsx
// Component naming: PascalCase
export default function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <div className="card">
      <Icon size={24} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
```

### CSS and Styling Guidelines

- Use Tailwind CSS utility classes
- Follow the design system defined in `docs/DESIGN_SPECS.md`
- Use custom CSS only when necessary
- Maintain responsive design principles

```tsx
// Good - using Tailwind utilities
<div className="bg-white rounded-4xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">

// Avoid - inline styles
<div style={{ backgroundColor: 'white', borderRadius: '12px' }}>
```

### File Naming Conventions

- **Components**: PascalCase (e.g., `ServiceCard.tsx`)
- **Pages**: lowercase with hyphens (e.g., `about-us.tsx`)
- **Utilities**: camelCase (e.g., `formatUtils.ts`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_ENDPOINTS.ts`)

### Import Organization

```tsx
// 1. React and Next.js imports
import React from 'react'
import Link from 'next/link'

// 2. Third-party libraries
import { ArrowRight } from 'lucide-react'

// 3. Internal components
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'

// 4. Types
import type { ServiceCardProps } from '@/types'
```

## Testing Guidelines

### Manual Testing

- Test all interactive elements
- Verify responsive design on multiple devices
- Check keyboard navigation
- Validate form submissions
- Test cross-browser compatibility

### Accessibility Testing

- Use screen reader testing
- Verify keyboard navigation
- Check color contrast ratios
- Validate ARIA labels
- Test with accessibility tools

### Performance Testing

- Monitor Core Web Vitals
- Check bundle size impact
- Verify image optimization
- Test on slow networks

## Documentation

### Code Documentation

- Add JSDoc comments for complex functions
- Document component props with TypeScript interfaces
- Explain business logic and design decisions
- Keep README files updated

```tsx
/**
 * Service card component for displaying healthcare service information
 * Used on services overview and individual service pages
 */
interface ServiceCardProps {
  /** Service title displayed prominently */
  title: string
  /** Brief description of the service */
  description: string
  /** Icon component to display alongside service info */
  icon: React.ComponentType<{ size?: number }>
}
```

### Design Documentation

- Document design decisions in commit messages
- Update design specifications when making visual changes
- Add wireframe annotations for complex interactions
- Maintain component documentation

## Submitting Changes

### Pull Request Guidelines

1. **Use descriptive titles**
   - `feat: add new contact form validation`
   - `fix: resolve mobile navigation issue`
   - `docs: update accessibility testing guide`

2. **Provide detailed descriptions**
   - What changes were made
   - Why the changes were necessary
   - How to test the changes
   - Any breaking changes

3. **Reference related issues**
   - Use `Fixes #123` for bug fixes
   - Use `Closes #123` for feature implementations
   - Use `Related to #123` for partial implementations

### Commit Message Format

Use conventional commits format:

```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(services): add business services page

fix(navigation): resolve mobile dropdown issue

docs(testing): update usability testing guide
```

## Issue Reporting

### Bug Reports

When reporting bugs, include:

- **Description**: Clear description of the issue
- **Steps to reproduce**: Detailed steps to recreate the bug
- **Expected behavior**: What should happen
- **Actual behavior**: What actually happens
- **Environment**: Browser, device, screen size
- **Screenshots**: Visual evidence if applicable

### Feature Requests

When requesting features, include:

- **Problem statement**: What problem does this solve?
- **Proposed solution**: How should this be implemented?
- **User benefit**: Who benefits and how?
- **Acceptance criteria**: How do we know it's complete?

### Design Feedback

When providing design feedback:

- **Page/Component**: Specific location of feedback
- **Issue description**: Clear description of the concern
- **Suggested improvement**: Proposed solution
- **User impact**: How this affects user experience
- **Priority**: High/Medium/Low importance

## Design Contributions

### Wireframe Updates

- Follow established design patterns
- Maintain consistency with existing pages
- Consider mobile-first responsive design
- Document design decisions

### Component Design

- Use existing design tokens and styles
- Ensure accessibility compliance
- Test across different screen sizes
- Provide usage documentation

### User Experience Improvements

- Consider user journey impact
- Test with target user groups
- Document usability improvements
- Measure impact on conversion goals

## Review Process

### Code Review Checklist

- [ ] Code follows style guidelines
- [ ] TypeScript types are properly defined
- [ ] Components are responsive
- [ ] Accessibility requirements met
- [ ] Documentation updated
- [ ] Manual testing completed
- [ ] No console errors
- [ ] Performance impact considered

### Design Review Checklist

- [ ] Consistent with design system
- [ ] Mobile responsive design
- [ ] Accessibility considerations
- [ ] User flow improvements
- [ ] Content clarity
- [ ] Visual hierarchy
- [ ] Brand alignment

## Getting Help

- **Technical Questions**: Create a GitHub issue with the `question` label
- **Design Questions**: Use GitHub Discussions for design-related topics
- **Process Questions**: Refer to this contributing guide or ask in discussions

## Recognition

Contributors will be recognized in:

- Project README contributors section
- Release notes for significant contributions
- GitHub contributor graphs
- Team acknowledgments in documentation

Thank you for contributing to the Sage Healthcare Platform wireframe navigator! Your contributions help create better healthcare experiences for patients worldwide.
