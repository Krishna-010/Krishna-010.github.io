const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Remove old Project 8 (Wireless Fetal Heart Rate Monitor) Master Card
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
// We shift 9->8, 10->9
html = html.replaceAll(`onclick="openProjectDetail(9)"`, `onclick="openProjectDetail(8)"`);
html = html.replaceAll(`data-project-index="9"`, `data-project-index="8"`);
html = html.replaceAll(`<!-- Project 9 Detail -->`, `<!-- Project 8 Detail -->`);

html = html.replaceAll(`onclick="openProjectDetail(10)"`, `onclick="openProjectDetail(9)"`);
html = html.replaceAll(`data-project-index="10"`, `data-project-index="9"`);
html = html.replaceAll(`<!-- Project 10 Detail -->`, `<!-- Project 9 Detail -->`);

// Now we have consecutive 0 to 9. We want to insert at index 5.
// So shift 9 down to 5 up by 1 (9->10, 8->9, ..., 5->6)
for (let i = 9; i >= 5; i--) {
    html = html.replaceAll(`onclick="openProjectDetail(${i})"`, `onclick="openProjectDetail(${i + 1})"`);
    html = html.replaceAll(`data-project-index="${i}"`, `data-project-index="${i + 1}"`);
    html = html.replaceAll(`<!-- Project ${i} Detail -->`, `<!-- Project ${i + 1} Detail -->`);
}

// Now index 5 is free. Let's insert the new Master Card before the (now) index 6 (Health Monitoring Jacket)
const healthCardStart = `<div class="project-item-card" onclick="openProjectDetail(6)" style="cursor: pointer;">
                <div class="project-meta-row">
                  <span class="project-tag">Embedded Systems</span>
                </div>
                <h3 class="project-title">Health Monitoring Jacket</h3>`;

const fetalCard = `<div class="project-item-card" onclick="openProjectDetail(5)" style="cursor: pointer;">
                <div class="project-meta-row">
                  <span class="project-tag">Biomedical ML & Embedded Systems</span>
                </div>
                <h3 class="project-title">Fetal Health Prediction & Heartbeat Monitoring</h3>
                <p class="project-summary">
                  Compared 11 machine-learning classifiers for fetal-health assessment, with Gradient Boosting and XGBoost achieving 94.98% test accuracy, alongside Arduino-based real-time heartbeat signal acquisition.
                </p>
                <div class="project-tech-stack">
                  <span class="tech-badge">Python</span>
                  <span class="tech-badge">Machine Learning</span>
                  <span class="tech-badge">Exploratory Data Analysis</span>
                  <span class="tech-badge">Arduino</span>
                  <span class="tech-badge">Biomedical Signals</span>
                  <span class="tech-badge">XGBoost</span>
                </div>
              </div>

              `;

html = html.replace(healthCardStart, fetalCard + healthCardStart);

// Now insert the new Detail View before the (now) index 6 Detail View
const healthDetailStart = `<!-- Project 6 Detail -->
              <div class="project-detail-content" data-project-index="6" style="display:none;">
                <h2 class="panel-title" style="margin-bottom: 0.5rem;">Health Monitoring Jacket</h2>`;

const fetalDetail = `<!-- Project 5 Detail -->
              <div class="project-detail-content" data-project-index="5" style="display:none;">
                <h2 class="panel-title" style="margin-bottom: 0.5rem;">Fetal Health Prediction & Heartbeat Monitoring</h2>
                <div class="project-meta-row" style="margin-bottom: 1.5rem;">
                  <span class="project-tag">Biomedical ML & Embedded Systems</span>
                </div>
                
                <div class="project-image-carousel" data-project-id="5" style="position: relative; width: 100%; margin-bottom: 2rem; border-radius: 12px; overflow: visible !important; background: var(--bg-surface); border: 1px solid var(--border-subtle);">
                  <button onclick="prevProjectImage(5)" style="position: absolute; left: 0.5rem; top: 50%; transform: translateY(-50%); background: var(--bg-panel); border: 1px solid var(--border-subtle); color: var(--text-primary); border-radius: 50%; width: 36px; height: 36px; z-index: 2; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">‹</button>
                  <button onclick="nextProjectImage(5)" style="position: absolute; right: 0.5rem; top: 50%; transform: translateY(-50%); background: var(--bg-panel); border: 1px solid var(--border-subtle); color: var(--text-primary); border-radius: 50%; width: 36px; height: 36px; z-index: 2; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">›</button>
                  
                  <div class="image-slides-wrapper" style="position: relative; width: 100%; height: 500px; overflow: visible !important;">
                    
                    <!-- Slide 1 -->
                    <div class="project-image-slide" data-slide-index="0" style="display: flex; flex-direction: column; position: absolute; inset: 0; padding: 1.5rem 3.5rem 2rem 3.5rem; background: var(--bg-surface); border-radius: 12px; align-items: center; justify-content: flex-start; z-index: 1;">
                      <h4 style="margin: 0 0 1.5rem 0; font-size: 1.25rem; font-weight: 600; color: var(--text-primary); text-align: center;">Integrated Data & Hardware System Architecture</h4>
                      <div style="flex: 1; min-height: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%;">
                        <img src="BMI1.png" alt="Integrated Biomedical ML Architecture" onclick="openLightbox(this.src)" style="cursor: zoom-in; max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 8px;" />
                      </div>
                    </div>

                    <!-- Slide 2 -->
                    <div class="project-image-slide" data-slide-index="1" style="display: none; flex-direction: column; position: absolute; inset: 0; padding: 1.5rem 3.5rem 2rem 3.5rem; background: var(--bg-surface); border-radius: 12px; align-items: center; justify-content: flex-start; z-index: 1;">
                      <h4 style="margin: 0 0 1.5rem 0; font-size: 1.25rem; font-weight: 600; color: var(--text-primary); text-align: center;">Quantitative Model Comparison Results</h4>
                      <div style="flex: 1; min-height: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; background: rgba(255, 255, 255, 0.03); border-radius: 8px; padding: 1rem; border: 1px solid var(--border-subtle);">
                        <img src="BMI2.png" alt="11-Model Quantitative Accuracy Comparison" onclick="openLightbox(this.src)" style="cursor: zoom-in; max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 4px;" />
                      </div>
                    </div>

                    <!-- Slide 3 -->
                    <div class="project-image-slide" data-slide-index="2" style="display: none; flex-direction: column; position: absolute; inset: 0; padding: 1.5rem 3.5rem 2rem 3.5rem; background: var(--bg-surface); border-radius: 12px; align-items: center; justify-content: flex-start; z-index: 1;">
                      <h4 style="margin: 0 0 1.5rem 0; font-size: 1.25rem; font-weight: 600; color: var(--text-primary); text-align: center;">Physical Arduino Signal Acquisition Hardware</h4>
                      <div style="flex: 1; min-height: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; background: rgba(255, 255, 255, 0.03); border-radius: 8px; padding: 1rem; border: 1px solid var(--border-subtle);">
                        <img src="BMI3.png" alt="Arduino-based heartbeat signal acquisition setup" onclick="openLightbox(this.src)" style="cursor: zoom-in; max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 4px;" />
                      </div>
                    </div>

                  </div>
                  
                  <div class="image-carousel-indicators" style="position: absolute; bottom: 1rem; left: 0; right: 0; display: flex; justify-content: center; gap: 0.5rem; z-index: 2;">
                    <div class="img-dot" data-dot-index="0" style="width: 8px; height: 8px; border-radius: 50%; background: var(--emerald-primary); opacity: 1; transition: all 0.2s ease;"></div>
                    <div class="img-dot" data-dot-index="1" style="width: 8px; height: 8px; border-radius: 50%; background: var(--text-muted); opacity: 0.5; transition: all 0.2s ease;"></div>
                    <div class="img-dot" data-dot-index="2" style="width: 8px; height: 8px; border-radius: 50%; background: var(--text-muted); opacity: 0.5; transition: all 0.2s ease;"></div>
                  </div>
                </div>

                <p style="font-size: 1.05rem; line-height: 1.6; color: var(--text-secondary); margin-bottom: 1rem;">
                  As part of a three-member team, developed a biomedical monitoring project combining machine-learning-based fetal health classification with embedded heartbeat-signal acquisition. A cleaned fetal-health dataset was explored in Python using histograms, correlation analysis, heatmaps, and class-distribution visualization before preprocessing the features with standard scaling and a 70:30 train-test split. Eleven classification approaches—including Logistic Regression, K-Nearest Neighbors, Decision Tree, linear and RBF SVMs, Neural Networks, Random Forest, Gradient Boosting, XGBoost, LightGBM, and CatBoost—were trained and evaluated on the same test set. Gradient Boosting and XGBoost produced the highest test accuracy at 94.98%, followed by LightGBM at 94.67% and CatBoost at 94.20%. In parallel, the hardware component used an Arduino Uno with a condenser microphone to acquire heartbeat-related signals for real-time monitoring, demonstrating the integration of biomedical signal acquisition with data-driven fetal-health analysis.
                </p>
                
                <div class="tech-stack-tags" style="margin-top:2rem;">
                  <span class="tech-tag">Python</span>
                  <span class="tech-tag">Machine Learning</span>
                  <span class="tech-tag">Exploratory Data Analysis</span>
                  <span class="tech-tag">Arduino</span>
                  <span class="tech-tag">Biomedical Signals</span>
                  <span class="tech-tag">XGBoost</span>
                </div>
              </div>
              
              `;

html = html.replace(healthDetailStart, fetalDetail + healthDetailStart);

fs.writeFileSync('index.html', html);
console.log("Fetal Health project added");
