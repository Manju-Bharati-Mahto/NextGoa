"use client";

import React, { useState, useEffect } from 'react';

export function DownloadBrochureModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitState, setSubmitState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const [pdfUrl, setPdfUrl] = useState('/documents/Prospectus_AY_2026_27.pdf');
  const [pdfFilename, setPdfFilename] = useState('Prospectus A.Y. 2026-27.pdf');

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as Element).closest("[data-brochure-trigger]");
      if (target && target.getAttribute("data-brochure-trigger") === "true") {
        e.preventDefault();
        
        const customUrl = target.getAttribute("data-pdf-url");
        if (customUrl) {
          setPdfUrl(customUrl);
          setPdfFilename(customUrl.split('/').pop() || 'document.pdf');
        } else {
          setPdfUrl('/documents/Prospectus_AY_2026_27.pdf');
          setPdfFilename('Prospectus A.Y. 2026-27.pdf');
        }

        setIsOpen(true);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const close = () => {
    setIsOpen(false);
    setTimeout(() => {
      setSubmitState('idle');
      setFormData({ name: "", email: "", phone: "" });
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

  const getError = (id: string, value: string) => {
    switch (id) {
      case 'name': return !value.trim() ? "Please enter your full name." : "";
      case 'phone': return !/^\d{10}$/.test(value) ? "Please enter a valid 10-digit mobile number." : "";
      case 'email': return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "Please enter a valid email address." : "";
      default: return "";
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === 'phone' && value && !/^\d*$/.test(value)) return;
    if (id === 'phone' && value.length > 10) return;
    
    setFormData(prev => ({ ...prev, [id]: value }));
    if (touched[id]) setTouched(prev => ({ ...prev, [id]: false }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { id } = e.target;
    setTouched(prev => ({ ...prev, [id]: true }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const requiredFields = ['name', 'phone', 'email'];
    const hasErrors = requiredFields.some(field => getError(field, formData[field as keyof typeof formData] || ""));

    if (hasErrors) {
      const allTouched = requiredFields.reduce((acc, field) => {
        acc[field] = true;
        return acc;
      }, {} as Record<string, boolean>);
      setTouched(prev => ({ ...prev, ...allTouched }));
      return;
    }

    setSubmitState('submitting');
    
    setTimeout(() => {
      setSubmitState('success');
      
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = pdfFilename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => {
        close();
      }, 3000);
    }, 1200);
  };

  const renderField = ({ id, label, type = "text", required = false }: any) => {
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
        <label htmlFor={id} className="mb-1.5 block text-[14px] font-medium text-ink font-poppins">
          {label}
          {required && <span className="text-[#E73649] ml-1">*</span>}
        </label>
        <div className="relative">
          <input
            type={type}
            id={id}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            inputMode={type === "tel" ? "numeric" : undefined}
            className={`w-full rounded-lg border bg-[#FAFAFA] px-4 py-2.5 outline-none focus:ring-1 transition-all ${borderColor}`}
          />
        </div>
        {showError && <p className="text-[#E73649] text-[12px] mt-1.5">{error}</p>}
      </div>
    );
  };

  if (!isOpen) return null;

  return (
    <div data-lenis-prevent="true" className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#0A2540]/60 backdrop-blur-sm transition-opacity"
        onClick={close}
        aria-hidden="true"
      />

      <div className="relative bg-white rounded-[24px] shadow-2xl w-full max-w-md overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200 font-poppins flex flex-col text-left">
        {/* Close Button */}
        <button
          onClick={close}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 text-gray-400 hover:text-gray-800 bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors z-20"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {submitState === 'success' ? (
          <div className="flex flex-col items-center justify-center py-16 px-8 space-y-6 text-center animate-in zoom-in-50 fade-in duration-500">
            <div className="rounded-full bg-[#10B981]/10 p-5">
              <div className="rounded-full bg-[#10B981] p-4 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-ink">Thank You!</h3>
              <p className="text-[15px] text-gray-500 leading-relaxed">
                Your brochure is downloading automatically. We hope you find it helpful!
              </p>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-8 pt-8 sm:pt-10">
            <div className="mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-ink leading-tight pr-8">
                Download Brochure
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                Please enter your details to receive the comprehensive prospectus.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              
              {renderField({ id: "name", label: "Full Name", required: true })}
              {renderField({ id: "email", label: "Email Address", type: "email", required: true })}
              {renderField({ id: "phone", label: "Phone Number", type: "tel", required: true })}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitState === 'submitting'}
                  className={`w-full text-white font-bold text-[16px] py-3.5 px-6 rounded-full flex items-center justify-center gap-2 transition-all ${
                    submitState === 'submitting' 
                      ? 'bg-[#11B1E3]/70 cursor-not-allowed' 
                      : 'bg-[#11B1E3] hover:bg-[#11B1E3]/90 hover:scale-[1.02] active:scale-95'
                  }`}
                >
                  {submitState === 'submitting' ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Preparing...
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                      Download Brochure
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
