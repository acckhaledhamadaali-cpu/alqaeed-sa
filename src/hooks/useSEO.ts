import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  schema: object;
}

export function useSEO({ title, description, canonical, schema }: SEOProps) {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    // Update canonical URL
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag) {
      canonicalTag.setAttribute('href', canonical);
    }

    // Inject WebPage Schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      // Cleanup dynamically injected schema on unmount
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [title, description, canonical, schema]);
}
