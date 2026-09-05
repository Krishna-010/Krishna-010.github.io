const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const cardStart = html.indexOf('<div class="project-item-card" onclick="openProjectDetail(8)"');
const cardEndStr = '<div class="project-item-card" onclick="openProjectDetail(9)"';
const cardEnd = html.indexOf(cardEndStr);
let oldCard = html.substring(cardStart, cardEnd);

const newCard = `<div class="project-item-card" onclick="openProjectDetail(8)" style="cursor: pointer;">
                <div class="project-meta-row">
                  <span class="project-tag">Speech AI & Deep Learning</span>
                </div>
                <h3 class="project-title">Speaker Adaptation of VALL-E X for Cross-Lingual Voice Cloning</h3>
                <p class="project-summary">
                  Adapted VALL-E X using a custom bilingual speech dataset of 1,084 utterances, training the model for 200 epochs to investigate the tradeoff between speaker similarity and speech intelligibility.
                </p>
                <div class="project-tech-stack">
                  <span class="tech-badge">PyTorch</span>
                  <span class="tech-badge">VALL-E X</span>
                  <span class="tech-badge">Speech Synthesis</span>
                  <span class="tech-badge">Voice Cloning</span>
                  <span class="tech-badge">Transformer Models</span>
                  <span class="tech-badge">Fine-Tuning</span>
                </div>
              </div>

              `;

html = html.replace(oldCard, newCard);

const detailStartStr = '<!-- Project 8 Detail -->';
const detailEndStr = '<!-- Project 9 Detail -->';
const detailStart = html.indexOf(detailStartStr);
const detailEnd = html.indexOf(detailEndStr);

let oldDetail = html.substring(detailStart, detailEnd);

const newDetail = `<!-- Project 8 Detail -->
              <div class="project-detail-content" data-project-index="8" style="display:none;">
                <h2 class="panel-title" style="margin-bottom: 0.5rem;">Speaker Adaptation of VALL-E X for Cross-Lingual Voice Cloning</h2>
                <div class="project-meta-row" style="margin-bottom: 1.5rem;">
                  <span class="project-tag">Speech AI & Deep Learning</span>
                </div>
                
                <div class="project-image-carousel" data-project-id="8" style="position: relative; width: 100%; margin-bottom: 2rem; border-radius: 12px; overflow: visible !important; background: var(--bg-surface); border: 1px solid var(--border-subtle);">
                  <button onclick="prevProjectImage(8)" style="position: absolute; left: 0.5rem; top: 50%; transform: translateY(-50%); background: var(--bg-panel); border: 1px solid var(--border-subtle); color: var(--text-primary); border-radius: 50%; width: 36px; height: 36px; z-index: 2; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">‹</button>
                  <button onclick="nextProjectImage(8)" style="position: absolute; right: 0.5rem; top: 50%; transform: translateY(-50%); background: var(--bg-panel); border: 1px solid var(--border-subtle); color: var(--text-primary); border-radius: 50%; width: 36px; height: 36px; z-index: 2; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">›</button>
                  
                  <div class="image-slides-wrapper" style="position: relative; width: 100%; height: 500px; overflow: visible !important;">
                    
                    <!-- Slide 1 -->
                    <div class="project-image-slide" data-slide-index="0" style="display: flex; flex-direction: column; position: absolute; inset: 0; padding: 1.5rem 3.5rem 2rem 3.5rem; background: var(--bg-surface); border-radius: 12px; align-items: center; justify-content: flex-start; z-index: 1;">
                      <h4 style="margin: 0 0 1.5rem 0; font-size: 1.25rem; font-weight: 600; color: var(--text-primary); text-align: center;">VALL-E X Speaker Adaptation Pipeline & Overfitting Tradeoff</h4>
                      <div style="flex: 1; min-height: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; background: rgba(255, 255, 255, 0.03); border-radius: 8px; padding: 1rem; border: 1px solid var(--border-subtle);">
                        <img src="vallex_architecture.svg" alt="VALL-E X Speaker Adaptation Pipeline" onclick="openLightbox(this.src)" style="cursor: zoom-in; max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 4px;" />
                      </div>
                    </div>

                    <!-- Slide 2 -->
                    <div class="project-image-slide" data-slide-index="1" style="display: none; flex-direction: column; position: absolute; inset: 0; padding: 1.5rem 3.5rem 2rem 3.5rem; background: var(--bg-surface); border-radius: 12px; align-items: center; justify-content: flex-start; z-index: 1;">
                      <h4 style="margin: 0 0 1.5rem 0; font-size: 1.25rem; font-weight: 600; color: var(--text-primary); text-align: center;">Custom Speech Dataset & Experimental Fine-Tuning Results</h4>
                      <div style="flex: 1; min-height: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; background: rgba(255, 255, 255, 0.03); border-radius: 8px; padding: 1rem; border: 1px solid var(--border-subtle);">
                        <img src="vallex_results.svg" alt="Dataset and Experimental Findings" onclick="openLightbox(this.src)" style="cursor: zoom-in; max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 4px;" />
                      </div>
                    </div>

                  </div>
                  
                  <div class="image-carousel-indicators" style="position: absolute; bottom: 1rem; left: 0; right: 0; display: flex; justify-content: center; gap: 0.5rem; z-index: 2;">
                    <div class="img-dot" data-dot-index="0" style="width: 8px; height: 8px; border-radius: 50%; background: var(--emerald-primary); opacity: 1; transition: all 0.2s ease;"></div>
                    <div class="img-dot" data-dot-index="1" style="width: 8px; height: 8px; border-radius: 50%; background: var(--text-muted); opacity: 0.5; transition: all 0.2s ease;"></div>
                  </div>
                </div>

                <p style="font-size: 1.05rem; line-height: 1.6; color: var(--text-secondary); margin-bottom: 1rem;">
                  As part of a two-person team, investigated speaker-specific adaptation of VALL-E X, a neural-codec language model for zero-shot and cross-lingual text-to-speech. We developed a custom recording interface and collected 1,084 English and Japanese utterances totaling approximately 97.7 minutes of speech, including 808 English recordings and 276 Japanese recordings. The data was prepared for VALL-E X’s phoneme- and audio-codec-based generation pipeline, and an existing custom-data training repository was modified for our experiments. Using rented GPU compute, the model’s trainable parameters were fine-tuned for 200 epochs on the English dataset. Qualitative comparison showed that adaptation made the generated timbre and intonation more closely resemble the target speaker, but also exposed a significant overfitting tradeoff: synthesis quality deteriorated and syllables were omitted in English, while Japanese output became too degraded for reliable word recognition. The experiment motivated parameter-efficient adaptation such as LoRA as a more suitable next step for limited speaker-specific datasets.
                </p>
                
                <div class="tech-stack-tags" style="margin-top:2rem;">
                  <span class="tech-tag">PyTorch</span>
                  <span class="tech-tag">VALL-E X</span>
                  <span class="tech-tag">Speech Synthesis</span>
                  <span class="tech-tag">Voice Cloning</span>
                  <span class="tech-tag">Transformer Models</span>
                  <span class="tech-tag">Fine-Tuning</span>
                </div>
              </div>
              
              `;

html = html.replace(oldDetail, newDetail);

fs.writeFileSync('index.html', html);
console.log("Replaced Project 9 (index 8) successfully");
