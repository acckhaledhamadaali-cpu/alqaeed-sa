import { HTMLAttributes } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import SectionDescription from '../components/SectionDescription';
import { 
  FileSpreadsheet, 
  TrendingUp, 
  PieChart, 
  Activity, 
  Scale, 
  Clock, 
  ShieldAlert, 
  Lightbulb, 
  BarChart3,
  FileCheck2,
  ArrowDownCircle
} from 'lucide-react';

interface DeliverableItem {
  id: string;
  title: string;
  category: 'core' | 'analysis' | 'advisory';
  description: string;
  icon: typeof FileSpreadsheet;
  conditionalNote?: string;
}

const DELIVERABLES: DeliverableItem[] = [
  {
    id: 'trial-balance',
    title: 'ميزان مراجعة منظم ومطابق',
    category: 'core',
    description: 'كشف مالي تدقيقي شامل ومطابق يضبط كافة الحركات المدينة والدائنة ويضمن توازن العمليات المحاسبية.',
    icon: Scale
  },
  {
    id: 'income-statement',
    title: 'قائمة الدخل (الأرباح والخسائر)',
    category: 'core',
    description: 'بيان واضح للإيرادات والمصروفات وصافي الدخل يوضح الأداء المالي والربح التشغيلي الدوري للمنشأة.',
    icon: FileSpreadsheet
  },
  {
    id: 'balance-sheet',
    title: 'قائمة المركز المالي (الميزانية)',
    category: 'core',
    description: 'تقرير يوضح أصول المنشأة والتزاماتها وحقوق الملكية، لتقديم صورة حقيقية عن الموقف المالي الثابت.',
    icon: FileCheck2
  },
  {
    id: 'cash-flow',
    title: 'تقرير التدفقات النقدية',
    category: 'analysis',
    description: 'تتبع حركة النقد الداخل والخارج لتفادي شح السيولة المفاجئ وضمان القدرة على الوفاء بالالتزامات.',
    icon: TrendingUp
  },
  {
    id: 'profitability-analysis',
    title: 'تحليل الربحية وهوامش الأداء',
    category: 'analysis',
    description: 'فحص هوامش الربح الإجمالية والصافية ومصادر العائد لكل خط إنتاج أو نشاط لتحديد المحركات الأكثر ربحية.',
    icon: PieChart
  },
  {
    id: 'expenses-analysis',
    title: 'تحليل المصروفات وترشيد الهدر',
    category: 'analysis',
    description: 'تصنيف المصاريف الثابتة والمتغيرة ورصد أي بنود مرتفعة أو غير مبررة للمساعدة في خفض التكاليف.',
    icon: BarChart3
  },
  {
    id: 'aging-report',
    title: 'أعمار الذمم المدينة والدائنة',
    category: 'analysis',
    description: 'متابعة مستحقات المنشأة لدى العملاء وفواتير الموردين لتسريع التحصيل وجدولة المدفوعات دون تعثر.',
    icon: Clock,
    conditionalNote: 'عند توفر البيانات المحاسبية المتكاملة'
  },
  {
    id: 'financial-kpis',
    title: 'مؤشرات مالية رئيسية (Financial KPIs)',
    category: 'advisory',
    description: 'مؤشرات رقمية سريعة ومختارة تلخص صحة النشاط، السيولة، كفاءة التشغيل ومعدل دوران المخزون.',
    icon: Activity
  },
  {
    id: 'variance-notes',
    title: 'ملاحظات ورصد الانحرافات المالية',
    category: 'advisory',
    description: 'تنبيهات فورية ومكتوبة عن أي فروقات غير معتادة بين الأداء الفعلي والموازنات التقديرية أو الفترات السابقة.',
    icon: ShieldAlert
  },
  {
    id: 'management-recommendations',
    title: 'توصيات مالية دورية للإدارة',
    category: 'advisory',
    description: 'خلاصة عملية مكتوبة بلغة إدارة الأعمال تقدم حلولاً قابلة للتنفيذ تدعم قرارات التسعير، الإنفاق، والنمو.',
    icon: Lightbulb
  }
];

export default function MonthlyDeliverablesSection(props: HTMLAttributes<HTMLElement>) {
  return (
    <SectionWrapper 
      id="monthly-deliverables-section" 
      variant="white" 
      spacing="default" 
      className="border-t border-border"
      {...props}
    >
      <Container id="monthly-deliverables-container">
        <div id="monthly-deliverables-content" className="flex flex-col space-y-6 md:space-y-8">
          
          {/* Header */}
          <div id="monthly-deliverables-header" className="flex flex-col space-y-3 text-center items-center max-w-3xl mx-auto">
            <div 
              id="monthly-deliverables-pill"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-arabic font-semibold"
            >
              <FileCheck2 className="w-3.5 h-3.5" />
              <span>مخرجات عمل واضحة وملموسة</span>
            </div>

            <SectionTitle id="monthly-deliverables-title" level={2} className="font-bold text-xl sm:text-2xl md:text-3xl">
              ماذا تستلم شهريًا لمنشأتك؟
            </SectionTitle>

            <SectionDescription id="monthly-deliverables-description" className="text-center text-sm md:text-base">
              لا نكتفي بمسك الدفاتر في الخلفية، بل نحول أرقامك المحاسبية إلى تقارير تنفيذية ومؤشرات واضحة تُسلّم لك بانتظام لتكشف لك حقيقة الموقف المالي وتدعم قراراتك.
            </SectionDescription>
          </div>

          {/* Grid of 10 Deliverables */}
          <div 
            id="monthly-deliverables-grid" 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 md:gap-4"
          >
            {DELIVERABLES.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.id}
                  id={`deliverable-card-${item.id}`}
                  className="p-4 rounded-xl bg-surface border border-border hover:border-secondary/40 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2.5">
                      <div className="w-8 h-8 rounded-lg bg-primary/5 text-primary flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-secondary" />
                      </div>
                      <span className="text-[11px] font-mono text-text-muted font-bold">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                    </div>

                    <h3 
                      id={`deliverable-title-${item.id}`}
                      className="text-sm md:text-base font-bold text-text-primary font-arabic mb-1.5"
                    >
                      {item.title}
                    </h3>

                    <p 
                      id={`deliverable-desc-${item.id}`}
                      className="text-xs text-text-secondary font-arabic leading-relaxed"
                    >
                      {item.description}
                    </p>
                  </div>

                  {item.conditionalNote && (
                    <div 
                      id={`deliverable-note-${item.id}`}
                      className="mt-3 pt-2 border-t border-border-subtle flex items-center gap-1.5 text-[11px] text-amber-700 bg-amber-50/60 px-2 py-1 rounded"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                      <span>{item.conditionalNote}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Professional Scope & Data Boundary Banner */}
          <div 
            id="deliverables-disclaimer-card"
            className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-text-secondary font-arabic"
          >
            <div className="flex items-start gap-2.5">
              <div className="w-2 h-2 rounded-full bg-secondary mt-1.5 flex-shrink-0" />
              <p className="leading-relaxed">
                <strong className="text-text-primary">إطار تقديم المخرجات:</strong> تُقدَّم هذه التقارير والمخرجات شهرياً <span className="text-primary font-bold underline decoration-secondary/40">بحسب نطاق الخدمة المتفق عليه والبيانات المتاحة</span> ونوع النظام المحاسبي المستخدم في منشأتك.
              </p>
            </div>
            
            <a 
              href="#consultation-section"
              id="deliverables-cta-button"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary hover:bg-primary-light text-white text-xs font-arabic font-semibold transition-colors flex-shrink-0 w-full sm:w-auto justify-center"
            >
              <span>احصل على مخرجاتك الشهرية</span>
              <ArrowDownCircle className="w-3.5 h-3.5 text-secondary" />
            </a>
          </div>

        </div>
      </Container>
    </SectionWrapper>
  );
}
