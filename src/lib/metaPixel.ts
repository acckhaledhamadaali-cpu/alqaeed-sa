/**
 * Meta Pixel tracking helpers.
 *
 * The pixel loader is initialized in index.html. These helpers keep
 * React/SSR code safe by accessing window only in the browser.
 */

export const META_PIXEL_ID = '1358162632825916';

type MetaPixelEvent =
  | 'PageView'
  | 'ViewContent'
  | 'Lead'
  | 'Contact';

type MetaPixelParameters = Record<string, string | number | boolean>;

interface MetaPixelWindow extends Window {
  fbq?: (...args: unknown[]) => void;
}

function getFbq(): ((...args: unknown[]) => void) | null {
  if (typeof window === 'undefined') {
    return null;
  }

  const fbq = (window as MetaPixelWindow).fbq;
  return typeof fbq === 'function' ? fbq : null;
}

export function trackMetaEvent(
  eventName: MetaPixelEvent,
  parameters?: MetaPixelParameters
): void {
  const fbq = getFbq();

  if (!fbq) {
    return;
  }

  if (parameters && Object.keys(parameters).length > 0) {
    fbq('track', eventName, parameters);
    return;
  }

  fbq('track', eventName);
}

export function trackMetaPageView(pathname: string): void {
  trackMetaEvent('PageView');

  if (
    pathname.startsWith('/services/') ||
    pathname.startsWith('/sectors/') ||
    pathname.startsWith('/blog/')
  ) {
    trackMetaEvent('ViewContent', {
      content_name: pathname,
      content_type: 'website_content'
    });
  }
}

export function trackMetaLead(source: string, href?: string): void {
  trackMetaEvent('Lead', {
    content_name: source,
    content_type: 'lead',
    page_path: typeof window !== 'undefined' ? window.location.pathname : '',
    ...(href ? { link_url: href } : {})
  });
}

export function trackMetaContact(source: string, href?: string): void {
  trackMetaEvent('Contact', {
    content_name: source,
    content_type: 'contact',
    page_path: typeof window !== 'undefined' ? window.location.pathname : '',
    ...(href ? { link_url: href } : {})
  });
}
