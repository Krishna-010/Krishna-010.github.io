const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const order = [0, 1, 5, 6, 4, 10, 3, 2, 9, 8, 7];
const oldToNew = {};
order.forEach((oldIdx, newIdx) => oldToNew[oldIdx] = newIdx);

const startMarker = '<div class="projects-grid" id="projects-grid-list">';
const startIdx = html.indexOf(startMarker);
const endMarker = '<div id="projects-detail-view"';
const endIdx = html.indexOf(endMarker);

let beforeGrid = html.substring(0, startIdx + startMarker.length);
let gridHTML = html.substring(startIdx + startMarker.length, endIdx);
let afterGrid = html.substring(endIdx);

let splits = gridHTML.split(/<div class="project-item-card"/);
let whitespaceBefore = splits[0];
let cards = [];
let trailing = "";

for (let i = 1; i < splits.length; i++) {
  let piece = '<div class="project-item-card"' + splits[i];
  let m = piece.match(/onclick="openProjectDetail\((\d+)\)"/);
  if (m) {
    let oldIdx = parseInt(m[1], 10);
    cards.push({ oldIdx, cardStr: piece });
  } else {
    trailing += piece;
  }
}

let lastCard = cards[cards.length - 1];
let lastCardEnd = lastCard.cardStr.indexOf('</div>\n              </div>');
if (lastCardEnd !== -1) {
  trailing = lastCard.cardStr.substring(lastCardEnd) + trailing;
  lastCard.cardStr = lastCard.cardStr.substring(0, lastCardEnd);
}

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

let newGridHTML = whitespaceBefore + cards.map(c => c.cardStr).join("") + trailing;
let finalHTML = beforeGrid + newGridHTML + afterGrid;

fs.writeFileSync('index.html', finalHTML);
console.log("Master Grid sorted safely! Cards processed:", cards.length);
