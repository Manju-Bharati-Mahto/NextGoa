import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const supportItems = [
  "Dedicated personal counsellor for your entire journey",
  "In-depth profile building and university shortlisting",
  "Pre-boarding session",
  "Complete visa assistance and mock visa interviews",
  "Application and submission assistance",
  "In-campus language support system"
];

const SupportPill = ({ text }: { text: string }) => (
  <div className="bg-white px-5 md:px-6 py-3.5 rounded-md shadow-md flex items-center justify-center gap-3 transition-transform hover:scale-105 w-max max-w-full mx-auto md:mx-0">
    <div className="w-5 h-5 rounded-full bg-[#24c75c] flex items-center justify-center shrink-0 shadow-sm">
      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" d="M5 13l4 4L19 7"></path>
      </svg>
    </div>
    <span className="text-[#1f2022] text-[14px] md:text-[15.5px] font-medium md:whitespace-nowrap">
      {text}
    </span>
  </div>
);

export default function StudyAbroadAssistance() {
  return (
    <section
      className={`relative bg-transparent py-24 md:py-32 px-4 md:px-8 overflow-hidden ${poppins.className}`}
      style={poppins.style}
    >
      {/* Background Red Wavy Image */}
      <img
        src="/Group 32864.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover md:object-fill z-0 pointer-events-none"
      />

      {/* Decorative Assets */}
      <div className="absolute left-[5%] bottom-[5%] z-0 w-32 md:w-[280px] h-48 md:h-[350px] pointer-events-none opacity-40">
        <Image
          src="/abroad/Support Lighthouse.svg"
          alt="Support Lighthouse"
          fill
          className="object-contain object-bottom"
        />
      </div>
      <div className="absolute right-0 top-[20%] md:top-[15%] z-0 w-48 md:w-[320px] h-48 md:h-[320px] pointer-events-none opacity-40">
        <Image
          src="/abroad/Bright Future Icon.png"
          alt="Bright Future"
          fill
          className="object-contain object-right"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-white mb-3 section-subheading">
            Extended assistance
          </p>
          <h2 className="text-white tracking-tight section-heading">
            We go an extra mile to support you!
          </h2>
        </div>

        {/* Support Pills Layout */}
        <div className="flex flex-col items-center gap-5 md:gap-7 w-full max-w-[1000px] z-10">

          {/* Row 1: 2 pills */}
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 w-full">
            <SupportPill text={supportItems[0]} />
            <SupportPill text={supportItems[1]} />
          </div>

          {/* Row 2: 1 pill */}
          <div className="flex justify-center w-full">
            <SupportPill text={supportItems[2]} />
          </div>

          {/* Row 3: 2 pills */}
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 w-full">
            <SupportPill text={supportItems[3]} />
            <SupportPill text={supportItems[4]} />
          </div>

          {/* Row 4: 1 pill */}
          <div className="flex justify-center w-full">
            <SupportPill text={supportItems[5]} />
          </div>

        </div>
      </div>
    </section>
  );
}
