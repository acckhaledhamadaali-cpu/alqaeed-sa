import { useSEO } from '../../hooks/useSEO';
import SectionWrapper from '../../../components/SectionWrapper';
import Container from '../../../components/Container';
import { TYPOGRAPHY } from '../../lib/tokens';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = "966511294383";
const VAT_WHATSAPP_MESSAGE = "السلام عليكم، أرغب في خدمة إعداد أو مراجعة إقرار ضريبة القيمة المضافة. الفترة الضريبية: [الفترة]، ونوع النشاط: [النشاط].";
const ZAKAT_WHATSAPP_MESSAGE = "السلام عليكم، أرغب في خدمة إعداد أو مراجعة الإقرار الزكوي. الفترة المالية: [الفترة]، ونوع النشاط: [النشاط].";
const makeWhatsAppUrl = (message: string) => "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
const VAT_WHATSAPP_URL = makeWhatsAppUrl(VAT_WHATSAPP_MESSAGE);
const ZAKAT_WHATSAPP_URL = makeWhatsAppUrl(ZAKAT_WHATSAPP_MESSAGE);

export default function ZakatTaxPage() {
  const name = "إقرار ضريبة القيمة المضافة والإقرار الزكوي";
  const slug = "zakat-tax";
  const metaTitle = "إقرار ضريبة القيمة المضافة والإقرار الزكوي | القائد";
  const metaDesc = "خدمتان منفصلتان للمنشآت في السعودية: إعداد ومراجعة إقرار ضريبة القيمة المضافة أو الإقرار الزكوي، مع توضيح مستندات وخطوات كل خدمة.";
  const url = "https://alqaeed-sa.pages.dev/services/" + slug + "/";
  
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": url + "#webpage",
        "url": url,
        "name": metaTitle,
        "description": metaDesc,
        "primaryImageOfPage": {
          "@id": "https://alqaeed-sa.pages.dev/#logo"
        },
        "inLanguage": "ar-SA",
        "isPartOf": {
          "@id": "https://alqaeed-sa.pages.dev/#website"
        }
      },
      {
        "@type": "Service",
        "@id": url + "#vat-service",
        "name": "إعداد ومراجعة إقرار ضريبة القيمة المضافة",
        "description": "خدمة مستقلة لإعداد ومراجعة إقرار ضريبة القيمة المضافة للمنشآت المسجلة، وفق بيانات الفترة ومستنداتها.",
        "provider": {
          "@id": "https://alqaeed-sa.pages.dev/#organization"
        },
        "areaServed": "Saudi Arabia"
      },
      {
        "@type": "Service",
        "@id": url + "#zakat-service",
        "name": "إعداد ومراجعة الإقرار الزكوي",
        "description": "خدمة مستقلة لإعداد ومراجعة الإقرار الزكوي للمنشآت بحسب صفتها وسجلاتها ومستنداتها.",
        "provider": {
          "@id": "https://alqaeed-sa.pages.dev/#organization"
        },
        "areaServed": "Saudi Arabia"
      },
      {
        "@type": "BreadcrumbList",
        "@id": url + "#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "الرئيسية",
            "item": "https://alqaeed-sa.pages.dev/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": name,
            "item": url
          }
        ]
      }
    ]
  };

  useSEO({
    title: metaTitle,
    description: metaDesc,
    canonical: url,
    schema
  });

  const trackWhatsAppClick = (service: "vat" | "zakat") => {
    const linkUrl = service === "vat" ? VAT_WHATSAPP_URL : ZAKAT_WHATSAPP_URL;
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: 'service_cta_' + service + '_' + slug,
        link_url: linkUrl
      });
    }
  };

  return (
    <SectionWrapper id={"service-" + slug + "-section"} variant="white" spacing="default">
      <Container>
        <div className="max-w-3xl mx-auto py-4 md:py-8 text-right font-arabic">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="مسار التنقل" className="mb-4 text-xs text-text-muted">
            <a href="/" className="hover:text-primary transition-colors">الرئيسية - القائد للإدارة المالية</a>
            <span className="mx-2 text-border-subtle">/</span>
            <span className="text-text-secondary">{name}</span>
          </nav>

          <h1 className={`${TYPOGRAPHY.heading.h1} font-bold text-text-primary mb-6 leading-tight`}>
            {name}
          </h1>
          <div className="w-16 h-1 bg-primary mb-6 rounded-full"></div>

          <div className="mb-6 rounded-xl border border-border-subtle bg-surface-subtle/40 p-4 text-sm md:text-[15px] text-text-secondary leading-relaxed">
            <p>هذه الصفحة تجمع إقرارين مختلفين في النوع والمتطلبات: إقرار ضريبة القيمة المضافة، ثم الإقرار الزكوي. لكل إقرار قسم مستقل أدناه بمعلوماته ومستنداته وخطواته وروابطه الرسمية.</p>
            <nav aria-label="انتقل إلى نوع الإقرار" className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a href="#vat-return" className="rounded-lg border border-border-subtle bg-white p-3 font-bold text-primary hover:border-primary transition-colors">إقرار ضريبة القيمة المضافة ←</a>
              <a href="#zakat-return" className="rounded-lg border border-border-subtle bg-white p-3 font-bold text-primary hover:border-primary transition-colors">الإقرار الزكوي ←</a>
            </nav>
          </div>

          <section id="vat-return" aria-labelledby="vat-return-heading" className="mt-8 scroll-mt-24 rounded-2xl border border-border-subtle bg-white p-4 md:p-6 shadow-sm">
            <div className="text-sm md:text-[15px] text-text-secondary leading-loose space-y-4">
              <p className="text-xs font-bold uppercase tracking-wide text-primary">القسم الأول · ضريبة القيمة المضافة</p>
              <h2 id="vat-return-heading" className="text-xl md:text-2xl font-bold text-text-primary">إقرار ضريبة القيمة المضافة</h2>
              <p>هذا الإقرار يخص الأشخاص المسجلين في ضريبة القيمة المضافة. ويتضمن الإفصاح عن التعاملات الخاضعة للضريبة في المبيعات والمشتريات عن الفترة المعنية.</p>

              <h3 className="text-lg font-bold text-primary mt-6">ما الذي تتضمنه خدمتي في إقرار ضريبة القيمة المضافة؟</h3>
              <ul className="list-disc list-inside space-y-1 pr-4">
                <li>تنظيم إجماليات المبيعات والمشتريات للفترة ومراجعتها مقابل الفواتير والسجلات المتاحة.</li>
                <li>مطابقة البيانات المحاسبية مع مستندات الفترة وتوضيح الفروقات أو البيانات الناقصة.</li>
                <li>إعداد بيانات الإقرار أو مراجعته قبل اعتماد المنشأة للبيانات.</li>
                <li>رفع الإقرار عند طلبك، بعد اعتمادك للبيانات واستكمال الصلاحية أو التفويض اللازم.</li>
              </ul>

              <h3 className="text-lg font-bold text-primary mt-6">بيانات ومستندات إقرار ضريبة القيمة المضافة</h3>
              <p>للبدء، جهّز ملخص المبيعات والمشتريات للفترة. وقد تساعد المستندات الآتية بحسب معاملات منشأتك:</p>
              <ul className="list-disc list-inside space-y-1 pr-4">
                <li>الفواتير الضريبية الصادرة والواردة، وما يرتبط بها من إشعارات دائنة أو مدينة.</li>
                <li>تقرير النظام المحاسبي أو دفتر الأستاذ وبيانات إجمالي المبيعات والمشتريات.</li>
                <li>مستندات الاستيراد أو التصدير والعقود وكشوف الحساب عند ارتباطها بمعاملة تحتاج إلى توضيح.</li>
                <li>الإقرار السابق إذا كانت الخدمة تشمل مراجعة فترة سابقة أو مقارنة البيانات.</li>
              </ul>
              <p>هذه قائمة تجهيز أولية وليست متطلبًا موحدًا لكل منشأة. كما أن وجود فاتورة مشتريات لا يعني تلقائيًا أن ضريبتها قابلة للخصم؛ تُراجع أهلية كل معاملة ومستنداتها وفق القواعد المنطبقة.</p>

              <h3 className="text-lg font-bold text-primary mt-6">خطوات العمل على إقرار ضريبة القيمة المضافة</h3>
              <ol className="list-decimal list-inside space-y-1 pr-4">
                <li>تحديد الفترة المطلوبة والتأكد من حالة التسجيل ونوع الإقرار.</li>
                <li>مراجعة بيانات المبيعات والمشتريات والفواتير والتسويات ذات الصلة.</li>
                <li>مطابقة الإجماليات مع السجلات، وإرسال أي استفسار أو نقص لمراجعته معك.</li>
                <li>تجهيز الإقرار أو مراجعته؛ والرفع عند طلبك بعد اعتماد البيانات واستكمال التفويض اللازم.</li>
              </ol>

              <h3 className="text-lg font-bold text-primary mt-6">ما الذي تستلمه؟</h3>
              <ul className="list-disc list-inside space-y-1 pr-4">
                <li>بيانات الإقرار أو مسودته للمراجعة، وفق نطاق العمل المتفق عليه.</li>
                <li>ملاحظات واضحة على الفروقات أو المستندات التي تحتاج إلى استكمال.</li>
                <li>إشعار الاستلام أو مرجع التقديم إذا تم رفع الإقرار بطلبك.</li>
              </ul>

              <h3 className="text-lg font-bold text-primary mt-6">أسئلة شائعة عن إقرار ضريبة القيمة المضافة</h3>
              <h4 className="font-bold text-text-primary mt-3">هل كل فاتورة مشتريات تخفض الضريبة؟</h4>
              <p>لا. تُراجع المعاملة والفاتورة وشروط الخصم قبل إدراج الضريبة ضمن المدخلات القابلة للخصم.</p>
              <h4 className="font-bold text-text-primary mt-3">هل تضمن الخدمة قبول الإقرار أو نتيجة معينة؟</h4>
              <p>لا يمكن ضمان قرار الهيئة. دوري هو إعداد البيانات أو مراجعتها على أساس السجلات والمستندات التي توفرها المنشأة؛ والبت النهائي للهيئة.</p>

              <h3 className="text-lg font-bold text-primary mt-6">روابط رسمية تخص ضريبة القيمة المضافة</h3>
              <ul className="list-disc list-inside space-y-1 pr-4">
                <li><a className="text-primary underline" href="https://zatca.gov.sa/ar/eServices/Pages/eServices-009.aspx" target="_blank" rel="noopener noreferrer">تقديم إقرار ضريبة القيمة المضافة — ZATCA</a></li>
                <li><a className="text-primary underline" href="https://zatca.gov.sa/ar/HelpCenter/guidelines/Documents/Simplified_VAT_Filing_Guidelines.pdf" target="_blank" rel="noopener noreferrer">الدليل المبسط لرفع إقرار ضريبة القيمة المضافة</a></li>
                <li><a className="text-primary underline" href="https://zatca.gov.sa/ar/HelpCenter/guidelines/Documents/Guideline-for-Tax-Invoicing-and-Records-under-VAT-Provisions.pdf" target="_blank" rel="noopener noreferrer">دليل الفواتير الضريبية وحفظ السجلات</a></li>
              </ul>
            </div>

          <div className="mt-6 rounded-xl border border-green-200 bg-green-50/60 p-4 text-center">
            <p className="mb-3 text-sm text-text-secondary">للاستفسار عن إقرار ضريبة القيمة المضافة، أرسل الفترة الضريبية ونوع النشاط.</p>
            <a href={VAT_WHATSAPP_URL} onClick={() => trackWhatsAppClick("vat")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#20ba5a]">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              استفسر عن إقرار ضريبة القيمة المضافة عبر واتساب
            </a>
          </div>
          </section>

          <section id="zakat-return" aria-labelledby="zakat-return-heading" className="mt-8 scroll-mt-24 rounded-2xl border border-border-subtle bg-surface-subtle/30 p-4 md:p-6 shadow-sm">
            <div className="text-sm md:text-[15px] text-text-secondary leading-loose space-y-4">
              <p className="text-xs font-bold uppercase tracking-wide text-primary">القسم الثاني · الزكاة</p>
              <h2 id="zakat-return-heading" className="text-xl md:text-2xl font-bold text-text-primary">الإقرار الزكوي للمنشآت</h2>
              <p>الإقرار الزكوي إقرار مستقل عن إقرار ضريبة القيمة المضافة. يخص المكلفين المسجلين في الزكاة، ويُعد عن الفترة المالية ونوع الإقرار المحددين في بوابة الهيئة. لذلك أتعامل مع ملفه وبياناته المالية بصورة مستقلة.</p>

              <h3 className="text-lg font-bold text-primary mt-6">ما الذي تتضمنه خدمتي في الإقرار الزكوي؟</h3>
              <ul className="list-disc list-inside space-y-1 pr-4">
                <li>مراجعة البيانات المالية والسجلات التي تقدمها المنشأة للفترة المعنية.</li>
                <li>تنظيم المستندات المؤيدة للبنود المالية ذات الصلة، وطلب الإيضاح عند وجود نقص أو فرق.</li>
                <li>إعداد بيانات الإقرار أو مراجعته معك قبل اعتمادها.</li>
                <li>رفع الإقرار عند طلبك، بعد اعتماد البيانات واستكمال الإجراء أو التفويض المناسب.</li>
              </ul>

              <h3 className="text-lg font-bold text-primary mt-6">بيانات ومستندات الإقرار الزكوي</h3>
              <p>تختلف المستندات بحسب صفة المكلف ونوع الإقرار والفترة. وقد يبدأ التجهيز بما يتوفر من:</p>
              <ul className="list-disc list-inside space-y-1 pr-4">
                <li>بيانات المنشأة المسجلة ونوع الإقرار والفترة المالية المطلوب تقديمها.</li>
                <li>القوائم المالية والسجلات التجارية وميزان المراجعة أو التقارير المحاسبية ذات الصلة، بحسب ما ينطبق على المنشأة.</li>
                <li>مستندات مؤيدة للإيرادات والمصروفات والبنود محل المراجعة، مثل الفواتير أو العقود أو كشوف الحساب عند ارتباطها بها.</li>
                <li>نماذج أو مرفقات إضافية عند انطباقها، مثل متطلبات تسعير المعاملات لبعض المكلفين.</li>
              </ul>
              <p>هذه أمثلة للتجهيز وليست قائمة إلزامية موحدة للجميع. كما أن إرفاق القوائم المالية المدققة يتوقف على الفئة والالتزامات والاستثناءات المنطبقة؛ لذا يُتحقق من حالة المنشأة بدل إعطاء حكم عام.</p>

              <h3 className="text-lg font-bold text-primary mt-6">خطوات العمل على الإقرار الزكوي</h3>
              <ol className="list-decimal list-inside space-y-1 pr-4">
                <li>تحديد الفترة المالية ونوع الإقرار وصفة المكلف.</li>
                <li>مراجعة السجلات والبيانات المالية والمستندات المؤيدة المتاحة.</li>
                <li>إعداد بيانات الإقرار أو مراجعته وإيضاح النواقص أو البنود التي تحتاج إلى تأكيد.</li>
                <li>اعتمادك للبيانات قبل الرفع، إذا طلبت تقديم الإقرار واستُكملت الصلاحية اللازمة.</li>
              </ol>

              <h3 className="text-lg font-bold text-primary mt-6">ما الذي تستلمه؟</h3>
              <ul className="list-disc list-inside space-y-1 pr-4">
                <li>بيانات الإقرار أو مسودته وفق المستندات ونطاق العمل المتفق عليه.</li>
                <li>ملاحظات على البيانات أو المرفقات التي تحتاج إلى استكمال أو توضيح.</li>
                <li>إشعار الاستلام أو مرجع التقديم إذا تم رفع الإقرار بطلبك.</li>
              </ul>

              <h3 className="text-lg font-bold text-primary mt-6">أسئلة شائعة عن الإقرار الزكوي</h3>
              <h4 className="font-bold text-text-primary mt-3">هل الإقرار الزكوي هو نفسه إقرار ضريبة القيمة المضافة؟</h4>
              <p>لا. هما إقراران مختلفان؛ لكل واحد بياناته ومتطلباته وفترته، ويُطلب كل منهما بحسب حالة المنشأة والتزاماتها.</p>
              <h4 className="font-bold text-text-primary mt-3">هل كل منشأة مطالبة بالقوائم المدققة نفسها؟</h4>
              <p>لا يصح تعميم ذلك. تختلف متطلبات الإرفاق بحسب صفة المنشأة وما ينطبق عليها من أحكام واستثناءات؛ ويُراجع ذلك قبل تجهيز الملف.</p>
              <h4 className="font-bold text-text-primary mt-3">هل تضمن الخدمة قبول الإقرار أو قيمة زكاة محددة؟</h4>
              <p>لا. أُعدّ أو أراجع البيانات بناءً على السجلات والمستندات التي توفرها المنشأة، أما التحقق والقرار النهائي فمن اختصاص الهيئة.</p>

              <h3 className="text-lg font-bold text-primary mt-6">روابط رسمية تخص الإقرار الزكوي</h3>
              <ul className="list-disc list-inside space-y-1 pr-4">
                <li><a className="text-primary underline" href="https://zatca.gov.sa/ar/eServices/Pages/eServices-051.aspx" target="_blank" rel="noopener noreferrer">تقديم إقرار الزكاة للمنشآت — ZATCA</a></li>
                <li><a className="text-primary underline" href="https://zatca.gov.sa/ar/HelpCenter/guidelines/Documents/%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D9%86%D8%AF%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B2%D9%83%D9%88%D9%8A%D8%A9.pdf" target="_blank" rel="noopener noreferrer">دليل المستندات الزكوية من ZATCA</a></li>
              </ul>
            </div>

            <div className="mt-6 rounded-xl border border-green-200 bg-green-50/60 p-4 text-center">
              <p className="mb-3 text-sm text-text-secondary">للاستفسار عن الإقرار الزكوي، أرسل الفترة المالية ونوع النشاط.</p>
              <a href={ZAKAT_WHATSAPP_URL} onClick={() => trackWhatsAppClick("zakat")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#20ba5a]">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                استفسر عن الإقرار الزكوي عبر واتساب
              </a>
            </div>
          </section>

          {/* Related Article Guide Link */}
          <div className="mb-8 p-4 bg-primary/5 border border-primary/15 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs md:text-sm">
            <span className="text-text-secondary font-medium">
              💡 دليل تخصصي من المكتبة المالية: <a href="/blog/zakat-tax-financial-data-organization/" className="text-primary font-bold hover:underline">تنظيم البيانات المالية للزكاة والضريبة</a>
            </span>
            <a href="/blog/zakat-tax-financial-data-organization/" className="text-primary font-semibold hover:underline shrink-0">
              قراءة الدليل ←
            </a>
          </div>

          {/* Related Services Internal Linking */}
          <div className="mt-6 pt-6 border-t border-border-subtle">
            <h2 className="text-base md:text-lg font-bold text-text-primary mb-4 font-arabic">
              خدمات مالية مرتبطة قد تحتاجها منشأتك
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href="/services/bookkeeping/"
                className="p-3 bg-surface-subtle/50 hover:bg-surface-subtle border border-border-subtle rounded-lg text-xs md:text-sm font-medium text-text-primary hover:text-primary transition-all flex items-center justify-between"
              >
                <span>تنظيم الحسابات ومسك الدفاتر</span>
                <span className="text-secondary text-base">←</span>
              </a>
              <a
                href="/services/financial-statements/"
                className="p-3 bg-surface-subtle/50 hover:bg-surface-subtle border border-border-subtle rounded-lg text-xs md:text-sm font-medium text-text-primary hover:text-primary transition-all flex items-center justify-between"
              >
                <span>إعداد القوائم المالية المعتمدة</span>
                <span className="text-secondary text-base">←</span>
              </a>
              <a
                href="/services/virtual-cfo/"
                className="p-3 bg-surface-subtle/50 hover:bg-surface-subtle border border-border-subtle rounded-lg text-xs md:text-sm font-medium text-text-primary hover:text-primary transition-all flex items-center justify-between"
              >
                <span>المدير المالي عن بعد (Virtual CFO)</span>
                <span className="text-secondary text-base">←</span>
              </a>
            </div>
          </div>

        </div>
      </Container>
    </SectionWrapper>
  );
}
