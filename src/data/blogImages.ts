const BLOG_IMAGE_SOURCES: Record<string, string> = {
  'remote-accountant-saudi-companies': 'https://images.unsplash.com/photo-1781246435700-afec19012b45?auto=format&fit=crop&w=3840&q=72&fm=webp',
  'what-is-virtual-cfo-and-when-needed': 'https://images.unsplash.com/photo-1758518729711-1cbacd55efdb?auto=format&fit=crop&w=3840&q=72&fm=webp',
  'difference-between-accountant-and-cfo': 'https://images.unsplash.com/photo-1762427354397-854a52e0ded7?auto=format&fit=crop&w=3840&q=72&fm=webp',
  'cash-flow-management-avoid-financial-crisis': 'https://images.unsplash.com/photo-1707157284454-553ef0a4ed0d?auto=format&fit=crop&w=3840&q=72&fm=webp',
  'financial-statements-importance-decision-making': 'https://images.unsplash.com/photo-1758518727820-28491c194bee?auto=format&fit=crop&w=3840&q=72&fm=webp',
  'financial-analysis-key-ratios-business-owners': 'https://images.unsplash.com/photo-1781246435700-afec19012b45?auto=format&fit=crop&w=3840&q=72&fm=webp',
  'budgeting-planning-revenues-expenses': 'https://images.unsplash.com/photo-1762427354397-854a52e0ded7?auto=format&fit=crop&w=3840&q=72&fm=webp',
  'zakat-tax-financial-data-organization': 'https://images.unsplash.com/photo-1772588627499-baefc8ab0ce7?auto=format&fit=crop&w=3840&q=72&fm=webp',
  '7-signs-company-needs-remote-financial-management': 'https://images.unsplash.com/photo-1758518729711-1cbacd55efdb?auto=format&fit=crop&w=3840&q=72&fm=webp',
};

const ARTICLES_WITHOUT_COVER_IMAGE = new Set([
  'zakat-vat-return-guide-saudi-businesses',
  'bookkeeping-importance-organized-accounting',
]);

export function getBlogImage(slug: string): string {
  if (ARTICLES_WITHOUT_COVER_IMAGE.has(slug)) return '';
  return BLOG_IMAGE_SOURCES[slug] ?? `/images/blog/${slug}.webp`;
}

export function getBlogImageAbsolute(slug: string): string {
  const image = getBlogImage(slug);
  if (!image) return '';
  return image.startsWith('http://') || image.startsWith('https://')
    ? image
    : new URL(image, 'https://alqaeed-sa.pages.dev').toString();
}

export function getBlogImageSrcSet(slug: string): string {
  const src = getBlogImage(slug);
  if (!src.startsWith('https://images.unsplash.com/')) return '';
  return [640, 960, 1440, 1920, 3840]
    .map((width) => `${src.replace('w=3840', `w=${width}`)} ${width}w`)
    .join(', ');
}
