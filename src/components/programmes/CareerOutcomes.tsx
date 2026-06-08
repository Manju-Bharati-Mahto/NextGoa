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
    <section
      className="relative overflow-hidden z-10 w-full bg-[linear-gradient(to_bottom,#FDE047_50%,transparent_50%)]"
      style={{
        paddingTop: "clamp(5rem, 12.2vw, 600px)",
        paddingBottom: "clamp(5rem, 13.3vw, 600px)"
      }}
    >
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
          <img
            src="/89.svg"
            alt=""
            className="absolute top-0 left-0 w-full h-auto"
          />
        </div>
        {/* Bottom Wave */}
        <div 
          className="absolute bottom-0 left-0 right-0 overflow-hidden"
          style={{ height: "clamp(50px, 8vw, 500px)" }}
        >
          <img
            src="/89.svg"
            alt=""
            className="absolute bottom-0 left-0 w-full h-auto"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-12 text-center flex flex-col items-center">
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
