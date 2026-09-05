const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const cardStart = html.indexOf('<div class="project-item-card" onclick="openProjectDetail(6)"');
const cardEndStr = '<div class="project-item-card" onclick="openProjectDetail(7)"';
const cardEnd = html.indexOf(cardEndStr);
let oldCard = html.substring(cardStart, cardEnd);

const newCard = `<div class="project-item-card" onclick="openProjectDetail(6)" style="cursor: pointer;">
                <div class="project-meta-row">
                  <span class="project-tag">Image Processing & Embedded Systems</span>
                </div>
                <h3 class="project-title">HDR Image Reconstruction for FPGA-Based Imaging</h3>
                <p class="project-summary">
                  Developed and tested a multi-exposure HDR reconstruction pipeline in MATLAB, fusing six bracketed LDR images and tone-mapping the result while investigating a path toward FPGA-based real-time deployment.
                </p>
                <div class="project-tech-stack">
                  <span class="tech-badge">MATLAB</span>
                  <span class="tech-badge">HDR Imaging</span>
                  <span class="tech-badge">Image Processing</span>
                  <span class="tech-badge">Tone Mapping</span>
                  <span class="tech-badge">Camera Response</span>
                  <span class="tech-badge">FPGA Design</span>
                </div>
              </div>

              `;

html = html.replace(oldCard, newCard);

const detailStartStr = '<!-- Project 6 Detail -->';
const detailEndStr = '<!-- Project 7 Detail -->';
const detailStart = html.indexOf(detailStartStr);
const detailEnd = html.indexOf(detailEndStr);

let oldDetail = html.substring(detailStart, detailEnd);

const newDetail = `<!-- Project 6 Detail -->
              <div class="project-detail-content" data-project-index="6" style="display:none;">
                <h2 class="panel-title" style="margin-bottom: 0.5rem;">HDR Image Reconstruction for FPGA-Based Imaging</h2>
                <div class="project-meta-row" style="margin-bottom: 1.5rem;">
                  <span class="project-tag">Image Processing & Embedded Systems</span>
                </div>
                
                <div class="project-image-carousel" data-project-id="6" style="position: relative; width: 100%; margin-bottom: 2rem; border-radius: 12px; overflow: visible !important; background: var(--bg-surface); border: 1px solid var(--border-subtle);">
                  <button onclick="prevProjectImage(6)" style="position: absolute; left: 0.5rem; top: 50%; transform: translateY(-50%); background: var(--bg-panel); border: 1px solid var(--border-subtle); color: var(--text-primary); border-radius: 50%; width: 36px; height: 36px; z-index: 2; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">‹</button>
                  <button onclick="nextProjectImage(6)" style="position: absolute; right: 0.5rem; top: 50%; transform: translateY(-50%); background: var(--bg-panel); border: 1px solid var(--border-subtle); color: var(--text-primary); border-radius: 50%; width: 36px; height: 36px; z-index: 2; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">›</button>
                  
                  <div class="image-slides-wrapper" style="position: relative; width: 100%; height: 500px; overflow: visible !important;">
                    
                    <!-- Slide 1 -->
                    <div class="project-image-slide" data-slide-index="0" style="display: flex; flex-direction: column; position: absolute; inset: 0; padding: 1.5rem 3.5rem 2rem 3.5rem; background: var(--bg-surface); border-radius: 12px; align-items: center; justify-content: flex-start; z-index: 1;">
                      <h4 style="margin: 0 0 1.5rem 0; font-size: 1.25rem; font-weight: 600; color: var(--text-primary); text-align: center;">Authentic 6-Exposure Sequence & Final HDR Reconstruction</h4>
                      <div style="flex: 1; min-height: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%;">
                        <img src="hdr_exposure_sequence.svg" alt="HDR Exposure Sequence and Tone-Mapped Result" onclick="openLightbox(this.src)" style="cursor: zoom-in; max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 8px;" />
                      </div>
                    </div>

                    <!-- Slide 2 -->
                    <div class="project-image-slide" data-slide-index="1" style="display: none; flex-direction: column; position: absolute; inset: 0; padding: 1.5rem 3.5rem 2rem 3.5rem; background: var(--bg-surface); border-radius: 12px; align-items: center; justify-content: flex-start; z-index: 1;">
                      <h4 style="margin: 0 0 1.5rem 0; font-size: 1.25rem; font-weight: 600; color: var(--text-primary); text-align: center;">Completed Software Architecture & Investigated Hardware Path</h4>
                      <div style="flex: 1; min-height: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; background: rgba(255, 255, 255, 0.03); border-radius: 8px; padding: 1rem; border: 1px solid var(--border-subtle);">
                        <img src="hdr_fpga_architecture.svg" alt="HDR Processing Pipeline and FPGA Deployment Path" onclick="openLightbox(this.src)" style="cursor: zoom-in; max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 4px;" />
                      </div>
                    </div>

                  </div>
                  
                  <div class="image-carousel-indicators" style="position: absolute; bottom: 1rem; left: 0; right: 0; display: flex; justify-content: center; gap: 0.5rem; z-index: 2;">
                    <div class="img-dot" data-dot-index="0" style="width: 8px; height: 8px; border-radius: 50%; background: var(--emerald-primary); opacity: 1; transition: all 0.2s ease;"></div>
                    <div class="img-dot" data-dot-index="1" style="width: 8px; height: 8px; border-radius: 50%; background: var(--text-muted); opacity: 0.5; transition: all 0.2s ease;"></div>
                  </div>
                </div>

                <p style="font-size: 1.05rem; line-height: 1.6; color: var(--text-secondary); margin-bottom: 1rem;">
                  Developed a multi-exposure High Dynamic Range (HDR) imaging pipeline intended as the image-processing foundation for an FPGA-based wearable visual-aid concept. The approach combines Low Dynamic Range images captured at different exposures so that information preserved in both dark and bright regions can contribute to a single reconstructed image. I implemented and tested the reconstruction workflow in MATLAB using six bracketed images with exposure values ranging from 0.0333 to 4.0 s, generating an HDR radiance representation with makehdr before applying tone mapping for display. A second implementation estimated the camera response function directly from an exposure sequence before HDR reconstruction and tone mapping. The algorithm was completed and tested using image sets from multiple environments, demonstrating the feasibility of multi-exposure HDR fusion. I also investigated the hardware-deployment path, identifying synchronized image acquisition, FPGA-board compatibility, fixed-point conversion, and MATLAB/Simulink-to-HDL translation as the primary constraints that would need to be solved for a real-time FPGA implementation.
                </p>
                
                <div class="tech-stack-tags" style="margin-top:2rem;">
                  <span class="tech-tag">MATLAB</span>
                  <span class="tech-tag">HDR Imaging</span>
                  <span class="tech-tag">Image Processing</span>
                  <span class="tech-tag">Tone Mapping</span>
                  <span class="tech-tag">Camera Response</span>
                  <span class="tech-tag">FPGA Design</span>
                </div>
              </div>
              
              `;

html = html.replace(oldDetail, newDetail);

fs.writeFileSync('index.html', html);
console.log("Replaced Project 7 (index 6) successfully");
