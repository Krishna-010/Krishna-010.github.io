const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');

const fixCSS = `
/* Mobile Carousel & Project Image Fixes */
@media (max-width: 768px) {
  /* Fix Carousel Horizontal Squeezing */
  .carousel-container {
    padding: 0 1.5rem !important;
  }
  
  .project-image-slide {
    padding: 1rem !important;
    overflow-y: auto !important; /* Allow scrolling if stacked images overflow */
    justify-content: flex-start !important; /* Don't center vertically on mobile if scrolling */
  }
  
  /* Convert inline grids to flex columns so images don't squish */
  .project-image-slide div[style*="display: grid"] {
    display: flex !important;
    flex-direction: column !important;
    gap: 1.5rem !important;
  }
  
  /* Ensure images shrink properly and don't overflow */
  .project-image-slide img {
    max-height: 250px !important;
    width: 100% !important;
    object-fit: contain !important;
  }
  
  /* Adjust image wrappers inside the flex columns */
  .project-image-slide div[style*="grid-column: span"] {
    width: 100% !important;
  }
  
  /* Adjust arrow buttons position slightly inward */
  .project-image-carousel button[onclick^="prevProjectImage"] {
    left: -0.25rem !important;
    width: 28px !important;
    height: 28px !important;
    font-size: 1rem !important;
  }
  
  .project-image-carousel button[onclick^="nextProjectImage"] {
    right: -0.25rem !important;
    width: 28px !important;
    height: 28px !important;
    font-size: 1rem !important;
  }
  
  .image-slides-wrapper {
    height: 600px !important; /* Give more height for vertical stacking */
  }
}

@media (max-width: 480px) {
  .carousel-container {
    padding: 0 1rem !important;
  }
  
  .image-slides-wrapper {
    height: 550px !important;
  }
  
  /* Make the carousel buttons slightly transparent to not block content */
  .project-image-carousel button {
    background: rgba(var(--bg-panel-rgb), 0.8) !important;
    backdrop-filter: blur(4px);
  }
}
`;

css += '\n' + fixCSS;
fs.writeFileSync('src/index.css', css);
console.log("Appended Mobile Carousel Fixes");
