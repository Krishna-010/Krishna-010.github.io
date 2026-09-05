const fs = require('fs');

const projects = [
  {
    title: "Integrated Hip–Ankle Exoskeleton (M.S. Capstone)",
    tag: "Wearable Robotics",
    gridDesc: "Designed a four-actuator hip–ankle exoskeleton architecture and evaluated its feasibility using gait data from 18 subjects across 71 walking trials, analyzing actuator capability, power demand, and battery runtime.",
    detailDesc: "Developed a system-level architecture to integrate the EPIC Lab’s existing hip and ankle exoskeletons into a single four-actuator wearable platform for coordinated dual-joint assistance. I addressed actuator-packaging constraints by preserving hip actuator alignment at the anatomical joint while relocating ankle actuation to the pelvic structure through Bowden-cable transmission, then defined the electrical, sensing, safety, and centralized control architecture around a Jetson Orin Nano. To evaluate feasibility before physical prototyping, I developed a data-driven analysis using gait data from 18 subjects across 71 walking trials, modeling 20% biological joint-moment assistance under realistic actuator limits. The analysis showed mean actuator saturation of only 1.50% at the hip and 0.22% at the ankle, with 18.95–19.97 W mean electrical demand and an estimated 5.88–6.15 hours of average runtime, while identifying Bowden-cable efficiency and transient peak power as the primary constraints for future hardware validation.",
    techTags: ["MATLAB", "SolidWorks", "Jetson Orin Nano", "Biomechanics", "System Integration"],
    images: [
      "Figure 2.5, Final Integrated Hip–Ankle Exoskeleton Design",
      "Figure 2.4, Geometric Interference",
      "Figure 3.6, Multi-Subject Results"
    ]
  },
  {
    title: "Solar PV-Fed EV Battery Charger (B.Tech Capstone)",
    tag: "Power Electronics",
    gridDesc: "Designed, fabricated, and experimentally tested a 100 W cascaded SEPIC–Isolated Ćuk converter for EV battery charging, producing approximately 54 V output and validating operation with a 48 V battery load.",
    detailDesc: "Designed, simulated, fabricated, and experimentally tested a 100 W solar-PV-fed EV battery charger based on a cascaded SEPIC and Isolated Ćuk DC–DC converter. The SEPIC stage provided positive voltage conversion and supported a Perturb-and-Observe MPPT strategy, while the Isolated Ćuk stage introduced galvanic isolation and the required final voltage conversion. I modeled the PV source and converter behavior in PLECS, sized the power-stage components, and translated the design into a physical prototype operating from a 30 V source. Hardware validation used a Chroma programmable DC supply, Analog Discovery 2 gate signals, and a Keysight IntegraVision power analyzer with both resistive and 48 V battery loads. The prototype produced approximately 40 V after the SEPIC stage and 54 V at the final output, achieving approximately 80.6% efficiency with the resistive load and 77.7% with the battery load while exposing practical switching, wiring, and component losses that informed future design improvements.",
    techTags: ["Power Electronics", "PLECS", "DC–DC Converters", "MPPT", "Hardware Validation"],
    images: [
      "Figure 6.2, Hardware Setup with Battery Load",
      "Figure 2.1, Proposed Topology",
      "Figure 6.18, Battery Load Results"
    ]
  },
  {
    title: "ROS2-Based Gait Analysis & Exoskeleton Control",
    tag: "Control & Software",
    gridDesc: "Built a modular Python and ROS2 framework for sensor-data playback, gait-phase detection, assistive-control calculations, and motor-command generation.",
    detailDesc: "Built a modular Python and ROS2 framework for sensor-data playback, gait-phase detection, assistive-control calculations, and motor-command generation for a lower-limb exoskeleton. Implemented ROS2 publishers, subscribers, custom messages, configurable parameters, and launch files to create separate nodes for joint-state processing, ground-reaction-force analysis, and motor-side command conversion. Validated the end-to-end communication pipeline using experimental biomechanics data and documented the architecture through Git and GitHub for future hardware integration.",
    techTags: ["ROS2", "Python", "Git", "Systems Integration", "Control Framework"]
  },
  {
    title: "Health Monitoring Jacket",
    tag: "Embedded Systems",
    gridDesc: "Developed a wearable embedded health-monitoring system that integrated physiological sensors, a microcontroller, and wireless communication components into a jacket.",
    detailDesc: "Developed a wearable embedded health-monitoring system that integrated physiological sensors, a microcontroller, electronic circuitry, and wireless communication components into a jacket-based platform. Assembled the sensing and electronic hardware, supported circuit development, and implemented the data-acquisition functions required to collect and communicate physiological measurements. Tested sensor responses and system operation, performing iterative troubleshooting to improve measurement consistency and overall reliability.",
    techTags: ["Wearable Tech", "Data Acquisition", "Microcontrollers", "Circuitry"]
  },
  {
    title: "Smart Garage Door Automation System",
    tag: "Electromechanical & IoT",
    gridDesc: "Developed an electromechanical garage-access system integrating an Arduino UNO, ESP Wi-Fi module, RFID reader, and motor to support local and remote internet control.",
    detailDesc: "Developed an electromechanical garage-access system integrating an Arduino UNO, ESP Wi-Fi module, RFID reader, and motor to support both local credential-based access and remote internet control. Programmed the Arduino to validate authorized RFID tags and operate the garage-door motor. Created a Blynk-based remote interface that allowed authorized users to enter a code and control the garage door over the internet, successfully assembling and testing the complete hardware and software system.",
    techTags: ["Arduino", "IoT", "Electromechanical Systems", "Automation"]
  },
  {
    title: "Mobile Manipulation - youBot Pick-and-Place Control",
    tag: "Robotics & Manipulation",
    gridDesc: "Project details and outcomes will be updated here shortly.",
    detailDesc: "Project details and outcomes will be updated here shortly.",
    techTags: ["Mobile Robotics", "Kinematics", "youBot"]
  },
  {
    title: "Voice Cloning Using VALL-E-X",
    tag: "AI & Audio Processing",
    gridDesc: "Project details and outcomes will be updated here shortly.",
    detailDesc: "Project details and outcomes will be updated here shortly.",
    techTags: ["VALL-E-X", "Generative AI", "Audio Processing"]
  },
  {
    title: "Wireless Fetal Heart Rate Monitor",
    tag: "Biomedical & Wireless",
    gridDesc: "Project details and outcomes will be updated here shortly.",
    detailDesc: "Project details and outcomes will be updated here shortly.",
    techTags: ["Biomedical Sensors", "Wireless Comms", "Signal Processing"]
  },
  {
    title: "Indian Real Estate Price Prediction",
    tag: "Machine Learning",
    gridDesc: "Project details and outcomes will be updated here shortly.",
    detailDesc: "Project details and outcomes will be updated here shortly.",
    techTags: ["Machine Learning", "Data Analytics", "Python"]
  },
  {
    title: "Big Data Analytics in Smart Grid",
    tag: "Data Analytics",
    gridDesc: "Project details and outcomes will be updated here shortly.",
    detailDesc: "Project details and outcomes will be updated here shortly.",
    techTags: ["Big Data", "Smart Grid", "Analytics"]
  },
  {
    title: "Rotary Inverted Pendulum",
    tag: "Control Systems",
    gridDesc: "Project details and outcomes will be updated here shortly.",
    detailDesc: "Project details and outcomes will be updated here shortly.",
    techTags: ["Control Theory", "Dynamics", "MATLAB"]
  }
];

let gridHTML = `<div class="projects-grid" id="projects-grid-list">\n`;
let carouselHTML = `<div class="carousel-container" style="position: relative; flex: 1; padding: 0 4rem;">\n  <button class="carousel-btn prev-btn" onclick="prevProject()" aria-label="Previous Project">‹</button>\n  <button class="carousel-btn next-btn" onclick="nextProject()" aria-label="Next Project">›</button>\n\n`;

projects.forEach((proj, idx) => {
  // Grid Item
  gridHTML += `
              <div class="project-item-card" onclick="openProjectDetail(${idx})" style="cursor: pointer;">
                <div class="project-meta-row">
                  <span class="project-tag">${proj.tag}</span>
                </div>
                <h3 class="project-title">${proj.title}</h3>
                <p class="project-summary">
                  ${proj.gridDesc}
                </p>
                <div class="project-tech-stack">
                  ${proj.techTags.map(t => `<span class="tech-badge">${t}</span>`).join('\n                  ')}
                </div>
              </div>\n`;

  // Image section
  let imageHTML = '';
  if (proj.images && proj.images.length > 0) {
    imageHTML = `
                <div class="project-image-carousel" data-project-id="${idx}" style="position: relative; width: 100%; margin-bottom: 2rem; border-radius: 12px; overflow: hidden; background: var(--bg-surface); border: 1px solid var(--border-subtle);">
                  <button onclick="prevProjectImage(${idx})" style="position: absolute; left: 0.5rem; top: 50%; transform: translateY(-50%); background: var(--bg-panel); border: 1px solid var(--border-subtle); color: var(--text-primary); border-radius: 50%; width: 36px; height: 36px; z-index: 2; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">‹</button>
                  <button onclick="nextProjectImage(${idx})" style="position: absolute; right: 0.5rem; top: 50%; transform: translateY(-50%); background: var(--bg-panel); border: 1px solid var(--border-subtle); color: var(--text-primary); border-radius: 50%; width: 36px; height: 36px; z-index: 2; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">›</button>
                  
                  <div class="image-slides-wrapper" style="position: relative; width: 100%; height: 350px;">
                    ${proj.images.map((imgText, imgIdx) => `
                    <div class="project-image-slide" data-slide-index="${imgIdx}" style="display: ${imgIdx === 0 ? 'flex' : 'none'}; position: absolute; inset: 0; align-items: center; justify-content: center; padding: 2rem; text-align: center; color: var(--text-muted); font-family: var(--font-mono); font-size: 0.95rem; letter-spacing: 0.5px;">
                      [ ${imgText} ]
                    </div>`).join('')}
                  </div>
                  
                  <div class="image-carousel-indicators" style="position: absolute; bottom: 1rem; left: 0; right: 0; display: flex; justify-content: center; gap: 0.5rem; z-index: 2;">
                    ${proj.images.map((_, imgIdx) => `
                    <div class="img-dot" data-dot-index="${imgIdx}" style="width: 8px; height: 8px; border-radius: 50%; background: ${imgIdx === 0 ? 'var(--emerald-primary)' : 'var(--text-muted)'}; opacity: ${imgIdx === 0 ? '1' : '0.5'}; transition: all 0.2s ease;"></div>
                    `).join('')}
                  </div>
                </div>`;
  } else {
    imageHTML = `
                <div class="project-image-placeholder" style="width:100%; height:300px; background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:12px; margin-bottom:2rem; display:flex; align-items:center; justify-content:center; color:var(--text-muted); font-family:var(--font-mono); letter-spacing:1px; text-align: center; padding: 1rem;">
                  [ Image / Demo Placeholder for ${proj.title} ]
                </div>`;
  }
  
  let capstoneLinkHTML = '';
  if (idx === 0) {
    capstoneLinkHTML = `
                <div style="margin-bottom: 1.5rem;">
                  <a href="#" onclick="document.querySelector('[data-tab=experience]').click(); setTimeout(() => { let el = document.getElementById('ms-robotics-exp-card'); let card = el.querySelector('.timeline-card'); if(card && !card.classList.contains('expanded')) card.click(); setTimeout(() => { el.scrollIntoView({behavior: 'smooth', block: 'center'}); }, 450); }, 500); return false;" class="capstone-link" style="display: inline-block;">View in Education Timeline</a>
                </div>`;
  } else if (idx === 1) {
    capstoneLinkHTML = `
                <div style="margin-bottom: 1.5rem;">
                  <a href="#" onclick="document.querySelector('[data-tab=experience]').click(); setTimeout(() => { let el = document.getElementById('btech-exp-card'); let card = el.querySelector('.timeline-card'); if(card && !card.classList.contains('expanded')) card.click(); setTimeout(() => { el.scrollIntoView({behavior: 'smooth', block: 'center'}); }, 450); }, 500); return false;" class="capstone-link" style="display: inline-block;">View in Education Timeline</a>
                </div>`;
  }

  // Carousel Item
  carouselHTML += `
              <!-- Project ${idx} Detail -->
              <div class="project-detail-content" data-project-index="${idx}" ${idx !== 0 ? 'style="display:none;"' : ''}>
                <h2 class="panel-title" style="margin-bottom: 0.5rem;">${proj.title}</h2>
                <div class="project-meta-row" style="margin-bottom: 1.5rem;">
                  <span class="project-tag">${proj.tag}</span>
                </div>
                ${imageHTML}
                <p style="font-size: 1.05rem; line-height: 1.6; color: var(--text-secondary); margin-bottom: 1rem;">
                  ${proj.detailDesc}
                </p>
                ${capstoneLinkHTML}
                <div class="tech-stack-tags" style="margin-top:2rem;">
                  ${proj.techTags.map(t => `<span class="tech-tag">${t}</span>`).join('\n                  ')}
                </div>
              </div>\n`;
});

gridHTML += `            </div>`;
carouselHTML += `            </div>`;

const fullHTML = `          <!-- MASTER VIEW: Projects Grid -->
          <div id="projects-master-view">
            <div class="panel-header">
              <h2 class="panel-title"><span>🚀</span> Featured Projects</h2>
              <p class="panel-description">Wearable robotic systems, industrial automation, and power electronics.</p>
            </div>

            ${gridHTML}
          </div>

          <!-- DETAIL VIEW: Carousel -->
          <div id="projects-detail-view" style="display: none; height: 100%; display: none; flex-direction: column;">
            <div class="detail-top-bar" style="margin-bottom: 2rem; border-bottom: 1px solid var(--border-subtle); padding-bottom: 1rem;">
              <a href="#" onclick="closeProjectDetail(); return false;" class="capstone-link" style="font-size: 1.1rem; font-weight: 500;">⊞ View All Projects</a>
            </div>

            ${carouselHTML}
          </div>`;

fs.writeFileSync('projects_section.html', fullHTML);
