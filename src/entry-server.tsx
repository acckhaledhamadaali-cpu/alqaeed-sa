import { PassThrough } from 'node:stream';
import { renderToPipeableStream } from 'react-dom/server';
import App from './App';
import { ROUTES_METADATA, getRouteMetadata } from './lib/routes-metadata';
import { BLOG_ARTICLES } from './data/blogArticles';
import { getLocalSeoRoutes } from './data/localSeo';

export function render(path: string) {
  const normalizedPath = (path.endsWith('/') && path.length > 1) ? path.slice(0, -1) : path;
  const metadata = getRouteMetadata(normalizedPath);

  // Wait for lazy route modules before resolving HTML so every prerendered
  // route keeps its complete server-rendered content for SEO and no-JS visits.
  return new Promise<{ appHtml: string; metadata: typeof metadata }>((resolve, reject) => {
    const chunks: Buffer[] = [];
    const output = new PassThrough();

    output.on('data', (chunk: Buffer | string) => {
      chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
    });
    output.on('error', reject);
    output.on('end', () => {
      resolve({ appHtml: Buffer.concat(chunks).toString('utf8'), metadata });
    });

    const stream = renderToPipeableStream(<App path={normalizedPath} />, {
      onAllReady() {
        stream.pipe(output);
      },
      onShellError(error) {
        reject(error);
      },
      onError(error) {
        console.error(`[SSR] Failed to render ${normalizedPath}:`, error);
      },
    });
  });
}

export { ROUTES_METADATA, BLOG_ARTICLES, getRouteMetadata, getLocalSeoRoutes };
