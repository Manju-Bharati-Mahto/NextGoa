import { Eyebrow } from "@/components/landing/Decor";

export function Governance() {
  const cards = [
    {
      label: "GOVERNANCE",
      title: "What kind of university is PU Goa?",
      description:
        "Parul University Goa is a State Private University, established under the Goa Private Universities Act 2020 and approved by the Government of Goa in 2025.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 text-[#0CAADD]"
        >
          <path d="M3 21V19H5V10H3V8L12 3L21 8V10H19V19H21V21H3ZM7 19H9V10H7V19ZM11 19H13V10H11V19ZM15 19H17V10H15V19Z" />
        </svg>
      ),
    },

    {
      label: "COLLABORATION",
      title: "How is PU Goa connected to Parul University, Vadodara?",
      description:
        "PU Goa is an independent State Private University. It shares Parul University Vadodara's faculty standards, industry network, global partnerships and twenty-year ecosystem, but operates under Goa state legislation.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 text-[#0CAADD]"
        >
          <path d="M3 21V19H5V10H3V8L12 3L21 8V10H19V19H21V21H3ZM7 19H9V10H7V19ZM11 19H13V10H11V19ZM15 19H17V10H15V19Z" />
        </svg>
      ),
    },
    {
      label: "FOUNDATION",
      title: "Who runs it?",
      description:
        "PU Goa is run by Parul Education Foundation, a not-for-profit organisation directed by Dr. Devanshu Patel and Dr. Parul Patel.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 text-[#0CAADD]"
        >
          <path d="M3 21V19H5V10H3V8L12 3L21 8V10H19V19H21V21H3ZM7 19H9V10H7V19ZM11 19H13V10H11V19ZM15 19H17V10H15V19Z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="board-of-governors" className="relative overflow-hidden bg-transparent scroll-mt-24 md:scroll-mt-32 py-0">
            <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Middle Solid Red Background */}
        <div 
          className="absolute inset-x-0 bg-[#E73649]" 
          style={{ 
            top: "calc(clamp(50px, 8vw, 500px) - 1.5px)", 
            bottom: "calc(clamp(50px, 8vw, 500px) - 1.5px)" 
          }} 
        />
        {/* Top Wave */}
        <div 
          className="absolute top-0 left-0 right-0 overflow-hidden"
          style={{ height: "clamp(50px, 8vw, 500px)" }}
        >
          <div 
            className="absolute top-0 left-0 w-[400%] h-full animate-wave-flow"
            style={{
              backgroundImage: "url('/89-double.svg?v=3')",
              backgroundSize: "50% auto",
              backgroundPosition: "top left",
              backgroundRepeat: "repeat-x"
            }}
          />
        </div>
        {/* Bottom Wave */}
        <div 
          className="absolute bottom-0 left-0 right-0 overflow-hidden"
          style={{ height: "clamp(50px, 8vw, 500px)" }}
        >
          <div 
            className="absolute bottom-0 left-0 w-[400%] h-full animate-wave-flow"
            style={{
              backgroundImage: "url('/89-double.svg?v=3')",
              backgroundSize: "50% auto",
              backgroundPosition: "bottom left",
              backgroundRepeat: "repeat-x"
            }}
          />
        </div>
      </div>

      {/* Decorative Background Graphics */}
      {/* Left Lighthouse */}
      <div className="absolute left-0 top-24 sm:top-auto sm:bottom-12 z-0 w-48 h-64 sm:w-72 sm:h-96 pointer-events-none -translate-x-6 sm:-translate-x-10">
        <img
          src="/1.svg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-contain brightness-0 invert opacity-10 sm:opacity-20"
        />
      </div>

      {/* Right Shell */}
      <div className="absolute right-0 bottom-16 sm:bottom-12 z-0 w-56 h-56 sm:w-96 sm:h-96 pointer-events-none translate-x-8 sm:translate-x-12">
        <img
          src="/3.svg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-contain brightness-0 invert opacity-10 sm:opacity-20"
        />
      </div>



      <div 
        className="relative z-10 mx-auto max-w-7xl px-6"
        style={{ 
          paddingTop: "clamp(4rem, 10vw, 500px)", 
          paddingBottom: "clamp(4rem, 10vw, 500px)" 
        }}
      >
        <div className="text-center mb-14 text-white">
          <h3 className="text-center text-white section-subheading">
            Governance and Recognition
          </h3>
          <h2 className="mt-5 text-center text-white section-heading">
            The Holistic Framework Behind PU Goa!
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, idx) => {
            return (
              <div
                key={idx}
                className={`bg-white rounded-[20px] p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex flex-col items-start text-left h-full`}
              >
                {/* Icon & Label */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="[&>svg]:w-9 [&>svg]:h-9 [&>svg]:sm:w-10 [&>svg]:sm:h-10">
                    {card.icon}
                  </div>
                  <span className="font-sans font-bold text-[14px] sm:text-[15px] tracking-wide text-[#0CAADD] uppercase">
                    {card.label}
                  </span>
                </div>

                {/* Title */}
                <h4 className="font-poppins font-semibold text-[24px] sm:text-[28px] lg:text-[32px] leading-tight text-[#1F1F1F] mb-4 sm:mb-5">
                  {card.title}
                </h4>

                {/* Description */}
                <p className="font-[family-name:var(--font-poppins)] font-normal text-[15px] sm:text-[16px] leading-[1.65] text-ink/80">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
