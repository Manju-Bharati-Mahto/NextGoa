const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    if (fs.statSync(dirPath).isDirectory()) {
      walkDir(dirPath, callback);
    } else {
      callback(dirPath);
    }
  });
}

const regex = /backgroundImage: "url\('\/(88-double\.svg|89-double\.svg)'\)"/g;

walkDir('./src/components', function(filePath) {
  if (filePath.endsWith('.tsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.match(regex)) {
      content = content.replace(regex, 'backgroundImage: "url(\'/$1?v=2\')"');
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Cache busted', filePath);
    }
  }
});
