const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Increment indices from 9 down to 3
for (let i = 9; i >= 3; i--) {
    html = html.replaceAll(`onclick="openProjectDetail(${i})"`, `onclick="openProjectDetail(${i + 1})"`);
    html = html.replaceAll(`data-project-index="${i}"`, `data-project-index="${i + 1}"`);
    html = html.replaceAll(`<!-- Project ${i} Detail -->`, `<!-- Project ${i + 1} Detail -->`);
}

// Now we can insert at index 3
const healthMonitoringCardStart = `<div class="project-item-card" onclick="openProjectDetail(4)" style="cursor: pointer;">
                <div class="project-meta-row">
                  <span class="project-tag">Embedded Systems</span>
                </div>
                <h3 class="project-title">Health Monitoring Jacket</h3>`;

const masterCard = `<div class="project-item-card" onclick="openProjectDetail(3)" style="cursor: pointer;">
                <div class="project-meta-row">
                  <span class="project-tag">Machine Learning & NLP</span>
                </div>
                <h3 class="project-title">Sequential Word Prediction using LSTM</h3>
                <p class="project-summary">
                  Developed an LSTM-based next-word prediction pipeline using a 6,803-word vocabulary and 81,059 generated training sequences, with recursive text generation and text-to-speech output.
                </p>
                <div class="project-tech-stack">
                  <span class="tech-badge">Python</span>
                  <span class="tech-badge">TensorFlow / Keras</span>
                  <span class="tech-badge">LSTM</span>
                  <span class="tech-badge">Natural Language Processing</span>
                  <span class="tech-badge">Text Generation</span>
                  <span class="tech-badge">Deep Learning</span>
                </div>
              </div>

              `;

html = html.replace(healthMonitoringCardStart, masterCard + healthMonitoringCardStart);

const healthMonitoringDetailStart = `<!-- Project 4 Detail -->
              <div class="project-detail-content" data-project-index="4" style="display:none;">
                <h2 class="panel-title" style="margin-bottom: 0.5rem;">Health Monitoring Jacket</h2>`;

const detailContent = `<!-- Project 3 Detail -->
              <div class="project-detail-content" data-project-index="3" style="display:none;">
                <h2 class="panel-title" style="margin-bottom: 0.5rem;">Sequential Word Prediction using LSTM</h2>
                <div class="project-meta-row" style="margin-bottom: 1.5rem;">
                  <span class="project-tag">Machine Learning & NLP</span>
                </div>
                
                <div class="project-image-carousel" data-project-id="3" style="position: relative; width: 100%; margin-bottom: 2rem; border-radius: 12px; overflow: visible !important; background: var(--bg-surface); border: 1px solid var(--border-subtle);">
                  <button onclick="prevProjectImage(3)" style="position: absolute; left: 0.5rem; top: 50%; transform: translateY(-50%); background: var(--bg-panel); border: 1px solid var(--border-subtle); color: var(--text-primary); border-radius: 50%; width: 36px; height: 36px; z-index: 2; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">‹</button>
                  <button onclick="nextProjectImage(3)" style="position: absolute; right: 0.5rem; top: 50%; transform: translateY(-50%); background: var(--bg-panel); border: 1px solid var(--border-subtle); color: var(--text-primary); border-radius: 50%; width: 36px; height: 36px; z-index: 2; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">›</button>
                  
                  <div class="image-slides-wrapper" style="position: relative; width: 100%; height: 500px; overflow: visible !important;">
                    
                    <!-- Slide 1 -->
                    <div class="project-image-slide" data-slide-index="0" style="display: flex; flex-direction: column; position: absolute; inset: 0; padding: 1.5rem 3.5rem 2rem 3.5rem; background: var(--bg-surface); border-radius: 12px; align-items: center; justify-content: flex-start; z-index: 1;">
                      <h4 style="margin: 0 0 1.5rem 0; font-size: 1.25rem; font-weight: 600; color: var(--text-primary); text-align: center;">End-to-End System Architecture</h4>
                      <div style="flex: 1; min-height: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%;">
                        <img src="lstm_pipeline.svg" alt="End-to-End System Architecture" onclick="openLightbox(this.src)" style="cursor: zoom-in; max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 8px;" />
                      </div>
                    </div>

                    <!-- Slide 2 -->
                    <div class="project-image-slide" data-slide-index="1" style="display: none; flex-direction: column; position: absolute; inset: 0; padding: 1.5rem 3.5rem 2rem 3.5rem; background: var(--bg-surface); border-radius: 12px; align-items: center; justify-content: flex-start; z-index: 1;">
                      <h4 style="margin: 0 0 1.5rem 0; font-size: 1.25rem; font-weight: 600; color: var(--text-primary); text-align: center;">Recursive Sequence Generation Tests</h4>
                      <div style="flex: 1; min-height: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; background: rgba(255, 255, 255, 0.03); border-radius: 8px; padding: 1rem; border: 1px solid var(--border-subtle);">
                        <img src="LSTM_Outputs.jpg" alt="Recursive Sequence Generation Tests" onclick="openLightbox(this.src)" style="cursor: zoom-in; max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 4px;" />
                      </div>
                    </div>

                  </div>
                  
                  <div class="image-carousel-indicators" style="position: absolute; bottom: 1rem; left: 0; right: 0; display: flex; justify-content: center; gap: 0.5rem; z-index: 2;">
                    <div class="img-dot" data-dot-index="0" style="width: 8px; height: 8px; border-radius: 50%; background: var(--emerald-primary); opacity: 1; transition: all 0.2s ease;"></div>
                    <div class="img-dot" data-dot-index="1" style="width: 8px; height: 8px; border-radius: 50%; background: var(--text-muted); opacity: 0.5; transition: all 0.2s ease;"></div>
                  </div>
                </div>

                <p style="font-size: 1.05rem; line-height: 1.6; color: var(--text-secondary); margin-bottom: 1rem;">
                  As part of a three-member team, developed a sequential word-prediction model in Python using a Long Short-Term Memory (LSTM) neural network to generate context-dependent continuations from incomplete text prompts. English literary text was collected and processed into a corpus that was tokenized and encoded into integer sequences, producing a vocabulary of 6,803 words and 81,059 adjacent-word training sequences. These sequences were separated into input-target pairs and used to train a TensorFlow/Keras model consisting of an embedding layer, a 50-unit LSTM layer, and a vocabulary-sized softmax output layer using categorical cross-entropy and the Adam optimizer. A custom inference function recursively appended each predicted word to the input sequence, enabling multi-word text generation from a supplied seed prompt. The completed model successfully generated learned text continuations during final testing, including outputs from seed prompts such as ‘Harry’ and ‘magic,’ demonstrating an end-to-end functional pipeline from raw text preprocessing through neural-network inference. A text-to-speech feature was also integrated to convert generated sequences into MP3 audio.
                </p>
                
                <div class="tech-stack-tags" style="margin-top:2rem;">
                  <span class="tech-tag">Python</span>
                  <span class="tech-tag">TensorFlow / Keras</span>
                  <span class="tech-tag">LSTM</span>
                  <span class="tech-tag">Natural Language Processing</span>
                  <span class="tech-tag">Text Generation</span>
                  <span class="tech-tag">Deep Learning</span>
                </div>
              </div>
              
              `;

html = html.replace(healthMonitoringDetailStart, detailContent + healthMonitoringDetailStart);

fs.writeFileSync('index.html', html);

// Update main.tsx totalProjects to 11
let js = fs.readFileSync('src/main.tsx', 'utf8');
js = js.replace('const totalProjects = 10;', 'const totalProjects = 11;');
fs.writeFileSync('src/main.tsx', js);

console.log('Successfully inserted LSTM project');
