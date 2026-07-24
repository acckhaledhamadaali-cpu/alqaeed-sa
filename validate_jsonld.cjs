const fs = require('fs');

const indexHtmlPath = 'index.html';
const html = fs.readFileSync(indexHtmlPath, 'utf8');

const schemaRegex = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/;
const match = html.match(schemaRegex);
if (!match) {
  console.log('No schema found in index.html');
  process.exit(1);
}

try {
  let schemaObj = JSON.parse(match[1]);
  console.log('index.html schema is valid JSON.');
  
  const graph = schemaObj['@graph'];
  const ids = new Set();
  const duplicateIds = [];
  
  graph.forEach(node => {
    if (node['@id']) {
      if (ids.has(node['@id'])) duplicateIds.push(node['@id']);
      ids.add(node['@id']);
    }
  });
  if (duplicateIds.length > 0) {
      console.log('Duplicate @id found:', duplicateIds);
  } else {
      console.log('No duplicate @id in index.html');
  }
} catch(e) {
  console.error('Invalid JSON in index.html:', e.message);
}
