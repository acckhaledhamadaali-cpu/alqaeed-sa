/**
 * Original 4K vector covers for all published financial articles.
 * Each SVG has a 3840 × 2160 viewBox and stays sharp at every display size.
 */
const BLOG_IMAGE_SOURCES: Record<string, string> = {
  'remote-accountant-saudi-companies': '/images/blog/remote-accountant-saudi-companies.svg',
  'what-is-virtual-cfo-and-when-needed': '/images/blog/what-is-virtual-cfo-and-when-needed.svg',
  'difference-between-accountant-and-cfo': '/images/blog/difference-between-accountant-and-cfo.svg',
  'cash-flow-management-avoid-financial-crisis': '/images/blog/cash-flow-management-avoid-financial-crisis.svg',
  'financial-statements-importance-decision-making': '/images/blog/financial-statements-importance-decision-making.svg',
  'financial-analysis-key-ratios-business-owners': '/images/blog/financial-analysis-key-ratios-business-owners.svg',
  'budgeting-planning-revenues-expenses': '/images/blog/budgeting-planning-revenues-expenses.svg',
  'zakat-tax-financial-data-organization': '/images/blog/zakat-tax-financial-data-organization.svg',
  '7-signs-company-needs-remote-financial-management': '/images/blog/7-signs-company-needs-remote-financial-management.svg',
  'zakat-vat-return-guide-saudi-businesses': '/images/blog/zakat-vat-return-guide-saudi-businesses.svg',
  'bookkeeping-importance-organized-accounting': '/images/blog/bookkeeping-importance-organized-accounting.svg',
  'real-profit': '/images/blog/real-profit.svg',
  'product-pricing': '/images/blog/product-pricing.svg',
  'business-expansion': '/images/blog/business-expansion.svg',
  'remote-accountant': '/images/blog/remote-accountant.svg',
  'qawaem-financial-statements': '/images/blog/qawaem-financial-statements.svg',
  'zatca-tax-returns': '/images/blog/zatca-tax-returns.svg',
};

export function getBlogImage(slug: string): string {
  return BLOG_IMAGE_SOURCES[slug] ?? '';
}

export function getBlogImageAbsolute(slug: string): string {
  const image = getBlogImage(slug);
  if (!image) return '';
  return image.startsWith('http://') || image.startsWith('https://')
    ? image
    : new URL(image, 'https://alqaeed-sa.pages.dev').toString();
}

export function getBlogImageSrcSet(_slug: string): string {
  // Vector covers scale cleanly; a raster srcset is unnecessary.
  return '';
}
