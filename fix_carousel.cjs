const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const targetOriginal = `                    <!-- Slide 1 -->
                    <div class="project-image-slide" style="display: none; width: 100%; height: 100%; flex-direction: column;">
                      <div style="flex: 1; display: flex; align-items: stretch; padding: 1.5rem; background: var(--bg-surface); border-top-left-radius: 12px; border-top-right-radius: 12px; height: calc(100% - 80px); gap: 1rem;">
                        
                        <!-- Left Column: rqt_graph -->
                        <div style="flex: 1; background: #0b1121; border: 1px solid var(--border-subtle); border-radius: 8px; display: flex; flex-direction: column; padding: 1rem; position: relative;">
                          <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.5rem; text-align: center; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em;">Node & Topic Computation Graph</div>
                          <div style="flex: 1; display: flex; align-items: center; justify-content: center; overflow: hidden; position: relative;">
                            <img src="rqt_graph.png" alt="ROS 2 rqt_graph computation topology" onclick="openLightbox(this.src)" style="cursor: zoom-in; width: 100%; height: 100%; object-fit: contain;" />
                          </div>
                        </div>

                        <!-- Right Column: Stacked rqt_plot & rviz_marker -->
                        <div style="flex: 1; display: flex; flex-direction: column; gap: 1rem;">
                          <!-- Top Right -->
                          <div style="flex: 1; background: #0b1121; border: 1px solid var(--border-subtle); border-radius: 8px; display: flex; flex-direction: column; padding: 1rem; position: relative;">
                            <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.5rem; text-align: center; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em;">Joint Moment & Assistive Torque Telemetry</div>
                            <div style="flex: 1; display: flex; align-items: center; justify-content: center; overflow: hidden; position: relative;">
                              <img src="rqt_plot.png" alt="ROS 2 rqt_plot live data" onclick="openLightbox(this.src)" style="cursor: zoom-in; width: 100%; height: 100%; object-fit: contain;" />
                            </div>
                          </div>
                          <!-- Bottom Right -->
                          <div style="flex: 1; background: #0b1121; border: 1px solid var(--border-subtle); border-radius: 8px; display: flex; flex-direction: column; padding: 1rem; position: relative;">
                            <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.5rem; text-align: center; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em;">RViz2 Coordinate & Marker Inspection</div>
                            <div style="flex: 1; display: flex; align-items: center; justify-content: center; overflow: hidden; position: relative;">
                              <img src="rviz_marker.png" alt="ROS 2 RViz2 visualization" onclick="openLightbox(this.src)" style="cursor: zoom-in; width: 100%; height: 100%; object-fit: contain;" />
                            </div>
                          </div>
                        </div>
                        
                      </div>
                      <div class="slide-caption" style="padding: 1rem; background: var(--bg-panel); border-top: 1px solid var(--border-subtle); border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; text-align: center; height: 80px; display: flex; flex-direction: column; justify-content: center;">
                        <h4 style="margin: 0 0 0.25rem 0; font-size: 1.1rem; color: var(--text-primary);">Pipeline Verification & Real-Time Tooling</h4>
                        <p style="margin: 0; font-size: 0.9rem; color: var(--text-secondary);">End-to-end node connectivity, dynamic torque telemetry, and 3D spatial state inspection.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="image-carousel-indicators" style="position: absolute; bottom: 1rem; left: 0; right: 0; display: flex; justify-content: center; gap: 0.5rem; z-index: 2;">
                    <div class="img-dot" data-dot-index="0" style="width: 8px; height: 8px; border-radius: 50%; background: var(--emerald-primary); opacity: 1; transition: all 0.2s ease;"></div>
                    <div class="img-dot" data-dot-index="1" style="width: 8px; height: 8px; border-radius: 50%; background: var(--text-muted); opacity: 0.5; transition: all 0.2s ease;"></div>
                  </div>`;

const newCarousel = `                    <!-- Slide 1 -->
                    <div class="project-image-slide" style="display: none; width: 100%; height: 100%; flex-direction: column;">
                      <div style="flex: 1; display: flex; align-items: stretch; padding: 1.5rem; background: var(--bg-surface); border-top-left-radius: 12px; border-top-right-radius: 12px; height: calc(100% - 80px); gap: 1rem;">
                        
                        <!-- Left Column: rqt_graph -->
                        <div style="flex: 1; background: #0b1121; border: 1px solid var(--border-subtle); border-radius: 8px; display: flex; flex-direction: column; padding: 1rem; position: relative;">
                          <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.5rem; text-align: center; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em;">Node & Topic Computation Graph</div>
                          <div style="flex: 1; display: flex; align-items: center; justify-content: center; overflow: hidden; position: relative;">
                            <img src="rqt_graph.png" alt="ROS 2 rqt_graph computation topology" onclick="openLightbox(this.src)" style="cursor: zoom-in; width: 100%; height: 100%; object-fit: contain;" />
                          </div>
                        </div>

                        <!-- Right Column: rqt_plot -->
                        <div style="flex: 1; background: #0b1121; border: 1px solid var(--border-subtle); border-radius: 8px; display: flex; flex-direction: column; padding: 1rem; position: relative;">
                          <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.5rem; text-align: center; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em;">Joint Moment & Assistive Torque Telemetry</div>
                          <div style="flex: 1; display: flex; align-items: center; justify-content: center; overflow: hidden; position: relative;">
                            <img src="rqt_plot.png" alt="ROS 2 rqt_plot live data" onclick="openLightbox(this.src)" style="cursor: zoom-in; width: 100%; height: 100%; object-fit: contain;" />
                          </div>
                        </div>
                        
                      </div>
                      <div class="slide-caption" style="padding: 1rem; background: var(--bg-panel); border-top: 1px solid var(--border-subtle); border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; text-align: center; height: 80px; display: flex; flex-direction: column; justify-content: center;">
                        <h4 style="margin: 0 0 0.25rem 0; font-size: 1.1rem; color: var(--text-primary);">Computation & Dynamic Telemetry</h4>
                        <p style="margin: 0; font-size: 0.9rem; color: var(--text-secondary);">End-to-end node connectivity and real-time torque profiles.</p>
                      </div>
                    </div>

                    <!-- Slide 2 -->
                    <div class="project-image-slide" style="display: none; width: 100%; height: 100%; flex-direction: column;">
                      <div style="flex: 1; display: flex; align-items: center; justify-content: center; padding: 1.5rem; background: var(--bg-surface); border-top-left-radius: 12px; border-top-right-radius: 12px; height: calc(100% - 80px);">
                        
                        <div style="width: 100%; height: 100%; background: #0b1121; border: 1px solid var(--border-subtle); border-radius: 8px; display: flex; flex-direction: column; padding: 1rem; position: relative;">
                          <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.5rem; text-align: center; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em;">RViz2 Coordinate & Marker Inspection</div>
                          <div style="flex: 1; display: flex; align-items: center; justify-content: center; overflow: hidden; position: relative;">
                            <img src="rviz_marker.png" alt="ROS 2 RViz2 visualization" onclick="openLightbox(this.src)" style="cursor: zoom-in; max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 4px;" />
                          </div>
                        </div>

                      </div>
                      <div class="slide-caption" style="padding: 1rem; background: var(--bg-panel); border-top: 1px solid var(--border-subtle); border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; text-align: center; height: 80px; display: flex; flex-direction: column; justify-content: center;">
                        <h4 style="margin: 0 0 0.25rem 0; font-size: 1.1rem; color: var(--text-primary);">3D Spatial State Inspection</h4>
                        <p style="margin: 0; font-size: 0.9rem; color: var(--text-secondary);">Visualizing 3D transformations and kinematic states in RViz2.</p>
                      </div>
                    </div>

                  </div>
                  
                  <div class="image-carousel-indicators" style="position: absolute; bottom: 1rem; left: 0; right: 0; display: flex; justify-content: center; gap: 0.5rem; z-index: 2;">
                    <div class="img-dot" data-dot-index="0" style="width: 8px; height: 8px; border-radius: 50%; background: var(--emerald-primary); opacity: 1; transition: all 0.2s ease;"></div>
                    <div class="img-dot" data-dot-index="1" style="width: 8px; height: 8px; border-radius: 50%; background: var(--text-muted); opacity: 0.5; transition: all 0.2s ease;"></div>
                    <div class="img-dot" data-dot-index="2" style="width: 8px; height: 8px; border-radius: 50%; background: var(--text-muted); opacity: 0.5; transition: all 0.2s ease;"></div>
                  </div>`;

if (html.includes(targetOriginal)) {
  html = html.replace(targetOriginal, newCarousel);
  fs.writeFileSync('index.html', html);
  console.log("Successfully replaced the HTML layout");
} else {
  console.log("Could not find the target HTML to replace");
}
