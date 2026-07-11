import { HTMLAttributes } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import { TYPOGRAPHY } from '../src/lib/tokens';

interface StatItem {
  value: string;
  label: string;
}

const PROFILE = {
  name: "خالد القائد",
  title: "محاسب ومحلل مالي"
};

const STATISTICS: StatItem[] = [
  { value: "9+", label: "سنوات خبرة" },
  { value: "12", label: "قطاعا مختلفا" },
  { value: "MBA", label: "ماجستير إدارة الأعمال" },
  { value: "AI Financial", label: "الذكاء الاصطناعي وهندسة الأوامر" }
];

const PARAGRAPHS: string[] = [
  "أنا خالد القائد محاسب ومحلل مالي أساعد أصحاب المنشآت الصغيرة والمتوسطة في المملكة العربية السعودية على بناء إدارة مالية تمنحهم رؤية واضحة لأعمالهم لأنني أؤمن أن القرار الصحيح يبدأ من أرقام صحيحة",
  "على مدار أكثر من 9 سنوات من الخبرة عملت مع 12 قطاعا مختلفا مما أكسبني فهما عمليا لاحتياجات كل نشاط سواء كان مطعما أو مقهى أو شركة تجارية أو مصنعا أو مؤسسة مقاولات أو نشاطا خدميا لذلك لا أقدم حلولا عامة بل أقدم حلولا تناسب طبيعة كل منشأة وأهدافها",
  "أحمل بكالوريوس التجارة شعبة المحاسبة وماجستير إدارة الأعمال كما أستفيد من تقنيات الذكاء الاصطناعي وهندسة الأوامر لتحليل البيانات المالية بكفاءة أعلى واستخراج المعلومات بسرعة ودقة مع الالتزام الكامل بالمعايير المحاسبية وأفضل الممارسات المالية لأن التقنية بالنسبة لي وسيلة لرفع جودة الخدمة أما القرار المالي فيبقى مبنيا على الخبرة والتحليل المهني",
  "عندما تبدأ العمل معي فأنت لا تتعامل مع شخص يقتصر دوره على تسجيل القيود المحاسبية أو إعداد التقارير فقط بل مع شريك مالي يتابع منشأتك باستمرار ويحول الأرقام إلى معلومات واضحة تساعدك على اتخاذ قرارات أكثر ثقة واكتشاف فرص التحسين ومعالجة المشكلات قبل أن تؤثر على نمو أعمالك",
  "سأساعدك على تنظيم حسابات منشأتك ومتابعة الإيرادات والمصروفات والتدفقات النقدية وقياس الربحية الحقيقية وإعداد التقارير المالية وتحليل الأداء وتقديم توصيات عملية تساعدك على تحسين النتائج وخفض الهدر ودعم خطط النمو والتوسع",
  "هدفي أن تكون أرقام منشأتك واضحة في أي وقت وأن تعرف أين تحقق الأرباح وأين توجد فرص التحسين وأن تتخذ قراراتك بثقة اعتمادا على بيانات دقيقة بينما تتفرغ أنت لإدارة أعمالك وتنميتها وأتولى أنا متابعة الجانب المالي بكل احترافية",
  "ولأن نجاح أي منشأة لا يعتمد على حجم مبيعاتها فقط بل على قدرتها على فهم أرقامها واتخاذ القرار الصحيح في الوقت المناسب"
];

const QUOTE: string = "الأرقام وحدها لا تنجح المنشآت لكن فهمها هو ما يصنع الفرق";

export default function AboutSection(props: HTMLAttributes<HTMLElement>) {
  return (
    <SectionWrapper id="about-section-wrapper" variant="white" spacing="default" className="!py-10 md:!py-24" {...props}>
      <Container id="about-container">
        <div id="about-content" className="flex flex-col space-y-6 md:space-y-16 text-right">
          
          {/* Section Title */}
          <div id="about-header" className="w-full">
            <SectionTitle id="about-title" level={2} className="font-bold">
              من أنا
            </SectionTitle>
          </div>

          {/* Two-Column Grid (Desktop Only, Stacked on Mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-start">
            
            {/* Column 1: Profile Area & Statistics */}
            <div id="about-col-1" className="flex flex-col space-y-6 md:space-y-12">
              
              {/* Profile Area */}
              <div id="about-profile-area" className="flex flex-col space-y-2">
                <h3 id="about-profile-name" className={`${TYPOGRAPHY.display.l} text-text-primary font-bold`}>
                  {PROFILE.name}
                </h3>
                <p id="about-profile-title" className={`${TYPOGRAPHY.body.large} text-text-secondary font-medium`}>
                  {PROFILE.title}
                </p>
              </div>

              {/* Statistics Grid */}
              <div id="about-statistics" className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 md:gap-6 w-full items-stretch">
                {STATISTICS.map((stat, index) => (
                  <div 
                    key={index} 
                    id={`about-stat-item-${index}`}
                    className="border border-border-subtle p-3 sm:p-5 rounded-xl bg-white flex flex-col items-center justify-center text-center h-full min-h-[100px] sm:min-h-[130px] transition-all duration-200 hover:border-secondary/30 shadow-[0_2px_8px_rgba(0,0,0,0.01)]"
                  >
                    <span 
                      id={`about-stat-value-${index}`} 
                      className={`${stat.value === 'AI Financial' ? 'text-sm xs:text-base sm:text-lg md:text-xl font-bold font-sans leading-tight' : 'text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-sans leading-none'} text-text-primary mb-1.5`}
                    >
                      {stat.value}
                    </span>
                    <span 
                      id={`about-stat-label-${index}`} 
                      className="text-[10px] xs:text-[11px] sm:text-xs md:text-sm font-medium leading-snug text-text-secondary font-arabic"
                    >
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

            </div>

            {/* Column 2: Description & Quote */}
            <div id="about-col-2" className="flex flex-col space-y-6 md:space-y-8 max-w-xl md:max-w-2xl">
              
              {/* Description Paragraphs */}
              <div id="about-description" className="flex flex-col space-y-4 md:space-y-8">
                {PARAGRAPHS.map((paragraph, index) => (
                  <p 
                    key={index} 
                    id={`about-description-paragraph-${index}`}
                    className={`${TYPOGRAPHY.body.normal} text-text-secondary leading-[1.6] md:leading-[1.85]`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Quote Blockquote */}
              <blockquote 
                id="about-quote" 
                className="border-r-4 border-secondary bg-surface-muted/40 pr-6 pl-4 py-4 sm:py-5 rounded-l-lg text-right"
              >
                <p className="text-xl md:text-2xl font-semibold text-text-primary font-arabic leading-[1.5] md:leading-relaxed">
                  "{QUOTE}"
                </p>
              </blockquote>

            </div>

          </div>

        </div>
      </Container>
    </SectionWrapper>
  );
}


