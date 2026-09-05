const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const gridStartMarker = '<div class="projects-grid" id="projects-grid">';
const gridStartIdx = html.indexOf(gridStartMarker) + gridStartMarker.length;
const gridEndIdx = html.indexOf('</div>\n              </div>\n              \n              <!-- Projects Detail View -->');
let gridHTML = html.substring(gridStartIdx, gridEndIdx);

let m = gridHTML.match(/<h3 class="project-title">(.*?)<\/h3>/g);
console.log(m);
