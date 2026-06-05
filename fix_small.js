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

  let updated = false;

  // Replace min-h-[480px] or min-h-[360px] (if any were missed)
  if (content.includes('min-h-[480px]')) {
    content = content.replace(/min-h-\[480px\]/g, 'min-h-[240px] hover:min-h-[460px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]');
    updated = true;
  }
  
  // For ProgrammePicker.tsx which I already edited, it will have min-h-[240px] hover:min-h-[460px]

  // Replace items-stretch with items-start
  if (content.includes('items-stretch')) {
    content = content.replace(/items-stretch/g, 'items-start');
    updated = true;
  }

  if (updated) {
    fs.writeFileSync(path, content);
    console.log('Updated ' + file);
  } else {
    console.log('Skipped ' + file);
  }
}
