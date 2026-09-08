import { useSEO } from '../../hooks/useSEO';
import SectionWrapper from '../../../components/SectionWrapper';
import Container from '../../../components/Container';
import { TYPOGRAPHY } from '../../lib/tokens';
import { MessageCircle, CheckCircle2, AlertTriangle, Users, Briefcase, FileCheck, ArrowRight } from 'lucide-react';
import PdfLeadMagnet from '../../components/PdfLeadMagnet';
import ServiceFaqAccordion, { FAQItem } from '../../components/ServiceFaqAccordion';
import SupportedSystemsSection from '../../components/SupportedSystemsSection';

const WHATSAPP_NUMBER = "966511294383";
const WHATSAPP_MESSAGE = "السلام عليكم، أرغب في مناقشة احتياج منشأتي في مجال التقارير الإدارية والمالية الدورية.";
const WHATSAPP_URL = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(WHATSAPP_MESSAGE);

export default function ManagementReportsPage() {
  const name = "التقارير الإدارية ومؤشرات الأداء";
  const slug = "management-reports";
  const metaTitle = "إعداد التقارير الإدارية والمالية الشهرية للمنشآت | القائد";
  const metaDesc = "احصل على تقارير مالية تنفيذية بلغة الأعمال تفهمها في 5 دقائق. لوحات مؤشرات ومقارنة أداء الفروع لتمكين الإدارة من اتخاذ قرارات سريعة وصائبة.";
  const url = "https://alqaeed-sa.pages.dev/services/" + slug;

  const faqs: FAQItem[] = [
    {
      question: "ما الفرق الجوهري بين التقرير المحاسبي الروتيني والتقرير الإداري؟",
      answer: "التقرير المحاسبي يوجه عادة للمراجعين والجهات التنظيمية وهو مليء بالمصطلحات الفنية وجداول الدائن والمدين. أما التقرير الإداري فهو مصمم خصيصاً لصاحب المنشأة وصناع القرار؛ يركز على مؤشرات السيولة، مبيعات الفروع، أين تم صرف الميزانية، وهل نحن قريبون من أهدافنا أم لا."
    },
    {
      question: "متى يتم تسليم التقرير الإداري الشهري لمنشأتي؟",
      answer: "يتم تسليم التقرير في الأيام الأولى بعد انتهاء كل شهر ميلادي (خلال أول 5 إلى 7 أيام عمل) حتى تكون البيانات طازجة ومفيدة لاتخاذ قرارات الشهر الجديد دون تأخير."
    },
    {
      question: "هل يوضح التقرير أداء الفروع ومقارنتها ببعضها؟",
      answer: "نعم، نخصص قسماً لمقارنة مراكز التكلفة والفروع (إيرادات الفرع، تكاليفه المباشرة، وهامش ربحه)، مما يوضح لك فوراً أي الفروع يحقق عائداً حقيقياً وأيها يعاني من بطء في الأداء."
    },
    {
      question: "هل نتلقى شرحاً ومناقشة لمحتوى التقرير أم يرسل ملفاً فقط؟",
      answer: "نحن لا نكتفي بإرسال ملف جامد؛ نرفق ملخصاً تنفيذياً، ونعقد جلسة مراجعة شهرية لمناقشة أبرز الملاحظات وتحديد الإجراءات التصحيحية الواجب اتخاذها فوراً."
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
            التقارير الإدارية الدورية ولوحات الأداء
          </h1>
          <p className="text-sm md:text-base text-text-secondary mb-6 leading-relaxed">
            تقارير مالية تنفيذية بلغة الأعمال التي يفهمها صاحب المنشأة، تمنحك رؤية واضحة لأداء فروعك ومشاريعك وتختصر عليك ساعات من الحيرة والتحليل.
          </p>
          <div className="w-16 h-1 bg-primary mb-8 rounded-full"></div>

          {/* 1. المشكلة التي يحلها الحل */}
          <div className="mb-8 p-5 sm:p-6 bg-amber-50/70 border border-amber-200/80 rounded-2xl">
            <div className="flex items-center gap-2 mb-3 text-amber-900">
              <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0" aria-hidden="true" />
              <h2 className="text-base md:text-lg font-bold">
                المشكلة: تقارير محاسبية معقدة لا تجيب عن أسئلة الإدارة الفعلية
              </h2>
            </div>
            <p className="text-xs md:text-sm text-amber-950 leading-relaxed mb-3">
              في كثير من المنشآت، يستلم المدير التنفيذي جداول مالية طويلة مليئة بالأرقام، لكنها:
            </p>
            <ul className="space-y-1.5 text-xs md:text-sm text-amber-900 list-disc list-inside pr-1">
              <li>تصل متأخرة جداً بعد نهاية الشهر بفترة تفقد الأرقام قيمتها في تصحيح المسار.</li>
              <li>مكتوبة بلغة قيود محاسبية لا توضح أين المشكلة التشغيلية الفعلية وما يجب فعله.</li>
              <li>تفتقر إلى مقارنة أداء الفروع المختلفة أو المنتجات لتحديد سبب التراجع أو النمو.</li>
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
              صممت خصيصاً للقادة التنفيذيين وملاك المشاريع:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm">
              <div className="p-3 bg-white border border-border-subtle rounded-xl flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span><strong>الشركات ذات الفروع المتعددة (مطاعم وتجزئة):</strong> لمتابعة ربحية كل فرع ومقارنة مبيعاته بتكاليفه التشغيلية.</span>
              </div>
              <div className="p-3 bg-white border border-border-subtle rounded-xl flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span><strong>الشركاء والمستثمرون:</strong> للحصول على ملخص شهري منتظم وموثوق عن وضع المنشأة دون الدخول في تفاصيل القيود.</span>
              </div>
              <div className="p-3 bg-white border border-border-subtle rounded-xl flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span><strong>الشركات الخدمية والاستشارية:</strong> لمتابعة ربحية العقود ومستوى إنتاجية الموارد وسرعة التحصيل.</span>
              </div>
              <div className="p-3 bg-white border border-border-subtle rounded-xl flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span><strong>المنشآت النامية سريعة التغير:</strong> التي تحتاج معلومات مالية أسبوعية وشهرية لاتخاذ قرارات توظيف وشراء سريعة.</span>
              </div>
            </div>
          </div>

          {/* 3. ماذا نقدم */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <Briefcase className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
              <h2 className="text-base md:text-lg font-bold text-text-primary">
                ماذا نقدم في خدمة التقارير الإدارية؟
              </h2>
            </div>
            <p className="text-xs md:text-sm text-text-secondary mb-4 leading-relaxed">
              تقارير بصرية وتنفيذية شاملة تصاغ لدعم القرار:
            </p>
            <ul className="space-y-2 text-xs md:text-sm text-text-secondary pr-2">
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span><strong>الملخص التنفيذي للأداء المالي:</strong> نظرة شاملة من صفحة واحدة تلخص الإيراد، المصروف، الصافي، ومستوى السيولة.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span><strong>تقارير ربحية الفروع ومراكز التكلفة:</strong> بيان تفصيلي لحجم مساهمة كل فرع أو قطاع في مجمل الأرباح.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span><strong>لوحة مؤشرات الأداء المالي (KPIs):</strong> مراقبة هوامش الربح، سرعة تحصيل الديون، ونسب السيولة السريعة.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span><strong>تقرير مقارنة الفعلي بالمستهدف:</strong> كشف الانحرافات المالية في بنود المصروفات للتدخل وتفادي تجاوز الميزانية.</span>
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
                <strong>فهم فوري في 5 دقائق:</strong> ملخص بصري بدلاً من صفحات الإكسل المعقدة.
              </div>
              <div className="p-3 bg-white/80 rounded-xl border border-emerald-100">
                <strong>كشف الفروع المتعثرة مبكراً:</strong> معرفة الفرع الذي يحتاج تصحيحاً قبل أن تتفاقم خسائره.
              </div>
              <div className="p-3 bg-white/80 rounded-xl border border-emerald-100">
                <strong>قرارات تسعير وتوظيف مدروسة:</strong> استناد كامل إلى بيانات واقعية دقيقة وليس إلى التخمين.
              </div>
              <div className="p-3 bg-white/80 rounded-xl border border-emerald-100">
                <strong>شفافية مطلقة مع الشركاء:</strong> تقرير دوري يبني جسور الثقة والمصداقية بين جميع الأطراف.
              </div>
            </div>
          </div>

          {/* 5. كيف نعمل */}
          <div className="mb-8">
            <h2 className="text-base md:text-lg font-bold text-text-primary mb-4">
              كيف نعمل؟ (3 خطوات للتقرير الإداري الفعّال)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs md:text-sm">
              <div className="p-4 bg-surface-subtle/60 border border-border-subtle rounded-xl">
                <div className="w-7 h-7 rounded-full bg-primary text-white font-bold flex items-center justify-center mb-2">1</div>
                <h3 className="font-bold text-text-primary mb-1">تحديد المؤشرات الحاكمة</h3>
                <p className="text-text-secondary leading-relaxed">جلسة عمل لاختيار أهم 5 إلى 7 مؤشرات تحدد نجاح منشأتك ومراكز التكلفة المطلوبة.</p>
              </div>
              <div className="p-4 bg-surface-subtle/60 border border-border-subtle rounded-xl">
                <div className="w-7 h-7 rounded-full bg-primary text-white font-bold flex items-center justify-center mb-2">2</div>
                <h3 className="font-bold text-text-primary mb-1">استخراج البيانات وتجهيز اللوحة</h3>
                <p className="text-text-secondary leading-relaxed">سحب البيانات شهرياً من نظامك وتوليد التقرير التنفيذي بمقارنات الفروع والاتجاهات.</p>
              </div>
              <div className="p-4 bg-surface-subtle/60 border border-border-subtle rounded-xl">
                <div className="w-7 h-7 rounded-full bg-primary text-white font-bold flex items-center justify-center mb-2">3</div>
                <h3 className="font-bold text-text-primary mb-1">جلسة المناقشة والتوصيات</h3>
                <p className="text-text-secondary leading-relaxed">مراجعة سريعة مع الإدارة لتسليط الضوء على بنود الانحراف وطرح الحلول الفورية.</p>
              </div>
            </div>
          </div>

          {/* 6. الأنظمة التي يمكن العمل عليها عند الحاجة */}
          <SupportedSystemsSection 
            subtitle="نربط التقارير بمراكز التكلفة والفروع عبر العمل على برنامجك المحاسبي (مثل قيود، دفترة، Odoo، Zoho Books، QuickBooks، ERPNext) لإصدار تقارير دقيقة ومحدثة."
          />

          {/* نموذج تقرير إداري استرشادي */}
          <PdfLeadMagnet 
            title="" 
            subtitle="" 
            reportName="التقرير المالي الإداري الدوري (Monthly Flash Report)" 
            whatsappUrl={WHATSAPP_URL}
            documentContent={
              <div className="flex flex-col h-full bg-white text-gray-800 text-[10px] md:text-xs font-sans">
                <div className="border-b-2 border-primary pb-3 mb-4 flex justify-between items-end">
                  <div>
                    <h2 className="text-lg md:text-xl font-bold text-gray-900 font-arabic mb-1">تقرير الأداء الإداري للفروع</h2>
                    <p className="text-gray-500 font-arabic">Monthly Executive Flash Report</p>
                  </div>
                  <div className="text-left text-[9px] md:text-[10px] text-gray-400">
                    <p>Target: Management Board</p>
                    <p>Frequency: Monthly</p>
                  </div>
                </div>

                <div className="flex-grow space-y-3">
                  <div className="grid grid-cols-3 gap-2">
                    <div className="p-2 bg-gray-50 border border-gray-200 rounded text-center">
                      <p className="text-gray-500 text-[9px]">إجمالي الإيرادات</p>
                      <p className="text-sm font-bold text-primary font-mono">450,000 SAR</p>
                      <span className="text-[8px] text-green-600">+9.2% عن المستهدف</span>
                    </div>
                    <div className="p-2 bg-gray-50 border border-gray-200 rounded text-center">
                      <p className="text-gray-500 text-[9px]">المصروفات التشغيلية</p>
                      <p className="text-sm font-bold text-amber-700 font-mono">115,000 SAR</p>
                      <span className="text-[8px] text-amber-700">+4.1% زيادة تسويق</span>
                    </div>
                    <div className="p-2 bg-gray-50 border border-gray-200 rounded text-center">
                      <p className="text-gray-500 text-[9px]">صافي الربح التشغيلي</p>
                      <p className="text-sm font-bold text-emerald-700 font-mono">65,000 SAR</p>
                      <span className="text-[8px] text-emerald-700">14.4% من المبيعات</span>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-right border-collapse min-w-[380px]">
                      <thead>
                        <tr className="bg-gray-100 border-y border-gray-300">
                          <th className="py-1.5 px-2 font-semibold text-gray-700">الفرع / المركز</th>
                          <th className="py-1.5 px-2 font-semibold text-gray-700 text-left">المبيعات (SAR)</th>
                          <th className="py-1.5 px-2 font-semibold text-gray-700 text-left">التكاليف (SAR)</th>
                          <th className="py-1.5 px-2 font-semibold text-gray-700 text-left">هامش الربح</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 font-arabic">
                        <tr>
                          <td className="py-1.5 px-2 font-medium text-gray-800">فرع الرياض (الرئيسي)</td>
                          <td className="py-1.5 px-2 text-left font-mono">240,000</td>
                          <td className="py-1.5 px-2 text-left font-mono">140,000</td>
                          <td className="py-1.5 px-2 text-left text-emerald-700 font-bold">41.6%</td>
                        </tr>
                        <tr>
                          <td className="py-1.5 px-2 font-medium text-gray-800">فرع جدة</td>
                          <td className="py-1.5 px-2 text-left font-mono">130,000</td>
                          <td className="py-1.5 px-2 text-left font-mono">85,000</td>
                          <td className="py-1.5 px-2 text-left text-blue-700 font-bold">34.6%</td>
                        </tr>
                        <tr>
                          <td className="py-1.5 px-2 font-medium text-gray-800">فرع الخبر</td>
                          <td className="py-1.5 px-2 text-left font-mono">80,000</td>
                          <td className="py-1.5 px-2 text-left font-mono">62,000</td>
                          <td className="py-1.5 px-2 text-left text-amber-700 font-bold">22.5%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="p-2.5 bg-blue-50 border border-blue-200 rounded text-[10px] text-blue-900 leading-relaxed font-arabic">
                    <strong>ملاحظة تنفيذية للشركاء:</strong> فرع الرياض يساهم بـ 53% من الأرباح الإجمالية، بينما يعاني فرع الخبر من ارتفاع مصاريف التشغيل مقارنة بحجم مبيعاته. التوصية: مراجعة خطة التسويق المحلية لفرع الخبر.
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
              هل تريد تقارير إدارية شهرية واضحة تمنحك السيطرة الكاملة على أداء منشأتك؟
            </h3>
            <p className="text-xs md:text-sm text-text-secondary mb-4 max-w-xl mx-auto leading-relaxed">
              ناقش احتياج منشأتك وابدأ في استلام تقارير مالية تنفيذية تدعم قراراتك القادمة بثقة.
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
              💡 دليل تخصصي من المكتبة المالية: <a href="/blog/management-reports-kpis-business-growth" className="text-primary font-bold hover:underline">أهمية التقارير الإدارية ومؤشرات الأداء المالي للمنشآت النامية</a>
            </span>
            <a href="/blog/management-reports-kpis-business-growth" className="text-primary font-semibold hover:underline shrink-0">
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
            </div>
          </div>

        </div>
      </Container>
    </SectionWrapper>
  );
}
