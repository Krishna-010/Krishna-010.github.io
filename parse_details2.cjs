const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const str = '<!-- Project 0 Detail -->';
console.log(html.includes(str));

let blocks = html.split(/<!-- Project \d+ Detail -->/);
console.log(blocks.length);
