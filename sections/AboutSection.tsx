import { HTMLAttributes } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';

interface StatItem {
  value: string;
  label: string;
}

const STATISTICS: StatItem[] = [
  { value: "9+", label: "سنوات خبرة مهنية بالسعودية" },
  { value: "12", label: "قطاعاً تجارياً وصناعياً" },
  { value: "MBA", label: "ماجستير إدارة الأعمال" },
  { value: "Virtual CFO", label: "إدارة مالية واستراتيجية عن بعد" }
];

const OPENING_PARAGRAPH = "لأن أصحاب الشركات الواعدة لا يبحثون عن مجرد تسجيل روتيني للقيود، بل عن شريك مالي موثوق يساعدهم على قراءة الأرقام واتخاذ قرارات تدعم الربحية والنمو:";

const BULLETS = [
  "لا أكتفي بمسك الدفاتر المحاسبية، بل أؤسس نظاماً مالياً متكاملاً يمنحك السيطرة الكاملة على تدفقاتك النقدية ومصروفاتك.",
  "أحول الأرقام والقوائم المالية الصامتة إلى تقارير إدارية وتحليلات تنفيذية واضحة تساعدك على اتخاذ القرارات باطمئنان.",
  "أوظف أدوات التحليل المالي المتقدمة والنماذج المالية الرقمية لرفع كفاءة المعالجة ودقة التقارير التنفيذية.",
  "أدمج بين المحاسبة المالية **Financial Accounting** والتحليل المالي **Financial Analysis** والتقارير الإدارية **Management Reporting** والإشراف المالي الاستراتيجي **Virtual CFO**.",
  "أكثر من **9 سنوات** من الممارسة الميدانية مع ماجستير إدارة الأعمال **MBA** وخبرة عملية في أكثر من 12 قطاعاً داخل المملكة العربية السعودية."
];

const QUOTE: string = "الاستقرار المالي للمنشأة يبدأ عندما تتحول البيانات المحاسبية إلى قرارات إدارية مبنية على تقارير مالية واضحة.";

export default function AboutSection(props: HTMLAttributes<HTMLElement>) {
  return (
    <SectionWrapper id="about-section-wrapper" variant="white" spacing="dense" itemScope itemType="https://schema.org/Person" {...props}>
      <Container id="about-container">
        <div id="about-content" className="flex flex-col space-y-5 md:space-y-6 text-right max-w-4xl mx-auto">
          
          {/* Section Title */}
          <div id="about-header" className="w-full text-center">
            <SectionTitle id="about-title" level={2} className="font-bold">
              لماذا يختارني أصحاب المنشآت
            </SectionTitle>
          </div>

          {/* Opening Paragraph */}
          <div id="about-opening" className="text-right">
            <p className="text-xs sm:text-sm md:text-base text-text-primary font-medium leading-relaxed font-arabic">
              {OPENING_PARAGRAPH}
            </p>
          </div>

          {/* Bullet List */}
          <div id="about-bullets-container" className="text-right py-1">
            <ul className="flex flex-col space-y-3.5">
              {BULLETS.map((bullet, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-x-3 text-xs md:text-sm text-text-secondary leading-relaxed"
                >
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-secondary mt-2.5" aria-hidden="true" />
                  <span className="font-arabic">
                    {bullet.split('**').map((part, i) => i % 2 === 1 ? <strong key={i} className="font-bold text-text-primary">{part}</strong> : part)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Statistics Grid */}
          <div id="about-statistics" className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 md:gap-6 w-full items-stretch pt-2">
            {STATISTICS.map((stat, index) => (
              <div 
                key={index} 
                id={`about-stat-item-${index}`}
                className="border border-white p-3 sm:p-5 rounded-xl bg-white flex flex-col items-center justify-center text-center h-full min-h-[100px] sm:min-h-[130px] transition-all duration-200 hover:border-secondary/30 shadow-[0_2px_8px_rgba(0,0,0,0.01)]"
              >
                <span 
                  id={`about-stat-value-${index}`} 
                  className={`${stat.value === 'AI FINANCIAL' ? 'text-[10px] xs:text-xs sm:text-sm md:text-base font-bold font-sans leading-tight' : 'text-lg xs:text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight font-sans leading-none'} text-text-primary mb-1.5`}
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

          {/* Quote Blockquote */}
          <blockquote 
            id="about-quote" 
            className="border-r-4 border-secondary bg-surface-muted/40 pr-5 pl-4 py-3.5 sm:py-4 rounded-l-lg text-right max-w-2xl mx-auto w-full"
          >
            <p className="text-sm sm:text-base font-semibold text-text-primary font-arabic leading-relaxed text-center">
              "{QUOTE}"
            </p>
          </blockquote>

        </div>
      </Container>
    </SectionWrapper>
  );
}
