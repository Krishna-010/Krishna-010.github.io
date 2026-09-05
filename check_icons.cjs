const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const head = html.split('</head>')[0];
console.log(head);
