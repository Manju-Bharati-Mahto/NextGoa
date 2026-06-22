"use client";

import { useEffect } from 'react';
import React, { useState } from 'react';
import { Icon } from '@iconify/react';

interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CallbackModal({ isOpen, onClose }: CallbackModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    time: 'Morning (10 AM - 12 PM)'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
      setFormData({ name: '', phone: '', time: 'Morning (10 AM - 12 PM)' });
    }, 2500);
  };

  return (
    <div data-lenis-prevent="true" className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-md bg-white rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-black/60 hover:text-black transition-colors"
        >
          <Icon icon="mdi:close" className="text-xl" />
        </button>

        <div className="p-8 sm:p-10">
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-10 text-center animate-in fade-in zoom-in">
              <div className="w-16 h-16 bg-[#DDF8E2] text-[#1B8136] rounded-full flex items-center justify-center mb-6">
                <Icon icon="mdi:check-bold" className="text-3xl" />
              </div>
              <h3 className="font-poppins font-semibold text-[24px] text-[#1F1F1F] mb-3">
                Request Sent!
              </h3>
              <p className="font-[family-name:var(--font-poppins)] text-[#1F1F1F]/70 text-[15px]">
                One of our expert counsellors will call you back shortly.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h3 className="font-poppins font-semibold text-[24px] sm:text-[28px] text-[#1F1F1F] mb-3 leading-tight">
                  Request a Callback
                </h3>
                <p className="font-[family-name:var(--font-poppins)] text-[#1F1F1F]/70 text-[14px] sm:text-[15px] leading-relaxed">
                  Have questions about safety, admissions, or campus life? Leave your number and we'll get back to you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block font-[family-name:var(--font-poppins)] text-[#1F1F1F] font-medium text-[14px] mb-2">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your full name"
                    className="w-full px-5 py-3.5 rounded-xl border border-black/10 bg-[#F8F8F8] text-[#1F1F1F] font-[family-name:var(--font-poppins)] focus:outline-none focus:ring-2 focus:ring-[#E73649]/20 focus:border-[#E73649] transition-all"
                  />
                </div>

                <div>
                  <label className="block font-[family-name:var(--font-poppins)] text-[#1F1F1F] font-medium text-[14px] mb-2">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    placeholder="Enter your phone number"
                    className="w-full px-5 py-3.5 rounded-xl border border-black/10 bg-[#F8F8F8] text-[#1F1F1F] font-[family-name:var(--font-poppins)] focus:outline-none focus:ring-2 focus:ring-[#E73649]/20 focus:border-[#E73649] transition-all"
                  />
                </div>

                <div>
                  <label className="block font-[family-name:var(--font-poppins)] text-[#1F1F1F] font-medium text-[14px] mb-2">
                    Preferred Callback Time
                  </label>
                  <select 
                    value={formData.time}
                    onChange={e => setFormData({...formData, time: e.target.value})}
                    className="w-full px-5 py-3.5 rounded-xl border border-black/10 bg-[#F8F8F8] text-[#1F1F1F] font-[family-name:var(--font-poppins)] focus:outline-none focus:ring-2 focus:ring-[#E73649]/20 focus:border-[#E73649] transition-all appearance-none"
                  >
                    <option>Morning (10 AM - 12 PM)</option>
                    <option>Afternoon (12 PM - 4 PM)</option>
                    <option>Evening (4 PM - 7 PM)</option>
                  </select>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#E73649] hover:bg-[#D32F2F] text-white font-[family-name:var(--font-poppins)] font-semibold text-[16px] py-4 rounded-xl transition-colors mt-2 flex items-center justify-center gap-2"
                >
                  <Icon icon="mdi:phone-outgoing" className="text-lg" />
                  Request Callback
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
