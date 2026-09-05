const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

for (let i = 11; i >= 4; i--) {
    let nextI = i + 1;
    html = html.replaceAll(`openProjectDetail(${i})`, `openProjectDetail(${nextI})`);
    html = html.replaceAll(`data-project-index="${i}"`, `data-project-index="${nextI}"`);
    html = html.replaceAll(`nextProjectImage(${i})`, `nextProjectImage(${nextI})`);
    html = html.replaceAll(`prevProjectImage(${i})`, `prevProjectImage(${nextI})`);
    html = html.replaceAll(`data-project-id="${i}"`, `data-project-id="${nextI}"`);
    html = html.replaceAll(`<!-- Project ${i} Detail -->`, `<!-- Project ${nextI} Detail -->`);
}

fs.writeFileSync('index.html', html);
console.log("Re-indexing complete!");
