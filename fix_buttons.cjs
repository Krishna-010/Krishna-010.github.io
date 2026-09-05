const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');

css = css.replace(/left: -0.25rem !important;/g, 'left: 0.25rem !important;');
css = css.replace(/right: -0.25rem !important;/g, 'right: 0.25rem !important;');
css = css.replace(/background: rgba\(var\(--bg-panel-rgb\), 0.8\) !important;/g, 'background: var(--bg-surface-glass) !important;');

fs.writeFileSync('src/index.css', css);
