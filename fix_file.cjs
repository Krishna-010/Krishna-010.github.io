const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// The trailing HTML starts at line 1158. We need to find exactly:
// "            </div>\n          </div>\n        </section>\n\n        <!-- PANEL 4:"
const marker = '            </div>\n          </div>\n        </section>\n\n        <!-- PANEL 4:';
let startIdx = html.indexOf(marker);
if (startIdx === -1) {
  console.log("Marker not found!");
  process.exit(1);
}

// Find where the trailing HTML ends. It ends exactly before "<!-- Project 6 Detail -->"
const endMarker = '<!-- Project 6 Detail -->';
let endIdx = html.indexOf(endMarker);

if (endIdx === -1) {
  console.log("End marker not found!");
  process.exit(1);
}

const trailingHTML = html.substring(startIdx, endIdx);
const beforeTrailing = html.substring(0, startIdx);
const afterTrailing = html.substring(endIdx);

const newHTML = beforeTrailing + afterTrailing + trailingHTML;

fs.writeFileSync('index.html', newHTML);
console.log("Fixed trailing HTML!");
