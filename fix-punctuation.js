const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = dir + '/' + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./sections').concat(walk('./components'));
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  // Remove ., ،, -, :, ؛, ! from strings
  // Actually we just want to remove any of these characters when they are part of text.
  // A safer regex: match them and remove, but be careful not to break code syntax.
  // If we only remove them if they are adjacent to Arabic characters, it's safer.
  content = content.replace(/([\\u0600-\\u06FF])[\\.,،\\-؛\\!:](?=[\\s"']|$)/g, '$1');
  content = content.replace(/(?<=^|[\\s"'])[\\.,،\\-؛\\!:]([\\u0600-\\u06FF])/g, '$1');
  // Also inside sentences:
  content = content.replace(/([\\u0600-\\u06FF])[\\.,،\\-؛\\!:]([\\u0600-\\u06FF])/g, '$1 $2');
  
  fs.writeFileSync(file, content, 'utf8');
});
