// Constants for Sage Healthcare Platform

export const SITE_CONFIG = {
  name: 'Sage Healthcare Platform',
  description: 'Your Trusted Gateway to Saudi\'s Medical Care',
  url: 'https://sage-healthcare.sa',
  ogImage: '/images/og-image.jpg',
  author: 'Mitch Designs',
  version: '1.0.0',
} as const

export const CONTACT_INFO = {
  phone: '+966 11 123 4567',
  email: 'info@sagehealthcare.sa',
  emergencyPhone: '+966 11 123 4567',
  address: {
    street: 'King Fahd Road',
    district: 'Olaya District',
    city: 'Riyadh',
    country: 'Saudi Arabia',
    postalCode: '11564',
  },
  socialMedia: {
    twitter: '@SageHealthcareSA',
    linkedin: 'sage-healthcare-platform',
    instagram: '@sagehealthcare',
  },
} as const

export const BUSINESS_HOURS = {
  weekdays: {
    open: '08:00',
    close: '18:00',
    timezone: 'Asia/Riyadh',
  },
  weekend: {
    friday: 'closed',
    saturday: 'closed',
  },
  emergency: '24/7 available',
} as const

export const SUPPORTED_LANGUAGES = [
  { code: 'en', name: 'English', dir: 'ltr' },
  { code: 'ar', name: 'العربية', dir: 'rtl' },
] as const

export const NAVIGATION_ITEMS = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'For Individuals', href: '/services/individuals' },
      { label: 'For Businesses', href: '/services/businesses' },
      { label: 'For Organizations', href: '/services/organizations' },
    ],
  },
  { label: 'About Us', href: '/about' },
  {
    label: 'Resources',
    href: '/resources',
    children: [
      { label: 'Patient Guides', href: '/resources/patient-guides' },
      { label: 'Medical Tourism', href: '/resources/medical-tourism' },
      { label: 'Success Stories', href: '/resources/success-stories' },
    ],
  },
  { label: 'Our Network', href: '/our-network' },
  { label: 'Visit Saudi', href: '/visit-saudi' },
] as const

export const SERVICE_TYPES = {
  individuals: {
    title: 'For Individuals',
    description: 'Personal healthcare solutions for patients seeking world-class medical care',
    features: [
      'Personal consultation and care coordination',
      'Treatment planning and medical guidance',
      'Cultural support and language assistance',
      'Post-treatment recovery support',
    ],
  },
  businesses: {
    title: 'For Businesses',
    description: 'Comprehensive corporate wellness programs and employee healthcare initiatives',
    features: [
      'Corporate wellness program development',
      'Employee health screening and checkups',
      'Executive medical packages',
      'Health training and education programs',
    ],
  },
  organizations: {
    title: 'For Organizations',
    description: 'Strategic partnerships with NGOs, universities, and government institutions',
    features: [
      'Institutional partnership development',
      'Resource sharing and collaboration',
      'Research and academic partnerships',
      'Government healthcare initiatives',
    ],
  },
} as const

export const TREATMENT_PROCESS = [
  {
    step: '1',
    title: 'Initial Consultation',
    description: 'Connect with our team to discuss your healthcare needs. We\'ll provide personalized options tailored to you.',
    duration: '1-2 days',
  },
  {
    step: '2',
    title: 'Treatment Planning',
    description: 'Receive a detailed treatment plan outlining your options. Our team coordinates every detail for your comfort.',
    duration: '3-5 days',
  },
  {
    step: '3',
    title: 'Undergoing Treatment',
    description: 'Experience world-class medical care in a supportive environment. Our team is available to assist you throughout your treatment.',
    duration: 'Variable',
  },
  {
    step: '4',
    title: 'Post-Treatment Care',
    description: 'Receive ongoing support and follow-up consultations. We ensure your recovery is as smooth as possible.',
    duration: 'Ongoing',
  },
] as const

export const MEDICAL_SPECIALTIES = [
  'Cardiology',
  'Oncology',
  'Neurology',
  'Orthopedics',
  'Gastroenterology',
  'Endocrinology',
  'Dermatology',
  'Ophthalmology',
  'Psychiatry',
  'Pediatrics',
  'Obstetrics & Gynecology',
  'Urology',
  'Pulmonology',
  'Nephrology',
  'Rheumatology',
  'Emergency Medicine',
  'Anesthesiology',
  'Radiology',
  'Pathology',
  'Plastic Surgery',
  'Organ Transplant',
  'Rehabilitation Medicine',
  'Nuclear Medicine',
  'Infectious Diseases',
  'Geriatrics',
] as const

export const ACCREDITATIONS = [
  {
    name: 'JCI',
    fullName: 'Joint Commission International',
    description: 'Gold standard for international healthcare quality',
  },
  {
    name: 'CBAHI',
    fullName: 'Central Board for Accreditation of Healthcare Institutions',
    description: 'Saudi Arabia\'s national healthcare accreditation body',
  },
  {
    name: 'CAP',
    fullName: 'College of American Pathologists',
    description: 'Laboratory accreditation for diagnostic excellence',
  },
  {
    name: 'ISO 9001',
    fullName: 'International Organization for Standardization',
    description: 'Quality management system certification',
  },
] as const

export const SAUDI_REGIONS = [
  {
    name: 'Central Region',
    capital: 'Riyadh',
    description: 'Capital region with premier medical research facilities',
    majorCities: ['Riyadh', 'Al Kharj', 'Dawadmi'],
  },
  {
    name: 'Western Region',
    capital: 'Mecca',
    description: 'Gateway to holy cities with specialized pilgrimage healthcare',
    majorCities: ['Jeddah', 'Mecca', 'Medina', 'Taif'],
  },
  {
    name: 'Eastern Region',
    capital: 'Dammam',
    description: 'Industrial region with advanced occupational medicine',
    majorCities: ['Dammam', 'Al Khobar', 'Dhahran', 'Jubail'],
  },
  {
    name: 'Northern Region',
    capital: 'Arar',
    description: 'Expanding healthcare infrastructure with modern facilities',
    majorCities: ['Arar', 'Sakakah', 'Rafha'],
  },
  {
    name: 'Southern Region',
    capital: 'Abha',
    description: 'Mountain region with specialized altitude medicine',
    majorCities: ['Abha', 'Khamis Mushait', 'Najran', 'Jazan'],
  },
] as const

export const PERFORMANCE_TARGETS = {
  lcp: 2.5, // Largest Contentful Paint (seconds)
  fid: 100, // First Input Delay (milliseconds)
  cls: 0.1, // Cumulative Layout Shift
  lighthouse: 90, // Lighthouse Performance Score
  accessibility: 100, // Accessibility Score
} as const

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const

export const ANIMATION_DURATION = {
  fast: 150,
  normal: 300,
  slow: 500,
} as const

export const Z_INDEX = {
  dropdown: 10,
  sticky: 20,
  modal: 30,
  popover: 40,
  tooltip: 50,
} as const

export const FORM_VALIDATION = {
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  phone: /^[+]?[0-9\s-()]{8,}$/,
  minNameLength: 2,
  maxNameLength: 50,
  minMessageLength: 10,
  maxMessageLength: 1000,
} as const

export const META_DEFAULTS = {
  title: 'Sage Healthcare Platform - Your Trusted Gateway to Saudi Medical Care',
  description: 'Experience the perfect blend of healthcare expertise, cultural hospitality, and personalized service with Sage. We are dedicated to guiding you through every step of your medical journey.',
  keywords: [
    'healthcare',
    'saudi arabia',
    'medical tourism',
    'treatment',
    'hospitals',
    'medical care',
    'health services',
    'patient care',
    'medical facilities',
    'international healthcare',
  ],
} as const

export const WIREFRAME_NOTES = {
  homepage: [
    'Hero section should emphasize trust and gateway messaging',
    'How it works section needs clear step-by-step visualization',
    'Service cards should be visually distinct for each user type',
    'CTA buttons should be prominent and action-oriented',
  ],
  services: [
    'Clear differentiation between individual, business, and organization services',
    'Feature lists should be scannable and benefit-focused',
    'Contact forms should be contextual to service type',
  ],
  contact: [
    'Multiple contact methods should be easily accessible',
    'Form should capture service interest for better lead qualification',
    'Emergency contact information should be prominent',
  ],
} as const
