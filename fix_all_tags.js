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

const tagHTML = `
                    <div className="mb-4">
                      <span className={\`inline-block px-3 py-1.5 text-[11px] font-bold uppercase rounded-full tracking-[0.15em] \${isYellow ? "bg-[#E73649] text-white" : "bg-[#FCE34B] text-ink"}\`}>
                        New and In-Demand
                      </span>
                    </div>
`;

for (const file of files) {
  const path = '/Users/apple/Downloads/NextGoa-main/src/components/programmes/' + file;
  let content = fs.readFileSync(path, 'utf8');

  // First, remove any existing conditional isNew tag logic
  content = content.replace(/\{prog\.isNew && \(\s*<div className="mb-4">\s*<span className=\{`inline-block[^>]+>\s*New and In-Demand\s*<\/span>\s*<\/div>\s*\)\}/g, '');
  
  // Also clean up any accidental double spaces or empty lines caused by removal
  
  // Now, inject the unconditional tag directly before the <h4>
  // We look for:
  // <div className="relative z-10 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-4"> (or similar)
  // followed by optionally whitespace, and then <h4
  
  const h4Regex = /(<div className="relative z-10[^>]+>)\s*(<h4)/;
  if (content.match(h4Regex)) {
    content = content.replace(h4Regex, `$1${tagHTML}                  $2`);
    fs.writeFileSync(path, content);
    console.log('Updated ' + file);
  } else {
    // maybe it has flex-col
    const h4Regex2 = /(<div className="relative z-10[^>]+flex flex-col">)\s*(<h4)/;
    if (content.match(h4Regex2)) {
      content = content.replace(h4Regex2, `$1${tagHTML}                  $2`);
      fs.writeFileSync(path, content);
      console.log('Updated (flex-col) ' + file);
    } else {
      console.log('Could not find injection point in ' + file);
    }
  }
}
