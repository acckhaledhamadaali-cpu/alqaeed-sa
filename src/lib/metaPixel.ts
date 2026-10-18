/** Meta Pixel helpers. The loader and PageView are initialized in index.html. */
export const META_PIXEL_ID = '1358162632825916';

type MetaPixelEvent = 'PageView' | 'ViewContent' | 'Lead' | 'Contact';
type MetaPixelParameters = Record<string, string | number | boolean>;
interface MetaPixelWindow extends Window { fbq?: (...args: unknown[]) => void; }

function getFbq(): ((...args: unknown[]) => void) | null {
  if (typeof window === 'undefined') return null;
  const fbq = (window as MetaPixelWindow).fbq;
  return typeof fbq === 'function' ? fbq : null;
}

export function trackMetaEvent(eventName: MetaPixelEvent, parameters?: MetaPixelParameters): void {
  const fbq = getFbq();
  if (!fbq) return;
  parameters && Object.keys(parameters).length > 0 ? fbq('track', eventName, parameters) : fbq('track', eventName);
}

export function trackMetaPageView(pathname: string): void {
  trackMetaEvent('PageView');
  if (pathname.startsWith('/services/') || pathname.startsWith('/sectors/') || pathname.startsWith('/blog/')) {
    trackMetaEvent('ViewContent', { content_name: pathname, content_category: 'website_content' });
  }
}

/** A WhatsApp click is a qualified contact intent, not a confirmed conversation. */
export function trackMetaLead(source: string, href?: string): void {
  trackMetaEvent('Lead', {
    content_name: 'WhatsApp click',
    content_category: source,
    page_path: typeof window !== 'undefined' ? window.location.pathname : '',
    ...(href ? { link_url: href } : {}),
  });
}

export function trackMetaContact(source: string, href?: string): void {
  trackMetaEvent('Contact', {
    content_name: source,
    content_category: 'direct_contact',
    page_path: typeof window !== 'undefined' ? window.location.pathname : '',
    ...(href ? { link_url: href } : {}),
  });
}
