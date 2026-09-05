const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');

const newGridCss = `
@media (min-width: 768px) {
  .beyond-bento-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .beyond-bento-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
`;

css = css.replace('.snapshots-header {', newGridCss + '\n.snapshots-header {');
fs.writeFileSync('src/index.css', css);
console.log("Successfully re-added base grid styling.");
