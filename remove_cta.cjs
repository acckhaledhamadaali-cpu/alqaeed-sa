const fs = require('fs');
const path = require('path');

const dir = 'src/pages/services';
const files = fs.readdirSync(dir);

files.forEach(file => {
  if (file.endsWith('.tsx')) {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');
    
    // Regular expression to match the CTA div
    const ctaRegex = /<div className="pt-8 mt-12 border-t border-border-subtle flex items-center gap-3 text-text-primary font-bold text-lg">[\s\S]*?<\/div>/;
    
    if (ctaRegex.test(content)) {
      content = content.replace(ctaRegex, '');
      fs.writeFileSync(path.join(dir, file), content);
      console.log(`Updated ${file}`);
    } else {
      console.log(`Could not find CTA in ${file}`);
    }
  }
});
