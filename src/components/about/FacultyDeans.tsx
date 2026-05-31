export function FacultyDeans() {
  const deans = [
    {
      name: "Dr. Anuradha Pillai",
      faculty: "Faculty of Engineering, IT & CS",
      stats: "Ph.D. Computer Engineering • 21+ yrs • 48 papers",
      image: "/leader-1.png", // Using placeholder image for now
    },
    {
      name: "Dr. Kshitiz Sharma",
      faculty: "Faculty of Management Studies",
      stats: "PhD. Management • 23+ yrs • 44 papers",
      image: "/leader-2.png", // Using placeholder image for now
    },
    {
      name: "Dr. Anupam Kumar",
      faculty: "Applied & Health Sciences",
      stats: "PhD. Biotechnology • 15+ yrs • 50+ papers",
      image: "/leader-3.png", // Using placeholder image for now
    },
    {
      name: "Dr. Lalit Lata Jha",
      faculty: "Faculty of Pharmacy",
      stats: "PhD. Pharmacy • 23+ yrs • 41 papers",
      image: "/leader-1.png", // The screenshot uses this exact photo
    },
    {
      name: "Dr. Aseem Yadav",
      faculty: "Faculty of Physiotherapy",
      stats: "PhD. Physiotherapy • 14+ yrs • 81 papers",
      image: "/leader-2.png", // Using placeholder image for now
    },
    {
      name: "Dr. Jeyalakshmi K.",
      faculty: "Faculty of Nursing",
      stats: "PhD. Community Health Nursing • 18+ yrs",
      image: "/leader-3.png", // Using placeholder image for now
    },
  ];

  return (
    <section className="bg-[#F8F8F8] py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-sans font-bold text-[32px] sm:text-[44px] leading-tight text-ink">
            Faculty Deans
          </h2>
          <p className="mt-2 font-[family-name:var(--font-poppins)] text-[16px] sm:text-[18px] text-ink/80">
            Six deans leading our faculties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {deans.map((dean, idx) => (
            <div
              key={idx}
              className="flex flex-row rounded-[20px] bg-white shadow-sm border border-zinc-200/60 overflow-hidden"
            >
              {/* Image Section Placeholder */}
              <div className="relative w-[35%] sm:w-[30%] bg-gradient-to-b from-[#EBF8FD] to-[#D6F0FA] flex-shrink-0 flex items-end justify-center overflow-hidden">
                {/* Space left for future image. Mockups removed. */}
              </div>

              {/* Text Body */}
              <div className="p-6 sm:p-8 flex flex-col flex-1 justify-center">
                {/* Red Dean Badge */}
                <div className="mb-3">
                  <span className="inline-block rounded-full bg-[#E73649] px-3 py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-wide text-white">
                    DEAN
                  </span>
                </div>

                <h3 className="font-sans font-bold text-[22px] sm:text-[24px] leading-tight text-[#1F1F1F]">
                  {dean.name}
                </h3>
                <p className="font-sans font-bold text-[14px] sm:text-[15px] text-[#0CAADD] mt-1">
                  {dean.faculty}
                </p>

                {/* Separator */}
                <div className="w-full h-px bg-zinc-200/80 my-4" />

                {/* Stats */}
                <p className="font-[family-name:var(--font-poppins)] text-[12px] sm:text-[13px] leading-[1.6] text-ink/50">
                  {dean.stats}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
