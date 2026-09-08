import { useSEO } from '../../hooks/useSEO';
import SectionWrapper from '../../../components/SectionWrapper';
import Container from '../../../components/Container';
import { TYPOGRAPHY } from '../../lib/tokens';
import { MessageCircle, CheckCircle2, AlertTriangle, Users, Briefcase, FileCheck, ArrowRight } from 'lucide-react';
import PdfLeadMagnet from '../../components/PdfLeadMagnet';
import ServiceFaqAccordion, { FAQItem } from '../../components/ServiceFaqAccordion';
import SupportedSystemsSection from '../../components/SupportedSystemsSection';

const WHATSAPP_NUMBER = "966511294383";
const WHATSAPP_MESSAGE = "السلام عليكم، أرغب في مناقشة احتياج منشأتي في مجال إعداد الموازنات التقديرية والتخطيط المالي.";
const WHATSAPP_URL = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(WHATSAPP_MESSAGE);

export default function BudgetingPage() {
  const name = "إعداد الموازنات التقديرية";
  const slug = "budgeting";
  const metaTitle = "إعداد الموازنات التقديرية والتخطيط المالي للشركات | القائد";
  const metaDesc = "انقل منشأتك من الصرف العشوائي إلى التخطيط المالي المحكم. نبني موازنات تقديرية سنوية وشهرية تقارن الفعلي بالمخطط لمنع التجاوزات وحماية السيولة.";
  const url = "https://alqaeed-sa.pages.dev/services/" + slug;

  const faqs: FAQItem[] = [
    {
      question: "ما الفرق بين الموازنة التقديرية (Budget) والميزانية العمومية (Balance Sheet)؟",
      answer: "الموازنة التقديرية (Budget) هي خطة مستقبلية لما تتوقع المنشأة إنفاقه وتحصيله خلال الفترة القادمة (أداة تخطيط ورقابة). أما الميزانية العمومية (Balance Sheet) فهي تقرير محاسبي تاريخي يظهر أصول المنشأة والتزاماتها وحقوق ملكيتها في لحظة زمنية معينة."
    },
    {
      question: "كيف نبني موازنة دقيقة في ظل تقلبات السوق والأسعار؟",
      answer: "نستخدم منهجية السيناريوهات المتعددة (السيناريو الواقعي، والسيناريو المتحفظ، والسيناريو المتفائل) مع وضع هوامش مرونة مالية وبنود طوارئ تتيح للمنشأة امتصاص التغيرات دون الإخلال بهيكلها المالي."
    },
    {
      question: "هل يمكن تعديل أرقام الموازنة خلال العام إذا استجدت ظروف قاهرة؟",
      answer: "نعم، نقوم بإجراء مراجعة ربع سنوية (Quarterly Forecast) لتحديث التوقعات وتعديل الاعتمادات بين البنود وفق ما تقتضيه المصلحة التشغيلية والفرص الاستثمارية الطارئة."
    },
    {
      question: "ما هو تحليل الانحرافات (Variance Analysis) وما فائدته الشهرية؟",
      answer: "هو تقرير يقارن المصروفات والإيرادات الفعلية بما كان مخططاً له في الموازنة. فائدته أنه ينبه الإدارة فوراً إلى أي بند مصروف بدأ يتضخم بشكل غير طبيعي قبل فوات الأوان."
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
            إعداد الموازنات التقديرية والتخطيط المالي
          </h1>
          <p className="text-sm md:text-base text-text-secondary mb-6 leading-relaxed">
            خارطة طريق مالية منضبطة تضع سقفاً للمصاريف وأهدافاً واضحة للإيرادات، وتمنع المفاجآت النقدية وتجاوزات الميزانية.
          </p>
          <div className="w-16 h-1 bg-primary mb-8 rounded-full"></div>

          {/* 1. المشكلة التي يحلها الحل */}
          <div className="mb-8 p-5 sm:p-6 bg-amber-50/70 border border-amber-200/80 rounded-2xl">
            <div className="flex items-center gap-2 mb-3 text-amber-900">
              <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0" aria-hidden="true" />
              <h2 className="text-base md:text-lg font-bold">
                المشكلة: الإنفاق العشوائي والصدمات المالية في منتصف العام
              </h2>
            </div>
            <p className="text-xs md:text-sm text-amber-950 leading-relaxed mb-3">
              بدون موازنة مالية معتمدة ومراقبة، تقع الكثير من المنشآت في فخاخ مكلفة:
            </p>
            <ul className="space-y-1.5 text-xs md:text-sm text-amber-900 list-disc list-inside pr-1">
              <li>تضخم المصروفات التشغيلية والتسويقية تدريجياً دون وعي حتى تلتهم كامل هوامش الربح.</li>
              <li>العجز المفاجئ عن سداد التزامات كبرى متوقعة (تجديد عقود إيجار، مكافآت، دفعات موردين رئيسيين).</li>
              <li>غياب معيار رقابي واضح يحاسب الإدارات أو الفروع على إنفاقها وتجاوزاتها المالية.</li>
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
              خدمة أساسية لكل منشأة تريد التخطيط المالي الاحترافي:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm">
              <div className="p-3 bg-white border border-border-subtle rounded-xl flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span><strong>الشركات التي تستعد لعام مالي جديد:</strong> لوضع موازنة سنوية مقسمة شهرياً تغطي كافة أوجه النشاط.</span>
              </div>
              <div className="p-3 bg-white border border-border-subtle rounded-xl flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span><strong>المنشآت التي تعاني من تجاوزات المصاريف:</strong> لوضع أسقف إنفاق ملزمة لكل قسم ومحاسبة المسؤولين.</span>
              </div>
              <div className="p-3 bg-white border border-border-subtle rounded-xl flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span><strong>الشركات في مرحلة توسع:</strong> لحساب التكاليف الرأسمالية والتشغيلية قبل افتتاح فروع جديدة.</span>
              </div>
              <div className="p-3 bg-white border border-border-subtle rounded-xl flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span><strong>الشركاء ومجالس الإدارة:</strong> لربط أهداف النمو والأرباح بأرقام واقعية وقابلة للقياس والمتابعة.</span>
              </div>
            </div>
          </div>

          {/* 3. ماذا نقدم */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <Briefcase className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
              <h2 className="text-base md:text-lg font-bold text-text-primary">
                ماذا نقدم في خدمة إعداد الموازنات؟
              </h2>
            </div>
            <p className="text-xs md:text-sm text-text-secondary mb-4 leading-relaxed">
              منظومة تخطيط ورقابة مالية متكاملة تشمل:
            </p>
            <ul className="space-y-2 text-xs md:text-sm text-text-secondary pr-2">
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span><strong>الموازنة التشغيلية الشاملة (Operating Budget):</strong> تقدير الإيرادات المتوقعة وتكاليف البضاعة المباعة والمصاريف التشغيلية.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span><strong>الموازنة الرأسمالية (Capex Budget):</strong> تخطيط وجدولة الإنفاق على الأصول والمعدات وتجهيز الفروع.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span><strong>موازنات الإدارات والأقسام:</strong> توزيع المخصصات المالية على التسويق، الرواتب، التشغيل، وتقنية المعلومات.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span><strong>تقارير تحليل الانحرافات الشهرية (Variance Analysis):</strong> كشف الفارق بين الإنفاق الفعلي والمخطط وتحديد مسبباته.</span>
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
                <strong>انضباط مالي صارم:</strong> سقف محدد وواضح لكل ريال يتم صرفه داخل المنشأة.
              </div>
              <div className="p-3 bg-white/80 rounded-xl border border-emerald-100">
                <strong>إنذار مبكر ضد الانحرافات:</strong> تنبيه فوري عند اقتراب أي قسم من تجاوز موازنته المخصصة.
              </div>
              <div className="p-3 bg-white/80 rounded-xl border border-emerald-100">
                <strong>حماية السيولة النقدية:</strong> تخصيص الاحتياطيات المالية لمواجهة الالتزامات الكبرى في مواعيدها.
              </div>
              <div className="p-3 bg-white/80 rounded-xl border border-emerald-100">
                <strong>وضوح الأهداف التنافسية:</strong> مستهدف مبيعات وأرباح واقعي يوجه جهود كامل فريق العمل.
              </div>
            </div>
          </div>

          {/* 5. كيف نعمل */}
          <div className="mb-8">
            <h2 className="text-base md:text-lg font-bold text-text-primary mb-4">
              كيف نعمل؟ (3 خطوات لبناء ومتابعة الموازنة)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs md:text-sm">
              <div className="p-4 bg-surface-subtle/60 border border-border-subtle rounded-xl">
                <div className="w-7 h-7 rounded-full bg-primary text-white font-bold flex items-center justify-center mb-2">1</div>
                <h3 className="font-bold text-text-primary mb-1">دراسة الأداء والأهداف</h3>
                <p className="text-text-secondary leading-relaxed">تحليل البيانات التاريخية للعام السابق ومناقشة طموحات النمو والخطط التوسعية مع الإدارة.</p>
              </div>
              <div className="p-4 bg-surface-subtle/60 border border-border-subtle rounded-xl">
                <div className="w-7 h-7 rounded-full bg-primary text-white font-bold flex items-center justify-center mb-2">2</div>
                <h3 className="font-bold text-text-primary mb-1">صياغة وتوزيع الموازنة</h3>
                <p className="text-text-secondary leading-relaxed">بناء الجداول التقديرية وتوزيعها على الشهور والأقسام واعتمادها رسمياً من الشركاء.</p>
              </div>
              <div className="p-4 bg-surface-subtle/60 border border-border-subtle rounded-xl">
                <div className="w-7 h-7 rounded-full bg-primary text-white font-bold flex items-center justify-center mb-2">3</div>
                <h3 className="font-bold text-text-primary mb-1">الرقابة ومتابعة الانحرافات</h3>
                <p className="text-text-secondary leading-relaxed">إصدار تقرير شهري يقارن الأرقام الفعلية بالمخطط ويوصي بالتعديلات التشغيلية اللازمة.</p>
              </div>
            </div>
          </div>

          {/* 6. الأنظمة التي يمكن العمل عليها عند الحاجة */}
          <SupportedSystemsSection 
            subtitle="نقوم بإدخال أرقام الموازنة المعتمدة مباشرة في نظامك المحاسبي (مثل قيود، دفترة، Odoo، Zoho Books، QuickBooks، ERPNext) لتفعيل الرقابة اللحظية على المصروفات."
          />

          {/* نموذج موازنة تقديرية استرشادي */}
          <PdfLeadMagnet 
            title="" 
            subtitle="" 
            reportName="تقرير الموازنة التقديرية السنوية وتحليل الانحراف (Annual Budget & Variance)" 
            whatsappUrl={WHATSAPP_URL}
            documentContent={
              <div className="flex flex-col h-full bg-white text-gray-800 text-[10px] md:text-xs font-sans">
                <div className="border-b-2 border-primary pb-3 mb-4 flex justify-between items-end">
                  <div>
                    <h2 className="text-lg md:text-xl font-bold text-gray-900 font-arabic mb-1">الموازنة التقديرية - الربع الثاني</h2>
                    <p className="text-gray-500 font-arabic">Operational Budget & Variance Analysis</p>
                  </div>
                  <div className="text-left text-[9px] md:text-[10px] text-gray-400">
                    <p>Status: Approved</p>
                    <p>Control: Active</p>
                  </div>
                </div>

                <div className="flex-grow space-y-3">
                  <div className="overflow-x-auto">
                    <table className="w-full text-right border-collapse min-w-[400px]">
                      <thead>
                        <tr className="bg-gray-100 border-y border-gray-300">
                          <th className="py-2 px-2 font-semibold text-gray-700">بند الموازنة</th>
                          <th className="py-2 px-2 font-semibold text-gray-700 text-left">المخطط (SAR)</th>
                          <th className="py-2 px-2 font-semibold text-gray-700 text-left">الفعلي (SAR)</th>
                          <th className="py-2 px-2 font-semibold text-gray-700 text-left">الانحراف (Variance)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 font-arabic">
                        <tr className="bg-green-50/40">
                          <td className="py-1.5 px-2 font-medium text-gray-800">إيرادات المبيعات والخدمات</td>
                          <td className="py-1.5 px-2 text-left font-mono">350,000</td>
                          <td className="py-1.5 px-2 text-left font-mono font-bold text-emerald-800">378,000</td>
                          <td className="py-1.5 px-2 text-left text-emerald-700 font-bold">+8.0% (إيجابي)</td>
                        </tr>
                        <tr>
                          <td className="py-1.5 px-2 font-medium text-gray-800">تكلفة البضاعة المباعة (COGS)</td>
                          <td className="py-1.5 px-2 text-left font-mono">140,000</td>
                          <td className="py-1.5 px-2 text-left font-mono">145,000</td>
                          <td className="py-1.5 px-2 text-left text-amber-700 font-bold">+3.5% (زيادة طفيفة)</td>
                        </tr>
                        <tr>
                          <td className="py-1.5 px-2 font-medium text-gray-800">مصروفات التسويق والحملات</td>
                          <td className="py-1.5 px-2 text-left font-mono">30,000</td>
                          <td className="py-1.5 px-2 text-left font-mono">38,500</td>
                          <td className="py-1.5 px-2 text-left text-red-600 font-bold">+28.3% (تجاوز ملحوظ)</td>
                        </tr>
                        <tr>
                          <td className="py-1.5 px-2 font-medium text-gray-800">الرواتب والأجور التشغيلية</td>
                          <td className="py-1.5 px-2 text-left font-mono">85,000</td>
                          <td className="py-1.5 px-2 text-left font-mono">85,000</td>
                          <td className="py-1.5 px-2 text-left text-emerald-700 font-bold">0.0% (مطابق تماماً)</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr className="bg-gray-50 border-t-2 border-primary font-bold">
                          <td className="py-2 px-2 text-primary">صافي الربح التقديري مقابل الفعلي</td>
                          <td className="py-2 px-2 text-left font-mono text-gray-700">95,000</td>
                          <td className="py-2 px-2 text-left font-mono text-emerald-700 text-sm">109,500</td>
                          <td className="py-2 px-2 text-left text-emerald-700">+15.2% (فائض محقق)</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>

                  <div className="p-2.5 bg-amber-50 border border-amber-200 rounded text-[10px] text-amber-900 leading-relaxed font-arabic">
                    <strong>تنبيه الانحراف الرقابي:</strong> لوحظ تجاوز موازنة الحملات التسويقية بنسبة 28.3%، ورغم زيادة الإيرادات، يوصى بوضع سقف تدقيق صارم قبل اعتماد أي حملة إعلانية إضافية للشهر القادم.
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
              هل تريد وضع خطة مالية واضحة تمنع تجاوزات الصرف وتحدد أهداف منشأتك؟
            </h3>
            <p className="text-xs md:text-sm text-text-secondary mb-4 max-w-xl mx-auto leading-relaxed">
              ناقش احتياج منشأتك وابدأ في بناء موازنة تقديرية تحمي سيولتك وتدعم نموك بثقة.
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
              💡 دليل تخصصي من المكتبة المالية: <a href="/blog/cash-flow-management-financial-safety" className="text-primary font-bold hover:underline">كيف تدير التدفقات النقدية وتحمي منشأتك من التعثر المالي</a>
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
