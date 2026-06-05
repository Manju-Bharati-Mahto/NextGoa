const fs = require('fs');
const files = [
  'AlliedHealthProgrammePicker.tsx',
  'HotelManagementProgrammePicker.tsx',
  'ManagementProgrammePicker.tsx',
  'NursingProgrammePicker.tsx',
  'PharmacyProgrammePicker.tsx',
  'PhysiotherapyProgrammePicker.tsx'
];

for (const file of files) {
  const path = '/Users/apple/Downloads/NextGoa-main/src/components/programmes/' + file;
  let content = fs.readFileSync(path, 'utf8');

  const isNewLogic = content.includes('prog.isNew') ? `
                  {prog.isNew && (
                    <div>
                      <span className={\`inline-block px-3 py-1.5 text-[11px] font-bold uppercase rounded-full tracking-[0.15em] \${isYellow ? "bg-[#E73649] text-white" : "bg-[#FCE34B] text-ink"}\`}>
                        New and In-Demand
                      </span>
                    </div>
                  )}` : '';

  const replacement = `<div 
                key={idx}
                className={\`group relative overflow-hidden w-full md:w-[calc(50%-1.25rem)] rounded-[24px] p-8 sm:p-10 flex flex-col min-h-[360px] cursor-pointer \${
                  isYellow ? "bg-[#FCE34B] text-ink" : "bg-[#E73649] text-white"
                }\`}
              >
                {/* Always visible: Title and tags */}
                <div className="relative z-10 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-4">
                  <h4 className="font-poppins font-bold text-[28px] sm:text-[32px] leading-tight mb-4 whitespace-pre-line">
                    {prog.title}
                  </h4>${isNewLogic}
                </div>

                {/* Sliding white card */}
                <div className="absolute inset-x-0 bottom-0 bg-white p-8 sm:p-10 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-20 flex flex-col shadow-[0_-10px_30px_rgba(0,0,0,0.1)]">
                  <div className="grid grid-cols-2 gap-y-6 mb-8">
                    <div>
                      <p className="text-[13px] uppercase tracking-wider mb-1 text-ink/50 font-bold">Duration</p>
                      <p className="font-bold text-[16px] text-ink">{prog.duration}</p>
                    </div>
                    <div>
                      <p className="text-[13px] uppercase tracking-wider mb-1 text-ink/50 font-bold">Eligibility</p>
                      <p className="font-bold text-[14px] leading-snug max-w-[250px] whitespace-pre-wrap text-ink">{prog.eligibility}</p>
                    </div>
                    <div>
                      <p className="text-[13px] uppercase tracking-wider mb-1 text-ink/50 font-bold">Intake</p>
                      <p className="font-bold text-[16px] text-ink">{prog.intake}</p>
                    </div>
                    <div>
                      <p className="text-[13px] uppercase tracking-wider mb-1 text-ink/50 font-bold">Mode</p>
                      <p className="font-bold text-[16px] text-ink">{prog.mode}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mt-auto">
                    <button className="bg-[#E73649] text-white rounded-full px-7 py-2.5 font-bold text-[15px] transition-transform hover:scale-105">
                      View Details &rarr;
                    </button>
                    <button className="border border-gray-300 text-ink hover:bg-gray-50 rounded-full px-7 py-2.5 font-bold text-[15px] transition-transform hover:scale-105">
                      Brochure
                    </button>
                  </div>
                </div>
              </div>`;

  // Find the exact return statement for the card
  const startIndex = content.indexOf('return (\n              <div \n                key={idx}\n                className={`w-full md:w-[calc(50%-1.25rem)]');
  
  if (startIndex !== -1) {
    const endMatch = content.indexOf(');\n          })}\n        </div>', startIndex);
    if (endMatch !== -1) {
      content = content.substring(0, startIndex) + 'return (\n              ' + replacement + '\n            ' + content.substring(endMatch);
      fs.writeFileSync(path, content);
      console.log('Updated ' + file);
    } else {
      console.log('Could not find end for ' + file);
    }
  } else {
     // fallback regex or search
     const altStart = content.indexOf('return (\n              <div \n                key={idx}');
     if (altStart !== -1) {
        const endMatch = content.indexOf(');\n          })}\n        </div>', altStart);
        if (endMatch !== -1) {
          content = content.substring(0, altStart) + 'return (\n              ' + replacement + '\n            ' + content.substring(endMatch);
          fs.writeFileSync(path, content);
          console.log('Updated via fallback ' + file);
        }
     } else {
        console.log('Could not find start for ' + file);
     }
  }
}
