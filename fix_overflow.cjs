const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// The issue is `overflow: hidden;` on `<div class="project-image-carousel" data-project-id="1" ...>`
// We can just remove `overflow: hidden;` and instead add `border-radius: 12px;` on the slide background if needed,
// but actually, we can just replace `overflow: hidden;` with `overflow: visible;` on all carousels,
// OR just add a specific fix. Let's do it for data-project-id="1"

let searchStr = '<div class="project-image-carousel" data-project-id="1" style="position: relative; width: 100%; margin-bottom: 2rem; border-radius: 12px; overflow: hidden; background: var(--bg-surface); border: 1px solid var(--border-subtle);">';
let repStr = '<div class="project-image-carousel" data-project-id="1" style="position: relative; width: 100%; margin-bottom: 2rem; border-radius: 12px; overflow: visible; background: var(--bg-surface); border: 1px solid var(--border-subtle);">';

html = html.replace(searchStr, repStr);

// Wait, the first slide of Project 0 also has `overflow: hidden;`.
// Let's replace all `overflow: hidden;` in project-image-carousel divs to `overflow: visible;`
// actually, let's keep it simple and just do it for both or all.
html = html.replace(/<div class="project-image-carousel" data-project-id="([^"]+)" style="([^"]*)overflow: hidden;([^"]*)"/g, 
  '<div class="project-image-carousel" data-project-id="$1" style="$2overflow: visible;$3"');

fs.writeFileSync('index.html', html);
console.log("Fixed overflow on carousels");
