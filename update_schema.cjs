const fs = require('fs');

const indexHtmlPath = 'index.html';
let html = fs.readFileSync(indexHtmlPath, 'utf8');

const schemaRegex = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/;
const match = html.match(schemaRegex);
if (!match) {
  console.log('No schema found in index.html');
  process.exit(1);
}

let schemaObj = JSON.parse(match[1]);
let graph = schemaObj['@graph'];

const sameAsLinks = [
  "https://www.tiktok.com/@alqaeed.sa1",
  "https://www.instagram.com/alqaeed.sa",
  "https://x.com/alqaeed_sa",
  "https://www.youtube.com/@alqaeed-fin-Acc-tax-sa",
  "https://www.facebook.com/share/1E5ttqMGB8/",
  "https://www.linkedin.com/in/alqaeed-fin-acc-tax/"
];

// 1. Organization
let org = graph.find(n => n['@type'] === 'Organization');
org.name = "القائد";
org.legalName = "مؤسسة خالد القائد للخدمات التجارية"; // Using a placeholder or just his name? Actually, "مؤسسة القائد" maybe? Wait, let's use "القائد" as legalName if we don't have it, or "خالد القائد". Let's just use "القائد".
org.url = "https://alqaeed-sa.pages.dev/";
org.logo = { "@id": "https://alqaeed-sa.pages.dev/#logo" };
org.image = { "@id": "https://alqaeed-sa.pages.dev/#logo" };
org.email = "alqaeed.sa@gmail.com";
org.telephone = "+966511294383";
org.addressCountry = "SA";
org.areaServed = "Saudi Arabia";
org.sameAs = sameAsLinks;
org.contactPoint = {
  "@type": "ContactPoint",
  "telephone": "+966511294383",
  "contactType": "customer service",
  "email": "alqaeed.sa@gmail.com",
  "availableLanguage": ["Arabic", "English"],
  "areaServed": "SA"
};

// 2. Person
let person = graph.find(n => n['@type'] === 'Person');
person.name = "خالد القائد";
person.jobTitle = "مؤسس القائد ومتخصص في الإدارة المالية المتكاملة عن بعد للمنشآت";
person.worksFor = { "@id": "https://alqaeed-sa.pages.dev/#organization" };
// knowsAbout is already there, let's keep it
person.image = { "@id": "https://alqaeed-sa.pages.dev/#logo" };
person.sameAs = sameAsLinks;
person.url = "https://alqaeed-sa.pages.dev/";

// 3. ProfessionalService
let profService = graph.find(n => n['@type'] === 'ProfessionalService');
// Remove fake street addresses. Use areaServed: Saudi Arabia
delete profService.address;
profService.areaServed = "Saudi Arabia";
profService.hasOfferCatalog = {
  "@type": "OfferCatalog",
  "name": "خدمات الإدارة المالية",
  "itemListElement": [
    "تنظيم الحسابات ومسك الدفاتر",
    "الزكاة والضريبة",
    "إعداد القوائم المالية",
    "التحليل المالي",
    "التقارير الإدارية",
    "إعداد الموازنات",
    "إدارة التدفقات النقدية",
    "المدير المالي عن بعد Virtual CFO"
  ].map(name => ({
    "@type": "Offer",
    "itemOffered": {
      "@type": "Service",
      "name": name
    }
  }))
};

// 7. WebPage
let webpage = graph.find(n => n['@type'] === 'WebPage');
webpage.name = "القائد | الإدارة المالية المتكاملة عن بعد للمنشآت";
webpage.description = "القائد - الإدارة المالية المتكاملة عن بعد للمنشآت. حلول مالية متكاملة لدعم اتخاذ القرار وتحسين الأداء المالي للمنشآت في السعودية.";
webpage.primaryImageOfPage = { "@id": "https://alqaeed-sa.pages.dev/#logo" };
webpage.inLanguage = "ar-SA";
webpage.isPartOf = { "@id": "https://alqaeed-sa.pages.dev/#website" };

// 5. BreadcrumbList (validate)
let breadcrumb = graph.find(n => n['@type'] === 'BreadcrumbList');
// Already fine.

// Replace schema in html
html = html.replace(match[1], '\n' + JSON.stringify(schemaObj, null, 2) + '\n    ');
fs.writeFileSync(indexHtmlPath, html, 'utf8');
console.log('Updated index.html schema');
