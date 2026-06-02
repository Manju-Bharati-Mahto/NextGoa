const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else if (dirPath.endsWith('.tsx')) {
      callback(dirPath);
    }
  });
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Replace for h1, h2 (Main headings)
  // We want to replace font-sans with font-poppins
  // and any font weight with font-bold
  content = content.replace(/<(h[12])([^>]*)className="([^"]*)"([^>]*)>/g, (match, tag, before, className, after) => {
    let newClass = className;
    newClass = newClass.replace(/\bfont-sans\b/g, 'font-poppins');
    newClass = newClass.replace(/\bfont-(thin|extralight|light|normal|medium|semibold|extrabold|black)\b/g, 'font-bold');
    
    // If it didn't have a poppins class but had sans, we replaced it. 
    // What if it didn't have either? Let's just ensure it has font-poppins and font-bold if it had some font- class
    if (!newClass.includes('font-poppins')) newClass += ' font-poppins';
    if (!newClass.includes('font-bold') && !newClass.includes('font-')) newClass += ' font-bold';

    // cleanup double spaces
    newClass = newClass.replace(/\s+/g, ' ').trim();
    
    return `<${tag}${before}className="${newClass}"${after}>`;
  });

  // Replace for h3, h4, h5, h6 (Sub headings)
  // We want to replace font-sans with font-poppins
  // and any font weight with font-semibold
  content = content.replace(/<(h[3456])([^>]*)className="([^"]*)"([^>]*)>/g, (match, tag, before, className, after) => {
    let newClass = className;
    newClass = newClass.replace(/\bfont-sans\b/g, 'font-poppins');
    newClass = newClass.replace(/\bfont-(thin|extralight|light|normal|medium|bold|extrabold|black)\b/g, 'font-semibold');
    
    if (!newClass.includes('font-poppins')) newClass += ' font-poppins';
    if (!newClass.includes('font-semibold') && !newClass.includes('font-')) newClass += ' font-semibold';

    // cleanup double spaces
    newClass = newClass.replace(/\s+/g, ' ').trim();
    
    return `<${tag}${before}className="${newClass}"${after}>`;
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

walkDir(path.join(__dirname, 'src'), processFile);
console.log('Done!');
