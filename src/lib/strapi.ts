/* eslint-disable @typescript-eslint/no-explicit-any */
// lib/strapi.ts
export interface StrapiResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiPage {
  id: number;
  attributes: {
    title: string;
    slug: string;
    description?: string;
    content?: any[];
    seo?: any;
    featured_image?: any;
    navigation?: any[];
    status: 'draft' | 'published' | 'archived';
    page_type: 'homepage' | 'service' | 'about' | 'contact' | 'resource' | 'network' | 'custom';
    createdAt: string;
    updatedAt: string;
    publishedAt?: string;
    locale: string;
  };
}

class StrapiAPI {
  private baseUrl: string;
  private apiToken?: string;

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
    this.apiToken = process.env.STRAPI_API_TOKEN;
  }

  private async fetchAPI(endpoint: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}/api${endpoint}`;

    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...(this.apiToken && { Authorization: `Bearer ${this.apiToken}` }),
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Strapi API Error:', error);
      throw error;
    }
  }

  // Pages API
  async getPages(locale = 'en', filters?: any): Promise<StrapiResponse<StrapiPage[]>> {
    const params = new URLSearchParams({
      locale,
      'populate': 'deep',
      ...(filters && { 'filters': JSON.stringify(filters) }),
    });

    return this.fetchAPI(`/pages?${params}`);
  }

  async getPageBySlug(slug: string, locale = 'en'): Promise<StrapiResponse<StrapiPage>> {
    const params = new URLSearchParams({
      locale,
      'populate': 'deep',
    });

    return this.fetchAPI(`/pages/slug/${slug}?${params}`);
  }

  async getPagesByType(type: string, locale = 'en'): Promise<StrapiResponse<StrapiPage[]>> {
    const params = new URLSearchParams({
      locale,
      'populate': 'deep',
    });

    return this.fetchAPI(`/pages/type/${type}?${params}`);
  }

  async getNavigation(locale = 'en') {
    const params = new URLSearchParams({ locale });
    return this.fetchAPI(`/pages/navigation?${params}`);
  }

  // Homepage API
  async getHomepage(locale = 'en') {
    const params = new URLSearchParams({
      locale,
      'populate': 'deep',
    });

    return this.fetchAPI(`/homepage?${params}`);
  }

  // Search API
  async searchPages(query: string, locale = 'en') {
    const params = new URLSearchParams({
      locale,
      'populate': 'deep',
      'filters[title][$containsi]': query,
    });

    return this.fetchAPI(`/pages?${params}`);
  }

  // Generic GET method for other endpoints
  async get(endpoint: string, params?: Record<string, string>) {
    const searchParams = params ? `?${new URLSearchParams(params)}` : '';
    return this.fetchAPI(`${endpoint}${searchParams}`);
  }

  // Generic POST method
  async post(endpoint: string, data: any) {
    return this.fetchAPI(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Generic PUT method
  async put(endpoint: string, data: any) {
    return this.fetchAPI(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  // Generic DELETE method
  async delete(endpoint: string) {
    return this.fetchAPI(endpoint, {
      method: 'DELETE',
    });
  }
}

// Export singleton instance
export const strapiAPI = new StrapiAPI();

// Utility functions for easier access
export const getPages = (locale?: string, filters?: any) =>
  strapiAPI.getPages(locale, filters);

export const getPageBySlug = (slug: string, locale?: string) =>
  strapiAPI.getPageBySlug(slug, locale);

export const getPagesByType = (type: string, locale?: string) =>
  strapiAPI.getPagesByType(type, locale);

export const getNavigation = (locale?: string) =>
  strapiAPI.getNavigation(locale);

export const getHomepage = (locale?: string) =>
  strapiAPI.getHomepage(locale);

export const searchPages = (query: string, locale?: string) =>
  strapiAPI.searchPages(query, locale);

// Utility functions for handling Strapi responses
export const extractStrapiData = <T>(response: StrapiResponse<T>): T => {
  return response.data;
};

export const extractStrapiAttributes = (item: any) => {
  if (!item || !item.attributes) return item;
  return {
    id: item.id,
    ...item.attributes,
  };
};

export const formatStrapiImage = (image: any) => {
  if (!image || !image.data) return null;

  const { data } = image;
  return {
    id: data.id,
    url: data.attributes.url,
    alternativeText: data.attributes.alternativeText,
    caption: data.attributes.caption,
    width: data.attributes.width,
    height: data.attributes.height,
    formats: data.attributes.formats,
  };
};

export default strapiAPI;
