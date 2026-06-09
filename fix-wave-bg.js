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

const topRegex = /<div className="absolute top-0 left-0 w-\[400%\] flex animate-wave-flow">\s*<img src="\/([^"]+)" alt="" className="w-1\/2 h-auto" \/>\s*<img src="\/([^"]+)" alt="" className="w-1\/2 h-auto" \/>\s*<\/div>/g;
const bottomRegex = /<div className="absolute bottom-0 left-0 w-\[400%\] flex animate-wave-flow">\s*<img src="\/([^"]+)" alt="" className="w-1\/2 h-auto" \/>\s*<img src="\/([^"]+)" alt="" className="w-1\/2 h-auto" \/>\s*<\/div>/g;

walkDir('./src/components', function(filePath) {
  if (filePath.endsWith('.tsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    if (content.match(topRegex)) {
      content = content.replace(topRegex, (match, src1) => {
        return `<div 
            className="absolute top-0 left-0 w-[400%] h-full animate-wave-flow"
            style={{
              backgroundImage: "url('/${src1}')",
              backgroundSize: "50% auto",
              backgroundPosition: "top left",
              backgroundRepeat: "repeat-x"
            }}
          />`;
      });
      changed = true;
    }

    if (content.match(bottomRegex)) {
      content = content.replace(bottomRegex, (match, src1) => {
        return `<div 
            className="absolute bottom-0 left-0 w-[400%] h-full animate-wave-flow"
            style={{
              backgroundImage: "url('/${src1}')",
              backgroundSize: "50% auto",
              backgroundPosition: "bottom left",
              backgroundRepeat: "repeat-x"
            }}
          />`;
      });
      changed = true;
    }

    if (changed) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated', filePath);
    }
  }
});
