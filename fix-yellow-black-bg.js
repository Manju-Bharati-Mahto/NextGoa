const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const topRegex87 = /<img\s+src="\/87\.svg"\s+alt=""\s+className="absolute top-0 left-0 w-full h-auto"\s*\/>/g;
const bottomRegex87 = /<img\s+src="\/87\.svg"\s+alt=""\s+className="absolute bottom-0 left-0 w-full h-auto"\s*\/>/g;

const topRegex90 = /<img\s+src="\/90\.svg"\s+alt=""\s+className="absolute top-0 left-0 w-full h-auto"\s*\/>/g;
const bottomRegex90 = /<img\s+src="\/90\.svg"\s+alt=""\s+className="absolute bottom-0 left-0 w-full h-auto"\s*\/>/g;

walkDir('./src/components', function(filePath) {
  if (filePath.endsWith('.tsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    // 87.svg (Yellow)
    if (content.match(topRegex87)) {
      content = content.replace(topRegex87, `<div 
              className="absolute top-0 left-0 w-[400%] h-full animate-wave-flow"
              style={{
                backgroundImage: "url('/87-double.svg?v=1')",
                backgroundSize: "50% auto",
                backgroundPosition: "top left",
                backgroundRepeat: "repeat-x"
              }}
            />`);
      changed = true;
    }
    if (content.match(bottomRegex87)) {
      content = content.replace(bottomRegex87, `<div 
              className="absolute bottom-0 left-0 w-[400%] h-full animate-wave-flow"
              style={{
                backgroundImage: "url('/87-double.svg?v=1')",
                backgroundSize: "50% auto",
                backgroundPosition: "bottom left",
                backgroundRepeat: "repeat-x"
              }}
            />`);
      changed = true;
    }

    // 90.svg (Black)
    if (content.match(topRegex90)) {
      content = content.replace(topRegex90, `<div 
              className="absolute top-0 left-0 w-[400%] h-full animate-wave-flow"
              style={{
                backgroundImage: "url('/90-double.svg?v=1')",
                backgroundSize: "50% auto",
                backgroundPosition: "top left",
                backgroundRepeat: "repeat-x"
              }}
            />`);
      changed = true;
    }
    if (content.match(bottomRegex90)) {
      content = content.replace(bottomRegex90, `<div 
              className="absolute bottom-0 left-0 w-[400%] h-full animate-wave-flow"
              style={{
                backgroundImage: "url('/90-double.svg?v=1')",
                backgroundSize: "50% auto",
                backgroundPosition: "bottom left",
                backgroundRepeat: "repeat-x"
              }}
            />`);
      changed = true;
    }

    if (changed) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated', filePath);
    }
  }
});
