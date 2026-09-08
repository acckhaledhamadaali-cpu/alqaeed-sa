import { useSEO } from '../../hooks/useSEO';
import SectionWrapper from '../../../components/SectionWrapper';
import Container from '../../../components/Container';
import { TYPOGRAPHY } from '../../lib/tokens';
import { MessageCircle, CheckCircle2, AlertTriangle, Users, Briefcase, FileCheck, ArrowRight } from 'lucide-react';
import PdfLeadMagnet from '../../components/PdfLeadMagnet';
import ServiceFaqAccordion, { FAQItem } from '../../components/ServiceFaqAccordion';
import SupportedSystemsSection from '../../components/SupportedSystemsSection';

const WHATSAPP_NUMBER = "966511294383";
const WHATSAPP_MESSAGE = "السلام عليكم، أرغب في مناقشة احتياج منشأتي في مجال إدارة التدفقات النقدية وتخطيط السيولة.";
const WHATSAPP_URL = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(WHATSAPP_MESSAGE);

export default function CashFlowPage() {
  const name = "إدارة التدفقات النقدية";
  const slug = "cash-flow";
  const metaTitle = "إدارة وتوقع التدفقات النقدية للشركات وحماية السيولة | القائد";
  const metaDesc = "الربح على الورق لا يحمي المنشأة من التعثر. نقدم نظام التوقع النقدي الأسبوعي (13-Week Cash Flow) لضمان وفرة السيولة لسداد الرواتب والموردين في مواعيدها.";
  const url = "https://alqaeed-sa.pages.dev/services/" + slug;

  const faqs: FAQItem[] = [
    {
      question: "ما الفرق بين قائمة التدفقات النقدية المحاسبية ونموذج التوقع النقدي التشغيلي؟",
      answer: "قائمة التدفقات النقدية المحاسبية هي تقرير تاريخي يوضح أين ذهبت السيولة في الفترة الماضية. أما نموذج التوقع النقدي (Cash Flow Forecast) فهو أداة مستقبلية حية تخبرك أسبوعاً بأسبوع: كم سيدخل حسابك وكم سيخرج منه خلال الأسابيع القادمة لتفادي أي عجز قبل حدوثه."
    },
    {
      question: "كيف يساعدنا هذا النظام على حل تأخر تحصيل مستحقاتنا من العملاء؟",
      answer: "نقوم ببناء جدول تفصيلي لأعمار الديون (Aging Report)، ووضع سياسة ائتمان وتحصيل حازمة تتضمن حوافز للتعجيل بالدفع، وتذكيرات منظمة تضمن دخول النقد لحسابك في الوقت المحدد."
    },
    {
      question: "ماذا نفعل إذا أظهر نموذج التوقع عجزاً في السيولة متوقعاً بعد 4 أسابيع؟",
      answer: "هذه هي الفائدة الذهبية للنظام الاستباقي: بدلاً من أن تتفاجأ بالعجز يوم سداد الالتزام، يمنحك التوقع المبكر مهلة كافية للتفاوض مع موردين، أو تسريع تحصيل فاتورة كبرى، أو ترتيب تمويل قصير الأجل بشروط مريحة."
    },
    {
      question: "ما هو نموذج الـ 13 أسبوعاً (13-Week Forecast) ولماذا هو المعيار الأفضل عالمياً؟",
      answer: "يمثل ربعاً مالياً كاملاً، وهو المدى الزمني المثالي الذي يمنح الإدارة رؤية واضحة جداً ودقيقة للسيولة، كافية لاتخاذ قرارات تشغيلية واستثمارية دون الدخول في فرضيات بعيدة وغير مؤكدة."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": url + "/#webpage",
        "url": url,
        "name": metaTitle,
        "description": metaDesc,
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
        "@type": "FAQPage",
        "@id": url + "/#faq",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
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

          <h1 className={`${TYPOGRAPHY.heading.h1} font-bold text-text-primary mb-3 leading-tight`}>
            إدارة وتوقع التدفقات النقدية
          </h1>
          <p className="text-sm md:text-base text-text-secondary mb-6 leading-relaxed">
            السيولة هي شريان الحياة لمنشأتك. نبني لك نظام رقابة وتوقع نقدي أسبوعي يحميك من صدمات الرواتب وعجز الحساب البنكي.
          </p>
          <div className="w-16 h-1 bg-primary mb-8 rounded-full"></div>

          {/* 1. المشكلة التي يحلها الحل */}
          <div className="mb-8 p-5 sm:p-6 bg-amber-50/70 border border-amber-200/80 rounded-2xl">
            <div className="flex items-center gap-2 mb-3 text-amber-900">
              <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0" aria-hidden="true" />
              <h2 className="text-base md:text-lg font-bold">
                المشكلة: أرباح ممتازة على الورق.. وخزينة خالية وقت سداد الرواتب!
              </h2>
            </div>
            <p className="text-xs md:text-sm text-amber-950 leading-relaxed mb-3">
              تشير الدراسات المالية إلى أن أغلب المنشآت التي تفلس لا تفلس بسبب قلة الأرباح الدفترية، بل بسبب جفاف السيولة المفاجئ:
            </p>
            <ul className="space-y-1.5 text-xs md:text-sm text-amber-900 list-disc list-inside pr-1">
              <li>تراكم الفواتير غير المحصلة لدى العملاء لشهور طويلة بينما تلتزم أنت بمصاريف شهرية فورية.</li>
              <li>قدوم مواعيد سداد الموردين أو الرواتب أو الإيجارات فجأة دون وجود رصيد كافٍ في الحساب البنكي.</li>
              <li>الاضطرار للاقتراض بتكاليف مرتفعة أو بيع أصول لتغطية فجوات سيولة كان يمكن التنبؤ بها وتفاديها مبكراً.</li>
            </ul>
          </div>

          {/* 2. لمن هذه الخدمة */}
          <div className="mb-8 p-5 sm:p-6 bg-surface-subtle/50 border border-border-subtle rounded-2xl">
            <div className="flex items-center gap-2 mb-3 text-text-primary">
              <Users className="w-5 h-5 text-secondary shrink-0" aria-hidden="true" />
              <h2 className="text-base md:text-lg font-bold">
                لمن هذه الخدمة؟
              </h2>
            </div>
            <p className="text-xs md:text-sm text-text-secondary mb-4 leading-relaxed">
              تحتاجها كل منشأة تواجه تباعداً زمنياً بين البيع والتحصيل:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm">
              <div className="p-3 bg-white border border-border-subtle rounded-xl flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span><strong>شركات المقاولات والتوريدات:</strong> التي تعمل بمستخلصات مؤجلة الدفع وتحتاج تمويل تشغيل يومي.</span>
              </div>
              <div className="p-3 bg-white border border-border-subtle rounded-xl flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span><strong>الأنشطة التي تبيع بالأجل:</strong> وتحتاج تسريع دوران التحصيل وتخفيض فترات ائتمان العملاء.</span>
              </div>
              <div className="p-3 bg-white border border-border-subtle rounded-xl flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span><strong>الشركات النامية سريعة النمو:</strong> حيث يبتلع التوسع والمخزون الجديد كامل السيولة النقدية المتاحة.</span>
              </div>
              <div className="p-3 bg-white border border-border-subtle rounded-xl flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span><strong>المنشآت ذات الإيرادات الموسمية:</strong> التي تحتاج إدارة فوائض مواسم الذروة لتغطية شهور الركود.</span>
              </div>
            </div>
          </div>

          {/* 3. ماذا نقدم */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <Briefcase className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
              <h2 className="text-base md:text-lg font-bold text-text-primary">
                ماذا نقدم في إدارة التدفقات النقدية؟
              </h2>
            </div>
            <p className="text-xs md:text-sm text-text-secondary mb-4 leading-relaxed">
              منظومة متكاملة للتوقع والرقابة وحماية رصيدك البنكي:
            </p>
            <ul className="space-y-2 text-xs md:text-sm text-text-secondary pr-2">
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span><strong>نموذج التوقع النقدي لـ 13 أسبوعاً:</strong> جدول أسبوعي حي يوضح المقبوضات والمدفوعات والرصيد الختامي المتوقع للبنك.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span><strong>إدارة ومتابعة أعمار الذمم المدينة (AR Aging):</strong> تصنيف ديون العملاء ووضع خطط تسريع التحصيل الفوري.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span><strong>جدولة سداد الموردين والالتزامات:</strong> مواءمة مواعيد الخروج النقدي مع فترات دخول السيولة لحماية السمعة الائتمانية.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span><strong>تحديد وسادة الأمان النقدي (Cash Buffer):</strong> حساب حجم السيولة الاحتياطية اللازم للاحتفاظ به لمواجهة أي ظرف طارئ.</span>
              </li>
            </ul>
          </div>

          {/* 4. ماذا يحصل العميل */}
          <div className="mb-8 p-5 sm:p-6 bg-emerald-50/60 border border-emerald-200/80 rounded-2xl">
            <div className="flex items-center gap-2 mb-3 text-emerald-900">
              <FileCheck className="w-5 h-5 text-emerald-700 shrink-0" aria-hidden="true" />
              <h2 className="text-base md:text-lg font-bold">
                ماذا يحصل صاحب المنشأة؟ (المخرجات الملموسة)
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm text-emerald-950">
              <div className="p-3 bg-white/80 rounded-xl border border-emerald-100">
                <strong>وداعاً لمفاجآت الرواتب:</strong> معرفة الرصيد النقدي المتوفر مسبقاً لكل أسبوع وتأمين المستحقات بارتياح.
              </div>
              <div className="p-3 bg-white/80 rounded-xl border border-emerald-100">
                <strong>تحصيل أسرع لأموالك:</strong> تقليص دورة التحصيل وضخ الأموال المعلقة مباشرة في حسابك البنكي.
              </div>
              <div className="p-3 bg-white/80 rounded-xl border border-emerald-100">
                <strong>استقرار في علاقات الموردين:</strong> سداد منظم ومنتظم يضمن استمرار إمدادات عملك دون توقف.
              </div>
              <div className="p-3 bg-white/80 rounded-xl border border-emerald-100">
                <strong>هدوء وقرارات واثقة:</strong> إدارة أعمالك بوضوح رقمي يزيل التوتر المستمر بشأن رصيد البنك.
              </div>
            </div>
          </div>

          {/* 5. كيف نعمل */}
          <div className="mb-8">
            <h2 className="text-base md:text-lg font-bold text-text-primary mb-4">
              كيف نعمل؟ (3 خطوات للتحكم في السيولة)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs md:text-sm">
              <div className="p-4 bg-surface-subtle/60 border border-border-subtle rounded-xl">
                <div className="w-7 h-7 rounded-full bg-primary text-white font-bold flex items-center justify-center mb-2">1</div>
                <h3 className="font-bold text-text-primary mb-1">حصر السيولة والالتزامات</h3>
                <p className="text-text-secondary leading-relaxed">حصر أرصدة البنوك، فواتير المبيعات الآجلة، وفواتير الموردين والمصاريف المستحقة.</p>
              </div>
              <div className="p-4 bg-surface-subtle/60 border border-border-subtle rounded-xl">
                <div className="w-7 h-7 rounded-full bg-primary text-white font-bold flex items-center justify-center mb-2">2</div>
                <h3 className="font-bold text-text-primary mb-1">بناء جدول التوقع الأسبوعي</h3>
                <p className="text-text-secondary leading-relaxed">توزيع التدفقات الداخلة والخارجة على مدى 13 أسبوعاً وتحديد نقاط الضغط النقدي مسبقاً.</p>
              </div>
              <div className="p-4 bg-surface-subtle/60 border border-border-subtle rounded-xl">
                <div className="w-7 h-7 rounded-full bg-primary text-white font-bold flex items-center justify-center mb-2">3</div>
                <h3 className="font-bold text-text-primary mb-1">التحديث والرقابة الأسبوعية</h3>
                <p className="text-text-secondary leading-relaxed">تحديث الأرقام أسبوعياً ومتابعة التحصيل الفعلي واتخاذ الإجراءات الوقائية الفورية.</p>
              </div>
            </div>
          </div>

          {/* 6. الأنظمة التي يمكن العمل عليها عند الحاجة */}
          <SupportedSystemsSection 
            subtitle="نستخرج فواتير البيع الآجل وأعمار الديون والمدفوعات المستحقة مباشرة من نظامك المحاسبي (مثل قيود، دفترة، Odoo، Zoho Books، QuickBooks، ERPNext) لتحديث التوقعات النقدية."
          />

          {/* نموذج توقع نقدي استرشادي */}
          <PdfLeadMagnet 
            title="" 
            subtitle="" 
            reportName="تقرير توقع التدفق النقدي الأسبوعي (13-Week Cash Flow Forecast)" 
            whatsappUrl={WHATSAPP_URL}
            documentContent={
              <div className="flex flex-col h-full bg-white text-gray-800 text-[10px] md:text-xs font-sans">
                <div className="border-b-2 border-emerald-700 pb-3 mb-4 flex justify-between items-end">
                  <div>
                    <h2 className="text-lg md:text-xl font-bold text-gray-900 font-arabic mb-1">توقع التدفقات النقدية الأسبوعية</h2>
                    <p className="text-gray-500 font-arabic">13-Week Operational Rolling Cash Flow</p>
                  </div>
                  <div className="text-left text-[9px] md:text-[10px] text-gray-400">
                    <p>Currency: SAR</p>
                    <p>Horizon: Rolling 4-Wk View</p>
                  </div>
                </div>

                <div className="flex-grow space-y-3">
                  <div className="overflow-x-auto">
                    <table className="w-full text-right border-collapse min-w-[400px]">
                      <thead>
                        <tr className="bg-gray-100 border-y border-gray-300">
                          <th className="py-2 px-2 font-semibold text-gray-700">البند النقدي</th>
                          <th className="py-2 px-2 font-semibold text-gray-700 text-left">الأسبوع 1</th>
                          <th className="py-2 px-2 font-semibold text-gray-700 text-left">الأسبوع 2</th>
                          <th className="py-2 px-2 font-semibold text-gray-700 text-left">الأسبوع 3</th>
                          <th className="py-2 px-2 font-semibold text-gray-700 text-left">الأسبوع 4</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 font-arabic">
                        <tr className="bg-gray-50/60 font-bold">
                          <td className="py-1.5 px-2 text-gray-900">رصيد أول المدة (البنك)</td>
                          <td className="py-1.5 px-2 text-left font-mono">120,000</td>
                          <td className="py-1.5 px-2 text-left font-mono">145,000</td>
                          <td className="py-1.5 px-2 text-left font-mono">92,000</td>
                          <td className="py-1.5 px-2 text-left font-mono">132,000</td>
                        </tr>
                        <tr>
                          <td className="py-1.5 px-2 text-emerald-800 font-medium">(+) مقبوضات وتحصيل عملاء</td>
                          <td className="py-1.5 px-2 text-left font-mono text-emerald-700">+75,000</td>
                          <td className="py-1.5 px-2 text-left font-mono text-emerald-700">+42,000</td>
                          <td className="py-1.5 px-2 text-left font-mono text-emerald-700">+90,000</td>
                          <td className="py-1.5 px-2 text-left font-mono text-emerald-700">+65,000</td>
                        </tr>
                        <tr>
                          <td className="py-1.5 px-2 text-red-800 font-medium">(-) مدفوعات موردين ومصروفات</td>
                          <td className="py-1.5 px-2 text-left font-mono text-red-600">-50,000</td>
                          <td className="py-1.5 px-2 text-left font-mono text-red-600">-95,000</td>
                          <td className="py-1.5 px-2 text-left font-mono text-red-600">-50,000</td>
                          <td className="py-1.5 px-2 text-left font-mono text-red-600">-40,000</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr className="bg-emerald-50 border-t-2 border-emerald-700 font-bold">
                          <td className="py-2 px-2 text-emerald-950">رصيد آخر المدة المتوقع</td>
                          <td className="py-2 px-2 text-left font-mono text-emerald-800">145,000</td>
                          <td className="py-2 px-2 text-left font-mono text-amber-700">92,000</td>
                          <td className="py-2 px-2 text-left font-mono text-emerald-800">132,000</td>
                          <td className="py-2 px-2 text-left font-mono text-emerald-800">157,000</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>

                  <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded text-[10px] text-emerald-900 leading-relaxed font-arabic">
                    <strong>رؤية المستشار المالي:</strong> الأسبوع الثاني سيشهد دفعة موردين رئيسية (95K) تخفض الرصيد إلى 92K، وهو أعلى من حد الأمان النقدي (50K). الوضع مطمئن ولا يوجد أي مخاطر تعثر في سداد الالتزامات.
                  </div>
                </div>
              </div>
            }
          />

          {/* 7. FAQ */}
          <ServiceFaqAccordion faqs={faqs} />

          {/* 8. CTA واضح */}
          <div className="my-8 p-6 bg-surface-subtle/60 border border-border-subtle rounded-2xl text-center">
            <h3 className="text-base md:text-lg font-bold text-text-primary mb-2">
              هل تواجه ضغوطاً في السيولة أو تريد ضمان سداد التزاماتك القادمة بأمان؟
            </h3>
            <p className="text-xs md:text-sm text-text-secondary mb-4 max-w-xl mx-auto leading-relaxed">
              ناقش احتياج منشأتك واحمِ نشاطك بنظام توقع نقدي احترافي يزيل مفاجآت البنك.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackWhatsAppClick}
              className="inline-flex items-center gap-x-2 px-6 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs md:text-sm font-semibold rounded-xl transition-all shadow-sm duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span>ناقش احتياج منشأتك</span>
            </a>
          </div>

          {/* Related Article Guide Link */}
          <div className="mb-8 p-4 bg-primary/5 border border-primary/15 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs md:text-sm">
            <span className="text-text-secondary font-medium">
              💡 دليل تخصصي من المكتبة المالية: <a href="/blog/cash-flow-management-financial-safety" className="text-primary font-bold hover:underline">أسرار إدارة التدفقات النقدية وتحقيق الأمان المالي لمنشأتك</a>
            </span>
            <a href="/blog/cash-flow-management-financial-safety" className="text-primary font-semibold hover:underline shrink-0">
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
                href="/services/budgeting"
                className="p-3 bg-surface-subtle/50 hover:bg-surface-subtle border border-border-subtle rounded-lg text-xs md:text-sm font-medium text-text-primary hover:text-primary transition-all flex items-center justify-between"
              >
                <span>إعداد الموازنات التقديرية</span>
                <ArrowRight className="w-4 h-4 text-secondary rotate-180" />
              </a>
              <a
                href="/services/virtual-cfo"
                className="p-3 bg-surface-subtle/50 hover:bg-surface-subtle border border-border-subtle rounded-lg text-xs md:text-sm font-medium text-text-primary hover:text-primary transition-all flex items-center justify-between"
              >
                <span>المدير المالي عن بعد (Virtual CFO)</span>
                <ArrowRight className="w-4 h-4 text-secondary rotate-180" />
              </a>
              <a
                href="/services/financial-analysis"
                className="p-3 bg-surface-subtle/50 hover:bg-surface-subtle border border-border-subtle rounded-lg text-xs md:text-sm font-medium text-text-primary hover:text-primary transition-all flex items-center justify-between"
              >
                <span>التحليل المالي وهوامش الربحية</span>
                <ArrowRight className="w-4 h-4 text-secondary rotate-180" />
              </a>
            </div>
          </div>

        </div>
      </Container>
    </SectionWrapper>
  );
}
