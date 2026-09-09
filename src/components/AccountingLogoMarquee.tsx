import React from 'react';
import { LogoAsset } from '../types/logo';
import { getLogos } from '../services/logoService';

export default function AccountingLogoMarquee() {
  const logos = getLogos().filter((logo) => logo.enabled).sort((a, b) => a.sortOrder - b.sortOrder);

  if (logos.length === 0) return null;

  return (
    <div className="w-full relative overflow-hidden py-3 md:py-4 group" aria-label="الأنظمة المحاسبية التي أتعامل معها">
      <div className="absolute inset-y-0 left-0 w-10 md:w-20 bg-gradient-to-r from-surface-subtle/30 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-10 md:w-20 bg-gradient-to-l from-surface-subtle/30 to-transparent z-10 pointer-events-none" />

      <div dir="ltr" className="flex w-full overflow-hidden">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
          {[0, 1].map((set) => (
            <div key={set} className="flex items-center shrink-0" aria-hidden={set === 1}>
              {logos.map((logo) => (
                <div
                  key={`${set}-${logo.id}`}
                  className="flex items-center justify-center shrink-0 mx-5 sm:mx-7 md:mx-10 h-9 sm:h-10 md:h-11"
                >
                  <img
                    src={logo.imageUrl}
                    alt={set === 0 ? `${logo.name} - نظام محاسبي` : ''}
                    width="160"
                    height="44"
                    className="h-7 sm:h-8 md:h-9 w-auto max-w-[130px] sm:max-w-[150px] md:max-w-[170px] object-contain opacity-85 grayscale-[5%] transition duration-300 group-hover:opacity-100"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
