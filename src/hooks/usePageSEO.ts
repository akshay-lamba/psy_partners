import { useEffect } from 'react';
import { trackPageView } from '../utils/analytics';

export interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
  canonicalPath?: string;
  type?: 'website' | 'article';
  jsonLd?: Record<string, any> | Array<Record<string, any>>;
}

const DEFAULT_IMAGE = 'https://static.wixstatic.com/media/b20068_95a6d49567064891ac4c729dab9acc8e~mv2.jpeg';
const BASE_URL = 'https://www.psy.partners';

function updateMetaTag(attributeName: 'name' | 'property', attributeValue: string, content: string) {
  let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function updateCanonical(url: string) {
  let canonicalEl = document.querySelector('link[rel="canonical"]');
  if (!canonicalEl) {
    canonicalEl = document.createElement('link');
    canonicalEl.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalEl);
  }
  canonicalEl.setAttribute('href', url);
}

export default function usePageSEO({
  title,
  description,
  keywords,
  image = DEFAULT_IMAGE,
  canonicalPath,
  type = 'website',
  jsonLd,
}: SEOProps) {
  useEffect(() => {
    // 1. Title
    document.title = title;

    // Current page URL determination
    const path = canonicalPath || window.location.pathname;
    const fullCanonicalUrl = `${BASE_URL}${path.startsWith('/') ? path : `/${path}`}`;

    // 2. Canonical
    updateCanonical(fullCanonicalUrl);

    // 3. Descriptions
    if (description) {
      updateMetaTag('name', 'description', description);
      updateMetaTag('property', 'og:description', description);
      updateMetaTag('name', 'twitter:description', description);
    }

    // 4. Keywords
    if (keywords) {
      updateMetaTag('name', 'keywords', keywords);
    }

    // 5. OpenGraph & Twitter Titles
    updateMetaTag('property', 'og:title', title);
    updateMetaTag('name', 'twitter:title', title);

    // 6. URLs
    updateMetaTag('property', 'og:url', fullCanonicalUrl);
    updateMetaTag('name', 'twitter:url', fullCanonicalUrl);
    updateMetaTag('property', 'og:type', type);

    // 7. Images
    updateMetaTag('property', 'og:image', image);
    updateMetaTag('property', 'og:image:secure_url', image);
    updateMetaTag('name', 'twitter:image', image);

    // 8. Dynamic Page-level Structured Data (JSON-LD)
    const scriptId = 'page-json-ld';
    let scriptEl = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (jsonLd) {
      if (!scriptEl) {
        scriptEl = document.createElement('script');
        scriptEl.id = scriptId;
        scriptEl.type = 'application/ld+json';
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(jsonLd);
    } else if (scriptEl) {
      scriptEl.remove();
    }

    // 9. Fire virtual pageview into Google Tag Manager
    trackPageView(path, title);

    return () => {
      // Optional cleanup on unmount
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [title, description, keywords, image, canonicalPath, type, JSON.stringify(jsonLd)]);
}
