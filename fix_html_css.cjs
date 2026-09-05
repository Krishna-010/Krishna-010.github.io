const fs = require('fs');

// 1. Update HTML
let html = fs.readFileSync('index.html', 'utf8');

const startTag = '<div class="beyond-right-column">';
const endTag = '</div>\n          </div>\n\n          <!-- CTA Section -->';

const startIndex = html.indexOf(startTag);
const endIndex = html.indexOf('<!-- CTA Section -->');

if (startIndex !== -1 && endIndex !== -1) {
  const newHtml = `<div class="beyond-right-column">
              <h3 class="snapshots-header" style="margin-top: 0;">Snapshots Beyond Engineering</h3>
              <div class="custom-gallery">
                <div class="gallery-item-new">
                  <img src="/beyond_yellowstone_emerald_spring.jpg" alt="Emerald Spring surrounded by geothermal terrain and forest in Yellowstone National Park." loading="lazy" />
                  <div class="gallery-caption-new">Emerald Spring, Yellowstone</div>
                </div>
                <div class="gallery-item-new">
                  <img src="/beyond_detroit_belle_isle.jpg" alt="Detroit skyline and international bridge viewed across the Detroit River from Belle Isle." loading="lazy" />
                  <div class="gallery-caption-new">Belle Isle, Detroit</div>
                </div>
                
                <!-- Tall Items (Spanning 2 rows) -->
                <div class="gallery-item-new tall">
                  <img src="/beyond_grandfather_mountain.jpg" alt="Mountain landscape beside the Mile High Swinging Bridge at Grandfather Mountain, North Carolina." loading="lazy" />
                  <div class="gallery-caption-new">Grandfather Mountain, NC</div>
                </div>
                <div class="gallery-item-new tall">
                  <img src="/beyond_blueberry_cake.jpg" alt="Slice of homemade blueberry cake." loading="lazy" />
                  <div class="gallery-caption-new">Homemade Blueberry Cake</div>
                </div>
                
                <!-- Remaining Square Items -->
                <div class="gallery-item-new">
                  <img src="/beyond_homemade_pizza.png" alt="Homemade vegetable pizza." loading="lazy" />
                  <div class="gallery-caption-new">Homemade Pizza</div>
                </div>
                <div class="gallery-item-new">
                  <img src="/beyond_rajinikanth_cinema.png" alt="Rajinikanth in the 1999 South Indian film Padayappa." loading="lazy" />
                  <div class="gallery-caption-new">Rajinikanth in <em>Padayappa</em> (1999)</div>
                </div>
              </div>
            </div>
          </div>

          `;
  
  html = html.substring(0, startIndex) + newHtml + html.substring(endIndex);
  fs.writeFileSync('index.html', html);
  console.log("Updated HTML");
}

// 2. Update CSS
let css = fs.readFileSync('src/index.css', 'utf8');

// Remove the .masonry-gallery related css
css = css.replace(/\.masonry-gallery \{[\s\S]*?\.gallery-caption \{[\s\S]*?text-align: center;\n\}/, '');

const newCss = `
.custom-gallery {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}
@media (min-width: 1024px) {
  .custom-gallery {
    grid-template-columns: repeat(4, 1fr);
  }
}
.gallery-item-new {
  position: relative;
  border-radius: var(--radius-md);
  overflow: hidden;
  display: flex;
  background: var(--bg-surface);
  aspect-ratio: 1 / 1;
}
@media (max-width: 1023px) {
  .gallery-item-new.tall {
    aspect-ratio: 1 / 1;
  }
}
@media (min-width: 1024px) {
  .gallery-item-new.tall {
    grid-row: span 2;
    aspect-ratio: auto;
    height: 100%;
  }
}

.gallery-item-new img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}
.gallery-item-new:hover img {
  transform: scale(1.03);
}
.gallery-caption-new {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem 0.75rem 0.75rem 0.75rem;
  background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%);
  color: #fff;
  font-size: 0.85rem;
  font-weight: 500;
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}
.gallery-item-new:hover .gallery-caption-new {
  opacity: 1;
}
`;

css += '\n' + newCss;
fs.writeFileSync('src/index.css', css);
console.log("Updated CSS");

