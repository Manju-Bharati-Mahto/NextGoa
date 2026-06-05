const fs = require('fs');
const files = [
  'AlliedHealthProgrammePicker.tsx',
  'HotelManagementProgrammePicker.tsx',
  'ManagementProgrammePicker.tsx',
  'NursingProgrammePicker.tsx',
  'PharmacyProgrammePicker.tsx',
  'PhysiotherapyProgrammePicker.tsx',
  'ProgrammePicker.tsx'
];

for (const file of files) {
  const path = '/Users/apple/Downloads/NextGoa-main/src/components/programmes/' + file;
  let content = fs.readFileSync(path, 'utf8');

  // Check if it has the isNew logic inside the Always visible div
  const isNewBlockRegex = /\s*\{prog\.isNew && \(\s*<div>\s*<span className=\{\`inline-block[^`]+`\}>\s*New and In-Demand\s*<\/span>\s*<\/div>\s*\)\}/;
  const hasIsNew = isNewBlockRegex.test(content);

  if (hasIsNew) {
    // Remove it from the current position
    content = content.replace(isNewBlockRegex, '');
    
    // Create the block with a bottom margin
    const newBlock = `
                  {prog.isNew && (
                    <div className="mb-6 -mt-2">
                      <span className={\`inline-block px-3 py-1.5 text-[11px] font-bold uppercase rounded-full tracking-[0.15em] \${isYellow ? "bg-[#E73649] text-white" : "bg-[#FCE34B] text-ink"}\`}>
                        New and In-Demand
                      </span>
                    </div>
                  )}`;

    // Insert it just inside the white sliding card
    const whiteCardStart = 'z-20 flex flex-col shadow-[0_-10px_30px_rgba(0,0,0,0.1)]">';
    content = content.replace(whiteCardStart, whiteCardStart + newBlock);

    fs.writeFileSync(path, content);
    console.log('Updated ' + file);
  } else {
    console.log('Skipped ' + file);
  }
}
