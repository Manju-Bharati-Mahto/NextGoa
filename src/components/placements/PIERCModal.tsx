"use client";

import React, { useState } from "react";

interface FormData {
  // Step 1
  fullName: string;
  email: string;
  phone: string;
  college: string;
  // Step 2
  startupName: string;
  stage: string;
  domain: string;
  problem: string;
}

const STAGES = ["Idea Stage", "Prototype Ready", "MVP Launched", "Revenue Generating", "Scaling"];
const DOMAINS = ["AgriTech", "EdTech", "HealthTech", "FinTech", "CleanEnergy", "E-Commerce", "AI/ML", "SaaS", "Hardware", "Other"];

interface Props {
  onClose: () => void;
}

export default function PIERCModal({ onClose }: Props) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>({
    fullName: "", email: "", phone: "", college: "",
    startupName: "", stage: "", domain: "", problem: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const step1Complete = form.fullName && form.email && form.phone && form.college;
  const step2Complete = form.startupName && form.stage && form.domain && form.problem;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    window.open("https://www.pierc.org/", "_blank");
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-[28px] w-full max-w-lg shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: "popIn 0.3s ease-out" }}
      >
        {/* Header */}
        <div className="bg-[#DF3B4B] px-8 pt-8 pb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all
                    ${step >= s ? "bg-[#FEDB2F] text-black" : "bg-white/20 text-white"}`}>
                    {step > s ? (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2.5 7L5.5 10L11.5 4" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : s}
                  </div>
                  {s < 3 && <div className={`w-8 h-0.5 ${step > s ? "bg-[#FEDB2F]" : "bg-white/30"}`} />}
                </div>
              ))}
            </div>
            <button onClick={onClose} className="text-white/70 hover:text-white transition-colors">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
          <h2 className="text-white font-bold text-[22px] font-poppins">
            {step === 1 && "Tell us about yourself"}
            {step === 2 && "Tell us about your idea"}
            {step === 3 && "You're almost there!"}
          </h2>
          <p className="text-white/70 text-sm mt-1">
            {step === 1 && "Step 1 of 3 — Personal details"}
            {step === 2 && "Step 2 of 3 — Startup details"}
            {step === 3 && "Step 3 of 3 — Review & submit"}
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="px-8 py-6 flex flex-col gap-4 max-h-[60vh] overflow-y-auto">

          {/* ── STEP 1 ── */}
          {step === 1 && (
            <>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-700">Full Name *</label>
                <input name="fullName" value={form.fullName} onChange={handleChange} placeholder="e.g. Riya Sharma" required
                  className="h-11 px-4 rounded-[10px] border border-gray-200 focus:outline-none focus:border-[#DF3B4B] text-[14px]" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-700">Email Address *</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required
                  className="h-11 px-4 rounded-[10px] border border-gray-200 focus:outline-none focus:border-[#DF3B4B] text-[14px]" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-700">Phone Number *</label>
                <div className="flex h-11 rounded-[10px] border border-gray-200 overflow-hidden focus-within:border-[#DF3B4B]">
                  <span className="flex items-center px-3 bg-gray-50 border-r border-gray-200 text-sm font-medium text-gray-600">🇮🇳 +91</span>
                  <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="9876543210" required
                    className="flex-1 px-3 focus:outline-none text-[14px]" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-700">College / University *</label>
                <input name="college" value={form.college} onChange={handleChange} placeholder="e.g. Parul University Goa" required
                  className="h-11 px-4 rounded-[10px] border border-gray-200 focus:outline-none focus:border-[#DF3B4B] text-[14px]" />
              </div>
            </>
          )}

          {/* ── STEP 2 ── */}
          {step === 2 && (
            <>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-700">Startup / Idea Name *</label>
                <input name="startupName" value={form.startupName} onChange={handleChange} placeholder="e.g. GreenHarvest" required
                  className="h-11 px-4 rounded-[10px] border border-gray-200 focus:outline-none focus:border-[#DF3B4B] text-[14px]" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-700">Current Stage *</label>
                <select name="stage" value={form.stage} onChange={handleChange} required
                  className="h-11 px-4 rounded-[10px] border border-gray-200 focus:outline-none focus:border-[#DF3B4B] text-[14px] bg-white">
                  <option value="">Select stage…</option>
                  {STAGES.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-700">Domain / Industry *</label>
                <select name="domain" value={form.domain} onChange={handleChange} required
                  className="h-11 px-4 rounded-[10px] border border-gray-200 focus:outline-none focus:border-[#DF3B4B] text-[14px] bg-white">
                  <option value="">Select domain…</option>
                  {DOMAINS.map((d) => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-700">What problem does your startup solve? *</label>
                <textarea name="problem" value={form.problem} onChange={handleChange} rows={3} placeholder="Describe the problem you're solving in 2–3 sentences…" required
                  className="p-3 rounded-[10px] border border-gray-200 focus:outline-none focus:border-[#DF3B4B] text-[14px] resize-none" />
              </div>
            </>
          )}

          {/* ── STEP 3 — Summary ── */}
          {step === 3 && (
            <div className="flex flex-col gap-4">
              <p className="text-sm text-gray-500">Please review your details before submitting. Clicking <strong>Submit</strong> will take you to the PIERC website to complete your registration.</p>
              <div className="bg-gray-50 rounded-[14px] p-5 flex flex-col gap-3 text-[14px]">
                <p className="font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-1">Personal Info</p>
                <Row label="Name" value={form.fullName} />
                <Row label="Email" value={form.email} />
                <Row label="Phone" value={`+91 ${form.phone}`} />
                <Row label="College" value={form.college} />
                <p className="font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-1 mt-2">Startup Info</p>
                <Row label="Startup" value={form.startupName} />
                <Row label="Stage" value={form.stage} />
                <Row label="Domain" value={form.domain} />
                <Row label="Problem" value={form.problem} />
              </div>
            </div>
          )}
        </form>

        {/* Footer Buttons */}
        <div className="px-8 pb-8 flex justify-between items-center gap-4">
          {step > 1 ? (
            <button type="button" onClick={() => setStep((s) => s - 1)}
              className="text-sm font-semibold text-gray-500 hover:text-gray-800 transition-colors">
              ← Back
            </button>
          ) : <div />}

          {step < 3 ? (
            <button
              type="button"
              disabled={step === 1 ? !step1Complete : !step2Complete}
              onClick={() => setStep((s) => s + 1)}
              className={`px-8 py-3 rounded-full font-bold text-[15px] transition-all
                ${(step === 1 ? step1Complete : step2Complete)
                  ? "bg-[#DF3B4B] text-white hover:bg-[#c53040]"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}
            >
              Next →
            </button>
          ) : (
            <button
              type="submit"
              form=""
              onClick={handleSubmit}
              className="px-8 py-3 rounded-full font-bold text-[15px] bg-[#FEDB2F] text-black hover:bg-[#ffe042] transition-all"
            >
              Submit & Visit PIERC 🚀
            </button>
          )}
        </div>
      </div>

      <style>{`
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-2">
      <span className="text-gray-500 w-20 flex-shrink-0">{label}:</span>
      <span className="text-gray-800 font-medium break-all">{value}</span>
    </div>
  );
}
