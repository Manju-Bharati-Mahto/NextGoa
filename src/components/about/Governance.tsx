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
      label: "RECOGNITION",
      title: "Who recognises it?",
      description:
        "The University Grants Commission (UGC), with faculty-specific approvals from AICTE (Engineering, Management), PCI (Pharmacy), INC (Nursing) and other relevant statutory bodies.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 text-[#0CAADD]"
        >
          <path d="M6 23V15.27C5.36 14.69 4.86 13.99 4.51 13.17C4.17 12.35 4 11.46 4 10.5C4 8.15 4.78 6.18 6.33 4.57C7.89 2.96 9.78 2.16 12 2.16C14.22 2.16 16.11 2.96 17.67 4.57C19.22 6.18 20 8.15 20 10.5C20 11.46 19.83 12.35 19.49 13.17C19.14 13.99 18.64 14.69 18 15.27V23L12 21L6 23ZM12 16.5C13.67 16.5 15.08 15.92 16.25 14.75C17.42 13.58 18 12.17 18 10.5C18 8.83 17.42 7.42 16.25 6.25C15.08 5.08 13.67 4.5 12 4.5C10.33 4.5 8.92 5.08 7.75 6.25C6.58 7.42 6 8.83 6 10.5C6 12.17 6.58 13.58 7.75 14.75C8.92 15.92 10.33 16.5 12 16.5ZM9.68 13.7L12 12.3L14.33 13.7L13.7 11.05L15.78 9.28L13.05 9.05L12 6.55L10.95 9.05L8.22 9.28L10.3 11.05L9.68 13.7Z" />
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
    <section className="relative overflow-hidden bg-transparent">
      {/* Background Red Wavy Image from Figma */}
      <img
        src="/70.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover md:object-fill z-0 pointer-events-none"
      />

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



      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-48 pb-52 sm:pt-56 sm:pb-56">
        <div className="text-center mb-14 text-white">
          <h3 className="text-center text-white section-subheading">
            Governance and Recognition
          </h3>
          <h2 className="mt-5 text-center text-white section-heading">
            The Holistic Framework Behind PU Goa!
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
          {cards.map((card, idx) => {
            let colSpanClass = "md:col-span-6";
            if (idx === 0 || idx === 3) colSpanClass = "md:col-span-5";
            if (idx === 1 || idx === 2) colSpanClass = "md:col-span-7";
            const heightClass = idx === 1 ? "md:min-h-[360px]" : "";

            return (
              <div
                key={idx}
                className={`bg-white rounded-[20px] p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex flex-col items-start text-left ${colSpanClass} ${heightClass}`}
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
