const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const targetStart = `<div class="project-detail-content" data-project-index="2" style="display:none;">`;
const targetEnd = `</div>
              </div>`;
// Actually, finding the end of project 2 is tricky because there are multiple nested divs.
// Let's just find the start of project 3.
const nextProjectStart = `<!-- Project 3 Detail -->`;

let startIndex = html.indexOf(targetStart);
let endIndex = html.indexOf(nextProjectStart, startIndex);

if (startIndex === -1 || endIndex === -1) {
    console.log("Could not find bounds");
    process.exit(1);
}

const newDetailView = `<div class="project-detail-content" data-project-index="2" style="display:none;">
                <h2 class="panel-title" style="margin-bottom: 0.5rem;">Smart Garage Door Opener</h2>
                <div class="project-meta-row" style="margin-bottom: 1.5rem;">
                  <span class="project-tag">IoT & Embedded Systems</span>
                </div>
                
                <div class="project-image-carousel" data-project-id="2" style="position: relative; width: 100%; margin-bottom: 2rem; border-radius: 12px; overflow: visible !important; background: var(--bg-surface); border: 1px solid var(--border-subtle);">
                  <button onclick="prevProjectImage(2)" style="position: absolute; left: 0.5rem; top: 50%; transform: translateY(-50%); background: var(--bg-panel); border: 1px solid var(--border-subtle); color: var(--text-primary); border-radius: 50%; width: 36px; height: 36px; z-index: 2; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">‹</button>
                  <button onclick="nextProjectImage(2)" style="position: absolute; right: 0.5rem; top: 50%; transform: translateY(-50%); background: var(--bg-panel); border: 1px solid var(--border-subtle); color: var(--text-primary); border-radius: 50%; width: 36px; height: 36px; z-index: 2; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">›</button>
                  
                  <div class="image-slides-wrapper" style="position: relative; width: 100%; height: 500px; overflow: visible !important;">
                    
                    <!-- Slide 1 -->
                    <div class="project-image-slide" data-slide-index="0" style="display: flex; flex-direction: column; position: absolute; inset: 0; padding: 1.5rem 3.5rem 2rem 3.5rem; background: var(--bg-surface); border-radius: 12px; align-items: center; justify-content: flex-start; z-index: 1;">
                      <h4 style="margin: 0 0 1.5rem 0; font-size: 1.25rem; font-weight: 600; color: var(--text-primary); text-align: center;">Physical Prototype Circuit Overview</h4>
                      <div style="flex: 1; min-height: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%;">
                        <img src="IOT1Picture1.png" alt="Physical Prototype Overview" onclick="openLightbox(this.src)" style="cursor: zoom-in; max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 8px;" />
                      </div>
                    </div>

                    <!-- Slide 2 -->
                    <div class="project-image-slide" data-slide-index="1" style="display: none; flex-direction: column; position: absolute; inset: 0; padding: 1.5rem 3.5rem 2rem 3.5rem; background: var(--bg-surface); border-radius: 12px; align-items: center; justify-content: flex-start; z-index: 1;">
                      <h4 style="margin: 0 0 1.5rem 0; font-size: 1.25rem; font-weight: 600; color: var(--text-primary); text-align: center;">System Architecture & Cloud Integration</h4>
                      <div style="flex: 1; min-height: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; background: rgba(255, 255, 255, 0.03); border-radius: 8px; padding: 1rem; border: 1px solid var(--border-subtle);">
                        <img src="IOT1Picture2.png" alt="System Architecture Block Diagram" onclick="openLightbox(this.src)" style="cursor: zoom-in; max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 4px;" />
                      </div>
                    </div>

                    <!-- Slide 3 -->
                    <div class="project-image-slide" data-slide-index="2" style="display: none; flex-direction: column; position: absolute; inset: 0; padding: 1.5rem 3.5rem 2rem 3.5rem; background: var(--bg-surface); border-radius: 12px; align-items: center; justify-content: flex-start; z-index: 1;">
                      <h4 style="margin: 0 0 1.5rem 0; font-size: 1.25rem; font-weight: 600; color: var(--text-primary); text-align: center;">Circuit Schematic & Component Wiring</h4>
                      <div style="flex: 1; min-height: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; background: rgba(255, 255, 255, 0.03); border-radius: 8px; padding: 1rem; border: 1px solid var(--border-subtle);">
                        <img src="IOT1Picture3.png" alt="Circuit Schematic" onclick="openLightbox(this.src)" style="cursor: zoom-in; max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 4px;" />
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
                  As part of a four-person undergraduate team, we developed a real-time working IoT garage-door prototype using an Arduino Uno, RC522 RFID reader, L298N motor driver, DC motor, ESP8266 Wi-Fi module, and Blynk Cloud. The system was designed to handle local access control by checking RFID UIDs for authorization; approved users triggered motorized door operation and generated status updates through Blynk, while unauthorized tags were actively rejected and reported. Additionally, the system supported remote actuation through authenticated Blynk mobile and web controls, resulting in a fully integrated hardware and cloud-based access solution.
                </p>
                
                <div class="tech-stack-tags" style="margin-top:2rem;">
                  <span class="tech-tag">Arduino</span>
                  <span class="tech-tag">Embedded Systems</span>
                  <span class="tech-tag">RFID</span>
                  <span class="tech-tag">ESP8266</span>
                  <span class="tech-tag">Blynk IoT</span>
                  <span class="tech-tag">Motor Control</span>
                </div>
              </div>
              
              `;

html = html.substring(0, startIndex) + newDetailView + html.substring(endIndex);

fs.writeFileSync('index.html', html);
console.log("Replaced Detail View");
