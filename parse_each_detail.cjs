const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const detailRegex = /<!-- Project (\d+) Detail -->/g;
let matches = [];
let match;
while ((match = detailRegex.exec(html)) !== null) {
  matches.push({ id: match[1], index: match.index });
}
matches.push({ id: 'END', index: html.indexOf('<!-- PANEL 4') });

for (let i = 0; i < matches.length - 1; i++) {
  const content = html.substring(matches[i].index, matches[i+1].index);
  const opens = (content.match(/<div/g) || []).length;
  const closes = (content.match(/<\/div>/g) || []).length;
  if (opens !== closes) {
    console.log(`Detail ${matches[i].id}: opens=${opens}, closes=${closes}, diff=${opens - closes}`);
  }
}
