const fs = require('fs');

function processSVG(filename, outputFilename) {
  let content = fs.readFileSync(filename, 'utf8');
  
  // Extend path overlaps
  content = content.replace(/H1442V/g, 'H1447V');
  content = content.replace(/H1441V/g, 'H1447V');

  // Extract the inner content between <svg ...> and </svg>
  const match = content.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
  if (!match) {
    console.error('Could not parse SVG', filename);
    return;
  }
  
  let innerContent = match[1];

  // We want to create a new SVG with viewBox="0 0 2884 898"
  // And wrap the original content in a <g> and a mirrored <g>
  let newSVG = `<svg width="2884" height="898" viewBox="0 0 2884 898" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
  <!-- Original Wave -->
  <g>
${innerContent}
  </g>
  <!-- Mirrored Wave -->
  <g transform="translate(2884, 0) scale(-1, 1)">
${innerContent}
  </g>
</svg>`;

  fs.writeFileSync(outputFilename, newSVG, 'utf8');
  console.log(`Generated ${outputFilename}`);
}

processSVG('./public/87.svg', './public/87-double.svg');
processSVG('./public/90.svg', './public/90-double.svg');
