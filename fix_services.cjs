const fs = require('fs');
const path = require('path');

const servicesDir = 'src/pages/services';
const files = fs.readdirSync(servicesDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(servicesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Find the schema definition.
  // It's defined as: const schema = { ... };
  
  const schemaRegex = /const schema = (\{[\s\S]*?\n  \});/m;
  const match = content.match(schemaRegex);
  if (match) {
    let schemaStr = match[1];
    
    // We need to parse this string to modify it, but it might contain variable references (like `url`, `metaTitle`, `metaDesc`).
    // Since it's a JS object, let's just do text replacements.
    
    // WebPage schema needs: primaryImageOfPage, inLanguage
    if (!schemaStr.includes('"primaryImageOfPage"')) {
      schemaStr = schemaStr.replace(
        /"isPartOf": \{/g, 
        '"primaryImageOfPage": {\n          "@id": "https://alqaeed-sa.netlify.app/#logo"\n        },\n        "inLanguage": "ar-SA",\n        "isPartOf": {'
      );
    }

    // Replace the entire Service block
    // We need to make sure Service schema is correct.
    const serviceRegex = /\{\s*"@type":\s*"Service",[\s\S]*?"areaServed":\s*"SA"\s*\}/;
    if (schemaStr.match(serviceRegex)) {
       schemaStr = schemaStr.replace(serviceRegex, `{
        "@type": "Service",
        "@id": url + "/#service",
        "name": metaTitle,
        "description": metaDesc,
        "provider": {
          "@id": "https://alqaeed-sa.netlify.app/#organization"
        },
        "areaServed": "Saudi Arabia"
      }`);
    }
    
    // Check if BreadcrumbList exists.
    const breadcrumbRegex = /\{\s*"@type":\s*"BreadcrumbList"[\s\S]*?\}/;
    if (!schemaStr.match(breadcrumbRegex)) {
        // Add BreadcrumbList to @graph
        // wait, I can just use string manipulation
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
            "name": "الخدمات",
            "item": "https://alqaeed-sa.netlify.app/#services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": metaTitle,
            "item": url
          }
        ]
      }
    ]
  }`);
    } else {
        // Check if there are any trailing commas in BreadcrumbList, no big deal
    }

    content = content.replace(schemaRegex, `const schema = ${schemaStr};`);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Fixed', file);
  }
}
