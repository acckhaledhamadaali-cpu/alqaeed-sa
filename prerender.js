import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function prerender() {
  const distDir = path.resolve(__dirname, 'dist');
  const templatePath = path.resolve(distDir, 'index.html');

  if (!fs.existsSync(templatePath)) {
    console.error('Template dist/index.html not found! Run vite build first.');
    process.exit(1);
  }

  const template = fs.readFileSync(templatePath, 'utf8');

  // Import SSR bundle
  const ssrBundlePath = path.resolve(__dirname, 'dist-ssr', 'entry-server.js');
  if (!fs.existsSync(ssrBundlePath)) {
    console.error('SSR bundle dist-ssr/entry-server.js not found!');
    process.exit(1);
  }

  const { render, ROUTES_METADATA, BLOG_ARTICLES } = await import(`file://${ssrBundlePath}`);

  // Base routes from metadata
  const baseRoutes = Object.keys(ROUTES_METADATA);

  // Dynamic article routes if any exist in verified BLOG_ARTICLES
  const articleRoutes = (BLOG_ARTICLES || []).map((a) => `/blog/${a.slug}`);

  const routes = [...baseRoutes, ...articleRoutes];
  console.log(`Starting SSG Pre-rendering for ${routes.length} routes...`);

  for (const route of routes) {
    const { appHtml, metadata } = render(route);

    let html = template;

    // 1. Inject rendered component HTML into #root
    html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    // 2. Update <title> and <meta name="title">
    html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${metadata.title}</title>`);
    html = html.replace(/<meta\s+name="title"\s+content="[^"]*"\s*\/?>/i, `<meta name="title" content="${metadata.title}" />`);

    // 3. Update <meta name="description">
    html = html.replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i, `<meta name="description" content="${metadata.description}" />`);

    // 4. Update OpenGraph Tags
    html = html.replace(/<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:title" content="${metadata.ogTitle}" />`);
    html = html.replace(/<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:description" content="${metadata.ogDescription}" />`);
    html = html.replace(/<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:url" content="${metadata.ogUrl}" />`);

    // 5. Update Twitter Card Tags
    html = html.replace(/<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/i, `<meta name="twitter:title" content="${metadata.ogTitle}" />`);
    html = html.replace(/<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/i, `<meta name="twitter:description" content="${metadata.ogDescription}" />`);
    html = html.replace(/<meta\s+name="twitter:url"\s+content="[^"]*"\s*\/?>/i, `<meta name="twitter:url" content="${metadata.ogUrl}" />`);

    // 6. Update Canonical link
    html = html.replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i, `<link rel="canonical" href="${metadata.canonical}" />`);

    // 7. Update JSON-LD Schema
    if (metadata.schema) {
      const schemaScript = `<script type="application/ld+json" id="schema-jsonld">\n${JSON.stringify(metadata.schema, null, 2)}\n    </script>`;
      html = html.replace(/<script\s+type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/i, schemaScript);
    }

    // Determine output file location
    let outFilePath;
    if (route === '/') {
      outFilePath = path.resolve(distDir, 'index.html');
    } else {
      const routeDir = path.resolve(distDir, route.replace(/^\//, ''));
      if (!fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true });
      }
      outFilePath = path.resolve(routeDir, 'index.html');
    }

    fs.writeFileSync(outFilePath, html, 'utf8');
    const sizeKB = (Buffer.byteLength(html, 'utf8') / 1024).toFixed(2);
    console.log(`✓ [SSG] Generated: ${route} -> ${path.relative(process.cwd(), outFilePath)} (${sizeKB} KB)`);
  }

  // Update/generate sitemap.xml in dist and public
  const sitemapPath = path.resolve(distDir, 'sitemap.xml');
  const publicSitemapPath = path.resolve(__dirname, 'public', 'sitemap.xml');
  const sitemapEntries = routes.map((r) => {
    const loc = r === '/' ? 'https://alqaeed-sa.netlify.app/' : `https://alqaeed-sa.netlify.app${r}`;
    const priority = r === '/' ? '1.0' : r.startsWith('/services/') || r === '/blog' || r.startsWith('/blog/') ? '0.8' : '0.5';
    const changefreq = r.startsWith('/privacy') || r.startsWith('/terms') || r.startsWith('/cookies') ? 'yearly' : 'monthly';
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>2026-08-27</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
  }).join('\n');

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries}\n</urlset>\n`;
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  if (fs.existsSync(path.dirname(publicSitemapPath))) {
    fs.writeFileSync(publicSitemapPath, sitemapContent, 'utf8');
  }
  console.log(`✓ [Sitemap] Generated: sitemap.xml with ${routes.length} URLs (in dist and public)`);

  console.log('Static Site Pre-rendering completed successfully!');
}

prerender().catch((err) => {
  console.error('Error during prerender:', err);
  process.exit(1);
});
