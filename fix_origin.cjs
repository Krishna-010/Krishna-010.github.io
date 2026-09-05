const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// The CSS was:
// .zoom-on-hover:hover {
//   transform: scale(2.2);
// ...
// Let's modify the CSS for the grid items to have specific transform origins.

html = html.replace(
  '.zoom-on-hover:hover {',
  `.result-card:nth-child(1) .zoom-on-hover { transform-origin: left center; }
                        .result-card:nth-child(2) .zoom-on-hover { transform-origin: center center; }
                        .result-card:nth-child(3) .zoom-on-hover { transform-origin: right center; }
                        .zoom-on-hover:hover {`
);

// We should also make sure the user can see it large enough. Let's make it 2.5 scale.
html = html.replace('transform: scale(2.2);', 'transform: scale(2.5);');

fs.writeFileSync('index.html', html);
console.log('Fixed transform origin');
