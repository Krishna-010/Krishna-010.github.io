const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');

const masonryCss = `
/* ==========================================================================
   BEYOND SPLIT LAYOUT & MASONRY GALLERY
   ========================================================================== */
.beyond-split-layout {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.beyond-left-column {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.beyond-right-column {
  display: block;
}

@media (min-width: 1024px) {
  .beyond-split-layout {
    flex-direction: row;
    align-items: flex-start;
  }
  .beyond-left-column {
    flex: 0 0 40%;
    max-width: 40%;
  }
  .beyond-right-column {
    flex: 1;
    position: sticky;
    top: 2rem;
    height: max-content;
    max-height: calc(100vh - 4rem);
    overflow-y: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  .beyond-right-column::-webkit-scrollbar {
    display: none;
  }
}

.beyond-card {
  padding: 1.25rem;
  height: auto;
  border-radius: var(--radius-md);
  border: 1px solid var(--border-subtle);
  background: var(--bg-surface-elevated);
  transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
}
.beyond-card:hover {
  transform: translateY(-2px);
  border-color: var(--emerald-dim);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.masonry-gallery {
  column-count: 1;
  column-gap: 1.25rem;
}
@media (min-width: 640px) {
  .masonry-gallery {
    column-count: 2;
  }
}

.gallery-item {
  break-inside: avoid;
  margin-bottom: 1.25rem;
  position: relative;
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid var(--border-subtle);
  background: var(--bg-surface);
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}
.gallery-item:hover {
  transform: scale(1.02);
  border-color: var(--emerald-dim);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 2;
}
.gallery-item img {
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
}
.gallery-caption {
  padding: 0.75rem 1rem;
  background: var(--bg-surface-elevated);
  color: var(--text-secondary);
  font-size: 0.85rem;
  border-top: 1px solid var(--border-subtle);
  text-align: center;
}
`;

// we will append to the end and override previous .beyond-split-layout if any
css += '\n' + masonryCss;
fs.writeFileSync('src/index.css', css);
console.log("Successfully added masonry css.");
