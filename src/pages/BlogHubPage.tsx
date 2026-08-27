import { useState } from 'react';
import { useSEO } from '../hooks/useSEO';
import SectionWrapper from '../../components/SectionWrapper';
import Container from '../../components/Container';
import { TYPOGRAPHY } from '../lib/tokens';
import { BLOG_CATEGORIES, BLOG_ARTICLES } from '../data/blogArticles';
import { BlogCategoryType } from '../types/blog';

const WHATSAPP_NUMBER = "966511294383";
const WHATSAPP_MESSAGE = `السلام عليكم
أود الاستفسار عن خدمات القائد للإدارة المالية واستشارة متخصصة لمنشأتي.`;
const WHATSAPP_URL = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(WHATSAPP_MESSAGE);

export default function BlogHubPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const metaTitle = "المكتبة المالية | القائد للإدارة المالية";
  const metaDesc = "المكتبة المالية من القائد - أدلة ومعارف مالية ومحاسبية متخصصة تهدف لمساعدة أصحاب المنشآت والشركات في المملكة العربية السعودية على إدارة أعمالهم واتخاذ قرارات مالية صائبة.";
  const url = "https://alqaeed-sa.netlify.app/blog";

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": url + "/#webpage",
        "url": url,
        "name": metaTitle,
        "description": metaDesc,
        "primaryImageOfPage": {
          "@id": "https://alqaeed-sa.netlify.app/#logo"
        },
        "inLanguage": "ar-SA",
        "isPartOf": {
          "@id": "https://alqaeed-sa.netlify.app/#website"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": url + "/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "الرئيسية",
            "item": "https://alqaeed-sa.netlify.app/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "المكتبة المالية",
            "item": url
          }
        ]
      }
    ]
  };

  useSEO({
    title: metaTitle,
    description: metaDesc,
    canonical: url,
    schema
  });

  const filteredArticles = selectedCategory === 'all'
    ? BLOG_ARTICLES
    : BLOG_ARTICLES.filter((article) => article.category === selectedCategory);

  const getCategoryName = (catId: BlogCategoryType) => {
    const found = BLOG_CATEGORIES.find((c) => c.id === catId);
    return found ? found.name : 'مالية ومحاسبة';
  };

  return (
    <SectionWrapper id="blog-hub-section" variant="white" spacing="default">
      <Container>
        <div className="max-w-4xl mx-auto py-4 md:py-8 text-right font-arabic">

          {/* Breadcrumb Navigation */}
          <nav aria-label="مسار التنقل" className="mb-4 text-xs text-text-muted">
            <a href="/" className="hover:text-primary transition-colors">الرئيسية - القائد للإدارة المالية</a>
            <span className="mx-2 text-border-subtle">/</span>
            <span className="text-text-secondary">المكتبة المالية</span>
          </nav>

          {/* Page Header */}
          <header className="mb-10">
            <h1 className={`${TYPOGRAPHY.heading.h1} font-bold text-text-primary mb-4 leading-tight`}>
              المكتبة المالية
            </h1>
            <div className="w-16 h-1 bg-primary mb-6 rounded-full"></div>
            <p className="text-sm md:text-base text-text-secondary leading-relaxed max-w-3xl">
              أدلة ومعارف مالية ومحاسبية متخصصة تهدف إلى تمكين أصحاب المنشآت والشركات في المملكة العربية السعودية من فهم مؤشراتهم المالية، وإدارة السيولة النقدية بفاعلية، واتخاذ قرارات نمو مبنية على بيانات دقيقة وموثوقة.
            </p>
          </header>

          {/* Categories Grid */}
          <section aria-labelledby="categories-heading" className="mb-12">
            <h2 id="categories-heading" className="text-lg md:text-xl font-bold text-text-primary mb-4">
              محاور المعرفة المالية
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {BLOG_CATEGORIES.map((category) => (
                <div
                  key={category.id}
                  className="bg-surface-subtle/50 border border-border-subtle rounded-xl p-5 hover:border-primary/40 transition-colors"
                >
                  <h3 className="font-bold text-text-primary text-base mb-2">
                    {category.name}
                  </h3>
                  <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
                    {category.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Articles Section */}
          <section aria-labelledby="articles-heading" className="mb-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 border-b border-border-subtle pb-4">
              <h2 id="articles-heading" className="text-lg md:text-xl font-bold text-text-primary">
                المقالات والأدلة التخصصية
              </h2>

              {/* Category Filter Chips */}
              <div className="flex flex-wrap gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setSelectedCategory('all')}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${
                    selectedCategory === 'all'
                      ? 'bg-primary text-white font-medium'
                      : 'bg-surface-subtle text-text-secondary hover:text-text-primary'
                  }`}
                >
                  الكل
                </button>
                {BLOG_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-lg transition-colors ${
                      selectedCategory === cat.id
                        ? 'bg-primary text-white font-medium'
                        : 'bg-surface-subtle text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Articles List / Verified Empty State */}
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredArticles.map((article) => (
                  <article
                    key={article.slug}
                    className="border border-border-subtle rounded-xl p-6 bg-white hover:shadow-md transition-shadow flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs text-text-muted mb-3">
                        <span className="bg-primary/10 text-primary font-medium px-2.5 py-1 rounded-md">
                          {getCategoryName(article.category)}
                        </span>
                        <span>{article.readingTime}</span>
                      </div>
                      <h3 className="font-bold text-text-primary text-lg mb-2 leading-snug hover:text-primary transition-colors">
                        <a href={`/blog/${article.slug}`}>
                          {article.title}
                        </a>
                      </h3>
                      <p className="text-xs md:text-sm text-text-secondary leading-relaxed line-clamp-3 mb-4">
                        {article.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-border-subtle flex items-center justify-between text-xs text-text-muted">
                      <span>{article.author}</span>
                      <a
                        href={`/blog/${article.slug}`}
                        className="text-primary font-medium hover:underline inline-flex items-center gap-1"
                      >
                        قراءة المقال ←
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="border border-border-subtle bg-surface-subtle/30 rounded-2xl p-8 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  📖
                </div>
                <h3 className="text-base md:text-lg font-bold text-text-primary mb-2">
                  جاري إعداد ونشر الأدلة التخصصية
                </h3>
                <p className="text-xs md:text-sm text-text-secondary leading-relaxed max-w-xl mx-auto mb-6">
                  يحرص فريق القائد للإدارة المالية على إعداد محتوى مالي ومحاسبي أصيل ومدقق يلبي احتياجات المنشآت السعودية بدقة تامة. يتم تدقيق الأدلة خطوة بخطوة وستُنشر تباعاً في هذا القسم.
                </p>

                {/* Direct Link to Commercial Services */}
                <div className="pt-6 border-t border-border-subtle max-w-2xl mx-auto">
                  <p className="text-xs font-semibold text-text-primary mb-3">
                    يمكنك استكشاف حلولنا المالية المباشرة لأعمالك:
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center text-xs">
                    <a
                      href="/services/bookkeeping"
                      className="px-3 py-1.5 bg-white border border-border-subtle rounded-lg text-text-primary hover:border-primary hover:text-primary transition-colors"
                    >
                      تنظيم الحسابات ومسك الدفاتر
                    </a>
                    <a
                      href="/services/financial-statements"
                      className="px-3 py-1.5 bg-white border border-border-subtle rounded-lg text-text-primary hover:border-primary hover:text-primary transition-colors"
                    >
                      إعداد القوائم المالية
                    </a>
                    <a
                      href="/services/financial-analysis"
                      className="px-3 py-1.5 bg-white border border-border-subtle rounded-lg text-text-primary hover:border-primary hover:text-primary transition-colors"
                    >
                      التحليل المالي وتقييم الأداء
                    </a>
                    <a
                      href="/services/virtual-cfo"
                      className="px-3 py-1.5 bg-white border border-border-subtle rounded-lg text-text-primary hover:border-primary hover:text-primary transition-colors"
                    >
                      المدير المالي عن بعد (Virtual CFO)
                    </a>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* Direct WhatsApp Consultation Callout */}
          <section className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-right">
              <h3 className="text-base md:text-lg font-bold text-text-primary mb-1">
                هل تحتاج إلى استشارة مالية مخصصة لمنشأتك؟
              </h3>
              <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
                تواصل مباشرة مع الأستاذ خالد حمادة لمناقشة التحديات المالية لمنشأتك وحجز موعد للبدء.
              </p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap px-6 py-3 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary/90 transition-colors shadow-sm"
            >
              تواصل مباشرة عبر واتساب
            </a>
          </section>

        </div>
      </Container>
    </SectionWrapper>
  );
}
