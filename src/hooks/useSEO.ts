import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  schema: object;
}

function setMeta(selector: string, content: string, attributeName: 'name' | 'property') {
  let tag = document.querySelector(selector) as HTMLMetaElement | null;

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attributeName, selector.match(new RegExp(attributeName + '="([^"]+)"'))?.[1] || '');
    document.head.appendChild(tag);
  }

  tag.setAttribute('content', content);
}

export function useSEO({ title, description, canonical, schema }: SEOProps) {
  useEffect(() => {
    document.title = title;

    setMeta('meta[name="description"]', description, 'name');
    setMeta('meta[property="og:title"]', title, 'property');
    setMeta('meta[property="og:description"]', description, 'property');
    setMeta('meta[property="og:url"]', canonical, 'property');
    setMeta('meta[name="twitter:title"]', title, 'name');
    setMeta('meta[name="twitter:description"]', description, 'name');
    setMeta('meta[name="twitter:url"]', canonical, 'name');

    const canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag) {
      canonicalTag.setAttribute('href', canonical);
    }

    let schemaScript = document.getElementById('schema-jsonld') as HTMLScriptElement | null;
    if (!schemaScript) {
      schemaScript = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement | null;
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
