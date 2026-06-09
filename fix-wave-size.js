const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('./src/components', function(filePath) {
  if (filePath.endsWith('.tsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('w-[200%] flex animate-wave-flow')) {
      let newContent = content.replace(/w-\[200%\] flex animate-wave-flow/g, 'w-[400%] flex animate-wave-flow');
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log('Updated', filePath);
    }
  }
});
