const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Ensure overflow visible is everywhere on the hierarchy
html = html.replace(/<div class="image-slides-wrapper" style="position: relative; width: 100%; height: 500px;">/g, '<div class="image-slides-wrapper" style="position: relative; width: 100%; height: 500px; overflow: visible !important;">');
html = html.replace(/<div class="project-image-carousel"([^>]*style="[^"]*)overflow: visible;/g, '<div class="project-image-carousel"$1overflow: visible !important;');

fs.writeFileSync('index.html', html);
console.log('Fixed visible');
