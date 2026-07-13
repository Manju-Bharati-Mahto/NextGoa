import re

with open('src/components/layout/EnquiryModal.tsx', 'r') as f:
    content = f.read()

# 1. Replace allProgrammes with allCourses and allFaculties
all_courses_str = """const allCourses = [
  // Engineering - Diploma
  { value: "diploma-computer-engineering", label: "Diploma in Computer Engineering", faculty: "Engineering" },
  // Engineering - B.Tech
  { value: "btech-cse", label: "B.Tech. Computer Science & Engineering", faculty: "Engineering" },
  { value: "btech-cse-ai", label: "B.Tech. CSE with Artificial Intelligence", faculty: "Engineering" },
  { value: "btech-cse-cybersecurity", label: "B.Tech. CSE with Cyber Security", faculty: "Engineering" },
  { value: "btech-cse-aids", label: "B.Tech. CSE with AI & Data Science", faculty: "Engineering" },
  { value: "btech-cse-aiml", label: "B.Tech. CSE with AI & Machine Learning", faculty: "Engineering" },
  { value: "btech-cse-quantum", label: "B.Tech. CSE with Quantum Computing", faculty: "Engineering" },
  { value: "btech-lateral", label: "B.Tech. Lateral Entry - Computer Science and Engineering", faculty: "Engineering" },
  // Computer Applications
  { value: "bca", label: "Bachelor of Computer Applications (BCA)", faculty: "Computer Applications" },
  { value: "mca", label: "Master of Computer Applications (MCA)", faculty: "Computer Applications" },
  // Management
  { value: "bba", label: "Bachelor of Business Administration (BBA)", faculty: "Management" },
  { value: "bba-hons", label: "BBA Honours (NEP 2020)", faculty: "Management" },
  { value: "mba", label: "Master of Business Administration (MBA)", faculty: "Management" },
  // Pharmacy
  { value: "bpharm", label: "Bachelor of Pharmacy (B.Pharm.)", faculty: "Pharmacy" },
  { value: "bpharm-lateral", label: "B.Pharm. - Lateral Entry", faculty: "Pharmacy" },
  // Nursing
  { value: "gnm", label: "General Nursing and Midwifery (G.N.M)", faculty: "Nursing" },
  { value: "bsc-nursing", label: "Bachelor of Science in Nursing", faculty: "Nursing" },
  { value: "pb-bsc-nursing", label: "Post Basic B.Sc Nursing (PB-B.Sc.)", faculty: "Nursing" },
  // Physiotherapy
  { value: "bpt", label: "Bachelor of Physiotherapy (BPT)", faculty: "Physiotherapy" },
  // Hotel Management
  { value: "bhmct", label: "BHMCT", faculty: "Hotel Management" },
  { value: "bsc-hotel-management", label: "Bachelor of Science - Hotel Management", faculty: "Hotel Management" },
  { value: "bsc-hons-hotel-management", label: "B.Sc Hons. - Hotel Management", faculty: "Hotel Management" },
  // Allied and Healthcare Sciences
  { value: "baott", label: "Bachelor of Anaesthesia & Operation Theatre Technology (B.AOTT)", faculty: "Allied Health" },
  { value: "bmls", label: "Bachelor of Medical Laboratory Science (BMLS)", faculty: "Allied Health" },
  // Applied Sciences
  { value: "bsc-biotech", label: "B.Sc. Biotechnology", faculty: "Applied Sciences" },
  { value: "bsc-microbio", label: "B.Sc. Microbiology", faculty: "Applied Sciences" },
  { value: "bsc-hons-biotech", label: "B.Sc. Hons. Biotechnology", faculty: "Applied Sciences" },
  { value: "bsc-hons-microbio", label: "B.Sc. Hons. Microbiology", faculty: "Applied Sciences" },
  { value: "msc-biotech", label: "M.Sc. Biotechnology", faculty: "Applied Sciences" },
  { value: "msc-microbio", label: "M.Sc. Microbiology", faculty: "Applied Sciences" },
  // Doctorate
  { value: "phd", label: "Doctor of Philosophy (Ph.D.)", faculty: "Doctorate" },
];

const allFaculties = [
  { value: "engineering", label: "Engineering" },
  { value: "computer-applications", label: "Computer Applications" },
  { value: "management", label: "Management Studies" },
  { value: "pharmacy", label: "Pharmacy" },
  { value: "nursing", label: "Nursing" },
  { value: "physiotherapy", label: "Physiotherapy" },
  { value: "hotel-management", label: "Hotel Management" },
  { value: "allied-and-healthcare-science", label: "Allied and Healthcare Sciences" },
  { value: "applied-sciences", label: "Applied Sciences" },
  { value: "phd", label: "Doctorate Programs" },
];
"""
content = re.sub(r'const allProgrammes = \[.*?\];', all_courses_str, content, flags=re.DOTALL)

# 2. Add menuType state
content = re.sub(r'const \[touched, setTouched\] = useState<Record<string, boolean>>\(\{\}\);',
                 'const [touched, setTouched] = useState<Record<string, boolean>>({});\n  const [menuType, setMenuType] = useState<"courses" | "faculties">("courses");', content)

# 3. Update filteredProgrammes logic
filtered_logic = """
  const activeList = menuType === "faculties" ? allFaculties : allCourses;

  const filteredProgrammes = activeList.filter(p =>
    p.label.toLowerCase().includes(programmeSearch.toLowerCase())
  );

  // Group filtered programmes by faculty (only for courses)
  const groupedProgrammes = menuType === "courses" ? filteredProgrammes.reduce((acc, p) => {
    if (!acc[p.faculty]) acc[p.faculty] = [];
    acc[p.faculty].push(p);
    return acc;
  }, {} as Record<string, typeof allCourses>) : {};

  // Flat list for keyboard navigation
  const flatFiltered = menuType === "courses" ? Object.values(groupedProgrammes).flat() : filteredProgrammes;
"""
content = re.sub(r'const filteredProgrammes = allProgrammes\.filter\(.*?const flatFiltered = filteredProgrammes;', filtered_logic.strip(), content, flags=re.DOTALL)

# 4. Update click handler
click_logic = """
        let progAttr = target.getAttribute("data-enquiry-program");
        let menuAttr = target.getAttribute("data-enquiry-menu");
        
        let newMenuType = menuAttr === "faculties" ? "faculties" : "courses";
        setMenuType(newMenuType as "courses" | "faculties");

        // URL inference removed as per request; only explicit data-enquiry-program attributes will auto-select

        if (progAttr) {
          const listToSearch = newMenuType === "faculties" ? allFaculties : allCourses;
          const prog = listToSearch.find(p => p.value === progAttr);
"""
content = re.sub(r'let progAttr = target\.getAttribute\("data-enquiry-program"\);\s*// URL inference removed as per request; only explicit data-enquiry-program attributes will auto-select\s*if \(progAttr\) \{\s*const prog = allProgrammes\.find\(p => p\.value === progAttr\);', click_logic.strip(), content, flags=re.DOTALL)

# 5. Update fallback logic for useEffect
effect_logic = """
      const prog = (menuType === "faculties" ? allFaculties : allCourses).find(p => p.value === progVal);
"""
content = re.sub(r'const prog = allProgrammes\.find\(p => p\.value === progVal\);', effect_logic.strip(), content)

# 6. Update dropdown rendering
dropdown_rendering = """
                        {filteredProgrammes.length === 0 ? (
                          <li className="px-4 py-3 text-sm text-gray-400 italic">No programmes found</li>
                        ) : menuType === "faculties" ? (
                          filteredProgrammes.map((p, index) => {
                            const isHighlighted = index === highlightedIndex;
                            const isSelected = formData.programme === p.value;
                            return (
                              <li
                                key={p.value}
                                data-programme-item
                                onMouseDown={(e) => {
                                  e.preventDefault();
                                  selectProgramme(p.value, p.label);
                                }}
                                onMouseEnter={() => setHighlightedIndex(index)}
                                className={`cursor-pointer px-4 py-3 text-[15px] transition-colors border-b border-gray-50 last:border-0 ${
                                  isSelected
                                    ? 'bg-[#11B1E3]/10 text-[#11B1E3] font-medium'
                                    : isHighlighted
                                    ? 'bg-gray-100 text-ink'
                                    : 'text-gray-700 hover:bg-gray-50'
                                }`}
                              >
                                {p.label}
                                {isSelected && (
                                  <svg className="inline-block ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#11B1E3" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                  </svg>
                                )}
                              </li>
                            );
                          })
                        ) : (
                          Object.entries(groupedProgrammes).map(([faculty, programmes]) => (
                            <li key={faculty}>
                              <div className="sticky top-0 bg-gray-50 px-4 py-1.5 text-[11px] font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100">
                                {faculty}
                              </div>
                              {programmes.map((p) => {
                                const flatIndex = flatFiltered.findIndex(f => f.value === p.value);
                                const isHighlighted = flatIndex === highlightedIndex;
                                const isSelected = formData.programme === p.value;
                                return (
                                  <div
                                    key={p.value}
                                    data-programme-item
                                    onMouseDown={(e) => {
                                      e.preventDefault();
                                      selectProgramme(p.value, p.label);
                                    }}
                                    onMouseEnter={() => setHighlightedIndex(flatIndex)}
                                    className={`cursor-pointer px-4 py-2.5 text-sm transition-colors ${
                                      isSelected
                                        ? 'bg-[#11B1E3]/10 text-[#11B1E3] font-medium'
                                        : isHighlighted
                                        ? 'bg-gray-100 text-ink'
                                        : 'text-gray-700 hover:bg-gray-50'
                                    }`}
                                  >
                                    {p.label}
                                    {isSelected && (
                                      <svg className="inline-block ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#11B1E3" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12" />
                                      </svg>
                                    )}
                                  </div>
                                );
                              })}
                            </li>
                          ))
                        )}
"""
content = re.sub(r'\{filteredProgrammes\.length === 0 \? \(.*?\) : \(\s*filteredProgrammes\.map\(\(p, index\) => \{.*?\)\s*\)\s*\}', dropdown_rendering.strip(), content, flags=re.DOTALL)

with open('src/components/layout/EnquiryModal.tsx', 'w') as f:
    f.write(content)

