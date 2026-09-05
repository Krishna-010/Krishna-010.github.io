const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('index.html', 'utf8');
const $ = cheerio.load(html);

const selector = 'main#stage-viewport:nth-of-type(1) > div#views-deck:nth-of-type(2) > section#panel-home:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > h3:nth-of-type(1)';
const el = $(selector);

console.log("Found:", el.length);
if (el.length > 0) {
  console.log("HTML snippet:");
  console.log($.html(el.parent()));
}
