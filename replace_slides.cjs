const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const targetStart = `<div class="image-slides-wrapper" style="position: relative; width: 100%; height: 350px;">`;
const targetEnd = `</div>
                  
                  <div class="image-carousel-indicators"`;

let startIndex = html.indexOf(targetStart);
if (startIndex === -1) {
  console.log("Could not find start");
  process.exit(1);
}

// Find the corresponding end
let searchFrom = startIndex + targetStart.length;
let endIndex = html.indexOf(targetEnd, searchFrom);

if (endIndex === -1) {
    // try finding the indicators div another way
    const altEnd = `<div class="image-carousel-indicators"`;
    endIndex = html.indexOf(altEnd, searchFrom);
    if (endIndex === -1) {
        console.log("Could not find end");
        process.exit(1);
    }
    // we need to step back to remove the closing div of the wrapper
    endIndex = html.lastIndexOf('</div>', endIndex);
}

const replacement = `<div class="image-slides-wrapper" style="position: relative; width: 100%; height: 500px;">
                    
                    <!-- Slide 1: Final Integrated Architecture -->
                    <div class="project-image-slide" data-slide-index="0" style="display: flex; flex-direction: column; position: absolute; inset: 0; padding: 1.5rem 3.5rem 2rem 3.5rem; background: var(--bg-surface); align-items: center; justify-content: flex-start; z-index: 1;">
                      <h4 style="margin: 0 0 0.25rem 0; font-size: 1.25rem; font-weight: 600; color: var(--text-primary); text-align: center;">Final Integrated Hip–Ankle Exoskeleton Design</h4>
                      <p style="margin: 0 0 1.5rem 0; font-size: 0.9rem; color: var(--text-muted); text-align: center;">Consolidation of hip and ankle actuators onto a single pelvic structure to resolve packaging constraints.</p>
                      
                      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; width: 100%; flex: 1; min-height: 0;">
                        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 0;">
                          <img src="full_back.jpg" alt="Rear View" style="max-width: 100%; max-height: 100%; object-fit: contain; flex: 1; min-height: 0; border-radius: 8px;" />
                          <span style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.5rem; text-align: center;">Rear View</span>
                        </div>
                        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 0;">
                          <img src="full_angle.jpg" alt="Angled View" style="max-width: 100%; max-height: 100%; object-fit: contain; flex: 1; min-height: 0; border-radius: 8px;" />
                          <span style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.5rem; text-align: center;">Angled View</span>
                        </div>
                        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 0;">
                          <img src="dynamic.jpg" alt="Exploded View" style="max-width: 100%; max-height: 100%; object-fit: contain; flex: 1; min-height: 0; border-radius: 8px;" />
                          <span style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.5rem; text-align: center;">Actuator Exploded View</span>
                        </div>
                      </div>
                    </div>

                    <!-- Slide 2: Engineering Problem Context -->
                    <div class="project-image-slide" data-slide-index="1" style="display: none; flex-direction: column; position: absolute; inset: 0; padding: 1.5rem 3.5rem 2rem 3.5rem; background: var(--bg-surface); align-items: center; justify-content: flex-start; z-index: 1;">
                      <h4 style="margin: 0 0 0.25rem 0; font-size: 1.25rem; font-weight: 600; color: var(--text-primary); text-align: center;">Geometric Actuator Interference</h4>
                      <p style="margin: 0 0 1.5rem 0; font-size: 0.9rem; color: var(--text-muted); text-align: center;">Initial packaging conflict between the pelvic brace and back-mounted ankle actuators prior to integration.</p>
                      
                      <div style="flex: 1; min-height: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%;">
                        <img src="Interference.jpg" alt="Actuator Interference" style="max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 8px;" />
                      </div>
                    </div>

                    <!-- Slide 3: Quantitative Feasibility Analysis -->
                    <div class="project-image-slide" data-slide-index="2" style="display: none; flex-direction: column; position: absolute; inset: 0; padding: 1.5rem 3.5rem 2.5rem 3.5rem; background: var(--bg-surface); align-items: center; justify-content: flex-start; z-index: 1;">
                      <h4 style="margin: 0 0 0.25rem 0; font-size: 1.25rem; font-weight: 600; color: var(--text-primary); text-align: center;">Multi-Subject Feasibility Results</h4>
                      <p style="margin: 0 0 1rem 0; font-size: 0.9rem; color: var(--text-muted); text-align: center;">Evaluation of electrical demand, estimated battery runtime, and actuator saturation across 18 subjects (71 trials).</p>
                      
                      <div style="display: grid; grid-template-columns: repeat(6, 1fr); gap: 0.75rem; width: 100%; flex: 1; min-height: 0;">
                        <div style="grid-column: span 2; display: flex; flex-direction: column; align-items: center; justify-content: center; background: rgba(255, 255, 255, 0.03); border-radius: 8px; padding: 0.5rem; border: 1px solid var(--border-subtle); min-height: 0;">
                          <img src="fig_mean_elec_power.png" alt="Mean Electrical Power" style="max-width: 100%; max-height: 100%; object-fit: contain; flex: 1; min-height: 0;" />
                          <span style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.25rem; text-align: center; white-space: nowrap;">Mean Electrical Power</span>
                        </div>
                        <div style="grid-column: span 2; display: flex; flex-direction: column; align-items: center; justify-content: center; background: rgba(255, 255, 255, 0.03); border-radius: 8px; padding: 0.5rem; border: 1px solid var(--border-subtle); min-height: 0;">
                          <img src="fig_peak_elec_power.png" alt="Peak Electrical Power" style="max-width: 100%; max-height: 100%; object-fit: contain; flex: 1; min-height: 0;" />
                          <span style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.25rem; text-align: center; white-space: nowrap;">Peak Electrical Power</span>
                        </div>
                        <div style="grid-column: span 2; display: flex; flex-direction: column; align-items: center; justify-content: center; background: rgba(255, 255, 255, 0.03); border-radius: 8px; padding: 0.5rem; border: 1px solid var(--border-subtle); min-height: 0;">
                          <img src="fig_runtime.png" alt="Battery Runtime" style="max-width: 100%; max-height: 100%; object-fit: contain; flex: 1; min-height: 0;" />
                          <span style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.25rem; text-align: center; white-space: nowrap;">Est. Battery Runtime</span>
                        </div>
                        <div style="grid-column: 2 / span 2; display: flex; flex-direction: column; align-items: center; justify-content: center; background: rgba(255, 255, 255, 0.03); border-radius: 8px; padding: 0.5rem; border: 1px solid var(--border-subtle); min-height: 0;">
                          <img src="fig_desired_vs_delivered_torque.png" alt="Motor Torque" style="max-width: 100%; max-height: 100%; object-fit: contain; flex: 1; min-height: 0;" />
                          <span style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.25rem; text-align: center; white-space: nowrap;">Desired vs Delivered Torque</span>
                        </div>
                        <div style="grid-column: 4 / span 2; display: flex; flex-direction: column; align-items: center; justify-content: center; background: rgba(255, 255, 255, 0.03); border-radius: 8px; padding: 0.5rem; border: 1px solid var(--border-subtle); min-height: 0;">
                          <img src="fig_saturation_percentage.png" alt="Saturation Percentage" style="max-width: 100%; max-height: 100%; object-fit: contain; flex: 1; min-height: 0;" />
                          <span style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.25rem; text-align: center; white-space: nowrap;">Saturation Over Gait Cycle</span>
                        </div>
                      </div>
                    </div>
                  </div>`;

let newHtml = html.substring(0, startIndex) + replacement + html.substring(endIndex);

fs.writeFileSync('index.html', newHtml);
console.log('Replaced');
