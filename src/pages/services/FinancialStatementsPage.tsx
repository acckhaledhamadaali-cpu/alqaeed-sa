import { useSEO } from '../../hooks/useSEO';
import SectionWrapper from '../../../components/SectionWrapper';
import Container from '../../../components/Container';
import { TYPOGRAPHY } from '../../lib/tokens';
import { MessageCircle } from 'lucide-react';
import PdfLeadMagnet from '../../components/PdfLeadMagnet';

const WHATSAPP_NUMBER = "966511294383";
const WHATSAPP_MESSAGE = "السلام عليكم، أرغب في مناقشة إعداد القوائم المالية لمنشأتي.";
const WHATSAPP_URL = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(WHATSAPP_MESSAGE);

export default function FinancialStatementsPage() {
  const name = "إعداد القوائم المالية";
  const slug = "financial-statements";
  const metaTitle = "إعداد القوائم المالية للشركات والمنشآت | القائد للإدارة المالية";
  const metaDesc = "إعداد القوائم المالية للمنشآت على أساس بياناتها وسجلاتها المتاحة، مع توضيح البنود التي تحتاج استكمالًا والتمييز بين الإعداد والتدقيق المستقل.";
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
            {name}
          </h1>
          <div className="w-16 h-1 bg-primary mb-6 rounded-full"></div>

          <div className="text-sm md:text-[15px] text-text-secondary leading-loose space-y-4">
            <p>
              القوائم المالية تلخص ما حدث في المنشأة خلال فترة محددة وما لديها من أصول والتزامات في تاريخ معين. يحتاجها صاحب العمل لفهم الإيرادات والتكاليف والربحية والسيولة، وقد تُطلب أيضًا من جهات خارجية بحسب غرض الاستخدام والمتطلبات المنطبقة. لا تكفي صياغة القوائم وحدها لإثبات دقة كل رقم؛ لذلك يبدأ الإعداد من مراجعة السجلات والمستندات والتسويات المتاحة.
            </p>

            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              ما الذي تتضمنه خدمة إعداد القوائم المالية؟
            </h2>
            <p>
              تُحدد القوائم المطلوبة وإطار إعدادها وفق طبيعة المنشأة والغرض منها والإطار المحاسبي المنطبق. يشمل العمل تجميع الأرصدة ومراجعة اتساقها وإعداد القوائم والإيضاحات ضمن النطاق المتفق عليه. إعداد القوائم لا يساوي تدقيقها أو إصدار تقرير تأكيد مستقل؛ إذا طلبت جهة مستخدمة قوائم مدققة، فيلزم الرجوع إلى محاسب قانوني مرخص.
            </p>

            <ul className="list-disc list-inside space-y-1 pr-4">
              <li>تجميع الأرصدة وإجراء مراجعات اتساق وتسويات ضمن البيانات المتاحة.</li>
              <li>إعداد قائمة الدخل للفترة المحددة.</li>
              <li>إعداد قائمة المركز المالي في تاريخ الإقفال.</li>
              <li>إعداد قائمة التدفقات النقدية عندما ينطبق الإطار والمتطلبات.</li>
              <li>إعداد قائمة التغيرات في حقوق الملكية والإيضاحات ذات الصلة بحسب نطاق المهمة.</li>
              <li>توضيح البنود أو المستندات التي تحتاج إلى استكمال قبل إصدار النسخة النهائية.</li>
              <li>تنسيق المخرجات مع الغرض الذي حدده العميل، دون وصفها بأنها مدققة ما لم يصدر ذلك عن مراجع مرخص.</li>
            </ul>

            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              كيف تساعد القوائم صاحب المنشأة؟
            </h2>
            <p>
              تساعد القوائم على قراءة النتائج بدل الاكتفاء برصيد البنك: فقائمة الدخل تعرض نتيجة الفترة، وقائمة المركز المالي تعرض الأصول والالتزامات وحقوق الملكية في تاريخ محدد، وقائمة التدفقات النقدية تشرح حركة النقد. يجب تفسير كل قائمة مع الإيضاحات والسياسات والبيانات التي أُعدت منها.
            </p>

            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              اطلب إعداد قوائم مالية واضحة
            </h2>
            <p>
              عند طلب الخدمة، وضّح الفترة والغرض من القوائم وما إذا كانت هناك متطلبات محددة من بنك أو جهة أخرى. بعد مراجعة البيانات المتاحة تُحدد النواقص ونطاق الإعداد قبل البدء، ولا يُفترض مسبقًا أن القوائم ستؤدي إلى قبول تمويل أو تحقق نتيجة معينة.
            </p>
          </div>

          <PdfLeadMagnet 
            title="" 
            subtitle="" 
            reportName="قائمة المركز المالي وقائمة الدخل" 
            whatsappUrl={WHATSAPP_URL}
            documentContent={
              <div className="flex flex-col h-full bg-white text-gray-800 text-[10px] md:text-xs font-sans">
                {/* PDF Header */}
                <div className="border-b-2 border-gray-800 pb-3 mb-4 flex justify-between items-end">
                  <div>
                    <h2 className="text-lg md:text-xl font-bold text-gray-900 font-arabic mb-1">Financial Statements</h2>
                    <p className="text-gray-500">As of December 31, 2024</p>
                  </div>
                  <div className="text-left text-[9px] md:text-[10px] text-gray-400">
                    <p>Status: Unaudited (Draft)</p>
                    <p>Currency: SAR</p>
                  </div>
                </div>

                {/* Table Content - Balance Sheet Snippet */}
                <div className="flex-grow">
                  <h3 className="font-bold text-gray-800 mb-2 border-b border-gray-300 pb-1">قائمة المركز المالي (Balance Sheet) - مقتطف</h3>
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full text-right border-collapse min-w-[400px]">
                      <tbody className="divide-y divide-gray-100">
                        <tr className="bg-gray-50/50">
                          <td colSpan={2} className="py-2 px-2 font-bold text-gray-900">الأصول (Assets)</td>
                        </tr>
                        <tr>
                          <td className="py-1 px-4 font-medium text-gray-800">الأصول المتداولة (Current Assets)</td>
                          <td className="py-1 px-2 text-left">850,000</td>
                        </tr>
                        <tr>
                          <td className="py-1 px-4 font-medium text-gray-800">الأصول غير المتداولة (Non-Current Assets)</td>
                          <td className="py-1 px-2 text-left">1,200,000</td>
                        </tr>
                        <tr className="border-t border-gray-300 bg-gray-50">
                          <td className="py-2 px-2 font-bold text-gray-900">إجمالي الأصول (Total Assets)</td>
                          <td className="py-2 px-2 text-left font-bold text-gray-900 border-double border-b-4 border-gray-900">2,050,000</td>
                        </tr>
                        
                        <tr className="bg-gray-50/50">
                          <td colSpan={2} className="py-2 px-2 font-bold text-gray-900 pt-4">الالتزامات وحقوق الملكية (Liabilities & Equity)</td>
                        </tr>
                        <tr>
                          <td className="py-1 px-4 font-medium text-gray-800">الالتزامات المتداولة (Current Liabilities)</td>
                          <td className="py-1 px-2 text-left">420,000</td>
                        </tr>
                        <tr>
                          <td className="py-1 px-4 font-medium text-gray-800">حقوق الملكية (Equity)</td>
                          <td className="py-1 px-2 text-left">1,630,000</td>
                        </tr>
                        <tr className="border-t border-gray-300 bg-gray-50">
                          <td className="py-2 px-2 font-bold text-gray-900">إجمالي الالتزامات وحقوق الملكية</td>
                          <td className="py-2 px-2 text-left font-bold text-gray-900 border-double border-b-4 border-gray-900">2,050,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="font-bold text-gray-800 mb-2 border-b border-gray-300 pb-1">قائمة الدخل الشامل (Income Statement) - مقتطف</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-right border-collapse min-w-[400px]">
                      <tbody className="divide-y divide-gray-100">
                        <tr>
                          <td className="py-1 px-2 font-bold text-gray-800">الإيرادات (Revenues)</td>
                          <td className="py-1 px-2 text-left">3,500,000</td>
                        </tr>
                        <tr>
                          <td className="py-1 px-2 font-medium text-gray-600">(يخصم): تكلفة المبيعات (COGS)</td>
                          <td className="py-1 px-2 text-left text-red-600">(2,100,000)</td>
                        </tr>
                        <tr className="border-t border-gray-200 bg-gray-50">
                          <td className="py-2 px-2 font-bold text-gray-900">مجمل الربح (Gross Profit)</td>
                          <td className="py-2 px-2 text-left font-bold text-gray-900">1,400,000</td>
                        </tr>
                        <tr>
                          <td className="py-1 px-2 font-medium text-gray-600">(يخصم): المصروفات التشغيلية والتسويقية</td>
                          <td className="py-1 px-2 text-left text-red-600">(950,000)</td>
                        </tr>
                        <tr className="border-t border-gray-300 bg-emerald-50">
                          <td className="py-2 px-2 font-bold text-emerald-900">صافي الدخل (Net Income)</td>
                          <td className="py-2 px-2 text-left font-bold text-emerald-900 border-double border-b-4 border-emerald-900">450,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="mt-4 bg-gray-50 border border-gray-200 p-3 rounded text-[10px] md:text-[11px] text-gray-600 text-center">
                    تم إعداد هذه القوائم المالية وفقاً للمعايير الدولية للتقرير المالي (IFRS) المعتمدة في المملكة العربية السعودية.
                  </div>
                </div>
              </div>
            }
          />

          {/* Service CTA Card */}
          <div className="my-8 p-6 bg-surface-subtle/60 border border-border-subtle rounded-2xl text-center">
            <h3 className="text-base md:text-lg font-bold text-text-primary mb-2">
              هل تحتاج إلى قوائم مالية واضحة لاتخاذ القرار؟
            </h3>
            <p className="text-xs md:text-sm text-text-secondary mb-4 max-w-xl mx-auto leading-relaxed">
              تعرّف على البيانات المطلوبة ونطاق إعداد القوائم قبل البدء.
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
              💡 دليل تخصصي من المكتبة المالية: <a href="/blog/financial-statements-importance-decision-making/" className="text-primary font-bold hover:underline">القوائم المالية وأهميتها في اتخاذ القرار</a>
            </span>
            <a href="/blog/financial-statements-importance-decision-making/" className="text-primary font-semibold hover:underline shrink-0">
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
                href="/services/financial-analysis/"
                className="p-3 bg-surface-subtle/50 hover:bg-surface-subtle border border-border-subtle rounded-lg text-xs md:text-sm font-medium text-text-primary hover:text-primary transition-all flex items-center justify-between"
              >
                <span>التحليل المالي وتقييم الأداء</span>
                <span className="text-secondary text-base">←</span>
              </a>
              <a
                href="/services/bookkeeping/"
                className="p-3 bg-surface-subtle/50 hover:bg-surface-subtle border border-border-subtle rounded-lg text-xs md:text-sm font-medium text-text-primary hover:text-primary transition-all flex items-center justify-between"
              >
                <span>تنظيم الحسابات ومسك الدفاتر</span>
                <span className="text-secondary text-base">←</span>
              </a>
              <a
                href="/services/cash-flow/"
                className="p-3 bg-surface-subtle/50 hover:bg-surface-subtle border border-border-subtle rounded-lg text-xs md:text-sm font-medium text-text-primary hover:text-primary transition-all flex items-center justify-between"
              >
                <span>إدارة التدفقات النقدية والسيولة</span>
                <span className="text-secondary text-base">←</span>
              </a>
            </div>
          </div>

        </div>
      </Container>
    </SectionWrapper>
  );
}
