const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');

// The block starts with /* ==========================================================================
//    EDITORIAL GALLERY (SNAPSHOTS)
//    ========================================================================== */
// And we want to remove everything up to right before the newly added /* ==========================================================================
//    BEYOND SPLIT LAYOUT & MASONRY GALLERY

const startText = '/* ==========================================================================\n   EDITORIAL GALLERY (SNAPSHOTS)';
const endText = '/* ==========================================================================\n   BEYOND SPLIT LAYOUT & MASONRY GALLERY';

const startIndex = css.indexOf(startText);
const endIndex = css.indexOf(endText);

if (startIndex !== -1 && endIndex !== -1) {
  css = css.substring(0, startIndex) + css.substring(endIndex);
  fs.writeFileSync('src/index.css', css);
  console.log("Successfully removed old editorial gallery CSS.");
} else {
  console.log("Could not find the CSS blocks to remove.");
}
