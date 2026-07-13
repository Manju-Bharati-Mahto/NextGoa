"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

interface Props {
  facultySlug: string;
}

export function DynamicDeanAndFaculty({
  facultySlug,
}: Props) {
  const [dean, setDean] = useState<any>(null);
  const [facultyList, setFacultyList] = useState<any[]>([]);
  const [facultyName, setFacultyName] = useState("");
  const [showAll, setShowAll] = useState(false);

  const displayedFaculties = showAll
    ? facultyList
    : facultyList.slice(0, 3);

  useEffect(() => {
    loadFaculty();
  }, [facultySlug]);

  async function loadFaculty() {
    const res = await fetch(
      `/api/faculty/experts?faculty=${facultySlug}`
    );

    const result = await res.json();

    if (result.success) {
      setDean(result.dean?.[0] || null);
      setFacultyList(result.faculties || []);
      setFacultyName(result.facultyName || "");
    }
  }

  const deanLinkedin =
    dean?.social_links?.find(
      (x: any) => x.platform === "linkedin"
    )?.url;

  const deanOrcid =
    dean?.social_links?.find(
      (x: any) => x.platform === "orcid"
    )?.url;

  return (
    <section className="w-full bg-[#FAFAFA] py-8 sm:py-12">
      <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-8">
          <h2 className="text-ink section-heading">
            Dean & Faculty
          </h2>
        </div>

        {/* Dean */}

        {dean && (
          <div className="flex flex-col md:flex-row w-full max-w-5xl mx-auto rounded-[24px] overflow-hidden shadow-md mb-12 bg-white">
            <div className="w-full md:w-[45%] h-[300px] md:h-auto relative bg-gray-200">
              <Image
                src={dean.image || "/placeholder-user.png"}
                alt={dean.name}
                fill
                className="object-cover object-top"
              />
            </div>

            <div className="w-full md:w-[55%] bg-[#E73649] p-8 sm:p-12 relative flex flex-col justify-center overflow-hidden">
              <div className="absolute right-[-40px] bottom-[-20px] w-[280px] h-[280px] opacity-20">
                <Image
                  src="/award.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>

              <div className="relative z-10">
                <h3 className="text-white text-3xl font-bold mb-2">
                  {dean.name}
                </h3>

                <p className="text-white/90 text-lg">
                  {dean.designation}
                </p>

                <hr className="my-6 border-white/20" />

                <p className="text-white/95 leading-relaxed mb-8">
                  {dean.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {deanOrcid && (
                    <a
                      href={deanOrcid}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-white text-[#CF4055] rounded-full px-6 py-3 flex items-center gap-2"
                    >
                      <img
                        src="/orchid.svg"
                        className="w-5 h-5"
                      />
                      View ORCID
                    </a>
                  )}

                  {deanLinkedin && (
                    <a
                      href={deanLinkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-white text-[#CF4055] rounded-full px-6 py-3 flex items-center gap-2"
                    >
                      <Icon icon="mdi:linkedin" />
                      Connect on LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {facultyList.length > 0 && (
          <>
            <div className="text-center mb-12">
              <h2 className="section-subheading">
                Teaching Faculties
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedFaculties.map(
                (faculty: any, idx: number) => {
                  const socialLinks =
                    faculty.social_links || [];

                  const linkedin =
                    socialLinks.find(
                      (x: any) =>
                        x.platform === "linkedin"
                    )?.url;

                  const orcid =
                    socialLinks.find(
                      (x: any) =>
                        x.platform === "orcid"
                    )?.url;

                  return (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl border overflow-hidden shadow-sm flex flex-col sm:flex-row"
                    >
                      <div className="relative w-full sm:w-[180px] lg:w-[220px] min-h-[240px] bg-gray-200">
                        {faculty.image && (
                          <Image
                            src={faculty.image}
                            alt={faculty.name}
                            fill
                            className="object-cover object-top"
                          />
                        )}
                      </div>

                      <div className="p-5 flex-1">
                        <span className="bg-[#E73649] text-white text-[11px] rounded-full px-3 py-1 uppercase">
                          {faculty.designation}
                        </span>

                        <h4 className="mt-3 text-xl font-bold">
                          {faculty.name}
                        </h4>

                        <p className="text-[#0CAADD] font-semibold mt-1">
                          {faculty.tagline}
                        </p>

                        <hr className="border-gray-200 mb-3 mt-3 w-full" />

                        <div className="space-y-1 text-sm">
                          <p>
                            <strong>Faculty:</strong>{" "}
                            {facultyName}
                          </p>

                          {faculty.department && (
                            <p>
                              <strong>
                                Department:
                              </strong>{" "}
                              {faculty.department}
                            </p>
                          )}

                          {faculty.experience && (
                            <p>
                              <strong>
                                Experience:
                              </strong>{" "}
                              {faculty.experience}
                            </p>
                          )}

                          {faculty.research_area && (
                            <p>
                              <strong>
                                Research Area:
                              </strong>{" "}
                              {faculty.research_area}
                            </p>
                          )}
                        </div>

                        {(linkedin || orcid) && (
                          <div className="flex gap-3 mt-5 border-light-t pt-4">
                            {orcid && (
                              <a
                                href={orcid}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <img
                                  src="/orchid.svg"
                                  className="w-6 h-6"
                                />
                              </a>
                            )}

                            {linkedin && (
                              <a
                                href={linkedin}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <Icon
                                  icon="mdi:linkedin"
                                  className="w-7 h-7 text-[#E73649]"
                                />
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                }
              )}
            </div>

            {facultyList.length > 3 && (
              <div className="flex justify-center mt-10">
                <button
                  onClick={() =>
                    setShowAll(!showAll)
                  }
                  className="bg-[#E73649] text-white rounded-full px-8 py-3"
                >
                  {showAll
                    ? "View Less Faculties"
                    : "View All Faculties"}
                </button>
              </div>
            )}

            <div className="text-center mt-12">
              <p className="text-gray-400">
                Full faculty directory available
                through the admissions office.
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  );
}