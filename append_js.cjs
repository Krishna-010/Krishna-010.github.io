const fs = require('fs');

const jsToAdd = `
// --------------------------------------------------------------------------
// Intra-Project Image Carousel Logic
// --------------------------------------------------------------------------
const projectImageIndices = {};

window.nextProjectImage = function(projectIndex) {
  const container = document.querySelector(\`.project-image-carousel[data-project-id="\${projectIndex}"]\`);
  if (!container) return;
  const slides = container.querySelectorAll('.project-image-slide');
  const totalImages = slides.length;
  if (totalImages === 0) return;
  
  if (projectImageIndices[projectIndex] === undefined) projectImageIndices[projectIndex] = 0;
  projectImageIndices[projectIndex] = (projectImageIndices[projectIndex] + 1) % totalImages;
  updateProjectImageCarousel(projectIndex, container);
};

window.prevProjectImage = function(projectIndex) {
  const container = document.querySelector(\`.project-image-carousel[data-project-id="\${projectIndex}"]\`);
  if (!container) return;
  const slides = container.querySelectorAll('.project-image-slide');
  const totalImages = slides.length;
  if (totalImages === 0) return;
  
  if (projectImageIndices[projectIndex] === undefined) projectImageIndices[projectIndex] = 0;
  projectImageIndices[projectIndex] = (projectImageIndices[projectIndex] - 1 + totalImages) % totalImages;
  updateProjectImageCarousel(projectIndex, container);
};

function updateProjectImageCarousel(projectIndex, container) {
  const currentIndex = projectImageIndices[projectIndex] || 0;
  const slides = container.querySelectorAll('.project-image-slide');
  slides.forEach((slide, idx) => {
    slide.style.display = (idx === currentIndex) ? 'flex' : 'none';
  });
  
  const dots = container.querySelectorAll('.img-dot');
  dots.forEach((dot, idx) => {
    if (idx === currentIndex) {
      dot.style.background = 'var(--emerald-primary)';
      dot.style.opacity = '1';
    } else {
      dot.style.background = 'var(--text-muted)';
      dot.style.opacity = '0.5';
    }
  });
}
`;

let mainJS = fs.readFileSync('src/main.tsx', 'utf-8');
if (!mainJS.includes('Intra-Project Image Carousel Logic')) {
  fs.appendFileSync('src/main.tsx', jsToAdd);
  console.log("Appended JS.");
} else {
  console.log("JS already present.");
}
