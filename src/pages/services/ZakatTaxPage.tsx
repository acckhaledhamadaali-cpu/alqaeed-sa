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

export default function ZakatTaxPage() {
  const name = 'إقرار ضريبة القيمة المضافة والإقرار الزكوي';
  const slug = 'zakat-tax';
  const metaTitle = 'إقرار ضريبة القيمة المضافة والإقرار الزكوي | القائد';
  const metaDesc = 'إعداد ومراجعة إقرار ضريبة القيمة المضافة أو الإقرار الزكوي عن بُعد للمنشآت الصغيرة والمتوسطة في جميع مناطق السعودية، مع شرح المستندات وخطوات كل خدمة.';
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
        description: 'خدمة مستقلة لإعداد ومراجعة إقرار ضريبة القيمة المضافة للمنشآت المسجلة، عن بُعد في مناطق السعودية، وفق بيانات الفترة ومستنداتها.',
        provider: { '@id': 'https://alqaeed-sa.pages.dev/#organization' },
        areaServed: 'Saudi Arabia',
      },
      {
        '@type': 'Service',
        '@id': url + '#zakat-service',
        name: 'إعداد ومراجعة الإقرار الزكوي',
        description: 'خدمة مستقلة لإعداد ومراجعة الإقرار الزكوي للمنشآت بحسب صفتها وسجلاتها ومستنداتها، عن بُعد في مناطق السعودية.',
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
        <div className="mx-auto max-w-3xl py-4 text-right font-arabic md:py-8">
          <nav aria-label="مسار التنقل" className="mb-4 text-xs text-text-muted">
            <a href="/" className="transition-colors hover:text-primary">الرئيسية - القائد للإدارة المالية</a>
            <span className="mx-2 text-border-subtle">/</span>
            <span className="text-text-secondary">{name}</span>
          </nav>

          <h1 className={`${TYPOGRAPHY.heading.h1} mb-4 leading-tight text-text-primary`}>
            {name}
          </h1>
          <div className="mb-5 h-1 w-16 rounded-full bg-primary" aria-hidden="true" />
          <p className="text-sm leading-8 text-text-secondary md:text-[15px]">
            الزكاة وضريبة القيمة المضافة إقراران منفصلان. أساعد المنشآت الصغيرة والمتوسطة في إعداد الإقرار المناسب أو مراجعته بحسب مستنداتها، عن بُعد في جميع مناطق المملكة.
          </p>
          <p className="mt-2 text-xs leading-6 text-text-secondary">
            خالد القائد | محاسب مالي
          </p>

          <div className="mt-5 flex flex-col gap-2 sm:flex-row">
            <a
              href={VAT_WHATSAPP_URL}
              onClick={() => trackWhatsAppClick('vat')}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="تواصل عبر واتساب بشأن إقرار ضريبة القيمة المضافة"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-2.5 text-xs text-white shadow-sm transition-all duration-200 hover:bg-[#20ba5a] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 sm:text-sm"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              تواصل بشأن إقرار ضريبة القيمة المضافة
            </a>
            <a
              href={ZAKAT_WHATSAPP_URL}
              onClick={() => trackWhatsAppClick('zakat')}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="تواصل عبر واتساب بشأن الإقرار الزكوي"
              className="inline-flex min-h-11 items-center justify-center rounded-xl border border-border-subtle bg-white px-5 py-2.5 text-xs text-primary transition-colors hover:border-secondary/50 hover:bg-surface-muted/40 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 sm:text-sm"
            >
              تواصل بشأن الإقرار الزكوي عبر واتساب
            </a>
          </div>

          <nav aria-label="انتقل إلى تفاصيل الإقرار" className="mt-6 rounded-xl border border-border-subtle bg-surface-subtle/30 p-3">
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <a
                href="#vat-return"
                className="group flex items-center justify-between gap-3 rounded-lg border border-border-subtle bg-white p-3 text-xs transition-colors hover:border-secondary/50 hover:bg-surface-muted/40 sm:text-sm"
              >
                <span className="flex items-center gap-2 text-secondary">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden="true" />
                  تفاصيل إقرار ضريبة القيمة المضافة
                </span>
                <span className="text-secondary/70 transition-transform group-hover:-translate-x-0.5" aria-hidden="true">←</span>
              </a>
              <a
                href="#zakat-return"
                className="group flex items-center justify-between gap-3 rounded-lg border border-border-subtle bg-white p-3 text-xs transition-colors hover:border-secondary/50 hover:bg-surface-muted/40 sm:text-sm"
              >
                <span className="flex items-center gap-2 text-secondary">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden="true" />
                  تفاصيل الإقرار الزكوي
                </span>
                <span className="text-secondary/70 transition-transform group-hover:-translate-x-0.5" aria-hidden="true">←</span>
              </a>
            </div>
          </nav>

          <section id="vat-return" aria-labelledby="vat-return-heading" className="mt-8 scroll-mt-24 overflow-hidden rounded-xl border border-border-subtle bg-white">
            <header className="border-b border-border-subtle bg-surface-subtle/30 px-5 py-4">
              <h2 id="vat-return-heading" className="border-r-2 border-primary pr-3 text-lg text-text-primary md:text-xl">
                إقرار ضريبة القيمة المضافة
              </h2>
              <p className="mt-2 text-xs leading-6 text-text-secondary">
                للأشخاص المسجلين في ضريبة القيمة المضافة عن الفترة المحددة.
              </p>
            </header>
            <div className="space-y-4 p-5 text-sm leading-8 text-text-secondary md:p-6 md:text-[15px]">
              <p>
                يشتمل الإقرار على التعاملات الخاضعة للضريبة في المبيعات والمشتريات خلال الفترة، وفق سجلات المنشأة ومستنداتها.
              </p>

              <h3 className="mt-5 border-r-2 border-primary pr-3 text-base text-primary">طريقة العمل</h3>
              <ol className="list-decimal space-y-1 pr-6">
                <li>تحديد الفترة وحالة التسجيل، ثم استلام بيانات المبيعات والمشتريات.</li>
                <li>مراجعة البيانات مقابل الفواتير والسجلات، وتوضيح الفروقات أو النواقص.</li>
                <li>إعداد مسودة الإقرار وإيضاح أي نقاط تحتاج إلى مراجعة.</li>
              </ol>

              <h3 className="mt-5 border-r-2 border-primary pr-3 text-base text-primary">ما يلزم للتجهيز</h3>
              <ul className="list-disc list-inside space-y-1 pr-4">
                <li>ملخص المبيعات والمشتريات للفترة الضريبية.</li>
                <li>الفواتير الضريبية الصادرة والواردة، والإشعارات الدائنة أو المدينة ذات الصلة.</li>
                <li>مستندات الاستيراد أو التصدير والتسويات، إذا كانت تنطبق على معاملات المنشأة.</li>
              </ul>
              <p className="border-r-2 border-secondary pr-3">
                لا تُخصم ضريبة المدخلات لمجرد وجود فاتورة؛ تُراجع أهلية الخصم وشروطها والمستندات المؤيدة وفق قواعد الهيئة.
              </p>

              <h3 className="mt-5 border-r-2 border-primary pr-3 text-base text-primary">روابط ZATCA الرسمية</h3>
              <ul className="list-disc list-inside space-y-1 pr-4">
                <li><a className="text-primary underline underline-offset-4 hover:text-secondary" href="https://zatca.gov.sa/ar/eServices/Pages/eServices-009.aspx" target="_blank" rel="noopener noreferrer">تقديم إقرار ضريبة القيمة المضافة</a></li>
                <li><a className="text-primary underline underline-offset-4 hover:text-secondary" href="https://zatca.gov.sa/ar/HelpCenter/guidelines/Documents/Simplified_VAT_Filing_Guidelines.pdf" target="_blank" rel="noopener noreferrer">الدليل المبسط لرفع الإقرار</a></li>
              </ul>

              <div className="border-t border-border-subtle pt-4">
                <a href={VAT_WHATSAPP_URL} onClick={() => trackWhatsAppClick('vat')} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-2.5 text-xs text-white transition-colors hover:bg-[#20ba5a] sm:text-sm">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  استفسر عن إقرار ضريبة القيمة المضافة
                </a>
              </div>
            </div>
          </section>

          <section id="zakat-return" aria-labelledby="zakat-return-heading" className="mt-6 scroll-mt-24 overflow-hidden rounded-xl border border-border-subtle bg-white">
            <header className="border-b border-border-subtle bg-surface-subtle/30 px-5 py-4">
              <h2 id="zakat-return-heading" className="border-r-2 border-primary pr-3 text-lg text-text-primary md:text-xl">
                الإقرار الزكوي
              </h2>
              <p className="mt-2 text-xs leading-6 text-text-secondary">
                إقرار مستقل يُجهّز بحسب صفة المكلف والفترة المالية المسجلة لدى الهيئة.
              </p>
            </header>
            <div className="space-y-4 p-5 text-sm leading-8 text-text-secondary md:p-6 md:text-[15px]">
              <p>
                يقدَّم الإقرار عن الفترة المالية ونوع المكلف المحددين لدى الهيئة؛ لذلك تختلف تفاصيل الملف والمرفقات من منشأة إلى أخرى.
              </p>

              <h3 className="mt-5 border-r-2 border-primary pr-3 text-base text-primary">ما يلزم للتجهيز</h3>
              <ul className="list-disc list-inside space-y-1 pr-4">
                <li>بيانات المنشأة وصفة المكلف ونوع الإقرار والفترة المالية.</li>
                <li>القوائم المالية وميزان المراجعة والسجلات ذات الصلة بحسب حالة المنشأة.</li>
                <li>المستندات المؤيدة للبنود المالية، مثل الفواتير أو العقود أو كشوف الحساب عند ارتباطها بها.</li>
              </ul>
              <p className="border-r-2 border-secondary pr-3">
                يوضح دليل ZATCA أن المكلفين الملزمين بمسك الدفاتر التجارية يرفقون القوائم المالية المدققة والمعتمدة من محاسب قانوني مرخص، مع مراعاة الاستثناءات النظامية؛ لذا يُتحقق من انطباق المتطلب على المنشأة.
              </p>

              <h3 className="mt-5 border-r-2 border-primary pr-3 text-base text-primary">طريقة العمل</h3>
              <ol className="list-decimal space-y-1 pr-6">
                <li>تحديد صفة المكلف والفترة ونوع الإقرار.</li>
                <li>مراجعة السجلات والمستندات وإيضاح ما يحتاج إلى استكمال.</li>
                <li>إعداد مسودة الإقرار وإيضاح ما يحتاج إلى استكمال أو تأكيد.</li>
              </ol>

              <h3 className="mt-5 border-r-2 border-primary pr-3 text-base text-primary">روابط ZATCA الرسمية</h3>
              <ul className="list-disc list-inside space-y-1 pr-4">
                <li><a className="text-primary underline underline-offset-4 hover:text-secondary" href="https://zatca.gov.sa/ar/eServices/Pages/eServices-051.aspx" target="_blank" rel="noopener noreferrer">تقديم إقرار الزكاة للمنشآت</a></li>
                <li><a className="text-primary underline underline-offset-4 hover:text-secondary" href="https://zatca.gov.sa/ar/HelpCenter/guidelines/Documents/%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D9%86%D8%AF%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B2%D9%83%D9%88%D9%8A%D8%A9.pdf" target="_blank" rel="noopener noreferrer">دليل المستندات الزكوية</a></li>
              </ul>

              <div className="border-t border-border-subtle pt-4">
                <a href={ZAKAT_WHATSAPP_URL} onClick={() => trackWhatsAppClick('zakat')} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-2.5 text-xs text-white transition-colors hover:bg-[#20ba5a] sm:text-sm">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  استفسر عن الإقرار الزكوي
                </a>
              </div>
            </div>
          </section>

          <aside className="mt-6 rounded-xl border border-border-subtle bg-surface-subtle/30 p-4 text-xs leading-7 text-text-secondary">
            تُعد البيانات وفق سجلات ومستندات المنشأة؛ ولا يعني إعداد الإقرار تدقيق القوائم المالية أو اعتمادها. لا يتم الرفع إلا بطلبك وبعد اعتمادك واستكمال التفويض اللازم، والقرار النهائي من اختصاص الهيئة.
          </aside>

          <aside className="mt-7 rounded-xl border border-border-subtle bg-white p-4 text-sm leading-7">
            <p className="text-text-secondary">
              دليل ذو صلة: <a href="/blog/zakat-tax-financial-data-organization/" className="text-primary underline underline-offset-4 hover:text-secondary">تنظيم البيانات المالية للزكاة والضريبة</a>
            </p>
          </aside>

          <section aria-labelledby="related-services-heading" className="mt-8 border-t border-border-subtle pt-6">
            <h2 id="related-services-heading" className="mb-4 text-lg text-text-primary">
              خدمات مالية مرتبطة
            </h2>
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
