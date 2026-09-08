import { useSEO } from '../../hooks/useSEO';
import SectionWrapper from '../../../components/SectionWrapper';
import Container from '../../../components/Container';
import { TYPOGRAPHY } from '../../lib/tokens';
import { MessageCircle } from 'lucide-react';
import PdfLeadMagnet from '../../components/PdfLeadMagnet';

const WHATSAPP_NUMBER = "966511294383";
const WHATSAPP_MESSAGE = "السلام عليكم، أرغب في مناقشة احتياج منشأتي في مجال التحليل المالي وهوامش الربحية.";
const WHATSAPP_URL = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(WHATSAPP_MESSAGE);

export default function FinancialAnalysisPage() {
  const name = "التحليل المالي";
  const slug = "financial-analysis";
  const metaTitle = "التحليل المالي للشركات وتقييم الأداء | القائد للإدارة المالية";
  const metaDesc = "حول الأرقام الصامتة إلى استراتيجيات ناجحة. خدمات التحليل المالي الاحترافية لمساعدتك في فهم مؤشرات السيولة والربحية واكتشاف فرص النمو لمنشأتك.";
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
              التحليل المالي (Financial Analysis) يساعدك على فهم الأرقام الموجودة في القوائم المالية وتحويلها إلى معلومات تدعم اتخاذ القرار. فمن خلال تحليل الإيرادات والمصروفات والربحية (Profitability) والسيولة (Liquidity)، يمكنك تقييم أداء منشأتك، واكتشاف نقاط القوة والضعف، ومعرفة الفرص التي تساعد على تحسين النتائج المالية وتقليل المخاطر.
            </p>

            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              ماذا تتضمن خدمة التحليل المالي؟
            </h2>
            <p>
              أقدم تحليلًا ماليًا يعتمد على بيانات منشأتك بهدف تقديم صورة واضحة عن أدائها المالي، وتشمل الخدمة:
            </p>

            <ul className="list-disc list-inside space-y-1 pr-4">
              <li>تحليل الربحية (Profitability Analysis).</li>
              <li>تحليل الإيرادات والمصروفات (Revenue & Expense Analysis).</li>
              <li>تحليل السيولة والتدفقات النقدية (Liquidity & Cash Flow Analysis).</li>
              <li>تحليل المركز المالي (Financial Position Analysis).</li>
              <li>قياس النسب والمؤشرات المالية (Financial Ratios & KPIs).</li>
              <li>مقارنة الأداء بين الفترات المالية (Period-over-Period Analysis).</li>
              <li>إعداد تقارير مالية تدعم اتخاذ القرار (Management Reports).</li>
              <li>تقديم توصيات عملية لتحسين الأداء المالي وزيادة الكفاءة.</li>
            </ul>

            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              لماذا يعد التحليل المالي مهمًا؟
            </h2>
            <p>
              يساعدك التحليل المالي على فهم الأداء الحقيقي لمنشأتك، واكتشاف أسباب ارتفاع التكاليف أو انخفاض الأرباح، وقياس كفاءة التشغيل، وتقييم السيولة والربحية. كما يوفر مؤشرات مالية واضحة تساعدك على اتخاذ قرارات مبنية على بيانات دقيقة، سواء كنت تخطط للتوسع، أو خفض التكاليف، أو تحسين العائد على الاستثمار (ROI - Return on Investment).
            </p>

            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              ابدأ بتحليل أداء منشأتك
            </h2>
            <p>
              إذا كنت تبحث عن محلل مالي (Financial Analyst) يساعدك على قراءة القوائم المالية، وتحليل مؤشرات الأداء (KPIs)، وتقديم تقارير مالية تدعم قراراتك، فأنا جاهز لتقديم تحليل مالي احترافي يمنحك رؤية أوضح تساعدك على تطوير أعمالك وتحقيق أهدافك.
            </p>
          </div>

          <PdfLeadMagnet 
            title="" 
            subtitle="" 
            reportName="تقرير التحليل المالي ومؤشرات الأداء" 
            whatsappUrl={WHATSAPP_URL}
            documentContent={
              <div className="flex flex-col h-full bg-white text-gray-800 text-[10px] md:text-xs font-sans">
                {/* PDF Header */}
                <div className="border-b-2 border-indigo-800 pb-3 mb-4 flex justify-between items-end">
                  <div>
                    <h2 className="text-lg md:text-xl font-bold text-gray-900 font-arabic mb-1">Financial Ratios & Analysis</h2>
                    <p className="text-gray-500">للفترة المنتهية في الربع الثالث 2024</p>
                  </div>
                  <div className="text-left text-[9px] md:text-[10px] text-gray-400">
                    <p>Generated by: CFO System</p>
                    <p>Status: Final Review</p>
                  </div>
                </div>

                {/* Table Content */}
                <div className="flex-grow">
                  <div className="overflow-x-auto">
                    <table className="w-full text-right mb-6 border-collapse min-w-[500px]">
                      <thead>
                        <tr className="bg-gray-100 border-y border-gray-300">
                          <th className="py-2 px-2 font-semibold text-gray-700 w-1/3">المؤشر المالي (KPI)</th>
                          <th className="py-2 px-2 font-semibold text-gray-700 text-center">الربع الحالي</th>
                          <th className="py-2 px-2 font-semibold text-gray-700 text-center">الربع السابق</th>
                          <th className="py-2 px-2 font-semibold text-gray-700 text-center">التغير</th>
                          <th className="py-2 px-2 font-semibold text-gray-700 text-left">الحالة</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {/* Profitability */}
                        <tr className="bg-indigo-50/50">
                          <td colSpan={5} className="py-2 px-2 font-bold text-indigo-900">مؤشرات الربحية (Profitability Ratios)</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-2 font-medium text-gray-800">هامش مجمل الربح (Gross Margin)</td>
                          <td className="py-2 px-2 text-center font-bold">42.5%</td>
                          <td className="py-2 px-2 text-center">39.0%</td>
                          <td className="py-2 px-2 text-center text-green-600">+3.5%</td>
                          <td className="py-2 px-2 text-left"><span className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-[9px]">ممتاز</span></td>
                        </tr>
                        <tr>
                          <td className="py-2 px-2 font-medium text-gray-800">هامش صافي الربح (Net Margin)</td>
                          <td className="py-2 px-2 text-center font-bold">15.2%</td>
                          <td className="py-2 px-2 text-center">16.1%</td>
                          <td className="py-2 px-2 text-center text-red-500">-0.9%</td>
                          <td className="py-2 px-2 text-left"><span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded text-[9px]">مقبول</span></td>
                        </tr>
                        <tr>
                          <td className="py-2 px-2 font-medium text-gray-800">العائد على الأصول (ROA)</td>
                          <td className="py-2 px-2 text-center font-bold">8.4%</td>
                          <td className="py-2 px-2 text-center">7.2%</td>
                          <td className="py-2 px-2 text-center text-green-600">+1.2%</td>
                          <td className="py-2 px-2 text-left"><span className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-[9px]">جيد</span></td>
                        </tr>

                        {/* Liquidity */}
                        <tr className="bg-indigo-50/50 mt-2">
                          <td colSpan={5} className="py-2 px-2 font-bold text-indigo-900 pt-4">مؤشرات السيولة (Liquidity Ratios)</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-2 font-medium text-gray-800">نسبة التداول (Current Ratio)</td>
                          <td className="py-2 px-2 text-center font-bold">2.1x</td>
                          <td className="py-2 px-2 text-center">1.8x</td>
                          <td className="py-2 px-2 text-center text-green-600">+0.3x</td>
                          <td className="py-2 px-2 text-left"><span className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-[9px]">آمن</span></td>
                        </tr>
                        <tr>
                          <td className="py-2 px-2 font-medium text-gray-800">نسبة السيولة السريعة (Quick Ratio)</td>
                          <td className="py-2 px-2 text-center font-bold">1.2x</td>
                          <td className="py-2 px-2 text-center">0.9x</td>
                          <td className="py-2 px-2 text-center text-green-600">+0.3x</td>
                          <td className="py-2 px-2 text-left"><span className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-[9px]">ممتاز</span></td>
                        </tr>

                        {/* Efficiency */}
                        <tr className="bg-indigo-50/50 mt-2">
                          <td colSpan={5} className="py-2 px-2 font-bold text-indigo-900 pt-4">مؤشرات الكفاءة (Efficiency Ratios)</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-2 font-medium text-gray-800">معدل دوران المخزون (Inventory Turnover)</td>
                          <td className="py-2 px-2 text-center font-bold">6.5x</td>
                          <td className="py-2 px-2 text-center">7.2x</td>
                          <td className="py-2 px-2 text-center text-red-500">-0.7x</td>
                          <td className="py-2 px-2 text-left"><span className="bg-red-100 text-red-800 px-2 py-0.5 rounded text-[9px]">انتباه</span></td>
                        </tr>
                        <tr>
                          <td className="py-2 px-2 font-medium text-gray-800">فترة التحصيل (DSO)</td>
                          <td className="py-2 px-2 text-center font-bold">45 يوم</td>
                          <td className="py-2 px-2 text-center">52 يوم</td>
                          <td className="py-2 px-2 text-center text-green-600">-7 أيام</td>
                          <td className="py-2 px-2 text-left"><span className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-[9px]">تحسن ملحوظ</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="bg-indigo-50 border border-indigo-100 p-3 rounded text-[10px] md:text-[11px] text-indigo-800 font-medium">
                    <p className="flex items-start gap-1">
                      <span className="w-2 h-2 rounded-full bg-indigo-500 inline-block mt-1 shrink-0"></span>
                      <span>
                        <strong>الخلاصة التحليلية:</strong> تحسن ممتاز في السيولة (Current Ratio & Quick Ratio) بسبب تقليص فترة التحصيل (DSO) بمقدار 7 أيام. الانخفاض الطفيف في هامش صافي الربح ناتج عن زيادة المصاريف البيعية المؤقتة. انتباه مطلوب لتباطؤ دوران المخزون.
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
              هل تريد قراءة أوضح لأداء منشأتك المالي؟
            </h3>
            <p className="text-xs md:text-sm text-text-secondary mb-4 max-w-xl mx-auto leading-relaxed">
              تحليل معمق للنسب المالية والربحية والسيولة لمساعدتك على توجيه استثماراتك وخفض التكاليف.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-x-2 px-6 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs md:text-sm font-semibold rounded-xl transition-all shadow-sm duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span>ناقش احتياج منشأتك</span>
            </a>
          </div>

          {/* Related Article Guide Link */}
          <div className="mb-8 p-4 bg-primary/5 border border-primary/15 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs md:text-sm">
            <span className="text-text-secondary font-medium">
              💡 دليل تخصصي من المكتبة المالية: <a href="/blog/financial-analysis-key-ratios-business-owners" className="text-primary font-bold hover:underline">التحليل المالي وأهم النسب لأصحاب المنشآت</a>
            </span>
            <a href="/blog/financial-analysis-key-ratios-business-owners" className="text-primary font-semibold hover:underline shrink-0">
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
                href="/services/management-reports"
                className="p-3 bg-surface-subtle/50 hover:bg-surface-subtle border border-border-subtle rounded-lg text-xs md:text-sm font-medium text-text-primary hover:text-primary transition-all flex items-center justify-between"
              >
                <span>إعداد التقارير الإدارية</span>
                <span className="text-secondary text-base">←</span>
              </a>
              <a
                href="/services/budgeting"
                className="p-3 bg-surface-subtle/50 hover:bg-surface-subtle border border-border-subtle rounded-lg text-xs md:text-sm font-medium text-text-primary hover:text-primary transition-all flex items-center justify-between"
              >
                <span>إعداد الموازنات التقديرية</span>
                <span className="text-secondary text-base">←</span>
              </a>
              <a
                href="/services/financial-statements"
                className="p-3 bg-surface-subtle/50 hover:bg-surface-subtle border border-border-subtle rounded-lg text-xs md:text-sm font-medium text-text-primary hover:text-primary transition-all flex items-center justify-between"
              >
                <span>إعداد القوائم المالية المعتمدة</span>
                <span className="text-secondary text-base">←</span>
              </a>
            </div>
          </div>

        </div>
      </Container>
    </SectionWrapper>
  );
}
