import { useSEO } from '../../hooks/useSEO';
import SectionWrapper from '../../../components/SectionWrapper';
import Container from '../../../components/Container';
import { TYPOGRAPHY } from '../../lib/tokens';
import { MessageCircle } from 'lucide-react';
import PdfLeadMagnet from '../../components/PdfLeadMagnet';

const WHATSAPP_NUMBER = "966511294383";
const WHATSAPP_MESSAGE = "السلام عليكم، أرغب في مناقشة احتياج منشأتي في مجال التقارير الإدارية والمالية الدورية.";
const WHATSAPP_URL = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(WHATSAPP_MESSAGE);

export default function ManagementReportsPage() {
  const name = "التقارير الإدارية";
  const slug = "management-reports";
  const metaTitle = "إعداد التقارير الإدارية المالية للشركات | القائد للإدارة المالية";
  const metaDesc = "ابقَ على اطلاع دائم بأداء منشأتك عبر تقارير إدارية ولوحات قياس دقيقة تصمم خصيصاً لتمنح الإدارة العليا القدرة على اتخاذ قرارات سريعة وصائبة.";
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
              تساعد التقارير الإدارية (Management Reports) أصحاب الشركات والإدارات التنفيذية على متابعة أداء المنشأة بشكل مستمر واتخاذ القرارات بناءً على بيانات دقيقة بدلاً من التوقعات. فمن خلال عرض أهم المؤشرات المالية والتشغيلية بصورة واضحة، يمكنك معرفة أداء منشأتك، ومتابعة الأرباح والمصروفات، واكتشاف أي انحرافات قبل أن تؤثر على نتائج أعمالك.
            </p>

            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              ماذا تتضمن خدمة التقارير الإدارية؟
            </h2>
            <p>
              أقوم بإعداد تقارير إدارية مخصصة تتناسب مع طبيعة نشاط منشأتك، وتساعدك على متابعة الأداء المالي والتشغيلي بسهولة، وتشمل الخدمة:
            </p>

            <ul className="list-disc list-inside space-y-1 pr-4">
              <li>إعداد التقارير الإدارية الدورية (Management Reports).</li>
              <li>تصميم لوحات مؤشرات الأداء (Dashboards).</li>
              <li>قياس مؤشرات الأداء الرئيسية (KPIs).</li>
              <li>مقارنة الأداء الفعلي بالموازنة (Budget vs Actual Analysis).</li>
              <li>تحليل الإيرادات والمصروفات.</li>
              <li>متابعة الأرباح والتدفقات النقدية.</li>
              <li>إعداد تقارير مخصصة للإدارة العليا وفق احتياجات المنشأة.</li>
              <li>تقديم ملخصات مالية تدعم اتخاذ القرار.</li>
            </ul>

            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              لماذا تعد التقارير الإدارية مهمة؟
            </h2>
            <p>
              التقارير الإدارية تمنحك رؤية واضحة عن أداء منشأتك دون الحاجة إلى مراجعة جميع البيانات المحاسبية. فهي تساعد على متابعة النتائج بشكل دوري، واكتشاف نقاط القوة والضعف، وتقييم أداء الإدارات، واتخاذ قرارات أسرع وأكثر دقة اعتمادًا على معلومات مالية محدثة وموثوقة.
            </p>

            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              ابدأ بمتابعة أداء منشأتك
            </h2>
            <p>
              إذا كنت تبحث عن محاسب مالي يساعدك في إعداد التقارير الإدارية وتصميم لوحات مؤشرات الأداء (Dashboards) التي تدعم قراراتك، فأنا جاهز لتقديم تقارير احترافية تمنحك رؤية واضحة تساعدك على إدارة أعمالك بثقة.
            </p>
          </div>

          {/* PDF Lead Magnet Mockup */}
          <PdfLeadMagnet 
            title=""
            subtitle=""
            reportName="Branch_Performance_Analytics"
            whatsappUrl={WHATSAPP_URL}
            documentContent={
              <div className="w-full font-sans text-gray-800 bg-white">
                
                {/* Odoo-style Header */}
                <div className="border-t-[6px] border-[#714B67] pt-3 sm:pt-4 pb-3 flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-sm sm:text-xl font-bold text-[#714B67] mb-0.5 sm:mb-1">تحليل الأداء الشامل (Dashboard)</h2>
                    <span className="text-[9px] sm:text-xs text-gray-500 font-bold">شركة منشأة تجزئة وخدمات</span>
                  </div>
                  <div className="text-left text-[8px] sm:text-[11px] text-gray-500 space-y-0.5">
                    <div>التاريخ: <span className="font-mono text-gray-800">30/09/2026</span></div>
                    <div>العملة: <span className="font-mono text-gray-800">SAR</span></div>
                  </div>
                </div>

                {/* ERP KPI Grid (2x2 on Mobile) */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
                  {/* KPI 1 */}
                  <div className="bg-[#F9F9F9] p-2 sm:p-3 border-l-[3px] border-[#714B67] rounded-r-sm">
                    <div className="text-[9px] sm:text-xs text-gray-500 mb-0.5">إجمالي الإيرادات</div>
                    <div className="text-xs sm:text-base font-bold text-gray-900 font-mono">1,650,000</div>
                    <div className="text-[8px] sm:text-[10px] text-emerald-600 mt-1 flex items-center font-bold">▲ +12.4% (الربع السابق)</div>
                  </div>
                  
                  {/* KPI 2 */}
                  <div className="bg-[#F9F9F9] p-2 sm:p-3 border-l-[3px] border-[#017E84] rounded-r-sm">
                    <div className="text-[9px] sm:text-xs text-gray-500 mb-0.5">مجمل الربح</div>
                    <div className="text-xs sm:text-base font-bold text-gray-900 font-mono">948,000</div>
                    <div className="text-[8px] sm:text-[10px] text-emerald-600 mt-1 flex items-center font-bold">▲ +5.2% (تحسن هامش)</div>
                  </div>

                  {/* KPI 3 */}
                  <div className="bg-[#F9F9F9] p-2 sm:p-3 border-l-[3px] border-[#017E84] rounded-r-sm">
                    <div className="text-[9px] sm:text-xs text-gray-500 mb-0.5">صافي الربح التشغيلي</div>
                    <div className="text-xs sm:text-base font-bold text-gray-900 font-mono">653,000</div>
                    <div className="text-[8px] sm:text-[10px] text-emerald-600 mt-1 flex items-center font-bold">▲ +8.1% (نمو مستدام)</div>
                  </div>

                  {/* KPI 4 */}
                  <div className="bg-[#F9F9F9] p-2 sm:p-3 border-l-[3px] border-amber-500 rounded-r-sm">
                    <div className="text-[9px] sm:text-xs text-gray-500 mb-0.5">المصاريف التشغيلية</div>
                    <div className="text-xs sm:text-base font-bold text-gray-900 font-mono">295,000</div>
                    <div className="text-[8px] sm:text-[10px] text-amber-600 mt-1 flex items-center font-bold">▼ وفر إداري (-3.5%)</div>
                  </div>
                </div>

                {/* CSS Charts Section */}
                <div className="mb-4 sm:mb-6 border border-gray-100 rounded-sm p-2 sm:p-4 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
                  <h3 className="text-[10px] sm:text-sm font-bold text-gray-700 mb-3 border-b border-gray-100 pb-1.5">توزيع الإيرادات والربحية حسب الفروع (Visual Analytics)</h3>
                  <div className="space-y-3 sm:space-y-4">
                    {/* Branch 1 */}
                    <div>
                      <div className="flex justify-between text-[9px] sm:text-[11px] mb-1">
                        <span className="font-bold text-gray-800">فرع الرياض (الرئيسي)</span>
                        <span className="font-mono text-[#714B67] font-bold">51.5%</span>
                      </div>
                      <div className="w-full bg-gray-100 h-1.5 sm:h-2 rounded-full overflow-hidden flex">
                        <div className="bg-[#714B67] h-full" style={{ width: '51.5%' }}></div>
                      </div>
                    </div>
                    {/* Branch 2 */}
                    <div>
                      <div className="flex justify-between text-[9px] sm:text-[11px] mb-1">
                        <span className="font-bold text-gray-800">فرع جدة</span>
                        <span className="font-mono text-[#017E84] font-bold">25.5%</span>
                      </div>
                      <div className="w-full bg-gray-100 h-1.5 sm:h-2 rounded-full overflow-hidden flex">
                        <div className="bg-[#017E84] h-full" style={{ width: '25.5%' }}></div>
                      </div>
                    </div>
                    {/* Branch 3 */}
                    <div>
                      <div className="flex justify-between text-[9px] sm:text-[11px] mb-1">
                        <span className="font-bold text-gray-800">فرع الدمام</span>
                        <span className="font-mono text-emerald-600 font-bold">23.0%</span>
                      </div>
                      <div className="w-full bg-gray-100 h-1.5 sm:h-2 rounded-full overflow-hidden flex">
                        <div className="bg-emerald-600 h-full" style={{ width: '23.0%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ERP Data Table */}
                <div className="mb-4">
                  <h3 className="text-[10px] sm:text-sm font-bold text-gray-700 mb-2 border-b border-gray-100 pb-1.5">تحليل قائمة الدخل الموحدة (Income Statement)</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-right text-[8px] sm:text-[11px] border-collapse">
                      <thead>
                        <tr className="bg-[#F9F9F9] text-gray-600 border-y border-gray-200">
                          <th className="py-1.5 px-1 sm:p-2 font-normal">البند المحاسبي</th>
                          <th className="py-1.5 px-1 sm:p-2 font-normal text-center">الرياض</th>
                          <th className="py-1.5 px-1 sm:p-2 font-normal text-center">جدة</th>
                          <th className="py-1.5 px-1 sm:p-2 font-normal text-center">الدمام</th>
                          <th className="py-1.5 px-1 sm:p-2 font-bold text-gray-900 text-left">الإجمالي الموحد</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 font-mono text-[9px] sm:text-xs">
                        <tr className="hover:bg-gray-50">
                          <td className="py-1.5 px-1 sm:p-2 font-sans text-gray-800">إيرادات المبيعات</td>
                          <td className="py-1.5 px-1 sm:p-2 text-center text-gray-700">850,000</td>
                          <td className="py-1.5 px-1 sm:p-2 text-center text-gray-700">420,000</td>
                          <td className="py-1.5 px-1 sm:p-2 text-center text-gray-700">380,000</td>
                          <td className="py-1.5 px-1 sm:p-2 font-bold text-gray-900 text-left bg-gray-50/50">1,650,000</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-1.5 px-1 sm:p-2 font-sans text-gray-600">تكلفة المبيعات</td>
                          <td className="py-1.5 px-1 sm:p-2 text-center text-gray-500">(340,000)</td>
                          <td className="py-1.5 px-1 sm:p-2 text-center text-gray-500">(210,000)</td>
                          <td className="py-1.5 px-1 sm:p-2 text-center text-gray-500">(152,000)</td>
                          <td className="py-1.5 px-1 sm:p-2 font-bold text-gray-900 text-left bg-gray-50/50">(702,000)</td>
                        </tr>
                        <tr className="bg-gray-50/80 font-bold border-y border-gray-200">
                          <td className="py-1.5 px-1 sm:p-2 font-sans text-[#714B67]">مجمل الربح</td>
                          <td className="py-1.5 px-1 sm:p-2 text-center text-[#714B67]">510,000</td>
                          <td className="py-1.5 px-1 sm:p-2 text-center text-[#714B67]">210,000</td>
                          <td className="py-1.5 px-1 sm:p-2 text-center text-[#714B67]">228,000</td>
                          <td className="py-1.5 px-1 sm:p-2 text-[#714B67] text-left">948,000</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-1.5 px-1 sm:p-2 font-sans text-gray-600">المصاريف التشغيلية</td>
                          <td className="py-1.5 px-1 sm:p-2 text-center text-gray-500">(120,000)</td>
                          <td className="py-1.5 px-1 sm:p-2 text-center text-gray-500">(95,000)</td>
                          <td className="py-1.5 px-1 sm:p-2 text-center text-gray-500">(80,000)</td>
                          <td className="py-1.5 px-1 sm:p-2 font-bold text-gray-900 text-left bg-gray-50/50">(295,000)</td>
                        </tr>
                        <tr className="font-bold border-t-[3px] border-[#017E84]">
                          <td className="py-2 px-1 sm:p-2 font-sans text-[#017E84]">صافي الربح التشغيلي</td>
                          <td className="py-2 px-1 sm:p-2 text-center text-[#017E84]">390,000</td>
                          <td className="py-2 px-1 sm:p-2 text-center text-[#017E84]">115,000</td>
                          <td className="py-2 px-1 sm:p-2 text-center text-[#017E84]">148,000</td>
                          <td className="py-2 px-1 sm:p-2 text-[#017E84] text-left text-[10px] sm:text-sm">653,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Insight Box */}
                <div className="mt-4 sm:mt-6 bg-[#F9F9F9] border-r-4 border-[#017E84] p-2 sm:p-3 text-[9px] sm:text-xs">
                  <strong className="block font-bold text-gray-800 mb-1">ملاحظة النظام (Auto-Insight):</strong>
                  <span className="text-gray-600 leading-relaxed text-justify block">
                    مؤشر الربحية لفرع جدة أقل من المعدل المعياري بنسبة 4.2% بسبب ارتفاع التكاليف المباشرة. يُنصح بمراجعة عقود التوريد لتحسين هامش المساهمة خلال الربع القادم.
                  </span>
                </div>

              </div>
            }
          />

          {/* Service CTA Card */}
          <div className="my-8 p-6 bg-surface-subtle/60 border border-border-subtle rounded-2xl text-center">
            <h3 className="text-base md:text-lg font-bold text-text-primary mb-2">
              هل تحتاج إلى تقارير مالية تساعدك في متابعة أداء منشأتك؟
            </h3>
            <p className="text-xs md:text-sm text-text-secondary mb-4 max-w-xl mx-auto leading-relaxed">
              تقارير إدارية ولوحات مؤشرات دورية مصممة خصيصاً لمساعدة الإدارة التنفيذية على اتخاذ القرارات اليومية.
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
              💡 دليل تخصصي من المكتبة المالية: <a href="/blog/7-signs-company-needs-remote-financial-management" className="text-primary font-bold hover:underline">7 علامات لحاجة شركتك لإدارة مالية عن بعد</a>
            </span>
            <a href="/blog/7-signs-company-needs-remote-financial-management" className="text-primary font-semibold hover:underline shrink-0">
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
                href="/services/financial-analysis"
                className="p-3 bg-surface-subtle/50 hover:bg-surface-subtle border border-border-subtle rounded-lg text-xs md:text-sm font-medium text-text-primary hover:text-primary transition-all flex items-center justify-between"
              >
                <span>التحليل المالي وتقييم الأداء</span>
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
                href="/services/virtual-cfo"
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
