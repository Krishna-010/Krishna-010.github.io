const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

if (html.startsWith('<!doctype html><html lang="en">  <head>                 <!doctype html>')) {
  html = html.substring('<!doctype html><html lang="en">  <head>                 '.length);
  fs.writeFileSync('index.html', html);
  console.log('Fixed duplicate doctype');
}
