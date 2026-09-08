import { useSEO } from '../../hooks/useSEO';
import SectionWrapper from '../../../components/SectionWrapper';
import Container from '../../../components/Container';
import { TYPOGRAPHY } from '../../lib/tokens';
import { MessageCircle, CheckCircle2, AlertTriangle, Users, Briefcase, FileCheck, ArrowRight } from 'lucide-react';
import PdfLeadMagnet from '../../components/PdfLeadMagnet';
import ServiceFaqAccordion, { FAQItem } from '../../components/ServiceFaqAccordion';
import SupportedSystemsSection from '../../components/SupportedSystemsSection';

const WHATSAPP_NUMBER = "966511294383";
const WHATSAPP_MESSAGE = "السلام عليكم، أرغب في مناقشة احتياجي المالي في مجال المدير المالي عن بعد (Virtual CFO) والاستشارات المالية.";
const WHATSAPP_URL = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(WHATSAPP_MESSAGE);

export default function VirtualCfoPage() {
  const name = "المدير المالي عن بعد";
  const slug = "virtual-cfo";
  const metaTitle = "المدير المالي عن بعد (Virtual CFO) للشركات في السعودية | القائد";
  const metaDesc = "احصل على خبرات القيادة المالية الاستراتيجية (CFO) بتكلفة مرنة واقتصادية. نوجه فريقك المحاسبي، وندعم قرارات التوسع والتمويل، ونحمي أرباح الشركاء.";
  const url = "https://alqaeed-sa.pages.dev/services/" + slug;

  const faqs: FAQItem[] = [
    {
      question: "ما الفرق الجوهري بين المحاسب الداخلي والمدير المالي (CFO)؟",
      answer: "المحاسب الداخلي ينظر إلى الماضي ليسجل الفواتير والمعاملات بدقة. أما المدير المالي (CFO) فينظر إلى المستقبل؛ يضع الاستراتيجية، يحلل الربحية، يخطط للسيولة، يفاوض البنوك، ويقدم النصح الاستراتيجي لصاحب المنشأة لاتخاذ القرارات الرابحة."
    },
    {
      question: "كيف توفر خدمة Virtual CFO أكثر من 70% من تكلفة التوظيف التقليدي؟",
      answer: "توظيف مدير مالي متفرغ ذي خبرة عالية يكلف المنشأة رواتب وبدلات ومكافآت وتأمينات تتجاوز 30,000 إلى 50,000 ريال شهرياً. خدمة Virtual CFO تمنحك نفس الخبرة القيادية والتوجيه المالي باشتراك شهري مرن يناسب ميزانية وحجم منشأتك."
    },
    {
      question: "هل يمكن للمدير المالي عن بعد تمثيل منشأتنا في مفاوضات البنوك أو المستثمرين؟",
      answer: "نعم تماماً. نشارك في إعداد الملفات الائتمانية والاستثمارية، وندعمك في اجتماعات التفاوض البنكية والرد على استفسارات مسؤولي الائتمان وممثلي الصناديق التمويلية باحترافية كاملة."
    },
    {
      question: "هل تشرفون على المحاسبين الموجودين بالفعل لدى منشأتنا؟",
      answer: "نعم، نتولى التوجيه المهني والإشراف الفني على فريقك المحاسبي الداخلي، ونراجع موازين المراجعة والتسويات شهرياً للتأكد من انضباط السجلات وجودة المخرجات."
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
            المدير المالي عن بعد (Virtual CFO)
          </h1>
          <p className="text-sm md:text-base text-text-secondary mb-6 leading-relaxed">
            خبرة القيادة المالية الاستراتيجية لكبرى الشركات متاحة الآن لمنشأتك بتكلفة مرنة، لتوجه قراراتك التوسعية والاستثمارية وتدعم نموك بثقة.
          </p>
          <div className="w-16 h-1 bg-primary mb-8 rounded-full"></div>

          {/* 1. المشكلة التي يحلها الحل */}
          <div className="mb-8 p-5 sm:p-6 bg-amber-50/70 border border-amber-200/80 rounded-2xl">
            <div className="flex items-center gap-2 mb-3 text-amber-900">
              <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0" aria-hidden="true" />
              <h2 className="text-base md:text-lg font-bold">
                المشكلة: المحاسب يسجل قيوداً.. والإدارة بحاجة لمستشار مالي استراتيجي!
              </h2>
            </div>
            <p className="text-xs md:text-sm text-amber-950 leading-relaxed mb-3">
              تواجه معظم المنشآت النامية معضلة مالية وإدارية شائعة:
            </p>
            <ul className="space-y-1.5 text-xs md:text-sm text-amber-900 list-disc list-inside pr-1">
              <li>المحاسب الداخلي يقتصر دوره على إدخال الفواتير وسداد القيود، دون القدرة على تقديم رؤية استراتيجية أو تحليل ربحية.</li>
              <li>تكلفة توظيف مدير مالي بدوام كامل (CFO) تتجاوز 30,000 إلى 50,000 ريال شهرياً بخلاف البدلات، وهو عبء ثقيل على المنشأة.</li>
              <li>اتخاذ قرارات استثمارية أو تسعيرية كبرى بناءً على الاجتهاد الشخصي، مما يؤدي لمخاطر مالية تهدد بقاء المنشأة.</li>
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
              الحل الأمثل للمنشآت الطامحة للنمو المنضبط:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm">
              <div className="p-3 bg-white border border-border-subtle rounded-xl flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span><strong>الشركات المتوسطة والنامية:</strong> التي تحتاج قيادة مالية محترفة ولكن لا تتحمل تكلفة تعيين CFO متفرغ.</span>
              </div>
              <div className="p-3 bg-white border border-border-subtle rounded-xl flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span><strong>المنشآت التي تمتلك فريق محاسبة:</strong> لكنها تفتقر إلى إشراف فني وتدقيق وتوجيه استراتيجي للعمليات.</span>
              </div>
              <div className="p-3 bg-white border border-border-subtle rounded-xl flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span><strong>المنشآت المتقدمة للحصول على تمويل بنكي أو استثماري:</strong> وتريد صياغة ملف ائتماني قوي والتفاوض باحترافية.</span>
              </div>
              <div className="p-3 bg-white border border-border-subtle rounded-xl flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span><strong>الشركاء ومجالس الإدارة:</strong> الذين يحتاجون مستشاراً مالياً محايداً وموثوقاً يشارك في اجتماعاتهم الدورية.</span>
              </div>
            </div>
          </div>

          {/* 3. ماذا نقدم */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <Briefcase className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
              <h2 className="text-base md:text-lg font-bold text-text-primary">
                ماذا نقدم في خدمة المدير المالي عن بعد؟
              </h2>
            </div>
            <p className="text-xs md:text-sm text-text-secondary mb-4 leading-relaxed">
              شراكة مالية استراتيجية متكاملة تشمل:
            </p>
            <ul className="space-y-2 text-xs md:text-sm text-text-secondary pr-2">
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span><strong>التوجيه والإشراف المالي الاستراتيجي:</strong> متابعة دورية للفريق المحاسبي الداخلي وضمان دقة السجلات وإقفالات الشهر.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span><strong>دراسة جدوى التوسع والاستثمار:</strong> تقييم الفرص والمشاريع واختبار ملاءمتها لقدرات المنشأة المالية والتدفقات النقدية.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span><strong>التفاوض مع البنوك والجهات التمويلية:</strong> إعداد الملفات المالية لبرامج التمويل (كفالة، الصناديق، البنوك التجارية).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span><strong>حضور اجتماعات الإدارة والشركاء:</strong> تقديم النصح المالي المباشر وتفسير المؤشرات والفرص بلغة واضحة ومقنعة.</span>
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
                <strong>توفير مالي هائل:</strong> خبرة CFO رفيعة بتكلفة تقل عن 70% من راتب التوظيف المباشر.
              </div>
              <div className="p-3 bg-white/80 rounded-xl border border-emerald-100">
                <strong>حماية من القرارات الخاطئة:</strong> دراسة متأنية لكل ريال يتم استثماره أو التوسع فيه.
              </div>
              <div className="p-3 bg-white/80 rounded-xl border border-emerald-100">
                <strong>فريق محاسبي منضبط:</strong> إشراف دوري يرفع كفاءة محاسبيك ويمنع الأخطاء والتراكمات.
              </div>
              <div className="p-3 bg-white/80 rounded-xl border border-emerald-100">
                <strong>صوت مالي قوي في مفاوضاتك:</strong> ممثل مالي محترف يحمي حقوقك أمام البنوك والشركاء.
              </div>
            </div>
          </div>

          {/* 5. كيف نعمل */}
          <div className="mb-8">
            <h2 className="text-base md:text-lg font-bold text-text-primary mb-4">
              كيف نعمل؟ (3 خطوات لشراكة مالية استراتيجية)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs md:text-sm">
              <div className="p-4 bg-surface-subtle/60 border border-border-subtle rounded-xl">
                <div className="w-7 h-7 rounded-full bg-primary text-white font-bold flex items-center justify-center mb-2">1</div>
                <h3 className="font-bold text-text-primary mb-1">جلسة التشخيص والأهداف</h3>
                <p className="text-text-secondary leading-relaxed">فهم نموذج عمل المنشأة، تقييم الوضع المالي الحالي، وتحديد الأولويات الاستراتيجية.</p>
              </div>
              <div className="p-4 bg-surface-subtle/60 border border-border-subtle rounded-xl">
                <div className="w-7 h-7 rounded-full bg-primary text-white font-bold flex items-center justify-center mb-2">2</div>
                <h3 className="font-bold text-text-primary mb-1">الإشراف المالي المباشر</h3>
                <p className="text-text-secondary leading-relaxed">توجيه الفريق المحاسبي، ضبط الإقفالات الشهرية، وإصدار التقارير التنفيذية ولوحات القياس.</p>
              </div>
              <div className="p-4 bg-surface-subtle/60 border border-border-subtle rounded-xl">
                <div className="w-7 h-7 rounded-full bg-primary text-white font-bold flex items-center justify-center mb-2">3</div>
                <h3 className="font-bold text-text-primary mb-1">الاستشارة وحضور الاجتماعات</h3>
                <p className="text-text-secondary leading-relaxed">التواجد في اجتماعات القرارات المصيرية، دراسة صفقات التوسع، والتفاوض المالي بالنيابة عنك.</p>
              </div>
            </div>
          </div>

          {/* 6. الأنظمة التي يمكن العمل عليها عند الحاجة */}
          <SupportedSystemsSection 
            subtitle="نوجه فريقك ونشرف على قيود الحسابات مباشرة عبر مختلف الأنظمة السحابية المعتمدة (مثل قيود، دفترة، Odoo، Zoho Books، QuickBooks، ERPNext) لضمان حوكمة دقيقة."
          />

          {/* نموذج لوحة استراتيجية CFO استرشادية */}
          <PdfLeadMagnet 
            title="" 
            subtitle="" 
            reportName="ملف التوجيه المالي الاستراتيجي (Strategic CFO Advisory Report)" 
            whatsappUrl={WHATSAPP_URL}
            documentContent={
              <div className="flex flex-col h-full bg-white text-gray-800 text-[10px] md:text-xs font-sans">
                <div className="border-b-2 border-primary pb-3 mb-4 flex justify-between items-end">
                  <div>
                    <h2 className="text-lg md:text-xl font-bold text-gray-900 font-arabic mb-1">تقرير المدير المالي الاستراتيجي (CFO)</h2>
                    <p className="text-gray-500 font-arabic">Executive Financial Advisory Summary</p>
                  </div>
                  <div className="text-left text-[9px] md:text-[10px] text-gray-400">
                    <p>Advisory: Active</p>
                    <p>Level: Board & C-Level</p>
                  </div>
                </div>

                <div className="flex-grow space-y-3">
                  <div className="p-3 bg-blue-50/70 border border-blue-200 rounded-lg">
                    <h4 className="font-bold text-blue-950 font-arabic mb-1.5">1. فحص الجدوى المالية لافتتاح الفرع الجديد:</h4>
                    <p className="text-gray-700 leading-relaxed font-arabic">
                      بعد دراسة التدفقات النقدية المتوقعة، يتطلب الفرع استثماراً رأسمالياً أولياً قدره 250,000 ريال، مع فترة استرداد متوقعة خلال 14 شهراً. يُوصى بتمويل 60% من التكلفة عبر تسهيل بنكي متوسط الأجل للحفاظ على السيولة التشغيلية للفرع القائم.
                    </p>
                  </div>

                  <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-lg">
                    <h4 className="font-bold text-emerald-950 font-arabic mb-1.5">2. جاهزية الملف الائتماني والتمويل:</h4>
                    <p className="text-gray-700 leading-relaxed font-arabic">
                      تم تصحيح ميزان المراجعة، وتحديث نسب الرافعة المالية والسيولة، والملف الآن جاهز بنسبة 100% لتقديمه لإدارة الائتمان للحصول على تسهيلات بنكية بمعدل ربح منافس.
                    </p>
                  </div>

                  <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-lg">
                    <h4 className="font-bold text-amber-950 font-arabic mb-1.5">3. خطة الرقابة الداخلية وإقفال الحسابات:</h4>
                    <p className="text-gray-700 leading-relaxed font-arabic">
                      تم وضع جدول مهام أسبوعي للمحاسب الداخلي لضمان مطابقة البنوك والعهد أسبوعياً وإصدار ميزان المراجعة خلال أول 4 أيام عمل من كل شهر.
                    </p>
                  </div>
                </div>
              </div>
            }
          />

          {/* 7. FAQ */}
          <ServiceFaqAccordion faqs={faqs} />

          {/* 8. CTA واضح (ناقش احتياجك المالي) */}
          <div className="my-8 p-6 bg-surface-subtle/60 border border-border-subtle rounded-2xl text-center">
            <h3 className="text-base md:text-lg font-bold text-text-primary mb-2">
              هل تبحث عن توجيه مالي استراتيجي يقود نمو منشأتك ويوفر عليك تكلفة التوظيف الكامل؟
            </h3>
            <p className="text-xs md:text-sm text-text-secondary mb-4 max-w-xl mx-auto leading-relaxed">
              ناقش احتياجك المالي واكتشف كيف يمكن لخدمة المدير المالي عن بعد إحداث نقلة نوعية في إدارة أرباحك وسيولتك.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackWhatsAppClick}
              className="inline-flex items-center gap-x-2 px-6 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs md:text-sm font-semibold rounded-xl transition-all shadow-sm duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span>ناقش احتياجك المالي</span>
            </a>
          </div>

          {/* Related Article Guide Link */}
          <div className="mb-8 p-4 bg-primary/5 border border-primary/15 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs md:text-sm">
            <span className="text-text-secondary font-medium">
              💡 دليل تخصصي من المكتبة المالية: <a href="/blog/virtual-cfo-benefits-small-business" className="text-primary font-bold hover:underline">متى تحتاج منشأتك إلى مدير مالي عن بعد (Virtual CFO) وكيف تختاره؟</a>
            </span>
            <a href="/blog/virtual-cfo-benefits-small-business" className="text-primary font-semibold hover:underline shrink-0">
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
                <span>التحليل المالي وهوامش الربحية</span>
                <ArrowRight className="w-4 h-4 text-secondary rotate-180" />
              </a>
              <a
                href="/services/cash-flow"
                className="p-3 bg-surface-subtle/50 hover:bg-surface-subtle border border-border-subtle rounded-lg text-xs md:text-sm font-medium text-text-primary hover:text-primary transition-all flex items-center justify-between"
              >
                <span>إدارة وتوقع التدفقات النقدية</span>
                <ArrowRight className="w-4 h-4 text-secondary rotate-180" />
              </a>
              <a
                href="/services/management-reports"
                className="p-3 bg-surface-subtle/50 hover:bg-surface-subtle border border-border-subtle rounded-lg text-xs md:text-sm font-medium text-text-primary hover:text-primary transition-all flex items-center justify-between"
              >
                <span>التقارير المالية الدورية</span>
                <ArrowRight className="w-4 h-4 text-secondary rotate-180" />
              </a>
            </div>
          </div>

        </div>
      </Container>
    </SectionWrapper>
  );
}
