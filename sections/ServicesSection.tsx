import { HTMLAttributes } from 'react';
import { BarChart3, BookOpenCheck, Calculator, Landmark, Settings2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import Container from '../components/Container';

const SERVICES: Array<{ title: string; description: string; href: string; Icon: LucideIcon }> = [
  { title: 'الحسابات والدفاتر', description: 'قيود وتسويات تجعل أرقامك قابلة للاعتماد.', href: '/services/bookkeeping/', Icon: Calculator },
  { title: 'القوائم والتقارير', description: 'صورة مختصرة عن الأداء والمركز المالي.', href: '/services/financial-statements/', Icon: BookOpenCheck },
  { title: 'الربحية والسيولة', description: 'نعرف أين يذهب النقد وما الذي يحقق الهامش.', href: '/services/financial-analysis/', Icon: BarChart3 },
  { title: 'الزكاة والضريبة', description: 'تجهيز ومراجعة ضمن نطاق العمل المتفق عليه.', href: '/services/zakat-tax/', Icon: Landmark },
  { title: 'الأنظمة والتخطيط', description: 'تهيئة Odoo أو نظامك الحالي وموازنة قابلة للمتابعة.', href: '/services/virtual-cfo/', Icon: Settings2 },
];

export default function ServicesSection(props: HTMLAttributes<HTMLElement>) {
  return (
    <SectionWrapper id="services-section-wrapper" variant="white" spacing="dense" {...props}>
      <Container id="services-container">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 max-w-2xl">
            <h2 id="services-title" className="text-2xl font-extrabold text-slate-950 sm:text-3xl">خمس خدمات. صورة مالية أوضح.</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">اختر نقطة البداية، ونحدد النطاق والأتعاب بعد فهم حجم منشأتك.</p>
          </div>
          <div id="services-list-container" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {SERVICES.map(({ title, description, href, Icon }) => (
              <a key={title} href={href} className="group rounded-2xl border border-slate-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-emerald-500 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500">
                <Icon className="h-6 w-6 text-emerald-600" aria-hidden="true" />
                <h3 className="mt-4 text-sm font-extrabold text-slate-950 group-hover:text-emerald-700">{title}</h3>
                <p className="mt-2 text-xs leading-6 text-slate-600">{description}</p>
                <span className="mt-3 inline-block text-xs font-bold text-emerald-700">التفاصيل ←</span>
              </a>
            ))}
          </div>
          <div id="services-blog-link" className="pt-4 text-center">
            <a href="/blog/" className="text-xs font-medium text-slate-500 transition hover:text-emerald-700 sm:text-sm">استكشف المكتبة المالية ←</a>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
