const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const newCard = `
              <div class="project-item-card" onclick="openProjectDetail(4)" style="cursor: pointer;">
                <div class="project-meta-row">
                  <span class="project-tag">Robot Kinematics & Control</span>
                </div>
                <h3 class="project-title">Mobile Manipulation: youBot Pick-and-Place <span style="display:block; font-size:0.8rem; color:var(--text-muted); margin-top:0.25rem; font-weight:normal;">Modern Robotics Capstone &mdash; Northwestern University / Coursera</span></h3>
                <p class="project-summary">
                  Implemented a complete mobile-manipulation pipeline for the KUKA youBot, combining chassis odometry, eight-segment trajectory generation, Jacobian-based feedback control, and simulated pick-and-place execution in CoppeliaSim.
                </p>
                <div class="project-tech-stack">
                  <span class="tech-badge">Python</span>
                  <span class="tech-badge">Robot Kinematics</span>
                  <span class="tech-badge">Feedback Control</span>
                  <span class="tech-badge">Jacobian Methods</span>
                  <span class="tech-badge">Trajectory Generation</span>
                  <span class="tech-badge">CoppeliaSim</span>
                </div>
              </div>
`;

const newDetail = `
              <!-- Project 4 Detail -->
              <div class="project-detail-content" data-project-index="4" style="display:none;">
                <h2 class="panel-title" style="margin-bottom: 0.25rem;">Mobile Manipulation: youBot Pick-and-Place</h2>
                <div style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 1.5rem; letter-spacing: 0.02em;">Modern Robotics Capstone &mdash; Northwestern University / Coursera</div>
                <div class="project-meta-row" style="margin-bottom: 1.5rem;">
                  <span class="project-tag">Robot Kinematics & Control</span>
                </div>
                
                <div class="project-image-carousel" data-project-id="4" style="position: relative; width: 100%; margin-bottom: 2rem; border-radius: 12px; overflow: visible !important; background: var(--bg-surface); border: 1px solid var(--border-subtle);">
                  <button onclick="prevProjectImage(4)" style="position: absolute; left: 0.5rem; top: 50%; transform: translateY(-50%); background: var(--bg-panel); border: 1px solid var(--border-subtle); color: var(--text-primary); border-radius: 50%; width: 36px; height: 36px; z-index: 2; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">‹</button>
                  <button onclick="nextProjectImage(4)" style="position: absolute; right: 0.5rem; top: 50%; transform: translateY(-50%); background: var(--bg-panel); border: 1px solid var(--border-subtle); color: var(--text-primary); border-radius: 50%; width: 36px; height: 36px; z-index: 2; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">›</button>
                  
                  <div class="image-slides-wrapper" style="position: relative; width: 100%; height: 500px; overflow: visible !important;">
                    
                    <!-- Slide 0 -->
                    <div class="project-image-slide" style="display: flex; width: 100%; height: 100%; flex-direction: column;">
                      <div class="slide-caption" style="padding: 1rem; background: var(--bg-panel); border-bottom: 1px solid var(--border-subtle); border-top-left-radius: 12px; border-top-right-radius: 12px; text-align: center; height: 80px; display: flex; flex-direction: column; justify-content: center;">
                        <h4 style="margin: 0; font-size: 1.1rem; color: var(--text-primary);">Simulated Mobile Pick-and-Place Execution in CoppeliaSim</h4>
                      </div>
                      <div style="flex: 1; display: flex; align-items: center; justify-content: center; padding: 2rem; background: var(--bg-surface); border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; height: calc(100% - 80px);">
                        <img src="CoppeliaSim_Execution.png" alt="CoppeliaSim Mobile Manipulation Execution" onclick="openLightbox(this.src)" style="cursor: zoom-in; max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 4px;" />
                      </div>
                    </div>

                    <!-- Slide 1 -->
                    <div class="project-image-slide" style="display: none; width: 100%; height: 100%; flex-direction: column;">
                      <div class="slide-caption" style="padding: 1rem; background: var(--bg-panel); border-bottom: 1px solid var(--border-subtle); border-top-left-radius: 12px; border-top-right-radius: 12px; text-align: center; height: 80px; display: flex; flex-direction: column; justify-content: center;">
                        <h4 style="margin: 0; font-size: 1.1rem; color: var(--text-primary);">8-Segment End-Effector Reference Trajectory</h4>
                      </div>
                      <div style="flex: 1; display: flex; align-items: center; justify-content: center; padding: 2rem; background: var(--bg-surface); border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; height: calc(100% - 80px);">
                        <img src="youbot_trajectory.svg" alt="Eight-Segment SE(3) Reference Trajectory" onclick="openLightbox(this.src)" style="cursor: zoom-in; max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 4px;" />
                      </div>
                    </div>

                    <!-- Slide 2 -->
                    <div class="project-image-slide" style="display: none; width: 100%; height: 100%; flex-direction: column;">
                      <div class="slide-caption" style="padding: 1rem; background: var(--bg-panel); border-bottom: 1px solid var(--border-subtle); border-top-left-radius: 12px; border-top-right-radius: 12px; text-align: center; height: 80px; display: flex; flex-direction: column; justify-content: center;">
                        <h4 style="margin: 0; font-size: 1.1rem; color: var(--text-primary);">Task-Space Feedback Control & Jacobian Pseudoinverse Architecture</h4>
                      </div>
                      <div style="flex: 1; display: flex; align-items: center; justify-content: center; padding: 2rem; background: var(--bg-surface); border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; height: calc(100% - 80px);">
                        <img src="youbot_controller.svg" alt="Closed-Loop Feedback Controller Pipeline" onclick="openLightbox(this.src)" style="cursor: zoom-in; max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 4px;" />
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
                  Developed a complete Python-based mobile-manipulation pipeline for the KUKA youBot as the final capstone of the Modern Robotics specialization. The implementation combined mobile-base odometry, manipulator kinematics, an eight-segment end-effector reference trajectory, gripper sequencing, and closed-loop task-space control for a simulated pick-and-place operation. Robot configuration was propagated numerically at a 10 ms timestep, while the controller combined feedforward motion with PI feedback and used the combined mobile-base and arm Jacobian with a pseudoinverse solution to convert end-effector twist commands into wheel and joint velocities. The complete pipeline generated configuration and tracking-error histories as CSV outputs for CoppeliaSim visualization, allowing end-effector tracking performance and gripper timing to be inspected throughout the task. The final simulation successfully executed the full mobile manipulation sequence from cube acquisition through transport and placement.
                </p>
                
                <div class="tech-stack-tags" style="margin-top:2rem;">
                  <span class="tech-tag">Python</span>
                  <span class="tech-tag">Robot Kinematics</span>
                  <span class="tech-tag">Feedback Control</span>
                  <span class="tech-tag">Jacobian Methods</span>
                  <span class="tech-tag">Trajectory Generation</span>
                  <span class="tech-tag">CoppeliaSim</span>
                </div>
              </div>
`;

// Insert the card before openProjectDetail(5)
html = html.replace('<div class="project-item-card" onclick="openProjectDetail(5)"', newCard + '\n              <div class="project-item-card" onclick="openProjectDetail(5)"');

// Insert the detail content before <!-- Project 5 Detail -->
html = html.replace('<!-- Project 5 Detail -->', newDetail + '\n              <!-- Project 5 Detail -->');

fs.writeFileSync('index.html', html);
console.log("HTML successfully updated with Mobile Manipulation project.");
