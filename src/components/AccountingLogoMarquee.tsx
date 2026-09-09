import React, { useState } from 'react';
import { LogoAsset } from '../types/logo';
import { getLogos } from '../services/logoService';

const FALLBACK_MARKS: Record<string, { label: string; color: string }> = {
  QuickBooks: { label: 'qb', color: '#2CA01C' },
  Xero: { label: 'xero', color: '#13B5EA' },
  Qoyod: { label: 'قيود', color: '#17306F' },
  Daftra: { label: 'daftra', color: '#E85D2A' },
  Odoo: { label: 'odoo', color: '#714B67' },
  SMACC: { label: 'SMACC', color: '#2475B8' },
};

function BrandLogo({ logo, duplicate = false }: { logo: LogoAsset; duplicate?: boolean }) {
  const [failed, setFailed] = useState(false);
  const fallback = FALLBACK_MARKS[logo.name] ?? { label: logo.name, color: '#475569' };

  return (
    <div
      className="flex items-center justify-center shrink-0 mx-4 sm:mx-6 md:mx-8 h-8 sm:h-9 md:h-10"
      aria-hidden={duplicate}
    >
      {failed ? (
        <span
          className="inline-flex items-center justify-center font-semibold whitespace-nowrap"
          style={{ color: fallback.color, fontSize: logo.name === 'Qoyod' ? '15px' : '14px' }}
        >
          {fallback.label}
        </span>
      ) : (
        <img
          src={logo.imageUrl}
          alt={duplicate ? '' : `${logo.name} - نظام محاسبي`}
          width="120"
          height="40"
          className="block h-7 sm:h-8 md:h-9 w-auto max-w-[120px] sm:max-w-[140px] md:max-w-[155px] object-contain opacity-90 transition-opacity duration-300 group-hover:opacity-100"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

export default function AccountingLogoMarquee() {
  const logos = getLogos().filter((logo) => logo.enabled).sort((a, b) => a.sortOrder - b.sortOrder);

  if (logos.length === 0) return null;

  return (
    <div
      className="w-full relative overflow-hidden py-2.5 md:py-3 group"
      aria-label="الأنظمة المحاسبية التي أتعامل معها"
    >
      <div className="absolute inset-y-0 left-0 w-8 md:w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-8 md:w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div dir="ltr" className="flex w-full overflow-hidden">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
          {[0, 1].map((set) => (
            <div key={set} className="flex items-center shrink-0" aria-hidden={set === 1}>
              {logos.map((logo) => (
                <BrandLogo key={`${set}-${logo.id}`} logo={logo} duplicate={set === 1} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
