const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Fix the extra </div></div> issue in BOTH replacements.
// The string was: 
// </div></div>
//                   
//                   <div class="image-carousel-indicators"
html = html.replace(/<\/div><\/div>\n\s+<div class="image-carousel-indicators"/g, '</div>\n                  \n                  <div class="image-carousel-indicators"');

// Wait, I should also make sure it only replaces exactly where it is an issue, but /g should be fine for the exact match if there's any.
// Let's just do a string replacement.
while(html.includes('</div></div>\n                                    <div class="image-carousel-indicators"')) {
    html = html.replace('</div></div>\n                                    <div class="image-carousel-indicators"', '</div>\n                                    <div class="image-carousel-indicators"');
}

while(html.includes('</div></div>\n                  \n                  <div class="image-carousel-indicators"')) {
    html = html.replace('</div></div>\n                  \n                  <div class="image-carousel-indicators"', '</div>\n                  <div class="image-carousel-indicators"');
}

// Just in case, let's use a regex to replace `</div></div>` followed by spaces/newlines and `<div class="image-carousel-indicators"`
html = html.replace(/<\/div><\/div>(\s*<div class="image-carousel-indicators")/g, '</div>$1');

// Now let's fix Project 1 Slide 3 layout
// It currently has:
// <div style="display: flex; flex-direction: column; gap: 0.75rem; width: 100%; flex: 1; min-height: 0; overflow-y: auto; padding-right: 0.5rem;">
// We want to change it to:
// <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem; width: 100%; flex: 1; min-height: 0;">
html = html.replace(
  '<div style="display: flex; flex-direction: column; gap: 0.75rem; width: 100%; flex: 1; min-height: 0; overflow-y: auto; padding-right: 0.5rem;">',
  '<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem; width: 100%; flex: 1; min-height: 0;">'
);

fs.writeFileSync('index.html', html);
console.log('Fixed');
