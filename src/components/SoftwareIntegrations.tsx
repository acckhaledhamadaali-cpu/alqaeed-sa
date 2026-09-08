import { ShieldCheck, CheckCircle2, Lock, ArrowLeft, MessageSquare, AlertCircle, Sparkles } from 'lucide-react';
import AccountingLogoMarquee from './AccountingLogoMarquee';

interface SMESystem {
  id: string;
  name: string;
  englishName: string;
  category: string;
  scopeSummary: string;
  operations: string[];
}

const SME_SYSTEMS: SMESystem[] = [
  {
    id: 'qoyod',
    name: 'قيود',
    englishName: 'Qoyod',
    category: 'نظام سحابي معتمد في السعودية للـ SMEs',
    scopeSummary: 'دعم وتنظيم وربط العمليات المالية بحسب النظام المستخدم',
    operations: [
      'ضبط وترتيب شجرة الحسابات بما يطابق نشاطك الفعلي',
      'متابعة فواتير المبيعات والمشتريات والفوترة الإلكترونية',
      'إجراء المطابقات البنكية الشهرية بدقة وسرعة',
      'استخراج إقرارات ضريبة القيمة المضافة وميزان المراجعة'
    ]
  },
  {
    id: 'daftra',
    name: 'دفترة',
    englishName: 'Daftra',
    category: 'إدارة متكاملة للمبيعات والمخزون والمحاسبة',
    scopeSummary: 'دعم وتنظيم وربط العمليات المالية بحسب النظام المستخدم',
    operations: [
      'ضبط قيود المخزون وتكلفة البضاعة المباعة',
      'متابعة حسابات الموردين والعملاء وأعمار الديون',
      'إقفال الفترات المحاسبية الشهرية والربع سنوية',
      'إعداد تقارير الأرباح والخسائر ومراكز التكلفة'
    ]
  },
  {
    id: 'odoo',
    name: 'أودو',
    englishName: 'Odoo',
    category: 'نظام ERP مرن وسحابي للشركات المتوسطة والنامية',
    scopeSummary: 'دعم وتنظيم وربط العمليات المالية بحسب النظام المستخدم',
    operations: [
      'العمل على تطبيق المحاسبة والفوترة (Invoicing & Accounting)',
      'تسجيل ومراجعة قيود اليومية للعمليات المركبة',
      'مطابقة مبيعات نقاط البيع (POS) مع حركة البنوك والنقدية',
      'توليد القوائم المالية والتحليلات اللحظية للإدارة'
    ]
  },
  {
    id: 'zoho-books',
    name: 'زوهو بوكس',
    englishName: 'Zoho Books',
    category: 'نظام محاسبي سحابي مرن ومناسب للمنشآت الخدمية والتجارية',
    scopeSummary: 'دعم وتنظيم وربط العمليات المالية بحسب النظام المستخدم',
    operations: [
      'مراجعة تدفق الفواتير والمصروفات اليومية بانتظام',
      'مطابقة كشوف الحسابات البنكية ومعالجة الفروقات',
      'إدارة الأصول الثابتة وحساب الإهلاكات الدورية',
      'استخراج لوحات التحكم ومؤشرات التدفق النقدي'
    ]
  },
  {
    id: 'erpnext',
    name: 'إي آر بي نكست',
    englishName: 'ERPNext',
    category: 'نظام عمليات ومحاسبة متكامل مفتوح المصدر للمنشآت',
    scopeSummary: 'دعم وتنظيم وربط العمليات المالية بحسب النظام المستخدم',
    operations: [
      'ربط القيود المحاسبية بدورة المشتريات والتشغيل',
      'متابعة مراكز الربحية والمصروفات لكل مشروع أو فرع',
      'فحص قيود التسوية الجردية والتحقق من صحة الترحيل',
      'إعداد ميزان المراجعة والقوائم الختامية الدقيقة'
    ]
  },
  {
    id: 'quickbooks',
    name: 'كويك بوكس',
    englishName: 'QuickBooks',
    category: 'نظام محاسبي عالمي شائع بين رواد الأعمال والمؤسسات',
    scopeSummary: 'دعم وتنظيم وربط العمليات المالية بحسب النظام المستخدم',
    operations: [
      'تبويب المصروفات والإيرادات وفق الأصول المحاسبية',
      'إجراء التسويات البنكية وحسابات بطاقات الائتمان',
      'تصحيح قيود السنوات السابقة وضبط الأرصدة الافتتاحية',
      'استخراج التقارير المالية والتحليلية المفهومة للمالك'
    ]
  }
];

const WHATSAPP_NUMBER = '966511294383';
const WHATSAPP_SYSTEMS_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'السلام عليكم، أود معرفة آلية العمل المالي والمحاسبي على البرنامج المستخدم في منشأتي.'
)}`;

export default function SoftwareIntegrations() {
  return (
    <section 
      id="accounting-systems-section" 
      className="border-y border-border-subtle bg-surface-subtle/25 py-12 sm:py-16 md:py-20"
      aria-labelledby="integrations-title"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header - Written from Client's Perspective */}
        <div id="systems-header" className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <div 
            id="systems-pill"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-arabic font-semibold mb-3"
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>نعمل على نظامك الحالي دون إجبارك على تغييره</span>
          </div>

          <h2 id="integrations-title" className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary font-arabic mb-4 tracking-tight">
            برنامجك المحاسبي الحالي.. نبدأ منه وننظم أرقامك فيه
          </h2>
          
          <p id="systems-description" className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-2xl mx-auto">
            بصفتك صاحب منشأة صغيرة أو متوسطة، لست بحاجة لشراء برامج جديدة باهظة أو هدر الوقت في نقل بياناتك.
            نحن نتولى إدارة وتدقيق عملياتك المالية مباشرة من داخل برنامجك المعتمد، مع{' '}
            <strong className="text-text-primary font-semibold">دعم وتنظيم وربط العمليات المالية بحسب النظام المستخدم</strong>.
          </p>

          {/* Quick Trust Highlights */}
          <div id="systems-trust-strip" className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs text-text-secondary">
            <span className="inline-flex items-center gap-1 bg-white border border-border px-3 py-1 rounded-full shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-secondary" />
              <span>العمل على النظام المعتمد لديك</span>
            </span>
            <span className="inline-flex items-center gap-1 bg-white border border-border px-3 py-1 rounded-full shadow-2xs">
              <Lock className="w-3.5 h-3.5 text-secondary" />
              <span>صلاحيات محاسب آمنة ومحددة</span>
            </span>
            <span className="inline-flex items-center gap-1 bg-white border border-border px-3 py-1 rounded-full shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-secondary" />
              <span>بدون تكاليف ربط برمجي أو اشتراكات وسيطة</span>
            </span>
          </div>
        </div>

        {/* Visual Logo Bar for Recognition */}
        <div id="systems-marquee-container" className="mb-10">
          <AccountingLogoMarquee />
        </div>

        {/* 6 SME Supported Systems Cards */}
        <div 
          id="sme-systems-grid" 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10"
        >
          {SME_SYSTEMS.map((system) => (
            <div
              key={system.id}
              id={`system-card-${system.id}`}
              className="group flex flex-col justify-between rounded-2xl border border-border bg-white p-5 sm:p-6 shadow-xs hover:shadow-md transition-all duration-200 hover:border-secondary/30"
            >
              <div>
                {/* Header: Name + Badge */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-text-primary font-arabic flex items-center gap-2">
                      <span>{system.name}</span>
                      <span className="text-xs text-text-muted font-normal font-sans">({system.englishName})</span>
                    </h3>
                    <p className="text-xs text-text-muted mt-0.5">{system.category}</p>
                  </div>
                  
                  {/* Status Badge: Honest "Working on the system" */}
                  <span 
                    id={`badge-${system.id}`}
                    className="shrink-0 inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-arabic font-semibold"
                    title="العمل المالي والمحاسبي مباشرة على واجهة النظام المعتمد دون الحاجة لتكامل برمجي API معقد"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>العمل على النظام</span>
                  </span>
                </div>

                {/* Mandated Scope Summary */}
                <div className="mb-4 p-2.5 rounded-xl bg-surface-subtle/50 border border-border-subtle">
                  <p className="text-xs font-arabic font-medium text-secondary flex items-start gap-1.5 leading-snug">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5 text-secondary" />
                    <span>{system.scopeSummary}</span>
                  </p>
                </div>

                {/* Specific Operations Done for the Client */}
                <div className="space-y-2 mb-4">
                  <p className="text-[11px] font-bold text-text-primary tracking-wide">ما ننجزه لمنشأتك على هذا النظام:</p>
                  <ul className="space-y-1.5">
                    {system.operations.map((op, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-text-secondary leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0 mt-1.5"></span>
                        <span>{op}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer Micro-Note */}
              <div className="pt-3 border-t border-border-subtle flex items-center justify-between text-[11px] text-text-muted">
                <span>جاهزية متطلبات الفوترة والزكاة</span>
                <span className="text-secondary font-medium">بياناتك بحوزتك دائماً</span>
              </div>
            </div>
          ))}
        </div>

        {/* Realistic SME Context Box - Addressing SAP & Heavy Systems Realistically */}
        <div 
          id="sme-systems-note-box"
          className="rounded-2xl border border-secondary/20 bg-secondary/[0.03] p-6 sm:p-7 mb-8 text-right"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2 text-secondary font-arabic font-bold text-sm sm:text-base">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>رؤية القائد للشركات الصغيرة والمتوسطة (SMEs)</span>
              </div>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                الأنظمة العملاقة (مثل SAP أو Oracle) صُممت للشركات القابضة والمجموعات الضخمة التي تتطلب ميزانيات ملايين الريالات وفِرق تقنية متفرغة. أما المنشآت الصغيرة والمتوسطة في المملكة، فتحتاج إلى برامج سحابية مرنة وفعّالة من حيث التكلفة. 
                <strong className="text-text-primary font-semibold"> دورنا ليس بيع برامج أو فرض تغييرات معقدة؛ بل تسخير خبرتنا المالية والمحاسبية للعمل مباشرة على برنامجك الحالي وتقديم مخرجات مالية تدعم نموك.</strong>
              </p>
            </div>

            <div className="shrink-0 w-full md:w-auto">
              <a
                href={WHATSAPP_SYSTEMS_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="systems-whatsapp-discuss-btn"
                className="inline-flex w-full md:w-auto items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-primary hover:bg-primary-light text-white text-xs sm:text-sm font-arabic font-bold shadow-xs transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-secondary" />
                <span>ناقش نظام منشأتك الحالي</span>
              </a>
            </div>
          </div>
        </div>

        {/* Alternative Systems & Excel Note */}
        <div id="systems-alternatives-banner" className="text-center bg-white border border-border rounded-xl p-4 sm:p-5">
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
            <strong className="text-text-primary">هل تستخدم نظاماً مختلفاً (مثل سماك SMACC، رصيد، فواتير كاشير، أو جداول إكسل منظمة)؟</strong>{' '}
            لا تقلق، نراجع الوضع المالي لدفاترك ونوضح لك فوراً إمكانية العمل عليها مباشرة أو الترتيب الأنسب دون أي تعقيد.
          </p>
        </div>

      </div>
    </section>
  );
}

