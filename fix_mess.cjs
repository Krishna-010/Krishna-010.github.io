const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

while (true) {
    let badIdx = html.indexOf('<!doctype html>', 10);
    if (badIdx === -1) break;
    
    // It seems the bad block starts exactly at <!doctype html>
    // Where does it end? Probably at the ACTUAL start of the correct content.
    // The injected content was html.substring(0, startIdx).
    // So the injected content length is exactly the length of everything before startIdx.
    // Let's just look at the injected string. It starts with <!doctype html> and ends with <div class="projects-grid" id="projects-grid-list">
    let badStrStart = html.indexOf('<div class="projects-grid" id="projects-grid-list"><!doctype html>');
    if (badStrStart !== -1) {
        let badStrEnd = html.indexOf('<div class="projects-grid" id="projects-grid-list">', badStrStart + 50);
        if (badStrEnd !== -1) {
            let toRemove = html.substring(badStrStart + '<div class="projects-grid" id="projects-grid-list">'.length, badStrEnd + '<div class="projects-grid" id="projects-grid-list">'.length);
            html = html.replace(toRemove, '');
            console.log("Removed a block of length", toRemove.length);
            continue;
        }
    }
    break;
}

fs.writeFileSync('index.html', html);
console.log("Cleanup done!");
