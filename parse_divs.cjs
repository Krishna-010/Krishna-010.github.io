const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

let balance = 0;
const lines = html.split('\n');
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const opens = (line.match(/<div/g) || []).length;
  const closes = (line.match(/<\/div>/g) || []).length;
  balance += opens;
  balance -= closes;
  if (balance < 0) {
    console.log(`Imbalance detected at line ${i + 1}: balance = ${balance}`);
    // Just find the first few
    if (balance < -5) break;
  }
}
console.log('Final balance:', balance);
