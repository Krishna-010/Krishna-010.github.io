const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Find the slide for B.Tech Capstone -> Experimental Results
const targetSlideTitle = `Battery-Load Experimental Results`;
let slideTitleIndex = html.indexOf(targetSlideTitle);

if (slideTitleIndex !== -1) {
    // Let's add a style block before the grid to allow hover zooming
    // And reduce padding on the slide container to give more horizontal space
    
    // 1. Reduce padding of the slide itself
    const oldSlideStart = `<div class="project-image-slide" data-slide-index="2" style="display: none; flex-direction: column; position: absolute; inset: 0; padding: 1.5rem 3.5rem 2.5rem 3.5rem; background: var(--bg-surface); align-items: center; justify-content: flex-start; z-index: 1;">
                      <h4 style="margin: 0 0 0.25rem 0; font-size: 1.25rem; font-weight: 600; color: var(--text-primary); text-align: center;">Battery-Load Experimental Results</h4>`;
    const newSlideStart = `<div class="project-image-slide" data-slide-index="2" style="display: none; flex-direction: column; position: absolute; inset: 0; padding: 1rem 1.5rem 2rem 1.5rem; background: var(--bg-surface); align-items: center; justify-content: flex-start; z-index: 1;">
                      <style>
                        .zoom-on-hover {
                          transition: transform 0.3s ease, z-index 0.3s ease;
                          cursor: zoom-in;
                          position: relative;
                          z-index: 1;
                        }
                        .zoom-on-hover:hover {
                          transform: scale(2.2);
                          z-index: 50;
                          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
                        }
                        .result-card {
                          transition: z-index 0.3s ease;
                        }
                        .result-card:hover {
                          z-index: 50;
                        }
                      </style>
                      <h4 style="margin: 0 0 0.25rem 0; font-size: 1.25rem; font-weight: 600; color: var(--text-primary); text-align: center;">Battery-Load Experimental Results</h4>`;
                      
    html = html.replace(oldSlideStart, newSlideStart);
    
    // 2. Add classes to the grid elements
    // Replace: <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem; width: 100%; flex: 1; min-height: 0;">
    html = html.replace(
        `<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem; width: 100%; flex: 1; min-height: 0;">`,
        `<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.5rem; width: 100%; flex: 1; min-height: 0; align-items: stretch;">`
    );
    
    // Apply .result-card and .zoom-on-hover
    html = html.replaceAll(
        `<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; background: rgba(255, 255, 255, 0.03); border-radius: 8px; padding: 0.5rem; border: 1px solid var(--border-subtle); flex: 1; min-height: 0;">`,
        `<div class="result-card" style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; background: rgba(255, 255, 255, 0.03); border-radius: 8px; padding: 0.25rem; border: 1px solid var(--border-subtle); flex: 1; min-height: 0;">`
    );
    
    html = html.replaceAll(
        `style="max-width: 100%; max-height: 100%; object-fit: contain; flex: 1; min-height: 0;" />`,
        `class="zoom-on-hover" style="max-width: 100%; max-height: 100%; object-fit: contain; flex: 1; min-height: 0; background: var(--bg-surface); border-radius: 4px;" />`
    );

    fs.writeFileSync('index.html', html);
    console.log("Updated slide with zoom and wider padding");
} else {
    console.log("Could not find the slide.");
}
