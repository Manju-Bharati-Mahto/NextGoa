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

const replacement = `
              <div 
                key={idx}
                className="w-full md:w-[calc(50%-1.25rem)] rounded-[24px] overflow-hidden flex flex-col bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 transition-shadow hover:shadow-lg"
              >
                {/* Top Section */}
                <div className={\`p-8 sm:px-10 sm:py-8 \${isYellow ? "bg-[#FCE34B] text-ink" : "bg-[#E73649] text-white"}\`}>
                  <div className="mb-4">
                    <span className={\`inline-block px-3 py-1.5 text-[11px] font-bold uppercase rounded-full tracking-[0.15em] \${isYellow ? "bg-[#E73649] text-white" : "bg-[#FCE34B] text-ink"}\`}>
                      New and In-Demand
                    </span>
                  </div>
                  <h4 className="font-poppins font-bold text-[22px] sm:text-[26px] leading-snug whitespace-pre-line">
                    {prog.title}
                  </h4>
                </div>

                {/* Bottom Section */}
                <div className="p-8 sm:p-10 flex flex-col flex-grow text-ink">
                  <div className="grid grid-cols-2 gap-y-6 mb-8">
                    <div>
                      <p className="text-[13px] uppercase tracking-wider mb-1 opacity-50 font-bold">Duration</p>
                      <p className="font-bold text-[16px]">{prog.duration}</p>
                    </div>
                    <div>
                      <p className="text-[13px] uppercase tracking-wider mb-1 opacity-50 font-bold">Eligibility</p>
                      <p className="font-bold text-[16px] leading-snug max-w-[250px] whitespace-pre-wrap">{prog.eligibility}</p>
                    </div>
                    <div>
                      <p className="text-[13px] uppercase tracking-wider mb-1 opacity-50 font-bold">Intake</p>
                      <p className="font-bold text-[16px]">{prog.intake}</p>
                    </div>
                    <div>
                      <p className="text-[13px] uppercase tracking-wider mb-1 opacity-50 font-bold">Mode</p>
                      <p className="font-bold text-[16px]">{prog.mode}</p>
                    </div>
                  </div>

                  <div className="flex-grow"></div>

                  <div className="flex flex-wrap items-center gap-4 mt-auto">
                    <button className="bg-[#E73649] text-white rounded-full px-7 py-2.5 font-bold text-[15px] transition-transform hover:scale-105">
                      View Details &rarr;
                    </button>
                    <button className="border border-gray-300 hover:bg-gray-50 rounded-full px-7 py-2.5 font-bold text-[15px] transition-transform hover:scale-105">
                      Brochure
                    </button>
                  </div>
                </div>
              </div>`;

for (const file of files) {
  const path = '/Users/apple/Downloads/NextGoa-main/src/components/programmes/' + file;
  let content = fs.readFileSync(path, 'utf8');

  const startIndex = content.indexOf('return (\n              <div \n                key={idx}');
  
  if (startIndex !== -1) {
    const endMatch = content.indexOf(');\n          })}\n', startIndex);
    if (endMatch !== -1) {
      content = content.substring(0, startIndex) + 'return (\n' + replacement + '\n            ' + content.substring(endMatch);
      fs.writeFileSync(path, content);
      console.log('Updated ' + file);
    } else {
      console.log('Could not find end for ' + file);
    }
  } else {
     console.log('Could not find start for ' + file);
  }
}
