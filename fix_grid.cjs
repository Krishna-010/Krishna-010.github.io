const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');

const regex = /\.masonry-gallery \{[\s\S]*?\.gallery-item img \{[\s\S]*?display: block;\n\}/;

const newCss = `.masonry-gallery {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}
@media (min-width: 640px) {
  .masonry-gallery {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .masonry-gallery {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1280px) {
  .masonry-gallery {
    grid-template-columns: repeat(3, 1fr);
  }
}

.gallery-item {
  position: relative;
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid var(--border-subtle);
  background: var(--bg-surface-elevated);
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  aspect-ratio: 4 / 3;
}
.gallery-item:hover {
  transform: scale(1.02);
  border-color: var(--emerald-dim);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 2;
}
.gallery-item img {
  width: 100%;
  height: 100%;
  flex-grow: 1;
  min-height: 0;
  object-fit: contain;
  display: block;
  padding: 0.25rem;
}`;

css = css.replace(regex, newCss);
fs.writeFileSync('src/index.css', css);
console.log("Replaced masonry with uniform grid");
