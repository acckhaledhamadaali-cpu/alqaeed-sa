import { useSEO } from '../../hooks/useSEO';
import SectionWrapper from '../../../components/SectionWrapper';
import Container from '../../../components/Container';
import { TYPOGRAPHY } from '../../lib/tokens';
import { MessageCircle } from 'lucide-react';
import PdfLeadMagnet from '../../components/PdfLeadMagnet';

const WHATSAPP_NUMBER = "966511294383";
const VAT_WHATSAPP_MESSAGE = "السلام عليكم، أرغب في خدمة إعداد أو مراجعة إقرار ضريبة القيمة المضافة. الفترة الضريبية: [الفترة]، ونوع النشاط: [النشاط].";
const ZAKAT_WHATSAPP_MESSAGE = "السلام عليكم، أرغب في خدمة إعداد أو مراجعة الإقرار الزكوي. السنة المالية: [السنة]، ونوع النشاط: [النشاط].";
const BOTH_WHATSAPP_MESSAGE = "السلام عليكم، أحتاج إلى الخدمتين: إعداد أو مراجعة إقرار ضريبة القيمة المضافة والإقرار الزكوي لمنشأتي. النشاط: [النشاط].";
const makeWhatsAppUrl = (message: string) => "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
const VAT_WHATSAPP_URL = makeWhatsAppUrl(VAT_WHATSAPP_MESSAGE);
const ZAKAT_WHATSAPP_URL = makeWhatsAppUrl(ZAKAT_WHATSAPP_MESSAGE);
const BOTH_WHATSAPP_URL = makeWhatsAppUrl(BOTH_WHATSAPP_MESSAGE);

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

  const trackWhatsAppClick = (service: "vat" | "zakat" | "both") => {
    const linkUrl = service === "vat" ? VAT_WHATSAPP_URL : service === "zakat" ? ZAKAT_WHATSAPP_URL : BOTH_WHATSAPP_URL;
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

          <div className="text-sm md:text-[15px] text-text-secondary leading-loose space-y-4">
            <p>
              أقدم خدمتين منفصلتين للمنشآت في السعودية: إعداد ومراجعة إقرار ضريبة القيمة المضافة، وإعداد ومراجعة الإقرار الزكوي. تختلف بيانات كل إقرار ومستنداته وفترته؛ اختر الخدمة التي تحتاجها، أو تواصل بشأن الخدمتين معًا.
            </p>

            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              أولًا: خدمة إقرار ضريبة القيمة المضافة
            </h2>
            <p>
              هذه الخدمة مخصصة للمنشآت المسجلة في ضريبة القيمة المضافة، وتركز على تجهيز ومراجعة بيانات المبيعات والمشتريات للفترة الضريبية، كلٌّ وفق تصنيفه ومستنداته.
            </p>
            <ul className="list-disc list-inside space-y-1 pr-4">
              <li>مراجعة ملخص المبيعات والمشتريات والفواتير والإشعارات ذات الصلة بالفترة.</li>
              <li>مطابقة بيانات الإقرار مع السجلات المحاسبية والمستندات المتاحة، وإبراز النواقص أو الفروقات.</li>
              <li>إعداد بيانات الإقرار أو مراجعته قبل اعتماده من المنشأة.</li>
              <li>رفع الإقرار عند طلبك وبعد اعتماد البيانات واستكمال الإجراء أو التفويض المناسب.</li>
            </ul>
            <a
              href={VAT_WHATSAPP_URL}
              onClick={() => trackWhatsAppClick("vat")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-x-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs md:text-sm font-semibold rounded-xl transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span>استفسر عن إقرار ضريبة القيمة المضافة</span>
            </a>

            <h2 className="text-lg font-bold text-primary mt-8 mb-2 border-r-2 border-primary pr-3">
              ثانيًا: خدمة الإقرار الزكوي
            </h2>
            <p>
              هذه خدمة مستقلة عن إقرار ضريبة القيمة المضافة. تتناول تجهيز ومراجعة البيانات المالية والسجلات ذات الصلة بالإقرار الزكوي السنوي، بحسب صفة المنشأة ومتطلباتها النظامية.
            </p>
            <ul className="list-disc list-inside space-y-1 pr-4">
              <li>مراجعة القوائم المالية والسجلات والبيانات المؤيدة لعناصر الوعاء الزكوي.</li>
              <li>تنظيم المستندات المرتبطة بالإيرادات والمصروفات والحسابات ذات العلاقة.</li>
              <li>إعداد بيانات الإقرار أو مراجعته وشرح البنود التي تحتاج إلى استكمال أو تأكيد.</li>
              <li>رفع الإقرار عند طلبك وبعد اعتماد البيانات واستكمال الإجراء أو التفويض المناسب.</li>
            </ul>
            <a
              href={ZAKAT_WHATSAPP_URL}
              onClick={() => trackWhatsAppClick("zakat")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-x-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs md:text-sm font-semibold rounded-xl transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span>استفسر عن الإقرار الزكوي</span>
            </a>

            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              لماذا من المهم التمييز بين الإقرارين؟
            </h2>
            <p>
              لكل خدمة فترة وبيانات ومستندات ومعالجة مختلفة. فصل الملفين من البداية يساعد على تجهيز المعلومات المناسبة لكل إقرار، وتوضيح النواقص قبل المراجعة أو التقديم؛ ولا يعني طلب إحدى الخدمتين تلقائيًا طلب الأخرى.
            </p>

            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              مستندات كل خدمة
            </h2>
            <h3 className="font-bold text-text-primary mt-4 mb-1">إقرار ضريبة القيمة المضافة</h3>
            <p>ابدأ بملخص للفترة الضريبية المطلوبة، وما يتوفر من المستندات التالية:</p>
            <ul className="list-disc list-inside space-y-1 pr-4">
              <li>بيان المبيعات والفواتير الضريبية الصادرة، بما فيها الإشعارات الدائنة أو المدينة ذات الصلة.</li>
              <li>بيان المشتريات والفواتير الضريبية الواردة، ومستندات الاستيراد إن انطبقت على نشاط المنشأة.</li>
              <li>تقرير من النظام المحاسبي أو دفتر الأستاذ، ونسخة من الإقرار السابق إذا كانت المراجعة تتطلب الرجوع إليه.</li>
              <li>كشوف الحسابات البنكية أو العقود التي تساعد على توضيح عمليات مرتبطة بالفترة عند الحاجة.</li>
            </ul>
            <p>تُراجع أهلية ضريبة المدخلات للخصم بحسب كل معاملة ومستنداتها؛ فوجود فاتورة وحده لا يعني تلقائيًا أن مبلغ الضريبة قابل للخصم.</p>

            <h3 className="font-bold text-text-primary mt-4 mb-1">الإقرار الزكوي</h3>
            <p>جهّز ما يتوفر من بيانات السنة المالية والسجلات المؤيدة، وقد تشمل:</p>
            <ul className="list-disc list-inside space-y-1 pr-4">
              <li>القوائم المالية والسجلات التجارية وميزان المراجعة أو التقارير المحاسبية ذات الصلة.</li>
              <li>مستندات تؤيد الإيرادات والمصروفات، مثل الفواتير والعقود وكشوف الحسابات ذات العلاقة.</li>
              <li>تفاصيل الحسابات أو البنود التي تحتاج إلى إيضاح بحسب نشاط المنشأة وبياناتها المالية.</li>
              <li>القوائم المالية المدققة أو المرفقات الخاصة، متى كانت مطلوبة على فئة المكلف؛ فقد تنطبق استثناءات على بعض الحالات.</li>
            </ul>
            <p>القائمتان إرشاديتان وليستا متطلبات موحدة للجميع. نحدد المستندات المطلوبة لكل مسار بعد معرفة الفترة ونوع الإقرار وصفة المنشأة.</p>

            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              خطوات كل خدمة
            </h2>
            <h3 className="font-bold text-text-primary mt-4 mb-1">خطوات إقرار ضريبة القيمة المضافة</h3>
            <ol className="list-decimal list-inside space-y-1 pr-4">
              <li>تحديد الفترة الضريبية ونوع النشاط وحالة التسجيل.</li>
              <li>مراجعة بيانات المبيعات والمشتريات والفواتير والتسويات ذات الصلة.</li>
              <li>مطابقة الأرقام وتجهيز بيانات الإقرار، ثم توضيح أي فرق أو مستند ناقص لك.</li>
              <li>مراجعة المسودة واعتمادها، ثم الرفع عند طلبك وبعد استكمال الإجراء أو التفويض المناسب.</li>
            </ol>
            <h3 className="font-bold text-text-primary mt-4 mb-1">خطوات الإقرار الزكوي</h3>
            <ol className="list-decimal list-inside space-y-1 pr-4">
              <li>تحديد السنة المالية وصفة المنشأة ونطاق الإقرار المطلوب.</li>
              <li>مراجعة القوائم والسجلات والمستندات المؤيدة للبنود ذات العلاقة.</li>
              <li>إعداد بيانات الإقرار ومراجعة الملاحظات أو النواقص معك قبل الاعتماد.</li>
              <li>الرفع عند طلبك وبعد اعتماد البيانات واستكمال الإجراء أو التفويض المناسب.</li>
            </ol>

            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              مخرجات كل خدمة
            </h2>
            <h3 className="font-bold text-text-primary mt-4 mb-1">في خدمة ضريبة القيمة المضافة</h3>
            <ul className="list-disc list-inside space-y-1 pr-4">
              <li>ملخص بيانات المبيعات والمشتريات التي جرى تجهيزها ومراجعتها.</li>
              <li>بيانات الإقرار أو مسودته للمراجعة، مع توضيح الفروقات والمستندات الناقصة.</li>
              <li>إشعار الاستلام أو مرجع التقديم إذا تم رفع الإقرار بطلبك.</li>
            </ul>
            <h3 className="font-bold text-text-primary mt-4 mb-1">في خدمة الإقرار الزكوي</h3>
            <ul className="list-disc list-inside space-y-1 pr-4">
              <li>بيانات الإقرار أو مسودته للمراجعة وفق السجلات والمستندات المقدمة.</li>
              <li>ملاحظات على البنود أو المرفقات التي تحتاج إلى استكمال أو إيضاح.</li>
              <li>إشعار الاستلام أو مرجع التقديم إذا تم رفع الإقرار بطلبك.</li>
            </ul>

            <div role="note" className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs md:text-sm leading-6 text-amber-950">
              <strong>حماية بياناتك:</strong> لا ترسل كلمة مرور حساب الهيئة أو رمز التحقق لمرة واحدة عبر واتساب. إذا احتاجت الخدمة إلى إجراء عبر البوابة، ننسق طريقة الدخول أو التفويض المناسبة دون مشاركة رموزك السرية.
            </div>

            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              أسئلة شائعة عن ضريبة القيمة المضافة
            </h2>
            <h3 className="font-bold text-text-primary mt-4 mb-1">هل تشمل الخدمة تجهيز الإقرار ورفعه؟</h3>
            <p>يمكن أن تشمل إعداد الإقرار ومراجعته، والرفع عند طلبك وبعد اعتماد البيانات واستكمال الإجراء المناسب.</p>
            <h3 className="font-bold text-text-primary mt-4 mb-1">هل تُخصم ضريبة كل فاتورة مشتريات؟</h3>
            <p>ليس بالضرورة؛ تُراجع كل معاملة ومستنداتها وفق طبيعتها ومتطلبات الهيئة قبل إدراجها ضمن ضريبة المدخلات القابلة للخصم.</p>

            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              أسئلة شائعة عن الإقرار الزكوي
            </h2>
            <h3 className="font-bold text-text-primary mt-4 mb-1">هل تتطلب كل المنشآت القوائم المالية المدققة نفسها؟</h3>
            <p>تختلف المتطلبات بحسب صفة المكلف والالتزامات النظامية المنطبقة، وقد توجد استثناءات. نراجع ما ينطبق على منشأتك بدل افتراض قائمة واحدة للجميع.</p>
            <h3 className="font-bold text-text-primary mt-4 mb-1">هل تختلف مستندات الإقرار الزكوي عن مستندات VAT؟</h3>
            <p>نعم. لكل إقرار بيانات ومستندات مرتبطة به؛ لذلك نجهز كل مسار على حدة، وقد تحتاج المنشأة إلى الخدمتين أو إلى إحداهما فقط.</p>

            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              مراجع خدمة ضريبة القيمة المضافة
            </h2>
            <ul className="list-disc list-inside space-y-1 pr-4">
              <li><a className="text-primary underline" href="https://zatca.gov.sa/ar/eServices/Pages/eServices-009.aspx" target="_blank" rel="noopener noreferrer">خدمة تقديم إقرار ضريبة القيمة المضافة</a></li>
              <li><a className="text-primary underline" href="https://zatca.gov.sa/ar/HelpCenter/guidelines/Documents/Simplified_VAT_Filing_Guidelines.pdf" target="_blank" rel="noopener noreferrer">الدليل المبسط لرفع إقرار ضريبة القيمة المضافة</a></li>
              <li><a className="text-primary underline" href="https://zatca.gov.sa/ar/HelpCenter/guidelines/Documents/Guideline-for-Tax-Invoicing-and-Records-under-VAT-Provisions.pdf" target="_blank" rel="noopener noreferrer">دليل الفواتير الضريبية وحفظ السجلات</a></li>
            </ul>

            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              مرجع خدمة الإقرار الزكوي
            </h2>
            <ul className="list-disc list-inside space-y-1 pr-4">
              <li><a className="text-primary underline" href="https://zatca.gov.sa/ar/HelpCenter/guidelines/Documents/%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D9%86%D8%AF%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B2%D9%83%D9%88%D9%8A%D8%A9.pdf" target="_blank" rel="noopener noreferrer">دليل المستندات الزكوية</a></li>
            </ul>
            <p className="text-xs text-text-muted">
              هذه الروابط للتوعية والرجوع إلى المصادر الرسمية؛ وتُراجع متطلبات كل إقرار بحسب حالة المنشأة قبل التقديم.
            </p>

            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              اختر الخدمة التي تحتاجها
            </h2>
            <p>
              إقرار ضريبة القيمة المضافة والإقرار الزكوي مساران منفصلان. حدّد الخدمة في رسالة واتساب، أو اختر أنك تحتاج إلى الاستفسار عن الخدمتين معًا.
            </p>
          </div>

          <div role="note" className="my-5 rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs md:text-sm leading-6 text-amber-950">
            <strong>مثال توضيحي:</strong> البيانات والأرقام افتراضية، وليست إقرارًا فعليًا أو بيانات عميل.
          </div>
          <PdfLeadMagnet 
            title="" 
            subtitle="" 
            reportName="نموذج الإقرار الضريبي (VAT Return)" 
            whatsappUrl={VAT_WHATSAPP_URL}
            documentContent={
              <div className="flex flex-col h-full bg-white text-gray-800 text-[10px] md:text-xs font-sans">
                {/* PDF Header */}
                <div className="border-b-2 border-green-800 pb-3 mb-4 flex justify-between items-end">
                  <div>
                    <h2 className="text-lg md:text-xl font-bold text-gray-900 font-arabic mb-1">إقرار ضريبة القيمة المضافة</h2>
                    <p className="text-gray-500">الفترة: ربع سنوي — بيانات افتراضية للتوضيح</p>
                  </div>
                  <div className="text-left text-[9px] md:text-[10px] text-gray-400">
                    <p>الرقم الضريبي: 30XXXXXXXXXX3</p>
                    <p>مستخرج من: النظام المحاسبي</p>
                  </div>
                </div>

                {/* Table Content */}
                <div className="flex-grow">
                  <div className="overflow-x-auto">
                    <table className="w-full text-right mb-6 border-collapse min-w-[500px]">
                      <thead>
                        <tr className="bg-gray-100 border-y border-gray-300">
                          <th className="py-2 px-2 font-semibold text-gray-700 w-12">الرقم</th>
                          <th className="py-2 px-2 font-semibold text-gray-700">البيان</th>
                          <th className="py-2 px-2 font-semibold text-gray-700 w-32 text-left">المبلغ (غير شامل الضريبة)</th>
                          <th className="py-2 px-2 font-semibold text-gray-700 w-24 text-left">مبلغ الضريبة (SAR)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {/* Sales */}
                        <tr className="bg-green-50/50">
                          <td colSpan={4} className="py-2 px-2 font-bold text-green-900">المبيعات (المخرجات)</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-2 text-gray-500 text-center">1</td>
                          <td className="py-2 px-2 font-medium text-gray-800">المبيعات الخاضعة للنسبة الأساسية (15%)</td>
                          <td className="py-2 px-2 text-left">450,000.00</td>
                          <td className="py-2 px-2 text-left text-gray-900">67,500.00</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-2 text-gray-500 text-center">2</td>
                          <td className="py-2 px-2 font-medium text-gray-800">المبيعات للمواطنين (خدمات صحية/تعليمية/عقار)</td>
                          <td className="py-2 px-2 text-left">0.00</td>
                          <td className="py-2 px-2 text-left text-gray-900">0.00</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-2 text-gray-500 text-center">3</td>
                          <td className="py-2 px-2 font-medium text-gray-800">المبيعات الخاضعة للنسبة الصفرية (0%)</td>
                          <td className="py-2 px-2 text-left">25,000.00</td>
                          <td className="py-2 px-2 text-left text-gray-900">0.00</td>
                        </tr>
                        <tr className="border-t border-gray-300 bg-gray-50">
                          <td colSpan={2} className="py-2 px-2 font-bold text-gray-900 text-left">إجمالي ضريبة المخرجات:</td>
                          <td colSpan={2} className="py-2 px-2 text-left font-bold text-gray-900">67,500.00</td>
                        </tr>
                        
                        {/* Purchases */}
                        <tr className="bg-green-50/50 mt-2">
                          <td colSpan={4} className="py-2 px-2 font-bold text-green-900 pt-4">المشتريات (المدخلات)</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-2 text-gray-500 text-center">4</td>
                          <td className="py-2 px-2 font-medium text-gray-800">المشتريات الخاضعة للنسبة الأساسية (15%)</td>
                          <td className="py-2 px-2 text-left">280,000.00</td>
                          <td className="py-2 px-2 text-left text-gray-900">42,000.00</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-2 text-gray-500 text-center">5</td>
                          <td className="py-2 px-2 font-medium text-gray-800">الاستيرادات الخاضعة للنسبة الأساسية المستحقة للبيان الجمركي</td>
                          <td className="py-2 px-2 text-left">50,000.00</td>
                          <td className="py-2 px-2 text-left text-gray-900">7,500.00</td>
                        </tr>
                        <tr className="border-t border-gray-300 bg-gray-50">
                          <td colSpan={2} className="py-2 px-2 font-bold text-gray-900 text-left">إجمالي ضريبة المدخلات القابلة للخصم:</td>
                          <td colSpan={2} className="py-2 px-2 text-left font-bold text-gray-900">49,500.00</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr className="bg-green-100 border-t-2 border-green-800 font-bold">
                          <td colSpan={2} className="py-3 px-2 text-green-900">صافي الضريبة المستحقة (المستردة)</td>
                          <td colSpan={2} className="py-3 px-2 text-left text-green-900">18,000.00</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  
                  <div className="bg-gray-50 border border-gray-200 p-3 rounded text-[10px] md:text-[11px] text-gray-600 font-medium">
                    <p className="flex items-start gap-1">
                      <span className="w-2 h-2 rounded-full bg-green-500 inline-block mt-1 shrink-0"></span>
                      <span>
                        هذا نموذج توضيحي ببيانات افتراضية، ولا يمثل مطابقة فعلية لفواتير عميل. وتُراجع متطلبات الفوترة الإلكترونية عند تنفيذ الخدمة.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            }
          />

          {/* Service CTA Card */}
          <div className="my-8 p-6 bg-surface-subtle/60 border border-border-subtle rounded-2xl text-center">
            <h3 className="text-base md:text-lg font-bold text-text-primary mb-2">
              ما الخدمة التي تحتاجها؟
            </h3>
            <p className="text-xs md:text-sm text-text-secondary mb-4 max-w-xl mx-auto leading-relaxed">
              اختر الخدمة المناسبة لتبدأ محادثة واضحة حول الفترة ونوع الإقرار.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
              <a
                href={VAT_WHATSAPP_URL}
                onClick={() => trackWhatsAppClick("vat")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-x-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs md:text-sm font-semibold rounded-xl transition-all shadow-sm duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>إقرار ضريبة القيمة المضافة</span>
              </a>
              <a
                href={ZAKAT_WHATSAPP_URL}
                onClick={() => trackWhatsAppClick("zakat")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-x-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs md:text-sm font-semibold rounded-xl transition-all shadow-sm duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>الإقرار الزكوي</span>
              </a>
              <a
                href={BOTH_WHATSAPP_URL}
                onClick={() => trackWhatsAppClick("both")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-x-2 px-5 py-2.5 border border-[#25D366] text-text-primary hover:bg-green-50 text-xs md:text-sm font-semibold rounded-xl transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" aria-hidden="true" />
                <span>أحتاج إلى الخدمتين</span>
              </a>
            </div>
          </div>

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
