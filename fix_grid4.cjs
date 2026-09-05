const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const order = [0, 1, 5, 6, 4, 10, 3, 2, 9, 8, 7];
const oldToNew = {};
order.forEach((oldIdx, newIdx) => oldToNew[oldIdx] = newIdx);

const startMarker = '<div class="projects-grid"';
let startIdx = html.indexOf(startMarker);
startIdx = html.indexOf('>', startIdx) + 1;

const endMarker = '<!-- Projects Detail View -->';
let endIdx = html.indexOf(endMarker);
endIdx = html.lastIndexOf('</div>', endIdx);
endIdx = html.lastIndexOf('</div>', endIdx - 1); // Up one more to the grid's closing div

let gridHTML = html.substring(startIdx, endIdx);
console.log("Grid HTML length:", gridHTML.length);

let cards = [];
// Split safely
let splits = gridHTML.split('<div class="project-item-card"');
// First split is empty whitespace
let whitespaceBefore = splits[0];
for (let i = 1; i < splits.length; i++) {
  let cardStr = '<div class="project-item-card"' + splits[i];
  let m = cardStr.match(/onclick="openProjectDetail\((\d+)\)"/);
  if (m) {
    let oldIdx = parseInt(m[1], 10);
    cards.push({ oldIdx, cardStr });
  }
}

console.log("Parsed cards:", cards.length);

cards.forEach(c => {
  let newIdx = oldToNew[c.oldIdx];
  c.cardStr = c.cardStr.replace(/onclick="openProjectDetail\(\d+\)"/, 'onclick="openProjectDetail(' + newIdx + ')"');
  
  if (c.oldIdx === 0 || c.oldIdx === 1) {
    if (!c.cardStr.includes('<svg xmlns="http://www.w3.org/2000/svg"')) {
        c.cardStr = c.cardStr.replace(
          /<h3 class="project-title">(.*?)<\/h3>/,
          '<h3 class="project-title">$1 <span style="color: #fbbf24; margin-left: 0.5rem;" title="Capstone Project"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" style="display:inline-block; vertical-align: text-bottom;"><path d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.2,28.4a16,16,0,0,0-28.4,0L90,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,211.5a16,16,0,0,0,23.84,17.34L128,200.73l51.07,28.11a16,16,0,0,0,23.84-17.34l-13.52-57.7,45.11-39.42A16,16,0,0,0,239.2,97.29Z"></path></svg></span></h3>'
        );
    }
  }
});

cards.sort((a, b) => oldToNew[a.oldIdx] - oldToNew[b.oldIdx]);

let newGridHTML = whitespaceBefore + cards.map(c => c.cardStr).join("");

html = html.substring(0, startIdx) + newGridHTML + html.substring(endIdx);
fs.writeFileSync('index.html', html);
console.log("Master Grid sorted!");
