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
  "تحتاج المنشآت الصغيرة والمتوسطة **SMEs** إلى أكثر من مجرد تسجيل فواتير لتنجح إنها بحاجة إلى رؤية مالية ثاقبة تحميها من التعثر وتوجهها نحو النمو المستدام",
  "كصاحب عمل ينصب تركيزك على ابتكار الحلول وخدمة عملائك بينما يشكل الجانب المالي عبئاً يستنزف طاقتك هنا يأتي دورنا كشريك مالي استراتيجي يحمل عنك هذا العبء ويوجهك نحو الربحية",
  "من خلال خبرة عملية تمتد لأكثر من 9 سنوات في 12 قطاعاً حيوياً (تشمل المطاعم المقاهي المقاولات والمصانع) ندرك تماماً أن التحديات تختلف ولذلك نبتكر حلولاً مالية مفصلة تناسب طبيعة نشاطك",
  "نجمع بين عمق المعرفة المحاسبية (بكالوريوس محاسبة وماجستير **MBA**) وقوة التكنولوجيا الحديثة حيث نوظف أدوات الذكاء الاصطناعي **AI** وهندسة الأوامر **Prompt Engineering** لتحليل بياناتك بسرعة فائقة وبدقة متناهية",
  "نضمن التزامك التام بالمعايير المحاسبية الدولية **IFRS** ونتجاوز دور المحاسب التقليدي لنكون عينك الساهرة على أداء المنشأة نراقب **Cash Flow** نحلل **KPIs** ونكتشف فرص تعظيم الأرباح",
  "هدفنا أن نوفر لك الطمأنينة الكاملة واليقين المالي لتتخذ قراراتك بثقة تامة وتتفرغ بشغف لتنمية وتوسيع إمبراطوريتك التجارية"
];

const QUOTE: string = "النجاح الحقيقي لمنشأتك يبدأ عندما تتحول الأرقام الغامضة إلى قرارات استراتيجية واضحة";

export default function AboutSection(props: HTMLAttributes<HTMLElement>) {
  return (
    <SectionWrapper id="about-section-wrapper" variant="white" spacing="default" itemScope itemType="https://schema.org/Person" {...props}>
      <Container id="about-container">
        <div id="about-content" className="flex flex-col space-y-6 md:space-y-16 text-right">
          
          {/* Section Title */}
          <div id="about-header" className="w-full">
            <SectionTitle id="about-title" level={2} className="font-bold">
              شريكك المالي
            </SectionTitle>
          </div>

          {/* Two-Column Grid (Desktop Only, Stacked on Mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-start">
            
            {/* Column 1: Profile Area & Statistics */}
            <div id="about-col-1" className="flex flex-col space-y-6 md:space-y-12">
              
              {/* Profile Area */}
              <div id="about-profile-area" className="flex flex-col space-y-2">
                <h3 id="about-profile-name" className={`${TYPOGRAPHY.display.l} text-text-primary font-bold`} itemProp="name">
                  {PROFILE.name}
                </h3>
                <p id="about-profile-title" className={`${TYPOGRAPHY.body.large} text-text-secondary font-medium`} itemProp="jobTitle">
                  {PROFILE.title}
                </p>
              </div>

              {/* Statistics Grid */}
              <div id="about-statistics" className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 md:gap-6 w-full items-stretch">
                {STATISTICS.map((stat, index) => (
                  <div 
                    key={index} 
                    id={`about-stat-item-${index}`}
                    className="border border-white p-3 sm:p-5 rounded-xl bg-white flex flex-col items-center justify-center text-center h-full min-h-[100px] sm:min-h-[130px] transition-all duration-200 hover:border-secondary/30 shadow-[0_2px_8px_rgba(0,0,0,0.01)]"
                  >
                    <span 
                      id={`about-stat-value-${index}`} 
                      className={`${stat.value === 'AI Financial' ? 'text-[10px] xs:text-xs sm:text-sm md:text-base font-bold font-sans leading-tight' : 'text-lg xs:text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight font-sans leading-none'} text-text-primary mb-1.5`}
                    >
                      {stat.value}
                    </span>
                    <span 
                      id={`about-stat-label-${index}`} 
                      className="text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs font-medium leading-snug text-text-secondary font-arabic"
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
              <div id="about-description" className="flex flex-col space-y-4 md:space-y-8" itemProp="description">
                {PARAGRAPHS.map((paragraph, index) => (
                  <p 
                    key={index} 
                    id={`about-description-paragraph-${index}`}
                    className={`${TYPOGRAPHY.body.normal} text-text-secondary leading-[1.6] md:leading-[1.85]`}
                  >
                    {paragraph.split('**').map((part, i) => i % 2 === 1 ? <strong key={i} className="font-bold text-text-primary">{part}</strong> : part)}
                  </p>
                ))}
              </div>

              {/* Quote Blockquote */}
              <blockquote 
                id="about-quote" 
                className="border-r-4 border-secondary bg-surface-muted/40 pr-6 pl-4 py-4 sm:py-5 rounded-l-lg text-right"
              >
                <p className="text-base md:text-lg font-semibold text-text-primary font-arabic leading-[1.5] md:leading-relaxed">
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


