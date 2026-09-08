import { useSEO } from '../../hooks/useSEO';
import SectionWrapper from '../../../components/SectionWrapper';
import Container from '../../../components/Container';
import { TYPOGRAPHY } from '../../lib/tokens';
import { MessageCircle } from 'lucide-react';
import PdfLeadMagnet from '../../components/PdfLeadMagnet';

const WHATSAPP_NUMBER = "966511294383";
const WHATSAPP_MESSAGE = "السلام عليكم، أرغب في مناقشة احتياج منشأتي في مجال إعداد الموازنات التقديرية والتخطيط المالي.";
const WHATSAPP_URL = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(WHATSAPP_MESSAGE);

export default function BudgetingPage() {
  const name = "إعداد الموازنات";
  const slug = "budgeting";
  const metaTitle = "إعداد الموازنات التقديرية والتخطيط المالي | القائد للإدارة المالية";
  const metaDesc = "خطط لنجاحك المالي بثقة. خدمة إعداد الموازنات التقديرية تساعدك على وضع أهداف مالية واضحة ومراقبة الانحرافات لضمان تحقيق رؤية منشأتك.";
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
              تساعد الموازنات التقديرية (Budgeting) الشركات على التخطيط المالي وتحديد الإيرادات والمصروفات المتوقعة قبل بداية الفترة المالية. ومن خلال إعداد موازنة دقيقة، تستطيع متابعة أداء منشأتك، وإدارة مواردها بكفاءة، ومقارنة النتائج الفعلية بالمستهدف، مما يساعد على اتخاذ قرارات مالية أكثر دقة وتحقيق أهداف النمو.
            </p>

            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              ماذا تتضمن خدمة إعداد الموازنات؟
            </h2>
            <p>
              أقوم بإعداد موازنات مالية تتناسب مع طبيعة نشاط منشأتك، مع الاعتماد على بياناتك المالية وخططك المستقبلية، وتشمل الخدمة:
            </p>

            <ul className="list-disc list-inside space-y-1 pr-4">
              <li>إعداد الموازنة التشغيلية (Operating Budget).</li>
              <li>إعداد الموازنة النقدية (Cash Budget).</li>
              <li>إعداد موازنة الإيرادات والمصروفات.</li>
              <li>إعداد موازنة التدفقات النقدية (Cash Flow Forecast).</li>
              <li>إعداد الموازنة الرأسمالية (Capital Budget).</li>
              <li>مقارنة الأداء الفعلي بالموازنة (Budget vs Actual Analysis).</li>
              <li>تحليل الانحرافات (Variance Analysis).</li>
              <li>تقديم تقارير تساعد على متابعة تنفيذ الموازنة واتخاذ القرارات.</li>
            </ul>

            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              لماذا تعد الموازنة مهمة لمنشأتك؟
            </h2>
            <p>
              الموازنة ليست مجرد توقع للأرقام، بل هي أداة تساعدك على التخطيط للمستقبل، والتحكم في المصروفات، وإدارة السيولة، وتحديد الأهداف المالية بشكل واقعي. كما تمنحك القدرة على اكتشاف الانحرافات مبكرًا، واتخاذ الإجراءات المناسبة قبل أن تؤثر على نتائج أعمالك.
            </p>

            <h2 className="text-lg font-bold text-primary mt-6 mb-2 border-r-2 border-primary pr-3">
              ابدأ بالتخطيط المالي لمنشأتك
            </h2>
            <p>
              إذا كنت تبحث عن محاسب مالي يساعدك في إعداد الموازنات التقديرية وتحليل الأداء المالي ومتابعة تنفيذ الخطط، فأنا جاهز لتقديم خدمة احترافية تساعدك على إدارة موارد منشأتك بكفاءة واتخاذ قرارات مبنية على بيانات مالية دقيقة.
            </p>
          </div>

          <PdfLeadMagnet 
            title="" 
            subtitle="" 
            reportName="تقرير متابعة الموازنة وتحليل الانحرافات" 
            whatsappUrl={WHATSAPP_URL}
            documentContent={
              <div className="flex flex-col h-full bg-white text-gray-800 text-[10px] md:text-xs font-sans">
                {/* PDF Header */}
                <div className="border-b-2 border-gray-800 pb-3 mb-4 flex justify-between items-end">
                  <div>
                    <h2 className="text-lg md:text-xl font-bold text-gray-900 font-arabic mb-1">Budget vs. Actual Report</h2>
                    <p className="text-gray-500">الربع الثالث - Q3 2024</p>
                  </div>
                  <div className="text-left text-[9px] md:text-[10px] text-gray-400">
                    <p>Department: Corporate</p>
                    <p>Currency: SAR</p>
                  </div>
                </div>

                {/* Table Content */}
                <div className="flex-grow">
                  <div className="overflow-x-auto">
                    <table className="w-full text-right mb-6 border-collapse min-w-[500px]">
                      <thead>
                        <tr className="bg-gray-100 border-y border-gray-300">
                          <th className="py-2 px-2 font-semibold text-gray-700">البند (Item)</th>
                          <th className="py-2 px-2 font-semibold text-gray-700 w-24 text-left">الفعلي (Actual)</th>
                          <th className="py-2 px-2 font-semibold text-gray-700 w-24 text-left">المعتمد (Budget)</th>
                          <th className="py-2 px-2 font-semibold text-gray-700 w-24 text-left">الانحراف (Variance)</th>
                          <th className="py-2 px-2 font-semibold text-gray-700 w-16 text-center">%</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {/* Revenues */}
                        <tr className="bg-gray-50/50">
                          <td colSpan={5} className="py-2 px-2 font-bold text-gray-900">الإيرادات (Revenues)</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-2 font-medium text-gray-800">إيرادات العقود</td>
                          <td className="py-2 px-2 text-left">1,250,000</td>
                          <td className="py-2 px-2 text-left">1,100,000</td>
                          <td className="py-2 px-2 text-left text-green-600">+150,000</td>
                          <td className="py-2 px-2 text-center text-green-600 bg-green-50">+13.6%</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-2 font-medium text-gray-800">إيرادات استشارية</td>
                          <td className="py-2 px-2 text-left">280,000</td>
                          <td className="py-2 px-2 text-left">300,000</td>
                          <td className="py-2 px-2 text-left text-red-500">-20,000</td>
                          <td className="py-2 px-2 text-center text-red-500 bg-red-50">-6.6%</td>
                        </tr>
                        <tr className="border-t border-gray-300 bg-gray-50">
                          <td className="py-2 px-2 font-bold text-gray-900">إجمالي الإيرادات</td>
                          <td className="py-2 px-2 text-left font-bold text-gray-900">1,530,000</td>
                          <td className="py-2 px-2 text-left font-bold text-gray-900">1,400,000</td>
                          <td className="py-2 px-2 text-left font-bold text-green-600">+130,000</td>
                          <td className="py-2 px-2 text-center font-bold text-green-600">+9.2%</td>
                        </tr>
                        
                        {/* Expenses */}
                        <tr className="bg-gray-50/50 mt-2">
                          <td colSpan={5} className="py-2 px-2 font-bold text-gray-900 pt-4">المصروفات (Expenses)</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-2 font-medium text-gray-800">تكلفة المبيعات (COGS)</td>
                          <td className="py-2 px-2 text-left">510,000</td>
                          <td className="py-2 px-2 text-left">480,000</td>
                          <td className="py-2 px-2 text-left text-red-500">(30,000)</td>
                          <td className="py-2 px-2 text-center text-red-500 bg-red-50">+6.2%</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-2 font-medium text-gray-800">الرواتب والأجور</td>
                          <td className="py-2 px-2 text-left">320,000</td>
                          <td className="py-2 px-2 text-left">325,000</td>
                          <td className="py-2 px-2 text-left text-green-600">5,000</td>
                          <td className="py-2 px-2 text-center text-green-600 bg-green-50">-1.5%</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-2 font-medium text-gray-800">التسويق والإعلانات</td>
                          <td className="py-2 px-2 text-left">95,000</td>
                          <td className="py-2 px-2 text-left">80,000</td>
                          <td className="py-2 px-2 text-left text-red-500">(15,000)</td>
                          <td className="py-2 px-2 text-center text-red-500 bg-red-50">+18.7%</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr className="bg-gray-100 border-y-2 border-gray-800 font-bold">
                          <td className="py-3 px-2 text-gray-900">صافي الربح التشغيلي</td>
                          <td className="py-3 px-2 text-left">605,000</td>
                          <td className="py-3 px-2 text-left">515,000</td>
                          <td className="py-3 px-2 text-left text-green-700">+90,000</td>
                          <td className="py-3 px-2 text-center text-green-700">+17.4%</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  
                  <div className="bg-amber-50 border border-amber-100 p-3 rounded text-[10px] md:text-[11px] text-amber-800 font-medium">
                    <p className="flex items-start gap-1">
                      <span className="w-2 h-2 rounded-full bg-amber-500 inline-block mt-1 shrink-0"></span>
                      <span>
                        <strong>توصية الإدارة المالية:</strong> تجاوز ملحوظ في بند التسويق بنسبة 18.7%، يقابله زيادة في الإيرادات بنسبة 9.2%. يُنصح بمراجعة العائد على الاستثمار للحملات الإعلانية (ROAS) في الربع القادم.
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
              هل تريد بناء موازنة مالية واقعية لمنشأتك؟
            </h3>
            <p className="text-xs md:text-sm text-text-secondary mb-4 max-w-xl mx-auto leading-relaxed">
              تخطيط دقيق للإيرادات والمصروفات ومراقبة الانحرافات لضمان تحقيق الأهداف المالية المستهدفة.
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
              💡 دليل تخصصي من المكتبة المالية: <a href="/blog/budgeting-planning-revenues-expenses" className="text-primary font-bold hover:underline">الموازنات التقديرية والتخطيط المالي</a>
            </span>
            <a href="/blog/budgeting-planning-revenues-expenses" className="text-primary font-semibold hover:underline shrink-0">
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
                href="/services/cash-flow"
                className="p-3 bg-surface-subtle/50 hover:bg-surface-subtle border border-border-subtle rounded-lg text-xs md:text-sm font-medium text-text-primary hover:text-primary transition-all flex items-center justify-between"
              >
                <span>إدارة التدفقات النقدية والسيولة</span>
                <span className="text-secondary text-base">←</span>
              </a>
              <a
                href="/services/financial-analysis"
                className="p-3 bg-surface-subtle/50 hover:bg-surface-subtle border border-border-subtle rounded-lg text-xs md:text-sm font-medium text-text-primary hover:text-primary transition-all flex items-center justify-between"
              >
                <span>التحليل المالي وتقييم الأداء</span>
                <span className="text-secondary text-base">←</span>
              </a>
              <a
                href="/services/management-reports"
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
