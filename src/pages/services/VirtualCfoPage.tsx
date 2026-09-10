import { useSEO } from '../../hooks/useSEO';
import SectionWrapper from '../../../components/SectionWrapper';
import Container from '../../../components/Container';
import { TYPOGRAPHY } from '../../lib/tokens';
import { MessageCircle } from 'lucide-react';
import PdfLeadMagnet from '../../components/PdfLeadMagnet';

const WHATSAPP_NUMBER = "966511294383";
const WHATSAPP_MESSAGE = "السلام عليكم، أرغب في مناقشة احتياج منشأتي لخدمة المدير المالي عن بعد (Virtual CFO).";
const WHATSAPP_URL = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(WHATSAPP_MESSAGE);

export default function VirtualCfoPage() {
  const name = "المدير المالي عن بعد";
  const slug = "virtual-cfo";
  const metaTitle = "المدير المالي عن بعد (Virtual CFO) | القائد للإدارة المالية";
  const metaDesc = "احصل على خبرات القيادة المالية الاستراتيجية بتكلفة مرنة. خدمة المدير المالي عن بعد تدعم نمو منشأتك وتوفر لك استشارات مالية متقدمة لقراراتك الحاسمة.";
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
              تمنحك خدمة المدير المالي عن بعد (Virtual CFO) خبرة مدير مالي محترف دون الحاجة إلى تعيين مدير مالي بدوام كامل. تساعد هذه الخدمة أصحاب الشركات على تحسين الأداء المالي، وبناء خطط مالية واضحة، وتحليل النتائج، واتخاذ قرارات استراتيجية مبنية على بيانات دقيقة، مع الإشراف على جميع الجوانب المالية للمنشأة.
            </p>

            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              ماذا تتضمن خدمة المدير المالي عن بعد؟
            </h2>
            <p>
              أعمل معك كشريك مالي يساعدك على تطوير الأداء المالي لمنشأتك، وتشمل الخدمة:
            </p>

            <ul className="list-disc list-inside space-y-1 pr-4">
              <li>إعداد الخطط والاستراتيجيات المالية (Financial Strategy).</li>
              <li>إعداد الموازنات التقديرية (Budgeting).</li>
              <li>تحليل الأداء المالي ومؤشرات الأداء (Financial Analysis & KPIs).</li>
              <li>إدارة التدفقات النقدية (Cash Flow Management).</li>
              <li>إعداد التقارير الإدارية (Management Reports).</li>
              <li>الإشراف على فريق المحاسبة ومراجعة أعماله.</li>
              <li>دعم الإدارة في اتخاذ القرارات المالية والاستثمارية.</li>
              <li>إعداد ملفات التمويل والتعامل مع البنوك والمستثمرين.</li>
              <li>متابعة الربحية وخطط النمو والتوسع.</li>
              <li>تقديم استشارات مالية دورية للإدارة العليا.</li>
            </ul>

            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              لماذا تحتاج منشأتك إلى مدير مالي؟
            </h2>
            <p>
              مع نمو الأعمال تصبح القرارات المالية أكثر تعقيدًا، ويصبح وجود مدير مالي ضرورة لضمان التخطيط السليم وإدارة المخاطر وتحسين الربحية. وتوفر خدمة Virtual CFO الخبرة المالية التي تحتاجها منشأتك دون تحمل تكلفة توظيف مدير مالي بدوام كامل، مما يجعلها خيارًا مناسبًا للشركات الصغيرة والمتوسطة والشركات في مرحلة النمو.
            </p>

            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              ابدأ ببناء إدارة مالية أكثر كفاءة
            </h2>
            <p>
              إذا كنت تبحث عن مدير مالي عن بعد (Virtual CFO) يساعدك في التخطيط المالي، وتحليل الأداء، وإدارة السيولة، ودعم قرارات الإدارة، فأنا جاهز للعمل معك كشريك مالي يساعدك على بناء نظام مالي قوي يدعم نمو منشأتك واستدامة أعمالها.
            </p>
          </div>

          {/* PDF Lead Magnet Mockup - CFO Dashboard */}
          <PdfLeadMagnet 
            title=""
            subtitle=""
            reportName="CFO_Cashflow_Forecast"
            whatsappUrl={WHATSAPP_URL}
            documentContent={
              <div className="w-full font-sans text-gray-800 bg-white">
                
                {/* Odoo-style Header */}
                <div className="border-t-[6px] border-[#3B2C35] pt-3 sm:pt-4 pb-3 flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-sm sm:text-xl font-bold text-[#3B2C35] mb-0.5 sm:mb-1">لوحة تحكم المدير المالي (CFO Dashboard)</h2>
                    <span className="text-[9px] sm:text-xs text-gray-500 font-bold">التدفقات النقدية والتنبؤ المالي (Cash Flow Forecast)</span>
                  </div>
                  <div className="text-left text-[8px] sm:text-[11px] text-gray-500 space-y-0.5">
                    <div>تاريخ التقرير: <span className="font-mono text-gray-800">30/09/2026</span></div>
                    <div>فترة التنبؤ: <span className="font-mono text-gray-800">Q4 2026</span></div>
                  </div>
                </div>

                {/* ERP KPI Grid (2x2 on Mobile) */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
                  {/* KPI 1 */}
                  <div className="bg-[#F9F9F9] p-2 sm:p-3 border-l-[3px] border-[#017E84] rounded-r-sm">
                    <div className="text-[9px] sm:text-xs text-gray-500 mb-0.5">الرصيد النقدي المتاح</div>
                    <div className="text-xs sm:text-base font-bold text-gray-900 font-mono">1,240,500 <span className="text-[8px] sm:text-[10px] text-gray-500 font-sans">SAR</span></div>
                    <div className="text-[8px] sm:text-[10px] text-emerald-600 mt-1 flex items-center font-bold">▲ يغطي 4.5 أشهر تشغيلية</div>
                  </div>
                  
                  {/* KPI 2 */}
                  <div className="bg-[#F9F9F9] p-2 sm:p-3 border-l-[3px] border-[#714B67] rounded-r-sm">
                    <div className="text-[9px] sm:text-xs text-gray-500 mb-0.5">معدل حرق النقد الشهري (Burn Rate)</div>
                    <div className="text-xs sm:text-base font-bold text-gray-900 font-mono">275,000 <span className="text-[8px] sm:text-[10px] text-gray-500 font-sans">SAR</span></div>
                    <div className="text-[8px] sm:text-[10px] text-emerald-600 mt-1 flex items-center font-bold">▼ انخفاض 12% عن الربع السابق</div>
                  </div>

                  {/* KPI 3 */}
                  <div className="bg-[#F9F9F9] p-2 sm:p-3 border-l-[3px] border-amber-500 rounded-r-sm">
                    <div className="text-[9px] sm:text-xs text-gray-500 mb-0.5">أيام التحصيل (DSO)</div>
                    <div className="text-xs sm:text-base font-bold text-gray-900 font-mono">42 <span className="text-[8px] sm:text-[10px] text-gray-500 font-sans">يوماً</span></div>
                    <div className="text-[8px] sm:text-[10px] text-amber-600 mt-1 flex items-center font-bold">● يحتاج تسريع دورة التحصيل</div>
                  </div>

                  {/* KPI 4 */}
                  <div className="bg-[#F9F9F9] p-2 sm:p-3 border-l-[3px] border-[#017E84] rounded-r-sm">
                    <div className="text-[9px] sm:text-xs text-gray-500 mb-0.5">العائد على الاستثمار (ROI)</div>
                    <div className="text-xs sm:text-base font-bold text-gray-900 font-mono">18.4%</div>
                    <div className="text-[8px] sm:text-[10px] text-emerald-600 mt-1 flex items-center font-bold">▲ أعلى من المستهدف بـ 3.4%</div>
                  </div>
                </div>

                {/* CSS Charts Section: Cash In vs Cash Out Trend */}
                <div className="mb-4 sm:mb-6 border border-gray-100 rounded-sm p-2 sm:p-4 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
                  <h3 className="text-[10px] sm:text-sm font-bold text-gray-700 mb-3 border-b border-gray-100 pb-1.5">تحليل التدفق النقدي التشغيلي - الربع الثالث (Operating Cash Flow)</h3>
                  <div className="flex items-end h-20 sm:h-28 gap-2 sm:gap-4 mt-4 px-2">
                    {/* Month 1 */}
                    <div className="flex-1 flex justify-center items-end gap-1 relative group">
                      <div className="w-1/2 bg-[#017E84] rounded-t-sm" style={{ height: '70%' }}></div>
                      <div className="w-1/2 bg-[#714B67] rounded-t-sm" style={{ height: '40%' }}></div>
                      <span className="absolute -bottom-5 text-[8px] sm:text-[10px] font-bold text-gray-600">يوليو</span>
                    </div>
                    {/* Month 2 */}
                    <div className="flex-1 flex justify-center items-end gap-1 relative group">
                      <div className="w-1/2 bg-[#017E84] rounded-t-sm" style={{ height: '60%' }}></div>
                      <div className="w-1/2 bg-[#714B67] rounded-t-sm" style={{ height: '55%' }}></div>
                      <span className="absolute -bottom-5 text-[8px] sm:text-[10px] font-bold text-gray-600">أغسطس</span>
                    </div>
                    {/* Month 3 */}
                    <div className="flex-1 flex justify-center items-end gap-1 relative group">
                      <div className="w-1/2 bg-[#017E84] rounded-t-sm" style={{ height: '90%' }}></div>
                      <div className="w-1/2 bg-[#714B67] rounded-t-sm" style={{ height: '45%' }}></div>
                      <span className="absolute -bottom-5 text-[8px] sm:text-[10px] font-bold text-gray-600">سبتمبر</span>
                    </div>
                  </div>
                  <div className="flex justify-center gap-4 mt-8 pt-2 border-t border-gray-50 text-[8px] sm:text-[10px]">
                    <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#017E84] rounded-sm"></div><span>المقبوضات (Cash In)</span></div>
                    <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#714B67] rounded-sm"></div><span>المدفوعات (Cash Out)</span></div>
                  </div>
                </div>

                {/* ERP Data Table - Cash Flow Forecast */}
                <div className="mb-4">
                  <h3 className="text-[10px] sm:text-sm font-bold text-gray-700 mb-2 border-b border-gray-100 pb-1.5">التنبؤ المالي للربع القادم (Q4 Forecast)</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-right text-[8px] sm:text-[11px] border-collapse">
                      <thead>
                        <tr className="bg-[#F9F9F9] text-gray-600 border-y border-gray-200">
                          <th className="py-1.5 px-1 sm:p-2 font-normal">البيان المالي</th>
                          <th className="py-1.5 px-1 sm:p-2 font-normal text-center">أكتوبر (تقديري)</th>
                          <th className="py-1.5 px-1 sm:p-2 font-normal text-center">نوفمبر (تقديري)</th>
                          <th className="py-1.5 px-1 sm:p-2 font-normal text-center">ديسمبر (تقديري)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 font-mono text-[9px] sm:text-xs">
                        <tr className="hover:bg-gray-50">
                          <td className="py-1.5 px-1 sm:p-2 font-sans text-gray-800">رصيد أول المدة</td>
                          <td className="py-1.5 px-1 sm:p-2 text-center text-gray-700">1,240,500</td>
                          <td className="py-1.5 px-1 sm:p-2 text-center text-gray-700">1,390,500</td>
                          <td className="py-1.5 px-1 sm:p-2 text-center text-gray-700">1,485,500</td>
                        </tr>
                        <tr className="hover:bg-gray-50 text-emerald-700 bg-emerald-50/30">
                          <td className="py-1.5 px-1 sm:p-2 font-sans">إجمالي المقبوضات النقدية</td>
                          <td className="py-1.5 px-1 sm:p-2 text-center">+ 450,000</td>
                          <td className="py-1.5 px-1 sm:p-2 text-center">+ 380,000</td>
                          <td className="py-1.5 px-1 sm:p-2 text-center">+ 520,000</td>
                        </tr>
                        <tr className="hover:bg-gray-50 text-red-700 bg-red-50/30">
                          <td className="py-1.5 px-1 sm:p-2 font-sans">إجمالي المدفوعات التشغيلية</td>
                          <td className="py-1.5 px-1 sm:p-2 text-center">- (300,000)</td>
                          <td className="py-1.5 px-1 sm:p-2 text-center">- (285,000)</td>
                          <td className="py-1.5 px-1 sm:p-2 text-center">- (310,000)</td>
                        </tr>
                        <tr className="font-bold border-t-[3px] border-[#3B2C35]">
                          <td className="py-2 px-1 sm:p-2 font-sans text-[#3B2C35]">رصيد النقد المتوقع (آخر المدة)</td>
                          <td className="py-2 px-1 sm:p-2 text-center text-[#3B2C35]">1,390,500</td>
                          <td className="py-2 px-1 sm:p-2 text-center text-[#3B2C35]">1,485,500</td>
                          <td className="py-2 px-1 sm:p-2 text-center text-[#3B2C35]">1,695,500</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* CFO Actionable Advice */}
                <div className="mt-4 sm:mt-6 bg-[#F9F9F9] border-r-4 border-[#3B2C35] p-2 sm:p-3 text-[9px] sm:text-xs">
                  <strong className="block font-bold text-gray-800 mb-1">توجيهات المدير المالي (Strategic Action):</strong>
                  <span className="text-gray-600 leading-relaxed text-justify block">
                    يوجد فائض نقدي متوقع بقيمة 450,000 ريال بحلول نهاية العام لا يحقق عائداً. نوصي بتخصيص 50% منه في ودائع مرابحة قصيرة الأجل (3 أشهر)، وتوجيه 50% لتمويل حملة المبيعات للربع الأول بدلاً من استخدام السحب على المكشوف.
                  </span>
                </div>

              </div>
            }
          />

          {/* Service CTA Card */}
          <div className="my-8 p-6 bg-surface-subtle/60 border border-border-subtle rounded-2xl text-center">
            <h3 className="text-base md:text-lg font-bold text-text-primary mb-2">
              هل تحتاج إلى إدارة مالية استراتيجية دون توظيف مدير مالي بدوام كامل؟
            </h3>
            <p className="text-xs md:text-sm text-text-secondary mb-4 max-w-xl mx-auto leading-relaxed">
              استفد من خبرة المدير المالي عن بعد لبناء الاستراتيجيات المالية وتحسين الربحية بكفاءة وتكلفة مرنة.
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
              💡 دليل تخصصي من المكتبة المالية: <a href="/blog/what-is-virtual-cfo-and-when-needed/" className="text-primary font-bold hover:underline">ما هو المدير المالي عن بعد Virtual CFO</a>
            </span>
            <a href="/blog/what-is-virtual-cfo-and-when-needed/" className="text-primary font-semibold hover:underline shrink-0">
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
                href="/services/budgeting/"
                className="p-3 bg-surface-subtle/50 hover:bg-surface-subtle border border-border-subtle rounded-lg text-xs md:text-sm font-medium text-text-primary hover:text-primary transition-all flex items-center justify-between"
              >
                <span>إعداد الموازنات التقديرية</span>
                <span className="text-secondary text-base">←</span>
              </a>
              <a
                href="/services/cash-flow/"
                className="p-3 bg-surface-subtle/50 hover:bg-surface-subtle border border-border-subtle rounded-lg text-xs md:text-sm font-medium text-text-primary hover:text-primary transition-all flex items-center justify-between"
              >
                <span>إدارة التدفقات النقدية والسيولة</span>
                <span className="text-secondary text-base">←</span>
              </a>
              <a
                href="/services/financial-analysis/"
                className="p-3 bg-surface-subtle/50 hover:bg-surface-subtle border border-border-subtle rounded-lg text-xs md:text-sm font-medium text-text-primary hover:text-primary transition-all flex items-center justify-between"
              >
                <span>التحليل المالي وتقييم الأداء</span>
                <span className="text-secondary text-base">←</span>
              </a>
            </div>
          </div>

        </div>
      </Container>
    </SectionWrapper>
  );
}
