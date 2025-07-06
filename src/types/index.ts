// Global type definitions for Sage Healthcare Platform

export interface NavigationItem {
  label: string
  href: string
  children?: NavigationItem[]
}

export interface ServiceCategory {
  title: string
  description: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  href: string
  features?: string[]
  cta?: string
}

export interface Hospital {
  id: string
  name: string
  location: string
  type: 'Tertiary Care' | 'Multi-Specialty' | 'Private Hospital' | 'University Hospital' | 'Military Hospital'
  specialties: string[]
  accreditations: string[]
  established: string
  beds: string
  image?: string
  description?: string
  website?: string
  phone?: string
}

export interface Region {
  name: string
  hospitals: number
  specialties: string[]
  highlights: string
  cities?: string[]
}

export interface ProcessStep {
  number: string
  title: string
  description: string
  icon?: React.ComponentType<{ size?: number; className?: string }>
  duration?: string
}

export interface Testimonial {
  id: string
  name: string
  country: string
  treatment: string
  quote: string
  rating: number
  image?: string
  hospital?: string
}

export interface ContactMethod {
  icon: React.ComponentType<{ size?: number; className?: string }>
  title: string
  value: string
  description: string
  href?: string
}

export interface FormData {
  firstName: string
  lastName: string
  email: string
  phone?: string
  serviceType: 'individuals' | 'businesses' | 'organizations' | 'general'
  message: string
  preferredContact?: 'email' | 'phone'
  urgency?: 'low' | 'medium' | 'high'
}

export interface UserFlowStep {
  id: string
  title: string
  description: string
  page: string
  action: string
  successCriteria?: string[]
  alternativePaths?: string[]
}

export interface UserJourney {
  id: string
  title: string
  description: string
  userType: 'individual' | 'business' | 'organization'
  steps: UserFlowStep[]
  estimatedDuration: string
  conversionGoal: string
}

export interface PageMetadata {
  title: string
  description: string
  keywords?: string[]
  canonicalUrl?: string
  ogImage?: string
}

export interface WireframeAnnotation {
  id: string
  x: number
  y: number
  title: string
  description: string
  type: 'note' | 'interaction' | 'content' | 'technical'
  priority: 'low' | 'medium' | 'high'
}

export interface ComponentVariation {
  id: string
  name: string
  description: string
  props: Record<string, any>
  notes?: string
}

export interface DesignToken {
  name: string
  value: string | number
  category: 'color' | 'typography' | 'spacing' | 'border' | 'shadow'
  description?: string
}

export interface AccessibilityRequirement {
  id: string
  requirement: string
  wcagLevel: 'A' | 'AA' | 'AAA'
  testMethod: string
  status: 'not-started' | 'in-progress' | 'completed' | 'failed'
  notes?: string
}

export interface TestingScenario {
  id: string
  title: string
  description: string
  userType: 'individual' | 'business' | 'organization'
  steps: string[]
  expectedOutcome: string
  successCriteria: string[]
  estimatedDuration: string
}

export interface PerformanceMetric {
  name: string
  value: number
  unit: string
  target: number
  status: 'good' | 'needs-improvement' | 'poor'
  description: string
}

export interface BrowserCompatibility {
  browser: string
  version: string
  status: 'supported' | 'partial' | 'not-supported'
  notes?: string
  lastTested?: string
}

export interface StakeholderFeedback {
  id: string
  stakeholder: string
  role: string
  feedback: string
  priority: 'low' | 'medium' | 'high' | 'critical'
  status: 'open' | 'in-progress' | 'resolved' | 'wont-fix'
  page?: string
  component?: string
  dateSubmitted: string
}

// Utility types
export type Theme = 'light' | 'dark'
export type Language = 'en' | 'ar'
export type DeviceType = 'mobile' | 'tablet' | 'desktop'
export type UserType = 'individual' | 'business' | 'organization'
export type ServiceType = 'individuals' | 'businesses' | 'organizations'
