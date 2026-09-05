const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const p12 = html.indexOf('<!-- Project 12 Detail -->');
const about = html.indexOf('<!-- ABOUT PANEL -->');
console.log(html.substring(p12, about));
