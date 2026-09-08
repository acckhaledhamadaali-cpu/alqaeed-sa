import { HTMLAttributes } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import SectionDescription from '../components/SectionDescription';
import { 
  CheckCircle2, 
  ArrowLeft, 
  MessageCircle, 
  FileCheck, 
  TrendingUp, 
  Briefcase, 
  HelpCircle, 
  Users, 
  Sparkles,
  Layers
} from 'lucide-react';

const WHATSAPP_NUMBER = '966511294383';

interface PackageItem {
  id: string;
  nameEn: string;
  nameAr: string;
  tagline: string;
  badge: string;
  icon: typeof FileCheck;
  targetAudience: string;
  problems: string[];
  deliverables: string[];
  isHighlighted?: boolean;
  whatsappMessage: string;
  consultationTopic: string;
}

const PACKAGES: PackageItem[] = [
  {
    id: 'package-accounting-compliance',
    nameEn: 'Accounting & Compliance',
    nameAr: 'المحاسبة والالتزام المالي',
    tagline: 'تنظيم الحسابات والقيود والامتثال التام لمتطلبات الزكاة والضريبة',
    badge: 'الأساس والامتثال',
    icon: FileCheck,
    targetAudience: 'أصحاب المنشآت والشركات الناشئة الذين يحتاجون إلى تنظيم وتأسيس الدفاتر المحاسبية، ضبط العمليات اليومية، وضمان الامتثال التام لهيئة الزكاة والضريبة والجمارك (ZATCA).',
    problems: [
      'تراكم الفواتير والعمليات غير المسجلة ومجهولة المصدر',
      'صعوبة معرفة الأرصدة الفعلية وغياب التسويات البنكية الدورية',
      'مخاطر الغرامات نتيجة أخطاء أو تأخر إقرارات الضريبة والزكاة'
    ],
    deliverables: [
      'مسك الدفاتر المحاسبية وتسجيل القيود والعمليات اليومية بانتظام',
      'التسويات البنكية ومطابقة حسابات الموردين والعملاء شهرياً',
      'إعداد وتقديم إقرارات ضريبة القيمة المضافة (VAT) في مواعيدها',
      'تجهيز ملف الزكاة الشرعية وتقديم الإقرار لهيئة ZATCA',
      'إعداد القوائم المالية الدورية والسنوية وفق المعايير المعتمدة'
    ],
    whatsappMessage: 'السلام عليكم، أرغب في الاستفسار وطلب تقييم مالي بخصوص باقة المحاسبة والالتزام (Accounting & Compliance) لمنشأتي.',
    consultationTopic: 'باقة المحاسبة والالتزام'
  },
  {
    id: 'package-financial-management',
    nameEn: 'Financial Management',
    nameAr: 'الإدارة المالية والمتابعة',
    tagline: 'تحويل الأرقام المحاسبية إلى رؤى إدارية وقرارات تسعير وتوسع مدروسة',
    badge: 'الأكثر طلباً للمنشآت النامية',
    icon: TrendingUp,
    targetAudience: 'المنشآت القائمة التي تمتلك حسابات مسجلة ومحاسباً، لكنها تفتقر إلى التحليل المالي المتخصص والتقارير الدورية التي توضح أين تذهب الأموال وكيفية حماية السيولة.',
    problems: [
      'أرقام مسجلة في الدفاتر لكن دون وضوح لهوامش الربحية ونقاط التعادل',
      'أزمات نقص السيولة المفاجئة رغم تحقيق مبيعات جيدة في القوائم',
      'غياب الموازنات التقديرية والتخبط في قرارات التسعير والتحكم بالمصاريف'
    ],
    deliverables: [
      'تحليل مالي متقدم للقوائم المالية ومؤشرات الربحية والسيولة',
      'تقارير مالية إدارية شهرية موجزة ومباشرة لصناع القرار والشركاء',
      'متابعة دورية لحركة التدفقات النقدية والتنبؤ باحتياجات السيولة',
      'بناء ومتابعة الموازنات التقديرية ومقارنة الفعلي بالمخطط للحد من الهدر',
      'لوحة قياس مؤشرات الأداء المالي الرئيسية (Financial KPIs)'
    ],
    isHighlighted: true,
    whatsappMessage: 'السلام عليكم، أرغب في الاستفسار وطلب تقييم مالي بخصوص باقة الإدارة المالية والمتابعة (Financial Management) لمنشأتي.',
    consultationTopic: 'باقة الإدارة المالية والمتابعة'
  },
  {
    id: 'package-virtual-cfo',
    nameEn: 'Virtual CFO',
    nameAr: 'المدير المالي عن بعد',
    tagline: 'قيادة وتوجيه مالي استراتيجي متقدم لدعم قرارات الإدارة العليا',
    badge: 'القيادة والاستراتيجية',
    icon: Briefcase,
    targetAudience: 'الشركات المتوسطة والصغيرة ورواد الأعمال في مراحل التوسع والنمو، أو الاستعداد لجولات تمويل واستثمار، والذين يحتاجون لخبرة قيادية عليا دون تحمل تكلفة مدير مالي تنفيذي بدوام كامل.',
    problems: [
      'الحاجة لخبرة مالية استراتيجية عليا عند اتخاذ قرارات مصيرية وتوسعية',
      'صعوبة هيكلة التمويل والتعامل الاحترافي مع البنوك والمستثمرين',
      'غياب النماذج المالية التقديرية وسياسات الحوكمة المالية الداخلية'
    ],
    deliverables: [
      'تخطيط مالي استراتيجي ونمذجة سيناريوهات التوسع والنمو المستقبلي',
      'إدارة مركزية متقدمة لرأس المال العامل وسياسات السيولة والتحصيل',
      'إعداد ملفات الجاهزية التمويلية والتفاوض المالي مع جهات التمويل',
      'المشاركة في اجتماعات الإدارة ومجلس الشركاء لتقديم المشورة المالية',
      'إشراف استراتيجي على فريق الحسابات وتطوير اللوائح الرقابية الداخلية'
    ],
    whatsappMessage: 'السلام عليكم، أرغب في الاستفسار وحجز جلسة استكشافية بخصوص باقة المدير المالي عن بعد (Virtual CFO) لمنشأتي.',
    consultationTopic: 'باقة المدير المالي عن بعد'
  }
];

export default function PackagesSection(props: HTMLAttributes<HTMLElement>) {
  return (
    <SectionWrapper id="packages-section" variant="white" spacing="default" {...props}>
      <Container id="packages-container">
        <div id="packages-wrapper" className="flex flex-col space-y-10 max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div id="packages-header" className="flex flex-col space-y-3 text-center items-center">
            <div 
              id="packages-badge"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold font-arabic"
            >
              <Layers className="w-3.5 h-3.5" aria-hidden="true" />
              <span>باقات وحلول مالية متكاملة</span>
            </div>
            
            <SectionTitle id="packages-title" level={2} className="font-bold text-xl sm:text-2xl md:text-3xl">
              اختر الباقة المالية التي تناسب مرحلة منشأتك
            </SectionTitle>
            
            <SectionDescription id="packages-description" className="text-center max-w-2xl text-text-secondary text-xs sm:text-sm">
              بدلاً من الحيرة بين خدمات منفصلة متعددة، صُممت هذه الباقات التجارية لتلبي احتياج كل مرحلة بدقة ووضوح؛ لتبدأ بما تحتاجه منشأتك فعلياً الآن.
            </SectionDescription>
          </div>

          {/* Packages 3-Column Grid */}
          <div 
            id="packages-grid"
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch"
          >
            {PACKAGES.map((pkg, index) => {
              const Icon = pkg.icon;
              const isHighlighted = pkg.isHighlighted;

              return (
                <div
                  key={pkg.id}
                  id={`package-card-${index}`}
                  className={`flex flex-col justify-between rounded-2xl p-6 transition-all duration-200 relative bg-white border ${
                    isHighlighted
                      ? 'border-secondary shadow-md ring-1 ring-secondary/20'
                      : 'border-border-subtle hover:border-secondary/50 shadow-sm'
                  }`}
                >
                  <div>
                    {/* Top Header: Badge & Icon */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className={`inline-flex items-center text-xs font-bold font-arabic px-2.5 py-1 rounded-full ${
                        isHighlighted 
                          ? 'bg-secondary text-white' 
                          : 'bg-surface-muted text-secondary border border-border-subtle'
                      }`}>
                        {pkg.badge}
                      </span>
                      
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        isHighlighted
                          ? 'bg-secondary/10 text-secondary'
                          : 'bg-surface-muted text-text-primary border border-border-subtle'
                      }`}>
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-1 font-arabic">
                      {pkg.nameAr}
                    </h3>
                    <span className="text-xs font-mono font-bold text-text-muted block mb-3" dir="ltr">
                      {pkg.nameEn}
                    </span>
                    <p className="text-xs sm:text-sm text-text-secondary font-medium leading-relaxed mb-5">
                      {pkg.tagline}
                    </p>

                    {/* Target Audience Box */}
                    <div className="mb-5 p-3 rounded-xl bg-surface-muted/60 border border-border-subtle">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-text-primary mb-1">
                        <Users className="w-3.5 h-3.5 text-secondary shrink-0" aria-hidden="true" />
                        <span>مناسبة لمن؟</span>
                      </div>
                      <p className="text-xs text-text-secondary leading-relaxed font-normal">
                        {pkg.targetAudience}
                      </p>
                    </div>

                    {/* Problems Solved */}
                    <div className="mb-5">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-text-primary mb-2">
                        <HelpCircle className="w-3.5 h-3.5 text-secondary shrink-0" aria-hidden="true" />
                        <span>المشاكل التي تحلها:</span>
                      </div>
                      <ul className="space-y-1.5 text-xs text-text-secondary">
                        {pkg.problems.map((prob, pIndex) => (
                          <li key={pIndex} className="flex items-start gap-2 leading-relaxed font-normal">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-1.5" aria-hidden="true" />
                            <span>{prob}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Deliverables */}
                    <div className="mb-6 pt-4 border-t border-border-subtle">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-text-primary mb-2.5">
                        <Sparkles className="w-3.5 h-3.5 text-secondary shrink-0" aria-hidden="true" />
                        <span>أهم المخرجات:</span>
                      </div>
                      <ul className="space-y-2 text-xs text-text-secondary">
                        {pkg.deliverables.map((deliv, dIndex) => (
                          <li key={dIndex} className="flex items-start gap-2 leading-relaxed font-normal">
                            <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" aria-hidden="true" />
                            <span>{deliv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA Actions */}
                  <div className="pt-4 border-t border-border-subtle flex flex-col gap-2">
                    <a
                      id={`package-cta-eval-${index}`}
                      href="#consultation-section"
                      className={`w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-150 ${
                        isHighlighted
                          ? 'bg-secondary hover:bg-secondary-dark text-white shadow-sm'
                          : 'bg-primary hover:bg-primary-light text-white'
                      }`}
                    >
                      <span>اطلب تقييمًا ماليًا</span>
                      <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                    </a>

                    <a
                      id={`package-cta-chat-${index}`}
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(pkg.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-bold text-text-secondary hover:text-secondary hover:bg-surface-muted/70 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 text-[#25D366]" aria-hidden="true" />
                      <span>تحدث معي عبر واتساب</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pricing Policy Footnote */}
          <div 
            id="packages-pricing-note"
            className="p-5 rounded-2xl bg-surface-muted/40 border border-border-subtle flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-right"
          >
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-text-primary">
                نطاق عمل مخصص وتسعير مرن حسب حجم العمليات
              </h4>
              <p className="text-xs text-text-secondary font-normal mt-1">
                تعتمد تكلفة الباقات على حجم العمليات وعدد الفواتير والأنظمة المحاسبية المستخدمة، دون أي رسوم عشوائية مسبقة.
              </p>
            </div>
            
            <a
              id="packages-footnote-cta"
              href="#consultation-section"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary hover:text-secondary-dark hover:underline underline-offset-4 shrink-0 transition-colors"
            >
              <span>اطلب تقييمًا ماليًا لتحديد الباقة المناسبة</span>
              <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>

        </div>
      </Container>
    </SectionWrapper>
  );
}
