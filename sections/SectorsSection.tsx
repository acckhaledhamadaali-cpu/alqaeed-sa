import { 
  UtensilsCrossed, 
  Store, 
  HardHat, 
  Briefcase, 
  Calendar, 
  TrendingUp, 
  Rocket, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowLeft, 
  MessageSquare 
} from 'lucide-react';

interface SectorItem {
  id: string;
  name: string;
  englishTitle: string;
  icon: typeof UtensilsCrossed;
  financialProblem: string;
  solution: string;
  whatsAppMsg: string;
}

const WHATSAPP_NUMBER = '966511294383';

const SECTORS: SectorItem[] = [
  {
    id: 'fnb',
    name: 'المطاعم والمقاهي',
    englishTitle: 'Restaurants & Cafes',
    icon: UtensilsCrossed,
    financialProblem: 'متابعة تكلفة المبيعات (Food Cost)، ضبط هوامش الربح، وإدارة سيولة نقاط البيع وتطبيقات التوصيل.',
    solution: 'مطابقة مبيعات الكاش وتطبيقات التوصيل، حساب نسب الهدر بدقة، وضبط تكاليف المكونات ومصروفات التشغيل اليومية.',
    whatsAppMsg: 'السلام عليكم، منشأتنا تعمل في قطاع (المطاعم والمقاهي) ونرغب في تنظيم التكاليف ومتابعة السيولة.'
  },
  {
    id: 'retail',
    name: 'التجزئة والمتاجر',
    englishTitle: 'Retail & E-commerce',
    icon: Store,
    financialProblem: 'المخزون والمبيعات والهامش، وتتبع التدفق النقدي من منافذ البيع وبوابات الدفع الإلكتروني.',
    solution: 'مراقبة تكلفة البضاعة المباعة (COGS)، مطابقة التحصيلات البنكية، وتفادي تجميد السيولة في بضائع راكدة.',
    whatsAppMsg: 'السلام عليكم، منشأتنا تعمل في قطاع (التجزئة) ونرغب في ضبط المخزون ومتابعة هوامش الربح والتدفق النقدي.'
  },
  {
    id: 'contracting',
    name: 'المقاولات والتشييد',
    englishTitle: 'Contracting',
    icon: HardHat,
    financialProblem: 'متابعة المشاريع والتكاليف والمستخلصات، وإدارة فجوات السيولة بين فترات التنفيذ والتحصيل.',
    solution: 'تطبيق محاسبة مراكز التكلفة لكل مشروع، جدولة دفعات المستخلصات، وتفادي نزيف السيولة التشغيلية.',
    whatsAppMsg: 'السلام عليكم، نعمل في قطاع (المقاولات) ونرغب في متابعة تكاليف المشاريع ومستخلصات العمل بدقة.'
  },
  {
    id: 'services',
    name: 'الخدمات والاستشارات',
    englishTitle: 'Services',
    icon: Briefcase,
    financialProblem: 'تسعير الخدمات وربحية العقود، ومتابعة تحصيل فواتير العملاء وتكلفة ساعات العمل المباشرة.',
    solution: 'تحليل هامش الربحية لكل خدمة أو عقد، تنظيم الفواتير الدورية، وتفعيل آلية حازمة لمتابعة الذمم المدينة.',
    whatsAppMsg: 'السلام عليكم، شركتنا تعمل في قطاع (الخدمات) ونرغب في تنظيم فواتير العملاء وتحليل ربحية العقود.'
  },
  {
    id: 'events',
    name: 'تنظيم وتجهيز المناسبات',
    englishTitle: 'Event Management & Setup',
    icon: Calendar,
    financialProblem: 'تقلبات الإيرادات الموسمية، وضبط تكاليف الموردين وتجهيزات الفعالية قبل استلام الدفعات النهائية.',
    solution: 'عزل تكلفة كل فعالية بمركز تكلفة مستقل، ضبط سداد مستحقات الموردين، وإدارة السيولة النقدية في فترات الركود والذروة.',
    whatsAppMsg: 'السلام عليكم، نعمل في مجال (تنظيم وتجهيز المناسبات) ونرغب في ضبط تكاليف الفعاليات ومتابعة السيولة.'
  },
  {
    id: 'trading',
    name: 'التجارة العامة والتوزيع',
    englishTitle: 'Trading & Wholesale',
    icon: TrendingUp,
    financialProblem: 'متابعة حدود الائتمان وأعمار ديون العملاء، وحساب التكلفة الفعلية للاستيراد والتخزين.',
    solution: 'إدارة تسويات الموردين والعملاء الآجلة، احتساب مصاريف الشحن والجمارك ضمن تكلفة المنتجات، وتقليل مخاطر الديون.',
    whatsAppMsg: 'السلام عليكم، نعمل في قطاع (التجارة) ونرغب في متابعة أعمار الديون وضبط دورة المشتريات والتحصيل.'
  },
  {
    id: 'startups',
    name: 'المشاريع الناشئة',
    englishTitle: 'Startups & Ventures',
    icon: Rocket,
    financialProblem: 'ضبط معدل حرق السيولة (Burn Rate)، والغموض في الجدوى وهيكل التسعير بمراحل النمو الأولى.',
    solution: 'تخطيط المدرج النقدي (Runway)، بناء موازنات تقديرية تشغيلية، وتجهيز تقارير مالية واضحة أمام الشركاء والمستثمرين.',
    whatsAppMsg: 'السلام عليكم، لدينا (مشروع ناشئ) ونرغب في إدارة السيولة وبناء تقارير مالية دقيقة للإدارة والشركاء.'
  }
];

export default function SectorsSection() {
  return (
    <section 
      id="sectors-section" 
      className="border-t border-border-subtle bg-surface-subtle/20 py-14 sm:py-18 md:py-24"
      aria-labelledby="sectors-title"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header - Centered & Authoritative */}
        <div id="sectors-header" className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <div 
            id="sectors-badge"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-arabic font-semibold mb-3.5"
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>خبرة مالية ملائمة لواقع السوق السعودي والـ SMEs</span>
          </div>

          <h2 id="sectors-title" className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary font-arabic mb-4 tracking-tight">
            قطاعات نخدمها بحلول مالية تفهم طبيعة نشاطك
          </h2>
          
          <p id="sectors-description" className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-2xl mx-auto">
            تختلف التحديات المالية باختلاف النشاط؛ فمشكلة المقاول في المستخلصات ليست كمعاناة المطعم في تكلفة الأغذية أو متجر التجزئة في ركود المخزون. نقدم معالجة مباشرة ومجربة لمشكلات السيولة وهوامش الربح في كل قطاع.
          </p>
        </div>

        {/* Sectors Grid */}
        <div 
          id="sectors-grid" 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10"
        >
          {SECTORS.map((sector) => {
            const Icon = sector.icon;
            const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(sector.whatsAppMsg)}`;

            return (
              <div
                key={sector.id}
                id={`sector-card-${sector.id}`}
                className="group flex flex-col justify-between rounded-2xl border border-border bg-white p-5 sm:p-6 shadow-xs hover:shadow-md transition-all duration-200 hover:border-secondary/40"
              >
                <div>
                  {/* Card Header: Icon + Title */}
                  <div className="flex items-start gap-3.5 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-white transition-colors duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-text-primary font-arabic">
                        {sector.name}
                      </h3>
                      <p className="text-[11px] text-text-muted font-sans">
                        {sector.englishTitle}
                      </p>
                    </div>
                  </div>

                  {/* Typical Financial Problem */}
                  <div className="mb-3.5 rounded-xl bg-amber-500/[0.06] border border-amber-500/20 p-3">
                    <div className="flex items-center gap-1.5 text-amber-800 text-xs font-bold font-arabic mb-1">
                      <AlertTriangle className="w-3.5 h-3.5 shrink-0 text-amber-600" />
                      <span>المشكلة المالية الشائعة:</span>
                    </div>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {sector.financialProblem}
                    </p>
                  </div>

                  {/* Practical Financial Solution */}
                  <div className="mb-4">
                    <p className="text-[11px] font-bold text-text-primary mb-1.5 flex items-center gap-1 font-arabic">
                      <CheckCircle2 className="w-3 h-3 text-secondary" />
                      <span>كيف نعالجها عملياً:</span>
                    </p>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {sector.solution}
                    </p>
                  </div>
                </div>

                {/* Card Action / Conversion Link */}
                <div className="pt-3.5 border-t border-border-subtle flex items-center justify-between">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`btn-discuss-${sector.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary hover:text-secondary-hover font-arabic transition-colors"
                  >
                    <span>استفسر عن مالية {sector.name}</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </a>
                  <span className="text-[10px] text-text-muted">السوق السعودي</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Realistic Disclaimer & Coverage for Other Activities */}
        <div 
          id="sectors-other-activities-banner"
          className="rounded-2xl border border-border bg-white p-5 sm:p-6 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-5"
        >
          <div className="space-y-1.5 max-w-3xl">
            <h4 className="text-sm sm:text-base font-bold text-text-primary font-arabic">
              هل نشاط منشأتك غير مذكور أعلاه؟
            </h4>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              إذا كانت منشأتك تمارس نشاطاً تجارياً أو مهنياً في السعودية ولديها تدفقات بيع وشراء، فإن مبادئ الحوكمة المالية، ومسك الدفاتر، وإدارة السيولة، وإعداد القوائم المالية تطبق بدقة وفق طبيعة نشاطك. نلتزم بعدم تقديم أي خدمة لا نملك فيها فهماً كاملاً لبيئة عملك.
            </p>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('السلام عليكم، أرغب في تقييم الوضع المالي لمنشأتي ومناقشة مدى ملاءمة خدماتكم لنشاطنا.')}`}
              target="_blank"
              rel="noopener noreferrer"
              id="sectors-general-cta-btn"
              className="inline-flex w-full md:w-auto items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-primary hover:bg-primary-light text-white text-xs sm:text-sm font-arabic font-bold shadow-xs transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-secondary" />
              <span>ناقش ملاءمة نشاطك المالي</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
