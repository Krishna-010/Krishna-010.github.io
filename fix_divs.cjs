const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
let badPart = `                  <span class="tech-badge">Hardware-in-the-Loop</span>
                  <span class="tech-badge">Mechatronics</span>
                <div class="project-item-card" onclick="openProjectDetail(6)" style="cursor: pointer;">`;
let goodPart = `                  <span class="tech-badge">Hardware-in-the-Loop</span>
                  <span class="tech-badge">Mechatronics</span>
                </div>
              </div>
              
              <div class="project-item-card" onclick="openProjectDetail(6)" style="cursor: pointer;">`;
html = html.replace(badPart, goodPart);
fs.writeFileSync('index.html', html);
console.log("Fixed missing divs");
