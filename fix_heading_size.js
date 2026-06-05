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

  // We want to replace `text-[28px] sm:text-[32px] leading-tight mb-4 whitespace-pre-line line-clamp-2" title={prog.title}`
  // with `text-[22px] sm:text-[26px] leading-tight mb-4 whitespace-pre-line"`
  
  if (content.includes('line-clamp-2')) {
    content = content.replace(/text-\[28px\] sm:text-\[32px\] leading-tight mb-4 whitespace-pre-line line-clamp-2" title=\{prog\.title\}/g, 
      'text-[22px] sm:text-[26px] leading-snug mb-4 whitespace-pre-line"');
    fs.writeFileSync(path, content);
    console.log('Updated ' + file);
  } else {
    console.log('Skipped ' + file);
  }
}
