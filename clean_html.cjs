const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// The string "<!doctype html>" shouldn't appear except at the very start.
let first = html.indexOf('<!doctype html>');
if (first !== -1) {
  let parts = html.split('<!doctype html>');
  // Actually, wait, there are multiple "<!doctype html><html lang=\"en\">  <head>" in the file.
  // The easiest way is to just find the REAL start of projects-grid, which is the last one before the cards?
  // Let's just find all occurances of "<!doctype html>" after index 0 and remove the garbage!
}
