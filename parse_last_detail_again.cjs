const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const p11 = html.indexOf('<!-- Project 11 Detail -->');
const p12 = html.indexOf('<!-- Project 12 Detail -->');
const about = html.indexOf('<!-- ABOUT PANEL -->');

console.log('p11:', p11);
console.log('p12:', p12);
console.log('about:', about);

console.log('Between p12 and about:\n', html.substring(p12, about));
