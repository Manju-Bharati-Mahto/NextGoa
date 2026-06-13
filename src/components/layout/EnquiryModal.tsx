"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";

const allProgrammes = [
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
];

export function EnquiryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/enquiry") {
      setTimeout(() => setIsOpen(true), 0);
    }
  }, [pathname]);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    programme: "",
    qualification: "",
    city: "",
    help: ""
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Searchable programme combobox state
  const [programmeSearch, setProgrammeSearch] = useState("");
  const [programmeDropdownOpen, setProgrammeDropdownOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const programmeRef = useRef<HTMLDivElement>(null);
  const programmeInputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const filteredProgrammes = allProgrammes.filter(p =>
    p.label.toLowerCase().includes(programmeSearch.toLowerCase())
  );

  // Group filtered programmes by faculty
  const groupedProgrammes = filteredProgrammes.reduce((acc, p) => {
    if (!acc[p.faculty]) acc[p.faculty] = [];
    acc[p.faculty].push(p);
    return acc;
  }, {} as Record<string, typeof allProgrammes>);

  // Flat list for keyboard navigation
  const flatFiltered = Object.values(groupedProgrammes).flat();

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (programmeRef.current && !programmeRef.current.contains(e.target as Node)) {
        setProgrammeDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Scroll highlighted item into view
  useEffect(() => {
    if (highlightedIndex >= 0 && listRef.current) {
      const items = listRef.current.querySelectorAll('[data-programme-item]');
      items[highlightedIndex]?.scrollIntoView({ block: 'nearest' });
    }
  }, [highlightedIndex]);

  const selectProgramme = useCallback((value: string, label: string) => {
    setFormData(prev => ({ ...prev, programme: value }));
    setProgrammeSearch(label);
    setProgrammeDropdownOpen(false);
    setHighlightedIndex(-1);
    setTouched(prev => ({ ...prev, programme: true }));
  }, []);

  const handleProgrammeKeyDown = (e: React.KeyboardEvent) => {
    if (!programmeDropdownOpen) {
      if (e.key === 'ArrowDown' || e.key === 'Enter') {
        setProgrammeDropdownOpen(true);
        e.preventDefault();
      }
      return;
    }
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setHighlightedIndex(prev => (prev < flatFiltered.length - 1 ? prev + 1 : 0));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex(prev => (prev > 0 ? prev - 1 : flatFiltered.length - 1));
        break;
      case 'Enter':
        e.preventDefault();
        if (highlightedIndex >= 0 && flatFiltered[highlightedIndex]) {
          selectProgramme(flatFiltered[highlightedIndex].value, flatFiltered[highlightedIndex].label);
        }
        break;
      case 'Escape':
        setProgrammeDropdownOpen(false);
        setHighlightedIndex(-1);
        break;
    }
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as Element).closest("a, button, [data-enquiry-trigger]");
      const isEnquiry = target && (
        target.getAttribute("href")?.endsWith("#enquiry") ||
        target.getAttribute("href")?.endsWith("/enquiry") ||
        target.getAttribute("data-enquiry-trigger") === "true"
      );

      if (isEnquiry) {
        e.preventDefault();
        setIsOpen(true);
        window.history.pushState({}, '', '/enquiry');
      }
    };

    document.addEventListener("click", handleClick);

    if (typeof window !== "undefined" && window.location.hash === "#enquiry") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsOpen(true);
      window.history.replaceState({}, '', '/enquiry');
    }

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const [submitState, setSubmitState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const close = () => {
    setIsOpen(false);
    if (typeof window !== "undefined") {
      if (window.location.hash === "#enquiry") {
        window.history.pushState({}, "", window.location.pathname + window.location.search);
      } else if (window.location.pathname === "/enquiry") {
        window.history.pushState({}, "", "/");
      }
    }
    // Reset state after closing animation finishes
    setTimeout(() => {
      setSubmitState('idle');
      setFormData({ name: "", mobile: "", email: "", programme: "", qualification: "", city: "", help: "" });
      setTouched({});
      setProgrammeSearch("");
      setProgrammeDropdownOpen(false);
      setHighlightedIndex(-1);
    }, 300);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const getError = (id: string, value: string) => {
    switch (id) {
      case 'name': return !value.trim() ? "Please enter your full name." : "";
      case 'mobile': return !/^\d{10}$/.test(value) ? "Please enter a valid 10-digit mobile number." : "";
      case 'email': return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "Please enter a valid email address." : "";
      case 'programme': return !value ? "Please select a programme of interest." : "";
      case 'city': return !value.trim() ? "Please enter your city." : "";
      default: return "";
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;

    if (id === 'mobile') {
      // Only allow digits and restrict to exactly 10 characters
      const numericValue = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prev => ({ ...prev, [id]: numericValue }));
      return;
    }

    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id } = e.target;
    setTouched(prev => ({ ...prev, [id]: true }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const requiredFields = ['name', 'mobile', 'email', 'programme', 'city'];

    // Check if there are any errors
    const hasErrors = requiredFields.some(field => getError(field, formData[field as keyof typeof formData] || ""));

    if (hasErrors) {
      // Mark all required fields as touched to display validation messages
      const allTouched = requiredFields.reduce((acc, field) => {
        acc[field] = true;
        return acc;
      }, {} as Record<string, boolean>);

      setTouched(prev => ({ ...prev, ...allTouched }));
      return;
    }

    // Simulate API call and success animation
    setSubmitState('submitting');
    setTimeout(() => {
      setSubmitState('success');
      
      // Trigger brochure download
      const link = document.createElement('a');
      link.href = '/documents/Prospectus_AY_2026_27.pdf';
      link.download = 'Prospectus A.Y. 2026-27.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Auto close after 3 seconds
      setTimeout(() => {
        close();
      }, 3000);
    }, 1200);
  };

  const renderField = ({ id, label, type = "text", required = false, isSelect = false, options = [], placeholder = "" }: any) => {
    const value = formData[id as keyof typeof formData];
    const isTouched = touched[id];
    const error = getError(id, value);
    const showSuccess = required && isTouched && !error;
    const showError = required && isTouched && !!error;

    let borderColor = "border-gray-200 focus:border-[#11B1E3] focus:ring-[#11B1E3]";
    if (showError) borderColor = "border-[#E73649] focus:border-[#E73649] focus:ring-[#E73649]";
    else if (showSuccess) borderColor = "border-[#10B981] focus:border-[#10B981] focus:ring-[#10B981]";

    return (
      <div className="relative">
        <label htmlFor={id} className="mb-2 block text-[15px] font-medium text-ink font-poppins">
          {label}
          {required && <span className="text-[#E73649]">*</span>}
        </label>
        <div className="relative">
          {isSelect ? (
            <>
              <select
                id={id}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full appearance-none rounded-md border bg-[#FAFAFA] px-4 py-2.5 text-ink outline-none focus:ring-1 transition-all ${borderColor}`}
              >
                <option value="" disabled hidden className="text-gray-400">{placeholder}</option>
                {options.map((o: any) => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
              <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </>
          ) : (
            <>
              <input
                type={type}
                id={id}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={placeholder}
                inputMode={type === "tel" ? "numeric" : undefined}
                pattern={type === "tel" ? "[0-9]*" : undefined}
                className={`w-full rounded-md border bg-[#FAFAFA] px-4 py-2.5 outline-none focus:ring-1 transition-all pr-10 ${borderColor}`}
              />
              {showError && (
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E73649" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                </div>
              )}
              {showSuccess && (
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
              )}
            </>
          )}
        </div>
        {showError && (
          <p className="text-[#E73649] text-[12px] mt-1">{error}</p>
        )}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#0A2540]/60 backdrop-blur-sm transition-opacity"
        onClick={close}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative w-full max-w-[800px] rounded-[24px] bg-white shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200 max-h-[90dvh] flex flex-col overflow-hidden">
        <button
          onClick={close}
          className="absolute right-4 top-4 sm:right-6 sm:top-6 z-20 rounded-full p-2 text-gray-500 bg-gray-100 hover:bg-gray-200 hover:text-gray-800 transition-all"
          aria-label="Close"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Header Area (Does not scroll, prevents overlap) */}
        {submitState !== 'success' && (
          <div className="px-6 pt-6 pb-2 sm:px-10 sm:pt-10 sm:pb-6 shrink-0 z-10">
            <h2 className="text-left font-poppins text-2xl sm:text-4xl font-bold tracking-tight text-ink pr-8 sm:pr-0 pb-3">
              Request a callback
            </h2>
          </div>
        )}

        {/* Scrollable Content Area */}
        <div className={`overflow-y-auto flex-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${submitState === 'success' ? 'p-6 sm:p-10' : 'px-6 pb-6 sm:px-10 sm:pb-10 pt-2'}`}>
          {submitState === 'success' ? (
            <div className="flex flex-col items-center justify-center py-16 space-y-6 animate-in zoom-in-50 fade-in duration-500 font-poppins">
              <div className="rounded-full bg-[#10B981]/10 p-5">
                <div className="rounded-full bg-[#10B981] p-4 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
              </div>
              <div className="space-y-2 text-center">
                <h3 className="text-3xl sm:text-4xl font-bold text-ink">Thank You!</h3>
                <p className="text-lg text-gray-500 max-w-sm mx-auto">
                  Your request has been successfully received. Our team will reach out to you shortly.
                </p>
              </div>
            </div>
          ) : (
            <>
              <form className="space-y-5 font-[family-name:var(--font-poppins)]" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {renderField({ id: "name", label: "Name", required: true })}
                  {renderField({ id: "mobile", label: "Mobile Number", type: "tel", required: true })}
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {renderField({ id: "email", label: "Email", type: "email", required: true })}
                  {/* Searchable Programme Combobox */}
                  <div className="relative" ref={programmeRef}>
                    <label htmlFor="programme-search" className="mb-2 block text-[15px] font-medium text-ink font-poppins">
                      Programme of Interest <span className="text-[#E73649]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        ref={programmeInputRef}
                        type="text"
                        id="programme-search"
                        autoComplete="off"
                        value={programmeSearch}
                        placeholder="Type to search programmes..."
                        onChange={(e) => {
                          setProgrammeSearch(e.target.value);
                          setProgrammeDropdownOpen(true);
                          setHighlightedIndex(-1);
                          if (!e.target.value) {
                            setFormData(prev => ({ ...prev, programme: "" }));
                          }
                        }}
                        onFocus={() => setProgrammeDropdownOpen(true)}
                        onBlur={() => {
                          setTimeout(() => {
                            setTouched(prev => ({ ...prev, programme: true }));
                          }, 200);
                        }}
                        onKeyDown={handleProgrammeKeyDown}
                        className={`w-full rounded-md border bg-[#FAFAFA] px-4 py-2.5 outline-none focus:ring-1 transition-all pr-10 ${
                          touched.programme && !formData.programme
                            ? 'border-[#E73649] focus:border-[#E73649] focus:ring-[#E73649]'
                            : touched.programme && formData.programme
                            ? 'border-[#10B981] focus:border-[#10B981] focus:ring-[#10B981]'
                            : 'border-gray-200 focus:border-[#11B1E3] focus:ring-[#11B1E3]'
                        }`}
                      />
                      <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="11" cy="11" r="8" />
                          <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                      </div>
                    </div>

                    {/* Dropdown */}
                    {programmeDropdownOpen && (
                      <ul
                        ref={listRef}
                        className="absolute z-50 mt-1 w-full max-h-[220px] overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-xl"
                        style={{ scrollbarWidth: 'thin' }}
                      >
                        {Object.keys(groupedProgrammes).length === 0 ? (
                          <li className="px-4 py-3 text-sm text-gray-400 italic">No programmes found</li>
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
                      </ul>
                    )}

                    {/* Hidden input for form data */}
                    <input type="hidden" id="programme" value={formData.programme} />

                    {touched.programme && !formData.programme && (
                      <p className="text-[#E73649] text-[12px] mt-1">Please select a programme of interest.</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {renderField({ id: "qualification", label: "Highest Qualification", isSelect: true, options: [{value: '10th', label: '10th'}, {value: '12th', label: '12th'}, {value: 'diploma', label: 'Diploma'}, {value: 'bachelors', label: 'Bachelors'}, {value: 'masters', label: 'Masters'}], placeholder: "Select Qualification" })}
                  {renderField({ id: "city", label: "Your City ", required: true })}
                </div>

                <div className="relative">
                  <label htmlFor="help" className="mb-2 block text-[14px] font-medium text-ink font-poppins">How can we help? <span className="text-gray-400 font-normal">(optional)</span></label>
                  <textarea
                    id="help"
                    value={formData.help}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows={3}
                    className="w-full resize-none rounded-md border border-gray-200 bg-[#FAFAFA] px-4 py-2.5 outline-none focus:border-[#11B1E3] focus:ring-1 focus:ring-[#11B1E3] transition-all"
                  />
                </div>

                <div className="flex justify-center mt-6">
                  <button
                    type="submit"
                    disabled={submitState === 'submitting'}
                    className={`w-full sm:w-1/2 rounded-full py-3.5 font-bold text-white transition-all text-[18px] ${submitState === 'submitting'
                      ? 'bg-[#11B1E3]/70 cursor-not-allowed'
                      : 'bg-[#11B1E3] hover:bg-[#11B1E3]/90 hover:scale-[1.02] active:scale-95'
                      }`}
                  >
                    {submitState === 'submitting' ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>

                <p className="mt-4 text-center text-[11px] text-gray-400">
                  We'll only use this to respond to your enquiry. No spam. No sharing.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
