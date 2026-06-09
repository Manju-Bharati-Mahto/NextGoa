const fs = require('fs');

function fixGap(filename) {
  let content = fs.readFileSync(filename, 'utf8');
  content = content.replace(/H1V/g, 'H-5V');
  content = content.replace(/H0V/g, 'H-5V');
  fs.writeFileSync(filename, content, 'utf8');
  console.log('Fixed H1V in', filename);
}

fixGap('./public/87-double.svg');
fixGap('./public/90-double.svg');
// Just to be safe, also check 89-double.svg
fixGap('./public/89-double.svg');

function updateVersion(filename) {
  let content = fs.readFileSync(filename, 'utf8');
  content = content.replace(/87-double\.svg\?v=2/g, '87-double.svg?v=3');
  content = content.replace(/90-double\.svg\?v=2/g, '90-double.svg?v=3');
  fs.writeFileSync(filename, content, 'utf8');
  console.log('Updated cache version in', filename);
}

updateVersion('./src/components/programme-template/DynamicCareerOutcomes.tsx');
updateVersion('./src/components/programme-template/DynamicWhyPUGoa.tsx');
