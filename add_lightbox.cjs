const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Add lightbox CSS
const lightboxCSS = `
    /* Lightbox Styles */
    .lightbox-overlay {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0,0,0,0.85);
      z-index: 9999;
      display: none;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
      cursor: zoom-out;
    }
    .lightbox-overlay.active {
      display: flex;
      opacity: 1;
    }
    .lightbox-img {
      max-width: 90vw;
      max-height: 90vh;
      object-fit: contain;
      border-radius: 8px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.5);
      transform: scale(0.95);
      transition: transform 0.3s ease;
    }
    .lightbox-overlay.active .lightbox-img {
      transform: scale(1);
    }
`;

if (!html.includes('.lightbox-overlay')) {
    html = html.replace('</style>', lightboxCSS + '\n  </style>');
}

// Add lightbox HTML at the end of body
const lightboxHTML = `
  <!-- Lightbox -->
  <div id="global-lightbox" class="lightbox-overlay" onclick="closeLightbox()">
    <img id="global-lightbox-img" class="lightbox-img" src="" alt="Enlarged view">
  </div>
`;

if (!html.includes('id="global-lightbox"')) {
    html = html.replace('</body>', lightboxHTML + '\n</body>');
}

// Add lightbox JS
const lightboxJS = `
  // Lightbox functions
  window.openLightbox = function(src) {
    const lb = document.getElementById('global-lightbox');
    const img = document.getElementById('global-lightbox-img');
    img.src = src;
    lb.style.display = 'flex';
    // trigger reflow
    void lb.offsetWidth;
    lb.classList.add('active');
  };
  window.closeLightbox = function() {
    const lb = document.getElementById('global-lightbox');
    lb.classList.remove('active');
    setTimeout(() => { lb.style.display = 'none'; }, 300);
  };
`;

if (!html.includes('window.openLightbox')) {
    html = html.replace('// --- Start Terminal Typing Logic ---', lightboxJS + '\n  // --- Start Terminal Typing Logic ---');
}

// Now replace zoom-on-hover with onclick
// We can keep zoom-on-hover if we want, or change it to openLightbox.
// The user said "the enlarging size is good", so they might like the hover. 
// Let's add click-to-enlarge to all result cards!
html = html.replaceAll('class="zoom-on-hover"', 'class="zoom-on-hover" onclick="openLightbox(this.src)" style="cursor: zoom-in;"');

fs.writeFileSync('index.html', html);
console.log('Added lightbox');
