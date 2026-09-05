const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const oldSlideStr = `                    <!-- Slide 1 -->
                    <div class="project-image-slide" data-slide-index="0" style="display: flex; flex-direction: column; position: absolute; inset: 0; padding: 1.5rem 3.5rem 2rem 3.5rem; background: var(--bg-surface); border-radius: 12px; align-items: center; justify-content: flex-start; z-index: 1;">
                      <h4 style="margin: 0 0 1.5rem 0; font-size: 1.25rem; font-weight: 600; color: var(--text-primary); text-align: center;">Authentic 6-Exposure Sequence & Final HDR Reconstruction</h4>
                      <div style="flex: 1; min-height: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%;">
                        <img src="hdr_exposure_sequence.svg" alt="HDR Exposure Sequence and Tone-Mapped Result" onclick="openLightbox(this.src)" style="cursor: zoom-in; max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 8px;" />
                      </div>
                    </div>`;

const newSlideStr = `                    <!-- Slide 1 -->
                    <div class="project-image-slide" data-slide-index="0" style="display: flex; flex-direction: column; position: absolute; inset: 0; padding: 1.5rem 3.5rem 2rem 3.5rem; background: #0b1121; border-radius: 12px; align-items: center; justify-content: flex-start; z-index: 1;">
                      <h4 style="margin: 0 0 1.5rem 0; font-size: 1.25rem; font-weight: 600; color: white; text-align: center;">Authentic 6-Exposure Sequence & Final HDR Reconstruction</h4>
                      
                      <div style="flex: 1; min-height: 0; display: flex; flex-direction: row; align-items: center; justify-content: space-between; width: 100%; gap: 1rem;">
                        
                        <!-- Left Section (6 LDR Inputs) -->
                        <div style="display: flex; flex-direction: column; align-items: center; flex: 1.5;">
                          <div style="color: white; font-weight: bold; margin-bottom: 1rem; font-size: 0.95rem;">6 Bracketed LDR Inputs</div>
                          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem; width: 100%;">
                            <!-- Input 1 -->
                            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.25rem;">
                              <img src="Watch_1.jpg" alt="Exposure 1" style="width: 100%; aspect-ratio: 4/5; object-fit: cover; border-radius: 6px; border: 1px solid rgba(255, 255, 255, 0.2);" onclick="openLightbox(this.src)" style="cursor: zoom-in;" />
                              <span style="font-size: 0.75rem; color: #a3a3a3;">0.0333 s</span>
                            </div>
                            <!-- Input 2 -->
                            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.25rem;">
                              <img src="Watch_2.jpg" alt="Exposure 2" style="width: 100%; aspect-ratio: 4/5; object-fit: cover; border-radius: 6px; border: 1px solid rgba(255, 255, 255, 0.2);" onclick="openLightbox(this.src)" style="cursor: zoom-in;" />
                              <span style="font-size: 0.75rem; color: #a3a3a3;">0.1000 s</span>
                            </div>
                            <!-- Input 3 -->
                            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.25rem;">
                              <img src="Watch_3.jpg" alt="Exposure 3" style="width: 100%; aspect-ratio: 4/5; object-fit: cover; border-radius: 6px; border: 1px solid rgba(255, 255, 255, 0.2);" onclick="openLightbox(this.src)" style="cursor: zoom-in;" />
                              <span style="font-size: 0.75rem; color: #a3a3a3;">0.3333 s</span>
                            </div>
                            <!-- Input 4 -->
                            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.25rem;">
                              <img src="Watch_4.jpg" alt="Exposure 4" style="width: 100%; aspect-ratio: 4/5; object-fit: cover; border-radius: 6px; border: 1px solid rgba(255, 255, 255, 0.2);" onclick="openLightbox(this.src)" style="cursor: zoom-in;" />
                              <span style="font-size: 0.75rem; color: #a3a3a3;">0.6250 s</span>
                            </div>
                            <!-- Input 5 -->
                            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.25rem;">
                              <img src="Watch_5.jpg" alt="Exposure 5" style="width: 100%; aspect-ratio: 4/5; object-fit: cover; border-radius: 6px; border: 1px solid rgba(255, 255, 255, 0.2);" onclick="openLightbox(this.src)" style="cursor: zoom-in;" />
                              <span style="font-size: 0.75rem; color: #a3a3a3;">1.3000 s</span>
                            </div>
                            <!-- Input 6 -->
                            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.25rem;">
                              <img src="Watch_6.jpg" alt="Exposure 6" style="width: 100%; aspect-ratio: 4/5; object-fit: cover; border-radius: 6px; border: 1px solid rgba(255, 255, 255, 0.2);" onclick="openLightbox(this.src)" style="cursor: zoom-in;" />
                              <span style="font-size: 0.75rem; color: #a3a3a3;">4.0000 s</span>
                            </div>
                          </div>
                        </div>

                        <!-- Center Section (Processing Arrow) -->
                        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; flex: 0.8; text-align: center; color: #10b981; gap: 0.5rem; padding: 0 1rem;">
                          <div style="font-weight: 600; font-size: 1rem;">HDR Reconstruction</div>
                          <div style="font-size: 3rem; line-height: 0.8;">&rarr;</div>
                          <div style="font-size: 0.8rem; opacity: 0.9;">Relative Exposure Fusion + Tone Mapping</div>
                        </div>

                        <!-- Right Section (HDR Result) -->
                        <div style="display: flex; flex-direction: column; align-items: center; flex: 1.2;">
                          <div style="color: white; font-weight: bold; margin-bottom: 1rem; font-size: 0.95rem;">Tone-Mapped HDR Output</div>
                          <div style="display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;">
                            <img src="Watch_HDR_Result.png" alt="Tone-Mapped HDR Output" onclick="openLightbox(this.src)" style="width: 100%; max-height: 280px; object-fit: contain; border-radius: 8px; border: 2px solid #10b981; box-shadow: 0 4px 20px rgba(16, 185, 129, 0.25); cursor: zoom-in;" />
                          </div>
                        </div>

                      </div>
                    </div>`;

html = html.replace(oldSlideStr, newSlideStr);
fs.writeFileSync('index.html', html);
console.log("Successfully replaced Slide 1 with HTML/CSS layout.");
