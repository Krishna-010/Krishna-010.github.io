const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');

css += `
@media (max-width: 1024px) {
  /* On tablets and mobile, hover isn't reliable. Make captions visible. */
  .gallery-caption-new {
    opacity: 1 !important;
    background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0) 100%) !important;
    padding-top: 2rem !important;
  }
}
`;
fs.writeFileSync('src/index.css', css);
console.log("Added mobile caption visibility");
