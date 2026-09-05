const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const detailStart = html.indexOf('<!-- DETAIL VIEW: Carousel -->');
const htmlDetail = html.substring(detailStart);
const opens = (htmlDetail.match(/<div/g) || []).length;
const closes = (htmlDetail.match(/<\/div>/g) || []).length;
console.log('Inside Detail View - opens:', opens, 'closes:', closes);
