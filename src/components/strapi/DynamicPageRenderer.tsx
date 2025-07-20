// components/strapi/DynamicPageRenderer.tsx
import React from 'react';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import { StrapiPage } from '@/lib/strapi';

interface DynamicPageRendererProps {
  page: StrapiPage;
}

const DynamicPageRenderer: React.FC<DynamicPageRendererProps> = ({ page }) => {
  const { content } = page.attributes;

  if (!content || !Array.isArray(content)) {
    return null;
  }

  const renderSection = (section: any, index: number) => {
    switch (section.__component) {
      case 'sections.hero':
        return <HeroSection key={`hero-${index}`} data={section} />;
      
      case 'sections.services':
        return <ServicesSection key={`services-${index}`} data={section} />;
      
      case 'sections.how-it-works':
        return <HowItWorksSection key={`how-it-works-${index}`} data={section} />;
      
      case 'sections.about':
        return <AboutSection key={`about-${index}`} data={section} />;
      
      case 'sections.network':
        return <NetworkSection key={`network-${index}`} data={section} />;
      
      case 'sections.visit-saudi':
        return <VisitSaudiSection key={`visit-saudi-${index}`} data={section} />;
      
      case 'sections.testimonials':
        return <TestimonialsSection key={`testimonials-${index}`} data={section} />;
      
      case 'sections.contact':
        return <ContactSection key={`contact-${index}`} data={section} />;
      
      case 'sections.resources':
        return <ResourcesSection key={`resources-${index}`} data={section} />;
      
      case 'sections.stats':
        return <StatsSection key={`stats-${index}`} data={section} />;
      
      default:
        console.warn(`Unknown section type: ${section.__component}`);
        return null;
    }
  };

  return (
    <div className="dynamic-page">
      {content.map((section, index) => renderSection(section, index))}
    </div>
  );
};

// Placeholder components for sections not yet implemented
const HowItWorksSection: React.FC<{ data: any }> = ({ data }) => (
  <section className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
        <p className="text-lg text-gray-600">This section will show the step-by-step process.</p>
      </div>
    </div>
  </section>
);

const AboutSection: React.FC<{ data: any }> = ({ data }) => (
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
        <p className="text-lg text-gray-600">This section will show information about the company.</p>
      </div>
    </div>
  </section>
);

const NetworkSection: React.FC<{ data: any }> = ({ data }) => (
  <section className="py-16 bg-sage-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-sage-900 mb-4">Our Network</h2>
        <p className="text-lg text-sage-600">This section will show partner hospitals and facilities.</p>
      </div>
    </div>
  </section>
);

const VisitSaudiSection: React.FC<{ data: any }> = ({ data }) => (
  <section className="py-16 bg-green-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-green-900 mb-4">Visit Saudi</h2>
        <p className="text-lg text-green-600">This section will show medical tourism information.</p>
      </div>
    </div>
  </section>
);

const TestimonialsSection: React.FC<{ data: any }> = ({ data }) => (
  <section className="py-16 bg-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Testimonials</h2>
        <p className="text-lg text-gray-600">This section will show customer testimonials.</p>
      </div>
    </div>
  </section>
);

const ContactSection: React.FC<{ data: any }> = ({ data }) => (
  <section className="py-16 bg-blue-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Contact Us</h2>
        <p className="text-lg text-blue-600">This section will show contact information and forms.</p>
      </div>
    </div>
  </section>
);

const ResourcesSection: React.FC<{ data: any }> = ({ data }) => (
  <section className="py-16 bg-purple-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-purple-900 mb-4">Resources</h2>
        <p className="text-lg text-purple-600">This section will show educational resources.</p>
      </div>
    </div>
  </section>
);

const StatsSection: React.FC<{ data: any }> = ({ data }) => (
  <section className="py-16 bg-sage-600">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Statistics</h2>
        <p className="text-lg text-sage-100">This section will show key statistics and metrics.</p>
      </div>
    </div>
  </section>
);

export default DynamicPageRenderer;
