import { LogoAsset } from '../types/logo';

// Lightweight brand marks. QuickBooks, Xero and Odoo use their recognizable brand marks;
// Qoyod, Daftra and SMACC load the current mark from each product's own domain.
const INITIAL_LOGOS: LogoAsset[] = [
  {
    id: 'quickbooks',
    name: 'QuickBooks',
    imageUrl: 'https://cdn.simpleicons.org/quickbooks/2CA01C',
    enabled: true,
    sortOrder: 0,
    createdAt: 0,
  },
  {
    id: 'xero',
    name: 'Xero',
    imageUrl: 'https://cdn.simpleicons.org/xero/13B5EA',
    enabled: true,
    sortOrder: 1,
    createdAt: 0,
  },
  {
    id: 'qoyod',
    name: 'Qoyod',
    imageUrl: 'https://www.qoyod.com/favicon.ico',
    enabled: true,
    sortOrder: 2,
    createdAt: 0,
  },
  {
    id: 'daftra',
    name: 'Daftra',
    imageUrl: 'https://www.daftra.com/favicon.ico',
    enabled: true,
    sortOrder: 3,
    createdAt: 0,
  },
  {
    id: 'odoo',
    name: 'Odoo',
    imageUrl: 'https://cdn.simpleicons.org/odoo/714B67',
    enabled: true,
    sortOrder: 4,
    createdAt: 0,
  },
  {
    id: 'smacc',
    name: 'SMACC',
    imageUrl: 'https://smacc.com/favicon.ico',
    enabled: true,
    sortOrder: 5,
    createdAt: 0,
  },
];

export const getLogos = (): LogoAsset[] => INITIAL_LOGOS;

// Kept for compatibility with the admin logo screen.
// The homepage marquee intentionally uses the curated brand list above.
export const saveLogos = (logos: LogoAsset[]) => {
  try {
    localStorage.setItem('accounting_logo_assets_v1', JSON.stringify(logos));
    window.dispatchEvent(new Event('logos_updated'));
  } catch (e) {
    console.error('Error saving logos', e);
  }
};
