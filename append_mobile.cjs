const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');

// Ensure we don't add it twice
if (!css.includes('/* Mobile View Optimizations */')) {
  const mobileCSS = `
/* ==========================================================================
   Mobile View Optimizations
   ========================================================================== */
@media (max-width: 768px) {
  /* Tighten Stage & Panels */
  .stage-viewport {
    padding: 1rem 0.75rem 3rem 0.75rem !important;
  }
  
  .view-panel {
    padding: 1.25rem !important;
    border-radius: var(--radius-md) !important;
  }
  
  .profile-card {
    padding: 1.25rem !important;
  }
  
  /* Top Nav spacing */
  .top-nav-inner {
    padding: 0 1rem;
  }
  
  /* Reduce header sizes */
  .panel-header {
    margin-bottom: 1.25rem;
  }
  
  .panel-header h2 {
    font-size: 1.6rem;
  }
  
  .window-bar {
    margin-bottom: 1.25rem;
    padding-bottom: 0.75rem;
  }
  
  /* Grids and Lists */
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
  
  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 1rem;
  }
  
  .experience-timeline {
    padding-left: 1rem;
    gap: 1.5rem;
  }
  
  .timeline-marker {
    width: 14px;
    height: 14px;
    left: -18px; /* adjust for padding-left 1rem and 2px border */
  }

  .timeline-marker::after {
    width: 6px;
    height: 6px;
  }

  .timeline-content {
    padding: 1.25rem;
  }
  
  .compact-contact-item {
    font-size: 0.85rem;
    padding: 0.4rem 0.75rem;
  }
}

@media (max-width: 480px) {
  /* Ultra-small phones */
  .brand-logo span {
    font-size: 1rem;
  }
  
  .stage-viewport {
    padding: 0.5rem 0.5rem 3rem 0.5rem !important;
  }
  
  .view-panel {
    padding: 1rem !important;
  }
  
  .custom-gallery {
    grid-template-columns: 1fr;
  }
  
  .gallery-item-new.tall {
    aspect-ratio: 4 / 3 !important;
  }
  
  .launcher-cards-grid.compact-launchers .launcher-card {
    padding: 0.75rem !important;
  }
}
`;
  
  css += '\n' + mobileCSS;
  fs.writeFileSync('src/index.css', css);
  console.log("Appended Mobile Optimizations");
} else {
  console.log("Mobile CSS already exists.");
}

