"use client";

import React, { useState } from "react";

export default function GetInTouch() {
  const [form, setForm] = useState({ fullName: "", phone: "", email: "", help: "" });
  const [showPopup, setShowPopup] = useState(false);

  const isComplete =
    form.fullName.trim() !== "" &&
    form.phone.trim() !== "" &&
    form.email.trim() !== "" &&
    form.help.trim() !== "";

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!isComplete) return;

    try {
      const response = await fetch("/api/form-submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formName: "Contact Form",
          sendToCRM: true,
          sendToGoogleSheet: false,
          data: form,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setShowPopup(true);

        setForm({
          fullName: "",
          phone: "",
          email: "",
          help: "",
        });
      } else {
        alert(data.message || "Failed to submit form");
      }
    } catch (error) {
      console.error("Submit Error:", error);
      alert("Something went wrong");
    }
  };

  return (
    <section className="w-full bg-[#F8F9FA] px-6 font-poppins py-12 sm:py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-[#E74C5E] font-bold text-[36px] sm:text-[44px] mb-8">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Form Column */}
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>

            {/* Full Name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="fullName" className="text-[15px] text-[#111111] font-medium">
                Full name
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Full Name"
                value={form.fullName}
                onChange={handleChange}
                className="w-full h-12 px-4 rounded-[8px] border border-[#E74C5E] bg-white focus:outline-none focus:ring-2 focus:ring-[#E74C5E]/20 text-[15px]"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-[15px] text-[#111111] font-medium">
                Phone
              </label>
              <div className="flex w-full h-12 rounded-[8px] border border-gray-300 bg-white overflow-hidden focus-within:ring-2 focus-within:ring-[#E74C5E]/20 focus-within:border-[#E74C5E]">
                <div className="flex items-center gap-2 px-3 bg-white border-r border-gray-300">
                  <span className="w-6 h-4 bg-gray-200 overflow-hidden relative inline-block rounded-sm">
                    <div className="w-full h-1/3 bg-[#FF9933]"></div>
                    <div className="w-full h-1/3 bg-white"></div>
                    <div className="w-full h-1/3 bg-[#138808]"></div>
                  </span>
                  <span className="text-[15px] font-medium text-[#111111]">+91</span>
                </div>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Mobile Number"
                  value={form.phone}
                  onChange={handleChange}
                  className="flex-1 px-4 focus:outline-none text-[15px]"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-[15px] text-[#111111] font-medium">
                Email
              </label>
              <div className="relative w-full">
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your Email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full h-12 pl-4 pr-10 rounded-[8px] border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#E74C5E]/20 focus:border-[#E74C5E] text-[15px] appearance-none"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

            {/* How can we Help? */}
            <div className="flex flex-col gap-2">
              <label htmlFor="help" className="text-[15px] text-[#111111] font-medium">
                How can we Help?
              </label>
              <textarea
                id="help"
                placeholder="Example"
                value={form.help}
                onChange={handleChange}
                className="w-full h-[120px] p-4 rounded-[8px] border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#E74C5E]/20 focus:border-[#E74C5E] text-[15px] resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={!isComplete}
                className={`font-bold text-[16px] px-10 py-3.5 rounded-full transition-all inline-block
                  ${isComplete
                    ? "bg-[#E74C5E] hover:bg-[#D63E50] text-white cursor-pointer"
                    : "bg-gray-300 text-gray-400 cursor-not-allowed"
                  }`}
              >
                Submit
              </button>
            </div>
          </form>

          {/* Right Map - Google Maps */}
          <div className="relative w-full h-[400px] lg:h-[500px] rounded-[24px] overflow-hidden shadow-sm border-2 border-[#E74C5E]">
            <iframe
              title="Parul University Goa Location"
              src="https://maps.google.com/maps?q=Parul+University+Goa&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="absolute w-[calc(100%+400px)] h-[calc(100%+400px)] -top-[200px] -left-[200px] pointer-events-none"
            />
          </div>
        </div>
      </div>

      {/* Thank You Popup */}
      {showPopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setShowPopup(false)}
        >
          <div
            className="relative bg-white rounded-[28px] px-10 py-12 max-w-sm w-full mx-4 text-center shadow-2xl animate-[popIn_0.3s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Checkmark */}
            <div className="w-20 h-20 bg-[#E74C5E]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="20" fill="#E74C5E" />
                <path d="M12 20L18 26L28 14" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <h3 className="font-poppins font-bold text-[28px] text-[#111111] mb-3">Thank You!</h3>
            <p className="text-[15px] text-gray-500 leading-relaxed mb-8">
              We&apos;ve received your message and will get back to you shortly.
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="bg-[#E74C5E] hover:bg-[#D63E50] text-white font-bold text-[15px] px-8 py-3 rounded-full transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.85); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
}
