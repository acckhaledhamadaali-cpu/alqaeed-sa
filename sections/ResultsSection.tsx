import { HTMLAttributes } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import SectionDescription from '../components/SectionDescription';
import ResultCard from '../components/ResultCard';

interface ResultData {
  title: string;
  description: string;
}

const RESULTS: ResultData[] = [
  {
    title: "استدامة التدفقات النقدية",
    description: "حافظ على سيولة نقدية قوية تحمي منشأتك من الأزمات وتدعم خطط التوسع"
  },
  {
    title: "تعظيم هوامش الربحية",
    description: "اكتشف مصادر الهدر الخفي ووجه مواردك نحو الأنشطة الأكثر ربحية"
  },
  {
    title: "مؤشرات أداء لحظية",
    description: "راقب صحة أعمالك يومياً من خلال تقارير ولوحات معلومات مالية دقيقة"
  },
  {
    title: "قرارات استثمارية حاسمة",
    description: "استند إلى أرقام حقيقية وموثوقة عند اتخاذ قرارات التوسع أو الاستثمار"
  },
  {
    title: "أمان وامتثال تام",
    description: "تجنب الغرامات المالية والمفاجآت القانونية بفضل التخطيط الضريبي السليم"
  },
  {
    title: "حرية القيادة والتوجيه",
    description: "تخلص من الأعباء التشغيلية وتفرغ لقيادة فريقك وتحقيق رؤيتك الطموحة"
  }
];

export default function ResultsSection(props: HTMLAttributes<HTMLElement>) {
  return (
    <SectionWrapper id="results-section-wrapper" variant="subtle" spacing="default" {...props}>
      <Container id="results-container">
        <div id="results-content" className="flex flex-col space-y-12 md:space-y-16 items-center">
          
          {/* Header */}
          <div id="results-header" className="flex flex-col space-y-4 text-center items-center max-w-3xl">
            <SectionTitle id="results-title" level={2} className="font-bold">
              كيف سينعكس النظام المالي على أداء منشأتك؟
            </SectionTitle>

            <SectionDescription id="results-description" className="text-center">
              الإدارة المالية ليست مجرد أرقام بل هي الأداة الأقوى لتوجيه أعمالك نحو نمو مستدام وأرباح مضاعفة
            </SectionDescription>
          </div>

          {/* Results Grid */}
          <div 
            id="results-grid" 
            className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 w-full items-stretch"
            role="list"
            aria-label="النتائج والقيمة المضافة لأصحاب المنشآت عند التعاقد مع خالد القائد"
          >
            {RESULTS.map((result, index) => (
              <ResultCard 
                key={index}
                id={`result-card-${index}`}
                title={result.title}
                description={result.description}
              />
            ))}
          </div>

        </div>
      </Container>
    </SectionWrapper>
  );
}
