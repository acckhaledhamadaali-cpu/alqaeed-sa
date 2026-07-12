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
    title: "معرفة الربح الحقيقي",
    description: "تعرف صافي ربح منشأتك بدقة بعيداً عن التخمين."
  },
  {
    title: "السيطرة على المصروفات",
    description: "تتعرف على أماكن زيادة المصروفات وكيفية التحكم فيها."
  },
  {
    title: "تقارير واضحة",
    description: "تحصل على تقارير مالية بسيطة تساعدك على فهم وضع منشأتك بسهولة."
  },
  {
    title: "قرارات أفضل",
    description: "تعتمد على أرقام دقيقة بدلاً من الاجتهاد أو الحدس."
  },
  {
    title: "متابعة مستمرة",
    description: "تكون أرقام منشأتك محدثة باستمرار لتعرف وضعها الحقيقي."
  },
  {
    title: "التركيز على النمو",
    description: "تتفرغ لتطوير منشأتك بينما أتولى متابعة الجانب المالي."
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
              ماذا ستحصل عندما أتابع منشأتك؟
            </SectionTitle>

            <SectionDescription id="results-description" className="text-center">
              هدفي ليس تنظيم الحسابات فقط، بل مساعدتك على فهم أرقام منشأتك واتخاذ قرارات أفضل تساعد على نمو أعمالك.
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
