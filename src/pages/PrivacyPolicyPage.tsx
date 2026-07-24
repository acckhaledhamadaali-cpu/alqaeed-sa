import { useSEO } from '../hooks/useSEO';
import SectionWrapper from '../../components/SectionWrapper';
import Container from '../../components/Container';
import { TYPOGRAPHY } from '../lib/tokens';

export default function PrivacyPolicyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://alqaeed-sa.netlify.app/privacy-policy/#webpage",
    "url": "https://alqaeed-sa.netlify.app/privacy-policy",
    "name": "سياسة الخصوصية | القائد",
    "description": "توضح سياسة الخصوصية كيفية تعاملنا مع بياناتك في القائد لخدمات الإدارة المالية عن بعد. نحن نلتزم بحماية سرية معلوماتك.",
    "primaryImageOfPage": {
          "@id": "https://alqaeed-sa.netlify.app/#logo"
        },
        "inLanguage": "ar-SA",
        "isPartOf": {
      "@id": "https://alqaeed-sa.netlify.app/#website"
    }
  };

  useSEO({
    title: "سياسة الخصوصية | القائد",
    description: "توضح سياسة الخصوصية كيفية تعاملنا مع بياناتك في القائد لخدمات الإدارة المالية عن بعد. نحن نلتزم بحماية سرية معلوماتك.",
    canonical: "https://alqaeed-sa.netlify.app/privacy-policy",
    schema
  });

  return (
    <SectionWrapper id="privacy-section-wrapper" variant="white" spacing="default">
      <Container id="privacy-container">
        <div className="max-w-3xl mx-auto py-8 md:py-12 space-y-6 text-right">
          <h1 className={`${TYPOGRAPHY.heading.h1} font-bold text-text-primary border-b border-border-subtle pb-4`}>
            سياسة الخصوصية
          </h1>
          
          <div className="space-y-5 text-sm md:text-base text-text-secondary leading-relaxed font-arabic">
            <p>
              نحن في <strong>القائد</strong> نلتزم التزاماً كاملاً بحماية خصوصية مستخدمي موقعنا وعملائنا. توضح هذه السياسة كيف نتعامل مع المعلومات، وتؤكد على سرية أي بيانات قد تشاركها معنا للحصول على خدمات الإدارة المالية والتحليل المالي عن بعد.
            </p>

            <div>
              <h2 className="text-base md:text-lg font-bold text-text-primary mb-2">جمع المعلومات</h2>
              <p>
                قد نقوم بجمع بيانات التواصل التي يقدمها المستخدم طوعاً عند التواصل معنا، كما قد يتم جمع بيانات استخدام مجهولة الهوية عبر أدوات التحليل مثل Google Analytics و Microsoft Clarity لتحسين أداء الموقع وتجربة المستخدم.
              </p>
            </div>

            <div>
              <h2 className="text-base md:text-lg font-bold text-text-primary mb-2">استخدام المعلومات</h2>
              <p>
                أي معلومات تقدمها لنا تُستخدم حصرياً للأغراض التالية:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 pr-4">
                <li>الرد على استفساراتك المتعلقة بخدماتنا المالية.</li>
                <li>فهم احتياجات منشأتك لتقديم أفضل استشارة أو خدمة (كإعداد القوائم المالية، التقارير المالية، أو الاستشارات الزكوية).</li>
                <li>التواصل معك لترتيب مواعيد العمل والتعاقد.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-base md:text-lg font-bold text-text-primary mb-2">السرية وحماية البيانات</h2>
              <p>
                نظراً لطبيعة عملنا في الاستشارات وإدارة الحسابات، فإن السرية هي الركيزة الأساسية لخدماتنا. نحن لا نشارك، أو نبيع، أو نؤجر معلوماتك أو بيانات منشأتك لأي أطراف ثالثة. يتم التعامل مع كافة البيانات التي تقدمها إلينا عبر وسائل التواصل بدرجة عالية من السرية والاحترافية.
              </p>
            </div>

            <div>
              <h2 className="text-base md:text-lg font-bold text-text-primary mb-2">التحليلات (Analytics)</h2>
              <p>
                قد يستخدم الموقع أدوات تحليل قياسية (مثل Google Analytics و Microsoft Clarity) لتحسين تجربة المستخدم. هذه الأدوات تجمع بيانات عامة ومجهولة الهوية عن كيفية تفاعل الزوار مع الموقع، ولا يمكن من خلالها تحديد هويتك الشخصية.
              </p>
            </div>

            <div>
              <h2 className="text-base md:text-lg font-bold text-text-primary mb-2">التحديثات</h2>
              <p>
                قد نقوم بتحديث هذه السياسة من وقت لآخر وفقاً للمتطلبات التنظيمية. سيعتبر استمرارك في استخدام الموقع بعد أي تغييرات بمثابة موافقة عليها.
              </p>
            </div>

            <div>
              <h2 className="text-base md:text-lg font-bold text-text-primary mb-2">التواصل معنا</h2>
              <p>
                إذا كان لديك أي أسئلة حول سياسة الخصوصية، يرجى التواصل معنا عبر البريد الإلكتروني: <a href="mailto:alqaeed.sa@gmail.com" className="text-primary font-semibold hover:underline" dir="ltr">alqaeed.sa@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
