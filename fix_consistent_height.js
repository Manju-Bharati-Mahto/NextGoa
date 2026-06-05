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

  // We look for the main container that has flex-wrap and items-start
  if (content.includes('flex flex-wrap justify-center gap-6 sm:gap-10') && content.includes('items-start')) {
    content = content.replace(/(flex flex-wrap justify-center gap-[^\"]+) items-start"/g, '$1 items-stretch"');
    updated = true;
  }

  if (updated) {
    fs.writeFileSync(path, content);
    console.log('Updated ' + file);
  } else {
    console.log('Skipped ' + file);
  }
}
