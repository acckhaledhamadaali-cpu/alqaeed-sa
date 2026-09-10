import { useSEO } from '../../hooks/useSEO';
import SectionWrapper from '../../../components/SectionWrapper';
import Container from '../../../components/Container';
import { TYPOGRAPHY } from '../../lib/tokens';
import { MessageCircle } from 'lucide-react';
import PdfLeadMagnet from '../../components/PdfLeadMagnet';

const WHATSAPP_NUMBER = "966511294383";
const WHATSAPP_MESSAGE = "السلام عليكم، أرغب في مناقشة خدمة تنظيم الحسابات ومسك الدفاتر لمنشأتي.";
const WHATSAPP_URL = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(WHATSAPP_MESSAGE);

export default function BookkeepingPage() {
  const name = "تنظيم الحسابات ومسك الدفاتر";
  const slug = "bookkeeping";
  const metaTitle = "خدمات مسك الدفاتر المحاسبية للشركات | القائد للإدارة المالية";
  const metaDesc = "نقدم خدمات تنظيم الحسابات ومسك الدفاتر الاحترافية. احصل على تقارير مالية دقيقة تساند نمو أعمالك وتضمن دقة قراراتك عبر أفضل البرامج المحاسبية.";
  const url = "https://alqaeed-sa.pages.dev/services/" + slug;
  
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": url + "/#webpage",
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
        "@id": url + "/#service",
        "name": metaTitle,
        "description": metaDesc,
        "provider": {
          "@id": "https://alqaeed-sa.pages.dev/#organization"
        },
        "areaServed": "Saudi Arabia"
      },
      {
        "@type": "BreadcrumbList",
        "@id": url + "/#breadcrumb",
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

  const trackWhatsAppClick = () => {
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: 'service_cta_' + slug,
        link_url: WHATSAPP_URL
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
            تنظيم الحسابات ومسك الدفاتر
          </h1>
          <div className="w-16 h-1 bg-primary mb-6 rounded-full"></div>

          <div className="text-sm md:text-[15px] text-text-secondary leading-loose space-y-4">
            <p>
              تنظيم الحسابات ومسك الدفاتر هو الأساس الذي تعتمد عليه أي منشأة لإدارة أعمالها بطريقة صحيحة. فكل عملية بيع أو شراء أو مصروف أو إيراد يجب أن تُسجل بدقة حتى تتمكن من معرفة الوضع المالي الحقيقي لمنشأتك. وعندما تكون الحسابات منظمة، يصبح إعداد القوائم المالية ومتابعة التدفقات النقدية والالتزام بالمتطلبات الزكوية والضريبية أكثر سهولة، مما يساعدك على اتخاذ قرارات مبنية على بيانات دقيقة بدلاً من التخمين.
            </p>
            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              كيف أساعدك في تنظيم حسابات منشأتك؟
            </h2>
            <p>
              أقدم خدمة تنظيم الحسابات ومسك الدفاتر بما يتناسب مع طبيعة نشاط منشأتك، مع الحرص على تسجيل جميع العمليات المالية بطريقة صحيحة ومنظمة، وتشمل الخدمة:
            </p>
            <ul className="list-disc list-inside space-y-1 pr-4">
              <li>تصميم وتنظيم شجرة الحسابات.</li>
              <li>تسجيل القيود اليومية وفق الأصول المحاسبية.</li>
              <li>متابعة الإيرادات والمصروفات.</li>
              <li>مطابقة الحسابات البنكية والصندوق.</li>
              <li>إدارة حسابات العملاء والموردين.</li>
              <li>إعداد ميزان المراجعة بشكل دوري.</li>
              <li>تنظيم وأرشفة المستندات المالية.</li>
              <li>تجهيز البيانات اللازمة لإعداد القوائم المالية والزكاة والضريبة.</li>
            </ul>
            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              ما الذي ستستفيده من تنظيم الحسابات؟
            </h2>
            <p>
              وجود نظام محاسبي منظم يساعدك على متابعة أداء منشأتك بشكل مستمر، ومعرفة أرباحك ومصروفاتك بدقة، وتقليل الأخطاء المحاسبية، والاستعداد لأي مراجعة مالية أو ضريبية بثقة. كما يمنحك معلومات مالية واضحة تساعدك على التخطيط للنمو واتخاذ قرارات صحيحة في الوقت المناسب.
            </p>
            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              ابدأ بتنظيم حسابات منشأتك
            </h2>
            <p>
              إذا كنت تبحث عن محاسب مالي يساعدك على تنظيم الحسابات ومسك الدفاتر بطريقة احترافية، فأنا جاهز لتقديم خدمة تناسب طبيعة نشاطك وتوفر لك بيانات مالية دقيقة تساعدك على إدارة أعمالك بثقة.
            </p>
          </div>

          <PdfLeadMagnet 
            title="" 
            subtitle="" 
            reportName="ميزان المراجعة (نسخة مستخرجة)" 
            whatsappUrl={WHATSAPP_URL}
            documentContent={
              <div className="flex flex-col h-full bg-white text-gray-800 text-[10px] md:text-xs font-sans">
                {/* PDF Header */}
                <div className="border-b-2 border-gray-800 pb-3 mb-4 flex justify-between items-end">
                  <div>
                    <h2 className="text-lg md:text-xl font-bold text-gray-900 font-arabic mb-1">ميزان المراجعة (Trial Balance)</h2>
                    <p className="text-gray-500">للفترة المنتهية في 31 أكتوبر 2024</p>
                  </div>
                  <div className="text-left text-[9px] md:text-[10px] text-gray-400">
                    <p>Generated by ERP System</p>
                    <p>Date: 01-Nov-2024</p>
                  </div>
                </div>

                {/* Table Content */}
                <div className="flex-grow">
                  <div className="overflow-x-auto">
                    <table className="w-full text-right mb-6 border-collapse min-w-[400px]">
                      <thead>
                        <tr className="bg-gray-100 border-y border-gray-300">
                          <th className="py-2 px-2 md:px-3 font-semibold text-gray-700 w-16">رقم الحساب</th>
                          <th className="py-2 px-2 md:px-3 font-semibold text-gray-700">اسم الحساب</th>
                          <th className="py-2 px-2 md:px-3 font-semibold text-gray-700 w-24 text-left">مدين (SAR)</th>
                          <th className="py-2 px-2 md:px-3 font-semibold text-gray-700 w-24 text-left">دائن (SAR)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr>
                          <td className="py-2 px-2 md:px-3 text-gray-500 font-mono">1101</td>
                          <td className="py-2 px-2 md:px-3 font-medium text-gray-800">النقدية في الصندوق</td>
                          <td className="py-2 px-2 md:px-3 text-left">45,000.00</td>
                          <td className="py-2 px-2 md:px-3 text-left">-</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-2 md:px-3 text-gray-500 font-mono">1102</td>
                          <td className="py-2 px-2 md:px-3 font-medium text-gray-800">البنك الأهلي</td>
                          <td className="py-2 px-2 md:px-3 text-left">280,500.00</td>
                          <td className="py-2 px-2 md:px-3 text-left">-</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-2 md:px-3 text-gray-500 font-mono">1201</td>
                          <td className="py-2 px-2 md:px-3 font-medium text-gray-800">العملاء (الذمم المدينة)</td>
                          <td className="py-2 px-2 md:px-3 text-left">142,000.00</td>
                          <td className="py-2 px-2 md:px-3 text-left">-</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-2 md:px-3 text-gray-500 font-mono">2101</td>
                          <td className="py-2 px-2 md:px-3 font-medium text-gray-800">الموردين (الذمم الدائنة)</td>
                          <td className="py-2 px-2 md:px-3 text-left">-</td>
                          <td className="py-2 px-2 md:px-3 text-left">89,200.00</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-2 md:px-3 text-gray-500 font-mono">3101</td>
                          <td className="py-2 px-2 md:px-3 font-medium text-gray-800">رأس المال</td>
                          <td className="py-2 px-2 md:px-3 text-left">-</td>
                          <td className="py-2 px-2 md:px-3 text-left">500,000.00</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-2 md:px-3 text-gray-500 font-mono">4101</td>
                          <td className="py-2 px-2 md:px-3 font-medium text-gray-800">إيرادات المبيعات</td>
                          <td className="py-2 px-2 md:px-3 text-left">-</td>
                          <td className="py-2 px-2 md:px-3 text-left">450,000.00</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-2 md:px-3 text-gray-500 font-mono">5101</td>
                          <td className="py-2 px-2 md:px-3 font-medium text-gray-800">تكلفة المبيعات</td>
                          <td className="py-2 px-2 md:px-3 text-left">270,000.00</td>
                          <td className="py-2 px-2 md:px-3 text-left">-</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-2 md:px-3 text-gray-500 font-mono">5201</td>
                          <td className="py-2 px-2 md:px-3 font-medium text-gray-800">رواتب وأجور</td>
                          <td className="py-2 px-2 md:px-3 text-left">85,000.00</td>
                          <td className="py-2 px-2 md:px-3 text-left">-</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr className="bg-gray-50 border-t-2 border-gray-800 font-bold">
                          <td colSpan={2} className="py-2 px-2 md:px-3 text-gray-900">الإجمالي المطابق</td>
                          <td className="py-2 px-2 md:px-3 text-left text-green-700">1,039,200.00</td>
                          <td className="py-2 px-2 md:px-3 text-left text-green-700">1,039,200.00</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-100 p-3 rounded text-[10px] md:text-[11px] text-blue-800 font-medium">
                    <p className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-blue-500 inline-block"></span>
                      الحسابات متطابقة. تم إجراء كافة قيود التسوية الجردية والبنكية.
                    </p>
                  </div>
                </div>
              </div>
            }
          />

          {/* Service CTA Card */}
          <div className="my-8 p-6 bg-surface-subtle/60 border border-border-subtle rounded-2xl text-center">
            <h3 className="text-base md:text-lg font-bold text-text-primary mb-2">
              هل تحتاج إلى تنظيم حسابات منشأتك؟
            </h3>
            <p className="text-xs md:text-sm text-text-secondary mb-4 max-w-xl mx-auto leading-relaxed">
              تواصل معي مباشرة لمناقشة وضع حساباتك الحالية وتحديد خطة العمل المناسبة لنشاطك.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-x-2 px-6 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs md:text-sm font-semibold rounded-xl transition-all shadow-sm duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span>تواصل معي عبر واتساب</span>
            </a>
          </div>

          {/* Related Article Guide Link */}
          <div className="mb-8 p-4 bg-primary/5 border border-primary/15 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs md:text-sm">
            <span className="text-text-secondary font-medium">
              💡 دليل تخصصي من المكتبة المالية: <a href="/blog/bookkeeping-importance-organized-accounting/" className="text-primary font-bold hover:underline">مسك الدفاتر المنظم كأساس للإدارة المالية</a>
            </span>
            <a href="/blog/bookkeeping-importance-organized-accounting/" className="text-primary font-semibold hover:underline shrink-0">
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
                href="/services/financial-statements/"
                className="p-3 bg-surface-subtle/50 hover:bg-surface-subtle border border-border-subtle rounded-lg text-xs md:text-sm font-medium text-text-primary hover:text-primary transition-all flex items-center justify-between"
              >
                <span>إعداد القوائم المالية المعتمدة</span>
                <span className="text-secondary text-base">←</span>
              </a>
              <a
                href="/services/zakat-tax/"
                className="p-3 bg-surface-subtle/50 hover:bg-surface-subtle border border-border-subtle rounded-lg text-xs md:text-sm font-medium text-text-primary hover:text-primary transition-all flex items-center justify-between"
              >
                <span>خدمات الزكاة والضريبة</span>
                <span className="text-secondary text-base">←</span>
              </a>
              <a
                href="/services/management-reports/"
                className="p-3 bg-surface-subtle/50 hover:bg-surface-subtle border border-border-subtle rounded-lg text-xs md:text-sm font-medium text-text-primary hover:text-primary transition-all flex items-center justify-between"
              >
                <span>إعداد التقارير الإدارية</span>
                <span className="text-secondary text-base">←</span>
              </a>
            </div>
          </div>

        </div>
      </Container>
    </SectionWrapper>
  );
}
