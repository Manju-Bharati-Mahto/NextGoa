"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type BrochureModalProps = {
  isOpen: boolean;
  onClose: () => void;
  programmeTitle: string;
};

export default function BrochureModal({ isOpen, onClose, programmeTitle }: BrochureModalProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    programme: programmeTitle,
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitState, setSubmitState] = useState<'idle' | 'submitting' | 'success'>('idle');

  // Update programme if prop changes
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFormData((prev) => ({ ...prev, programme: programmeTitle }));
  }, [programmeTitle]);

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
      default: return "";
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === 'mobile') {
      const numericValue = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prev => ({ ...prev, [id]: numericValue }));
      return;
    }
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { id } = e.target;
    setTouched(prev => ({ ...prev, [id]: true }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const requiredFields = ['name', 'mobile', 'email'];
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
      link.href = '/documents/Prospectus_AY_2026_27.pdf';
      link.download = 'Prospectus A.Y. 2026-27.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => {
        onClose();
        setSubmitState('idle');
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
        <label htmlFor={id} className="mb-2 block text-[15px] font-medium text-[#1C1C1D] font-poppins">
          {label}
          {required && <span className="text-[#E73649]">*</span>}
        </label>
        <div className="relative">
          <input
            type={type}
            id={id}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            inputMode={type === "tel" ? "numeric" : undefined}
            className={`w-full rounded-md border bg-[#FAFAFA] px-4 py-2.5 outline-none focus:ring-1 transition-all ${borderColor}`}
            readOnly={id === "programme"}
          />
        </div>
        {showError && <p className="text-[#E73649] text-[12px] mt-1">{error}</p>}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 text-left">
      <div className="absolute inset-0 bg-[#0A2540]/60 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative w-full max-w-[600px] rounded-[24px] bg-white shadow-2xl z-10 flex flex-col overflow-hidden">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 rounded-full p-2 text-gray-500 bg-gray-100 hover:bg-gray-200 transition-all"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {submitState !== 'success' && (
          <div className="px-6 pt-8 pb-4 border-b border-gray-100">
            <h2 className="text-2xl font-bold text-[#1C1C1D] font-poppins">
              Download Brochure
            </h2>
            <p className="text-gray-500 text-sm mt-1">Please fill in your details to download the brochure.</p>
          </div>
        )}

        <div className="p-6">
          {submitState === 'success' ? (
            <div className="flex flex-col items-center justify-center py-12 px-8 space-y-6 text-center animate-in zoom-in-50 fade-in duration-500">
              <div className="rounded-full bg-[#10B981]/10 p-5">
                <div className="rounded-full bg-[#10B981] p-4 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-[#1C1C1D]">Thank You!</h3>
                <p className="text-[15px] text-gray-500 leading-relaxed">
                  Your brochure is downloading automatically. We hope you find it helpful!
                </p>
              </div>
            </div>
          ) : (
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {renderField({ id: "name", label: "Name", required: true })}
                {renderField({ id: "mobile", label: "Mobile Number", type: "tel", required: true })}
              </div>
              
              {renderField({ id: "email", label: "Email", type: "email", required: true })}
              
              <div className="relative opacity-80 pointer-events-none">
                {renderField({ id: "programme", label: "Programme of Interest", required: true })}
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={submitState === 'submitting'}
                  className="w-full rounded-full py-3.5 font-bold text-white transition-all bg-[#0CAADD] hover:bg-[#0CAADD]/90 text-[16px]"
                >
                  {submitState === 'submitting' ? 'Processing...' : 'Download Brochure'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
