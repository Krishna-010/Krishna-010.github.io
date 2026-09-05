const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Update Featured Card Summary
const oldCardSummary = `<p class="project-summary">
                  IoT-based access-control prototype combining RFID authentication, remote monitoring, and motorized garage-door control using Arduino and Blynk.
                </p>`;
const newCardSummary = `<p class="project-summary">
                  Built an IoT-enabled garage-door prototype integrating RFID access control, Arduino-based motor actuation, and Blynk cloud monitoring with remote web and mobile operation.
                </p>`;

html = html.replace(oldCardSummary, newCardSummary);

// 2. Update Detailed Description
const oldDetailText = `<p style="font-size: 1.05rem; line-height: 1.6; color: var(--text-secondary); margin-bottom: 1rem;">
                  As part of a four-person undergraduate team, we developed a real-time working IoT garage-door prototype using an Arduino Uno, RC522 RFID reader, L298N motor driver, DC motor, ESP8266 Wi-Fi module, and Blynk Cloud. The system was designed to handle local access control by checking RFID UIDs for authorization; approved users triggered motorized door operation and generated status updates through Blynk, while unauthorized tags were actively rejected and reported. Additionally, the system supported remote actuation through authenticated Blynk mobile and web controls, resulting in a fully integrated hardware and cloud-based access solution.
                </p>`;
                
const newDetailText = `<p style="font-size: 1.05rem; line-height: 1.6; color: var(--text-secondary); margin-bottom: 1rem;">
                  As part of a four-member team, developed a working IoT-enabled garage-door prototype combining local RFID authentication with remote monitoring and control. An Arduino Uno processed UID data from an RC522 RFID reader to determine whether access was authorized, while an L298N motor driver controlled the DC motor representing garage-door motion. An ESP8266 Wi-Fi module connected the system to Blynk Cloud, enabling access information to be monitored through both mobile and web interfaces. Authorized RFID tags triggered the motorized door sequence and generated user-specific status information, while unauthorized tags were denied access and reported to the user. Credential-protected virtual controls also enabled remote door operation without an RFID tag. The completed prototype successfully integrated and demonstrated all three core functions—RFID-based access control, physical motor actuation, and cloud-connected remote monitoring/control—and was tested and debugged to remove the noticeable errors identified during development.
                </p>`;

html = html.replace(oldDetailText, newDetailText);

// 3. Remove the 3rd image slide (Circuit Schematic) and the 3rd dot
const slide3HTML = `<!-- Slide 3 -->
                    <div class="project-image-slide" data-slide-index="2" style="display: none; flex-direction: column; position: absolute; inset: 0; padding: 1.5rem 3.5rem 2rem 3.5rem; background: var(--bg-surface); border-radius: 12px; align-items: center; justify-content: flex-start; z-index: 1;">
                      <h4 style="margin: 0 0 1.5rem 0; font-size: 1.25rem; font-weight: 600; color: var(--text-primary); text-align: center;">Circuit Schematic & Component Wiring</h4>
                      <div style="flex: 1; min-height: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; background: rgba(255, 255, 255, 0.03); border-radius: 8px; padding: 1rem; border: 1px solid var(--border-subtle);">
                        <img src="IOT1Picture3.png" alt="Circuit Schematic" onclick="openLightbox(this.src)" style="cursor: zoom-in; max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 4px;" />
                      </div>
                    </div>`;

html = html.replace(slide3HTML, '');

const dot3HTML = `<div class="img-dot" data-dot-index="2" style="width: 8px; height: 8px; border-radius: 50%; background: var(--text-muted); opacity: 0.5; transition: all 0.2s ease;"></div>`;

// There are multiple dot3s for different carousels, let's target the exact block for Project 2
const dotsBlockRegex = /<div class="image-carousel-indicators" style="position: absolute; bottom: 1rem; left: 0; right: 0; display: flex; justify-content: center; gap: 0\.5rem; z-index: 2;">\s*<div class="img-dot" data-dot-index="0"[^>]+><\/div>\s*<div class="img-dot" data-dot-index="1"[^>]+><\/div>\s*<div class="img-dot" data-dot-index="2" style="width: 8px; height: 8px; border-radius: 50%; background: var\(--text-muted\); opacity: 0\.5; transition: all 0\.2s ease;"><\/div>\s*<\/div>/g;

// Instead of regex, let's just find the block for Project 2
const project2Split = html.split('data-project-index="2"');
if (project2Split.length > 1) {
    let p2Section = project2Split[1];
    p2Section = p2Section.replace(dot3HTML, '');
    html = project2Split[0] + 'data-project-index="2"' + p2Section;
}

fs.writeFileSync('index.html', html);
console.log('Successfully updated Garage Door Opener content and imagery.');
