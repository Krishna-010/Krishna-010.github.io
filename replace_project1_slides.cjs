const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const targetProject = `data-project-id="1"`;
const projIndex = html.indexOf(targetProject);
if (projIndex === -1) {
  console.log("Could not find project 1");
  process.exit(1);
}

const targetStartStr = `<div class="image-slides-wrapper"`;
const targetEndStr = `</div>
                  
                  <div class="image-carousel-indicators"`;

let startIndex = html.indexOf(targetStartStr, projIndex);
if (startIndex === -1) {
  console.log("Could not find start");
  process.exit(1);
}

let searchFrom = startIndex + targetStartStr.length;
let endIndex = html.indexOf(targetEndStr, searchFrom);

if (endIndex === -1) {
    const altEnd = `<div class="image-carousel-indicators"`;
    endIndex = html.indexOf(altEnd, searchFrom);
    if (endIndex === -1) {
        console.log("Could not find end");
        process.exit(1);
    }
    endIndex = html.lastIndexOf('</div>', endIndex);
}

const replacement = `<div class="image-slides-wrapper" style="position: relative; width: 100%; height: 500px;">
                    
                    <!-- Slide 1: Physical Build -->
                    <div class="project-image-slide" data-slide-index="0" style="display: flex; flex-direction: column; position: absolute; inset: 0; padding: 1.5rem 3.5rem 2rem 3.5rem; background: var(--bg-surface); align-items: center; justify-content: flex-start; z-index: 1;">
                      <h4 style="margin: 0 0 0.25rem 0; font-size: 1.25rem; font-weight: 600; color: var(--text-primary); text-align: center;">Hardware Setup with 48V Battery Load</h4>
                      <p style="margin: 0 0 1.5rem 0; font-size: 0.9rem; color: var(--text-muted); text-align: center;">Physical prototype validation using a programmable DC supply, power analyzer, and 48V battery bank.</p>
                      
                      <div style="flex: 1; min-height: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%;">
                        <img src="Hardware_battery.jpg" alt="Hardware Setup with Battery Load" style="max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 8px;" />
                      </div>
                    </div>

                    <!-- Slide 2: System Architecture -->
                    <div class="project-image-slide" data-slide-index="1" style="display: none; flex-direction: column; position: absolute; inset: 0; padding: 1.5rem 3.5rem 2rem 3.5rem; background: var(--bg-surface); align-items: center; justify-content: flex-start; z-index: 1;">
                      <h4 style="margin: 0 0 0.25rem 0; font-size: 1.25rem; font-weight: 600; color: var(--text-primary); text-align: center;">Cascaded Converter Topology</h4>
                      <p style="margin: 0 0 1.5rem 0; font-size: 0.9rem; color: var(--text-muted); text-align: center;">System architecture integrating a SEPIC converter (for MPPT) and an Isolated Ćuk converter (for galvanic isolation and final voltage conversion).</p>
                      
                      <div style="flex: 1; min-height: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; background: rgba(255, 255, 255, 0.03); border-radius: 8px; padding: 1rem; border: 1px solid var(--border-subtle);">
                        <img src="EV Charging.jpg" alt="Proposed EV Charging Topology" style="max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 4px;" />
                      </div>
                    </div>

                    <!-- Slide 3: Experimental Results -->
                    <div class="project-image-slide" data-slide-index="2" style="display: none; flex-direction: column; position: absolute; inset: 0; padding: 1.5rem 3.5rem 2.5rem 3.5rem; background: var(--bg-surface); align-items: center; justify-content: flex-start; z-index: 1;">
                      <h4 style="margin: 0 0 0.25rem 0; font-size: 1.25rem; font-weight: 600; color: var(--text-primary); text-align: center;">Battery-Load Experimental Results</h4>
                      <p style="margin: 0 0 1rem 0; font-size: 0.9rem; color: var(--text-muted); text-align: center;">Input, intermediate, and output electrical measurements alongside subsystem efficiencies captured during the 48V battery-load test.</p>
                      
                      <div style="display: flex; flex-direction: column; gap: 0.75rem; width: 100%; flex: 1; min-height: 0; overflow-y: auto; padding-right: 0.5rem;">
                        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; background: rgba(255, 255, 255, 0.03); border-radius: 8px; padding: 0.5rem; border: 1px solid var(--border-subtle); flex: 1; min-height: 0;">
                          <img src="VIin_VIm_VIout.jpg" alt="V, I, P Waveforms" style="max-width: 100%; max-height: 100%; object-fit: contain; flex: 1; min-height: 0;" />
                          <span style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.25rem; text-align: center; white-space: nowrap;">Voltage, Current, and Power Waveforms</span>
                        </div>
                        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; background: rgba(255, 255, 255, 0.03); border-radius: 8px; padding: 0.5rem; border: 1px solid var(--border-subtle); flex: 1; min-height: 0;">
                          <img src="VIin_VIm_VIout1eff.jpg" alt="SEPIC Efficiency" style="max-width: 100%; max-height: 100%; object-fit: contain; flex: 1; min-height: 0;" />
                          <span style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.25rem; text-align: center; white-space: nowrap;">SEPIC Stage & Overall System Efficiency</span>
                        </div>
                        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; background: rgba(255, 255, 255, 0.03); border-radius: 8px; padding: 0.5rem; border: 1px solid var(--border-subtle); flex: 1; min-height: 0;">
                          <img src="VIin_VIm_VIout1eff1.jpg" alt="Isolated Ćuk Efficiency" style="max-width: 100%; max-height: 100%; object-fit: contain; flex: 1; min-height: 0;" />
                          <span style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.25rem; text-align: center; white-space: nowrap;">Isolated Ćuk Stage & Overall System Efficiency</span>
                        </div>
                      </div>
                    </div>
                  </div>`;

let newHtml = html.substring(0, startIndex) + replacement + html.substring(endIndex);

fs.writeFileSync('index.html', newHtml);
console.log('Replaced project 1 successfully');
