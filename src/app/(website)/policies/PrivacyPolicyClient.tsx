"use client";

import Image from "next/image";
import { useState } from "react";

export default function PrivacyPolicyClient() {
  const [activeTab, setActiveTab] = useState("terms-of-use");

  return (
    <main className="min-h-screen bg-[#FDFCF8] pb-0 sm:pb-0 md:pb-0 lg:pb-0">
      {/* Hero Section */}
      <section className="relative w-full h-[100vh] flex flex-col items-center justify-center overflow-hidden bg-[url('/privacy-policy/privacy-policy-banner.jpg')] bg-cover bg-center bg-no-repeat">
        {/* Overlay to ensure text readability if needed */}
        <div className="absolute inset-0 bg-white/10 z-0"></div>

        {/* Hero Title */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <h1 className="text-[42px] md:text-[64px] font-extrabold font-poppins text-[#111111] leading-tight tracking-tight drop-shadow-md mb-15 pb-15">
            Privacy {" "}
            <span className="text-[#e73649]">
              Policy
            </span>
          </h1>
        </div>
      </section>

      {/* Waves and Navigation Section */}
      <section className="relative w-full -mt-10 z-20">
        <div className="relative w-full flex items-center justify-center">
          {/* Combined Wave Background */}
          <img
            src="/privacy-policy/pp-tab-heading-background.svg"
            alt="Tab heading background wave"
            className="relative w-full h-auto z-10 block scale-y-[1.8] md:scale-y-[1.25] origin-top"
          />

          {/* Navigation Links inside the wave area */}
          <div className="absolute top-[100%] md:top-[72%] -translate-y-1/2 w-full flex justify-center gap-8 md:gap-20 z-30 font-poppins font-bold text-[14px] md:text-[20px] text-[#111111]">
            <button
              onClick={() => setActiveTab('terms-of-use')}
              className={`${activeTab === 'terms-of-use' ? 'border-b-3 border-[#E74C5E]' : ''} text-black pb-1 hover:opacity-80 transition-opacity`}
            >
              Terms of Use
            </button>
            <button
              onClick={() => setActiveTab('cookie-policy')}
              className={`${activeTab === 'cookie-policy' ? 'border-b-3 border-[#E74C5E]' : ''} text-black pb-1 hover:opacity-80 transition-opacity`}
            >
              Cookie Policy
            </button>
            <button
              onClick={() => setActiveTab('copyright-notice')}
              className={`${activeTab === 'copyright-notice' ? 'border-b-3 border-[#E74C5E]' : ''} text-black pb-1 hover:opacity-80 transition-opacity`}
            >
              Copyright Notice
            </button>
          </div>
        </div>
      </section>

      {/* Content Section */}
   <section className="relative z-30 max-w-6xl mx-auto sm:px-6 px-3 font-poppins py-16 sm:py-24 md:py-24 lg:py-25 xl:py-30">
        {activeTab === 'terms-of-use' && (
          <div className="relative w-full mx-auto rounded-[24px] border-[6px] border-[#0d83a9] overflow-hidden bg-[#1BA8DF] bg-none lg:bg-[url('/privacy-policy/policy-background.png')] lg:bg-cover bg-bottom bg-no-repeat font-poppins text-white pb-12 lg:pb-[300px] shadow-lg">

            {/* The content */}
            <div className="relative z-10 p-8 md:p-12 flex flex-col gap-10">
              {/* Point 1 */}
              <div>
                <h3 className="flex items-start md:items-center gap-3 text-[20px] sm:text-[24px] md:text-[28px] font-bold text-[#FFD700] mb-4 leading-snug">
                  <img src="/privacy-policy/policy-label-points.svg" alt="point" className="w-6 h-6 md:w-8 md:h-8 shrink-0 mt-1 md:mt-0" />
                  Right of use
                </h3>
                <p className="text-[14px] md:text-[16px] leading-relaxed font-light">
                  You have the right to use this website, in accordance with the policies of Parul University Goa. Any access or permissions granted to you are personal and may not be transferred to another individual.
                </p>
              </div>

              {/* Point 2 */}
              <div>
                <h3 className="flex items-start md:items-center gap-3 text-[20px] sm:text-[24px] md:text-[28px] font-bold text-[#FFD700] mb-4 leading-snug">
                  <img src="/privacy-policy/policy-label-points.svg" alt="point" className="w-6 h-6 md:w-8 md:h-8 shrink-0 mt-1 md:mt-0" />
                  External Information
                </h3>
                <p className="text-[14px] md:text-[16px] leading-relaxed font-light">
                  This website may contain information or links to third party organisations. Parul University Goa does not endorse or recommend such entities and shall have no responsibility for the content thereof. The user assumes full responsibility for use of any external websites.
                </p>
              </div>

              {/* Point 3 */}
              <div>
                <h3 className="flex items-start md:items-center gap-3 text-[20px] sm:text-[24px] md:text-[28px] font-bold text-[#FFD700] mb-4 leading-snug">
                  <img src="/privacy-policy/policy-label-points.svg" alt="point" className="w-6 h-6 md:w-8 md:h-8 shrink-0 mt-1 md:mt-0" />
                  Regarding Press Releases and external Publications
                </h3>
                <p className="text-[14px] md:text-[16px] leading-relaxed font-light">
                  The website may also publish press releases and external publications about the University. Such information is believed to be accurate as of the date of publication; however, the University assumes no responsibility for changes, inaccuracies or delays in such information.
                </p>
              </div>

              {/* Point 4 */}
              <div>
                <h3 className="flex items-start md:items-center gap-3 text-[20px] sm:text-[24px] md:text-[28px] font-bold text-[#FFD700] mb-4 leading-snug">
                  <img src="/privacy-policy/policy-label-points.svg" alt="point" className="w-6 h-6 md:w-8 md:h-8 shrink-0 mt-1 md:mt-0" />
                  Disclaimer
                </h3>
                <ul className="list-disc list-outside ml-5 text-[14px] md:text-[16px] leading-relaxed font-light space-y-2">
                  <li>Information available on this website is provided solely for the purpose of providing information. Parul University Goa endeavors to provide information that is true and reliable. However, users are advised to cross-check any important information with the concerned authorities of the University before acting on the same.</li>
                  <li>Users should not use the information on this website as a substitute for their own professional judgment.</li>
                  <li>The University makes no warranties, expressed or implied, concerning the operation or content of this website.</li>
                  <li>The University does not warrant that the website will be uninterrupted or error-free.</li>
                  <li>No warranty is given as to the usefulness, reliability or suitability of the information published on this website.</li>
                  <li>Parul University Goa shall not be held liable for any direct, indirect, incidental or consequential loss arising out of use of this website or reliance on its content.</li>
                  <li>External links are provided solely for the convenience of the user. The University is not responsible for the content or practices of third-party maintained websites</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'cookie-policy' && (
          <div className="relative w-full mx-auto rounded-[24px] border-[6px] border-[#0d83a9] overflow-hidden bg-[#1BA8DF] bg-none lg:bg-[url('/privacy-policy/policy-background.png')] lg:bg-cover bg-bottom bg-no-repeat font-poppins text-white pb-12 lg:pb-[300px] shadow-lg">
            <div className="relative z-10 p-8 md:p-12 flex flex-col gap-10">
              <div>
                <h3 className="flex items-start md:items-center gap-3 text-[20px] sm:text-[24px] md:text-[28px] font-bold text-[#FFD700] mb-4 leading-snug">
                  <img src="/privacy-policy/policy-label-points.svg" alt="point" className="w-6 h-6 md:w-8 md:h-8 shrink-0 mt-1 md:mt-0" />
                  Cookie Policy
                </h3>
                <p className="text-[14px] md:text-[16px] leading-relaxed font-light mb-6">
                  This website uses cookies and similar technologies to improve your experience and to analyse the website's performance and visitors' interactions. Cookies are used to remember user preferences and provide a more efficient browsing experience.
                </p>
                <p className="text-[14px] md:text-[16px] leading-relaxed font-light">
                  You can also configure your browser to manage or disable cookies. However, disabling cookies may impact how some website features and functionality operate.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'copyright-notice' && (
          <div className="relative w-full mx-auto rounded-[24px] border-[6px] border-[#0d83a9] overflow-hidden bg-[#1BA8DF] bg-none lg:bg-[url('/privacy-policy/policy-background.png')] lg:bg-cover bg-bottom bg-no-repeat font-poppins text-white pb-12 lg:pb-[300px] shadow-lg">
            <div className="relative z-10 p-8 md:p-12 flex flex-col gap-10">
              <div>
                <h3 className="flex items-start md:items-center gap-3 text-[20px] sm:text-[24px] md:text-[28px] font-bold text-[#FFD700] mb-4 leading-snug">
                  <img src="/privacy-policy/policy-label-points.svg" alt="point" className="w-6 h-6 md:w-8 md:h-8 shrink-0 mt-1 md:mt-0" />
                  Copyright Notice
                </h3>
                <p className="text-[14px] md:text-[16px] leading-relaxed font-light mb-6">
                  All contents of this website including text, graphics, images, logos, documents, videos and other digital materials are the intellectual property of Parul University Goa unless otherwise indicated and protected by applicable copyright laws.
                </p>
                <p className="text-[14px] md:text-[16px] leading-relaxed font-light">
                  Material may not be copied, reproduced, modified, distributed, published or commercially exploited without prior written permission of the University. Limited use for personal, educational and non-commercial purposes is allowed with due acknowledgement.
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
