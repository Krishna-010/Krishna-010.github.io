const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// The new order of old indices
const order = [0, 1, 5, 6, 4, 10, 3, 2, 9, 8, 7];
const oldToNew = {};
order.forEach((oldIdx, newIdx) => oldToNew[oldIdx] = newIdx);

// --- 1. Master Grid ---
const gridStartMarker = '<div class="projects-grid" id="projects-grid">';
const gridStartIdx = html.indexOf(gridStartMarker) + gridStartMarker.length;
const gridEndIdx = html.indexOf('</div>\n              </div>\n              \n              <!-- Projects Detail View -->');
let gridHTML = html.substring(gridStartIdx, gridEndIdx);

let cardSplits = gridHTML.split('<div class="project-item-card"');
let cards = [];
for (let i = 1; i < cardSplits.length; i++) {
  let card = '<div class="project-item-card"' + cardSplits[i];
  let m = card.match(/onclick="openProjectDetail\((\d+)\)"/);
  if (m) {
    let oldIdx = parseInt(m[1], 10);
    if (oldIdx === 0 || oldIdx === 1) {
      card = card.replace(
        /<h3 class="project-title">(.*?)<\/h3>/,
        '<h3 class="project-title">$1 <span style="color: #fbbf24; margin-left: 0.5rem;" title="Capstone Project"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" style="display:inline-block; vertical-align: text-bottom;"><path d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.2,28.4a16,16,0,0,0-28.4,0L90,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,211.5a16,16,0,0,0,23.84,17.34L128,200.73l51.07,28.11a16,16,0,0,0,23.84-17.34l-13.52-57.7,45.11-39.42A16,16,0,0,0,239.2,97.29Z"></path></svg></span></h3>'
      );
    }
    cards.push({ oldIdx, card });
  }
}

cards.forEach(c => {
  let newIdx = oldToNew[c.oldIdx];
  c.card = c.card.replace(/onclick="openProjectDetail\(\d+\)"/, 'onclick="openProjectDetail(' + newIdx + ')"');
});

cards.sort((a, b) => oldToNew[a.oldIdx] - oldToNew[b.oldIdx]);
let newGridHTML = "\n" + cards.map(c => c.card).join("") + "\n              ";
html = html.substring(0, gridStartIdx) + newGridHTML + html.substring(gridEndIdx);


// --- 2. Detail View ---
let blocks = html.split(/(<!-- Project \d+ Detail -->)/);

let preDetail = blocks[0];
let detailObjs = [];
for (let i = 1; i < blocks.length; i += 2) {
  let comment = blocks[i];
  let content = blocks[i+1];
  let m = comment.match(/<!-- Project (\d+) Detail -->/);
  if (m) {
    let oldIdx = parseInt(m[1], 10);
    detailObjs.push({ oldIdx, comment, content });
  }
}

let postDetail = "";
if (detailObjs.length > 0) {
    let lastContent = detailObjs[detailObjs.length - 1].content;
    let endIdx = lastContent.indexOf('            </div>\n          </section>');
    if (endIdx !== -1) {
        postDetail = lastContent.substring(endIdx);
        detailObjs[detailObjs.length - 1].content = lastContent.substring(0, endIdx);
    }
}

detailObjs.forEach(d => {
  let newIdx = oldToNew[d.oldIdx];
  d.comment = '<!-- Project ' + newIdx + ' Detail -->';
  d.content = d.content.replace(/data-project-index="\d+"/, 'data-project-index="' + newIdx + '"');
  d.content = d.content.replace(/data-project-id="\d+"/g, 'data-project-id="' + newIdx + '"');
  d.content = d.content.replace(/prevProjectImage\(\d+\)/g, 'prevProjectImage(' + newIdx + ')');
  d.content = d.content.replace(/nextProjectImage\(\d+\)/g, 'nextProjectImage(' + newIdx + ')');
  
  if (d.oldIdx === 0 || d.oldIdx === 1) {
    d.content = d.content.replace(
        /<h2 class="panel-title"(.*?)>(.*?)<\/h2>/,
        '<h2 class="panel-title"$1>$2 <span style="color: #fbbf24; margin-left: 0.5rem;" title="Capstone Project"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" style="display:inline-block; vertical-align: text-bottom;"><path d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.2,28.4a16,16,0,0,0-28.4,0L90,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,211.5a16,16,0,0,0,23.84,17.34L128,200.73l51.07,28.11a16,16,0,0,0,23.84-17.34l-13.52-57.7,45.11-39.42A16,16,0,0,0,239.2,97.29Z"></path></svg></span></h2>'
    );
  }
});

detailObjs.sort((a, b) => oldToNew[a.oldIdx] - oldToNew[b.oldIdx]);

let newHTML = preDetail + detailObjs.map(d => d.comment + d.content).join("") + postDetail;

fs.writeFileSync('index.html', newHTML);
console.log("Projects sorted successfully.");
