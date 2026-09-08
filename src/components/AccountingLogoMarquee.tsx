import { useEffect, useState, type CSSProperties } from 'react';
import { LogoAsset } from '../types/logo';
import { getLogos } from '../services/logoService';

export default function AccountingLogoMarquee() {
  const [logos, setLogos] = useState<LogoAsset[]>([]);

  useEffect(() => {
    const loadLogos = () => {
      const activeLogos = getLogos().filter((logo) => logo.enabled).sort((a, b) => a.sortOrder - b.sortOrder);
      setLogos(activeLogos);
    };

    loadLogos();
    window.addEventListener('logos_updated', loadLogos);
    return () => window.removeEventListener('logos_updated', loadLogos);
  }, []);

  if (logos.length === 0) return null;

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6" role="list" aria-label="برامج محاسبية متوافقة">
      {logos.map((logo, index) => (
        <div
          key={logo.id}
          role="listitem"
          className="integration-card flex h-20 items-center justify-center rounded-xl border border-border-subtle bg-white px-4 shadow-[0_2px_8px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-[0_8px_20px_rgba(5,150,105,0.12)]"
          style={{ '--integration-delay': `${index * 170}ms` } as CSSProperties}
        >
          <img
            src={logo.imageUrl}
            alt={logo.name}
            className="max-h-9 w-full max-w-[140px] object-contain"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}
