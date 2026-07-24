const fs = require('fs');
const path = require('path');

const pagesDir = 'src/pages';
const files = ['CookiesPage.tsx', 'PrivacyPolicyPage.tsx', 'TermsPage.tsx'];

for (const file of files) {
  const filePath = path.join(pagesDir, file);
  if (!fs.existsSync(filePath)) continue;
  let content = fs.readFileSync(filePath, 'utf8');

  const schemaRegex = /const schema = (\{[\s\S]*?\n  \});/m;
  const match = content.match(schemaRegex);
  if (match) {
    let schemaStr = match[1];
    
    // WebPage schema needs: primaryImageOfPage, inLanguage
    if (!schemaStr.includes('"primaryImageOfPage"')) {
      schemaStr = schemaStr.replace(
        /"isPartOf": \{/g, 
        '"primaryImageOfPage": {\n          "@id": "https://alqaeed-sa.netlify.app/#logo"\n        },\n        "inLanguage": "ar-SA",\n        "isPartOf": {'
      );
    }
    
    // Add BreadcrumbList if missing
    const breadcrumbRegex = /\{\s*"@type":\s*"BreadcrumbList"[\s\S]*?\}/;
    if (!schemaStr.match(breadcrumbRegex)) {
        schemaStr = schemaStr.replace(/\]\s*\}$/, `,
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
            "name": metaTitle,
            "item": url
          }
        ]
      }
    ]
  }`);
    }

    content = content.replace(schemaRegex, `const schema = ${schemaStr};`);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Fixed', file);
  }
}
