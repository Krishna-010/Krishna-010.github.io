const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');

const oldGalleryCss = `.masonry-gallery {
  column-count: 1;
  column-gap: 1.25rem;
}
@media (min-width: 640px) {
  .masonry-gallery {
    column-count: 2;
  }
}`;

const newGalleryCss = `.masonry-gallery {
  column-count: 1;
  column-gap: 1rem;
}
@media (min-width: 640px) {
  .masonry-gallery {
    column-count: 2;
  }
}
@media (min-width: 1024px) {
  .masonry-gallery {
    column-count: 3;
    column-gap: 1rem;
  }
}`;

css = css.replace(oldGalleryCss, newGalleryCss);

const oldItemCss = `.gallery-item {
  break-inside: avoid;
  margin-bottom: 1.25rem;`;

const newItemCss = `.gallery-item {
  break-inside: avoid;
  margin-bottom: 1rem;`;

css = css.replace(oldItemCss, newItemCss);

const oldCaptionCss = `.gallery-caption {
  padding: 0.75rem 1rem;
  background: var(--bg-surface-elevated);
  color: var(--text-secondary);
  font-size: 0.85rem;`;

const newCaptionCss = `.gallery-caption {
  padding: 0.5rem;
  background: var(--bg-surface-elevated);
  color: var(--text-secondary);
  font-size: 0.75rem;`;

css = css.replace(oldCaptionCss, newCaptionCss);

// Remove the max-height and overflow from right column so it just acts as a pure sticky block, if it's small enough now
css = css.replace('max-height: calc(100vh - 4rem);\n    overflow-y: auto;\n    scrollbar-width: none;\n    -ms-overflow-style: none;', 'max-height: calc(100vh - 4rem);\n    /* Removed overflow so no internal scroll */');

fs.writeFileSync('src/index.css', css);
console.log("Successfully updated masonry to 3 columns.");
