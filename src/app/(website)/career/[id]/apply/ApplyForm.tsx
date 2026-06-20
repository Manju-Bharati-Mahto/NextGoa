"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ApplyForm({ jobId, jobTitle }: { jobId: number, jobTitle?: string }) {
  const router = useRouter();
  const [fileName, setFileName] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent standard HTTP form submission
    
    // Navigate to the success page only after HTML5 validation passes
    router.push(`/career/${jobId}/success`);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName(null);
    }
  };


  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6" onSubmit={handleSubmit}>
      
      {/* Full Name */}
      <div className="flex flex-col gap-2">
        <label className="text-[15px] font-bold text-[#111111]">Full Name</label>
        <input required type="text" className="border border-gray-200 rounded-xl px-4 py-3 bg-[#FAFAFA] focus:outline-none focus:border-gray-400 transition-colors text-[15px] placeholder-gray-400" placeholder="Name" />
      </div>

      {/* Mobile No. */}
      <div className="flex flex-col gap-2">
        <label className="text-[15px] font-bold text-[#111111]">Mobile No.</label>
        <input required type="tel" className="border border-gray-200 rounded-xl px-4 py-3 bg-[#FAFAFA] focus:outline-none focus:border-gray-400 transition-colors text-[15px] placeholder-gray-400" placeholder="XXXXX XXXXX" />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label className="text-[15px] font-bold text-[#111111]">Email</label>
        <input required type="email" className="border border-gray-200 rounded-xl px-4 py-3 bg-[#FAFAFA] focus:outline-none focus:border-gray-400 transition-colors text-[15px] placeholder-gray-400" placeholder="Sample@gmail.com" />
      </div>

      <div className="hidden md:block"></div> {/* Empty space */}

      {/* Position */}
      <div className="flex flex-col gap-2">
        <label className="text-[15px] font-bold text-[#111111]">Position</label>
        <input required type="text" defaultValue={jobTitle} className="border border-gray-200 rounded-xl px-4 py-3 bg-[#FAFAFA] focus:outline-none focus:border-gray-400 transition-colors text-[15px] placeholder-gray-400" placeholder="Select Position" />
      </div>

      {/* Location */}
      <div className="flex flex-col gap-2">
        <label className="text-[15px] font-bold text-[#111111]">Location</label>
        <input required type="text" className="border border-gray-200 rounded-xl px-4 py-3 bg-[#FAFAFA] focus:outline-none focus:border-gray-400 transition-colors text-[15px] placeholder-gray-400" placeholder="Current Location" />
      </div>

      <div className="hidden md:block"></div> {/* Empty space */}

      {/* Resume / CV */}
      <div className="md:col-span-2 mt-5">
        <label className="border-2 border-dashed border-[#EF3341] rounded-[20px] px-4 py-14 bg-[#EAF6FA] flex flex-col items-center justify-center cursor-pointer hover:bg-[#E1F0F8] transition-colors w-full block">
          <div className="flex flex-row items-center justify-center">
            <svg className="w-5 h-5 text-[#6B7A90] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            <span className="text-[#6B7A90] font-bold text-[16px]">
              {fileName ? "Resume Uploaded" : "Upload Resume"}
            </span>
          </div>
          {fileName && (
            <div className="text-sm text-gray-600 mt-3 text-center">{fileName}</div>
          )}
          <input required type="file" accept=".pdf,.doc,.docx,application/pdf" className="hidden" onChange={handleFileChange} />
        </label>
      </div>
      
      {/* Submit */}
      <div className="md:col-span-2 mt-6">
        <button type="submit" className="bg-[#EF3341] hover:bg-[#D92A36] transition-colors text-white text-[18px] font-bold px-12 py-3.5 rounded-full shadow-sm">
          Submit
        </button>
      </div>
      
    </form>
  );
}
