const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Replace Image 1
const img1Old = '<img src="lstm_pipeline.svg" alt="End-to-End System Architecture" onclick="openLightbox(this.src)" style="cursor: zoom-in; max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 8px;" />';
const img1New = '<img src="NNFCPicture1.png" alt="End-to-End System Architecture" onclick="openLightbox(this.src)" style="cursor: zoom-in; max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 8px;" />';
html = html.replace(img1Old, img1New);

// Replace Image 2
const img2Old = '<img src="LSTM_Outputs.jpg" alt="Recursive Sequence Generation Tests" onclick="openLightbox(this.src)" style="cursor: zoom-in; max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 4px;" />';
const img2New = `<div style="display: flex; gap: 1rem; width: 100%; height: 100%; justify-content: center; align-items: center; min-height: 0;">
                          <img src="NNFCPicture2-1.png" alt="Recursive Sequence Generation Tests" onclick="openLightbox(this.src)" style="cursor: zoom-in; max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 4px; flex: 1; min-width: 0;" />
                          <img src="NNFCPicture2-2.png" alt="Recursive Sequence Generation Tests" onclick="openLightbox(this.src)" style="cursor: zoom-in; max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 4px; flex: 1; min-width: 0;" />
                        </div>`;
html = html.replace(img2Old, img2New);

fs.writeFileSync('index.html', html);
console.log('Images updated.');
