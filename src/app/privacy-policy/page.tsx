import Image from "next/image";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#FDFCF8]">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-no-repeat">
        
        {/* Overlay to ensure text readability if needed */}
        <div className="absolute inset-0 bg-white/20 z-0"></div>
        
        {/* Gradients to blend image seamlessly */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white to-transparent z-0"></div>
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#FDFCF8] to-transparent z-0"></div>

        {/* Hero Title */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center -mt-10">
          <h1 className="text-[42px] md:text-[56px] font-extrabold font-poppins leading-tight tracking-tight">
            <span className="text-[#333333]">Privacy</span><br />
            <span className="text-[#E74C5E]">Policy</span>
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative z-30 max-w-4xl mx-auto px-6 py-20 font-poppins">
        <div className="flex flex-col gap-6">
          
          <div className="bg-white rounded-[12px] border border-[#E5E5E5] overflow-hidden p-6 md:p-8">
            <h2 className="text-[20px] md:text-[24px] font-bold text-[#111111] m-0 mb-4">Privacy Policy</h2>
            <p className="text-[14px] text-[#111111] leading-relaxed">
              We hold the privacy of our site visitors in the highest regard; therefore, through this privacy policy, we seek to demonstrate our commitment to safeguarding your privacy.
            </p>
          </div>

          <AccordionItem title="Information Collection and Us">
            <p className="text-[14px] text-[#111111] leading-relaxed mb-4">
              For the purpose of providing services related to the University, we may acquire specific identifiable information each time you access this site. The kind of information recorded when you visit our website includes your IP address, the requested page, and cookie information, and such information is non-identifiable.
            </p>
            <p className="text-[14px] text-[#111111] leading-relaxed">
              Upon your registration with us, we may receive information such as your name, physical address, email address, and location. And once registered, this information is identifiable and may be used only for the registration purpose and for future communications. The information we collect upon such registration will be used for our operations, which include the provision of relevant services, auditing, and essential communications.
            </p>
          </AccordionItem>

          <AccordionItem title="What this policy covers">
            <p className="text-[14px] text-[#111111] leading-relaxed">
              This privacy policy covers any personal or identifiable information that is collected by the University for any services related to us, either upon your visit to the site or upon your registration in any of our services.
            </p>
          </AccordionItem>

        </div>
      </section>
    </main>
  );
}

function AccordionItem({ title, children }: { title: string; children: React.ReactNode }) {
  // Using details/summary for native accordion without needing 'use client' at the top level
  return (
    <details className="group bg-white rounded-[12px] border border-[#E5E5E5] overflow-hidden" open>
      <summary className="flex justify-between items-center cursor-pointer list-none p-6 md:p-8">
        <h2 className="text-[20px] md:text-[24px] font-bold text-[#111111] m-0">{title}</h2>
        <span className="transition group-open:rotate-180">
          <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" className="text-[#999999]"><path d="M6 9l6 6 6-6"></path></svg>
        </span>
      </summary>
      <div className="px-6 md:px-8 pb-8 pt-0 text-[#111111]">
        {children}
      </div>
    </details>
  );
}
