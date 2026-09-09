import { LogoAsset } from '../types/logo';

// Curated lightweight brand assets for the accounting systems section.
// Use stable image URLs instead of favicons, which can fail or render as broken images.
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
    imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/e1/53/8a/e1538a52-df73-0a98-aa97-6bb8383096b7/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg',
    enabled: true,
    sortOrder: 2,
    createdAt: 0,
  },
  {
    id: 'daftra',
    name: 'Daftra',
    imageUrl: 'https://www.daftra.com/themed/multi_language/images/logos/daftra-ar.svg',
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
    imageUrl: 'https://pbs.twimg.com/profile_images/1846465311026880512/ndqJmzxh.jpg',
    enabled: true,
    sortOrder: 5,
    createdAt: 0,
  },
];

export const getLogos = (): LogoAsset[] => INITIAL_LOGOS;

// Kept for compatibility with the admin logo screen.
export const saveLogos = (logos: LogoAsset[]) => {
  try {
    localStorage.setItem('accounting_logo_assets_v1', JSON.stringify(logos));
    window.dispatchEvent(new Event('logos_updated'));
  } catch (e) {
    console.error('Error saving logos', e);
  }
};
