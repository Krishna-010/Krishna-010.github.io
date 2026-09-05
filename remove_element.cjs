const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const target = '<div class="compact-contact-item no-hover" style="grid-column: 1 / -1;">\n                  <span>📍</span> Atlanta, GA (Open to Relocation)\n                </div>';

if (html.includes(target)) {
  html = html.replace(target, '');
  fs.writeFileSync('index.html', html);
  console.log("Successfully removed the location element.");
} else {
  console.log("Could not find exact string. Attempting alternative replacement...");
  
  // Alternative replacement if spacing is different
  const lines = html.split('\n');
  let newLines = [];
  let skip = false;
  
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('class="compact-contact-item no-hover"') && lines[i].includes('Atlanta, GA')) {
      skip = true;
    }
    
    if (skip) {
      if (lines[i].includes('</div>')) {
        skip = false;
      }
    } else {
      newLines.push(lines[i]);
    }
  }
  fs.writeFileSync('index.html', newLines.join('\n'));
  console.log("Removed via line-by-line replacement.");
}

