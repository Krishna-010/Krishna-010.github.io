const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replaceAll(
    'style="cursor: zoom-in;" style="',
    'style="cursor: zoom-in; '
);

fs.writeFileSync('index.html', html);
console.log('Fixed style');
