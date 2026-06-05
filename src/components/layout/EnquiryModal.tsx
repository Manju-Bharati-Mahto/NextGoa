"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function EnquiryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/enquiry") {
      setIsOpen(true);
    }
  }, [pathname]);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    programme: "",
    marks: "",
    city: "",
    help: ""
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});

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
      setFormData({ name: "", mobile: "", email: "", programme: "", marks: "", city: "", help: "" });
      setTouched({});
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
                {renderField({
                  id: "programme",
                  label: "Programme of Interest ",
                  isSelect: true,
                  required: true,
                  placeholder: "Select a programme",
                  options: [
                    { value: "engineering", label: "B.Tech" },
                    { value: "management", label: "Management Studies" },
                    { value: "pharmacy", label: "Pharmacy" },
                    { value: "nursing", label: "Nursing" },
                    { value: "hotel-management", label: "Hotel Management" },
                    { value: "physiotherapy", label: "Physiotherapy" }
                  ]
                })}
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {renderField({ id: "marks", label: "Class 12 / Last %" })}
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
                    "Request a Callback"
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
