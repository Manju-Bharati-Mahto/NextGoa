const fs = require('fs');
const path = require('path');

function getFiles(dir, filter, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getFiles(filePath, filter, fileList);
    } else if (filePath.endsWith(filter)) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const files = getFiles('src/components', 'Modal.tsx');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  if (content.includes('data-lenis-prevent')) return;

  // We find the first `<div className={`fixed inset-0` or `<div className="fixed inset-0`
  // and insert data-lenis-prevent="true"
  const regex = /<div\s+className=(["`])([^"`]*fixed inset-0[^"`]*)\1/g;
  
  let modified = false;
  content = content.replace(regex, (match, quote, classNameContent) => {
    modified = true;
    return `<div data-lenis-prevent="true" className=${quote}${classNameContent}${quote}`;
  });

  // What if the modal doesn't use `fixed inset-0` exactly like that?
  // Let's also search for `<div className={` or `<div className="` where it's the root of the modal
  // If not modified, maybe it has `fixed inset-0` differently. Let's just find the first `<div` after `return (`
  if (!modified) {
    const returnRegex = /return\s*\(\s*<div/;
    if (content.match(returnRegex)) {
      content = content.replace(returnRegex, 'return (\n    <div data-lenis-prevent="true"');
      modified = true;
    }
  }
  
  if (modified) {
    fs.writeFileSync(file, content);
    console.log("Updated", file);
  } else {
    console.log("Missed", file);
  }
});
