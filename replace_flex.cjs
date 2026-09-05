const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const oldBlock = `<div style="display: flex; flex-direction: column; gap: 1rem; width: 100%; height: 100%; justify-content: center; align-items: center; min-height: 0;">
                          <img src="NNFCPicture2-1.png" alt="Recursive Sequence Generation Tests" onclick="openLightbox(this.src)" style="cursor: zoom-in; max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 4px; flex: 1; min-height: 0;" />
                          <img src="NNFCPicture2-2.png" alt="Recursive Sequence Generation Tests" onclick="openLightbox(this.src)" style="cursor: zoom-in; max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 4px; flex: 1; min-height: 0;" />
                        </div>`;

const newBlock = `<div style="display: flex; flex-direction: column; gap: 1rem; width: 100%; height: 100%; justify-content: center; align-items: center; min-height: 0;">
                          <img src="NNFCPicture2-1.png" alt="Recursive Sequence Generation Tests" onclick="openLightbox(this.src)" style="cursor: zoom-in; width: 100%; max-height: 100%; object-fit: contain; border-radius: 4px; flex: 33; min-height: 0;" />
                          <img src="NNFCPicture2-2.png" alt="Recursive Sequence Generation Tests" onclick="openLightbox(this.src)" style="cursor: zoom-in; width: 100%; max-height: 100%; object-fit: contain; border-radius: 4px; flex: 30; min-height: 0;" />
                        </div>`;

if (html.includes(oldBlock)) {
    html = html.replace(oldBlock, newBlock);
    fs.writeFileSync('index.html', html);
    console.log('Replaced successfully.');
} else {
    console.log('Could not find old block.');
}
