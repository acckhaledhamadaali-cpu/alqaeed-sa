import { renderToString } from 'react-dom/server';
import App from './App';
import { ROUTES_METADATA } from './lib/routes-metadata';

export function render(path: string) {
  const normalizedPath = (path.endsWith('/') && path.length > 1) ? path.slice(0, -1) : path;
  const appHtml = renderToString(<App path={normalizedPath} />);
  const metadata = ROUTES_METADATA[normalizedPath] || ROUTES_METADATA['/'];
  return {
    appHtml,
    metadata,
  };
}

export { ROUTES_METADATA };
