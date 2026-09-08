import { ShieldCheck } from 'lucide-react';
import AccountingLogoMarquee from './AccountingLogoMarquee';

export default function SoftwareIntegrations() {
  return (
    <section className="border-y border-border-subtle bg-surface-subtle/30 py-10 sm:py-14" aria-labelledby="integrations-title">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mx-auto mb-7 max-w-3xl text-center sm:mb-9">
          <p className="mb-2 text-xs font-semibold tracking-wide text-secondary">تكامل مرن مع أدواتك الحالية</p>
          <h2 id="integrations-title" className="mb-3 text-xl font-bold text-text-primary sm:text-2xl font-arabic">
            نعمل على نظامك المحاسبي الحالي دون تعطيل سير العمل
          </h2>
          <p className="text-sm leading-relaxed text-text-secondary sm:text-base">
            نبدأ من البرنامج المعتمد في منشأتك، وننظّم الوصول والبيانات بما يحافظ على استمرارية العمل ووضوح الأرقام.
          </p>
        </div>

        <div className="mb-6 flex items-center justify-center gap-2 text-center text-xs text-text-secondary sm:text-sm">
          <ShieldCheck className="h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
          <span>يتم تحديد صلاحيات الوصول وخطوات العمل قبل البدء.</span>
        </div>

        <AccountingLogoMarquee />
      </div>
    </section>
  );
}
