const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const titleRegex = /<div class="project-item-card" onclick="openProjectDetail\((\d+)\)"[\s\S]*?<h3 class="project-title">(.*?)<\/h3>/g;
let match;
while ((match = titleRegex.exec(html)) !== null) {
  console.log(`${match[1]}: ${match[2].trim()}`);
}
