import Image from "next/image";


export const metadata = {
  alternates: {
    canonical: "/terms-of-use",
  },
};

export default function TermsOfUse() {
  return (
    <main className="min-h-screen bg-white pb-24 sm:pb-32 md:pb-48 lg:pb-56">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden py-16 sm:py-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/terms.png"
            alt="Terms of Use Background"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        
        {/* Overlay to ensure text readability if needed */}
        <div className="absolute inset-0 bg-white/20 z-0"></div>
        
        {/* Gradients to blend image seamlessly (Programme page style) */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white to-transparent z-0"></div>
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white to-transparent z-0"></div>

        {/* Hero Title */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center -mt-10">
          <h1 className="text-[42px] md:text-[56px] font-extrabold font-poppins leading-tight tracking-tight">
            <span className="text-[#333333]">Terms of</span><br />
            <span className="text-[#E74C5E]">use</span>
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative z-30 max-w-4xl mx-auto px-6 font-poppins py-16 sm:py-24">
        <div className="flex flex-col gap-6">
          <AccordionItem title="Right of use">
            <p className="text-[14px] text-[#111111] leading-relaxed">
              You have the right to utilise this platform in any manner permissible by the site administrators, and University officials, you may not transfer to another individual any rights or access granted to you upon your registration.
            </p>
          </AccordionItem>

          <AccordionItem title="External Information">
            <p className="text-[14px] text-[#111111] leading-relaxed">
              The website may contain other information relating to non-Parul University entities or any other companies, please note that for any such information, Parul University does not endorse any such companies or recommend such entities for any purpose to our users accessing such sites shall strictly be at the user&apos;s discretion.
            </p>
          </AccordionItem>

          <AccordionItem title="Regarding Press Releases and external Publications">
            <p className="text-[14px] text-[#111111] leading-relaxed">
              The website may contain press releases and publications about the University or related to the University from other sources, it shall be noted that upon placing reliance on such information it was believed to be accurate at the time and we disclaim any liability or obligation which may arise out of the untimeliness or any such discrepancies such publications.
            </p>
          </AccordionItem>

          <AccordionItem title="Disclaimer">
            <ul className="text-[14px] text-[#111111] leading-relaxed list-disc pl-5 space-y-2">
              <li>Any of the users or visitors to this site are advised not to assume or presume the accuracy, up to date , or completeness of the information provided in this site. Users are advised to get confirmation regarding the accuracy or credibility of such information with our concerned officials before placing any reliance or making any commitments.</li>
              <li>In providing this information, the University has taken due care, hence Parul University hereby disclaims any warranty made whatsoever, either in an expressed manner or implied therein, including and not limiting any such warranties as to the title, non-infringement, merchantability, non-interruptions, relating to the usage of this site.</li>
              <li>In furtherance of the same, the University hereby disclaims any warranty that this website will operate without any form of interruptions either technical or otherwise, which may be intended or unintended at any point during the use of this site.</li>
              <li>We create no warranty as to the usefulness, adequacy, reliability, authenticity, of any information or content provided either original or outsourced, written or graphical, in relation to our services, products and operations.</li>
              <li>Parul University and its affiliated parties will not be held liable for any direct, indirect, special or consequential damages which may arise out of any manner of use, or reliance of any information provided on this site. Thus, you are advised to make use of this site at your own risk, with the necessary caution. Such damages may include but not limited to loss of business, loss of profits, arising out of any breach of contract, breach of warranty, tort (including negligence), product liability or otherwise relating to the use of this site.</li>
              <li>This exclusion from liability shall also extend to any claims of copyright infringement on this site or any other claims made in whatsoever manner.</li>
              <li>Any link from other sources including google search engine sources is simply for the convenience of the users and creates no obligation between Parul University and such sites. In regards to any links provided on the site, the University disclaims any liability which may arise out of any inconvenience, or violations caused by any such sites, as they have only been provided for reference and for enhancing the user experience of our visitors.</li>
              <li>We may use your information to respond to your inquiries, provide customer service support, send you important information about the services, and send you marketing communications (with your consent) via different channels, including but not limited to SMS, Email, RCS, WhatsApp, and Voice.</li>
            </ul>
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
