import re

html_content = """
            <!-- 1. Volunteer (Most Recent) -->
            <div class="timeline-item">
              <div class="timeline-date-side">Jun 2026 – Aug 2026</div>
              <span class="timeline-marker"></span>
              <div class="timeline-card expanded" onclick="toggleAccordion(this)">
                <div class="timeline-header">
                  <div>
                    <h3 class="timeline-role">Volunteer</h3>
                    <p class="timeline-org">EPIC Lab, Georgia Tech</p>
                  </div>
                  <span class="timeline-date">Jun 2026 – Aug 2026</span>
                </div>
                <div class="timeline-body">
                  <p>During my time as a volunteer at Georgia Tech’s EPIC Lab, I supported ongoing research involving lower-limb hip and ankle exoskeleton systems through a combination of experimental support, hands-on mechatronics work, and data analysis. My responsibilities included preparing equipment for data-collection sessions, assisting with experiment setup and execution, and performing hardware checks, assembly, maintenance, and troubleshooting of exoskeleton components. I also contributed to processing and visualizing experimental data, helping support the interpretation of results from ongoing studies in wearable robotics.</p>
                  <div class="tech-stack-tags">
                    <span class="tech-tag">Wearable Robotics</span>
                    <span class="tech-tag">Mechatronics</span>
                    <span class="tech-tag">Data Analysis</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 2. Research Assistant -->
            <div class="timeline-item">
              <div class="timeline-date-side">May 2025 – May 2026</div>
              <span class="timeline-marker"></span>
              <div class="timeline-card" onclick="toggleAccordion(this)">
                <div class="timeline-header">
                  <div>
                    <h3 class="timeline-role">Research Assistant</h3>
                    <p class="timeline-org">EPIC Lab, Georgia Tech</p>
                  </div>
                  <span class="timeline-date">May 2025 – May 2026</span>
                </div>
                <div class="timeline-body">
                  <p>During my time as a Research Assistant at Georgia Tech’s EPIC Lab, I contributed to research in lower-limb wearable robotics through experimental operations, exoskeleton development, and biomechanical data analysis. I supported more than 50 studies involving stroke and able-bodied participants, working with motion-capture and instrumented treadmill systems while assisting with experiment execution and hardware troubleshooting. I also contributed extensively to the fabrication, maintenance, and refinement of hip and ankle exoskeleton systems, progressing to independently carrying out established manufacturing and assembly workflows and training junior students on these procedures. In parallel, I supported the lab’s data-processing efforts using MATLAB and Python, including visualization, processing of motion-capture data through existing analysis pipelines, and interpretation of biomechanical results.</p>
                  <div class="tech-stack-tags">
                    <span class="tech-tag">VICON</span>
                    <span class="tech-tag">Hardware Fabrication</span>
                    <span class="tech-tag">MATLAB</span>
                    <span class="tech-tag">Python</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 3. Master of Science -->
            <div class="timeline-item">
              <div class="timeline-date-side">Fall 2024 – Spring 2026</div>
              <span class="timeline-marker"></span>
              <div class="timeline-card" onclick="toggleAccordion(this)">
                <div class="timeline-header">
                  <div>
                    <h3 class="timeline-role">M.S. Robotics</h3>
                    <p class="timeline-org">Georgia Institute of Technology</p>
                  </div>
                  <span class="timeline-date">Fall 2024 – Spring 2026</span>
                </div>
                <div class="timeline-body">
                  <p>Graduated with a 3.26/4.00 GPA focusing on Robotics Mechanics, Controls, Perception, Wearable Robotics, and Mechatronics. For my capstone, I conducted a feasibility study and design for an integrated hip-ankle exoskeleton, defining a 4-actuator architecture and modeling joint-moment assistance from experimental gait data.</p>
                  <div class="tech-stack-tags">
                    <span class="tech-tag">Robotics Mechanics</span>
                    <span class="tech-tag">Control Theory</span>
                    <span class="tech-tag">Perception</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 4. Robotics Intern -->
            <div class="timeline-item">
              <div class="timeline-date-side">Jun 2023 – Jul 2023</div>
              <span class="timeline-marker"></span>
              <div class="timeline-card" onclick="toggleAccordion(this)">
                <div class="timeline-header">
                  <div>
                    <h3 class="timeline-role">Robotics Intern</h3>
                    <p class="timeline-org">Alstrut India Pvt Ltd</p>
                  </div>
                  <span class="timeline-date">Jun 2023 – Jul 2023</span>
                </div>
                <div class="timeline-body">
                  <p>During my internship at Alstrut India, I gained hands-on experience in industrial robotics and automation while supporting a pick-and-place automation project for Schaeffler Group. I worked with Universal Robots platforms, including the UR10e, and developed practical exposure to PLC-based control, HMI integration, sensors, and industrial electrical systems. My contributions included assisting with robot programming, system integration, testing, troubleshooting, and iterative refinement to meet project requirements. I also participated in final validation activities leading up to the Factory Acceptance Test, gaining exposure to the complete workflow of developing and delivering an industrial automation solution.</p>
                  <div class="tech-stack-tags">
                    <span class="tech-tag">UR10e (Cobot)</span>
                    <span class="tech-tag">PLC</span>
                    <span class="tech-tag">HMI</span>
                    <span class="tech-tag">Industrial Automation</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 5. Bachelor of Technology -->
            <div class="timeline-item">
              <div class="timeline-date-side">Fall 2020 – Spring 2024</div>
              <span class="timeline-marker"></span>
              <div class="timeline-card" onclick="toggleAccordion(this)">
                <div class="timeline-header">
                  <div>
                    <h3 class="timeline-role">B.Tech in Electrical and Electronics Engineering</h3>
                    <p class="timeline-org">Vellore Institute of Technology</p>
                  </div>
                  <span class="timeline-date">Fall 2020 – Spring 2024</span>
                </div>
                <div class="timeline-body">
                  <p>Graduated with an 8.88/10.00 GPA focusing on Power Electronics, Embedded Systems, Control Systems, and Automation. For my capstone, I designed, simulated, fabricated, and tested a Solar PV-Fed cascaded SEPIC and isolated Ćuk DC-DC converter for EV battery charging, achieving 80.6% overall efficiency during hardware testing.</p>
                  <div class="tech-stack-tags">
                    <span class="tech-tag">Power Electronics</span>
                    <span class="tech-tag">Embedded Systems</span>
                    <span class="tech-tag">Circuit Design</span>
                  </div>
                </div>
              </div>
            </div>
"""

with open('index.html', 'r') as f:
    html = f.read()

start_marker = '<div class="experience-timeline">'
end_marker = '</div>\n        </section>\n\n      <!-- PANEL 2: PROJECTS VIEW -->'

start_idx = html.find(start_marker)
end_idx = html.find(end_marker)

if start_idx != -1 and end_idx != -1:
    new_html = html[:start_idx + len(start_marker)] + '\n' + html_content + html[end_idx:]
    
    # Also add the script right before </body>
    script_content = """
    <script>
      function toggleAccordion(element) {
        // Find all cards
        const allCards = document.querySelectorAll('.timeline-card');
        
        // If clicking on an already expanded card, collapse it
        if (element.classList.contains('expanded')) {
          element.classList.remove('expanded');
          return;
        }
        
        // Otherwise, collapse all cards and expand the clicked one
        allCards.forEach(card => card.classList.remove('expanded'));
        element.classList.add('expanded');
      }
    </script>
"""
    body_close_idx = new_html.rfind('</body>')
    if body_close_idx != -1:
        new_html = new_html[:body_close_idx] + script_content + new_html[body_close_idx:]
    
    with open('index.html', 'w') as f:
        f.write(new_html)
    print("Updated index.html successfully")
else:
    print("Could not find markers in index.html")
