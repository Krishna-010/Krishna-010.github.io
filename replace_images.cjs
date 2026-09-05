const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Replace Slide 0
html = html.replace(
  '[ Figure 2.5, Final Integrated Hip–Ankle Exoskeleton Design ]',
  `<img src="Final integrated hip–ankle exoskeleton design showing actuator placement and structural integration.png" alt="Figure 2.5: Final Integrated Hip–Ankle Exoskeleton Design" title="Figure 2.5: Final Integrated Hip–Ankle Exoskeleton Design" style="max-width: 100%; max-height: 100%; object-fit: contain;" />`
);

// Replace Slide 1
html = html.replace(
  '[ Figure 2.4, Geometric Interference ]',
  `<img src="image.png" alt="Figure 2.4: Geometric Interference" title="Figure 2.4: Geometric Interference" style="max-width: 100%; max-height: 100%; object-fit: contain;" />`
);

// Replace Slide 2
html = html.replace(
  '[ Figure 3.6, Multi-Subject Results ]',
  `<img src="Multi-subject results showing electrical demand, runtime estimates, desired versus delivered assistive torque, and actuator saturation behavior across all analyzed walking trials.png" alt="Figure 3.6: Multi-Subject Results" title="Figure 3.6: Multi-Subject Results" style="max-width: 100%; max-height: 100%; object-fit: contain;" />`
);

// We should also remove the text-align, color, font-family from the slides so they don't affect the images, 
// but actually they won't matter much for an img tag. Let's just adjust the padding to be smaller so the image is bigger.
html = html.replace(/padding: 2rem;/g, 'padding: 0.5rem;');

fs.writeFileSync('index.html', html);
console.log('Images replaced');
