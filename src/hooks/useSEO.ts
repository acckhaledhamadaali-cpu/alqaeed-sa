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
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    // Update canonical URL
    const canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag) {
      canonicalTag.setAttribute('href', canonical);
    }

    // Update or inject Structured Data Schema (JSON-LD) without creating duplicates
    let schemaScript = document.getElementById('schema-jsonld') as HTMLScriptElement | null;
    if (!schemaScript) {
      schemaScript = document.querySelector('script[type="application/ld+json"]');
    }

    const schemaString = JSON.stringify(schema, null, 2);

    if (schemaScript) {
      schemaScript.id = 'schema-jsonld';
      schemaScript.type = 'application/ld+json';
      schemaScript.textContent = schemaString;
    } else {
      schemaScript = document.createElement('script');
      schemaScript.id = 'schema-jsonld';
      schemaScript.type = 'application/ld+json';
      schemaScript.textContent = schemaString;
      document.head.appendChild(schemaScript);
    }
  }, [title, description, canonical, schema]);
}
