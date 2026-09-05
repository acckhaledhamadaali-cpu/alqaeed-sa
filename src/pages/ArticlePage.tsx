import { useEffect } from 'react';
import { useSEO } from '../hooks/useSEO';
import SectionWrapper from '../../components/SectionWrapper';
import Container from '../../components/Container';
import { TYPOGRAPHY } from '../lib/tokens';
import { BLOG_ARTICLES, BLOG_CATEGORIES } from '../data/blogArticles';
import { BlogCategoryType } from '../types/blog';

const WHATSAPP_NUMBER = "966511294383";

function renderInline(text: string): React.ReactNode {
  const regex = /(\*\*.*?\*\*|\[.*?\]\(.*?\))/g;
  const parts = text.split(regex);

  return parts.map((part, idx) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={idx} className="font-bold text-text-primary">{part.slice(2, -2)}</strong>;
    }
    const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
    if (linkMatch) {
      const isInternal = linkMatch[2].startsWith('/');
      return (
        <a
          key={idx}
          href={linkMatch[2]}
          className="text-primary font-medium hover:underline inline-flex items-center gap-0.5"
          {...(!isInternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {linkMatch[1]}
        </a>
      );
    }
    return part;
  });
}

function parseContentToElements(content: string): React.ReactNode[] {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let currentList: { type: 'ul' | 'ol'; items: string[] } | null = null;
  let elementIndex = 0;

  const flushList = () => {
    if (!currentList) return;
    if (currentList.type === 'ul') {
      elements.push(
        <ul key={`ul-${elementIndex++}`} className="my-4 space-y-2 mr-6 list-disc list-outside text-text-secondary text-sm md:text-base leading-relaxed">
          {currentList.items.map((item, idx) => (
            <li key={idx}>{renderInline(item)}</li>
          ))}
        </ul>
      );
    } else {
      elements.push(
        <ol key={`ol-${elementIndex++}`} className="my-4 space-y-2 mr-6 list-decimal list-outside text-text-secondary text-sm md:text-base leading-relaxed">
          {currentList.items.map((item, idx) => (
            <li key={idx}>{renderInline(item)}</li>
          ))}
        </ol>
      );
    }
    currentList = null;
  };

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const trimmed = rawLine.trim();

    if (!trimmed) {
      flushList();
      continue;
    }

    if (trimmed.startsWith('### ')) {
      flushList();
      const text = trimmed.slice(4);
      elements.push(
        <h3 key={`h3-${elementIndex++}`} className="text-base md:text-lg font-bold text-text-primary mt-6 mb-3">
          {renderInline(text)}
        </h3>
      );
      continue;
    }

    if (trimmed.startsWith('## ')) {
      flushList();
      const text = trimmed.slice(3);
      elements.push(
        <h2 key={`h2-${elementIndex++}`} className="text-lg md:text-xl font-bold text-text-primary mt-8 mb-4 pb-2 border-b border-border-subtle">
          {renderInline(text)}
        </h2>
      );
      continue;
    }

    if (trimmed.startsWith('> ')) {
      flushList();
      const text = trimmed.slice(2);
      elements.push(
        <div key={`quote-${elementIndex++}`} className="my-5 p-4 rounded-xl bg-surface-subtle/70 border-r-4 border-primary text-text-primary text-sm leading-relaxed">
          {renderInline(text)}
        </div>
      );
      continue;
    }

    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      const text = trimmed.slice(2);
      if (!currentList || currentList.type !== 'ul') {
        flushList();
        currentList = { type: 'ul', items: [] };
      }
      currentList.items.push(text);
      continue;
    }

    const numMatch = trimmed.match(/^\d+\.\s+(.*)$/);
    if (numMatch) {
      const text = numMatch[1];
      if (!currentList || currentList.type !== 'ol') {
        flushList();
        currentList = { type: 'ol', items: [] };
      }
      currentList.items.push(text);
      continue;
    }

    flushList();
    elements.push(
      <p key={`p-${elementIndex++}`} className="text-text-secondary text-sm md:text-base leading-relaxed mb-4">
        {renderInline(trimmed)}
      </p>
    );
  }

  flushList();
  return elements;
}

function ArticleNotFound() {
  useEffect(() => {
    document.title = "المقال غير متوفر | المكتبة المالية | القائد";

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "المقال المطلوب قيد الإعداد أو غير متوفر حالياً في المكتبة المالية للقائد للإدارة المالية.");
    }

    const canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag) {
      canonicalTag.setAttribute('href', 'https://alqaeed-sa.pages.dev/blog');
    }

    let robotsTag = document.querySelector('meta[name="robots"]');
    if (!robotsTag) {
      robotsTag = document.createElement('meta');
      robotsTag.setAttribute('name', 'robots');
      document.head.appendChild(robotsTag);
    }
    robotsTag.setAttribute('content', 'noindex, nofollow');

    const schemaScript = document.getElementById('schema-jsonld') || document.querySelector('script[type="application/ld+json"]');
    if (schemaScript) {
      schemaScript.remove();
    }

    return () => {
      const currentRobots = document.querySelector('meta[name="robots"]');
      if (currentRobots) {
        currentRobots.setAttribute('content', 'index, follow');
      }
    };
  }, []);

  return (
    <SectionWrapper id="article-not-found-section" variant="white" spacing="default">
      <Container>
        <div className="max-w-3xl mx-auto py-12 text-right font-arabic">
          <nav aria-label="مسار التنقل" className="mb-4 text-xs text-text-muted">
            <a href="/" className="hover:text-primary transition-colors">الرئيسية</a>
            <span className="mx-2 text-border-subtle">/</span>
            <a href="/blog" className="hover:text-primary transition-colors">المكتبة المالية</a>
            <span className="mx-2 text-border-subtle">/</span>
            <span className="text-text-secondary">المقال غير متوفر</span>
          </nav>

          <div className="border border-border-subtle bg-surface-subtle/30 rounded-2xl p-8 text-center my-8">
            <h1 className={`${TYPOGRAPHY.heading.h2} font-bold text-text-primary mb-3`}>
              المقال غير متوفر حالياً
            </h1>
            <p className="text-sm text-text-secondary mb-6 max-w-md mx-auto leading-relaxed">
              المقال الذي تبحث عنه لا يزال قيد الإعداد والمراجعة من قبل فريق القائد للإدارة المالية، أو تم نقله.
            </p>
            <div className="flex flex-wrap gap-3 justify-center text-sm">
              <a
                href="/blog"
                className="px-5 py-2.5 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors font-medium"
              >
                العودة إلى المكتبة المالية
              </a>
              <a
                href="/"
                className="px-5 py-2.5 bg-white border border-border-subtle text-text-primary rounded-xl hover:border-primary transition-colors font-medium"
              >
                الرئيسية
              </a>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}

export default function ArticlePage({ slug }: { slug: string }) {
  const article = BLOG_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return <ArticleNotFound />;
  }

  const metaTitle = `${article.title} | القائد للإدارة المالية`;
  const metaDesc = article.description;
  const url = `https://alqaeed-sa.pages.dev/blog/${article.slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}/#article`,
        "headline": article.title,
        "description": article.description,
        "image": `https://alqaeed-sa.pages.dev/images/blog/${article.slug}.webp`,
        "inLanguage": "ar-SA",
        "author": {
          "@type": "Person",
          "@id": "https://alqaeed-sa.pages.dev/#person",
          "name": "خالد القائد"
        },
        "publisher": {
          "@id": "https://alqaeed-sa.pages.dev/#organization"
        },
        "datePublished": article.publishedAt,
        "dateModified": article.updatedAt || article.publishedAt,
        "mainEntityOfPage": url
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}/#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "الرئيسية",
            "item": "https://alqaeed-sa.pages.dev/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "المكتبة المالية",
            "item": "https://alqaeed-sa.pages.dev/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": article.title,
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

  const getCategoryName = (catId: BlogCategoryType) => {
    const found = BLOG_CATEGORIES.find((c) => c.id === catId);
    return found ? found.name : 'مالية ومحاسبة';
  };

  const whatsappMessage = `السلام عليكم
أطلعت على مقال: "${article.title}" في المكتبة المالية للقائد.
أود استشارة مخصصة لمنشأتي حول هذا الموضوع.`;
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <SectionWrapper id={`article-${article.slug}-section`} variant="white" spacing="default">
      <Container>
        <article className="max-w-3xl mx-auto py-4 md:py-8 text-right font-arabic">

          {/* Breadcrumb Navigation */}
          <nav aria-label="مسار التنقل" className="mb-4 text-xs text-text-muted">
            <a href="/" className="hover:text-primary transition-colors">الرئيسية</a>
            <span className="mx-2 text-border-subtle">/</span>
            <a href="/blog" className="hover:text-primary transition-colors">المكتبة المالية</a>
            <span className="mx-2 text-border-subtle">/</span>
            <span className="text-text-secondary">{article.title}</span>
          </nav>

          {/* Article Header */}
          <header className="mb-8 border-b border-border-subtle pb-6">
            <div className="flex flex-wrap items-center gap-2 mb-3 text-xs">
              <span className="bg-primary/10 text-primary font-semibold px-3 py-1 rounded-md">
                {getCategoryName(article.category)}
              </span>
              <span className="text-text-muted">•</span>
              <span className="text-text-secondary">{article.readingTime}</span>
              <span className="text-text-muted">•</span>
              <span className="text-text-secondary">بقلم: {article.author}</span>
            </div>

            <h1 className={`${TYPOGRAPHY.heading.h1} font-bold text-text-primary mb-4 leading-tight`}>
              {article.title}
            </h1>
            <p className="text-sm md:text-base text-text-secondary leading-relaxed font-normal">
              {article.description}
            </p>
          </header>

          {/* Article Content Body */}
          <div className="prose prose-lg max-w-none text-text-primary text-sm md:text-base leading-relaxed mb-12">
            {parseContentToElements(article.content)}
          </div>

          {/* Related Articles Section (Internal SEO Linking) */}
          {article.relatedArticles && article.relatedArticles.length > 0 && (
            <section aria-labelledby="related-articles-heading" className="border-t border-border-subtle pt-8 mb-8">
              <h3 id="related-articles-heading" className="text-base md:text-lg font-bold text-text-primary mb-4">
                مقالات ذات صلة في المكتبة المالية:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {article.relatedArticles.map((rel) => (
                  <a
                    key={rel.slug}
                    href={`/blog/${rel.slug}`}
                    className="p-4 rounded-xl border border-border-subtle bg-surface-subtle/40 hover:border-primary/50 hover:bg-surface-subtle transition-all text-right group block"
                  >
                    <span className="text-xs text-primary font-medium mb-1 block">مقال مقترح ←</span>
                    <h4 className="text-sm font-bold text-text-primary group-hover:text-primary transition-colors leading-snug">
                      {rel.title}
                    </h4>
                  </a>
                ))}
              </div>
            </section>
          )}

          {/* Related Commercial Service Card (Internal Linking) */}
          {article.relatedService && (
            <aside
              aria-label="الخدمة المرتبطة بالمقال"
              className="bg-surface-subtle/60 border border-border-subtle rounded-2xl p-6 md:p-8 mb-8"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-primary font-bold uppercase tracking-wider block mb-1">
                    حلول مالية مرتبطة
                  </span>
                  <h3 className="text-base md:text-lg font-bold text-text-primary mb-1">
                    {article.relatedService.title}
                  </h3>
                  {article.relatedService.description && (
                    <p className="text-xs md:text-sm text-text-secondary leading-relaxed max-w-xl">
                      {article.relatedService.description}
                    </p>
                  )}
                </div>
                <a
                  href={article.relatedService.url}
                  className="whitespace-nowrap px-5 py-2.5 bg-primary text-white text-xs md:text-sm font-semibold rounded-xl hover:bg-primary/90 transition-colors shadow-sm"
                >
                  تفاصيل الخدمة ←
                </a>
              </div>
            </aside>
          )}

          {/* WhatsApp Direct Consultation */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 text-center">
            <h3 className="text-base font-bold text-text-primary mb-2">
              هل تواجه تحدياً في تطبيق هذه المعايير في منشأتك؟
            </h3>
            <p className="text-xs md:text-sm text-text-secondary leading-relaxed mb-4 max-w-lg mx-auto">
              فريق القائد للإدارة المالية جاهز لتقديم الدعم التخصصي والتحليل المالي المتكامل لنشاطك.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2.5 bg-primary text-white text-xs md:text-sm font-semibold rounded-xl hover:bg-primary/90 transition-colors shadow-sm"
            >
              استشارة مباشرة عبر واتساب
            </a>
          </div>

        </article>
      </Container>
    </SectionWrapper>
  );
}
