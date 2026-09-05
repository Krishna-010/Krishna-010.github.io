const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const titleRegex = /<h3 class="project-title">(.*?)<\/h3>/g;
let match;
while ((match = titleRegex.exec(html)) !== null) {
  if (match[1].includes('Capstone')) {
    console.log(`Title found: ${match[1]}`);
  }
}
