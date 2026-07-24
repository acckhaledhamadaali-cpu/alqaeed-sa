import { useSEO } from '../hooks/useSEO';
import SectionWrapper from '../../components/SectionWrapper';
import Container from '../../components/Container';
import { TYPOGRAPHY } from '../lib/tokens';

export default function TermsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://alqaeed-sa.netlify.app/terms/#webpage",
    "url": "https://alqaeed-sa.netlify.app/terms",
    "name": "الشروط والأحكام | القائد",
    "description": "اقرأ الشروط والأحكام المتعلقة باستخدام موقع القائد لخدمات الإدارة المالية والاستشارات. توضح هذه الصفحة القواعد المطبقة على خدماتنا.",
    "primaryImageOfPage": {
          "@id": "https://alqaeed-sa.netlify.app/#logo"
        },
        "inLanguage": "ar-SA",
        "isPartOf": {
      "@id": "https://alqaeed-sa.netlify.app/#website"
    }
  };

  useSEO({
    title: "الشروط والأحكام | القائد",
    description: "اقرأ الشروط والأحكام المتعلقة باستخدام موقع القائد لخدمات الإدارة المالية والاستشارات. توضح هذه الصفحة القواعد المطبقة على خدماتنا.",
    canonical: "https://alqaeed-sa.netlify.app/terms",
    schema
  });

  return (
    <SectionWrapper id="terms-section-wrapper" variant="white" spacing="default">
      <Container id="terms-container">
        <div className="max-w-3xl mx-auto py-8 md:py-12 space-y-6 text-right">
          <h1 className={`${TYPOGRAPHY.heading.h1} font-bold text-text-primary border-b border-border-subtle pb-4`}>
            الشروط والأحكام
          </h1>
          
          <div className="space-y-5 text-sm md:text-base text-text-secondary leading-relaxed font-arabic">
            <p>
              مرحباً بكم في موقع <strong>القائد</strong>. يرجى قراءة هذه الشروط والأحكام بعناية قبل استخدام موقعنا أو الاستفادة من خدمات الإدارة المالية والتحليل المالي عن بعد التي نقدمها.
            </p>

            <div>
              <h2 className="text-base md:text-lg font-bold text-text-primary mb-2">قبول الشروط</h2>
              <p>
                بدخولك إلى هذا الموقع أو التواصل معنا لطلب أي خدمة (إعداد القوائم المالية، الميزانيات، الاستشارات الضريبية، وغيرها)، فإنك توافق على الالتزام بهذه الشروط والأحكام، بالإضافة إلى أي قوانين ولوائح معمول بها في المملكة العربية السعودية.
              </p>
            </div>

            <div>
              <h2 className="text-base md:text-lg font-bold text-text-primary mb-2">طبيعة الخدمات</h2>
              <p>
                نحن نقدم خدمات استشارية ومالية "عن بعد" تستهدف المنشآت الصغيرة والمتوسطة. جميع التحليلات، والتقارير المالية، والتوصيات تُبنى على دقة البيانات التي يزودنا بها العميل. نحن لا نتحمل المسؤولية عن أي أخطاء أو نتائج مبنية على بيانات مالية غير مكتملة أو غير دقيقة مقدمة من طرفك.
              </p>
            </div>

            <div>
              <h2 className="text-base md:text-lg font-bold text-text-primary mb-2">حقوق الملكية</h2>
              <p>
                يمنع نسخ أو إعادة نشر أو إعادة استخدام أي جزء من محتوى الموقع أو التصاميم أو التقارير أو المواد التعليمية دون موافقة كتابية مسبقة.
              </p>
            </div>

            <div>
              <h2 className="text-base md:text-lg font-bold text-text-primary mb-2">حدود المسؤولية</h2>
              <p>
                جميع التحليلات والتوصيات المالية المقدمة عبر الموقع أو أثناء الاستشارات تعتمد على البيانات المقدمة من العميل، ولا تُعد ضماناً لتحقيق أرباح أو نتائج مالية محددة، كما لا يتحمل موقع القائد أي مسؤولية عن القرارات الاستثمارية أو التشغيلية التي يتخذها العميل بناءً على تلك التوصيات.
              </p>
            </div>

            <div>
              <h2 className="text-base md:text-lg font-bold text-text-primary mb-2">تعديل الشروط</h2>
              <p>
                يحتفظ موقع "القائد" بالحق في تعديل هذه الشروط والأحكام في أي وقت. تعتبر التعديلات نافذة فور نشرها على الموقع.
              </p>
            </div>

            <div>
              <h2 className="text-base md:text-lg font-bold text-text-primary mb-2">القانون المطبق</h2>
              <p>
                تخضع هذه الشروط والأحكام وتُفسر وفقاً للأنظمة والقوانين المعمول بها في المملكة العربية السعودية.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
