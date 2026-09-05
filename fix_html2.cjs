const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const startTag = '<div class="beyond-right-column">';
const endTag = '</div>\n          </div>\n        \n        </section>';

const startIndex = html.indexOf(startTag);
const endIndex = html.indexOf(endTag);

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
            `;
  
  html = html.substring(0, startIndex) + newHtml + html.substring(endIndex);
  fs.writeFileSync('index.html', html);
  console.log("Updated HTML");
} else {
  console.log("Could not find boundaries.");
}
