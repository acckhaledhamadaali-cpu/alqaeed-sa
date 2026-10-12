import { useSEO } from '../../hooks/useSEO';
import SectionWrapper from '../../../components/SectionWrapper';
import Container from '../../../components/Container';
import { TYPOGRAPHY } from '../../lib/tokens';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '966511294383';
const WHATSAPP_MESSAGE = 'السلام عليكم، أحتاج استفسارًا عن إعداد إقرار الزكاة أو ضريبة القيمة المضافة لمنشأتي. ما المعلومات المطلوبة لتحديد الإقرار والفترة؟';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const VAT_SERVICE_URL = 'https://zatca.gov.sa/ar/eServices/Pages/eServices-009.aspx';
const VAT_GUIDE_URL = 'https://zatca.gov.sa/ar/HelpCenter/guidelines/Documents/Simplified_VAT_Filing_Guidelines.pdf';
const VAT_REGULATIONS_URL = 'https://zatca.gov.sa/ar/RulesRegulations/Taxes/Documents/Implmenting%20Regulations%20of%20the%20VAT%20Law.pdf';
const ZAKAT_SERVICE_URL = 'https://zatca.gov.sa/ar/eServices/Pages/eServices-051.aspx';
const ZAKAT_REGULATION_URL = 'https://zatca.gov.sa/ar/RulesRegulations/Taxes/Pages/ZakatRegulations.aspx';
const ZAKAT_FAQ_URL = "https://zatca.gov.sa/ar/HelpCenter/guidelines/Documents/FAQ's-For-ZAKAT-Regulations1445H.pdf";
const RETURNS_CALENDAR_URL = 'https://zatca.gov.sa/en/MediaCenter/Publications/Documents/Zakat%20Declaration%20and%20Tax%20Returns%20Calendar%20(EN).pdf';

function OfficialLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      className="inline-flex items-center gap-1 text-xs text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:text-secondary sm:text-sm"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}<span aria-hidden="true">←</span>
    </a>
  );
}

export default function ZakatTaxPage() {
  const name = 'الإقرار الزكوي وإقرار ضريبة القيمة المضافة';
  const slug = 'zakat-tax';
  const metaTitle = 'إقرار الزكاة وضريبة القيمة المضافة | القائد';
  const metaDesc = 'إعداد ومراجعة الإقرار الزكوي وإقرار ضريبة القيمة المضافة للمنشآت السعودية عن بُعد. تعرّف على البيانات المطلوبة ودورية الإقرار والمستندات بحسب حالة المكلف.';
  const url = `https://alqaeed-sa.pages.dev/services/${slug}/`;

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: metaTitle,
        description: metaDesc,
        primaryImageOfPage: { '@id': 'https://alqaeed-sa.pages.dev/#logo' },
        inLanguage: 'ar-SA',
        isPartOf: { '@id': 'https://alqaeed-sa.pages.dev/#website' },
      },
      {
        '@type': 'Service',
        '@id': `${url}#vat-service`,
        name: 'إعداد ومراجعة إقرار ضريبة القيمة المضافة',
        description: 'إعداد أو مراجعة بيانات إقرار ضريبة القيمة المضافة للمنشآت المسجلة، بحسب مستندات الفترة وقواعد الهيئة.',
        provider: { '@id': 'https://alqaeed-sa.pages.dev/#organization' },
        areaServed: 'Saudi Arabia',
      },
      {
        '@type': 'Service',
        '@id': `${url}#zakat-service`,
        name: 'إعداد ومراجعة الإقرار الزكوي',
        description: 'إعداد أو مراجعة بيانات الإقرار الزكوي بحسب صفة المكلف ونوع الإقرار والفترة والمستندات ذات الصلة.',
        provider: { '@id': 'https://alqaeed-sa.pages.dev/#organization' },
        areaServed: 'Saudi Arabia',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: 'https://alqaeed-sa.pages.dev/' },
          { '@type': 'ListItem', position: 2, name, item: url },
        ],
      },
    ],
  };

  useSEO({ title: metaTitle, description: metaDesc, canonical: url, schema });

  return (
    <SectionWrapper id={`service-${slug}-section`} variant="white" spacing="default">
      <Container>
        <div className="mx-auto max-w-5xl py-3 text-right font-arabic md:py-6">
          <nav aria-label="مسار التنقل" className="mb-4 text-xs text-text-muted">
            <a href="/" className="transition-colors hover:text-primary">الرئيسية - القائد للإدارة المالية</a>
            <span className="mx-2 text-border-subtle">/</span>
            <span className="text-text-secondary">{name}</span>
          </nav>

          <header className="grid gap-4 rounded-2xl border border-border-subtle bg-surface-subtle/40 p-4 md:grid-cols-[1fr_auto] md:items-center md:gap-7 md:p-6">
            <div>
              <p className="mb-2 text-xs text-secondary sm:text-sm">إعداد ومراجعة للمنشآت في المملكة</p>
              <h1 className={`${TYPOGRAPHY.heading.h1} leading-tight text-text-primary`}>
                الإقرار الزكوي وإقرار ضريبة القيمة المضافة
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-text-secondary md:text-[15px]">
                لكل إقرار بياناته ومتطلباته. أراجع سجلات منشأتك وأجهّز مسودة الإقرار المناسب للفترة، وأوضح لك ما يحتاج إلى استكمال قبل اعتمادك.
              </p>
              <p className="mt-2 text-xs leading-6 text-text-muted">
                عمل عن بُعد في جميع مناطق المملكة · خالد القائد، محاسب مالي
              </p>
            </div>
            <div className="md:min-w-56">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-[#25D366] bg-[#25D366] px-4 py-2.5 text-xs text-white transition-colors hover:bg-[#20ba5a] sm:text-sm"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                اسأل عن الإقرار المناسب عبر واتساب
              </a>
            </div>
          </header>

          <nav aria-label="انتقل إلى تفاصيل الإقرار" className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm">
            <span className="text-text-muted">تفاصيل الخدمة:</span>
            <a href="#vat-return" className="text-primary underline underline-offset-4 hover:text-secondary">ضريبة القيمة المضافة</a>
            <a href="#zakat-return" className="text-primary underline underline-offset-4 hover:text-secondary">الإقرار الزكوي</a>
          </nav>

          <section id="vat-return" aria-labelledby="vat-return-heading" className="mt-6 scroll-mt-24 overflow-hidden rounded-2xl border border-border-subtle bg-white">
            <header className="border-b border-border-subtle px-4 py-4 md:px-6 md:py-5">
              <p className="mb-1 text-xs text-secondary">أولًا · ضريبة القيمة المضافة</p>
              <h2 id="vat-return-heading" className="border-r-2 border-primary pr-3 text-lg text-text-primary md:text-xl">
                إقرار ضريبة القيمة المضافة
              </h2>
              <p className="mt-2 max-w-3xl text-sm leading-7 text-text-secondary">
                يقدمه الأشخاص المسجلون عن الفترة الضريبية المحددة، ويعرض التعاملات ذات الصلة بالمبيعات والمشتريات. تتم مراجعة ضريبة المبيعات والمدخلات التي قد تكون مؤهلة للخصم وفق الشروط النظامية.
              </p>
              <p className="mt-1 text-xs leading-6 text-text-muted">
                تكون الفترة شهرية أو ربع سنوية بحسب الحالة؛ ويظهر تاريخ الاستحقاق المعتمد في حساب المكلف وتقويم الهيئة.
              </p>
            </header>
            <div className="space-y-4 p-4 md:p-6">
              <div>
                <h3 className="mb-1 text-base text-text-primary">ما الذي تتم مراجعته؟</h3>
                <ul className="divide-y divide-border-subtle text-sm leading-7 text-text-secondary">
                  <li className="grid gap-1 py-2 sm:grid-cols-[145px_1fr] sm:gap-4"><strong className="text-primary">المبيعات</strong><span>مطابقة إجماليات الفترة بسجل الفواتير ومراجعة التواريخ وتصنيف التوريدات.</span></li>
                  <li className="grid gap-1 py-2 sm:grid-cols-[145px_1fr] sm:gap-4"><strong className="text-primary">المشتريات</strong><span>مقارنة المبالغ بالفواتير المؤيدة وفحص ارتباطها بالنشاط وأهلية ضريبة المدخلات للخصم.</span></li>
                  <li className="grid gap-1 py-2 sm:grid-cols-[145px_1fr] sm:gap-4"><strong className="text-primary">التسويات</strong><span>مراجعة الإشعارات الدائنة أو المدينة ومستندات الاستيراد عند انطباقها.</span></li>
                </ul>
              </div>

              <div className="grid gap-3 border-t border-border-subtle pt-3 md:grid-cols-2">
                <div>
                  <h3 className="mb-1 text-base text-text-primary">ما البيانات اللازمة للبدء؟</h3>
                  <p className="text-sm leading-7 text-text-secondary">
                    تقرير المبيعات والمشتريات للفترة، والفواتير والإشعارات المرتبطة بها، ومستندات الاستيراد إن وجدت. أرفق الإقرار السابق إذا كان المطلوب مراجعة تصحيح أو رصيد مرحّل.
                  </p>
                </div>
                <aside className="border-r-2 border-secondary pr-3 text-sm leading-7 text-text-secondary">
                  <strong className="text-text-primary">تنبيه بشأن ضريبة المدخلات:</strong> وجود فاتورة لا يجعل الضريبة قابلة للخصم تلقائيًا؛ يلزم ارتباط الشراء بالنشاط واستيفاء الشروط والمستندات.
                </aside>
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-2 border-t border-border-subtle pt-3 text-xs sm:text-sm">
                <OfficialLink href={VAT_SERVICE_URL}>خدمة الإقرار من ZATCA</OfficialLink>
                <OfficialLink href={VAT_GUIDE_URL}>دليل رفع الإقرار</OfficialLink>
                <OfficialLink href={VAT_REGULATIONS_URL}>اللائحة التنفيذية لضريبة القيمة المضافة</OfficialLink>
              </div>
            </div>
          </section>

          <section id="zakat-return" aria-labelledby="zakat-return-heading" className="mt-5 scroll-mt-24 overflow-hidden rounded-2xl border border-border-subtle bg-white">
            <header className="border-b border-border-subtle px-4 py-4 md:px-6 md:py-5">
              <p className="mb-1 text-xs text-secondary">ثانيًا · الزكاة</p>
              <h2 id="zakat-return-heading" className="border-r-2 border-primary pr-3 text-lg text-text-primary md:text-xl">
                الإقرار الزكوي للمنشآت
              </h2>
              <p className="mt-2 max-w-3xl text-sm leading-7 text-text-secondary">
                الإقرار الزكوي مستقل عن إقرار ضريبة القيمة المضافة. تحدد صفة المكلف ونوع الإقرار والفترة المالية نطاق العمل؛ ولا يُستنتج الوعاء الزكوي من صافي الربح وحده.
              </p>
              <p className="mt-1 text-xs leading-6 text-text-muted">
                تقويم ZATCA يحدد مهلة إقرارات الزكاة خلال 120 يومًا من نهاية السنة المالية؛ راجع الموعد الخاص بمنشأتك في البوابة.
              </p>
            </header>
            <div className="space-y-4 p-4 md:p-6">
              <div>
                <h3 className="mb-1 text-base text-text-primary">ما الذي تتم مراجعته؟</h3>
                <ul className="divide-y divide-border-subtle text-sm leading-7 text-text-secondary">
                  <li className="grid gap-1 py-2 sm:grid-cols-[145px_1fr] sm:gap-4"><strong className="text-primary">بيانات المكلف</strong><span>صفة المنشأة ونوع الإقرار والفترة الظاهرة في حسابها لدى الهيئة.</span></li>
                  <li className="grid gap-1 py-2 sm:grid-cols-[145px_1fr] sm:gap-4"><strong className="text-primary">البيانات المالية</strong><span>مطابقة الأرقام بالسجلات والقوائم وميزان المراجعة وربط البنود بمستنداتها.</span></li>
                  <li className="grid gap-1 py-2 sm:grid-cols-[145px_1fr] sm:gap-4"><strong className="text-primary">متطلبات إضافية</strong><span>النماذج أو الإفصاحات التي يطلبها نوع الإقرار، ومنها تسعير المعاملات إذا انطبق.</span></li>
                </ul>
              </div>

              <div className="grid gap-3 border-t border-border-subtle pt-3 md:grid-cols-2">
                <div>
                  <h3 className="mb-1 text-base text-text-primary">ما البيانات اللازمة للبدء؟</h3>
                  <p className="text-sm leading-7 text-text-secondary">
                    بيانات التسجيل والفترة، والقوائم المالية وميزان المراجعة والسجل العام أو المتاح من السجلات، ومستندات البنود محل المراجعة. تُطلب النماذج الإضافية بحسب نوع الإقرار.
                  </p>
                </div>
                <aside className="border-r-2 border-secondary pr-3 text-sm leading-7 text-text-secondary">
                  <strong className="text-text-primary">هل القوائم المدققة مطلوبة دائمًا؟</strong> لا يصح تعميم ذلك على كل المنشآت؛ تختلف المتطلبات بحسب صفة المكلف ونوع الإقرار واللائحة المنطبقة.
                </aside>
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-2 border-t border-border-subtle pt-3 text-xs sm:text-sm">
                <OfficialLink href={ZAKAT_SERVICE_URL}>خدمة إقرار المنشآت من ZATCA</OfficialLink>
                <OfficialLink href={ZAKAT_REGULATION_URL}>اللائحة التنفيذية لجباية الزكاة 1445هـ</OfficialLink>
                <OfficialLink href={ZAKAT_FAQ_URL}>الأسئلة الشائعة عن اللائحة</OfficialLink>
                <OfficialLink href={RETURNS_CALENDAR_URL}>تقويم المواعيد الرسمية</OfficialLink>
              </div>
            </div>
          </section>

          <section aria-labelledby="service-scope-heading" className="mt-5 border-t border-border-subtle pt-4">
            <h2 id="service-scope-heading" className="text-base text-text-primary">كيف تسير الخدمة؟</h2>
            <p className="mt-1 text-sm leading-7 text-text-secondary">
              نحدد نوع الإقرار والفترة أولًا، ثم أراجع السجلات وأجهز المسودة والملاحظات لتراجعها وتعتمدها. لا يتم التقديم نيابة عنك إلا بعد موافقتك واستكمال التفويض الرسمي. الخدمة إعداد ومراجعة وليست تدقيقًا للقوائم المالية أو اعتمادًا لها، وتبقى قرارات الربط لدى الهيئة.
            </p>
          </section>

          <p className="mt-4 border-r-2 border-primary px-3 text-sm leading-7 text-text-secondary">
            للتفاصيل عن المستندات والمواعيد والأسئلة الشائعة، اقرأ <a href="/blog/zakat-vat-return-guide-saudi-businesses/" className="text-primary underline underline-offset-4 hover:text-secondary">دليل إقرار الزكاة وضريبة القيمة المضافة للمنشآت السعودية</a>. وإذا كانت السجلات بحاجة إلى ترتيب، تعرّف على <a href="/services/bookkeeping/" className="text-primary underline underline-offset-4 hover:text-secondary">تنظيم الحسابات ومسك الدفاتر</a>.
          </p>
        </div>
      </Container>
    </SectionWrapper>
  );
}
