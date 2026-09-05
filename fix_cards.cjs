const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');

css = css.replace(
`.launcher-cards-grid.compact-launchers .launcher-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  text-align: left;
}`,
`.launcher-cards-grid.compact-launchers .launcher-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem;
  text-align: center;
}`
);

fs.writeFileSync('src/index.css', css);
console.log("Updated CSS");
