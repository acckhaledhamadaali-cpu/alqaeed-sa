import { useSEO } from '../../hooks/useSEO';
import SectionWrapper from '../../../components/SectionWrapper';
import Container from '../../../components/Container';
import { TYPOGRAPHY } from '../../lib/tokens';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '966511294383';
const VAT_WHATSAPP_MESSAGE = 'السلام عليكم، أحتاج مساعدة في إقرار ضريبة القيمة المضافة لمنشأتي. ما البيانات اللازمة للبدء؟';
const ZAKAT_WHATSAPP_MESSAGE = 'السلام عليكم، أحتاج مساعدة في الإقرار الزكوي لمنشأتي. ما البيانات الأولية اللازمة؟';
const makeWhatsAppUrl = (message: string) => 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message);
const VAT_WHATSAPP_URL = makeWhatsAppUrl(VAT_WHATSAPP_MESSAGE);
const ZAKAT_WHATSAPP_URL = makeWhatsAppUrl(ZAKAT_WHATSAPP_MESSAGE);

const VAT_SERVICE_URL = 'https://zatca.gov.sa/ar/eServices/Pages/eServices-009.aspx';
const VAT_GUIDE_URL = 'https://zatca.gov.sa/ar/HelpCenter/guidelines/Documents/Simplified_VAT_Filing_Guidelines.pdf';
const ZAKAT_SERVICE_URL = 'https://zatca.gov.sa/ar/eServices/Pages/eServices-051.aspx';
const ZAKAT_REGULATION_URL = 'https://zatca.gov.sa/ar/RulesRegulations/Taxes/Pages/ZakatRegulations.aspx';

function WhatsAppLink({
  href,
  onClick,
  children,
  primary = false,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
  primary?: boolean;
}) {
  const style = primary
    ? 'border border-[#25D366] bg-[#25D366] text-white hover:bg-[#20ba5a]'
    : 'border border-border-subtle bg-white text-text-primary hover:border-secondary/60 hover:bg-surface-muted/40';

  return (
    <a
      href={href}
      onClick={onClick}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-xs transition-colors sm:text-sm ${style}`}
    >
      <MessageCircle className="h-4 w-4" aria-hidden="true" />
      {children}
    </a>
  );
}

function OfficialLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      className="inline-flex min-h-10 items-center rounded-lg border border-border-subtle bg-white px-3 py-2 text-xs text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:border-secondary/50 hover:text-secondary sm:text-sm"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export default function ZakatTaxPage() {
  const name = 'الإقرار الزكوي وإقرار ضريبة القيمة المضافة';
  const slug = 'zakat-tax';
  const metaTitle = 'إقرار الزكاة وضريبة القيمة المضافة | القائد';
  const metaDesc = 'إعداد ومراجعة إقرار ضريبة القيمة المضافة والإقرار الزكوي للمنشآت السعودية عن بُعد، مع توضيح البيانات والمستندات وخطوات كل خدمة.';
  const url = 'https://alqaeed-sa.pages.dev/services/' + slug + '/';

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': url + '#webpage',
        url,
        name: metaTitle,
        description: metaDesc,
        primaryImageOfPage: { '@id': 'https://alqaeed-sa.pages.dev/#logo' },
        inLanguage: 'ar-SA',
        isPartOf: { '@id': 'https://alqaeed-sa.pages.dev/#website' },
      },
      {
        '@type': 'Service',
        '@id': url + '#vat-service',
        name: 'إعداد ومراجعة إقرار ضريبة القيمة المضافة',
        description: 'إعداد أو مراجعة بيانات إقرار ضريبة القيمة المضافة للمنشآت المسجلة، بحسب مستندات الفترة وقواعد الهيئة.',
        provider: { '@id': 'https://alqaeed-sa.pages.dev/#organization' },
        areaServed: 'Saudi Arabia',
      },
      {
        '@type': 'Service',
        '@id': url + '#zakat-service',
        name: 'إعداد ومراجعة الإقرار الزكوي',
        description: 'إعداد أو مراجعة بيانات الإقرار الزكوي بحسب صفة المكلف ونوع الإقرار والفترة والمستندات ذات الصلة.',
        provider: { '@id': 'https://alqaeed-sa.pages.dev/#organization' },
        areaServed: 'Saudi Arabia',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': url + '#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: 'https://alqaeed-sa.pages.dev/' },
          { '@type': 'ListItem', position: 2, name, item: url },
        ],
      },
    ],
  };

  useSEO({ title: metaTitle, description: metaDesc, canonical: url, schema });

  const trackWhatsAppClick = (service: 'vat' | 'zakat') => {
    const linkUrl = service === 'vat' ? VAT_WHATSAPP_URL : ZAKAT_WHATSAPP_URL;
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: 'service_cta_' + service + '_' + slug,
        link_url: linkUrl,
      });
    }
  };

  return (
    <SectionWrapper id={'service-' + slug + '-section'} variant="white" spacing="default">
      <Container>
        <div className="mx-auto max-w-5xl py-4 text-right font-arabic md:py-8">
          <nav aria-label="مسار التنقل" className="mb-5 text-xs text-text-muted">
            <a href="/" className="transition-colors hover:text-primary">الرئيسية - القائد للإدارة المالية</a>
            <span className="mx-2 text-border-subtle">/</span>
            <span className="text-text-secondary">{name}</span>
          </nav>

          <header className="grid gap-5 rounded-2xl border border-border-subtle bg-surface-subtle/40 p-5 md:grid-cols-[1fr_auto] md:items-center md:gap-8 md:p-8">
            <div>
              <p className="mb-2 text-xs text-secondary sm:text-sm">خدمة إعداد ومراجعة للمنشآت في المملكة</p>
              <h1 className={`${TYPOGRAPHY.heading.h1} leading-tight text-text-primary`}>
                الإقرار الزكوي وإقرار ضريبة القيمة المضافة
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-8 text-text-secondary md:text-[15px]">
                لكل إقرار بياناته ومتطلباته. أراجع سجلات منشأتك وأجهّز الإقرار المناسب للفترة المحددة، ثم أوضح لك ما يحتاج إلى استكمال قبل اعتماده.
              </p>
              <p className="mt-3 text-xs leading-6 text-text-muted">
                العمل عن بُعد في جميع مناطق المملكة · خالد القائد، محاسب مالي
              </p>
            </div>
            <div className="flex flex-col gap-2 md:min-w-56">
              <WhatsAppLink href={VAT_WHATSAPP_URL} onClick={() => trackWhatsAppClick('vat')} primary>
                استفسر عن إقرار ضريبة القيمة المضافة
              </WhatsAppLink>
              <WhatsAppLink href={ZAKAT_WHATSAPP_URL} onClick={() => trackWhatsAppClick('zakat')}>
                استفسر عن الإقرار الزكوي
              </WhatsAppLink>
            </div>
          </header>

          <nav aria-label="انتقل إلى تفاصيل الإقرار" className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <a href="#vat-return" className="group rounded-xl border border-border-subtle bg-white p-4 transition-colors hover:border-secondary/50 hover:bg-surface-muted/30">
              <span className="block text-xs text-text-muted">للمنشآت المسجلة في ضريبة القيمة المضافة</span>
              <span className="mt-1 flex items-center justify-between gap-3 text-sm text-text-primary">
                إقرار ضريبة القيمة المضافة
                <span className="text-secondary transition-transform group-hover:-translate-x-1" aria-hidden="true">←</span>
              </span>
            </a>
            <a href="#zakat-return" className="group rounded-xl border border-border-subtle bg-white p-4 transition-colors hover:border-secondary/50 hover:bg-surface-muted/30">
              <span className="block text-xs text-text-muted">بحسب صفة المكلف ونوع الإقرار</span>
              <span className="mt-1 flex items-center justify-between gap-3 text-sm text-text-primary">
                الإقرار الزكوي
                <span className="text-secondary transition-transform group-hover:-translate-x-1" aria-hidden="true">←</span>
              </span>
            </a>
          </nav>

          <section id="vat-return" aria-labelledby="vat-return-heading" className="mt-9 scroll-mt-24 overflow-hidden rounded-2xl border border-border-subtle bg-white">
            <header className="border-b border-border-subtle px-5 py-5 md:px-7">
              <p className="mb-1 text-xs text-secondary">أولًا · ضريبة القيمة المضافة</p>
              <h2 id="vat-return-heading" className="border-r-2 border-primary pr-3 text-lg text-text-primary md:text-xl">
                إقرار ضريبة القيمة المضافة
              </h2>
              <p className="mt-2 max-w-3xl text-sm leading-7 text-text-secondary">
                يُقدَّم من الأشخاص المسجلين عن الفترة الضريبية المحددة، ويعرض التعاملات ذات الصلة بالمبيعات والمشتريات الخاضعة للضريبة. ويقارن الإعداد بين الضريبة على المبيعات وضريبة المشتريات المؤهلة للخصم، وفق شروط الهيئة.
              </p>
            </header>
            <div className="space-y-6 p-5 md:p-7">
              <div>
                <h3 className="mb-2 text-base text-text-primary">ما الذي تتم مراجعته؟</h3>
                <ul className="divide-y divide-border-subtle text-sm leading-7 text-text-secondary">
                  <li className="grid gap-1 py-3 sm:grid-cols-[150px_1fr] sm:gap-4"><strong className="text-primary">المبيعات</strong><span>مطابقة إجماليات الفترة مع سجل الفواتير، والتحقق من تواريخ العمليات وتصنيفها وفق بيانات المنشأة.</span></li>
                  <li className="grid gap-1 py-3 sm:grid-cols-[150px_1fr] sm:gap-4"><strong className="text-primary">المشتريات</strong><span>مقارنة المشتريات بفواتيرها المؤيدة، وفحص ارتباطها بالنشاط وأهلية ضريبة المدخلات للخصم.</span></li>
                  <li className="grid gap-1 py-3 sm:grid-cols-[150px_1fr] sm:gap-4"><strong className="text-primary">التعديلات عند انطباقها</strong><span>مراجعة الإشعارات الدائنة أو المدينة، ومستندات الاستيراد والتسويات المرتبطة بالفترة.</span></li>
                </ul>
              </div>

              <div className="grid gap-5 border-t border-border-subtle pt-5 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 text-base text-text-primary">ما الذي تجهزه للبدء؟</h3>
                  <ul className="list-disc space-y-1 pr-5 text-sm leading-7 text-text-secondary">
                    <li>تقرير أو سجل المبيعات والمشتريات للفترة، ويفضل أن يبيّن رقم الفاتورة وتاريخها وقيمتها والضريبة.</li>
                    <li>الفواتير الضريبية والإشعارات ذات الصلة، مع مستندات الاستيراد أو التسويات إذا كانت ضمن معاملات المنشأة.</li>
                    <li>الإقرار السابق إذا كان العمل يتضمن مراجعة تصحيح أو رصيد مرحّل.</li>
                  </ul>
                </div>
                <div className="rounded-xl border-r-2 border-secondary bg-surface-subtle/40 p-4">
                  <h3 className="text-sm text-text-primary">نقطة لا ينبغي تجاوزها</h3>
                  <p className="mt-2 text-xs leading-7 text-text-secondary">
                    وجود فاتورة لا يجعل ضريبة مشترياتها قابلة للخصم تلقائيًا. يلزم فحص نوع المصروف، وارتباطه بالنشاط، واستيفاء الفاتورة وشروط الخصم؛ وقد تختلف المعالجة بحسب طبيعة التوريد.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 border-t border-border-subtle pt-5">
                <OfficialLink href={VAT_SERVICE_URL}>خدمة تقديم إقرار ضريبة القيمة المضافة من ZATCA</OfficialLink>
                <OfficialLink href={VAT_GUIDE_URL}>الدليل المبسط لإعداد ورفع الإقرار</OfficialLink>
              </div>

              <div className="border-t border-border-subtle pt-5">
                <WhatsAppLink href={VAT_WHATSAPP_URL} onClick={() => trackWhatsAppClick('vat')} primary>
                  أرسل استفسارك عن إقرار القيمة المضافة
                </WhatsAppLink>
              </div>
            </div>
          </section>

          <section id="zakat-return" aria-labelledby="zakat-return-heading" className="mt-6 scroll-mt-24 overflow-hidden rounded-2xl border border-border-subtle bg-white">
            <header className="border-b border-border-subtle px-5 py-5 md:px-7">
              <p className="mb-1 text-xs text-secondary">ثانيًا · الزكاة</p>
              <h2 id="zakat-return-heading" className="border-r-2 border-primary pr-3 text-lg text-text-primary md:text-xl">
                الإقرار الزكوي للمنشآت
              </h2>
              <p className="mt-2 max-w-3xl text-sm leading-7 text-text-secondary">
                الإقرار الزكوي مستقل عن إقرار ضريبة القيمة المضافة. تحدد بيانات التسجيل وصفة المكلف ونوع الإقرار والفترة المالية نطاق العمل. ولا يُستنتج الوعاء الزكوي من صافي الربح وحده؛ بل تُراجع البنود وفق المعالجات التي تنطبق على حالة المكلف.
              </p>
            </header>
            <div className="space-y-6 p-5 md:p-7">
              <div>
                <h3 className="mb-2 text-base text-text-primary">ما الذي تتم مراجعته؟</h3>
                <ul className="divide-y divide-border-subtle text-sm leading-7 text-text-secondary">
                  <li className="grid gap-1 py-3 sm:grid-cols-[150px_1fr] sm:gap-4"><strong className="text-primary">بيانات المكلف</strong><span>التسجيل، وصفة المنشأة، ونوع الإقرار والفترة الظاهرة في حسابها لدى الهيئة.</span></li>
                  <li className="grid gap-1 py-3 sm:grid-cols-[150px_1fr] sm:gap-4"><strong className="text-primary">البيانات المالية</strong><span>مطابقة الأرقام بالسجلات والقوائم وميزان المراجعة، وربط البنود بمستنداتها عند الحاجة.</span></li>
                  <li className="grid gap-1 py-3 sm:grid-cols-[150px_1fr] sm:gap-4"><strong className="text-primary">متطلبات إضافية</strong><span>النماذج أو الإفصاحات التي يطلبها نوع الإقرار، مثل نموذج تسعير المعاملات إذا انطبق.</span></li>
                </ul>
              </div>

              <div className="grid gap-5 border-t border-border-subtle pt-5 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 text-base text-text-primary">ما الذي تجهزه للبدء؟</h3>
                  <ul className="list-disc space-y-1 pr-5 text-sm leading-7 text-text-secondary">
                    <li>بيانات التسجيل ونوع الإقرار والفترة المالية المطلوب إعدادها.</li>
                    <li>القوائم المالية وميزان المراجعة والسجل العام أو ما يتوفر من سجلات محاسبية عن الفترة.</li>
                    <li>مستندات البنود محل المراجعة، والإقرار السابق أو نماذج إضافية إذا كانت مطلوبة للحالة.</li>
                  </ul>
                </div>
                <div className="rounded-xl border-r-2 border-secondary bg-surface-subtle/40 p-4">
                  <h3 className="text-sm text-text-primary">هل القوائم المدققة مطلوبة للجميع؟</h3>
                  <p className="mt-2 text-xs leading-7 text-text-secondary">
                    لا يصح تعميم هذا المتطلب على كل المنشآت دون فحص الحالة. قد يلزم بعض المكلفين إرفاق قوائم مالية مدققة؛ ويُتحقق من المتطلب بحسب صفة المكلف واللائحة الحالية ونوع الإقرار قبل التجهيز.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 border-t border-border-subtle pt-5">
                <OfficialLink href={ZAKAT_SERVICE_URL}>خدمة تقديم إقرار الزكاة للمنشآت من ZATCA</OfficialLink>
                <OfficialLink href={ZAKAT_REGULATION_URL}>اللائحة التنفيذية الحالية لجباية الزكاة 1445هـ</OfficialLink>
              </div>

              <div className="border-t border-border-subtle pt-5">
                <WhatsAppLink href={ZAKAT_WHATSAPP_URL} onClick={() => trackWhatsAppClick('zakat')} primary>
                  أرسل استفسارك عن الإقرار الزكوي
                </WhatsAppLink>
              </div>
            </div>
          </section>

          <section aria-labelledby="work-steps-heading" className="mt-7 rounded-2xl border border-border-subtle bg-surface-subtle/30 p-5 md:p-7">
            <p className="text-xs text-secondary">خطوات واضحة قبل الإرسال</p>
            <h2 id="work-steps-heading" className="mt-1 text-lg text-text-primary md:text-xl">كيف تسير الخدمة؟</h2>
            <ol className="mt-4 divide-y divide-border-subtle">
              <li className="grid gap-1 py-3 text-sm sm:grid-cols-[180px_1fr] sm:gap-4"><strong className="text-text-primary">١. تحديد الحالة</strong><span className="text-xs leading-7 text-text-secondary">نحدد الإقرار المطلوب والفترة وبيانات المنشأة المتاحة قبل طلب المستندات.</span></li>
              <li className="grid gap-1 py-3 text-sm sm:grid-cols-[180px_1fr] sm:gap-4"><strong className="text-text-primary">٢. فحص السجلات</strong><span className="text-xs leading-7 text-text-secondary">أراجع البيانات المؤيدة، وأوضح لك النواقص أو الفروقات التي تحتاج إلى استيضاح.</span></li>
              <li className="grid gap-1 py-3 text-sm sm:grid-cols-[180px_1fr] sm:gap-4"><strong className="text-text-primary">٣. مراجعة المسودة</strong><span className="text-xs leading-7 text-text-secondary">تستلم مسودة الإقرار والملاحظات لمراجعتها؛ ولا يتم الإرسال نيابة عنك إلا بعد اعتمادك واستكمال التفويض اللازم.</span></li>
            </ol>
          </section>

          <aside className="mt-5 border-r-2 border-primary px-4 py-2 text-xs leading-7 text-text-secondary">
            الخدمة إعداد ومراجعة للبيانات والإقرار، وليست تدقيقًا للقوائم المالية أو اعتمادًا لها. يعتمد الإقرار على صحة المستندات التي تقدمها المنشأة، وتبقى قرارات الربط والقبول من اختصاص هيئة الزكاة والضريبة والجمارك.
          </aside>

          <aside className="mt-5 rounded-xl border border-border-subtle bg-white p-4 text-sm leading-7">
            <p className="text-text-secondary">
              قراءة مرتبطة: <a href="/blog/zakat-tax-financial-data-organization/" className="text-primary underline underline-offset-4 hover:text-secondary">كيف تجهّز بياناتك المالية قبل الإقرار؟</a>
            </p>
          </aside>

          <section aria-labelledby="related-services-heading" className="mt-8 border-t border-border-subtle pt-6">
            <h2 id="related-services-heading" className="mb-4 text-lg text-text-primary">خدمات مالية مرتبطة</h2>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              <a href="/services/bookkeeping/" className="group flex items-center justify-between gap-2 rounded-lg border border-border-subtle bg-white p-3 text-xs text-secondary transition-colors hover:border-secondary/50 hover:bg-surface-muted/40 sm:text-sm">
                تنظيم الحسابات ومسك الدفاتر <span className="text-secondary/70 transition-transform group-hover:-translate-x-0.5" aria-hidden="true">←</span>
              </a>
              <a href="/services/financial-statements/" className="group flex items-center justify-between gap-2 rounded-lg border border-border-subtle bg-white p-3 text-xs text-secondary transition-colors hover:border-secondary/50 hover:bg-surface-muted/40 sm:text-sm">
                إعداد القوائم المالية <span className="text-secondary/70 transition-transform group-hover:-translate-x-0.5" aria-hidden="true">←</span>
              </a>
              <a href="/services/virtual-cfo/" className="group flex items-center justify-between gap-2 rounded-lg border border-border-subtle bg-white p-3 text-xs text-secondary transition-colors hover:border-secondary/50 hover:bg-surface-muted/40 sm:text-sm">
                المدير المالي عن بُعد <span className="text-secondary/70 transition-transform group-hover:-translate-x-0.5" aria-hidden="true">←</span>
              </a>
            </div>
          </section>
        </div>
      </Container>
    </SectionWrapper>
  );
}
