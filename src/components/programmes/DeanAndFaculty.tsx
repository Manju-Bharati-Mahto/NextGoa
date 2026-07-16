"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

interface Props {
  facultySlug: string;
}

export default function DeanAndFaculty({ facultySlug }: Props) {
  const [deans, setDeans] = useState<any[]>([]);
  const [facultyList, setFacultyList] = useState<any[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [facultyName, setFacultyName] = useState("");

  const displayedFaculties = showAll ? facultyList : facultyList.slice(0, 3);
  useEffect(() => {
    loadExperts();
  }, [facultySlug]);

  async function loadExperts() {
    const res = await fetch(`/api/faculty/experts?faculty=${facultySlug}`);

    const result = await res.json();

    if (result.success) {
      setFacultyName(result.facultyName || "");
      setDeans(result.dean || []);
      setFacultyList(result.faculties || []);
    }
  }
  const dean = deans.length ? deans[0] : null;

  const deanLinkedin = dean?.social_links?.find(
    (item: any) => item.platform === "linkedin",
  )?.url;
  return (
    <section className="w-full bg-[#FAFAFA] sm: py-16 sm:py-24">
      <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-12">
        {/* Top Heading */}
        <div className="text-center mb-12">
          <h2 className="text-ink section-heading">Dean & Faculty</h2>
        </div>

        {/* Dean Banner */}
        {dean && (
          <div className="flex flex-col md:flex-row w-full max-w-5xl mx-auto rounded-[24px] overflow-hidden shadow-md mb-20 bg-white">
            {/* Left: Image Placeholder */}
            <div className="w-full md:w-[45%] h-[300px] md:h-auto bg-gray-200 relative shrink-0">
              <Image
                src={dean?.image || "/placeholder-user.png"}
                alt={dean?.name || "Dean"}
                fill
                className="object-cover object-top"
              />
            </div>

            {/* Right: Content */}
            <div className="w-full md:w-[55%] bg-[#E73649] p-8 sm:p-12 relative flex flex-col justify-center overflow-hidden">
              {/* Background SVG Watermark */}
              <div className="absolute right-[-40px] bottom-[-20px] w-[280px] h-[280px] opacity-[0.15] pointer-events-none">
                <Image
                  src="/award.svg"
                  alt="Award Watermark"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="relative z-10">
                <h3 className="text-white font-bold text-[28px] sm:text-[36px] font-poppins leading-tight mb-2">
                  {dean?.name}
                </h3>
                <p className="text-white/90 text-[16px] sm:text-[18px] font-medium">
                  {dean?.designation}
                </p>

                <hr className="border-white/20 my-6 w-full" />

                <p className="text-white/95 text-[15px] sm:text-[16px] leading-relaxed max-w-lg mb-8">
                  {dean?.description}
                </p>

                {deanLinkedin && (
                  <a
                    href={deanLinkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white hover:bg-gray-100 text-[#CF4055] px-6 py-3 rounded-full transition-colors w-max flex items-center gap-3 font-semibold"
                  >
                    <Icon icon="mdi:linkedin" className="w-5 h-5" />
                    Connect on LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Mid Heading */}
        <div className="text-center mb-12">
          <h2 className="text-ink section-subheading">Teaching Faculties</h2>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full mx-auto">
          {displayedFaculties.map((faculty, idx) => {
            const socialLinks = faculty.social_links || [];

            const linkedin = socialLinks.find(
              (item: any) => item.platform === "linkedin",
            )?.url;

            const orcid = socialLinks.find(
              (item: any) => item.platform === "orcid",
            )?.url;

            return (
              <div
                key={idx}
                className="bg-white rounded-[16px] border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row h-auto items-stretch"
              >
                {/* Left: Faculty Image Placeholder */}
                <div className="w-full sm:w-[180px] lg:w-[240px] min-h-[240px] sm:min-h-full bg-gray-200 shrink-0 relative">
                  {faculty.image && (
                    <Image
                      src={faculty.image}
                      alt={faculty.name}
                      fill
                      className="object-cover object-top"
                    />
                  )}
                </div>

                {/* Right: Faculty Details */}
                <div className="p-5 sm:p-6 flex flex-col justify-center flex-grow">
                  <span className="bg-[#E73649] text-white text-[12px] sm:text-[13px] font-bold px-3 py-1 rounded-full w-max mb-3 uppercase tracking-wide">
                    {faculty.designation}
                  </span>

                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-ink text-[22px] sm:text-[24px] font-poppins leading-tight">
                      {faculty.name}
                    </h4>
                  </div>

                  <p className="text-[#0CAADD] font-bold text-[13px] sm:text-[14px] mb-4">
                    {faculty.tagline}
                  </p>

                  <hr className="border-gray-200 mb-3 w-full" />

                  <div className="flex flex-col gap-2 text-gray-600 text-[13px] sm:text-[14px] leading-snug">
                    <p>
                      <strong className="text-gray-800">Faculty:</strong>{" "}{facultyName}
                    </p>

                    {faculty.department && (
                      <p>
                        <strong className="text-gray-800">Department:</strong>{" "}
                        {faculty.department}
                      </p>
                    )}
                    {faculty.experience && (
                      <p>
                        <strong className="text-gray-800">Experience:</strong>{" "}
                        {faculty.experience}
                      </p>
                    )}
                    {faculty.research_area && (
                      <p>
                        <strong className="text-gray-800">
                          Research Area:
                        </strong>{" "}
                        {faculty.research_area}
                      </p>
                    )}
                  </div>

                  {(linkedin || orcid) && (
                    <div className="flex gap-2 items-center mt-4 pt-3 border-t border-gray-100">
                      {orcid && (
                        <a
                          href={orcid}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-shrink-0 hover:opacity-80 transition-opacity"
                        >
                          <img
                            src="/orchid.svg"
                            alt="ORCID"
                            className="w-6 h-6"
                          />
                        </a>
                      )}

                      {linkedin && (
                        <a
                          href={linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#E73649] hover:text-[#c42d3d]"
                        >
                          <Icon icon="mdi:linkedin" className="w-7 h-7" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {facultyList.length > 3 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-[#E73649] hover:bg-[#CF4055] text-white px-8 py-3 rounded-full transition-colors font-semibold text-[15px]"
            >
              {showAll ? "View Less Faculties" : "View All Faculties"}
            </button>
          </div>
        )}

        {/* Footer Text */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-gray-400 font-medium text-[13px] sm:text-[14px]">
            Full faculty directory available through the admissions office.
          </p>
        </div>
      </div>
    </section>
  );
}