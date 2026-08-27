import { renderToString } from 'react-dom/server';
import App from './App';
import { ROUTES_METADATA, getRouteMetadata } from './lib/routes-metadata';
import { BLOG_ARTICLES } from './data/blogArticles';

export function render(path: string) {
  const normalizedPath = (path.endsWith('/') && path.length > 1) ? path.slice(0, -1) : path;
  const appHtml = renderToString(<App path={normalizedPath} />);
  const metadata = getRouteMetadata(normalizedPath);
  return {
    appHtml,
    metadata,
  };
}

export { ROUTES_METADATA, BLOG_ARTICLES, getRouteMetadata };
