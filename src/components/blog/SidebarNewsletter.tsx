"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function SidebarNewsletter() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Custom Validation
    if (!name.trim()) {
      setError("Please enter your full name.");
      return;
    }
    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!phone.trim()) {
      setError("Please enter your phone number.");
      return;
    }
    
    // Validate phone is exactly 10 digits
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone.trim())) {
      setError("Phone number must be exactly 10 digits.");
      return;
    }

    setLoading(true);
    
    try {
      const res = await fetch("/api/form-submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formName: "Newsletter Subscription",
          sendToCRM: false,
          sendToGoogleSheet: false,
          data: {
            name,
            email,
            phone
          },
        }),
      });

      const result = await res.json();

      if (!result.success) {
        throw new Error(result.message);
      }

      setName("");
      setEmail("");
      setPhone("");
      alert("Successfully subscribed to newsletter!");
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden relative transition-all duration-300 hover:shadow-lg">
      <div className="p-7">
        <h3 className="text-[22px] font-bold text-ink tracking-tight mb-2">Subscribe to Newsletter</h3>
        <p className="text-[14px] text-ink/70 mb-6 leading-relaxed">Please enter your details to receive our latest updates directly.</p>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div>
            <label className="block text-[13px] font-semibold text-ink mb-1.5">Full Name <span className="text-brand">*</span></label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all bg-brand-white" 
            />
          </div>
          <div>
            <label className="block text-[13px] font-semibold text-ink mb-1.5">Email Address <span className="text-brand">*</span></label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all bg-brand-white" 
            />
          </div>
          <div>
            <label className="block text-[13px] font-semibold text-ink mb-1.5">Phone Number <span className="text-brand">*</span></label>
            <input 
              type="tel" 
              value={phone}
              onChange={(e) => {
                // Only allow digits to be typed
                const val = e.target.value.replace(/\D/g, '');
                if (val.length <= 10) setPhone(val);
              }}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all bg-brand-white" 
            />
          </div>
          
          {error && (
            <p className="text-red-500 text-sm font-medium mt-2">{error}</p>
          )}

          <button type="submit" disabled={loading} className="w-full py-3.5 mt-4 bg-[#0caadd] hover:bg-[#098bb5] text-white rounded-full font-semibold flex items-center justify-center gap-2 transition-colors shadow-md hover:shadow-lg">
            {loading ? "Subscribing..." : (
              <>
                <Send size={18} /> Subscribe
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
