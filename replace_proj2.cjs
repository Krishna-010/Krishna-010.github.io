const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Replace Master Grid Card for Project 2
const oldMasterGridCard = `<div class="project-item-card" onclick="openProjectDetail(2)" style="cursor: pointer;">
                <div class="project-meta-row">
                  <span class="project-tag">Control & Software</span>
                </div>
                <h3 class="project-title">ROS2-Based Gait Analysis & Exoskeleton Control</h3>
                <p class="project-summary">
                  Built a modular Python and ROS2 framework for sensor-data playback, gait-phase detection, assistive-control calculations, and motor-command generation.
                </p>
                <div class="project-tech-stack">
                  <span class="tech-badge">ROS2</span>
                  <span class="tech-badge">Python</span>
                  <span class="tech-badge">Git</span>
                  <span class="tech-badge">Systems Integration</span>
                  <span class="tech-badge">Control Framework</span>
                </div>
              </div>`;

const newMasterGridCard = `<div class="project-item-card" onclick="openProjectDetail(2)" style="cursor: pointer;">
                <div class="project-meta-row">
                  <span class="project-tag">IoT & Embedded Systems</span>
                </div>
                <h3 class="project-title">Smart Garage Door Opener</h3>
                <p class="project-summary">
                  IoT-based access-control prototype combining RFID authentication, remote monitoring, and motorized garage-door control using Arduino and Blynk.
                </p>
                <div class="project-tech-stack">
                  <span class="tech-badge">Arduino</span>
                  <span class="tech-badge">Embedded Systems</span>
                  <span class="tech-badge">RFID</span>
                  <span class="tech-badge">ESP8266</span>
                  <span class="tech-badge">Blynk IoT</span>
                  <span class="tech-badge">Motor Control</span>
                </div>
              </div>`;

html = html.replace(oldMasterGridCard, newMasterGridCard);
if (html.includes(newMasterGridCard)) {
    console.log("Successfully replaced Master Grid Card");
} else {
    console.log("Failed to replace Master Grid Card");
}

fs.writeFileSync('index.html', html);
