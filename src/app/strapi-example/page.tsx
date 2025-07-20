// app/strapi-example/page.tsx
import React from 'react';
import { getPageBySlug, getHomepage, extractStrapiData } from '@/lib/strapi';
import DynamicPageRenderer from '@/components/strapi/DynamicPageRenderer';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  try {
    const pageData = await getPageBySlug('strapi-example', 'en');
    const page = extractStrapiData(pageData);
    
    return {
      title: page.attributes.seo?.meta_title || page.attributes.title,
      description: page.attributes.seo?.meta_description || page.attributes.description,
      openGraph: {
        title: page.attributes.seo?.og_title || page.attributes.title,
        description: page.attributes.seo?.og_description || page.attributes.description,
      },
    };
  } catch (error) {
    return {
      title: 'Strapi Integration Example',
      description: 'Example page showing Strapi CMS integration',
    };
  }
}

export default async function StrapiExamplePage() {
  try {
    // Try to get page content from Strapi
    const pageData = await getPageBySlug('strapi-example', 'en');
    const page = extractStrapiData(pageData);
    
    return (
      <main className="min-h-screen">
        <DynamicPageRenderer page={page} />
      </main>
    );
  } catch (error) {
    // Fallback content if Strapi is not available
    return (
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Strapi Integration Example
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              This page demonstrates how to integrate Strapi CMS with your Next.js application.
            </p>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold text-yellow-800 mb-2">
                Strapi Not Connected
              </h2>
              <p className="text-yellow-700">
                To see this page with dynamic content, please:
              </p>
              <ol className="text-left text-yellow-700 mt-2 space-y-1">
                <li>1. Set up your Strapi backend using the setup guide</li>
                <li>2. Configure your environment variables</li>
                <li>3. Create a page with slug 'strapi-example' in Strapi</li>
                <li>4. Add hero and services sections to the page</li>
              </ol>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Backend Setup
                </h3>
                <p className="text-gray-600 mb-4">
                  Your Strapi backend includes:
                </p>
                <ul className="text-left text-gray-600 space-y-1">
                  <li>• Enhanced content types</li>
                  <li>• Multi-language support</li>
                  <li>• Custom API endpoints</li>
                  <li>• Rate limiting & security</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Frontend Components
                </h3>
                <p className="text-gray-600 mb-4">
                  Pre-built components include:
                </p>
                <ul className="text-left text-gray-600 space-y-1">
                  <li>• Dynamic page renderer</li>
                  <li>• Hero sections</li>
                  <li>• Service showcases</li>
                  <li>• Content blocks</li>
                </ul>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Next Steps
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-sage-50 rounded-lg p-6">
                  <h3 className="font-semibold text-sage-900 mb-2">
                    1. Setup Strapi
                  </h3>
                  <p className="text-sage-700 text-sm">
                    Run the setup script in your sage-strapi-setup directory
                  </p>
                </div>
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="font-semibold text-blue-900 mb-2">
                    2. Configure Environment
                  </h3>
                  <p className="text-blue-700 text-sm">
                    Set NEXT_PUBLIC_STRAPI_URL and STRAPI_API_TOKEN
                  </p>
                </div>
                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="font-semibold text-purple-900 mb-2">
                    3. Create Content
                  </h3>
                  <p className="text-purple-700 text-sm">
                    Add pages and content through the Strapi admin panel
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
