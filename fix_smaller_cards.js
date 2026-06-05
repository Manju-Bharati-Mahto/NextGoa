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

  // Reduce Top Section Padding
  if (content.includes('p-8 sm:px-10 sm:py-8')) {
    content = content.replace(/p-8 sm:px-10 sm:py-8/g, 'p-6 sm:p-8');
    updated = true;
  }

  // Reduce Bottom Section Padding
  if (content.includes('p-8 sm:p-10 flex flex-col flex-grow')) {
    content = content.replace(/p-8 sm:p-10 flex flex-col flex-grow/g, 'p-6 sm:p-8 flex flex-col flex-grow');
    updated = true;
  }

  // Reduce Grid gap and margin
  if (content.includes('grid grid-cols-2 gap-y-6 mb-8')) {
    content = content.replace(/grid grid-cols-2 gap-y-6 mb-8/g, 'grid grid-cols-2 gap-y-5 mb-6');
    updated = true;
  }

  // Bump label sizes from 13px to 14px
  if (content.includes('text-[13px] uppercase')) {
    content = content.replace(/text-\[13px\] uppercase/g, 'text-[14px] uppercase');
    updated = true;
  }

  // Bump value sizes to 17px
  if (content.includes('text-[16px]')) {
    content = content.replace(/text-\[16px\]/g, 'text-[17px]');
    updated = true;
  }

  // Also fix the tag margin if needed, it's mb-4. We can change to mb-3
  if (content.includes('className="mb-4"')) {
    content = content.replace(/className="mb-4"/g, 'className="mb-3"');
    updated = true;
  }
  
  // Decrease heading size slightly more if we want it smaller
  if (content.includes('text-[22px] sm:text-[26px]')) {
    content = content.replace(/text-\[22px\] sm:text-\[26px\]/g, 'text-[20px] sm:text-[24px]');
    updated = true;
  }

  if (updated) {
    fs.writeFileSync(path, content);
    console.log('Updated ' + file);
  } else {
    console.log('Skipped ' + file);
  }
}
