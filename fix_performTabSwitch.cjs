const fs = require('fs');
let code = fs.readFileSync('src/main.tsx', 'utf8');

const targetStr = `  function performTabSwitch(targetTabId, skipAnimation) {
    currentActiveTab = targetTabId;`;
    
const newStr = `  function performTabSwitch(targetTabId, skipAnimation) {
    currentActiveTab = targetTabId;

    // Reset specific panels if necessary
    if (targetTabId === 'projects' && window.closeProjectDetail) {
      window.closeProjectDetail();
    }
`;

code = code.replace(targetStr, newStr);
fs.writeFileSync('src/main.tsx', code);
console.log("Updated src/main.tsx with reset logic.");
