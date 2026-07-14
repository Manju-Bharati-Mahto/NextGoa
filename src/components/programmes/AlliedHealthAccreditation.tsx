import Image from "next/image";
import { Icon } from "@iconify/react";

export default function AlliedHealthAccreditation({ slug }: { slug?: string }) {
  const programmeName = slug === "applied-and-health-sciences" ? "Applied and Health Sciences" : "Allied Health";

  return (
    <section className="w-full bg-[#FAFAFA] pb-12 sm:pb-16 pt-5">


      {/* Entrance Test Notice Banner */}
      <div className="w-full bg-[#E73649] border-t-4 border-b-4 border-black/5">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-12 py-12 sm:py-16 flex flex-col md:flex-row items-stretch justify-center">
          
          {/* Left info box */}
          <div className="bg-white rounded-t-[24px] md:rounded-tr-none md:rounded-l-[24px] p-6 sm:p-8 flex flex-row items-center gap-6 shadow-sm max-w-4xl flex-grow">
            <div className="shrink-0 flex items-center justify-center">
              <Icon icon="ph:info" className="text-[48px] text-[#0CAADD]" />
            </div>
            <div className="flex flex-col text-left">
              <h4 className="font-bold text-[22px] sm:text-[24px] text-ink mb-2">Entrance Test Notice</h4>
              <p className="text-ink/80 text-[17px] sm:text-[19px] leading-relaxed">
                PU Goa conducts an entrance evaluation for select {programmeName} programmes. Eligibility: 10+2 Science. Shortlisted candidates will be notified for the test date and centre.
              </p>
            </div>
          </div>

          {/* Right Register Button (wrapped in border) */}
          <div className="border border-white/80 border-t-0 md:border-t md:border-l-0 rounded-b-[24px] md:rounded-bl-none md:rounded-r-[24px] p-6 sm:p-8 md:px-16 flex items-center justify-center shrink-0">
            <button type="button" data-enquiry-trigger="true" data-enquiry-menu="faculties" data-enquiry-program="allied-and-healthcare-science" className="bg-[#FCE34B] text-ink font-bold text-[18px] sm:text-[22px] px-14 sm:px-20 py-4 rounded-full transition-transform hover:scale-105 shadow-md text-center">
              Apply Now
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
