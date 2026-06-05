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

  // Replace min-h-[360px] with min-h-[480px] to give enough room for the heading
  if (content.includes('min-h-[360px]')) {
    content = content.replace(/min-h-\[360px\]/g, 'min-h-[480px]');
    fs.writeFileSync(path, content);
    console.log('Updated ' + file);
  } else {
    console.log('Skipped ' + file);
  }
}
