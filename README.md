# Sage Healthcare Platform - Wireframe Navigator

> 🏥 Interactive Next.js prototype for testing user flows and page navigation

A comprehensive wireframe navigator built with Next.js to prototype and test the Sage Healthcare Platform user experience. This application allows stakeholders to navigate through different pages and user journeys before development begins.

## 🎯 Project Purpose

This wireframe navigator serves as an interactive prototype for:
- **User Journey Testing**: Navigate through complete patient/business/organization flows
- **Stakeholder Reviews**: Present and gather feedback on page layouts and interactions
- **Usability Testing**: Conduct user testing sessions with real navigation
- **Developer Handoff**: Provide clear page structure and navigation patterns

## 📱 Pages & User Flows

### Core Pages
- **Homepage**: Hero section with main value proposition
- **Services**: Three-tier service offerings (Individuals, Businesses, Organizations)
- **How It Works**: 4-step patient journey process
- **About Us**: Company information and team
- **Our Network**: Partner hospitals and facilities
- **Visit Saudi**: Medical tourism information
- **Resources**: Educational content and guides

### User Journey Flows
1. **Individual Patient Journey**
   - Service discovery → Consultation booking → Treatment planning → Care coordination
2. **Business Client Journey**  
   - Corporate wellness inquiry → Program setup → Employee enrollment → ROI tracking
3. **Organization Partnership**
   - Partnership inquiry → Collaboration setup → Resource sharing → Program development

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites
- Node.js 18.18.0 or higher
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/ojja/sage-wireframe-navigator.git
cd sage-wireframe-navigator

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Development

```bash
# Start the development server
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the wireframe navigator.

### Build for Production

```bash
# Build the application
npm run build
npm run start

# or with other package managers
yarn build && yarn start
pnpm build && pnpm start
bun run build && bun start
```

## 📁 Project Structure

```
sage-wireframe-navigator/
├── src/
│   ├── app/                     # Next.js App Router pages
│   │   ├── (dashboard)/         # Dashboard layouts
│   │   ├── about/               # About Us page
│   │   ├── services/            # Services pages
│   │   │   ├── individuals/     # Individual services
│   │   │   ├── businesses/      # Business services
│   │   │   └── organizations/   # Organization services
│   │   ├── how-it-works/        # Process flow page
│   │   ├── our-network/         # Partner network
│   │   ├── visit-saudi/         # Medical tourism
│   │   ├── resources/           # Educational content
│   │   ├── contact/             # Contact forms
│   │   ├── globals.css          # Global styles
│   │   ├── layout.tsx           # Root layout
│   │   └── page.tsx             # Homepage
│   ├── components/              # Reusable UI components
│   │   ├── ui/                  # Base UI components
│   │   ├── layout/              # Layout components
│   │   │   ├── Header.tsx       # Navigation header
│   │   │   ├── Footer.tsx       # Site footer
│   │   │   └── Navigation.tsx   # Main navigation
│   │   ├── sections/            # Page sections
│   │   │   ├── Hero.tsx         # Hero section
│   │   │   ├── HowItWorks.tsx   # Process steps
│   │   │   ├── Services.tsx     # Service cards
│   │   │   └── VisitSaudi.tsx   # Tourism section
│   │   └── forms/               # Form components
│   ├── lib/                     # Utility functions
│   │   ├── utils.ts             # Helper functions
│   │   └── constants.ts         # App constants
│   └── types/                   # TypeScript definitions
│       ├── index.ts             # Global types
│       └── navigation.ts        # Navigation types
├── public/                      # Static assets
│   ├── images/                  # Image assets
│   ├── icons/                   # Icon files
│   └── wireframes/              # Wireframe exports
├── docs/                        # Documentation
│   ├── USER_FLOWS.md            # User journey documentation
│   ├── DESIGN_SPECS.md          # Design specifications
│   └── TESTING_GUIDE.md         # Usability testing guide
└── README.md                    # This file
```

## 🎨 Design System

### Color Palette
- **Primary**: Sage Green (#87A96B) - Trust and healing
- **Secondary**: Deep Blue (#1E3A8A) - Reliability and professionalism  
- **Accent**: Warm Gold (#F59E0B) - Saudi hospitality
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Headers**: Inter Bold - Clear hierarchy and readability
- **Body**: Inter Regular - Optimized for both English and Arabic
- **Arabic Support**: Noto Sans Arabic for RTL content

### Spacing & Layout
- **Grid**: 12-column responsive grid
- **Breakpoints**: Mobile-first approach (sm: 640px, md: 768px, lg: 1024px, xl: 1280px)
- **Spacing Scale**: Tailwind's spacing scale (4, 8, 12, 16, 24, 32, 48, 64px)

## 🧭 Navigation Structure

### Primary Navigation
- Home
- Services (dropdown)
  - For Individuals
  - For Businesses  
  - For Organizations
- About Us
- Resources (dropdown)
  - Patient Guides
  - Medical Tourism Info
  - Success Stories
- Our Network
- Visit Saudi

### Secondary Actions
- Schedule Call (CTA button)
- Language Toggle (EN/AR)
- Contact Us

## 🔄 User Flow Testing

### Individual Patient Flow
1. **Discovery**: Homepage → Services → For Individuals
2. **Learning**: How It Works → Step-by-step process
3. **Action**: Contact → Schedule Consultation
4. **Information**: Visit Saudi → Facility information

### Business Client Flow  
1. **Exploration**: Homepage → Services → For Businesses
2. **Understanding**: About Us → Company credentials
3. **Engagement**: Resources → Case studies
4. **Contact**: Schedule Call → Business consultation

### Organization Partnership
1. **Introduction**: Homepage → Services → For Organizations
2. **Network**: Our Network → Partner facilities
3. **Collaboration**: About Us → Partnership approach
4. **Inquiry**: Contact → Partnership form

## 📊 Testing & Feedback

### Usability Testing Checklist
- [ ] Navigation clarity and findability
- [ ] Mobile responsiveness across devices
- [ ] Page loading and transitions
- [ ] Form usability and validation
- [ ] Content hierarchy and readability
- [ ] Cultural sensitivity (Arabic content)
- [ ] Accessibility compliance (WCAG 2.1)

### Feedback Collection
- Stakeholder review sessions
- User testing recordings
- Navigation analytics
- Conversion funnel analysis
- A/B testing on key pages

## 🌍 Internationalization

### Arabic (RTL) Support
- Right-to-left text direction
- Arabic typography (Noto Sans Arabic)
- Cultural color preferences
- Local imagery and icons
- Saudi-specific content

### English (LTR) Support  
- Left-to-right text direction
- International audience content
- Medical tourism focus
- Global accessibility standards

## 📋 Development Guidelines

### Component Standards
- TypeScript for all components
- Tailwind CSS for styling
- Responsive design patterns
- Accessibility attributes
- Performance optimization

### Code Quality
- ESLint configuration
- Prettier formatting
- Git commit conventions
- Component documentation
- Testing coverage

## 🚀 Deployment

### Vercel Deployment
- Automatic deployments from main branch
- Preview deployments for pull requests
- Environment variable management
- Performance analytics
- Edge functions support

### Environment Variables
```bash
NEXT_PUBLIC_SITE_URL=https://sage-wireframes.vercel.app
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

## 📞 Support & Feedback

For questions, suggestions, or issues:
- **Design Team**: Create GitHub issues for design feedback
- **Development**: Submit pull requests for improvements  
- **Stakeholders**: Use GitHub Discussions for high-level feedback
- **Testing**: Document findings in the testing guide

## 📄 License

This wireframe navigator is proprietary to the Sage Healthcare Platform project. All designs and code are confidential and protected under intellectual property rights.

---

**Last Updated**: July 6, 2025  
**Version**: 1.0.0  
**Status**: Wireframe Development Phase  
**Next Phase**: High-Fidelity Design Implementation