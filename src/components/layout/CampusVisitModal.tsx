"use client";

import { useEffect, useState } from "react";

export function CampusVisitModal() {
  const [isOpen, setIsOpen] = useState(false);

  // Step 1: date/time, Step 2: contact form
  const [step, setStep] = useState<1 | 2>(1);

  const [visitData, setVisitData] = useState({
    date: "",
    time: "",
    name: "",
    mobile: "",
    email: "",
    city: "",
    visitors: "1",
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitState, setSubmitState] = useState<'idle' | 'submitting' | 'success'>('idle');

  // Listen for campus-visit-trigger clicks
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as Element).closest("[data-campus-visit-trigger]");
      if (target) {
        e.preventDefault();
        setIsOpen(true);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const close = () => {
    setIsOpen(false);
    setTimeout(() => {
      setStep(1);
      setSubmitState('idle');
      setVisitData({ date: "", time: "", name: "", mobile: "", email: "", city: "", visitors: "1" });
      setTouched({});
    }, 300);
  };

  if (!isOpen) return null;

  const getError = (id: string, value: string) => {
    switch (id) {
      case 'date': {
        if (!value) return "Please select a date.";
        const d = new Date(value);
        if (d.getDay() === 0) return "Sundays are not available for campus tours.";
        return "";
      }
      case 'time': return !value ? "Please select a time slot." : "";
      case 'name': return !value.trim() ? "Please enter your name." : "";
      case 'mobile': return !/^\d{10}$/.test(value) ? "Please enter a valid 10-digit number." : "";
      case 'email': return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "Please enter a valid email." : "";
      case 'city': return !value.trim() ? "Please enter your city." : "";
      default: return "";
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    if (id === 'mobile') {
      const numericValue = value.replace(/\D/g, '').slice(0, 10);
      setVisitData(prev => ({ ...prev, [id]: numericValue }));
      return;
    }
    setVisitData(prev => ({ ...prev, [id]: value }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    setTouched(prev => ({ ...prev, [e.target.id]: true }));
  };

  // Compute min and max dates for the calendar
  const today = new Date();
  const minDate = new Date(today);
  minDate.setDate(today.getDate() + 1); // Start from tomorrow
  const maxDate = new Date(today);
  maxDate.setDate(today.getDate() + 30); // Up to 30 days

  const timeSlots = [
    { value: "09:00", label: "9:00 AM" },
    { value: "10:00", label: "10:00 AM" },
    { value: "11:00", label: "11:00 AM" },
    { value: "12:00", label: "12:00 PM" },
    { value: "14:00", label: "2:00 PM" },
    { value: "15:00", label: "3:00 PM" },
    { value: "16:00", label: "4:00 PM" },
  ];

  const handleStep1Next = () => {
    const step1Fields = ['date', 'time'];
    const hasErrors = step1Fields.some(f => getError(f, visitData[f as keyof typeof visitData]));
    if (hasErrors) {
      const allTouched = step1Fields.reduce((acc, f) => { acc[f] = true; return acc; }, {} as Record<string, boolean>);
      setTouched(prev => ({ ...prev, ...allTouched }));
      return;
    }
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const step2Fields = ['name', 'mobile', 'email', 'city'];
    const hasErrors = step2Fields.some(f => getError(f, visitData[f as keyof typeof visitData]));
    if (hasErrors) {
      const allTouched = step2Fields.reduce((acc, f) => { acc[f] = true; return acc; }, {} as Record<string, boolean>);
      setTouched(prev => ({ ...prev, ...allTouched }));
      return;
    }
    setSubmitState('submitting');
    setTimeout(() => {
      setSubmitState('success');
      setTimeout(() => close(), 3000);
    }, 1200);
  };

  const renderInput = (id: string, label: string, type = "text", required = true) => {
    const value = visitData[id as keyof typeof visitData];
    const isTouched = touched[id];
    const error = getError(id, value);
    const showError = required && isTouched && !!error;
    const showSuccess = required && isTouched && !error;

    let borderColor = "border-gray-200 focus:border-[#fedb2f] focus:ring-[#fedb2f]";
    if (showError) borderColor = "border-[#E73649] focus:border-[#E73649] focus:ring-[#E73649]";
    else if (showSuccess) borderColor = "border-[#10B981] focus:border-[#10B981] focus:ring-[#10B981]";

    return (
      <div className="relative">
        <label htmlFor={id} className="mb-2 block text-[15px] font-medium text-ink font-poppins">
          {label}{required && <span className="text-[#E73649]">*</span>}
        </label>
        <input
          type={type}
          id={id}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          inputMode={type === "tel" ? "numeric" : undefined}
          pattern={type === "tel" ? "[0-9]*" : undefined}
          className={`w-full rounded-md border bg-[#FAFAFA] px-4 py-2.5 outline-none focus:ring-1 transition-all ${borderColor}`}
        />
        {showError && <p className="text-[#E73649] text-[12px] mt-1">{error}</p>}
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
      <div className="relative w-full max-w-[560px] rounded-[24px] bg-white shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200 max-h-[90dvh] flex flex-col overflow-hidden">
        <button
          onClick={close}
          className="absolute right-4 top-4 sm:right-6 sm:top-6 z-20 rounded-full p-2 text-gray-500 bg-gray-100 hover:bg-gray-200 hover:text-gray-800 transition-all"
          aria-label="Close"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] p-6 sm:p-10">
          {submitState === 'success' ? (
            <div className="flex flex-col items-center justify-center py-16 space-y-6 animate-in zoom-in-50 fade-in duration-500 font-poppins">
              <div className="rounded-full bg-[#10B981]/10 p-5">
                <div className="rounded-full bg-[#10B981] p-4 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </div>
              <div className="space-y-2 text-center">
                <h3 className="text-3xl sm:text-4xl font-bold text-ink">Visit Booked!</h3>
                <p className="text-lg text-gray-500 max-w-sm mx-auto">
                  Your campus visit has been scheduled. We&apos;ll send you a confirmation shortly.
                </p>
              </div>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink font-poppins pr-8">
                  Book a Campus Visit
                </h2>
                <p className="text-gray-500 mt-1 text-sm font-poppins">
                  {step === 1 ? "Choose your preferred date & time" : "Fill in your details to confirm"}
                </p>
                {/* Step Indicator */}
                <div className="flex items-center gap-3 mt-4">
                  <div className={`flex items-center gap-2 text-sm font-medium font-poppins ${step >= 1 ? 'text-[#fedb2f]' : 'text-gray-300'}`}>
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step >= 1 ? 'bg-[#fedb2f] text-ink' : 'bg-gray-200 text-gray-400'}`}>1</span>
                    Schedule
                  </div>
                  <div className={`flex-1 h-[2px] ${step >= 2 ? 'bg-[#fedb2f]' : 'bg-gray-200'}`} />
                  <div className={`flex items-center gap-2 text-sm font-medium font-poppins ${step >= 2 ? 'text-[#fedb2f]' : 'text-gray-300'}`}>
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step >= 2 ? 'bg-[#fedb2f] text-ink' : 'bg-gray-200 text-gray-400'}`}>2</span>
                    Details
                  </div>
                </div>
              </div>

              {step === 1 ? (
                /* Step 1: Date & Time */
                <div className="space-y-5 font-poppins">
                  {/* Date Selection */}
                  <div>
                    <label htmlFor="date" className="mb-2 block text-[15px] font-medium text-ink">
                      Preferred Date<span className="text-[#E73649]">*</span>
                    </label>
                    <input
                      type="date"
                      id="date"
                      min={minDate.toISOString().split('T')[0]}
                      max={maxDate.toISOString().split('T')[0]}
                      value={visitData.date}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full appearance-none rounded-md border bg-[#FAFAFA] px-4 py-2.5 outline-none focus:ring-1 transition-all ${
                        touched.date && getError('date', visitData.date)
                          ? 'border-[#E73649] focus:border-[#E73649] focus:ring-[#E73649]'
                          : 'border-gray-200 focus:border-[#fedb2f] focus:ring-[#fedb2f]'
                      }`}
                    />
                    {touched.date && getError('date', visitData.date) && (
                      <p className="text-[#E73649] text-[12px] mt-1">{getError('date', visitData.date)}</p>
                    )}
                  </div>

                  {/* Time Slot Selection */}
                  <div>
                    <label className="mb-3 block text-[15px] font-medium text-ink">
                      Preferred Time<span className="text-[#E73649]">*</span>
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                      {timeSlots.map(slot => (
                        <button
                          key={slot.value}
                          type="button"
                          onClick={() => {
                            setVisitData(prev => ({ ...prev, time: slot.value }));
                            setTouched(prev => ({ ...prev, time: true }));
                          }}
                          className={`py-2.5 px-3 rounded-lg text-sm font-medium transition-all border ${
                            visitData.time === slot.value
                              ? 'bg-[#fedb2f] border-[#fedb2f] text-ink shadow-sm'
                              : 'bg-white border-gray-200 text-gray-600 hover:border-[#fedb2f] hover:bg-[#fedb2f]/10'
                          }`}
                        >
                          {slot.label}
                        </button>
                      ))}
                    </div>
                    {touched.time && !visitData.time && (
                      <p className="text-[#E73649] text-[12px] mt-1">Please select a time slot.</p>
                    )}
                  </div>

                  {/* Number of Visitors */}
                  <div>
                    <label className="mb-2 block text-[15px] font-medium text-ink">
                      Number of Visitors
                    </label>
                    <div className="flex items-center justify-between w-full rounded-md border border-gray-200 bg-[#FAFAFA] px-3 py-1.5 outline-none transition-all focus-within:border-[#fedb2f] focus-within:ring-1 focus-within:ring-[#fedb2f]">
                      <button 
                        type="button" 
                        onClick={() => setVisitData(prev => ({ ...prev, visitors: String(Math.max(1, parseInt(prev.visitors) - 1)) }))}
                        className="w-8 h-8 flex items-center justify-center rounded bg-white border border-gray-200 hover:bg-gray-50 transition-colors text-ink font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={parseInt(visitData.visitors) <= 1}
                      >
                        -
                      </button>
                      <span className="text-ink font-medium select-none text-[15px]">
                        {visitData.visitors} {parseInt(visitData.visitors) === 1 ? 'person' : 'people'}
                      </span>
                      <button 
                        type="button" 
                        onClick={() => setVisitData(prev => ({ ...prev, visitors: String(Math.min(10, parseInt(prev.visitors) + 1)) }))}
                        className="w-8 h-8 flex items-center justify-center rounded bg-white border border-gray-200 hover:bg-gray-50 transition-colors text-ink font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={parseInt(visitData.visitors) >= 10}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleStep1Next}
                    className="w-full bg-[#fedb2f] hover:bg-[#e5c52a] text-ink text-[16px] font-bold py-3.5 rounded-full transition-all hover:scale-[1.02] active:scale-95 mt-2"
                  >
                    Next →
                  </button>
                </div>
              ) : (
                /* Step 2: Contact Form */
                <form className="space-y-5 font-poppins" onSubmit={handleSubmit}>
                  {/* Date/Time Summary */}
                  <div className="bg-[#fedb2f]/10 border border-[#fedb2f]/30 rounded-xl p-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Your visit</p>
                      <p className="text-ink font-semibold">
                        {new Date(visitData.date).toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' })} at {timeSlots.find(s => s.value === visitData.time)?.label}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-sm text-[#0EB1E1] hover:underline font-medium"
                    >
                      Change
                    </button>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {renderInput("name", "Full Name ")}
                    {renderInput("mobile", "Mobile Number ", "tel")}
                  </div>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {renderInput("email", "Email ", "email")}
                    {renderInput("city", "City ")}
                  </div>

                  <div className="flex gap-3 mt-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 border-2 border-gray-200 text-ink text-[15px] font-semibold py-3 rounded-full hover:bg-gray-50 transition-all"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      disabled={submitState === 'submitting'}
                      className={`flex-1 text-[15px] font-bold py-3 rounded-full transition-all ${
                        submitState === 'submitting'
                          ? 'bg-[#fedb2f]/70 text-ink/70 cursor-not-allowed'
                          : 'bg-[#fedb2f] hover:bg-[#e5c52a] text-ink hover:scale-[1.02] active:scale-95'
                      }`}
                    >
                      {submitState === 'submitting' ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Booking...
                        </span>
                      ) : (
                        "Confirm Visit"
                      )}
                    </button>
                  </div>

                  <p className="text-center text-[11px] text-gray-400 mt-2">
                    We&apos;ll send a confirmation to your email and mobile number.
                  </p>
                </form>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
