const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');

// Remove the span-2 and span-1 specific grid columns for the bento grid
css = css.replace(/\/\* Bento Grid Spans for Desktop \*\/[\s\S]*?(?=\.snapshots-header)/g, '');

fs.writeFileSync('src/index.css', css);
console.log("Successfully removed span styles.");
