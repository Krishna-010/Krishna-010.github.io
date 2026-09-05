const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const oldCard = `<div class="project-item-card" onclick="openProjectDetail(10)" style="cursor: pointer;">
                <div class="project-meta-row">
                  <span class="project-tag">Control Systems</span>
                </div>
                <h3 class="project-title">Rotary Inverted Pendulum</h3>
                <p class="project-summary">
                  Project details and outcomes will be updated here shortly.
                </p>
                <div class="project-tech-stack">
                  <span class="tech-badge">Control Theory</span>
                  <span class="tech-badge">Dynamics</span>
                  <span class="tech-badge">MATLAB</span>
                </div>
              </div>`;

const newCard = `<div class="project-item-card" onclick="openProjectDetail(10)" style="cursor: pointer;">
                <div class="project-meta-row">
                  <span class="project-tag">Control Systems & Mechatronics</span>
                </div>
                <h3 class="project-title">Rotary Inverted Pendulum Control</h3>
                <p class="project-summary">
                  Modeled and controlled a nonlinear rotary inverted pendulum using state-space analysis and pole-placement feedback, validating the controller on a Quanser hardware-in-the-loop platform.
                </p>
                <div class="project-tech-stack">
                  <span class="tech-badge">MATLAB / Simulink</span>
                  <span class="tech-badge">State-Space Control</span>
                  <span class="tech-badge">Pole Placement</span>
                  <span class="tech-badge">Quanser</span>
                  <span class="tech-badge">Hardware-in-the-Loop</span>
                  <span class="tech-badge">Mechatronics</span>
                </div>
              </div>`;

html = html.replace(oldCard, newCard);


const oldDetail = `<!-- Project 10 Detail -->
              <div class="project-detail-content" data-project-index="10" style="display:none;">
                <h2 class="panel-title" style="margin-bottom: 0.5rem;">Rotary Inverted Pendulum</h2>
                <div class="project-meta-row" style="margin-bottom: 1.5rem;">
                  <span class="project-tag">Control Systems</span>
                </div>
                
                <div class="project-image-placeholder" style="width:100%; height:300px; background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:12px; margin-bottom:2rem; display:flex; align-items:center; justify-content:center; color:var(--text-muted); font-family:var(--font-mono); letter-spacing:1px; text-align: center; padding: 1rem;">
                  [ Image / Demo Placeholder for Rotary Inverted Pendulum ]
                </div>
                <p style="font-size: 1.05rem; line-height: 1.6; color: var(--text-secondary); margin-bottom: 1rem;">
                  Project details and outcomes will be updated here shortly.
                </p>
                
                <div class="tech-stack-tags" style="margin-top:2rem;">
                  <span class="tech-tag">Control Theory</span>
                  <span class="tech-tag">Dynamics</span>
                  <span class="tech-tag">MATLAB</span>
                </div>
              </div>`;

const newDetail = `<!-- Project 10 Detail -->
              <div class="project-detail-content" data-project-index="10" style="display:none;">
                <h2 class="panel-title" style="margin-bottom: 0.5rem;">Rotary Inverted Pendulum Control</h2>
                <div class="project-meta-row" style="margin-bottom: 1.5rem;">
                  <span class="project-tag">Control Systems & Mechatronics</span>
                </div>
                
                <div class="project-image-carousel" data-project-id="10" style="position: relative; width: 100%; margin-bottom: 2rem; border-radius: 12px; overflow: visible !important; background: var(--bg-surface); border: 1px solid var(--border-subtle);">
                  <button onclick="prevProjectImage(10)" style="position: absolute; left: 0.5rem; top: 50%; transform: translateY(-50%); background: var(--bg-panel); border: 1px solid var(--border-subtle); color: var(--text-primary); border-radius: 50%; width: 36px; height: 36px; z-index: 2; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">‹</button>
                  <button onclick="nextProjectImage(10)" style="position: absolute; right: 0.5rem; top: 50%; transform: translateY(-50%); background: var(--bg-panel); border: 1px solid var(--border-subtle); color: var(--text-primary); border-radius: 50%; width: 36px; height: 36px; z-index: 2; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">›</button>
                  
                  <div class="image-slides-wrapper" style="position: relative; width: 100%; height: 500px; overflow: visible !important;">
                    
                    <!-- Slide 1 -->
                    <div class="project-image-slide" data-slide-index="0" style="display: flex; flex-direction: column; position: absolute; inset: 0; padding: 1.5rem 3.5rem 2rem 3.5rem; background: var(--bg-surface); border-radius: 12px; align-items: center; justify-content: flex-start; z-index: 1;">
                      <h4 style="margin: 0 0 1.5rem 0; font-size: 1.25rem; font-weight: 600; color: var(--text-primary); text-align: center;">Physical Quanser Hardware-in-the-Loop Setup</h4>
                      <div style="flex: 1; min-height: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%;">
                        <img src="ACT1.jpg" alt="Physical Quanser SRV02 Rotary Inverted Pendulum Hardware" onclick="openLightbox(this.src)" style="cursor: zoom-in; max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 8px;" />
                      </div>
                    </div>

                    <!-- Slide 2 -->
                    <div class="project-image-slide" data-slide-index="1" style="display: none; flex-direction: column; position: absolute; inset: 0; padding: 1.5rem 3.5rem 2rem 3.5rem; background: var(--bg-surface); border-radius: 12px; align-items: center; justify-content: flex-start; z-index: 1;">
                      <h4 style="margin: 0 0 1.5rem 0; font-size: 1.25rem; font-weight: 600; color: var(--text-primary); text-align: center;">State-Feedback Control Architecture & Hardware Validation</h4>
                      <div style="flex: 1; min-height: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; background: rgba(255, 255, 255, 0.03); border-radius: 8px; padding: 1rem; border: 1px solid var(--border-subtle);">
                        <img src="ACT2.png" alt="State-Feedback Control Architecture" onclick="openLightbox(this.src)" style="cursor: zoom-in; max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 4px;" />
                      </div>
                    </div>

                    <!-- Slide 3 -->
                    <div class="project-image-slide" data-slide-index="2" style="display: none; flex-direction: column; position: absolute; inset: 0; padding: 1.5rem 3.5rem 2rem 3.5rem; background: var(--bg-surface); border-radius: 12px; align-items: center; justify-content: flex-start; z-index: 1;">
                      <h4 style="margin: 0 0 1.5rem 0; font-size: 1.25rem; font-weight: 600; color: var(--text-primary); text-align: center;">Real-Time MATLAB/Simulink Hardware Monitoring</h4>
                      <div style="flex: 1; min-height: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; background: rgba(255, 255, 255, 0.03); border-radius: 8px; padding: 1rem; border: 1px solid var(--border-subtle);">
                        <img src="ACT3.jpg" alt="Live MATLAB Hardware Response Traces" onclick="openLightbox(this.src)" style="cursor: zoom-in; max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 4px;" />
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
                  As part of a three-member team, modeled and implemented closed-loop control of a Quanser rotary inverted pendulum, a nonlinear and inherently unstable control-system benchmark. The equations of motion were derived using the Euler–Lagrange formulation and linearized about the upright operating point to obtain a four-state representation of rotary-arm position and velocity and pendulum angle and velocity. Open-loop analysis confirmed instability through a positive pole at +7.06, while the system was verified to be controllable. A full-state feedback controller was then designed using pole placement, targeting a damping ratio of 0.7, natural frequency of 4 rad/s, pendulum-angle deviation below 15°, and control voltage below 10 V. The controller was implemented in MATLAB/Simulink and interfaced through Quanser QUARC/Q8 hardware with the SRV02 rotary servo and ROTPEN module. After resolving real-time HIL data-transfer issues, the completed hardware system successfully achieved self-balancing behavior when the pendulum was brought into the upright control region, with live arm, pendulum-angle, and motor-response signals monitored in MATLAB.
                </p>
                
                <div class="tech-stack-tags" style="margin-top:2rem;">
                  <span class="tech-tag">MATLAB / Simulink</span>
                  <span class="tech-tag">State-Space Control</span>
                  <span class="tech-tag">Pole Placement</span>
                  <span class="tech-tag">Quanser</span>
                  <span class="tech-tag">Hardware-in-the-Loop</span>
                  <span class="tech-tag">Mechatronics</span>
                </div>
              </div>`;

html = html.replace(oldDetail, newDetail);

fs.writeFileSync('index.html', html);
console.log("Replaced Pendulum project successfully");
