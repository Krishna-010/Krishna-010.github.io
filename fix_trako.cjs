const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const cardStart = html.indexOf('<div class="project-item-card" onclick="openProjectDetail(7)"');
const cardEndStr = '<div class="project-item-card" onclick="openProjectDetail(8)"';
const cardEnd = html.indexOf(cardEndStr);
let oldCard = html.substring(cardStart, cardEnd);

const newCard = `<div class="project-item-card" onclick="openProjectDetail(7)" style="cursor: pointer;">
                <div class="project-meta-row">
                  <span class="project-tag">Wearable Electronics & Product Development</span>
                </div>
                <h3 class="project-title">TRAKO Smart Safety Jacket</h3>
                <p class="project-summary">
                  Developed a smart-jacket prototype concept integrating heart-rate monitoring, time display, and location-based emergency alerts, while evaluating a ₹2,724 component-level BOM and product commercialization strategy.
                </p>
                <div class="project-tech-stack">
                  <span class="tech-badge">Arduino</span>
                  <span class="tech-badge">Wearable Electronics</span>
                  <span class="tech-badge">Pulse Sensing</span>
                  <span class="tech-badge">GSM / Location</span>
                  <span class="tech-badge">Embedded Systems</span>
                  <span class="tech-badge">Product Development</span>
                </div>
              </div>

              `;

html = html.replace(oldCard, newCard);

const detailStartStr = '<!-- Project 7 Detail -->';
const detailEndStr = '<!-- Project 8 Detail -->';
const detailStart = html.indexOf(detailStartStr);
const detailEnd = html.indexOf(detailEndStr);

let oldDetail = html.substring(detailStart, detailEnd);

const newDetail = `<!-- Project 7 Detail -->
              <div class="project-detail-content" data-project-index="7" style="display:none;">
                <h2 class="panel-title" style="margin-bottom: 0.5rem;">TRAKO Smart Safety Jacket</h2>
                <div class="project-meta-row" style="margin-bottom: 1.5rem;">
                  <span class="project-tag">Wearable Electronics & Product Development</span>
                </div>
                
                <div class="project-image-carousel" data-project-id="7" style="position: relative; width: 100%; margin-bottom: 2rem; border-radius: 12px; overflow: visible !important; background: var(--bg-surface); border: 1px solid var(--border-subtle);">
                  <button onclick="prevProjectImage(7)" style="position: absolute; left: 0.5rem; top: 50%; transform: translateY(-50%); background: var(--bg-panel); border: 1px solid var(--border-subtle); color: var(--text-primary); border-radius: 50%; width: 36px; height: 36px; z-index: 2; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">‹</button>
                  <button onclick="nextProjectImage(7)" style="position: absolute; right: 0.5rem; top: 50%; transform: translateY(-50%); background: var(--bg-panel); border: 1px solid var(--border-subtle); color: var(--text-primary); border-radius: 50%; width: 36px; height: 36px; z-index: 2; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">›</button>
                  
                  <div class="image-slides-wrapper" style="position: relative; width: 100%; height: 500px; overflow: visible !important;">
                    
                    <!-- Slide 1 -->
                    <div class="project-image-slide" data-slide-index="0" style="display: flex; flex-direction: column; position: absolute; inset: 0; padding: 1.5rem 3.5rem 2rem 3.5rem; background: #0b1121; border-radius: 12px; align-items: center; justify-content: flex-start; z-index: 1;">
                      <h4 style="margin: 0 0 1.5rem 0; font-size: 1.25rem; font-weight: 600; color: white; text-align: center;">Authentic Working Prototype Evidence</h4>
                      <div style="flex: 1; min-height: 0; display: flex; flex-direction: column; width: 100%; justify-content: space-between;">
                        <div style="display: flex; flex-direction: row; align-items: stretch; justify-content: space-between; gap: 1rem; flex: 1; min-height: 0;">
                          <!-- Left Column -->
                          <div style="display: flex; flex-direction: column; align-items: center; flex: 1; min-width: 0;">
                            <div style="flex: 1; display: flex; align-items: center; justify-content: center; width: 100%; min-height: 0;">
                              <img src="LSM1.png" alt="Sensing & Display" onclick="openLightbox(this.src)" style="cursor: zoom-in; max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 8px;" />
                            </div>
                            <div style="text-align: center; margin-top: 0.75rem;">
                              <div style="color: white; font-weight: bold; font-size: 0.95rem;">Sensing & Display</div>
                              <div style="color: #a3a3a3; font-size: 0.8rem; margin-top: 0.25rem;">Pulse Sensor · RTC · OLED</div>
                            </div>
                          </div>
                          
                          <!-- Center Column -->
                          <div style="display: flex; flex-direction: column; align-items: center; flex: 1; min-width: 0;">
                            <div style="flex: 1; display: flex; align-items: center; justify-content: center; width: 100%; min-height: 0;">
                              <img src="LSM3.png" alt="Location / Communication Subsystem" onclick="openLightbox(this.src)" style="cursor: zoom-in; max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 8px;" />
                            </div>
                            <div style="text-align: center; margin-top: 0.75rem;">
                              <div style="color: white; font-weight: bold; font-size: 0.95rem;">Location / Communication Subsystem</div>
                            </div>
                          </div>

                          <!-- Right Column -->
                          <div style="display: flex; flex-direction: column; align-items: center; flex: 1; min-width: 0;">
                            <div style="flex: 1; display: flex; align-items: center; justify-content: center; width: 100%; min-height: 0;">
                              <img src="LSM4.png" alt="Location Alert Demonstration" onclick="openLightbox(this.src)" style="cursor: zoom-in; max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 8px;" />
                            </div>
                            <div style="text-align: center; margin-top: 0.75rem;">
                              <div style="color: white; font-weight: bold; font-size: 0.95rem;">Location Alert Demonstration</div>
                            </div>
                          </div>
                        </div>

                        <!-- Footer Result Line -->
                        <div style="text-align: center; margin-top: 1rem; color: #10b981; font-weight: 500; font-size: 0.95rem; border-top: 1px solid rgba(16, 185, 129, 0.2); padding-top: 1rem;">
                          Functional sensing/display + location transmission demonstrated
                        </div>
                      </div>
                    </div>

                    <!-- Slide 2 -->
                    <div class="project-image-slide" data-slide-index="1" style="display: none; flex-direction: column; position: absolute; inset: 0; padding: 1.5rem 3.5rem 2rem 3.5rem; background: var(--bg-surface); border-radius: 12px; align-items: center; justify-content: flex-start; z-index: 1;">
                      <h4 style="margin: 0 0 1.5rem 0; font-size: 1.25rem; font-weight: 600; color: var(--text-primary); text-align: center;">Smart Jacket Subsystems & Product-Development Pipeline</h4>
                      <div style="flex: 1; min-height: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; background: rgba(255, 255, 255, 0.03); border-radius: 8px; padding: 1rem; border: 1px solid var(--border-subtle);">
                        <img src="trako_architecture.svg" alt="TRAKO Architecture and MVP Pipeline" onclick="openLightbox(this.src)" style="cursor: zoom-in; max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 4px;" />
                      </div>
                    </div>

                  </div>
                  
                  <div class="image-carousel-indicators" style="position: absolute; bottom: 1rem; left: 0; right: 0; display: flex; justify-content: center; gap: 0.5rem; z-index: 2;">
                    <div class="img-dot" data-dot-index="0" style="width: 8px; height: 8px; border-radius: 50%; background: var(--emerald-primary); opacity: 1; transition: all 0.2s ease;"></div>
                    <div class="img-dot" data-dot-index="1" style="width: 8px; height: 8px; border-radius: 50%; background: var(--text-muted); opacity: 0.5; transition: all 0.2s ease;"></div>
                  </div>
                </div>

                <p style="font-size: 1.05rem; line-height: 1.6; color: var(--text-secondary); margin-bottom: 1rem;">
                  As part of a five-member team, developed TRAKO, a smart-wearable safety concept designed to combine basic health monitoring and location-aware emergency functionality within a jacket. The embedded subsystem used an Arduino Nano with a pulse sensor, DS1307 real-time clock, and OLED display for physiological and time information, while the broader prototype incorporated communication hardware for transmitting location-based alerts. The final working snapshots demonstrated the electronics operating on breadboard hardware and showed location data being transmitted as a Google Maps link through SMS, supporting the project's safety-tracking objective. Beyond the electronics, we treated the system as a minimum viable product: defining target users, mapping component placement on the jacket, creating a project website and order/feature-feedback form, and performing a component-level cost analysis. The proposed prototype bill of materials totaled approximately ₹2,724, providing an initial basis for evaluating product feasibility, funding, regulatory considerations, and future manufacturing.
                </p>
                
                <div class="tech-stack-tags" style="margin-top:2rem;">
                  <span class="tech-tag">Arduino</span>
                  <span class="tech-tag">Wearable Electronics</span>
                  <span class="tech-tag">Pulse Sensing</span>
                  <span class="tech-tag">GSM / Location</span>
                  <span class="tech-tag">Embedded Systems</span>
                  <span class="tech-tag">Product Development</span>
                </div>
              </div>
              
              `;

html = html.replace(oldDetail, newDetail);

fs.writeFileSync('index.html', html);
console.log("Replaced Project 8 (index 7) successfully");
