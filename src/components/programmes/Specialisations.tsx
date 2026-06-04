"use client";

import React, { useState } from "react";

type SpecialisationData = {
  id: string;
  name: string;
  learn: string;
  skills: string[];
  tools: string[];
  careers: string[];
};

const specialisations: SpecialisationData[] = [
  {
    id: "ai",
    name: "Artificial Intelligence",
    learn: "Core AI concepts, neural networks, natural language processing, and advanced machine learning algorithms to build intelligent systems.",
    skills: ["Deep learning", "Model deployment", "Prompt engineering", "MLOps"],
    tools: ["PyTorch", "TensorFlow", "Hugging Face", "LangChain"],
    careers: ["AI Engineer", "ML Researcher", "AI Product Lead"],
  },
  {
    id: "cyber",
    name: "Cyber Security",
    learn: "Ethical hacking, network forensics, cryptography, SOC operations, and advanced cloud security protocols.",
    skills: ["Penetration testing", "Threat modeling", "Incident response", "Malware analysis"],
    tools: ["Kali Linux", "Wireshark", "Metasploit", "Splunk"],
    careers: ["Security Analyst", "Penetration Tester", "CISO"],
  },
  {
    id: "data",
    name: "AI & Data Science",
    learn: "Statistical modeling, large-scale data processing, predictive analytics, and building complex data pipelines.",
    skills: ["Data mining", "Statistical analysis", "Big Data processing", "Data storytelling"],
    tools: ["Python", "Pandas", "Apache Spark", "Tableau"],
    careers: ["Data Scientist", "Data Engineer", "Analytics Manager"],
  },
  {
    id: "ml",
    name: "AI & Machine Learning",
    learn: "Supervised and unsupervised learning, reinforcement learning, computer vision, and autonomous systems architecture.",
    skills: ["Algorithm design", "Feature engineering", "Reinforcement learning", "Computer vision"],
    tools: ["Scikit-learn", "Keras", "OpenCV", "Jupyter"],
    careers: ["Machine Learning Engineer", "CV Engineer", "Robotics Scientist"],
  },
  {
    id: "quantum",
    name: "Quantum Computing",
    learn: "Quantum mechanics for computer scientists, quantum algorithms, cryptography, and quantum error correction.",
    skills: ["Quantum programming", "Algorithm design", "Linear algebra", "Quantum Cryptography"],
    tools: ["Qiskit", "Cirq", "IBM Quantum", "Microsoft Q#"],
    careers: ["Quantum Researcher", "Quantum Developer", "Cryptographer"],
  },
];

export default function Specialisations() {
  const [activeSpec, setActiveSpec] = useState<SpecialisationData>(specialisations[0]);

  return (
    <section className="w-full bg-[#F8F9FA] py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-ink mb-2 section-subheading">
            Specialisations
          </h2>
          <h3 className="text-[#E73649] mb-4 section-heading">
            Five futures. One degree.
          </h3>
          <p className="text-ink/80 max-w-2xl mx-auto section-body">
            Tap a specialisation to see what you'll learn, the tools you'll use and the careers it opens up.
          </p>
        </div>

        {/* Horizontal scrollable toggles wrapper for mobile, wraps on desktop */}
        <div className="w-full overflow-x-auto scrollbar-hide mb-10 pb-4">
          <div className="flex sm:flex-wrap items-center justify-start sm:justify-center gap-3 sm:gap-4 min-w-max sm:min-w-0 px-4 sm:px-0 mx-auto">
            {specialisations.map((spec) => {
              const isActive = activeSpec.id === spec.id;
              return (
                <button
                  key={spec.id}
                  onClick={() => setActiveSpec(spec)}
                  className={`rounded-full px-6 sm:px-8 py-3 font-bold text-sm sm:text-[15px] transition-all duration-200 border whitespace-nowrap ${
                    isActive
                      ? "bg-[#FCE34B] text-ink border-[#FCE34B] shadow-sm"
                      : "bg-transparent text-ink border-gray-300 hover:border-gray-400 hover:bg-white"
                  }`}
                >
                  {spec.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-[24px] border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 sm:p-12 w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0">
            
            {/* What you'll learn */}
            <div className="md:pr-8 md:border-r border-gray-100 flex flex-col">
              <h4 className="font-bold text-[18px] sm:text-[20px] text-ink mb-4">What you'll learn</h4>
              <p className="text-ink/80 text-[15px] sm:text-[16px] leading-relaxed">
                {activeSpec.learn}
              </p>
            </div>

            {/* Skills */}
            <div className="md:px-8 md:border-r border-gray-100 flex flex-col">
              <h4 className="font-bold text-[18px] sm:text-[20px] text-ink mb-4">Skills</h4>
              <ul className="list-disc list-outside ml-5 text-ink/80 text-[15px] sm:text-[16px] space-y-2">
                {activeSpec.skills.map((skill, idx) => (
                  <li key={idx} className="pl-1 leading-relaxed">{skill}</li>
                ))}
              </ul>
            </div>

            {/* Tools */}
            <div className="md:px-8 md:border-r border-gray-100 flex flex-col">
              <h4 className="font-bold text-[18px] sm:text-[20px] text-ink mb-4">Tools</h4>
              <ul className="list-disc list-outside ml-5 text-ink/80 text-[15px] sm:text-[16px] space-y-2">
                {activeSpec.tools.map((tool, idx) => (
                  <li key={idx} className="pl-1 leading-relaxed">{tool}</li>
                ))}
              </ul>
            </div>

            {/* Careers */}
            <div className="md:pl-8 flex flex-col">
              <h4 className="font-bold text-[18px] sm:text-[20px] text-ink mb-4">Careers</h4>
              <ul className="list-disc list-outside ml-5 text-ink/80 text-[15px] sm:text-[16px] space-y-2">
                {activeSpec.careers.map((career, idx) => (
                  <li key={idx} className="pl-1 leading-relaxed">{career}</li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
