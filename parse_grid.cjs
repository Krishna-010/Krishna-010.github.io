const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const masterStart = html.indexOf('id="projects-master-view"');
const gridStart = html.indexOf('class="projects-grid"');
const detailStart = html.indexOf('id="projects-detail-view"');

console.log('masterStart', masterStart);
console.log('gridStart', gridStart);
console.log('detailStart', detailStart);

const gridHtml = html.substring(gridStart, detailStart);
let balance = 0;
for(let i=0; i<gridHtml.length; i++) {
  if (gridHtml.substring(i, i+4) === '<div') balance++;
  if (gridHtml.substring(i, i+6) === '</div') balance--;
}
console.log('Grid balance:', balance);
