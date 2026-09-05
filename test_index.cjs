const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const gridEndIdx = html.indexOf('</div>\n              </div>\n              \n              <!-- Projects Detail View -->');
console.log(gridEndIdx);
