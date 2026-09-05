const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');

css = css.replace(/left: -18px; \/\* adjust for padding-left 1rem and 2px border \*\//, 'left: -1.45rem;');
fs.writeFileSync('src/index.css', css);
