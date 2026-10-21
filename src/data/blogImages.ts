/**
 * Article-specific photography for the Alqaeed Saudi financial-management blog.
 * Photo direction: male-only business imagery with an Arabic/Middle Eastern professional
 * visual where appropriate, alongside finance-specific photos. Tax and bookkeeping may
 * also use document-only imagery. Review individual stock photos before production use.
 * Pexels license: https://www.pexels.com/legal-pages/license/
 */
const image = (id: string) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop`;

const BLOG_IMAGE_SOURCES: Record<string, string> = {
  // Remote accounting: male accountant working with financial papers and calculator.
  'remote-accountant-saudi-companies': image('8939105'),
  // Virtual CFO: executive reviewing documents in a modern office.
  'what-is-virtual-cfo-and-when-needed': image('8939057'),
  // Accountant vs CFO: male professional examining financial documents.
  'difference-between-accountant-and-cfo': image('8939057'),
  // Cash flow: male business professional analyzing figures and charts.
  'cash-flow-management-avoid-financial-crisis': image('5915297'),
  // Financial statements: man reviewing business documents and charts.
  'financial-statements-importance-decision-making': image('7868977'),
  // Financial analysis: businessman reviewing reports at his desk.
  'financial-analysis-key-ratios-business-owners': image('7580653'),
  // Budgeting: businessman with calculator, laptop, and financial documents.
  'budgeting-planning-revenues-expenses': image('7821716'),
  // Zakat and tax organization: male professional working on tax documents.
  'zakat-tax-financial-data-organization': image('7821712'),
  // Signs that a company needs financial leadership: businessman reviewing charts.
  '7-signs-company-needs-remote-financial-management': image('5921484'),
  // Tax returns: male professional handling finance paperwork and calculator.
  'zakat-vat-return-guide-saudi-businesses': image('7821712'),
  // Bookkeeping: male professional working through business paperwork.
  'bookkeeping-importance-organized-accounting': image('7821541'),
  // Profitability: focused businessman working with a calculator and documents.
  'real-profit': image('7821702'),
  // Product pricing: business professional examining financial documents.
  'product-pricing': image('7821546'),
  // Expansion planning: man reviewing financial graphs in an office.
  'business-expansion': image('7698817'),
  // Remote accountant topic: male accountant discussing reports in an office.
  'remote-accountant': image('8939105'),
  // Financial statements (legacy slug): mature businessman reviewing a report.
  'qawaem-financial-statements': image('7845349'),
  // ZATCA returns (legacy slug): tax forms, calculator, and organized documents.
  'zatca-tax-returns': image('6928997'),
};

export function getBlogImage(slug: string): string {
  return BLOG_IMAGE_SOURCES[slug] ?? '';
}

export function getBlogImageAbsolute(slug: string): string {
  return getBlogImage(slug);
}

export function getBlogImageSrcSet(_slug: string): string {
  // Each image is served as a responsive landscape crop from the image CDN.
  return '';
}
