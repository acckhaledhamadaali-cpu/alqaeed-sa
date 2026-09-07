import { LogoAsset } from '../types/logo';

const STORAGE_KEY = 'accounting_logo_assets_v1';

// Initial placeholders (simple text-based SVG data URIs so they load fast and don't rely on external networks initially)
// This fulfills the "create the data structure and upload interface but do not substitute fake AI-generated logos" requirement
// by using clean textual representations of the names as SVGs.
const generateTextSVG = (text: string, color: string) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" width="200" height="60"><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="24" fill="${color}">${text}</text></svg>`;
  return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svg)))}`;
};

const INITIAL_LOGOS: LogoAsset[] = [
  { id: '1', name: 'QuickBooks', imageUrl: generateTextSVG('QuickBooks', '#2CA01C'), enabled: true, sortOrder: 0, createdAt: Date.now() },
  { id: '2', name: 'Xero', imageUrl: generateTextSVG('Xero', '#13B5EA'), enabled: true, sortOrder: 1, createdAt: Date.now() },
  { id: '3', name: 'Daftra', imageUrl: generateTextSVG('Daftra', '#F15A24'), enabled: true, sortOrder: 2, createdAt: Date.now() },
  { id: '4', name: 'Qoyod', imageUrl: generateTextSVG('Qoyod', '#0052CC'), enabled: true, sortOrder: 3, createdAt: Date.now() },
  { id: '5', name: 'Odoo', imageUrl: generateTextSVG('Odoo', '#714B67'), enabled: true, sortOrder: 4, createdAt: Date.now() },
  { id: '6', name: 'SMACC', imageUrl: generateTextSVG('SMACC', '#D32F2F'), enabled: true, sortOrder: 5, createdAt: Date.now() }
];

export const getLogos = (): LogoAsset[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      const parsed = JSON.parse(data) as LogoAsset[];
      return parsed.sort((a, b) => a.sortOrder - b.sortOrder);
    }
    // Seed initial data if none exists
    saveLogos(INITIAL_LOGOS);
    return INITIAL_LOGOS;
  } catch (e) {
    console.error("Error loading logos", e);
    return [];
  }
};

export const saveLogos = (logos: LogoAsset[]) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(logos));
    // Dispatch a custom event so the marquee can update automatically when admin saves
    window.dispatchEvent(new Event('logos_updated'));
  } catch (e) {
    console.error("Error saving logos", e);
  }
};
