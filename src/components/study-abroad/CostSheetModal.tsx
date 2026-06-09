"use client";

import { useState } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

type CostSheetModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CostSheetModal({ isOpen, onClose }: CostSheetModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    pathway: "",
    country: "",
    year: "",
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 4));
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSelect = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Auto advance to next step for radio buttons
    setTimeout(() => {
      handleNext();
    }, 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setStep(1);
        setFormData({ pathway: "", country: "", year: "", name: "", email: "", phone: "" });
        onClose();
      }, 3000);
    }, 1500);
  };

  const PATHWAYS = ["Bachelor's 2+2", "Master's 1+1", "Progression 3+1+1", "Bachelor's (Transfer)"];
  const COUNTRIES = ["USA", "UK", "Canada", "Australia", "New Zealand", "France", "Germany"];
  const YEARS = ["2025", "2026", "2027", "2028 or later"];

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 ${poppins.className}`}>
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden flex flex-col relative animate-slide-up">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-800 transition-colors z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Progress Bar */}
        <div className="w-full bg-gray-100 h-1.5">
          <div
            className="bg-[#eb3b47] h-full transition-all duration-500 ease-out"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>

        <div className="p-8 md:p-10">
          {!isSuccess ? (
            <>
              {/* Step 1 */}
              {step === 1 && (
                <div className="animate-fade-in">
                  <h3 className="text-sm font-bold text-[#eb3b47] tracking-wider uppercase mb-2">Step 1 of 4</h3>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Which pathway are you interested in?</h2>
                  <div className="flex flex-col gap-3">
                    {PATHWAYS.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleSelect("pathway", option)}
                        className={`w-full text-left px-6 py-4 rounded-xl border-2 transition-all ${
                          formData.pathway === option
                            ? "border-[#eb3b47] bg-red-50 text-[#eb3b47] font-semibold"
                            : "border-gray-200 hover:border-gray-300 text-gray-700"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <div className="animate-fade-in">
                  <h3 className="text-sm font-bold text-[#eb3b47] tracking-wider uppercase mb-2">Step 2 of 4</h3>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Which country are you targeting?</h2>
                  <div className="grid grid-cols-2 gap-3">
                    {COUNTRIES.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleSelect("country", option)}
                        className={`w-full text-left px-5 py-3 rounded-xl border-2 transition-all ${
                          formData.country === option
                            ? "border-[#eb3b47] bg-red-50 text-[#eb3b47] font-semibold"
                            : "border-gray-200 hover:border-gray-300 text-gray-700"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <div className="animate-fade-in">
                  <h3 className="text-sm font-bold text-[#eb3b47] tracking-wider uppercase mb-2">Step 3 of 4</h3>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">When do you plan to start?</h2>
                  <div className="flex flex-col gap-3">
                    {YEARS.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleSelect("year", option)}
                        className={`w-full text-left px-6 py-4 rounded-xl border-2 transition-all ${
                          formData.year === option
                            ? "border-[#eb3b47] bg-red-50 text-[#eb3b47] font-semibold"
                            : "border-gray-200 hover:border-gray-300 text-gray-700"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4 */}
              {step === 4 && (
                <div className="animate-fade-in">
                  <h3 className="text-sm font-bold text-[#eb3b47] tracking-wider uppercase mb-2">Final Step</h3>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Get your cost sheet</h2>
                  <p className="text-gray-500 mb-6 text-sm">We'll email you the detailed brochure and fee structure.</p>
                  
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#eb3b47] focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#eb3b47] focus:border-transparent outline-none transition-all"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#eb3b47] focus:border-transparent outline-none transition-all"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-4 w-full bg-[#eb3b47] hover:bg-[#d6323c] text-white font-bold py-4 rounded-xl shadow-lg transition-all disabled:opacity-70 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        "Download Brochure & Cost Sheet"
                      )}
                    </button>
                  </form>
                </div>
              )}
            </>
          ) : (
            /* Success State */
            <div className="flex flex-col items-center justify-center py-10 animate-fade-in text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Check your inbox!</h2>
              <p className="text-gray-500 max-w-sm">We've successfully generated your custom cost sheet and sent it to your email.</p>
            </div>
          )}

          {/* Navigation Controls (Only show for steps 2-4) */}
          {!isSuccess && step > 1 && (
            <button
              onClick={handleBack}
              className="mt-6 flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back
            </button>
          )}
        </div>
        
        <style>{`
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(20px) scale(0.95); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-slide-up { animation: slideUp 0.3s ease-out forwards; }
          .animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
        `}</style>
      </div>
    </div>
  );
}
