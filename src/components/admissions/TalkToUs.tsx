"use client";

import React, { useState } from "react";

export function TalkToUs() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    programme: "",
    percentage: "",
    city: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    alert("Thank you! We'll call you back soon.");
  };

  return (
    <section className="w-full bg-[#f9f9f9] py-20 px-4 sm:px-8 xl:px-16">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
        
        {/* Left Side: Copy & Info */}
        <div className="w-full lg:w-[45%] xl:w-1/2 flex flex-col pt-4">
          <h3 className="text-ink mb-2 !text-left section-subheading">
            Talk to us
          </h3>
          <h2 className="text-[#ee364f] !text-left mb-6 section-heading">
            Talk to a<br className="hidden lg:block" /> counsellor in 24<br className="hidden lg:block" /> hours.
          </h2>
          
          <p className="text-ink mb-8 max-w-[500px] section-body">
            Tell us a bit about yourself. We'll call back with programme details, fees, and your next steps.
          </p>
          
          <div className="flex flex-col gap-4 mb-10">
            <div className="flex items-start gap-3">
              <span className="material-symbols-rounded text-[#1fc76a] text-[28px] shrink-0 mt-[-2px]">
                check_circle
              </span>
              <span className="font-[family-name:var(--font-poppins)] text-ink text-[16px] font-medium">
                Personal counsellor matched to your programme
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="material-symbols-rounded text-[#1fc76a] text-[28px] shrink-0 mt-[-2px]">
                check_circle
              </span>
              <span className="font-[family-name:var(--font-poppins)] text-ink text-[16px] font-medium">
                Fee + scholarship guidance for your profile
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="material-symbols-rounded text-[#1fc76a] text-[28px] shrink-0 mt-[-2px]">
                check_circle
              </span>
              <span className="font-[family-name:var(--font-poppins)] text-ink text-[16px] font-medium">
                Programme fit advice, even if you're undecided
              </span>
            </div>
          </div>
          
          {/* Action Box */}
          <div className="bg-white border border-gray-300 rounded-[12px] p-6 max-w-[500px]">
            <h4 className="font-poppins font-semibold text-[18px] text-ink mb-4">
              Prefer to talk now?
            </h4>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#"
                className="flex items-center justify-center bg-[#00b25c] hover:bg-[#00a050] text-white font-bold text-[15px] py-3 px-6 rounded-full transition-colors flex-1"
              >
                Chat on WhatsApp
              </a>
              <a 
                href="tel:18008909090"
                className="flex items-center justify-center gap-2 bg-[#ee364f] hover:bg-[#d62d43] text-white font-bold text-[15px] py-3 px-6 rounded-full transition-colors flex-1"
              >
                <span className="material-symbols-rounded text-[20px]">call</span>
                1800 890 9090
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Form Card */}
        <div className="w-full lg:w-[55%] xl:w-1/2">
          <div className="bg-white rounded-[24px] p-8 sm:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-gray-100">
            <h3 className="font-poppins font-semibold text-[28px] sm:text-[32px] text-ink text-center mb-8">
              Request a callback
            </h3>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              
              {/* Row 1 */}
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="flex flex-col gap-1.5 flex-1">
                  <label className="font-[family-name:var(--font-poppins)] text-[14px] text-ink font-medium">
                    Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#f8f8f8] border border-transparent focus:border-gray-200 focus:bg-white focus:outline-none rounded-lg px-4 py-3 text-[15px] font-[family-name:var(--font-poppins)] transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5 flex-1">
                  <label className="font-[family-name:var(--font-poppins)] text-[14px] text-ink font-medium">
                    Mobile Number*
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    required
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full bg-[#f8f8f8] border border-transparent focus:border-gray-200 focus:bg-white focus:outline-none rounded-lg px-4 py-3 text-[15px] font-[family-name:var(--font-poppins)] transition-colors"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex flex-col gap-1.5">
                <label className="font-[family-name:var(--font-poppins)] text-[14px] text-ink font-medium">
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#f8f8f8] border border-transparent focus:border-gray-200 focus:bg-white focus:outline-none rounded-lg px-4 py-3 text-[15px] font-[family-name:var(--font-poppins)] transition-colors"
                />
              </div>

              {/* Row 3 */}
              <div className="flex flex-col gap-1.5">
                <label className="font-[family-name:var(--font-poppins)] text-[14px] text-ink font-medium">
                  Programme of Interest *
                </label>
                <div className="relative">
                  <select
                    name="programme"
                    required
                    value={formData.programme}
                    onChange={handleChange}
                    className="w-full appearance-none bg-[#f8f8f8] border border-transparent focus:border-gray-200 focus:bg-white focus:outline-none rounded-lg px-4 py-3 text-[15px] font-[family-name:var(--font-poppins)] text-gray-500 transition-colors"
                  >
                    <option value="" disabled>Select a programme</option>
                    <option value="btech">B.Tech</option>
                    <option value="mba">MBA</option>
                    <option value="bba">BBA</option>
                    <option value="design">Design</option>
                  </select>
                  <span className="material-symbols-rounded absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                    expand_more
                  </span>
                </div>
              </div>

              {/* Row 4 */}
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="flex flex-col gap-1.5 flex-1">
                  <label className="font-[family-name:var(--font-poppins)] text-[14px] text-ink font-medium">
                    Class 12 / Last %
                  </label>
                  <input
                    type="text"
                    name="percentage"
                    value={formData.percentage}
                    onChange={handleChange}
                    className="w-full bg-[#f8f8f8] border border-transparent focus:border-gray-200 focus:bg-white focus:outline-none rounded-lg px-4 py-3 text-[15px] font-[family-name:var(--font-poppins)] transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5 flex-1">
                  <label className="font-[family-name:var(--font-poppins)] text-[14px] text-ink font-medium">
                    Your City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full bg-[#f8f8f8] border border-transparent focus:border-gray-200 focus:bg-white focus:outline-none rounded-lg px-4 py-3 text-[15px] font-[family-name:var(--font-poppins)] transition-colors"
                  />
                </div>
              </div>

              {/* Row 5 */}
              <div className="flex flex-col gap-1.5">
                <label className="font-[family-name:var(--font-poppins)] text-[14px] text-ink font-medium">
                  How can we help? <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-[#f8f8f8] border border-transparent focus:border-gray-200 focus:bg-white focus:outline-none rounded-lg px-4 py-3 text-[15px] font-[family-name:var(--font-poppins)] transition-colors resize-none"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#0caadd] hover:bg-[#0b9ac7] text-white font-bold text-[16px] sm:text-[18px] py-4 rounded-full transition-colors mt-2"
              >
                Request a Callback
              </button>

              <p className="text-center text-[11px] sm:text-[12px] text-gray-400 font-[family-name:var(--font-poppins)] mt-2">
                We'll only use this to respond to your enquiry. No spam. No sharing.
              </p>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
