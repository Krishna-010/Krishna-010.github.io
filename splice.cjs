const fs = require('fs');

let index = fs.readFileSync('index.html', 'utf-8');
const replacement = fs.readFileSync('projects_section.html', 'utf-8');

// The section starts at: <!-- MASTER VIEW: Projects Grid -->
// And ends right before: </section> (the closing tag of panel-projects)

const startIndex = index.indexOf('          <!-- MASTER VIEW: Projects Grid -->');
const endIndex = index.indexOf('        </section>', startIndex);

if (startIndex !== -1 && endIndex !== -1) {
  const newIndex = index.substring(0, startIndex) + replacement + '\n' + index.substring(endIndex);
  fs.writeFileSync('index.html', newIndex);
  console.log("Spliced successfully.");
} else {
  console.log("Could not find boundaries.");
}
