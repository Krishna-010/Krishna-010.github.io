const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const p12 = html.indexOf('<!-- Project 12 Detail -->');
const about = html.indexOf('<!-- ABOUT PANEL -->');
console.log('p12:', p12);
console.log('about:', about);
