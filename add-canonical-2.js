const fs = require('fs');
const path = require('path');

function processDir(dir, basePath) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDir(fullPath, basePath);
    } else if (file === 'page.tsx') {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      let route = fullPath.replace(basePath, '').replace(/\\/g, '/').replace('/page.tsx', '');
      if (route === '') route = '/';
      if (route.includes('[')) continue;
      
      if (content.includes('alternates:') || content.includes('canonical:')) continue;
      
      const metaMatch = content.match(/export const metadata(?:[^{]+)?= \{([\s\S]*?)\};/);
      if (metaMatch) {
        const replacement = metaMatch[0].replace(/\{/, `{\n  alternates: {\n    canonical: "${route}",\n  },`);
        content = content.replace(metaMatch[0], replacement);
        fs.writeFileSync(fullPath, content);
        console.log(`Updated: ${route}`);
      } else {
        // Create metadata object
        const newMeta = `\nexport const metadata = {\n  alternates: {\n    canonical: "${route}",\n  },\n};\n\n`;
        content = content.replace('export default function', newMeta + 'export default function');
        fs.writeFileSync(fullPath, content);
        console.log(`Created metadata for: ${route}`);
      }
    }
  }
}

processDir(path.join(process.cwd(), 'src/app/(website)'), path.join(process.cwd(), 'src/app/(website)'));
