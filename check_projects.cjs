const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const regex = /<div class="project-item-card" onclick="openProjectDetail\((\d+)\)"[\s\S]*?<h3 class="project-title">(.*?)<\/h3>/g;
let match;
while ((match = regex.exec(html)) !== null) {
  console.log(`Card ${match[1]}: ${match[2].replace(/<[^>]+>/g, '').trim()}`);
}

const detailRegex = /<!-- Project (\d+) Detail -->/g;
while ((match = detailRegex.exec(html)) !== null) {
  console.log(`Detail ${match[1]}`);
}
