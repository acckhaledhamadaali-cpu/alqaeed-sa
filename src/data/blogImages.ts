/**
 * Curated real photography for Arabic/Saudi business audiences.
 * Selection rules: male Middle Eastern / thobe business photos only where people appear;
 * no women; for detailed finance topics, use real calculator, paperwork, cash,
 * and report-desk photography rather than fabricated overlaid figures.
 * Pexels commercial-use license: https://www.pexels.com/legal-pages/license/
 *
 * CDN requests a 3840x2160 landscape crop. Original source dimensions vary by photo;
 * this requests a 4K-sized delivery but does not upscale a lower-resolution original.
 */
const BLOG_IMAGE_SOURCES: Record<string, string> = {
  'remote-accountant-saudi-companies': 'https://images.pexels.com/photos/7984740/pexels-photo-7984740.jpeg?auto=compress&cs=tinysrgb&w=3840&h=2160&fit=crop',
  'what-is-virtual-cfo-and-when-needed': 'https://images.pexels.com/photos/8939106/pexels-photo-8939106.jpeg?auto=compress&cs=tinysrgb&w=3840&h=2160&fit=crop',
  'difference-between-accountant-and-cfo': 'https://images.pexels.com/photos/8939054/pexels-photo-8939054.jpeg?auto=compress&cs=tinysrgb&w=3840&h=2160&fit=crop',
  'cash-flow-management-avoid-financial-crisis': 'https://images.pexels.com/photos/6694492/pexels-photo-6694492.jpeg?auto=compress&cs=tinysrgb&w=3840&h=2160&fit=crop',
  'financial-statements-importance-decision-making': 'https://images.pexels.com/photos/8296948/pexels-photo-8296948.jpeg?auto=compress&cs=tinysrgb&w=3840&h=2160&fit=crop',
  'financial-analysis-key-ratios-business-owners': 'https://images.pexels.com/photos/8297126/pexels-photo-8297126.jpeg?auto=compress&cs=tinysrgb&w=3840&h=2160&fit=crop',
  'budgeting-planning-revenues-expenses': 'https://images.pexels.com/photos/8297030/pexels-photo-8297030.jpeg?auto=compress&cs=tinysrgb&w=3840&h=2160&fit=crop',
  'zakat-tax-financial-data-organization': 'https://images.pexels.com/photos/8297220/pexels-photo-8297220.jpeg?auto=compress&cs=tinysrgb&w=3840&h=2160&fit=crop',
  '7-signs-company-needs-remote-financial-management': 'https://images.pexels.com/photos/7594092/pexels-photo-7594092.jpeg?auto=compress&cs=tinysrgb&w=3840&h=2160&fit=crop',
  'zakat-vat-return-guide-saudi-businesses': 'https://images.pexels.com/photos/8296977/pexels-photo-8296977.jpeg?auto=compress&cs=tinysrgb&w=3840&h=2160&fit=crop',
  'bookkeeping-importance-organized-accounting': 'https://images.pexels.com/photos/8939048/pexels-photo-8939048.jpeg?auto=compress&cs=tinysrgb&w=3840&h=2160&fit=crop',
  'real-profit': 'https://images.pexels.com/photos/8939055/pexels-photo-8939055.jpeg?auto=compress&cs=tinysrgb&w=3840&h=2160&fit=crop',
  'product-pricing': 'https://images.pexels.com/photos/8939103/pexels-photo-8939103.jpeg?auto=compress&cs=tinysrgb&w=3840&h=2160&fit=crop',
  'business-expansion': 'https://images.pexels.com/photos/8939042/pexels-photo-8939042.jpeg?auto=compress&cs=tinysrgb&w=3840&h=2160&fit=crop',
  'remote-accountant': 'https://images.pexels.com/photos/7984733/pexels-photo-7984733.jpeg?auto=compress&cs=tinysrgb&w=3840&h=2160&fit=crop',
  'qawaem-financial-statements': 'https://images.pexels.com/photos/8939105/pexels-photo-8939105.jpeg?auto=compress&cs=tinysrgb&w=3840&h=2160&fit=crop',
  'zatca-tax-returns': 'https://images.pexels.com/photos/8939100/pexels-photo-8939100.jpeg?auto=compress&cs=tinysrgb&w=3840&h=2160&fit=crop',
};

export function getBlogImage(slug: string): string {
  return BLOG_IMAGE_SOURCES[slug] ?? '';
}

export function getBlogImageAbsolute(slug: string): string {
  return getBlogImage(slug);
}

export function getBlogImageSrcSet(_slug: string): string {
  // The CDN URL requests a 3840 × 2160 crop; native source dimensions vary.
  return '';
}
