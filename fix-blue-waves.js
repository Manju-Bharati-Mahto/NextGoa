const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const topRegex = /<img\s+src="\/88\.svg"\s+alt=""\s+className="absolute top-0 left-0 w-full h-auto"\s*\/>/g;
const bottomRegex = /<img\s+src="\/88\.svg"\s+alt=""\s+className="absolute bottom-0 left-0 w-full h-auto"\s*\/>/g;

walkDir('./src/components', function(filePath) {
  if (filePath.endsWith('.tsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    if (content.match(topRegex)) {
      content = content.replace(topRegex, `<div className="absolute top-0 left-0 w-[400%] flex animate-wave-flow">
              <img src="/88-double.svg" alt="" className="w-1/2 h-auto" />
              <img src="/88-double.svg" alt="" className="w-1/2 h-auto" />
            </div>`);
      changed = true;
    }
    
    if (content.match(bottomRegex)) {
      content = content.replace(bottomRegex, `<div className="absolute bottom-0 left-0 w-[400%] flex animate-wave-flow">
              <img src="/88-double.svg" alt="" className="w-1/2 h-auto" />
              <img src="/88-double.svg" alt="" className="w-1/2 h-auto" />
            </div>`);
      changed = true;
    }

    if (changed) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated', filePath);
    }
  }
});
