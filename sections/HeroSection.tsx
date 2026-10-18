import { HTMLAttributes } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Container from '../components/Container';
import { ShieldCheck, MessageCircle } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/966511294383?text=' +
  encodeURIComponent('السلام عليكم، أريد فحصًا ماليًا أوليًا لمنشأتي.');

export default function HeroSection(props: HTMLAttributes<HTMLElement>) {
  return (
    <SectionWrapper id="hero-section-wrapper" variant="white" spacing="default" {...props}>
      <Container id="hero-container">
        <div className="grid items-center gap-8 md:grid-cols-12 md:gap-10">
          <div className="order-2 md:order-1 md:col-span-7">
            <p className="mb-3 text-sm font-bold text-emerald-700">القائد للإدارة المالية</p>
            <h1 id="hero-brand-name" className="max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
              اعرف ربحك. واضبط سيولتك.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Virtual CFO عن بُعد للمنشآت السعودية: حسابات مرتبة، تقارير مفهومة، وامتثال دون تكلفة موظف مالي كامل.
            </p>
            <p className="mt-3 inline-flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck className="h-4 w-4 text-emerald-600" aria-hidden="true" />
              سرية تامة؛ NDA قبل مشاركة المستندات.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-track-whatsapp="hero" id="hero-primary-cta" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 text-sm font-bold text-white transition hover:bg-[#20ba5a] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                اطلب فحصًا ماليًا عبر واتساب
              </a>
              <a href="#services-section-wrapper" id="hero-secondary-cta" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-200 px-5 text-sm font-bold text-slate-800 transition hover:border-emerald-500 hover:text-emerald-700">
                شاهد الخدمات
              </a>
            </div>
            <p className="mt-3 text-xs text-slate-500">نراجع آخر شهرين ونوضح لك أهم الفجوات.</p>
          </div>
          <div className="order-1 flex justify-center md:order-2 md:col-span-5 md:justify-end">
            <img src="/images/khaled-800.webp" srcSet="/images/khaled-400.webp 400w, /images/khaled-800.webp 800w" sizes="(max-width: 768px) 240px, 360px" width={400} height={600} loading="eager" fetchPriority="high" decoding="async" alt="خالد القائد، مستشار مالي للمنشآت السعودية" className="h-auto w-56 rounded-2xl object-cover sm:w-64 md:w-80" id="hero-profile-image" />
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
