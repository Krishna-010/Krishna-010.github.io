const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const lines = html.split('\n');
const stack = [];
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const opens = (line.match(/<div/g) || []);
  const closes = (line.match(/<\/div>/g) || []);
  for(let j=0; j<opens.length; j++) stack.push(i+1);
  for(let j=0; j<closes.length; j++) {
    if (stack.length > 0) stack.pop();
    else console.log(`Unmatched close at line ${i+1}`);
  }
}
console.log('Unclosed opens:', stack.length);
