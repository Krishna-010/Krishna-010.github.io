const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Rename Project 2 title
html = html.replace(
    '<h3 class="project-title">Smart Garage Door Opener</h3>',
    '<h3 class="project-title">Smart Garage Door Automation System</h3>'
);

html = html.replace(
    '<h2 class="panel-title" style="margin-bottom: 0.5rem;">Smart Garage Door Opener</h2>',
    '<h2 class="panel-title" style="margin-bottom: 0.5rem;">Smart Garage Door Automation System</h2>'
);

// 2. Remove Project 4 Master Card
const card4Start = html.indexOf('<div class="project-item-card" onclick="openProjectDetail(4)"');
if (card4Start !== -1) {
    const nextCardStart = html.indexOf('<div class="project-item-card" onclick="openProjectDetail(5)"');
    if (nextCardStart !== -1) {
        html = html.substring(0, card4Start) + html.substring(nextCardStart);
    }
}

// 3. Remove Project 4 Detail View
const detail4StartStr = '<!-- Project 4 Detail -->';
const detail4Start = html.indexOf(detail4StartStr);
if (detail4Start !== -1) {
    const nextDetailStart = html.indexOf('<!-- Project 5 Detail -->');
    if (nextDetailStart !== -1) {
        html = html.substring(0, detail4Start) + html.substring(nextDetailStart);
    }
}

// 4. Re-index 5 through 10 to 4 through 9
for (let i = 5; i <= 10; i++) {
    html = html.replaceAll(`onclick="openProjectDetail(${i})"`, `onclick="openProjectDetail(${i - 1})"`);
    html = html.replaceAll(`data-project-index="${i}"`, `data-project-index="${i - 1}"`);
    html = html.replaceAll(`<!-- Project ${i} Detail -->`, `<!-- Project ${i - 1} Detail -->`);
}

fs.writeFileSync('index.html', html);

// 5. Update main.tsx
let js = fs.readFileSync('src/main.tsx', 'utf8');
js = js.replace('const totalProjects = 11;', 'const totalProjects = 10;');
fs.writeFileSync('src/main.tsx', js);

console.log('Fixed garage door project!');
