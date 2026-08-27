import { BLOG_ARTICLES } from '../data/blogArticles';

export interface RouteMeta {
  path: string;
  title: string;
  description: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
  schema: object;
}

export const ROUTES_METADATA: Record<string, RouteMeta> = {
  '/': {
    path: '/',
    title: 'القائد | الإدارة المالية المتكاملة عن بعد للمنشآت',
    description: 'القائد - الإدارة المالية المتكاملة عن بعد للمنشآت. أقدم حلولاً مالية متكاملة لدعم اتخاذ القرار وتحسين الأداء المالي، من خلال مسك الدفاتر، التحليل المالي، التخطيط المالي، وإعداد الميزانيات للمنشآت في المملكة العربية السعودية.',
    canonical: 'https://alqaeed-sa.netlify.app/',
    ogTitle: 'القائد | الإدارة المالية المتكاملة عن بعد للمنشآت',
    ogDescription: 'القائد - الإدارة المالية المتكاملة عن بعد للمنشآت. حلول مالية متكاملة لدعم اتخاذ القرار وتحسين الأداء المالي للمنشآت في السعودية.',
    ogUrl: 'https://alqaeed-sa.netlify.app/',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "ProfessionalService",
          "@id": "https://alqaeed-sa.netlify.app/#organization",
          "name": "القائد للإدارة المالية",
          "alternateName": "Al-Qaeed Financial Management",
          "url": "https://alqaeed-sa.netlify.app/",
          "logo": {
            "@type": "ImageObject",
            "@id": "https://alqaeed-sa.netlify.app/#logo",
            "url": "https://alqaeed-sa.netlify.app/images/khaled.webp",
            "caption": "القائد للإدارة المالية"
          },
          "image": "https://alqaeed-sa.netlify.app/images/khaled.webp",
          "description": "الإدارة المالية المتكاملة عن بعد للمنشآت والشركات في المملكة العربية السعودية، تشمل مسك الدفاتر، إعداد القوائم المالية، التحليل المالي، وإدارة التدفقات النقدية.",
          "telephone": "+966511294383",
          "email": "alqaeed.sa@gmail.com",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "SA",
            "addressRegion": "Riyadh"
          },
          "areaServed": [
            {
              "@type": "Country",
              "name": "Saudi Arabia"
            }
          ]
        },
        {
          "@type": "WebSite",
          "@id": "https://alqaeed-sa.netlify.app/#website",
          "url": "https://alqaeed-sa.netlify.app/",
          "name": "القائد للإدارة المالية",
          "inLanguage": "ar-SA",
          "publisher": {
            "@id": "https://alqaeed-sa.netlify.app/#organization"
          }
        },
        {
          "@type": "WebPage",
          "@id": "https://alqaeed-sa.netlify.app/#webpage",
          "url": "https://alqaeed-sa.netlify.app/",
          "name": "القائد | الإدارة المالية المتكاملة عن بعد للمنشآت",
          "isPartOf": {
            "@id": "https://alqaeed-sa.netlify.app/#website"
          },
          "inLanguage": "ar-SA"
        }
      ]
    }
  },
  '/services/bookkeeping': {
    path: '/services/bookkeeping',
    title: 'خدمات مسك الدفاتر المحاسبية للشركات | القائد للإدارة المالية',
    description: 'نقدم خدمات تنظيم الحسابات ومسك الدفاتر الاحترافية. احصل على تقارير مالية دقيقة تساند نمو أعمالك وتضمن دقة قراراتك عبر أفضل البرامج المحاسبية.',
    canonical: 'https://alqaeed-sa.netlify.app/services/bookkeeping',
    ogTitle: 'خدمات مسك الدفاتر المحاسبية للشركات | القائد للإدارة المالية',
    ogDescription: 'نقدم خدمات تنظيم الحسابات ومسك الدفاتر الاحترافية. احصل على تقارير مالية دقيقة تساند نمو أعمالك وتضمن دقة قراراتك عبر أفضل البرامج المحاسبية.',
    ogUrl: 'https://alqaeed-sa.netlify.app/services/bookkeeping',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://alqaeed-sa.netlify.app/services/bookkeeping/#webpage",
          "url": "https://alqaeed-sa.netlify.app/services/bookkeeping",
          "name": "خدمات مسك الدفاتر المحاسبية للشركات | القائد للإدارة المالية",
          "description": "نقدم خدمات تنظيم الحسابات ومسك الدفاتر الاحترافية. احصل على تقارير مالية دقيقة تساند نمو أعمالك وتضمن دقة قراراتك عبر أفضل البرامج المحاسبية.",
          "primaryImageOfPage": {
            "@id": "https://alqaeed-sa.netlify.app/#logo"
          },
          "inLanguage": "ar-SA",
          "isPartOf": {
            "@id": "https://alqaeed-sa.netlify.app/#website"
          }
        },
        {
          "@type": "Service",
          "@id": "https://alqaeed-sa.netlify.app/services/bookkeeping/#service",
          "name": "خدمات مسك الدفاتر المحاسبية للشركات | القائد للإدارة المالية",
          "description": "نقدم خدمات تنظيم الحسابات ومسك الدفاتر الاحترافية. احصل على تقارير مالية دقيقة تساند نمو أعمالك وتضمن دقة قراراتك عبر أفضل البرامج المحاسبية.",
          "provider": {
            "@id": "https://alqaeed-sa.netlify.app/#organization"
          },
          "areaServed": "Saudi Arabia"
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://alqaeed-sa.netlify.app/services/bookkeeping/#breadcrumb",
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
              "name": "تنظيم الحسابات ومسك الدفاتر",
              "item": "https://alqaeed-sa.netlify.app/services/bookkeeping"
            }
          ]
        }
      ]
    }
  },
  '/services/zakat-tax': {
    path: '/services/zakat-tax',
    title: 'خدمات الزكاة والضريبة للشركات | القائد للإدارة المالية',
    description: 'احمِ شركتك من المخالفات الضريبية. نقدم خدمات احترافية في إعداد ورفع الإقرارات الزكوية والضريبية بدقة واحترافية وفق متطلبات هيئة الزكاة والضريبة والجمارك.',
    canonical: 'https://alqaeed-sa.netlify.app/services/zakat-tax',
    ogTitle: 'خدمات الزكاة والضريبة للشركات | القائد للإدارة المالية',
    ogDescription: 'احمِ شركتك من المخالفات الضريبية. نقدم خدمات احترافية في إعداد ورفع الإقرارات الزكوية والضريبية بدقة واحترافية وفق متطلبات هيئة الزكاة والضريبة والجمارك.',
    ogUrl: 'https://alqaeed-sa.netlify.app/services/zakat-tax',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://alqaeed-sa.netlify.app/services/zakat-tax/#webpage",
          "url": "https://alqaeed-sa.netlify.app/services/zakat-tax",
          "name": "خدمات الزكاة والضريبة للشركات | القائد للإدارة المالية",
          "description": "احمِ شركتك من المخالفات الضريبية. نقدم خدمات احترافية في إعداد ورفع الإقرارات الزكوية والضريبية بدقة واحترافية وفق متطلبات هيئة الزكاة والضريبة والجمارك.",
          "primaryImageOfPage": {
            "@id": "https://alqaeed-sa.netlify.app/#logo"
          },
          "inLanguage": "ar-SA",
          "isPartOf": {
            "@id": "https://alqaeed-sa.netlify.app/#website"
          }
        },
        {
          "@type": "Service",
          "@id": "https://alqaeed-sa.netlify.app/services/zakat-tax/#service",
          "name": "خدمات الزكاة والضريبة للشركات | القائد للإدارة المالية",
          "description": "احمِ شركتك من المخالفات الضريبية. نقدم خدمات احترافية في إعداد ورفع الإقرارات الزكوية والضريبية بدقة واحترافية وفق متطلبات هيئة الزكاة والضريبة والجمارك.",
          "provider": {
            "@id": "https://alqaeed-sa.netlify.app/#organization"
          },
          "areaServed": "Saudi Arabia"
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://alqaeed-sa.netlify.app/services/zakat-tax/#breadcrumb",
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
              "name": "الزكاة والضريبة",
              "item": "https://alqaeed-sa.netlify.app/services/zakat-tax"
            }
          ]
        }
      ]
    }
  },
  '/services/financial-statements': {
    path: '/services/financial-statements',
    title: 'إعداد القوائم المالية المعتمدة للشركات | القائد للإدارة المالية',
    description: 'احصل على قوائم مالية دقيقة وشفافة تعكس الأداء الحقيقي لمنشأتك. نساعدك في إعداد ميزانيات احترافية تدعم قراراتك وتزيد ثقة البنوك والمستثمرين.',
    canonical: 'https://alqaeed-sa.netlify.app/services/financial-statements',
    ogTitle: 'إعداد القوائم المالية المعتمدة للشركات | القائد للإدارة المالية',
    ogDescription: 'احصل على قوائم مالية دقيقة وشفافة تعكس الأداء الحقيقي لمنشأتك. نساعدك في إعداد ميزانيات احترافية تدعم قراراتك وتزيد ثقة البنوك والمستثمرين.',
    ogUrl: 'https://alqaeed-sa.netlify.app/services/financial-statements',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://alqaeed-sa.netlify.app/services/financial-statements/#webpage",
          "url": "https://alqaeed-sa.netlify.app/services/financial-statements",
          "name": "إعداد القوائم المالية المعتمدة للشركات | القائد للإدارة المالية",
          "description": "احصل على قوائم مالية دقيقة وشفافة تعكس الأداء الحقيقي لمنشأتك. نساعدك في إعداد ميزانيات احترافية تدعم قراراتك وتزيد ثقة البنوك والمستثمرين.",
          "primaryImageOfPage": {
            "@id": "https://alqaeed-sa.netlify.app/#logo"
          },
          "inLanguage": "ar-SA",
          "isPartOf": {
            "@id": "https://alqaeed-sa.netlify.app/#website"
          }
        },
        {
          "@type": "Service",
          "@id": "https://alqaeed-sa.netlify.app/services/financial-statements/#service",
          "name": "إعداد القوائم المالية المعتمدة للشركات | القائد للإدارة المالية",
          "description": "احصل على قوائم مالية دقيقة وشفافة تعكس الأداء الحقيقي لمنشأتك. نساعدك في إعداد ميزانيات احترافية تدعم قراراتك وتزيد ثقة البنوك والمستثمرين.",
          "provider": {
            "@id": "https://alqaeed-sa.netlify.app/#organization"
          },
          "areaServed": "Saudi Arabia"
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://alqaeed-sa.netlify.app/services/financial-statements/#breadcrumb",
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
              "name": "إعداد القوائم المالية",
              "item": "https://alqaeed-sa.netlify.app/services/financial-statements"
            }
          ]
        }
      ]
    }
  },
  '/services/financial-analysis': {
    path: '/services/financial-analysis',
    title: 'التحليل المالي للشركات وتقييم الأداء | القائد للإدارة المالية',
    description: 'حول الأرقام الصامتة إلى استراتيجيات ناجحة. خدمات التحليل المالي الاحترافية لمساعدتك في فهم مؤشرات السيولة والربحية واكتشاف فرص النمو لمنشأتك.',
    canonical: 'https://alqaeed-sa.netlify.app/services/financial-analysis',
    ogTitle: 'التحليل المالي للشركات وتقييم الأداء | القائد للإدارة المالية',
    ogDescription: 'حول الأرقام الصامتة إلى استراتيجيات ناجحة. خدمات التحليل المالي الاحترافية لمساعدتك في فهم مؤشرات السيولة والربحية واكتشاف فرص النمو لمنشأتك.',
    ogUrl: 'https://alqaeed-sa.netlify.app/services/financial-analysis',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://alqaeed-sa.netlify.app/services/financial-analysis/#webpage",
          "url": "https://alqaeed-sa.netlify.app/services/financial-analysis",
          "name": "التحليل المالي للشركات وتقييم الأداء | القائد للإدارة المالية",
          "description": "حول الأرقام الصامتة إلى استراتيجيات ناجحة. خدمات التحليل المالي الاحترافية لمساعدتك في فهم مؤشرات السيولة والربحية واكتشاف فرص النمو لمنشأتك.",
          "primaryImageOfPage": {
            "@id": "https://alqaeed-sa.netlify.app/#logo"
          },
          "inLanguage": "ar-SA",
          "isPartOf": {
            "@id": "https://alqaeed-sa.netlify.app/#website"
          }
        },
        {
          "@type": "Service",
          "@id": "https://alqaeed-sa.netlify.app/services/financial-analysis/#service",
          "name": "التحليل المالي للشركات وتقييم الأداء | القائد للإدارة المالية",
          "description": "حول الأرقام الصامتة إلى استراتيجيات ناجحة. خدمات التحليل المالي الاحترافية لمساعدتك في فهم مؤشرات السيولة والربحية واكتشاف فرص النمو لمنشأتك.",
          "provider": {
            "@id": "https://alqaeed-sa.netlify.app/#organization"
          },
          "areaServed": "Saudi Arabia"
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://alqaeed-sa.netlify.app/services/financial-analysis/#breadcrumb",
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
              "name": "التحليل المالي",
              "item": "https://alqaeed-sa.netlify.app/services/financial-analysis"
            }
          ]
        }
      ]
    }
  },
  '/services/management-reports': {
    path: '/services/management-reports',
    title: 'إعداد التقارير الإدارية المالية للشركات | القائد للإدارة المالية',
    description: 'ابقَ على اطلاع دائم بأداء منشأتك عبر تقارير إدارية ولوحات قياس دقيقة تصمم خصيصاً لتمنح الإدارة العليا القدرة على اتخاذ قرارات سريعة وصائبة.',
    canonical: 'https://alqaeed-sa.netlify.app/services/management-reports',
    ogTitle: 'إعداد التقارير الإدارية المالية للشركات | القائد للإدارة المالية',
    ogDescription: 'ابقَ على اطلاع دائم بأداء منشأتك عبر تقارير إدارية ولوحات قياس دقيقة تصمم خصيصاً لتمنح الإدارة العليا القدرة على اتخاذ قرارات سريعة وصائبة.',
    ogUrl: 'https://alqaeed-sa.netlify.app/services/management-reports',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://alqaeed-sa.netlify.app/services/management-reports/#webpage",
          "url": "https://alqaeed-sa.netlify.app/services/management-reports",
          "name": "إعداد التقارير الإدارية المالية للشركات | القائد للإدارة المالية",
          "description": "ابقَ على اطلاع دائم بأداء منشأتك عبر تقارير إدارية ولوحات قياس دقيقة تصمم خصيصاً لتمنح الإدارة العليا القدرة على اتخاذ قرارات سريعة وصائبة.",
          "primaryImageOfPage": {
            "@id": "https://alqaeed-sa.netlify.app/#logo"
          },
          "inLanguage": "ar-SA",
          "isPartOf": {
            "@id": "https://alqaeed-sa.netlify.app/#website"
          }
        },
        {
          "@type": "Service",
          "@id": "https://alqaeed-sa.netlify.app/services/management-reports/#service",
          "name": "إعداد التقارير الإدارية المالية للشركات | القائد للإدارة المالية",
          "description": "ابقَ على اطلاع دائم بأداء منشأتك عبر تقارير إدارية ولوحات قياس دقيقة تصمم خصيصاً لتمنح الإدارة العليا القدرة على اتخاذ قرارات سريعة وصائبة.",
          "provider": {
            "@id": "https://alqaeed-sa.netlify.app/#organization"
          },
          "areaServed": "Saudi Arabia"
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://alqaeed-sa.netlify.app/services/management-reports/#breadcrumb",
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
              "name": "التقارير الإدارية",
              "item": "https://alqaeed-sa.netlify.app/services/management-reports"
            }
          ]
        }
      ]
    }
  },
  '/services/budgeting': {
    path: '/services/budgeting',
    title: 'إعداد الموازنات التقديرية والتخطيط المالي | القائد للإدارة المالية',
    description: 'خطط لنجاحك المالي بثقة. خدمة إعداد الموازنات التقديرية تساعدك على وضع أهداف مالية واضحة ومراقبة الانحرافات لضمان تحقيق رؤية منشأتك.',
    canonical: 'https://alqaeed-sa.netlify.app/services/budgeting',
    ogTitle: 'إعداد الموازنات التقديرية والتخطيط المالي | القائد للإدارة المالية',
    ogDescription: 'خطط لنجاحك المالي بثقة. خدمة إعداد الموازنات التقديرية تساعدك على وضع أهداف مالية واضحة ومراقبة الانحرافات لضمان تحقيق رؤية منشأتك.',
    ogUrl: 'https://alqaeed-sa.netlify.app/services/budgeting',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://alqaeed-sa.netlify.app/services/budgeting/#webpage",
          "url": "https://alqaeed-sa.netlify.app/services/budgeting",
          "name": "إعداد الموازنات التقديرية والتخطيط المالي | القائد للإدارة المالية",
          "description": "خطط لنجاحك المالي بثقة. خدمة إعداد الموازنات التقديرية تساعدك على وضع أهداف مالية واضحة ومراقبة الانحرافات لضمان تحقيق رؤية منشأتك.",
          "primaryImageOfPage": {
            "@id": "https://alqaeed-sa.netlify.app/#logo"
          },
          "inLanguage": "ar-SA",
          "isPartOf": {
            "@id": "https://alqaeed-sa.netlify.app/#website"
          }
        },
        {
          "@type": "Service",
          "@id": "https://alqaeed-sa.netlify.app/services/budgeting/#service",
          "name": "إعداد الموازنات التقديرية والتخطيط المالي | القائد للإدارة المالية",
          "description": "خطط لنجاحك المالي بثقة. خدمة إعداد الموازنات التقديرية تساعدك على وضع أهداف مالية واضحة ومراقبة الانحرافات لضمان تحقيق رؤية منشأتك.",
          "provider": {
            "@id": "https://alqaeed-sa.netlify.app/#organization"
          },
          "areaServed": "Saudi Arabia"
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://alqaeed-sa.netlify.app/services/budgeting/#breadcrumb",
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
              "name": "إعداد الموازنات",
              "item": "https://alqaeed-sa.netlify.app/services/budgeting"
            }
          ]
        }
      ]
    }
  },
  '/services/cash-flow': {
    path: '/services/cash-flow',
    title: 'إدارة التدفقات النقدية للشركات | القائد للإدارة المالية',
    description: 'حافظ على سيولة منشأتك وتجنب الأزمات المالية. نقدم خدمات تخطيط وإدارة التدفقات النقدية لضمان وفائك بالتزاماتك وتمويل نمو أعمالك بأمان.',
    canonical: 'https://alqaeed-sa.netlify.app/services/cash-flow',
    ogTitle: 'إدارة التدفقات النقدية للشركات | القائد للإدارة المالية',
    ogDescription: 'حافظ على سيولة منشأتك وتجنب الأزمات المالية. نقدم خدمات تخطيط وإدارة التدفقات النقدية لضمان وفائك بالتزاماتك وتمويل نمو أعمالك بأمان.',
    ogUrl: 'https://alqaeed-sa.netlify.app/services/cash-flow',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://alqaeed-sa.netlify.app/services/cash-flow/#webpage",
          "url": "https://alqaeed-sa.netlify.app/services/cash-flow",
          "name": "إدارة التدفقات النقدية للشركات | القائد للإدارة المالية",
          "description": "حافظ على سيولة منشأتك وتجنب الأزمات المالية. نقدم خدمات تخطيط وإدارة التدفقات النقدية لضمان وفائك بالتزاماتك وتمويل نمو أعمالك بأمان.",
          "primaryImageOfPage": {
            "@id": "https://alqaeed-sa.netlify.app/#logo"
          },
          "inLanguage": "ar-SA",
          "isPartOf": {
            "@id": "https://alqaeed-sa.netlify.app/#website"
          }
        },
        {
          "@type": "Service",
          "@id": "https://alqaeed-sa.netlify.app/services/cash-flow/#service",
          "name": "إدارة التدفقات النقدية للشركات | القائد للإدارة المالية",
          "description": "حافظ على سيولة منشأتك وتجنب الأزمات المالية. نقدم خدمات تخطيط وإدارة التدفقات النقدية لضمان وفائك بالتزاماتك وتمويل نمو أعمالك بأمان.",
          "provider": {
            "@id": "https://alqaeed-sa.netlify.app/#organization"
          },
          "areaServed": "Saudi Arabia"
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://alqaeed-sa.netlify.app/services/cash-flow/#breadcrumb",
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
              "name": "إدارة التدفقات النقدية",
              "item": "https://alqaeed-sa.netlify.app/services/cash-flow"
            }
          ]
        }
      ]
    }
  },
  '/services/virtual-cfo': {
    path: '/services/virtual-cfo',
    title: 'المدير المالي عن بعد (Virtual CFO) | القائد للإدارة المالية',
    description: 'احصل على خبرات القيادة المالية الاستراتيجية بتكلفة مرنة. خدمة المدير المالي عن بعد تدعم نمو منشأتك وتوفر لك استشارات مالية متقدمة لقراراتك الحاسمة.',
    canonical: 'https://alqaeed-sa.netlify.app/services/virtual-cfo',
    ogTitle: 'المدير المالي عن بعد (Virtual CFO) | القائد للإدارة المالية',
    ogDescription: 'احصل على خبرات القيادة المالية الاستراتيجية بتكلفة مرنة. خدمة المدير المالي عن بعد تدعم نمو منشأتك وتوفر لك استشارات مالية متقدمة لقراراتك الحاسمة.',
    ogUrl: 'https://alqaeed-sa.netlify.app/services/virtual-cfo',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://alqaeed-sa.netlify.app/services/virtual-cfo/#webpage",
          "url": "https://alqaeed-sa.netlify.app/services/virtual-cfo",
          "name": "المدير المالي عن بعد (Virtual CFO) | القائد للإدارة المالية",
          "description": "احصل على خبرات القيادة المالية الاستراتيجية بتكلفة مرنة. خدمة المدير المالي عن بعد تدعم نمو منشأتك وتوفر لك استشارات مالية متقدمة لقراراتك الحاسمة.",
          "primaryImageOfPage": {
            "@id": "https://alqaeed-sa.netlify.app/#logo"
          },
          "inLanguage": "ar-SA",
          "isPartOf": {
            "@id": "https://alqaeed-sa.netlify.app/#website"
          }
        },
        {
          "@type": "Service",
          "@id": "https://alqaeed-sa.netlify.app/services/virtual-cfo/#service",
          "name": "المدير المالي عن بعد (Virtual CFO) | القائد للإدارة المالية",
          "description": "احصل على خبرات القيادة المالية الاستراتيجية بتكلفة مرنة. خدمة المدير المالي عن بعد تدعم نمو منشأتك وتوفر لك استشارات مالية متقدمة لقراراتك الحاسمة.",
          "provider": {
            "@id": "https://alqaeed-sa.netlify.app/#organization"
          },
          "areaServed": "Saudi Arabia"
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://alqaeed-sa.netlify.app/services/virtual-cfo/#breadcrumb",
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
              "name": "المدير المالي عن بعد",
              "item": "https://alqaeed-sa.netlify.app/services/virtual-cfo"
            }
          ]
        }
      ]
    }
  },
  '/privacy-policy': {
    path: '/privacy-policy',
    title: 'سياسة الخصوصية | القائد',
    description: 'توضح سياسة الخصوصية كيفية تعاملنا مع بياناتك في القائد لخدمات الإدارة المالية عن بعد. نحن نلتزم بحماية سرية معلوماتك.',
    canonical: 'https://alqaeed-sa.netlify.app/privacy-policy',
    ogTitle: 'سياسة الخصوصية | القائد',
    ogDescription: 'توضح سياسة الخصوصية كيفية تعاملنا مع بياناتك في القائد لخدمات الإدارة المالية عن بعد. نحن نلتزم بحماية سرية معلوماتك.',
    ogUrl: 'https://alqaeed-sa.netlify.app/privacy-policy',
    schema: {
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
    }
  },
  '/terms': {
    path: '/terms',
    title: 'الشروط والأحكام | القائد',
    description: 'اقرأ الشروط والأحكام المتعلقة باستخدام موقع القائد لخدمات الإدارة المالية والاستشارات. توضح هذه الصفحة القواعد المطبقة على خدماتنا.',
    canonical: 'https://alqaeed-sa.netlify.app/terms',
    ogTitle: 'الشروط والأحكام | القائد',
    ogDescription: 'اقرأ الشروط والأحكام المتعلقة باستخدام موقع القائد لخدمات الإدارة المالية والاستشارات. توضح هذه الصفحة القواعد المطبقة على خدماتنا.',
    ogUrl: 'https://alqaeed-sa.netlify.app/terms',
    schema: {
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
    }
  },
  '/cookies': {
    path: '/cookies',
    title: 'سياسة ملفات تعريف الارتباط | القائد',
    description: 'تعرف على كيفية استخدامنا لملفات تعريف الارتباط (Cookies) لتحسين تجربتك على موقع القائد وتحليل أداء الموقع.',
    canonical: 'https://alqaeed-sa.netlify.app/cookies',
    ogTitle: 'سياسة ملفات تعريف الارتباط | القائد',
    ogDescription: 'تعرف على كيفية استخدامنا لملفات تعريف الارتباط (Cookies) لتحسين تجربتك على موقع القائد وتحليل أداء الموقع.',
    ogUrl: 'https://alqaeed-sa.netlify.app/cookies',
    schema: {
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
    }
  },
  '/blog': {
    path: '/blog',
    title: 'المكتبة المالية | القائد للإدارة المالية',
    description: 'المكتبة المالية من القائد - أدلة ومعارف مالية ومحاسبية متخصصة تهدف لمساعدة أصحاب المنشآت والشركات في المملكة العربية السعودية على إدارة أعمالهم واتخاذ قرارات مالية صائبة.',
    canonical: 'https://alqaeed-sa.netlify.app/blog',
    ogTitle: 'المكتبة المالية | القائد للإدارة المالية',
    ogDescription: 'المكتبة المالية من القائد - أدلة ومعارف مالية ومحاسبية متخصصة تهدف لمساعدة أصحاب المنشآت والشركات في المملكة العربية السعودية على إدارة أعمالهم واتخاذ قرارات مالية صائبة.',
    ogUrl: 'https://alqaeed-sa.netlify.app/blog',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "CollectionPage",
          "@id": "https://alqaeed-sa.netlify.app/blog/#webpage",
          "url": "https://alqaeed-sa.netlify.app/blog",
          "name": "المكتبة المالية | القائد للإدارة المالية",
          "description": "المكتبة المالية من القائد - أدلة ومعارف مالية ومحاسبية متخصصة تهدف لمساعدة أصحاب المنشآت والشركات في المملكة العربية السعودية على إدارة أعمالهم واتخاذ قرارات مالية صائبة.",
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
          "@id": "https://alqaeed-sa.netlify.app/blog/#breadcrumb",
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
              "item": "https://alqaeed-sa.netlify.app/blog"
            }
          ]
        }
      ]
    }
  }
};

export function getRouteMetadata(path: string): RouteMeta {
  const normalized = (path.endsWith('/') && path.length > 1) ? path.slice(0, -1) : path;
  if (ROUTES_METADATA[normalized]) {
    return ROUTES_METADATA[normalized];
  }

  if (normalized.startsWith('/blog/')) {
    const slug = normalized.replace(/^\/blog\//, '');
    const article = BLOG_ARTICLES.find((a) => a.slug === slug);
    if (article) {
      const url = `https://alqaeed-sa.netlify.app/blog/${article.slug}`;
      return {
        path: normalized,
        title: `${article.title} | القائد للإدارة المالية`,
        description: article.description,
        canonical: url,
        ogTitle: `${article.title} | القائد للإدارة المالية`,
        ogDescription: article.description,
        ogUrl: url,
        schema: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "@id": `${url}/#article`,
              "headline": article.title,
              "description": article.description,
              "inLanguage": "ar-SA",
              "author": {
                "@type": "Person",
                "name": article.author
              },
              "publisher": {
                "@id": "https://alqaeed-sa.netlify.app/#organization"
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
                  "item": "https://alqaeed-sa.netlify.app/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "المكتبة المالية",
                  "item": "https://alqaeed-sa.netlify.app/blog"
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
        }
      };
    }
  }

  return ROUTES_METADATA['/'];
}

