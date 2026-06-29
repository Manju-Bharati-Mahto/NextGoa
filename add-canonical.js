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
      
      // Calculate route
      let route = fullPath.replace(basePath, '').replace(/\\/g, '/').replace('/page.tsx', '');
      if (route === '') route = '/';
      
      // If it's a dynamic route like [slug], we skip it because it should use generateMetadata
      if (route.includes('[')) {
        console.log(`Skipping dynamic route: ${route}`);
        continue;
      }
      
      // Check if alternates already exists
      if (content.includes('alternates:')) {
        console.log(`Already has alternates: ${route}`);
        continue;
      }
      
      // Find metadata object and inject alternates
      const metaMatch = content.match(/export const metadata: Metadata = \{([\s\S]*?)\};/);
      if (metaMatch) {
        const replacement = `export const metadata: Metadata = {${metaMatch[1]}  alternates: {\n    canonical: "${route}",\n  },\n};`;
        content = content.replace(metaMatch[0], replacement);
        fs.writeFileSync(fullPath, content);
        console.log(`Updated: ${route}`);
      } else {
        console.log(`No static metadata found in: ${route}`);
      }
    }
  }
}

processDir(path.join(process.cwd(), 'src/app/(website)'), path.join(process.cwd(), 'src/app/(website)'));
