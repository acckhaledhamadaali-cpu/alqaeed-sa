import { useSEO } from '../hooks/useSEO';
import SectionWrapper from '../../components/SectionWrapper';
import Container from '../../components/Container';
import { TYPOGRAPHY } from '../lib/tokens';

export default function CookiesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://alqaeed-sa.netlify.app/cookies/#webpage",
    "url": "https://alqaeed-sa.netlify.app/cookies",
    "name": "سياسة ملفات تعريف الارتباط | القائد",
    "description": "تعرف على كيفية استخدامنا لملفات تعريف الارتباط (Cookies) لتحسين تجربتك على موقع القائد وتحليل أداء الموقع.",
    "primaryImageOfPage": {
          "@id": "https://alqaeed-sa.netlify.app/#logo"
        },
        "inLanguage": "ar-SA",
        "isPartOf": {
      "@id": "https://alqaeed-sa.netlify.app/#website"
    }
  };

  useSEO({
    title: "سياسة ملفات تعريف الارتباط | القائد",
    description: "تعرف على كيفية استخدامنا لملفات تعريف الارتباط (Cookies) لتحسين تجربتك على موقع القائد وتحليل أداء الموقع.",
    canonical: "https://alqaeed-sa.netlify.app/cookies",
    schema
  });

  return (
    <SectionWrapper id="cookies-section-wrapper" variant="white" spacing="default">
      <Container id="cookies-container">
        <div className="max-w-3xl mx-auto py-8 md:py-12 space-y-6 text-right font-arabic">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="مسار التنقل" className="mb-2 text-xs text-text-muted">
            <a href="/" className="hover:text-primary transition-colors">الرئيسية - القائد للإدارة المالية</a>
            <span className="mx-2 text-border-subtle">/</span>
            <span className="text-text-secondary">سياسة ملفات تعريف الارتباط</span>
          </nav>

          <h1 className={`${TYPOGRAPHY.heading.h1} font-bold text-text-primary border-b border-border-subtle pb-4`}>
            سياسة ملفات تعريف الارتباط (Cookies)
          </h1>
          
          <div className="space-y-5 text-sm md:text-base text-text-secondary leading-relaxed font-arabic">
            <p>
              يستخدم موقع <strong>القائد</strong> لخدمات الإدارة المالية ملفات تعريف الارتباط (Cookies) لضمان حصولك على أفضل تجربة ممكنة أثناء تصفح الموقع. توضح هذه الصفحة ماهية ملفات تعريف الارتباط وكيفية استخدامنا لها. باستخدامك هذا الموقع فإنك توافق على استخدام ملفات تعريف الارتباط وفقاً لهذه السياسة.
            </p>

            <div>
              <h2 className="text-base md:text-lg font-bold text-text-primary mb-2">ما هي ملفات تعريف الارتباط؟</h2>
              <p>
                ملفات تعريف الارتباط هي ملفات نصية صغيرة يتم حفظها على جهازك (الكمبيوتر أو الهاتف الذكي) عند زيارة أي موقع إلكتروني. تُستخدم هذه الملفات لتذكر تفضيلاتك وتحسين تجربة التصفح.
              </p>
            </div>

            <div>
              <h2 className="text-base md:text-lg font-bold text-text-primary mb-2">كيف نستخدم ملفات تعريف الارتباط؟</h2>
              <p>
                نحن لا نستخدم ملفات تعريف الارتباط لجمع أي بيانات مالية أو شخصية حساسة خاصة بك. يقتصر استخدامنا لها على:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 pr-4">
                <li>
                  <strong>تحليل الأداء (Analytics):</strong> نستخدم أدوات مثل Google Analytics و Microsoft Clarity لفهم كيفية تفاعل الزوار مع الموقع، مما يساعدنا في تحسين المحتوى وطريقة عرض خدماتنا (مثل خدمات التحليل المالي والمدير المالي عن بعد).
                </li>
                <li>
                  <strong>تسهيل تجربة الاستخدام:</strong> لضمان عمل الموقع بشكل سريع وفعال على جميع الأجهزة.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-base md:text-lg font-bold text-text-primary mb-2">التحكم في ملفات تعريف الارتباط</h2>
              <p>
                يمكنك في أي وقت التحكم في ملفات تعريف الارتباط أو حذفها من خلال إعدادات المتصفح الخاص بك. ومع ذلك، يرجى ملاحظة أن تعطيل بعض ملفات تعريف الارتباط قد يؤثر على أداء الموقع وتجربة التصفح.
              </p>
            </div>

            <div>
              <h2 className="text-base md:text-lg font-bold text-text-primary mb-2">تحديث السياسة</h2>
              <p>
                نحتفظ بالحق في تحديث سياسة ملفات تعريف الارتباط هذه من وقت لآخر. سيتم نشر أي تغييرات على هذه الصفحة.
              </p>
            </div>

            <div>
              <h2 className="text-base md:text-lg font-bold text-text-primary mb-2">تواصل معنا</h2>
              <p>
                لأي أسئلة بخصوص استخدامنا لملفات تعريف الارتباط، يسعدنا تواصلك معنا عبر: <a href="mailto:alqaeed.sa@gmail.com" className="text-primary font-semibold hover:underline" dir="ltr">alqaeed.sa@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
