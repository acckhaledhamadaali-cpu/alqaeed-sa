import { HTMLAttributes } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import SectionDescription from '../components/SectionDescription';
import { CheckCircle2, HelpCircle, ArrowLeft, ShieldCheck, PhoneCall } from 'lucide-react';

const WHATSAPP_NUMBER = '966511294383';

export default function QualificationSection(props: HTMLAttributes<HTMLElement>) {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'السلام عليكم، أود تقييم احتياج منشأتي ومعرفة مدى ملاءمة خدمات القائد لنشاطي التجاري.'
  )}`;

  return (
    <SectionWrapper 
      id="qualification-section" 
      variant="white" 
      spacing="default" 
      className="border-t border-border"
      {...props}
    >
      <Container id="qualification-container">
        <div id="qualification-content" className="flex flex-col space-y-6 md:space-y-8 max-w-4xl mx-auto">
          
          {/* Header */}
          <div id="qualification-header" className="flex flex-col space-y-3 text-center items-center">
            <div 
              id="qualification-pill"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-arabic font-semibold"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-secondary" />
              <span>تقييم الملاءمة والشفافية المهنية</span>
            </div>

            <SectionTitle id="qualification-title" level={2} className="font-bold text-xl sm:text-2xl md:text-3xl">
              هل القائد مناسب لمنشأتك؟
            </SectionTitle>

            <SectionDescription id="qualification-description" className="text-center text-sm md:text-base max-w-2xl">
              نؤمن بأن الشفافية هي أساس أي شراكة ناجحة؛ لذا نساعدك على التحقق المسبق مما إذا كان نموذج الإدارة المالية عن بُعد هو الخيار الأنسب لنمو وتحديات منشأتك الحالية في السعودية.
            </SectionDescription>
          </div>

          {/* Qualification Matrix: Suitable vs Alternative */}
          <div 
            id="qualification-matrix-grid" 
            className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch"
          >
            {/* Suitable For Card */}
            <div 
              id="qualification-suitable-card"
              className="p-5 md:p-6 rounded-2xl bg-surface border-2 border-secondary/30 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-secondary/15 text-secondary flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 id="qualification-suitable-heading" className="text-base font-bold text-text-primary font-arabic">
                      الخدمة مناسبة بشكل خاص لـ:
                    </h3>
                    <span className="text-[11px] text-secondary font-arabic font-medium">
                      الحلول المصممة لواقع الشركات في السعودية
                    </span>
                  </div>
                </div>

                <ul id="qualification-suitable-list" className="space-y-3 font-arabic text-xs md:text-sm text-text-secondary">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    <span><strong className="text-text-primary">الشركات الصغيرة والمتوسطة:</strong> المنشآت النامية في السوق السعودي التي تحتاج ضبطاً محاسبياً متوافقاً مع الأنظمة واللوائح المحلية.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    <span><strong className="text-text-primary">المنشآت التي تحتاج تنظيم الحسابات:</strong> لترتيب الفواتير التائهة، إدخال القيود بانتظام، ومعالجة فوضى الدفاتر القديمة.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    <span><strong className="text-text-primary">المنشآت التي تريد تقارير مالية واضحة:</strong> لإصدار قوائم مالية دورية دقيقة ومفهومة دون مصطلحات معقدة تعيق اتخاذ القرار.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    <span><strong className="text-text-primary">أصحاب الأعمال الذين يريدون فهم الربحية والسيولة:</strong> لمعرفة هوامش الربح الحقيقية وتفادي أزمات التدفق النقدي المفاجئة.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    <span><strong className="text-text-primary">المنشآت التي تحتاج دعمًا ماليًا دون إنشاء قسم مالي كامل:</strong> للحصول على خبرة محاسبية وإشراف مالي قيادي دون تحمل أعباء توظيف وتأمينات فريق كامل.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* When Other Solutions Might Be Better Card */}
            <div 
              id="qualification-alternative-card"
              className="p-5 md:p-6 rounded-2xl bg-slate-50 border border-border flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-slate-200/80 text-text-secondary flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 id="qualification-alternative-heading" className="text-base font-bold text-text-primary font-arabic">
                      قد تكون هناك حلول بديلة أنسب إذا كنت:
                    </h3>
                    <span className="text-[11px] text-text-muted font-arabic font-medium">
                      لتوجيهك نحو المسار الأنسب لطبيعة نشاطك
                    </span>
                  </div>
                </div>

                <ul id="qualification-alternative-list" className="space-y-3 font-arabic text-xs md:text-sm text-text-secondary">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
                    <span><strong className="text-text-primary">تحتاج محاسب كاشير أو تواجداً مكتبياً يومياً:</strong> نموذج عملنا يعتمد على الإدارة السحابية والعمل عن بعد عبر الأنظمة السحابية والاجتماعات الدورية المرئية.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
                    <span><strong className="text-text-primary">تبحث عن مكتب مراجعة وتدقيق خارجي لإصدار شهادة قانونية:</strong> نحن نتولى الإدارة المالية والمحاسبية الداخلية، بينما تُعتمد القوائم القانونية عبر محاسبين قانونيين مرخصين (مكاتب تدقيق معتمدة).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
                    <span><strong className="text-text-primary">شركات ضخمة تتطلب إدارات مالية مركزية ميدانية:</strong> المنشآت الكبرى التي تمتلك هياكل وظيفية ضخمة بمئات الكوادر في المقر الرئيسي غالباً ما تحتاج إدارة مالية مقيمة.</span>
                  </li>
                </ul>
              </div>

              <div 
                id="qualification-clarity-box"
                className="mt-6 p-3 rounded-lg bg-white border border-border-subtle text-xs text-text-muted font-arabic leading-relaxed"
              >
                إذا كانت منشأتك تقع في أي مرحلة بين التأسيس والنمو، يمكنك طلب جلسة تقييم مجانية لدراسة حالتك واقتراح آلية العمل الملائمة.
              </div>
            </div>
          </div>

          {/* CTA Area */}
          <div 
            id="qualification-cta-container"
            className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <a 
              href="#consultation-section"
              id="qualification-primary-cta"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary-light text-white font-arabic font-bold text-sm shadow-sm transition-colors"
            >
              <span>قيّم احتياج منشأتك</span>
              <ArrowLeft className="w-4 h-4 text-secondary" />
            </a>

            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="qualification-whatsapp-cta"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 border border-border text-text-primary font-arabic font-semibold text-sm transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-secondary" />
              <span>تواصل مباشر لتقييم الاحتياج</span>
            </a>
          </div>

        </div>
      </Container>
    </SectionWrapper>
  );
}
