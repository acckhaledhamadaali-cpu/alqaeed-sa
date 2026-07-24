const fs = require('fs');
const path = require('path');

const servicesDir = 'src/pages/services';
const files = fs.readdirSync(servicesDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(servicesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  const schemaRegex = /const schema = (\{[\s\S]*?\n  \});/m;
  const match = content.match(schemaRegex);
  if (match) {
    let schemaStr = match[1];
    try {
        // since schema string contains JS variables like url, metaTitle, etc.
        // It's not valid JSON. But we can evaluate it if we mock the variables.
        const mockFn = new Function('url', 'metaTitle', 'metaDesc', 'name', `return ${schemaStr};`);
        const schemaObj = mockFn('http://mock.com', 'Mock Title', 'Mock Desc', 'Mock Name');
        // valid JS object.
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
            console.log(`Duplicate @id found in ${file}:`, duplicateIds);
        }
    } catch (e) {
        console.error(`Invalid syntax in ${file}:`, e.message);
    }
  }
}
