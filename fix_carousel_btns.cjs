const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');

const fixCSS = `
@media (max-width: 768px) {
  .carousel-btn {
    width: 36px !important;
    height: 36px !important;
    font-size: 1.25rem !important;
  }
  .prev-btn { left: -0.5rem !important; }
  .next-btn { right: -0.5rem !important; }
}
`;

css += '\n' + fixCSS;
fs.writeFileSync('src/index.css', css);
