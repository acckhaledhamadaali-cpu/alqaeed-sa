import { useSEO } from '../../hooks/useSEO';
import SectionWrapper from '../../../components/SectionWrapper';
import Container from '../../../components/Container';
import { TYPOGRAPHY } from '../../lib/tokens';
import {
  ArrowLeft,
  BookOpen,
  Building2,
  Calculator,
  CheckCircle2,
  FileCheck2,
  MessageCircle,
  ShieldCheck,
} from 'lucide-react';

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
        <div className="mx-auto max-w-5xl py-4 text-right font-arabic md:py-8">
          <header className="relative isolate overflow-hidden rounded-[2rem] bg-gradient-to-bl from-slate-950 via-slate-900 to-slate-800 px-5 py-6 text-white shadow-xl shadow-slate-900/10 md:px-9 md:py-9">
            <div aria-hidden="true" className="absolute -left-16 -top-20 h-56 w-56 rounded-full bg-emerald-400/15 blur-3xl" />
            <div aria-hidden="true" className="absolute -bottom-24 right-1/3 h-48 w-48 rounded-full bg-amber-300/10 blur-3xl" />
            <div className="relative">
              <nav aria-label="مسار التنقل" className="mb-6 flex flex-wrap items-center gap-2 text-xs text-slate-300">
                <a href="/" className="transition-colors hover:text-white">الرئيسية</a>
                <span aria-hidden="true" className="text-slate-500">/</span>
                <span className="text-slate-200">{name}</span>
              </nav>

              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3 py-1.5 text-xs text-emerald-100">
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-emerald-400" />
                مساران مستقلان لخدمة المنشآت
              </div>
              <h1 className={`${TYPOGRAPHY.heading.h1} mt-4 max-w-3xl leading-tight text-white`}>
                {name}
              </h1>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-200 md:text-base">
                اختر الإقرار الذي تحتاجه. لكل خدمة نطاق ومستندات وخطوات مستقلة، ويمكنك الاستفسار مباشرة قبل تجهيز ملفك.
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                خالد القائد | محاسب مالي · خدمة عن بُعد للمنشآت الصغيرة والمتوسطة في جميع مناطق المملكة
              </p>

              <div className="mt-6 grid grid-cols-1 gap-3 sm:flex sm:flex-wrap">
                <a
                  href={VAT_WHATSAPP_URL}
                  onClick={() => trackWhatsAppClick('vat')}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="استفسر عبر واتساب عن إقرار ضريبة القيمة المضافة"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-950/15 transition hover:-translate-y-0.5 hover:bg-[#20ba5a] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  استفسر عن إقرار الضريبة
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={ZAKAT_WHATSAPP_URL}
                  onClick={() => trackWhatsAppClick('zakat')}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="استفسر عبر واتساب عن الإقرار الزكوي"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  استفسر عن الإقرار الزكوي
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
              <p className="mt-4 text-xs leading-6 text-slate-400">
                لا يتم رفع الإقرار إلا بعد مراجعة البيانات واعتمادك واستكمال الصلاحية أو التفويض اللازم.
              </p>
            </div>
          </header>

          <nav aria-label="انتقل إلى تفاصيل الإقرار" className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <a
              href="#vat-return"
              className="group relative overflow-hidden rounded-2xl border border-emerald-200 bg-gradient-to-br from-white to-emerald-50/70 p-4 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-900/5 focus:outline-none focus:ring-2 focus:ring-emerald-500 md:p-5"
            >
              <span className="absolute left-4 top-3 text-3xl font-bold text-emerald-900/10" aria-hidden="true">01</span>
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800 ring-1 ring-emerald-200">
                  <Calculator className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm text-emerald-800">ضريبة القيمة المضافة</span>
                  <span className="mt-1 block text-xs leading-6 text-slate-600">اقرأ النطاق والمستندات والخطوات الخاصة بالإقرار</span>
                </span>
                <ArrowLeft className="h-5 w-5 shrink-0 text-emerald-700 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
              </div>
            </a>
            <a
              href="#zakat-return"
              className="group relative overflow-hidden rounded-2xl border border-amber-200 bg-gradient-to-br from-white to-amber-50/80 p-4 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg hover:shadow-amber-900/5 focus:outline-none focus:ring-2 focus:ring-amber-500 md:p-5"
            >
              <span className="absolute left-4 top-3 text-3xl font-bold text-amber-900/10" aria-hidden="true">02</span>
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-900 ring-1 ring-amber-200">
                  <FileCheck2 className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm text-amber-900">الإقرار الزكوي</span>
                  <span className="mt-1 block text-xs leading-6 text-slate-600">اقرأ متطلبات الزكاة ومرفقاتها بصورة مستقلة</span>
                </span>
                <ArrowLeft className="h-5 w-5 shrink-0 text-amber-800 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
              </div>
            </a>
          </nav>

          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs text-slate-700 shadow-sm">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" aria-hidden="true" />
              إقراران منفصلان بمتطلبات مختلفة
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs text-slate-700 shadow-sm">
              <ShieldCheck className="h-5 w-5 shrink-0 text-emerald-600" aria-hidden="true" />
              اعتمادك يسبق رفع الإقرار
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs text-slate-700 shadow-sm">
              <Building2 className="h-5 w-5 shrink-0 text-emerald-600" aria-hidden="true" />
              خدمة عن بُعد للمنشآت في المملكة
            </div>
          </div>

          <section id="vat-return" aria-labelledby="vat-return-heading" className="mt-10 scroll-mt-24 overflow-hidden rounded-[2rem] border border-emerald-200 bg-white shadow-lg shadow-emerald-950/5">
            <div className="relative overflow-hidden border-b border-emerald-100 bg-gradient-to-l from-emerald-50 via-white to-emerald-50/40 px-5 py-6 md:px-8 md:py-7">
              <div aria-hidden="true" className="absolute -left-10 -top-12 h-36 w-36 rounded-full bg-emerald-300/20 blur-2xl" />
              <div className="relative flex items-center gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-md shadow-emerald-900/15">
                  <Calculator className="h-7 w-7" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs text-emerald-800">المسار 01 · ضريبة القيمة المضافة</p>
                  <h2 id="vat-return-heading" className="mt-1 text-xl leading-tight text-slate-950 md:text-2xl">إقرار ضريبة القيمة المضافة</h2>
                  <p className="mt-2 text-xs leading-6 text-slate-600">للأشخاص المسجلين في ضريبة القيمة المضافة عن الفترة المعنية.</p>
                </div>
              </div>
            </div>
            <div className="p-5 md:p-8">
              <div className="space-y-4 text-sm leading-8 text-text-secondary md:text-[15px]">
                <p>هذا الإقرار يخص الأشخاص المسجلين في ضريبة القيمة المضافة. ويتضمن الإفصاح عن التعاملات الخاضعة للضريبة في المبيعات والمشتريات عن الفترة المعنية.</p>

                <h3 className="mt-7 border-r-4 border-emerald-300 pr-3 text-lg text-primary">ما الذي تتضمنه خدمتي في إقرار ضريبة القيمة المضافة؟</h3>
                <ul className="list-disc space-y-1 pr-6">
                  <li>تنظيم إجماليات المبيعات والمشتريات للفترة ومراجعتها مقابل الفواتير والسجلات المتاحة.</li>
                  <li>مطابقة البيانات المحاسبية مع مستندات الفترة وتوضيح الفروقات أو البيانات الناقصة.</li>
                  <li>إعداد بيانات الإقرار أو مراجعته قبل اعتماد المنشأة للبيانات.</li>
                  <li>رفع الإقرار عند طلبك، بعد اعتمادك للبيانات واستكمال الصلاحية أو التفويض اللازم.</li>
                </ul>

                <h3 className="mt-7 border-r-4 border-emerald-300 pr-3 text-lg text-primary">بيانات ومستندات إقرار ضريبة القيمة المضافة</h3>
                <p>للبدء، جهّز ملخص المبيعات والمشتريات للفترة. وقد تساعد المستندات الآتية بحسب معاملات منشأتك:</p>
                <ul className="list-disc space-y-1 pr-6">
                  <li>الفواتير الضريبية الصادرة والواردة، وما يرتبط بها من إشعارات دائنة أو مدينة.</li>
                  <li>تقرير النظام المحاسبي أو دفتر الأستاذ وبيانات إجمالي المبيعات والمشتريات.</li>
                  <li>مستندات الاستيراد أو التصدير والعقود وكشوف الحساب عند ارتباطها بمعاملة تحتاج إلى توضيح.</li>
                  <li>الإقرار السابق إذا كانت الخدمة تشمل مراجعة فترة سابقة أو مقارنة البيانات.</li>
                </ul>
                <p className="rounded-xl border border-emerald-100 bg-emerald-50/60 px-4 py-3">هذه قائمة تجهيز أولية وليست متطلبًا موحدًا لكل منشأة. كما أن وجود فاتورة مشتريات لا يعني تلقائيًا أن ضريبتها قابلة للخصم؛ تُراجع أهلية كل معاملة ومستنداتها وفق القواعد المنطبقة.</p>

                <h3 className="mt-7 border-r-4 border-emerald-300 pr-3 text-lg text-primary">خطوات العمل على إقرار ضريبة القيمة المضافة</h3>
                <ol className="list-decimal space-y-1 pr-6">
                  <li>تحديد الفترة المطلوبة والتأكد من حالة التسجيل ونوع الإقرار.</li>
                  <li>مراجعة بيانات المبيعات والمشتريات والفواتير والتسويات ذات الصلة.</li>
                  <li>مطابقة الإجماليات مع السجلات، وإرسال أي استفسار أو نقص لمراجعته معك.</li>
                  <li>تجهيز الإقرار أو مراجعته؛ والرفع عند طلبك بعد اعتماد البيانات واستكمال التفويض اللازم.</li>
                </ol>

                <h3 className="mt-7 border-r-4 border-emerald-300 pr-3 text-lg text-primary">ما الذي تستلمه؟</h3>
                <ul className="list-disc space-y-1 pr-6">
                  <li>بيانات الإقرار أو مسودته للمراجعة، وفق نطاق العمل المتفق عليه.</li>
                  <li>ملاحظات واضحة على الفروقات أو المستندات التي تحتاج إلى استكمال.</li>
                  <li>إشعار الاستلام أو مرجع التقديم إذا تم رفع الإقرار بطلبك.</li>
                </ul>

                <h3 className="mt-7 border-r-4 border-emerald-300 pr-3 text-lg text-primary">أسئلة شائعة عن إقرار ضريبة القيمة المضافة</h3>
                <h4 className="mt-3 text-text-primary">هل كل فاتورة مشتريات تخفض الضريبة؟</h4>
                <p>لا. تُراجع المعاملة والفاتورة وشروط الخصم قبل إدراج الضريبة ضمن المدخلات القابلة للخصم.</p>
                <h4 className="mt-3 text-text-primary">هل تضمن الخدمة قبول الإقرار أو نتيجة معينة؟</h4>
                <p>لا يمكن ضمان قرار الهيئة. دوري هو إعداد البيانات أو مراجعتها على أساس السجلات والمستندات التي توفرها المنشأة؛ والبت النهائي للهيئة.</p>

                <h3 className="mt-7 border-r-4 border-emerald-300 pr-3 text-lg text-primary">روابط رسمية تخص ضريبة القيمة المضافة</h3>
                <ul className="list-disc space-y-1 pr-6">
                  <li><a className="text-primary underline decoration-emerald-300 underline-offset-4" href="https://zatca.gov.sa/ar/eServices/Pages/eServices-009.aspx" target="_blank" rel="noopener noreferrer">تقديم إقرار ضريبة القيمة المضافة — ZATCA</a></li>
                  <li><a className="text-primary underline decoration-emerald-300 underline-offset-4" href="https://zatca.gov.sa/ar/HelpCenter/guidelines/Documents/Simplified_VAT_Filing_Guidelines.pdf" target="_blank" rel="noopener noreferrer">الدليل المبسط لرفع إقرار ضريبة القيمة المضافة</a></li>
                  <li><a className="text-primary underline decoration-emerald-300 underline-offset-4" href="https://zatca.gov.sa/ar/HelpCenter/guidelines/Documents/Guideline-for-Tax-Invoicing-and-Records-under-VAT-Provisions.pdf" target="_blank" rel="noopener noreferrer">دليل الفواتير الضريبية وحفظ السجلات</a></li>
                </ul>
              </div>

              <div className="mt-7 rounded-2xl border border-emerald-200 bg-gradient-to-l from-emerald-50 to-white p-5 text-center md:p-6">
                <p className="mb-4 text-sm leading-7 text-slate-700">للاستفسار عن إقرار ضريبة القيمة المضافة، يمكنك ذكر الفترة الضريبية ونوع النشاط في رسالتك.</p>
                <a href={VAT_WHATSAPP_URL} onClick={() => trackWhatsAppClick('vat')} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm text-white shadow-md shadow-emerald-900/10 transition hover:-translate-y-0.5 hover:bg-[#20ba5a] focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  استفسر عن إقرار ضريبة القيمة المضافة عبر واتساب
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </section>

          <section id="zakat-return" aria-labelledby="zakat-return-heading" className="mt-8 scroll-mt-24 overflow-hidden rounded-[2rem] border border-amber-200 bg-white shadow-lg shadow-amber-950/5">
            <div className="relative overflow-hidden border-b border-amber-100 bg-gradient-to-l from-amber-50 via-white to-amber-50/50 px-5 py-6 md:px-8 md:py-7">
              <div aria-hidden="true" className="absolute -left-10 -top-12 h-36 w-36 rounded-full bg-amber-300/20 blur-2xl" />
              <div className="relative flex items-center gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-500 text-white shadow-md shadow-amber-900/15">
                  <FileCheck2 className="h-7 w-7" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs text-amber-900">المسار 02 · الزكاة</p>
                  <h2 id="zakat-return-heading" className="mt-1 text-xl leading-tight text-slate-950 md:text-2xl">الإقرار الزكوي للمنشآت</h2>
                  <p className="mt-2 text-xs leading-6 text-slate-600">إقرار مستقل يُراجع بحسب صفة المكلف والفترة المالية.</p>
                </div>
              </div>
            </div>
            <div className="p-5 md:p-8">
              <div className="space-y-4 text-sm leading-8 text-text-secondary md:text-[15px]">
                <p>الإقرار الزكوي إقرار مستقل عن إقرار ضريبة القيمة المضافة. يخص المكلفين المسجلين في الزكاة، ويُعد عن الفترة المالية ونوع الإقرار المحددين في بوابة الهيئة. لذلك أتعامل مع ملفه وبياناته المالية بصورة مستقلة.</p>

                <h3 className="mt-7 border-r-4 border-amber-300 pr-3 text-lg text-primary">ما الذي تتضمنه خدمتي في الإقرار الزكوي؟</h3>
                <ul className="list-disc space-y-1 pr-6">
                  <li>مراجعة البيانات المالية والسجلات التي تقدمها المنشأة للفترة المعنية.</li>
                  <li>تنظيم المستندات المؤيدة للبنود المالية ذات الصلة، وطلب الإيضاح عند وجود نقص أو فرق.</li>
                  <li>إعداد بيانات الإقرار أو مراجعته معك قبل اعتمادها.</li>
                  <li>رفع الإقرار عند طلبك، بعد اعتماد البيانات واستكمال الإجراء أو التفويض المناسب.</li>
                </ul>

                <h3 className="mt-7 border-r-4 border-amber-300 pr-3 text-lg text-primary">بيانات ومستندات الإقرار الزكوي</h3>
                <p>تختلف المستندات بحسب صفة المكلف ونوع الإقرار والفترة. وقد يبدأ التجهيز بما يتوفر من:</p>
                <ul className="list-disc space-y-1 pr-6">
                  <li>بيانات المنشأة المسجلة ونوع الإقرار والفترة المالية المطلوب تقديمها.</li>
                  <li>القوائم المالية والسجلات التجارية وميزان المراجعة أو التقارير المحاسبية ذات الصلة، بحسب ما ينطبق على المنشأة.</li>
                  <li>مستندات مؤيدة للإيرادات والمصروفات والبنود محل المراجعة، مثل الفواتير أو العقود أو كشوف الحساب عند ارتباطها بها.</li>
                  <li>نماذج أو مرفقات إضافية عند انطباقها، مثل متطلبات تسعير المعاملات لبعض المكلفين.</li>
                </ul>
                <p className="rounded-xl border border-amber-200 bg-amber-50/60 px-4 py-3">بحسب دليل ZATCA، يُطلب من المكلفين الملزمين بمسك الدفاتر التجارية إرفاق القوائم المالية المدققة والمعتمدة من محاسب قانوني مرخص، مع مراعاة الاستثناءات النظامية. يُتحقق من انطباق المتطلب على حالة المنشأة قبل تجهيز الملف.</p>
                <p className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">إعداد بيانات الإقرار لا يعني تدقيق القوائم المالية أو اعتمادها؛ فذلك يُحدد بحسب المتطلب النظامي والجهة المهنية المخولة.</p>

                <h3 className="mt-7 border-r-4 border-amber-300 pr-3 text-lg text-primary">خطوات العمل على الإقرار الزكوي</h3>
                <ol className="list-decimal space-y-1 pr-6">
                  <li>تحديد الفترة المالية ونوع الإقرار وصفة المكلف.</li>
                  <li>مراجعة السجلات والبيانات المالية والمستندات المؤيدة المتاحة.</li>
                  <li>إعداد بيانات الإقرار أو مراجعته وإيضاح النواقص أو البنود التي تحتاج إلى تأكيد.</li>
                  <li>اعتمادك للبيانات قبل الرفع، إذا طلبت تقديم الإقرار واستُكملت الصلاحية اللازمة.</li>
                </ol>

                <h3 className="mt-7 border-r-4 border-amber-300 pr-3 text-lg text-primary">ما الذي تستلمه؟</h3>
                <ul className="list-disc space-y-1 pr-6">
                  <li>بيانات الإقرار أو مسودته وفق المستندات ونطاق العمل المتفق عليه.</li>
                  <li>ملاحظات على البيانات أو المرفقات التي تحتاج إلى استكمال أو توضيح.</li>
                  <li>إشعار الاستلام أو مرجع التقديم إذا تم رفع الإقرار بطلبك.</li>
                </ul>

                <h3 className="mt-7 border-r-4 border-amber-300 pr-3 text-lg text-primary">أسئلة شائعة عن الإقرار الزكوي</h3>
                <h4 className="mt-3 text-text-primary">هل الإقرار الزكوي هو نفسه إقرار ضريبة القيمة المضافة؟</h4>
                <p>لا. هما إقراران مختلفان؛ لكل واحد بياناته ومتطلباته وفترته، ويُطلب كل منهما بحسب حالة المنشأة والتزاماتها.</p>
                <h4 className="mt-3 text-text-primary">هل كل منشأة مطالبة بالقوائم المدققة نفسها؟</h4>
                <p>لا يصح تعميم ذلك. يذكر دليل الهيئة متطلب القوائم المدققة للمكلفين الملزمين بمسك الدفاتر التجارية، مع استثناءات نظامية؛ ويُراجع انطباقه على حالة المنشأة قبل تجهيز المرفقات.</p>
                <h4 className="mt-3 text-text-primary">هل تضمن الخدمة قبول الإقرار أو قيمة زكاة محددة؟</h4>
                <p>لا. أُعدّ أو أراجع البيانات بناءً على السجلات والمستندات التي توفرها المنشأة، أما التحقق والقرار النهائي فمن اختصاص الهيئة.</p>

                <h3 className="mt-7 border-r-4 border-amber-300 pr-3 text-lg text-primary">روابط رسمية تخص الإقرار الزكوي</h3>
                <ul className="list-disc space-y-1 pr-6">
                  <li><a className="text-primary underline decoration-amber-400 underline-offset-4" href="https://zatca.gov.sa/ar/eServices/Pages/eServices-051.aspx" target="_blank" rel="noopener noreferrer">تقديم إقرار الزكاة للمنشآت — ZATCA</a></li>
                  <li><a className="text-primary underline decoration-amber-400 underline-offset-4" href="https://zatca.gov.sa/ar/HelpCenter/guidelines/Documents/%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D9%86%D8%AF%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B2%D9%83%D9%88%D9%8A%D8%A9.pdf" target="_blank" rel="noopener noreferrer">دليل المستندات الزكوية من ZATCA</a></li>
                </ul>
              </div>

              <div className="mt-7 rounded-2xl border border-amber-200 bg-gradient-to-l from-amber-50 to-white p-5 text-center md:p-6">
                <p className="mb-4 text-sm leading-7 text-slate-700">للاستفسار عن الإقرار الزكوي، يمكنك ذكر الفترة المالية ونوع النشاط في رسالتك.</p>
                <a href={ZAKAT_WHATSAPP_URL} onClick={() => trackWhatsAppClick('zakat')} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm text-white shadow-md shadow-amber-900/10 transition hover:-translate-y-0.5 hover:bg-[#20ba5a] focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  استفسر عن الإقرار الزكوي عبر واتساب
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </section>

          <div className="mb-8 mt-8 flex flex-col items-start justify-between gap-3 rounded-2xl border border-slate-200 bg-gradient-to-l from-slate-50 to-white p-5 text-sm shadow-sm sm:flex-row sm:items-center">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white">
                <BookOpen className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-text-secondary">
                دليل تخصصي من المكتبة المالية
                <a href="/blog/zakat-tax-financial-data-organization/" className="mt-1 block text-primary underline decoration-emerald-300 underline-offset-4">تنظيم البيانات المالية للزكاة والضريبة</a>
              </span>
            </div>
            <a href="/blog/zakat-tax-financial-data-organization/" className="inline-flex items-center gap-2 text-primary hover:text-emerald-700">
              قراءة الدليل <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <section aria-labelledby="related-services-heading" className="mt-8 border-t border-slate-200 pt-7">
            <h2 id="related-services-heading" className="mb-4 text-lg text-text-primary md:text-xl">
              خدمات مالية مرتبطة قد تحتاجها منشأتك
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <a href="/services/bookkeeping/" className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 text-sm text-text-primary shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500">
                <span>تنظيم الحسابات ومسك الدفاتر</span>
                <ArrowLeft className="h-4 w-4 shrink-0 text-secondary transition-transform group-hover:-translate-x-1" aria-hidden="true" />
              </a>
              <a href="/services/financial-statements/" className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 text-sm text-text-primary shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500">
                <span>إعداد القوائم المالية</span>
                <ArrowLeft className="h-4 w-4 shrink-0 text-secondary transition-transform group-hover:-translate-x-1" aria-hidden="true" />
              </a>
              <a href="/services/virtual-cfo/" className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 text-sm text-text-primary shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500">
                <span>المدير المالي عن بُعد (Virtual CFO)</span>
                <ArrowLeft className="h-4 w-4 shrink-0 text-secondary transition-transform group-hover:-translate-x-1" aria-hidden="true" />
              </a>
            </div>
          </section>
        </div>
      </Container>
    </SectionWrapper>
  );
}
