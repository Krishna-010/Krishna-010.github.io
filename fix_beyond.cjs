const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const startTag = '<div class="beyond-bento-grid">';
const endTag = '</section>';

const startIndex = html.indexOf(startTag);
const endIndex = html.indexOf(endTag, startIndex);

if (startIndex !== -1 && endIndex !== -1) {
  const newContent = `          <div class="beyond-bento-grid">
            <div class="beyond-card anime">
              <div class="beyond-card-header">
                <div class="beyond-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>
                </div>
                <h3 class="beyond-card-title">Anime & South Indian Cinema</h3>
              </div>
              <div style="display: flex; flex-direction: column; gap: 1rem; flex-grow: 1;">
                <p class="beyond-card-body">Anime and South Indian movies are a big part of how I unwind. I enjoy strong storytelling, memorable characters, action, comedy, music, and the distinct styles of storytelling and filmmaking that each medium brings.</p>
                <img src="/beyond_rajinikanth_cinema.jpg" alt="Rajinikanth in a South Indian movie scene." style="width: 100%; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); object-fit: cover; aspect-ratio: 16/9; opacity: 0.9;" />
              </div>
            </div>

            <div class="beyond-card cooking">
              <div class="beyond-card-header">
                <div class="beyond-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                </div>
                <h3 class="beyond-card-title">Cooking</h3>
              </div>
              <p class="beyond-card-body">Cooking is one of the things I enjoy most when I have time to slow down, experiment, and make something for myself or others. I enjoy trying new recipes, revisiting familiar dishes, and simply spending time in the kitchen.</p>
            </div>

            <div class="beyond-card music">
              <div class="beyond-card-header">
                <div class="beyond-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
                </div>
                <h3 class="beyond-card-title">Music</h3>
              </div>
              <p class="beyond-card-body">Music is a constant part of how I unwind, whether I am cooking, traveling, working on something at home, or simply taking a break.</p>
            </div>

            <div class="beyond-card travel">
              <div class="beyond-card-header">
                <div class="beyond-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon><line x1="9" y1="3" x2="9" y2="22"></line><line x1="15" y1="3" x2="15" y2="22"></line></svg>
                </div>
                <h3 class="beyond-card-title">Travel & Exploration</h3>
              </div>
              <p class="beyond-card-body">I enjoy traveling and discovering new places, whether that means exploring a new city, experiencing a different culture, trying local food, or simply seeing somewhere I have never been before.</p>
            </div>

            <div class="beyond-card animals">
              <div class="beyond-card-header">
                <div class="beyond-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .081.705 1.538 3.058 3.5 4 1.5.718 3.553.118 4-1 .47-1.176.47-4.176 0-7.828z"></path><path d="M14 5.172C14 3.782 15.577 2.679 17.5 3c2.823.47 4.113 6.006 4 7-.081.705-1.538 3.058-3.5 4-1.5.718-3.553.118-4-1-.47-1.176-.47-4.176 0-7.828z"></path><path d="M12 21c-4.418 0-8-3.582-8-8 0-4.418 3.582-8 8-8s8 3.582 8 8c0 4.418-3.582 8-8 8z"></path></svg>
                </div>
                <h3 class="beyond-card-title">Animals</h3>
              </div>
              <p class="beyond-card-body">I love spending time with animals, especially dogs. Playing with them is one of the easiest ways for me to switch off from work and simply enjoy the moment.</p>
            </div>

            <div class="beyond-card sports">
              <div class="beyond-card-header">
                <div class="beyond-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                </div>
                <h3 class="beyond-card-title">Sports</h3>
              </div>
              <p class="beyond-card-body">Sports are another way I like to stay active and competitive. I particularly enjoy badminton and cricket, both for the game itself and for the social side of playing with others.</p>
            </div>
          </div>

          <div class="snapshots-section">
            <div class="snapshots-header">Snapshots Beyond Engineering</div>
            <div class="editorial-gallery">
              <div class="gallery-row-1">
                <div class="gallery-item">
                  <img src="/beyond_yellowstone_emerald_spring.jpg" alt="Emerald Spring surrounded by geothermal terrain and forest in Yellowstone National Park." loading="lazy" />
                  <div class="gallery-caption">Emerald Spring, Yellowstone</div>
                </div>
                <div class="gallery-item">
                  <img src="/beyond_detroit_belle_isle.jpg" alt="Detroit skyline and Ambassador Bridge viewed across the Detroit River from Belle Isle." loading="lazy" />
                  <div class="gallery-caption">Belle Isle, Detroit</div>
                </div>
              </div>
              <div class="gallery-row-2">
                <div class="gallery-item tall">
                  <img src="/beyond_grandfather_mountain.jpg" alt="Mountain landscape viewed beside the Mile High Swinging Bridge at Grandfather Mountain, North Carolina." loading="lazy" />
                  <div class="gallery-caption">Grandfather Mountain, North Carolina</div>
                </div>
                <div class="gallery-item square">
                  <img src="/beyond_homemade_pizza.jpg" alt="Homemade vegetable pizza." loading="lazy" />
                  <div class="gallery-caption">Homemade Pizza</div>
                </div>
                <div class="gallery-item tall">
                  <img src="/beyond_blueberry_cake.jpg" alt="Slice of homemade blueberry cake." loading="lazy" />
                  <div class="gallery-caption">Homemade Blueberry Cake</div>
                </div>
              </div>
            </div>
          </div>
        `;
  
  html = html.substring(0, startIndex) + newContent + html.substring(endIndex - 1);
  fs.writeFileSync('index.html', html);
  console.log("Successfully replaced grid.");
} else {
  console.log("Tags not found.");
}
