export function CampusZones() {
  return (
    <section className="relative w-full bg-[#F8F8F8] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl sm:px-6 px-4 lg:px-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-16">
          <h3 className="font-poppins font-semibold text-[20px] sm:text-[24px] text-[#1F1F1F] mb-2">
            Five Campus Zones
          </h3>
          <h2 className="font-poppins font-bold text-[34px] sm:text-[46px] lg:text-[54px] leading-[1.1] tracking-tight text-[#E73649] mb-4 lg:whitespace-nowrap">
            A Campus Designed On Five Pillars
          </h2>
          <p className="font-[family-name:var(--font-poppins)] text-[#1F1F1F]/80 text-[16px] sm:text-[18px] leading-relaxed">
            Academic, Residential, Cultural, Dining, and Sports - where students<br className="hidden sm:block" /> can live and learn.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Card 1: Academic Zone (Left) */}
          <div className="lg:col-span-7 bg-[#1F1F1F] rounded-[32px] p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#333333] text-[#FEDB2F] font-[family-name:var(--font-poppins)] text-sm mb-8">
                01 - Academic Zone
              </div>
              <h3 className="font-poppins font-semibold text-[28px] sm:text-[36px] leading-[1.2] tracking-tight text-white mb-4">
                Smart classrooms, advanced labs, central auditorium and digital libraries.
              </h3>
              <p className="font-[family-name:var(--font-poppins)] text-white/50 text-[15px] sm:text-[16px] mb-8">
                Tal. Quepem, Dist. South Goa • near ONGC Betul.
              </p>
              
              <div className="h-[1px] w-full bg-gradient-to-r from-white/20 to-transparent mb-8"></div>
              
              {/* Stats */}
              <div className="flex items-center gap-8 mb-10">
                <div>
                  <div className="font-sans font-bold text-[32px] sm:text-[40px] text-[#FEDB2F] leading-none mb-2">
                    40+
                  </div>
                  <div className="font-sans font-bold text-white text-[16px]">
                    Smart Classrooms
                  </div>
                </div>
                <div className="w-[1px] h-16 bg-white/20"></div>
                <div>
                  <div className="font-sans font-bold text-[32px] sm:text-[40px] text-[#FEDB2F] leading-none mb-2">
                    25+
                  </div>
                  <div className="font-sans font-bold text-white text-[16px]">
                    Specialised labs
                  </div>
                </div>
              </div>

              {/* Pills */}
              <div className="flex flex-wrap gap-3 mb-12">
                <span className="px-4 py-2 rounded-full bg-[#333333] text-white/80 font-[family-name:var(--font-poppins)] text-[14px] sm:text-[14px]">
                  Smart classrooms with hybrid AV
                </span>
                <span className="px-4 py-2 rounded-full bg-[#333333] text-white/80 font-[family-name:var(--font-poppins)] text-[14px] sm:text-[14px]">
                  Engineering • Pharmacy • Health labs
                </span>
                <span className="px-4 py-2 rounded-full bg-[#333333] text-white/80 font-[family-name:var(--font-poppins)] text-[14px] sm:text-[14px]">
                  Auditorium for major events
                </span>
                <span className="px-4 py-2 rounded-full bg-[#333333] text-white/80 font-[family-name:var(--font-poppins)] text-[14px] sm:text-[14px]">
                  Digital library + research databases
                </span>
              </div>
            </div>

            <a href="#" className="font-[family-name:var(--font-poppins)] text-[#FEDB2F] hover:text-white transition-colors flex items-center gap-2">
              Explore <span>&rarr;</span>
            </a>
          </div>

          {/* Right Column Stack */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Card 2: Student Residences */}
            <div className="bg-[#E73649] rounded-[32px] p-8 sm:p-10 flex-1 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/20 text-white font-[family-name:var(--font-poppins)] text-sm mb-6">
                  02 - Student Residences
                </div>
                <h3 className="font-poppins font-semibold text-[28px] sm:text-[36px] leading-[1.2] tracking-tight text-[#FEDB2F] mb-4">
                  Your home away from home.
                </h3>
                <p className="font-[family-name:var(--font-poppins)] text-white text-[15px] sm:text-[16px] leading-relaxed mb-8">
                  Safe, comfortable on-campus hostels with study spaces, storage and a residential community.
                </p>
              </div>
              <a href="#" className="font-[family-name:var(--font-poppins)] text-[#FEDB2F] hover:text-white transition-colors flex items-center gap-2">
                Explore <span>&rarr;</span>
              </a>
            </div>

            {/* Card 3: Dining Facilities */}
            <div className="bg-[#F8F8F8] border border-[#1F1F1F]/10 rounded-[32px] p-8 sm:p-10 flex-1 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#1F1F1F]/5 text-[#1F1F1F]/80 font-[family-name:var(--font-poppins)] text-sm mb-6">
                  03 - Dining Facilities
                </div>
                <h3 className="font-poppins font-semibold text-[28px] sm:text-[36px] leading-[1.2] tracking-tight text-[#E73649] mb-4">
                  Multi-cuisine cafeterias.
                </h3>
                <p className="font-[family-name:var(--font-poppins)] text-[#1F1F1F] text-[15px] sm:text-[16px] leading-relaxed mb-8">
                  A campus cafeteria alongside the swimming pool, with diverse menu.
                </p>
              </div>
              <a href="#" className="font-[family-name:var(--font-poppins)] text-[#E73649] hover:text-black transition-colors flex items-center gap-2">
                Explore <span>&rarr;</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
