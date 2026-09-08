import AccountingLogoMarquee from './AccountingLogoMarquee';
import { Layers } from 'lucide-react';

interface SupportedSystemsSectionProps {
  subtitle?: string;
}

export default function SupportedSystemsSection({
  subtitle = "نعمل مباشرة على النظام المحاسبي المعتمد في منشأتك لتنظيم العمليات وإصدار التقارير، دون الحاجة لتغيير نظامك الحالي."
}: SupportedSystemsSectionProps) {
  return (
    <div className="my-8 p-5 sm:p-6 bg-surface-subtle/40 border border-border-subtle rounded-2xl">
      <div className="flex items-center gap-2 mb-2">
        <Layers className="w-5 h-5 text-secondary shrink-0" aria-hidden="true" />
        <h2 className="text-base md:text-lg font-bold text-text-primary font-arabic">
          الأنظمة التي يمكن العمل عليها عند الحاجة
        </h2>
      </div>
      <p className="text-xs md:text-sm text-text-secondary mb-5 leading-relaxed">
        {subtitle}
      </p>

      {/* Systems Grid / Logos */}
      <AccountingLogoMarquee />

      <div className="mt-4 p-3 bg-white/70 border border-border-subtle/80 rounded-xl text-xs text-text-secondary leading-relaxed">
        <span className="font-semibold text-text-primary">ملاحظة عملية: </span>
        نحن ندعم تنظيم العمليات والقيود والمطابقات المحاسبية عبر <strong>العمل على النظام</strong> الفعلي لمنشأتك (مثل قيود، دفترة، Odoo، Zoho Books، QuickBooks، ERPNext) بحسب صلاحياتك واحتياجك، دون ادعاء تكامل تقني مباشر غير موجود.
      </div>
    </div>
  );
}
