/**
 * Licensed photographic covers for the published financial articles.
 * Photos are from Pexels and are served through its image CDN at 3840 × 2160.
 * Each source photo is selected for the article topic; no text or vector artwork
 * is overlaid on the photograph. See Pexels license: https://www.pexels.com/license/
 */
const BLOG_IMAGE_SOURCES: Record<string, string> = {
  'remote-accountant-saudi-companies': 'https://images.pexels.com/photos/6694492/pexels-photo-6694492.jpeg?auto=compress&cs=tinysrgb&w=3840&h=2160&fit=crop',
  'what-is-virtual-cfo-and-when-needed': 'https://images.pexels.com/photos/7433865/pexels-photo-7433865.jpeg?auto=compress&cs=tinysrgb&w=3840&h=2160&fit=crop',
  'difference-between-accountant-and-cfo': 'https://images.pexels.com/photos/8441811/pexels-photo-8441811.jpeg?auto=compress&cs=tinysrgb&w=3840&h=2160&fit=crop',
  'cash-flow-management-avoid-financial-crisis': 'https://images.pexels.com/photos/6694950/pexels-photo-6694950.jpeg?auto=compress&cs=tinysrgb&w=3840&h=2160&fit=crop',
  'financial-statements-importance-decision-making': 'https://images.pexels.com/photos/7109288/pexels-photo-7109288.jpeg?auto=compress&cs=tinysrgb&w=3840&h=2160&fit=crop',
  'financial-analysis-key-ratios-business-owners': 'https://images.pexels.com/photos/7681088/pexels-photo-7681088.jpeg?auto=compress&cs=tinysrgb&w=3840&h=2160&fit=crop',
  'budgeting-planning-revenues-expenses': 'https://images.pexels.com/photos/8970674/pexels-photo-8970674.jpeg?auto=compress&cs=tinysrgb&w=3840&h=2160&fit=crop',
  'zakat-tax-financial-data-organization': 'https://images.pexels.com/photos/6863334/pexels-photo-6863334.jpeg?auto=compress&cs=tinysrgb&w=3840&h=2160&fit=crop',
  '7-signs-company-needs-remote-financial-management': 'https://images.pexels.com/photos/7988219/pexels-photo-7988219.jpeg?auto=compress&cs=tinysrgb&w=3840&h=2160&fit=crop',
  'zakat-vat-return-guide-saudi-businesses': 'https://images.pexels.com/photos/8962448/pexels-photo-8962448.jpeg?auto=compress&cs=tinysrgb&w=3840&h=2160&fit=crop',
  'bookkeeping-importance-organized-accounting': 'https://images.pexels.com/photos/8962458/pexels-photo-8962458.jpeg?auto=compress&cs=tinysrgb&w=3840&h=2160&fit=crop',
  'real-profit': 'https://images.pexels.com/photos/8296970/pexels-photo-8296970.jpeg?auto=compress&cs=tinysrgb&w=3840&h=2160&fit=crop',
  'product-pricing': 'https://images.pexels.com/photos/8970693/pexels-photo-8970693.jpeg?auto=compress&cs=tinysrgb&w=3840&h=2160&fit=crop',
  'business-expansion': 'https://images.pexels.com/photos/16176573/pexels-photo-16176573.jpeg?auto=compress&cs=tinysrgb&w=3840&h=2160&fit=crop',
  'remote-accountant': 'https://images.pexels.com/photos/5439139/pexels-photo-5439139.jpeg?auto=compress&cs=tinysrgb&w=3840&h=2160&fit=crop',
  'qawaem-financial-statements': 'https://images.pexels.com/photos/7681077/pexels-photo-7681077.jpeg?auto=compress&cs=tinysrgb&w=3840&h=2160&fit=crop',
  'zatca-tax-returns': 'https://images.pexels.com/photos/6863330/pexels-photo-6863330.jpeg?auto=compress&cs=tinysrgb&w=3840&h=2160&fit=crop',
};

export function getBlogImage(slug: string): string {
  return BLOG_IMAGE_SOURCES[slug] ?? '';
}

export function getBlogImageAbsolute(slug: string): string {
  return getBlogImage(slug);
}

export function getBlogImageSrcSet(_slug: string): string {
  // The CDN URL already requests a 3840 × 2160 responsive crop.
  return '';
}
