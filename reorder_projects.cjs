const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Extract the projects-grid block
const gridStartStr = '<div class="projects-grid" id="projects-grid">';
const gridStart = html.indexOf(gridStartStr) + gridStartStr.length;
const gridEndStr = '</div>\n              </div>\n              \n              <!-- Projects Detail View -->';
const gridEnd = html.indexOf(gridEndStr);
const gridHTML = html.substring(gridStart, gridEnd);

// 2. Extract the project-detail-content blocks
const detailViewStartStr = '<div id="projects-detail-view" style="display: none; padding-bottom: 2rem;">';
const detailViewStart = html.indexOf(detailViewStartStr) + detailViewStartStr.length;
const detailViewEndStr = '</div>\n            </div>\n          </section>';
const detailViewEnd = html.indexOf(detailViewEndStr);
const detailHTML = html.substring(detailViewStart, detailViewEnd);

// Parse Cards
const cardRegex = /<div class="project-item-card" onclick="openProjectDetail\((\d+)\)"[\s\S]*?<\/div>\s*<\/div>\s*/g;
let cards = [];
let cardMatch;
while ((cardMatch = cardRegex.exec(gridHTML)) !== null) {
  let cardContent = cardMatch[0];
  let titleMatch = cardContent.match(/<h3 class="project-title">(.*?)<\/h3>/);
  let title = titleMatch ? titleMatch[1].trim() : 'Unknown';
  let oldIndex = parseInt(cardMatch[1], 10);
  cards.push({ oldIndex, title, html: cardContent });
}

// Parse Details
const detailRegex = /<!-- Project \d+ Detail -->[\s\S]*?<div class="project-detail-content" data-project-index="(\d+)"[^>]*>[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*/g;
let details = [];
let detailMatch;
while ((detailMatch = detailRegex.exec(detailHTML)) !== null) {
  let content = detailMatch[0];
  
  // Wait, some details might have different structure if they don't end in three </div>s.
  // Better regex for details: from <!-- Project X Detail --> to just before the next <!-- Project Y Detail --> or end
  // Let's use string splitting instead.
}
