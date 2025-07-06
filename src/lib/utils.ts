import { type ClassValue, clsx } from "clsx"

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

// Animation utilities
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 }
}

export const slideUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export const slideDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

// Utility functions for the wireframe navigator
export function formatNavigationPath(path: string): string {
  return path.replace(/\//g, ' → ').replace(/^\s*→\s*/, '')
}

export function getPageTitle(pathname: string): string {
  const pathMap: Record<string, string> = {
    '/': 'Homepage',
    '/services': 'Services Overview',
    '/services/individuals': 'Services for Individuals',
    '/services/businesses': 'Services for Businesses', 
    '/services/organizations': 'Services for Organizations',
    '/about': 'About Us',
    '/how-it-works': 'How It Works',
    '/our-network': 'Our Network',
    '/visit-saudi': 'Visit Saudi',
    '/resources': 'Resources',
    '/contact': 'Contact Us'
  }
  
  return pathMap[pathname] || 'Page Not Found'
}

// Responsive breakpoint utilities
export const breakpoints = {
  sm: '640px',
  md: '768px', 
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
}

// Color palette helpers
export const colors = {
  sage: {
    primary: '#87a96b',
    secondary: '#6b8c52',
    light: '#b3cda6',
    dark: '#435834'
  },
  healthcare: {
    blue: '#1E3A8A',
    gold: '#F59E0B'
  }
}
