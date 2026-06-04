"use client";

import { Icon } from "@iconify/react";

const jobRoles = [
  {
    title: "AI Engineer",
    tag: "HIGH DEMAND",
    icon: "ph:brain-fill",
  },
  {
    title: "Cyber Security Analyst",
    tag: "CRITICAL SKILL",
    icon: "ph:shield-check-fill",
  },
  {
    title: "Data Scientist",
    tag: "TOP-PAYING",
    icon: "ph:database-fill",
  },
  {
    title: "Cloud Architect",
    tag: "ENTERPRISE",
    icon: "ph:cloud-fill",
  },
  {
    title: "Quantum Researcher",
    tag: "EMERGING",
    icon: "ph:atom-fill",
  },
  {
    title: "Full-Stack Developer",
    tag: "VERSATILE",
    icon: "ph:code-fill",
  },
];

export default function CareerOutcomes() {
  return (
    <section className="relative overflow-hidden z-10 w-full bg-[linear-gradient(to_bottom,#FDE047_50%,transparent_50%)]">
      {/* Background Red Wavy Image from Figma */}
      <img
        src="/70.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover md:object-fill z-0 pointer-events-none"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-12 py-24 sm:py-32 text-center flex flex-col items-center">
        <h2 className="text-white mb-4 section-subheading">
          Career Outcomes
        </h2>
        
        <h3 className="text-sunshine mb-6 section-heading">
          Where this degree takes you.
        </h3>
        
        <p className="text-white/90 max-w-3xl mb-16 section-body">
          Roles, recruiters and global Master's destinations our engineering graduates build careers around.
        </p>

        <h4 className="text-white font-bold text-[32px] sm:text-[40px] mb-10 tracking-tight">
          Top job roles
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {jobRoles.map((role, idx) => (
            <div 
              key={idx} 
              className="bg-[#F8F9FA] rounded-[24px] p-6 sm:p-7 flex items-center gap-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-white border-2 border-[#0CAADD]/20 w-[90px] h-[90px] rounded-2xl flex items-center justify-center shrink-0">
                <Icon icon={role.icon} className="text-[#0CAADD] text-[48px]" />
              </div>
              <div className="flex flex-col items-start justify-center text-left">
                <h5 className="font-bold text-[20px] sm:text-[22px] text-ink mb-2 font-poppins leading-tight">
                  {role.title}
                </h5>
                <span className="inline-block border border-ink/80 text-ink/90 text-[11px] sm:text-[12px] font-semibold px-4 py-1 rounded-full uppercase tracking-widest">
                  {role.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
