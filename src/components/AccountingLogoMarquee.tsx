import React, { useEffect, useState } from 'react';
import { LogoAsset } from '../types/logo';
import { getLogos } from '../services/logoService';

export default function AccountingLogoMarquee() {
  const [logos, setLogos] = useState<LogoAsset[]>([]);

  const loadLogos = () => {
    const allLogos = getLogos();
    const activeLogos = allLogos.filter(l => l.enabled).sort((a, b) => a.sortOrder - b.sortOrder);
    setLogos(activeLogos);
  };

  useEffect(() => {
    loadLogos();
    
    const handleUpdate = () => {
      loadLogos();
    };

    window.addEventListener('logos_updated', handleUpdate);
    return () => window.removeEventListener('logos_updated', handleUpdate);
  }, []);

  if (logos.length === 0) return null;

  return (
    <div className="w-full relative py-6 md:py-8 overflow-hidden group">
      {/* Edge Fades */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-surface-subtle/30 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-surface-subtle/30 to-transparent z-10 pointer-events-none"></div>

      {/* Marquee Track container - forced LTR for predictable CSS translation */}
      <div dir="ltr" className="flex w-full overflow-hidden">
        <div className="flex w-fit animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center">
          {/* Duplicate set 1 */}
          {logos.map((logo, idx) => (
            <div key={`set1-${logo.id}-${idx}`} className="flex items-center justify-center shrink-0 mx-8 md:mx-16 h-8 md:h-10">
              <img 
                src={logo.imageUrl} 
                alt={`${logo.name} logo`} 
                className="h-full w-auto object-contain max-w-[200px] opacity-70 hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
              />
            </div>
          ))}
          {/* Duplicate set 2 to create the seamless loop */}
          {logos.map((logo, idx) => (
            <div key={`set2-${logo.id}-${idx}`} className="flex items-center justify-center shrink-0 mx-8 md:mx-16 h-8 md:h-10" aria-hidden="true">
              <img 
                src={logo.imageUrl} 
                alt={`${logo.name} logo`} 
                className="h-full w-auto object-contain max-w-[200px] opacity-70 hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}