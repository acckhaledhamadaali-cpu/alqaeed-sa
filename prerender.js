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

  const { render, ROUTES_METADATA } = await import(`file://${ssrBundlePath}`);

  const routes = Object.keys(ROUTES_METADATA);
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
      const schemaScript = `<script type="application/ld+json">\n${JSON.stringify(metadata.schema, null, 2)}\n    </script>`;
      html = html.replace(/<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/i, schemaScript);
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

  console.log('Static Site Pre-rendering completed successfully!');
}

prerender().catch((err) => {
  console.error('Error during prerender:', err);
  process.exit(1);
});
