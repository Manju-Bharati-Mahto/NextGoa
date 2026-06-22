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
  let content = fs.readFileSync(file, 'utf-8');
  
  if (content.includes('document.body.style.overflow')) return;
  
  if (!content.includes('useEffect')) {
    if (content.includes("import { useState }")) {
      content = content.replace("import { useState }", "import { useState, useEffect }");
    } else if (content.includes("import { useState,")) {
      content = content.replace("import { useState,", "import { useState, useEffect,");
    } else {
      content = "import { useEffect } from 'react';\n" + content;
    }
  }

  const funcRegex = /export (default )?function \w+\(.*?\)\s*\{/;
  const match = content.match(funcRegex);
  
  if (match) {
    const insertPos = match.index + match[0].length;
    
    const hasIsOpen = content.substring(match.index, insertPos).includes('isOpen');
    
    let effectCode = `\n  useEffect(() => {\n    if (isOpen) {\n      document.body.style.overflow = 'hidden';\n    } else {\n      document.body.style.overflow = '';\n    }\n    return () => {\n      document.body.style.overflow = '';\n    };\n  }, [isOpen]);\n`;
    
    if (!hasIsOpen) {
      effectCode = `\n  useEffect(() => {\n    document.body.style.overflow = 'hidden';\n    return () => {\n      document.body.style.overflow = '';\n    };\n  }, []);\n`;
    }
    
    content = content.slice(0, insertPos) + effectCode + content.slice(insertPos);
    fs.writeFileSync(file, content);
    console.log("Updated", file);
  }
});
