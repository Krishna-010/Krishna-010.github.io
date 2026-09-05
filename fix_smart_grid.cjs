const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const card9Start = html.indexOf('<div class="project-item-card" onclick="openProjectDetail(9)"');
const card10Start = html.indexOf('<div class="project-item-card" onclick="openProjectDetail(10)"');
let oldCard = html.substring(card9Start, card10Start);

const newCard = `<div class="project-item-card" onclick="openProjectDetail(9)" style="cursor: pointer;">
                <div class="project-meta-row">
                  <span class="project-tag">Energy Systems & Machine Learning</span>
                </div>
                <h3 class="project-title">Smart Grid Stability Prediction Using Machine Learning</h3>
                <p class="project-summary">
                  Developed a five-layer neural-network model for smart-grid stability prediction, improving performance through data augmentation and optimizer selection and achieving 99.90% final test accuracy.
                </p>
                <div class="project-tech-stack">
                  <span class="tech-badge">Python</span>
                  <span class="tech-badge">Neural Networks</span>
                  <span class="tech-badge">Smart Grid</span>
                  <span class="tech-badge">Data Preprocessing</span>
                  <span class="tech-badge">Nadam</span>
                  <span class="tech-badge">Grid Stability</span>
                </div>
              </div>

              `;

html = html.replace(oldCard, newCard);

const detail9StartStr = '<!-- Project 9 Detail -->';
const detail10StartStr = '<!-- Project 10 Detail -->';
const detail9Start = html.indexOf(detail9StartStr);
const detail10Start = html.indexOf(detail10StartStr);

let oldDetail = html.substring(detail9Start, detail10Start);

const newDetail = `<!-- Project 9 Detail -->
              <div class="project-detail-content" data-project-index="9" style="display:none;">
                <h2 class="panel-title" style="margin-bottom: 0.5rem;">Smart Grid Stability Prediction Using Machine Learning</h2>
                <div class="project-meta-row" style="margin-bottom: 1.5rem;">
                  <span class="project-tag">Energy Systems & Machine Learning</span>
                </div>
                
                <div class="project-image-carousel" data-project-id="9" style="position: relative; width: 100%; margin-bottom: 2rem; border-radius: 12px; overflow: visible !important; background: var(--bg-surface); border: 1px solid var(--border-subtle);">
                  <button onclick="prevProjectImage(9)" style="position: absolute; left: 0.5rem; top: 50%; transform: translateY(-50%); background: var(--bg-panel); border: 1px solid var(--border-subtle); color: var(--text-primary); border-radius: 50%; width: 36px; height: 36px; z-index: 2; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">‹</button>
                  <button onclick="nextProjectImage(9)" style="position: absolute; right: 0.5rem; top: 50%; transform: translateY(-50%); background: var(--bg-panel); border: 1px solid var(--border-subtle); color: var(--text-primary); border-radius: 50%; width: 36px; height: 36px; z-index: 2; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">›</button>
                  
                  <div class="image-slides-wrapper" style="position: relative; width: 100%; height: 500px; overflow: visible !important;">
                    
                    <!-- Slide 1 -->
                    <div class="project-image-slide" data-slide-index="0" style="display: flex; flex-direction: column; position: absolute; inset: 0; padding: 1.5rem 3.5rem 2rem 3.5rem; background: var(--bg-surface); border-radius: 12px; align-items: center; justify-content: flex-start; z-index: 1;">
                      <h4 style="margin: 0 0 1.5rem 0; font-size: 1.25rem; font-weight: 600; color: var(--text-primary); text-align: center;">Smart Grid ML Architecture & Data Pipeline</h4>
                      <div style="flex: 1; min-height: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%;">
                        <img src="SG1.png" alt="Smart Grid ML Architecture" onclick="openLightbox(this.src)" style="cursor: zoom-in; max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 8px;" />
                      </div>
                    </div>

                    <!-- Slide 2 -->
                    <div class="project-image-slide" data-slide-index="1" style="display: none; flex-direction: column; position: absolute; inset: 0; padding: 1.5rem 3.5rem 2rem 3.5rem; background: var(--bg-surface); border-radius: 12px; align-items: center; justify-content: flex-start; z-index: 1;">
                      <h4 style="margin: 0 0 1.5rem 0; font-size: 1.25rem; font-weight: 600; color: var(--text-primary); text-align: center;">Experimental Progression & Final Model Results</h4>
                      <div style="flex: 1; min-height: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; background: rgba(255, 255, 255, 0.03); border-radius: 8px; padding: 1rem; border: 1px solid var(--border-subtle);">
                        <img src="SG2.png" alt="Experimental Progression & Final Results" onclick="openLightbox(this.src)" style="cursor: zoom-in; max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 4px;" />
                      </div>
                    </div>

                  </div>
                  
                  <div class="image-carousel-indicators" style="position: absolute; bottom: 1rem; left: 0; right: 0; display: flex; justify-content: center; gap: 0.5rem; z-index: 2;">
                    <div class="img-dot" data-dot-index="0" style="width: 8px; height: 8px; border-radius: 50%; background: var(--emerald-primary); opacity: 1; transition: all 0.2s ease;"></div>
                    <div class="img-dot" data-dot-index="1" style="width: 8px; height: 8px; border-radius: 50%; background: var(--text-muted); opacity: 0.5; transition: all 0.2s ease;"></div>
                  </div>
                </div>

                <p style="font-size: 1.05rem; line-height: 1.6; color: var(--text-secondary); margin-bottom: 1rem;">
                  As part of a four-member team, developed a machine-learning pipeline for predicting smart-grid stability from generation and consumer response parameters. The project focused on reducing redundant raw grid data through preprocessing and using the selected features to classify grid conditions as stable or unstable. Initial experiments showed that augmenting the dataset improved Random Forest accuracy from 93.32% to 94.44%. We then implemented a five-layer neural network with hidden layers of 288, 288, 24, and 12 neurons, followed by a single sigmoid output, and compared Adam and Nadam optimization under the same architecture. Nadam improved test accuracy from 96.72% with Adam to 97.96%, and the final trained Nadam model achieved approximately 99.90% test accuracy, with an R² score of 0.9964, MAE of 0.00196, and MSE of 0.000828. The completed workflow demonstrated how preprocessing, data augmentation, and model optimization could be combined to produce high-accuracy smart-grid stability predictions.
                </p>
                
                <div class="tech-stack-tags" style="margin-top:2rem;">
                  <span class="tech-tag">Python</span>
                  <span class="tech-tag">Neural Networks</span>
                  <span class="tech-tag">Smart Grid</span>
                  <span class="tech-tag">Data Preprocessing</span>
                  <span class="tech-tag">Nadam</span>
                  <span class="tech-tag">Grid Stability</span>
                </div>
              </div>
              
              `;

html = html.replace(oldDetail, newDetail);

fs.writeFileSync('index.html', html);
console.log("Replaced Smart Grid project successfully");
