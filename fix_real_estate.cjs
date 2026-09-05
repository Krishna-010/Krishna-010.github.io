const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Remove old Project 8 (Indian Real Estate) Master Card
const card8Start = html.indexOf('<div class="project-item-card" onclick="openProjectDetail(8)"');
const card9Start = html.indexOf('<div class="project-item-card" onclick="openProjectDetail(9)"');
if (card8Start !== -1 && card9Start !== -1) {
    html = html.substring(0, card8Start) + html.substring(card9Start);
}

// 2. Remove old Project 8 Detail View
const detail8StartStr = '<!-- Project 8 Detail -->';
const detail8Start = html.indexOf(detail8StartStr);
const detail9StartStr = '<!-- Project 9 Detail -->';
const detail9Start = html.indexOf(detail9StartStr);
if (detail8Start !== -1 && detail9Start !== -1) {
    html = html.substring(0, detail8Start) + html.substring(detail9Start);
}

// Now we have indices 0,1,2,3,4,5,6,7, 9,10
// We want to shift 9->8, 10->9 (just temporarily so it's consecutive 0 to 9)
html = html.replaceAll(`onclick="openProjectDetail(9)"`, `onclick="openProjectDetail(8)"`);
html = html.replaceAll(`data-project-index="9"`, `data-project-index="8"`);
html = html.replaceAll(`<!-- Project 9 Detail -->`, `<!-- Project 8 Detail -->`);

html = html.replaceAll(`onclick="openProjectDetail(10)"`, `onclick="openProjectDetail(9)"`);
html = html.replaceAll(`data-project-index="10"`, `data-project-index="9"`);
html = html.replaceAll(`<!-- Project 10 Detail -->`, `<!-- Project 9 Detail -->`);

// Now we have consecutive 0 to 9. We want to insert at index 4.
// So shift 9 down to 4 up by 1 (9->10, 8->9, ..., 4->5)
for (let i = 9; i >= 4; i--) {
    html = html.replaceAll(`onclick="openProjectDetail(${i})"`, `onclick="openProjectDetail(${i + 1})"`);
    html = html.replaceAll(`data-project-index="${i}"`, `data-project-index="${i + 1}"`);
    html = html.replaceAll(`<!-- Project ${i} Detail -->`, `<!-- Project ${i + 1} Detail -->`);
}

// Now index 4 is free. Let's insert the new Master Card before the (now) index 5 (Health Monitoring Jacket)
const healthCardStart = `<div class="project-item-card" onclick="openProjectDetail(5)" style="cursor: pointer;">
                <div class="project-meta-row">
                  <span class="project-tag">Embedded Systems</span>
                </div>
                <h3 class="project-title">Health Monitoring Jacket</h3>`;

const realEstateCard = `<div class="project-item-card" onclick="openProjectDetail(4)" style="cursor: pointer;">
                <div class="project-meta-row">
                  <span class="project-tag">Machine Learning & Data Analytics</span>
                </div>
                <h3 class="project-title">Real Estate Price Prediction Using Machine Learning</h3>
                <p class="project-summary">
                  Compared Linear Regression and Random Forest models for house-price estimation using an Indian real-estate dataset, with an 80:20 train-test split and quantitative model evaluation.
                </p>
                <div class="project-tech-stack">
                  <span class="tech-badge">Python</span>
                  <span class="tech-badge">Machine Learning</span>
                  <span class="tech-badge">Linear Regression</span>
                  <span class="tech-badge">Random Forest</span>
                  <span class="tech-badge">Data Preprocessing</span>
                </div>
              </div>

              `;

html = html.replace(healthCardStart, realEstateCard + healthCardStart);

// Now insert the new Detail View before the (now) index 5 Detail View
const healthDetailStart = `<!-- Project 5 Detail -->
              <div class="project-detail-content" data-project-index="5" style="display:none;">
                <h2 class="panel-title" style="margin-bottom: 0.5rem;">Health Monitoring Jacket</h2>`;

const realEstateDetail = `<!-- Project 4 Detail -->
              <div class="project-detail-content" data-project-index="4" style="display:none;">
                <h2 class="panel-title" style="margin-bottom: 0.5rem;">Real Estate Price Prediction Using Machine Learning</h2>
                <div class="project-meta-row" style="margin-bottom: 1.5rem;">
                  <span class="project-tag">Machine Learning & Data Analytics</span>
                </div>
                
                <div class="project-image-carousel" data-project-id="4" style="position: relative; width: 100%; margin-bottom: 2rem; border-radius: 12px; overflow: visible !important; background: var(--bg-surface); border: 1px solid var(--border-subtle);">
                  <button onclick="prevProjectImage(4)" style="position: absolute; left: 0.5rem; top: 50%; transform: translateY(-50%); background: var(--bg-panel); border: 1px solid var(--border-subtle); color: var(--text-primary); border-radius: 50%; width: 36px; height: 36px; z-index: 2; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">‹</button>
                  <button onclick="nextProjectImage(4)" style="position: absolute; right: 0.5rem; top: 50%; transform: translateY(-50%); background: var(--bg-panel); border: 1px solid var(--border-subtle); color: var(--text-primary); border-radius: 50%; width: 36px; height: 36px; z-index: 2; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">›</button>
                  
                  <div class="image-slides-wrapper" style="position: relative; width: 100%; height: 500px; overflow: visible !important;">
                    
                    <!-- Slide 1 -->
                    <div class="project-image-slide" data-slide-index="0" style="display: flex; flex-direction: column; position: absolute; inset: 0; padding: 1.5rem 3.5rem 2rem 3.5rem; background: var(--bg-surface); border-radius: 12px; align-items: center; justify-content: flex-start; z-index: 1;">
                      <h4 style="margin: 0 0 1.5rem 0; font-size: 1.25rem; font-weight: 600; color: var(--text-primary); text-align: center;">Machine Learning Workflow & Architecture</h4>
                      <div style="flex: 1; min-height: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%;">
                        <img src="IOTDA1.png" alt="Machine Learning Workflow & Architecture" onclick="openLightbox(this.src)" style="cursor: zoom-in; max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 8px;" />
                      </div>
                    </div>

                    <!-- Slide 2 -->
                    <div class="project-image-slide" data-slide-index="1" style="display: none; flex-direction: column; position: absolute; inset: 0; padding: 1.5rem 3.5rem 2rem 3.5rem; background: var(--bg-surface); border-radius: 12px; align-items: center; justify-content: flex-start; z-index: 1;">
                      <h4 style="margin: 0 0 1.5rem 0; font-size: 1.25rem; font-weight: 600; color: var(--text-primary); text-align: center;">Quantitative Model Comparison Results</h4>
                      <div style="flex: 1; min-height: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; background: rgba(255, 255, 255, 0.03); border-radius: 8px; padding: 1rem; border: 1px solid var(--border-subtle);">
                        <img src="IOTDA2.png" alt="Quantitative Model Comparison Results" onclick="openLightbox(this.src)" style="cursor: zoom-in; max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 4px;" />
                      </div>
                    </div>

                  </div>
                  
                  <div class="image-carousel-indicators" style="position: absolute; bottom: 1rem; left: 0; right: 0; display: flex; justify-content: center; gap: 0.5rem; z-index: 2;">
                    <div class="img-dot" data-dot-index="0" style="width: 8px; height: 8px; border-radius: 50%; background: var(--emerald-primary); opacity: 1; transition: all 0.2s ease;"></div>
                    <div class="img-dot" data-dot-index="1" style="width: 8px; height: 8px; border-radius: 50%; background: var(--text-muted); opacity: 0.5; transition: all 0.2s ease;"></div>
                  </div>
                </div>

                <p style="font-size: 1.05rem; line-height: 1.6; color: var(--text-secondary); margin-bottom: 1rem;">
                  As part of a three-member team, developed and compared machine-learning models for estimating residential property prices from an Indian housing dataset. The workflow included preprocessing property data, handling missing or inconsistent values, selecting relevant housing attributes, and preparing the dataset for supervised regression. The data was divided using an 80:20 training and testing split, and both Linear Regression and Random Forest models were implemented in Python using Google Colab. Model predictions were then evaluated quantitatively using the error metric defined in the project. The final report recorded values of 0.1143 for Linear Regression and 0.3805 for Random Forest, with the project concluding that Linear Regression performed better under the reported evaluation criterion. The completed pipeline demonstrated the use of data preprocessing, regression modeling, model comparison, and quantitative validation for data-driven real-estate price estimation.
                </p>
                
                <div class="tech-stack-tags" style="margin-top:2rem;">
                  <span class="tech-tag">Python</span>
                  <span class="tech-tag">Machine Learning</span>
                  <span class="tech-tag">Linear Regression</span>
                  <span class="tech-tag">Random Forest</span>
                  <span class="tech-tag">Data Preprocessing</span>
                </div>
              </div>
              
              `;

html = html.replace(healthDetailStart, realEstateDetail + healthDetailStart);

fs.writeFileSync('index.html', html);
console.log("Real estate project added");
