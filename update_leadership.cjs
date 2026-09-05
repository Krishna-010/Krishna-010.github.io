const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

let role1Old = `<h3 class="project-title">Chairperson, SLA</h3>
              <p class="project-desc">Founded and led the Spanish Literary Association at VIT, Vellore for the year 2023.</p>`;

let role1New = `<h3 class="project-title">Chairperson, Spanish Literary Association (SLA)</h3>
              <p class="project-desc">Served as Chairperson of the Spanish Literary Association at VIT Vellore, leading the student organization, coordinating members and activities, and overseeing the planning and execution of its initiatives.</p>`;

html = html.replace(role1Old, role1New);

// role 2 text actually perfectly matches what is already there?
let role2OldTitle = `<h3 class="project-title">Intramural Sports Game Official</h3>`;
let role2OldDesc = `<p class="project-desc">Demonstrated leadership by managing competitive game environments, enforcing rules impartially, and making clear, confident decisions under pressure to maintain fairness, safety, and control.</p>`;

// It seems they are the same in Role 2, but just to be sure I'll check if they are exact.
// I'll just write it back to be sure.

fs.writeFileSync('index.html', html);
console.log("Updated Leadership section");
