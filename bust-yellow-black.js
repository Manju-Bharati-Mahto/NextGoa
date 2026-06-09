const fs = require('fs');

function updateVersion(filename) {
  let content = fs.readFileSync(filename, 'utf8');
  content = content.replace(/87-double\.svg\?v=1/g, '87-double.svg?v=2');
  content = content.replace(/90-double\.svg\?v=1/g, '90-double.svg?v=2');
  fs.writeFileSync(filename, content, 'utf8');
}

updateVersion('./src/components/programme-template/DynamicCareerOutcomes.tsx');
updateVersion('./src/components/programme-template/DynamicWhyPUGoa.tsx');
