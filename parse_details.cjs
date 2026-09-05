const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const detailViewStartStr = '<div id="projects-detail-view"';
const detailViewStart = html.indexOf(detailViewStartStr);
const detailViewEndStr = '</section>\n\n          <!-- Publications';
const detailViewEnd = html.indexOf(detailViewEndStr);
const detailHTML = html.substring(detailViewStart, detailViewEnd);

let detailBlocks = detailHTML.split(/<!-- Project \d+ Detail -->/);
console.log("Detail Blocks split length:", detailBlocks.length);
