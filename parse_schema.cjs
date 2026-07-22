const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const match = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
if (match) {
  fs.writeFileSync('schema.json', match[1]);
  console.log('schema.json written');
}
