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

  // Replace text-[14px] with text-[16px] in the Eligibility paragraph.
  // The exact string is `className="font-bold text-[14px] leading-snug max-w-[250px] whitespace-pre-wrap text-ink"`
  
  if (content.includes('text-[14px] leading-snug max-w-[250px] whitespace-pre-wrap text-ink')) {
    content = content.replace(/text-\[14px\] leading-snug max-w-\[250px\] whitespace-pre-wrap text-ink/g, 
      'text-[16px] leading-snug max-w-[250px] whitespace-pre-wrap text-ink');
    fs.writeFileSync(path, content);
    console.log('Updated ' + file);
  } else {
    console.log('Skipped ' + file);
  }
}
