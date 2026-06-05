export function LeadershipTeam() {
  const team = [
    {
      name: "Dr. Lalit Lata Jha",
      title: "Provost",
      tagline: "PH.D. IN PHARMACY",
      image: "/leadership/Dr. Lalit Lata Jha.png",
      description:
        "Renowned academician and pharmacy expert. Spearheads Parul University as a hub of excellence in health sciences and allied disciplines.",
    },
    {
      name: "Dr. Dhaval Nimavat",
      title: "Registrar",
      tagline: "CONTROLLER OF EXAMINATION",
      image: "/leadership/Dr. Dhaval Nimavat.png",
      description:
        "He brings 17+ years of academic and administrative expertise. His major focus is on IoT, cloud security, and mobile technologies with 29+ globally published research papers.",
    },
    {
      name: "Dr. Ganesh S. Chavan",
      title: "Chief Finance and Accounts Officer",
      tagline: "FINANCE & ACCOUNTS",
      image: "/leadership/Dr. Ganesh S. Chavan.png",
      description:
        "An academic strategist with 17+ years in teaching, industry, and consultancy. He has authored 45+ research papers along with books and patents in digital finance.",
    },
  ];

  return (
    <section className="bg-[#F8F8F8] sm:py-20 py-5 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-ink section-heading">
            Meet Our Leadership Team
          </h2>
          <p className="mt-2 text-ink/80 section-body">
            Provost, Registrar, Controller of Examinations and CFO.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="flex flex-col rounded-[20px] bg-white shadow-sm border border-zinc-200/60 overflow-hidden"
            >
              {/* Image Section Placeholder with gradient background */}
              {/* The image should be placed inside here, anchored to the bottom */}
              <div className="relative h-[380px] w-full bg-gradient-to-t from-[#D6F0FA] to-transparent flex-shrink-0 overflow-hidden">
                {/* Vertical Lines Pattern */}
                <div className="absolute inset-0 flex justify-evenly opacity-[0.04]">
                  <div className="w-px h-full bg-black"></div>
                  <div className="w-px h-full bg-black"></div>
                  <div className="w-px h-full bg-black"></div>
                  <div className="w-px h-full bg-black"></div>
                </div>

                {member.image && (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover object-top z-10"
                  />
                )}
              </div>

              {/* Text Body */}
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                {/* Red Leadership Badge */}
                <div className="mb-3">
                  <span className="inline-block rounded-full bg-[#E73649] px-3 py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-wide text-white">
                    LEADERSHIP
                  </span>
                </div>

                <h3 className="font-poppins font-semibold text-[22px] sm:text-[26px] leading-tight text-[#1F1F1F]">
                  {member.name}
                </h3>
                <p className="font-sans font-bold text-[15px] sm:text-[16px] text-[#E73649] mt-0.5">
                  {member.title}
                </p>

                {/* Separator */}
                <div className="w-full h-px bg-zinc-200/80 my-5" />

                {/* Blue Tagline Badge */}
                <div className="mb-3">
                  <span className="inline-block rounded-full bg-[#0CAADD] px-3 py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-wide text-white">
                    {member.tagline}
                  </span>
                </div>

                <p className="font-[family-name:var(--font-poppins)] text-[16px] sm:text-[17px] leading-[1.6] text-ink/80 mt-auto">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
