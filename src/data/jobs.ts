export interface Job {
  id: number;
  slug: string;
  department: string;
  position: string;
  title: string;
  location: string;
  type: string;
  description: string;
  cardDescription?: string;
}

export const MOCK_JOBS: Job[] = [
  {
    "id": 1,
    "slug": "director-deputy-director-cultural-affairs",
    "department": "Administration",
    "position": "Leadership",
    "title": "Director/Deputy Director – Cultural Affairs",
    "location": "Goa",
    "type": "On-site",
    "description": "<div class='mb-6'><h3 class='text-lg font-bold mb-3'>Key Responsibilities</h3><ol class='list-decimal pl-5 space-y-2'>\n  <li>\n    <b>Strategic Leadership &amp; Alignment</b><br>\n    Lead Cultural Affairs in alignment with institutional vision, integrating cultural initiatives with academic, student development, and institutional objectives.\n  </li>\n  <li>\n    <b>Cultural Planning &amp; Flagship Events</b><br>\n    Plan and oversee the annual cultural roadmap and flagship events, ensuring quality, inclusivity, and institutional relevance.\n  </li>\n  <li>\n    <b>Execution &amp; Impact Monitoring</b><br>\n    Translate strategy into action, monitor implementation, and assess outcomes through participation, impact, and feedback metrics.\n  </li>\n  <li>\n    <b>Student Engagement &amp; Talent Development</b><br>\n    Promote student participation, nurture cultural talent, and facilitate inter-institutional and competitive cultural exposure.\n  </li>\n  <li>\n    <b>Governance, Budgeting &amp; Compliance</b><br>\n    Manage budgets and ensure transparent, compliant governance of all cultural activities.\n  </li>\n  <li>\n    <b>Partnerships &amp; Cultural Branding</b><br>\n    Build external partnerships and enhance institutional cultural visibility and reputation.\n  </li>\n  <li>\n    <b>Team Leadership &amp; Performance</b><br>\n    Lead and evaluate the cultural affairs team to ensure effective delivery and continuous capacity building.\n  </li>\n  <li>\n    <b>Documentation &amp; Continuous Improvement</b><br>\n    Maintain systematic documentation and reporting to support audits and drive continuous improvement.\n  </li>\n</ol></div><div class='mb-6'><h3 class='text-lg font-bold mb-3'>Qualifications & Eligibility</h3><ul class='list-disc pl-5 space-y-2'><li>Postgraduate degree in Arts, Humanities, Cultural Studies, Event Management, or related field. PhD is preferred.</li><li>Strong strategic, operational, and stakeholder management skills.</li><li>Proven experience in large-scale event and budget management. Minimum experience - Director - 10+ years & Deputy Director - 5+ years</li></ul></div>",
    "cardDescription": "Strategic Leadership & Alignment Lead Cultural Affairs in alignment with institutional vision, integrating cultural initiatives with academic, student development, and institutional objectives."
  },
  {
    "id": 2,
    "slug": "director-deputy-director-sports-cell",
    "department": "Administration",
    "position": "Leadership",
    "title": "Director/Deputy Director – Sports Cell",
    "location": "Goa",
    "type": "On-site",
    "description": "<div class='mb-6'><h3 class='text-lg font-bold mb-3'>Key Responsibilities</h3><ol class='list-decimal pl-5 space-y-2'>\n  <li>\n    <b>Program Development:</b> Designing and implementing sports programs, including inter-college, inter-university, and state/national competitions.\n  </li>\n  <li>\n    <b>Athletic Coaching &amp; Training:</b> Overseeing the training and coaching of student-athletes to achieve high performance in competitions.\n  </li>\n  <li>\n    <b>Administration &amp; Budget:</b> Managing the annual sports budget, procuring and maintaining sports equipment, and maintaining records.\n  </li>\n  <li>\n    <b>Infrastructure Management:</b> Planning and upgrading sports facilities, playgrounds, and gymnasium.\n  </li>\n  <li>\n    <b>Leadership:</b> Mentoring coaches, staff, and fostering a culture of health and wellness.\n  </li>\n  <li>\n    <b>Regulatory Compliance:</b> Ensuring compliance with sports governing bodies and university regulations.\n  </li>\n</ol></div><div class='mb-6'><h3 class='text-lg font-bold mb-3'>Qualifications & Eligibility</h3><ul class='list-disc pl-5 space-y-2'><li>Ph.D. in Physical Education.</li><li>10+ yrs. experience as a University Deputy Director of Physical Education and Sports or a combination of experience as a University Assistant Director and College Director of Physical Education.</li><li>A strong performance record, evidenced by consistently good appraisal reports and success in producing competitive teams/athletes at various levels.</li><li>Demonstrated experience in organizing competitions and coaching camps.</li><li>Participation in national/international seminars or conferences.</li><li>Participation in AIU / National Sports Competition. Minimum experience - Director - 10+ years & Deputy Director - 5+ years</li></ul></div>",
    "cardDescription": "Program Development: Designing and implementing sports programs, including inter-college, inter-university, and state/national competitions."
  },
  {
    "id": 3,
    "slug": "director-deputy-director-iqac",
    "department": "Administration",
    "position": "Leadership",
    "title": "Director/Deputy Director – Internal Quality Assurance Cell (IQAC)",
    "location": "Goa",
    "type": "On-site",
    "description": "<div class='mb-6'><h3 class='text-lg font-bold mb-3'>Key Responsibilities</h3><ol class='list-decimal pl-5 space-y-2'>\n  <li>\n    <b>AQAR Data Management:</b> Collect, compile, verify, and submit institutional data for AQAR.\n  </li>\n  <li>\n    <b>NBA Accreditation Support:</b> Guide academic departments in preparing and validating Self-Assessment Reports (SARs) for NBA accreditation.\n  </li>\n  <li>\n    <b>Global Rankings Data Coordination:</b> Manage data compilation and validation for global and national rankings, including QS World/Asia/Subject Rankings and Times Higher Education (THE) World/Asia/Subject Rankings, THE Interdisciplinary Science Rankings.\n  </li>\n  <li>\n    <b>SDG Rankings Coordination:</b> Coordinate data submission for Sustainable Development Goals (SDG) rankings covering all 17 SDGs.\n  </li>\n  <li>\n    <b>National Rankings Data Management:</b> Handle data compilation and verification for national ranking frameworks, including India Today–MDRA, Green Rankings, OBE Rankings, and MHW Rankings (R-World).\n  </li>\n  <li>\n    <b>Multi-Domain Evaluation Coordination:</b> Coordinate submissions across six evaluation areas – Research &amp; Innovation, Employment &amp; Entrepreneurship, Institutional Social Responsibility, Globalization, Financial Sustainability &amp; Student Access, and University of the Year.\n  </li>\n  <li>\n    <b>AISHE Data Submission:</b> Compile, verify, and submit data for AISHE for 38 colleges.\n  </li>\n  <li>\n    <b>Academic &amp; Administrative Audits (AAA):</b> Plan and conduct Academic &amp; Administrative Audits (AAA), including schedules, formats, data verification, and presentations by HOIs and Cell Directors.\n  </li>\n</ol></div><div class='mb-6'><h3 class='text-lg font-bold mb-3'>Qualifications & Eligibility</h3><ul class='list-disc pl-5 space-y-2'><li>Strong academic credentials with a Ph.D. in any discipline.</li><li>10 years of academic/research experience, including leadership experience in IQAC; minimum 3 years as IQAC Coordinator/Member preferred for NAAC-related roles.</li><li>Excellent leadership, communication, and interpersonal abilities; strong collaborative approach; commitment to continuous quality improvement; proficiency in data management, MIS, and digital systems. Minimum experience - Director - 10+ years & Deputy Director - 5+ years</li></ul></div>",
    "cardDescription": "AQAR Data Management: Collect, compile, verify, and submit institutional data for AQAR."
  },
  {
    "id": 4,
    "slug": "director-deputy-director-research-development",
    "department": "Administration",
    "position": "Leadership",
    "title": "Director/Deputy Director – Research & Development",
    "location": "Goa",
    "type": "On-site",
    "description": "<div class='mb-6'><h3 class='text-lg font-bold mb-3'>Key Responsibilities</h3><ol class='list-decimal pl-5 space-y-2'>\n  <li>\n    <b>Strategic Research Leadership</b> – Provide academic and administrative leadership to plan, govern, and strengthen the university’s research ecosystem, policies, and priorities.\n  </li>\n  <li>\n    <b>Research Governance &amp; Compliance</b> – Formulate and implement research policies, ensure ethical and regulatory compliance, and align activities with UGC, AICTE, NAAC, and NIRF frameworks.\n  </li>\n  <li>\n    <b>Capacity Building &amp; Collaboration</b> – Promote interdisciplinary research, Centres of Excellence, Ph.D. programmes, and organize workshops, conferences, and faculty development initiatives.\n  </li>\n  <li>\n    <b>External Engagement &amp; Representation</b> – Build collaborations with industry, government, funding agencies, and research institutions, and represent the university at national and international forums.\n  </li>\n  <li>\n    <b>Performance Monitoring &amp; Administration</b> – Oversee R&amp;D Cell operations, supervise research support teams, track research performance indicators, and report outcomes and impact to university leadership.\n  </li>\n</ol></div><div class='mb-6'><h3 class='text-lg font-bold mb-3'>Qualifications & Eligibility</h3><ul class='list-disc pl-5 space-y-2'><li>10+ years of academic or research experience in a recognized higher education institution, including at least 5 years at Associate Professor level or in a senior research leadership/administrative role.</li><li>Ph.D. in a relevant discipline from a recognized university.</li><li>Strong and sustained research output, including publications in reputed Scopus/SCI/SCIE journals, books/chapters, and active participation in national and international conferences.</li><li>Proven experience in research leadership, policy formulation, and securing or managing extramural research funding or sponsored projects.</li><li>Experience in guiding PhD/PG scholars, interdisciplinary research exposure, and sound understanding of national and international research ethics and regulatory frameworks. Minimum experience - Director - 10+ years & Deputy Director - 5+ years</li></ul></div>",
    "cardDescription": "Strategic Research Leadership – Provide academic and administrative leadership to plan, govern, and strengthen the university’s research ecosystem, policies, and priorities."
  },
  {
    "id": 5,
    "slug": "director-deputy-director-nep",
    "department": "Administration",
    "position": "Leadership",
    "title": "Director/Deputy Director – National Education Policy (NEP)",
    "location": "Goa",
    "type": "On-site",
    "description": "<div class='mb-6'><h3 class='text-lg font-bold mb-3'>Key Responsibilities</h3><ol class='list-decimal pl-5 space-y-2'>\n  <li>\n    <b>NEP 2020 Implementation:</b> Lead the implementation of NEP 2020 across UG and PG programmes\n  </li>\n  <li>\n    <b>Curriculum &amp; Credit Framework:</b> Oversee Curriculum and Credit Framework, Multiple Entry–Multiple Exit, and ABC\n  </li>\n  <li>\n    <b>Teaching–Learning Reforms:</b> Drive assessment reforms, experiential, and multidisciplinary learning initiatives\n  </li>\n  <li>\n    <b>Regulatory Coordination:</b> Coordinate with UGC, regulatory bodies, and other stakeholders\n  </li>\n</ol></div><div class='mb-6'><h3 class='text-lg font-bold mb-3'>Qualifications & Eligibility</h3><ul class='list-disc pl-5 space-y-2'><li>Ph.D. in a relevant discipline from a recognized university</li><li>10+ years of academic and/or administrative experience</li><li>Experience in senior leadership roles in higher education</li><li>Strong understanding of NEP 2020 and UGC regulations Minimum experience - Director - 10+ years & Deputy Director - 5+ years</li></ul></div>",
    "cardDescription": "NEP 2020 Implementation: Lead the implementation of NEP 2020 across UG and PG programmes"
  },
  {
    "id": 6,
    "slug": "director-deputy-director-training-placement-career-development",
    "department": "Administration",
    "position": "Leadership",
    "title": "Director/Deputy Director – Training, Placement & Career development",
    "location": "Goa",
    "type": "On-site",
    "description": "<div class='mb-6'><h3 class='text-lg font-bold mb-3'>Key Responsibilities</h3><ol class='list-decimal pl-5 space-y-2'><li><b>Develop and implement strategic frameworks</b> for student training, internships, and placement initiatives.</li><li><strong>Establish and strengthen industry partnerships</strong> to enhance employability and experiential learning opportunities.</li><li><strong>Lead and manage placement and industry engagement teams</strong> to ensure effective execution of recruitment activities.</li><li><strong>Analyze placement and industry engagement data</strong> to continuously improve outcomes and strategic decision-making.</li><li><strong>Collaborate with academic faculty</strong> to integrate current industry trends and workforce requirements into the curriculum.</li></ol></div><div class='mb-6'><h3 class='text-lg font-bold mb-3'>Qualifications & Eligibility</h3><ul class='list-disc pl-5 space-y-2'><li>Phd or Post graduation in English/Business Management.</li><li>Candidates should have 10+ years of experience in Training & Placements, with excellent communication and leadership skills, a strong industry network, and a sound understanding of industry trends and the job market, along with a proven track record of achieving placement goals.</li><li>Experience in career development, training, academia and expertise in planning and executing employability enhancement programs, honing communication skills with a proven track record and to lead career readiness initiatives, align with Career Development Cell activities and coordinate with academic departments. Minimum experience - Director - 10+ years & Deputy Director - 5+ years</li></ul></div>",
    "cardDescription": "Develop and implement strategic frameworks for student training, internships, and placement initiatives."
  },
  {
    "id": 7,
    "slug": "director-deputy-director-entrepreneurship-innovation",
    "department": "Administration",
    "position": "Leadership",
    "title": "Director/Deputy Director – Entrepreneurship & Innovation",
    "location": "Goa",
    "type": "On-site",
    "description": "<div class='mb-6'><h3 class='text-lg font-bold mb-3'>Key Responsibilities</h3><ol class='list-decimal pl-5 space-y-2'>\n  <li>\n    <b>Vision &amp; Institutional Alignment</b><br>\n    Establish, lead, and scale the Entrepreneurship and Innovation Cell in line with the University’s vision.\n  </li>\n  <li>\n    <b>Innovation Culture Building</b><br>\n    Foster a strong startup and innovation ecosystem among students, faculty, researchers, and alumni.\n  </li>\n  <li>\n    <b>Startup Programs &amp; Pipelines</b><br>\n    Design and implement pre-incubation, incubation, and acceleration programs.\n  </li>\n  <li>\n    <b>Startup Mentorship &amp; Market Access</b><br>\n    Mentor startups from ideation to market launch, enabling funding, mentorship, and global exposure.\n  </li>\n  <li>\n    <b>Grants &amp; Resource Mobilization</b><br>\n    Secure and manage government, CSR, and international grants for innovation and startup support.\n  </li>\n  <li>\n    <b>Policy Implementation &amp; Nodal Role</b><br>\n    Act as the nodal authority for state and national startup and innovation policy implementation.\n  </li>\n  <li>\n    <b>Academic Integration</b><br>\n    Embed entrepreneurship into curricula through credit courses, certifications, and experiential learning.\n  </li>\n  <li>\n    <b>Innovation Infrastructure Development</b><br>\n    Establish and manage FAB Labs, incubators, and co-working spaces.\n  </li>\n  <li>\n    <b>Industry &amp; Ecosystem Partnerships</b><br>\n    Build partnerships with industry, investors, incubators, and accelerators.\n  </li>\n  <li>\n    <b>Flagship Innovation Events</b><br>\n    Conceptualize and execute startup festivals, hackathons, demo days, and summits.\n  </li>\n  <li>\n    <b>Performance Metrics &amp; Impact Tracking</b><br>\n    Monitor and report outcomes such as startups incubated, jobs created, IP, revenue, and funding.\n  </li>\n  <li>\n    <b>Accreditation &amp; Rankings Support</b><br>\n    Provide strategic inputs for NAAC, NIRF, and innovation-related rankings.\n  </li>\n  <li>\n    <b>Team Leadership &amp; Capacity Building</b><br>\n    Build and lead a high-performing EIC team, including faculty, staff, and student leaders.\n  </li>\n</ol></div><div class='mb-6'><h3 class='text-lg font-bold mb-3'>Qualifications & Eligibility</h3><ul class='list-disc pl-5 space-y-2'><li>Master’s degree in Engineering, Management, Innovation, Entrepreneurship, or related discipline.</li><li>Minimum 10+ years’ experience in entrepreneurship, startup incubation, innovation management, or academia–industry collaboration, with proven success in grants, program management, and ecosystem building. Minimum experience - Director - 10+ years & Deputy Director - 5+ years</li></ul></div>",
    "cardDescription": "Vision & Institutional Alignment Establish, lead, and scale the Entrepreneurship and Innovation Cell in line with the University’s vision."
  },
  {
    "id": 8,
    "slug": "director-deputy-director-cirr-oia",
    "department": "Administration",
    "position": "Leadership",
    "title": "Director/Deputy Director – Centre for International Relations and Research (CIRR) & Office of International Affairs (OIA)",
    "location": "Goa",
    "type": "On-site",
    "description": "<div class='mb-6'><h3 class='text-lg font-bold mb-3'>Key Responsibilities</h3><ol class='list-decimal pl-5 space-y-2'>\n  <li>\n    <strong>Strategic Internationalization &amp; Alignment</strong><br>\n    Implement and localize the Main Campus CIRR strategy, policies, and frameworks at the Goa Campus, ensuring alignment with the University’s overall internationalization roadmap.\n  </li>\n  <li>\n    <strong>International Partnerships &amp; Mobility</strong><br>\n    Operationalize existing international MoUs and collaborations, and coordinate international student and faculty mobility programs in line with University standards and global best practices.\n  </li>\n  <li>\n    <strong>Policy, Process &amp; Quality Assurance</strong><br>\n    Implement standardized CIRR/OIA policies, SOPs, and reporting systems; ensure compliance with academic regulations, immigration laws, and international collaboration norms; maintain accurate documentation and performance data.\n  </li>\n  <li>\n    <strong>Funded Projects &amp; Global Initiatives</strong><br>\n    Support implementation, coordination, and reporting of funded international projects and global initiatives (e.g., Erasmus+, exchanges, collaborative research).\n  </li>\n  <li>\n    <strong>International Student &amp; Foreign Nationals Management (OIA)</strong><br>\n    Oversee international student onboarding, accommodation coordination, FRRO and visa compliance, and academic monitoring to ensure smooth integration and student well-being.\n  </li>\n  <li>\n    <strong>Liaison, Representation &amp; Outreach</strong><br>\n    Serve as the University’s liaison with FRRO, local authorities, embassies, and regulatory bodies; represent the institution at international platforms and promote global engagement activities.\n  </li>\n  <li>\n    <strong>Team Leadership, Reporting &amp; Integration</strong><br>\n    Lead and coordinate the CIRR–OIA team at the Goa Campus, ensure regular reporting, and maintain seamless integration with Main Campus international operations.\n  </li>\n</ol></div><div class='mb-6'><h3 class='text-lg font-bold mb-3'>Qualifications & Eligibility</h3><ul class='list-disc pl-5 space-y-2'><li>Master’s/Doctoral degree in relevant discipline.</li><li>Minimum 10 years of experience in international education, university admissions, or global partnerships.</li><li>Minimum experience - Director - 10+ years & Deputy Director - 5+ years</li></ul></div>",
    "cardDescription": "Strategic Internationalization & Alignment Implement and localize the Main Campus CIRR strategy, policies, and frameworks at the Goa Campus, ensuring alignment with the University’s overall internationalization roadmap."
  },
  {
    "id": 9,
    "slug": "non-teaching-positions-librarian-assistant-librarian",
    "department": "Academics",
    "position": "Teaching",
    "title": "NON-Teaching Positions for Librarian/Assistant Librarian",
    "location": "Goa",
    "type": "On-site",
    "description": "<div class='mb-6'><h3 class='text-lg font-bold mb-3'>Qualifications & Eligibility</h3><ul class='list-disc pl-5 space-y-2'><li>Faculty of Pharmacy (B.Pharm, D.Pharm)</li><li>Faculty of Physiotherapy (BPT)</li><li>Faculty of Management Studies (BBA, BBA (HONS),MBA in Human Resource ,Marketing , Finance)</li><li>Participate in meetings, curriculum development, and accreditation.</li><li>Faculty of Engineering, IT & CS ( B.Tech , BCA, BCA (Hons) ,MCA)</li><li>Faculty of Applied & Health Sciences (B.Sc., M.Sc. in Biotechnology, Microbiology, Chemistry, Medical Laboratory Technology (MLT) or Operation Theatre Technology (OTT).</li></ul></div>",
    "cardDescription": "Qualifications & Eligibility   Faculty of Pharmacy (B.Pharm, D.Pharm)  Faculty of Physiotherapy (BPT)  Faculty of Management Studies (BBA, BBA (HONS),MBA in Human Resource ,Marketing , Finance)  Participate in meetings, curriculum development, and accreditation.  Faculty of Engineering, IT & CS ( B.Tech , BCA, BCA (Hons) ,MCA)  Faculty of Applied & Health Sciences (B.Sc., M.Sc. in Biotechnology, Microbiology, Chemistry, Medical Laboratory Technology (MLT) or Operation Theatre Technology (OTT)."
  },
  {
    "id": 10,
    "slug": "non-teaching-positions-security-guards",
    "department": "Academics",
    "position": "Teaching",
    "title": "NON-Teaching Positions for Security Guards",
    "location": "Goa",
    "type": "On-site",
    "description": "<div class='mb-6'><h3 class='text-lg font-bold mb-3'>Qualifications & Eligibility</h3><ul class='list-disc pl-5 space-y-2'><li>Faculty of Pharmacy (B.Pharm, D.Pharm)</li><li>Faculty of Physiotherapy (BPT)</li><li>Faculty of Management Studies (BBA, BBA (HONS),MBA in Human Resource ,Marketing , Finance)</li><li>Participate in meetings, curriculum development, and accreditation.</li><li>Faculty of Engineering, IT & CS ( B.Tech , BCA, BCA (Hons) ,MCA)</li><li>Faculty of Applied & Health Sciences (B.Sc., M.Sc. in Biotechnology, Microbiology, Chemistry, Medical Laboratory Technology (MLT) or Operation Theatre Technology (OTT).</li></ul></div>",
    "cardDescription": "Qualifications & Eligibility   Faculty of Pharmacy (B.Pharm, D.Pharm)  Faculty of Physiotherapy (BPT)  Faculty of Management Studies (BBA, BBA (HONS),MBA in Human Resource ,Marketing , Finance)  Participate in meetings, curriculum development, and accreditation.  Faculty of Engineering, IT & CS ( B.Tech , BCA, BCA (Hons) ,MCA)  Faculty of Applied & Health Sciences (B.Sc., M.Sc. in Biotechnology, Microbiology, Chemistry, Medical Laboratory Technology (MLT) or Operation Theatre Technology (OTT)."
  },
  {
    "id": 11,
    "slug": "non-teaching-positions-hostel-warden",
    "department": "Academics",
    "position": "Teaching",
    "title": "NON-Teaching Positions for Hostel Warden (Male & Female)",
    "location": "Goa",
    "type": "On-site",
    "description": "<div class='mb-6'><h3 class='text-lg font-bold mb-3'>Qualifications & Eligibility</h3><ul class='list-disc pl-5 space-y-2'><li>Faculty of Pharmacy (B.Pharm, D.Pharm)</li><li>Faculty of Physiotherapy (BPT)</li><li>Faculty of Management Studies (BBA, BBA (HONS),MBA in Human Resource ,Marketing , Finance)</li><li>Participate in meetings, curriculum development, and accreditation.</li><li>Faculty of Engineering, IT & CS ( B.Tech , BCA, BCA (Hons) ,MCA)</li><li>Faculty of Applied & Health Sciences (B.Sc., M.Sc. in Biotechnology, Microbiology, Chemistry, Medical Laboratory Technology (MLT) or Operation Theatre Technology (OTT).</li></ul></div>",
    "cardDescription": "Qualifications & Eligibility   Faculty of Pharmacy (B.Pharm, D.Pharm)  Faculty of Physiotherapy (BPT)  Faculty of Management Studies (BBA, BBA (HONS),MBA in Human Resource ,Marketing , Finance)  Participate in meetings, curriculum development, and accreditation.  Faculty of Engineering, IT & CS ( B.Tech , BCA, BCA (Hons) ,MCA)  Faculty of Applied & Health Sciences (B.Sc., M.Sc. in Biotechnology, Microbiology, Chemistry, Medical Laboratory Technology (MLT) or Operation Theatre Technology (OTT)."
  },
  {
    "id": 12,
    "slug": "non-teaching-positions-system-support-engineer",
    "department": "Academics",
    "position": "Teaching",
    "title": "NON-Teaching Positions for System Support Engineer",
    "location": "Goa",
    "type": "On-site",
    "description": "<div class='mb-6'><h3 class='text-lg font-bold mb-3'>Qualifications & Eligibility</h3><ul class='list-disc pl-5 space-y-2'><li>Faculty of Pharmacy (B.Pharm, D.Pharm)</li><li>Faculty of Physiotherapy (BPT)</li><li>Faculty of Management Studies (BBA, BBA (HONS),MBA in Human Resource ,Marketing , Finance)</li><li>Participate in meetings, curriculum development, and accreditation.</li><li>Faculty of Engineering, IT & CS ( B.Tech , BCA, BCA (Hons) ,MCA)</li><li>Faculty of Applied & Health Sciences (B.Sc., M.Sc. in Biotechnology, Microbiology, Chemistry, Medical Laboratory Technology (MLT) or Operation Theatre Technology (OTT).</li></ul></div>",
    "cardDescription": "Qualifications & Eligibility   Faculty of Pharmacy (B.Pharm, D.Pharm)  Faculty of Physiotherapy (BPT)  Faculty of Management Studies (BBA, BBA (HONS),MBA in Human Resource ,Marketing , Finance)  Participate in meetings, curriculum development, and accreditation.  Faculty of Engineering, IT & CS ( B.Tech , BCA, BCA (Hons) ,MCA)  Faculty of Applied & Health Sciences (B.Sc., M.Sc. in Biotechnology, Microbiology, Chemistry, Medical Laboratory Technology (MLT) or Operation Theatre Technology (OTT)."
  },
  {
    "id": 13,
    "slug": "non-teaching-positions-drivers",
    "department": "Academics",
    "position": "Teaching",
    "title": "NON-Teaching Positions for Drivers",
    "location": "Goa",
    "type": "On-site",
    "description": "<div class='mb-6'><h3 class='text-lg font-bold mb-3'>Qualifications & Eligibility</h3><ul class='list-disc pl-5 space-y-2'><li>Faculty of Pharmacy (B.Pharm, D.Pharm)</li><li>Faculty of Physiotherapy (BPT)</li><li>Faculty of Management Studies (BBA, BBA (HONS),MBA in Human Resource ,Marketing , Finance)</li><li>Participate in meetings, curriculum development, and accreditation.</li><li>Faculty of Engineering, IT & CS ( B.Tech , BCA, BCA (Hons) ,MCA)</li><li>Faculty of Applied & Health Sciences (B.Sc., M.Sc. in Biotechnology, Microbiology, Chemistry, Medical Laboratory Technology (MLT) or Operation Theatre Technology (OTT).</li></ul></div>",
    "cardDescription": "Qualifications & Eligibility   Faculty of Pharmacy (B.Pharm, D.Pharm)  Faculty of Physiotherapy (BPT)  Faculty of Management Studies (BBA, BBA (HONS),MBA in Human Resource ,Marketing , Finance)  Participate in meetings, curriculum development, and accreditation.  Faculty of Engineering, IT & CS ( B.Tech , BCA, BCA (Hons) ,MCA)  Faculty of Applied & Health Sciences (B.Sc., M.Sc. in Biotechnology, Microbiology, Chemistry, Medical Laboratory Technology (MLT) or Operation Theatre Technology (OTT)."
  },
  {
    "id": 14,
    "slug": "non-teaching-positions-plumber",
    "department": "Academics",
    "position": "Teaching",
    "title": "NON-Teaching Positions for Plumber",
    "location": "Goa",
    "type": "On-site",
    "description": "<div class='mb-6'><h3 class='text-lg font-bold mb-3'>Qualifications & Eligibility</h3><ul class='list-disc pl-5 space-y-2'><li>Faculty of Pharmacy (B.Pharm, D.Pharm)</li><li>Faculty of Physiotherapy (BPT)</li><li>Faculty of Management Studies (BBA, BBA (HONS),MBA in Human Resource ,Marketing , Finance)</li><li>Participate in meetings, curriculum development, and accreditation.</li><li>Faculty of Engineering, IT & CS ( B.Tech , BCA, BCA (Hons) ,MCA)</li><li>Faculty of Applied & Health Sciences (B.Sc., M.Sc. in Biotechnology, Microbiology, Chemistry, Medical Laboratory Technology (MLT) or Operation Theatre Technology (OTT).</li></ul></div>",
    "cardDescription": "Qualifications & Eligibility   Faculty of Pharmacy (B.Pharm, D.Pharm)  Faculty of Physiotherapy (BPT)  Faculty of Management Studies (BBA, BBA (HONS),MBA in Human Resource ,Marketing , Finance)  Participate in meetings, curriculum development, and accreditation.  Faculty of Engineering, IT & CS ( B.Tech , BCA, BCA (Hons) ,MCA)  Faculty of Applied & Health Sciences (B.Sc., M.Sc. in Biotechnology, Microbiology, Chemistry, Medical Laboratory Technology (MLT) or Operation Theatre Technology (OTT)."
  },
  {
    "id": 15,
    "slug": "non-teaching-positions-electrician",
    "department": "Academics",
    "position": "Teaching",
    "title": "NON-Teaching Positions for Electrician",
    "location": "Goa",
    "type": "On-site",
    "description": "<div class='mb-6'><h3 class='text-lg font-bold mb-3'>Qualifications & Eligibility</h3><ul class='list-disc pl-5 space-y-2'><li>Faculty of Pharmacy (B.Pharm, D.Pharm)</li><li>Faculty of Physiotherapy (BPT)</li><li>Faculty of Management Studies (BBA, BBA (HONS),MBA in Human Resource ,Marketing , Finance)</li><li>Participate in meetings, curriculum development, and accreditation.</li><li>Faculty of Engineering, IT & CS ( B.Tech , BCA, BCA (Hons) ,MCA)</li><li>Faculty of Applied & Health Sciences (B.Sc., M.Sc. in Biotechnology, Microbiology, Chemistry, Medical Laboratory Technology (MLT) or Operation Theatre Technology (OTT).</li></ul></div>",
    "cardDescription": "Qualifications & Eligibility   Faculty of Pharmacy (B.Pharm, D.Pharm)  Faculty of Physiotherapy (BPT)  Faculty of Management Studies (BBA, BBA (HONS),MBA in Human Resource ,Marketing , Finance)  Participate in meetings, curriculum development, and accreditation.  Faculty of Engineering, IT & CS ( B.Tech , BCA, BCA (Hons) ,MCA)  Faculty of Applied & Health Sciences (B.Sc., M.Sc. in Biotechnology, Microbiology, Chemistry, Medical Laboratory Technology (MLT) or Operation Theatre Technology (OTT)."
  },
  {
    "id": 16,
    "slug": "non-teaching-positions-lab-assistant",
    "department": "Academics",
    "position": "Teaching",
    "title": "NON-Teaching Positions for Lab Assistant",
    "location": "Goa",
    "type": "On-site",
    "description": "<div class='mb-6'><h3 class='text-lg font-bold mb-3'>Qualifications & Eligibility</h3><ul class='list-disc pl-5 space-y-2'><li>Faculty of Pharmacy (B.Pharm, D.Pharm)</li><li>Faculty of Physiotherapy (BPT)</li><li>Faculty of Management Studies (BBA, BBA (HONS),MBA in Human Resource ,Marketing , Finance)</li><li>Participate in meetings, curriculum development, and accreditation.</li><li>Faculty of Engineering, IT & CS ( B.Tech , BCA, BCA (Hons) ,MCA)</li><li>Faculty of Applied & Health Sciences (B.Sc., M.Sc. in Biotechnology, Microbiology, Chemistry, Medical Laboratory Technology (MLT) or Operation Theatre Technology (OTT).</li></ul></div>",
    "cardDescription": "Qualifications & Eligibility   Faculty of Pharmacy (B.Pharm, D.Pharm)  Faculty of Physiotherapy (BPT)  Faculty of Management Studies (BBA, BBA (HONS),MBA in Human Resource ,Marketing , Finance)  Participate in meetings, curriculum development, and accreditation.  Faculty of Engineering, IT & CS ( B.Tech , BCA, BCA (Hons) ,MCA)  Faculty of Applied & Health Sciences (B.Sc., M.Sc. in Biotechnology, Microbiology, Chemistry, Medical Laboratory Technology (MLT) or Operation Theatre Technology (OTT)."
  },
  {
    "id": 17,
    "slug": "non-teaching-positions-for-office-assistant",
    "department": "Academics",
    "position": "Teaching",
    "title": "NON-Teaching Positions for Office Assistant",
    "location": "Goa",
    "type": "On-site",
    "description": "<div class='mb-6'><h3 class='text-lg font-bold mb-3'>Qualifications & Eligibility</h3><ul class='list-disc pl-5 space-y-2'><li>Faculty of Pharmacy (B.Pharm, D.Pharm)</li><li>Faculty of Physiotherapy (BPT)</li><li>Faculty of Management Studies (BBA, BBA (HONS),MBA in Human Resource ,Marketing , Finance)</li><li>Participate in meetings, curriculum development, and accreditation.</li><li>Faculty of Engineering, IT & CS ( B.Tech , BCA, BCA (Hons) ,MCA)</li><li>Faculty of Applied & Health Sciences (B.Sc., M.Sc. in Biotechnology, Microbiology, Chemistry, Medical Laboratory Technology (MLT) or Operation Theatre Technology (OTT).</li></ul></div>",
    "cardDescription": "Qualifications & Eligibility   Faculty of Pharmacy (B.Pharm, D.Pharm)  Faculty of Physiotherapy (BPT)  Faculty of Management Studies (BBA, BBA (HONS),MBA in Human Resource ,Marketing , Finance)  Participate in meetings, curriculum development, and accreditation.  Faculty of Engineering, IT & CS ( B.Tech , BCA, BCA (Hons) ,MCA)  Faculty of Applied & Health Sciences (B.Sc., M.Sc. in Biotechnology, Microbiology, Chemistry, Medical Laboratory Technology (MLT) or Operation Theatre Technology (OTT)."
  },
  {
    "id": 18,
    "slug": "faculty-of-hotel-management-professor-associate-professor-assistant-professor",
    "department": "Academics",
    "position": "Teaching",
    "title": "Faculty of Hotel Management (Professor | Associate Professor | Assistant Professor )",
    "location": "Goa",
    "type": "On-site",
    "description": "<div class='mb-6'><h3 class='text-lg font-bold mb-3'>Qualifications & Eligibility</h3><ul class='list-disc pl-5 space-y-2'><li>Faculty of Pharmacy (B.Pharm, D.Pharm)</li><li>Faculty of Physiotherapy (BPT)</li><li>Faculty of Management Studies (BBA, BBA (HONS),MBA in Human Resource ,Marketing , Finance)</li><li>Participate in meetings, curriculum development, and accreditation.</li><li>Faculty of Engineering, IT & CS ( B.Tech , BCA, BCA (Hons) ,MCA)</li><li>Faculty of Applied & Health Sciences (B.Sc., M.Sc. in Biotechnology, Microbiology, Chemistry, Medical Laboratory Technology (MLT) or Operation Theatre Technology (OTT).</li></ul></div>",
    "cardDescription": "Qualifications & Eligibility   Faculty of Pharmacy (B.Pharm, D.Pharm)  Faculty of Physiotherapy (BPT)  Faculty of Management Studies (BBA, BBA (HONS),MBA in Human Resource ,Marketing , Finance)  Participate in meetings, curriculum development, and accreditation.  Faculty of Engineering, IT & CS ( B.Tech , BCA, BCA (Hons) ,MCA)  Faculty of Applied & Health Sciences (B.Sc., M.Sc. in Biotechnology, Microbiology, Chemistry, Medical Laboratory Technology (MLT) or Operation Theatre Technology (OTT)."
  },
  {
    "id": 19,
    "slug": "non-teaching-positions-for-senior-civil-engineer",
    "department": "Academics",
    "position": "Teaching",
    "title": "NON-Teaching Positions for Senior Civil Engineer",
    "location": "Goa",
    "type": "On-site",
    "description": "<div class='mb-6'><h3 class='text-lg font-bold mb-3'>Qualifications & Eligibility</h3><ul class='list-disc pl-5 space-y-2'><li>Faculty of Pharmacy (B.Pharm, D.Pharm)</li><li>Faculty of Physiotherapy (BPT)</li><li>Faculty of Management Studies (BBA, BBA (HONS),MBA in Human Resource ,Marketing , Finance)</li><li>Participate in meetings, curriculum development, and accreditation.</li><li>Faculty of Engineering, IT & CS ( B.Tech , BCA, BCA (Hons) ,MCA)</li><li>Faculty of Applied & Health Sciences (B.Sc., M.Sc. in Biotechnology, Microbiology, Chemistry, Medical Laboratory Technology (MLT) or Operation Theatre Technology (OTT).</li></ul></div>",
    "cardDescription": "Qualifications & Eligibility   Faculty of Pharmacy (B.Pharm, D.Pharm)  Faculty of Physiotherapy (BPT)  Faculty of Management Studies (BBA, BBA (HONS),MBA in Human Resource ,Marketing , Finance)  Participate in meetings, curriculum development, and accreditation.  Faculty of Engineering, IT & CS ( B.Tech , BCA, BCA (Hons) ,MCA)  Faculty of Applied & Health Sciences (B.Sc., M.Sc. in Biotechnology, Microbiology, Chemistry, Medical Laboratory Technology (MLT) or Operation Theatre Technology (OTT)."
  },
  {
    "id": 20,
    "slug": "faculty-of-nursing-professor-associate-professor-assistant-professor",
    "department": "Academics",
    "position": "Teaching",
    "title": "Faculty of Nursing (Professor | Associate Professor | Assistant Professor )",
    "location": "Goa",
    "type": "On-site",
    "description": "<div class='mb-6'><h3 class='text-lg font-bold mb-3'>Qualifications & Eligibility</h3><ul class='list-disc pl-5 space-y-2'><li>Faculty of Pharmacy (B.Pharm, D.Pharm)</li><li>Faculty of Physiotherapy (BPT)</li><li>Faculty of Management Studies (BBA, BBA (HONS),MBA in Human Resource ,Marketing , Finance)</li><li>Participate in meetings, curriculum development, and accreditation.</li><li>Faculty of Engineering, IT & CS ( B.Tech , BCA, BCA (Hons) ,MCA)</li><li>Faculty of Applied & Health Sciences (B.Sc., M.Sc. in Biotechnology, Microbiology, Chemistry, Medical Laboratory Technology (MLT) or Operation Theatre Technology (OTT).</li></ul></div>",
    "cardDescription": "Qualifications & Eligibility   Faculty of Pharmacy (B.Pharm, D.Pharm)  Faculty of Physiotherapy (BPT)  Faculty of Management Studies (BBA, BBA (HONS),MBA in Human Resource ,Marketing , Finance)  Participate in meetings, curriculum development, and accreditation.  Faculty of Engineering, IT & CS ( B.Tech , BCA, BCA (Hons) ,MCA)  Faculty of Applied & Health Sciences (B.Sc., M.Sc. in Biotechnology, Microbiology, Chemistry, Medical Laboratory Technology (MLT) or Operation Theatre Technology (OTT)."
  },
  {
    "id": 21,
    "slug": "faculty-of-applied-health-sciences-professor-associate-professor-assistant-professor",
    "department": "Academics",
    "position": "Teaching",
    "title": "Faculty of Applied & Health Sciences (Professor | Associate Professor | Assistant Professor )",
    "location": "Goa",
    "type": "On-site",
    "description": "<div class='mb-6'><h3 class='text-lg font-bold mb-3'>Qualifications & Eligibility</h3><ul class='list-disc pl-5 space-y-2'><li>Faculty of Pharmacy (B.Pharm, D.Pharm)</li><li>Faculty of Physiotherapy (BPT)</li><li>Faculty of Management Studies (BBA, BBA (HONS),MBA in Human Resource ,Marketing , Finance)</li><li>Participate in meetings, curriculum development, and accreditation.</li><li>Faculty of Engineering, IT & CS ( B.Tech , BCA, BCA (Hons) ,MCA)</li><li>Faculty of Applied & Health Sciences (B.Sc., M.Sc. in Biotechnology, Microbiology, Chemistry, Medical Laboratory Technology (MLT) or Operation Theatre Technology (OTT).</li></ul></div>",
    "cardDescription": "Qualifications & Eligibility   Faculty of Pharmacy (B.Pharm, D.Pharm)  Faculty of Physiotherapy (BPT)  Faculty of Management Studies (BBA, BBA (HONS),MBA in Human Resource ,Marketing , Finance)  Participate in meetings, curriculum development, and accreditation.  Faculty of Engineering, IT & CS ( B.Tech , BCA, BCA (Hons) ,MCA)  Faculty of Applied & Health Sciences (B.Sc., M.Sc. in Biotechnology, Microbiology, Chemistry, Medical Laboratory Technology (MLT) or Operation Theatre Technology (OTT)."
  },
  {
    "id": 22,
    "slug": "faculty-of-engineering-it-cs-professor-associate-professor-assistant-professor",
    "department": "Academics",
    "position": "Teaching",
    "title": "Faculty of Engineering, IT & CS  (Professor | Associate Professor | Assistant Professor )",
    "location": "Goa",
    "type": "On-site",
    "description": "<div class='mb-6'><h3 class='text-lg font-bold mb-3'>Qualifications & Eligibility</h3><ul class='list-disc pl-5 space-y-2'><li>Faculty of Pharmacy (B.Pharm, D.Pharm)</li><li>Faculty of Physiotherapy (BPT)</li><li>Faculty of Management Studies (BBA, BBA (HONS),MBA in Human Resource ,Marketing , Finance)</li><li>Participate in meetings, curriculum development, and accreditation.</li><li>Faculty of Engineering, IT & CS ( B.Tech , BCA, BCA (Hons) ,MCA)</li><li>Faculty of Applied & Health Sciences (B.Sc., M.Sc. in Biotechnology, Microbiology, Chemistry, Medical Laboratory Technology (MLT) or Operation Theatre Technology (OTT).</li></ul></div>",
    "cardDescription": "Qualifications & Eligibility   Faculty of Pharmacy (B.Pharm, D.Pharm)  Faculty of Physiotherapy (BPT)  Faculty of Management Studies (BBA, BBA (HONS),MBA in Human Resource ,Marketing , Finance)  Participate in meetings, curriculum development, and accreditation.  Faculty of Engineering, IT & CS ( B.Tech , BCA, BCA (Hons) ,MCA)  Faculty of Applied & Health Sciences (B.Sc., M.Sc. in Biotechnology, Microbiology, Chemistry, Medical Laboratory Technology (MLT) or Operation Theatre Technology (OTT)."
  },
  {
    "id": 23,
    "slug": "faculty-of-management-studies-professor-associate-professor-assistant-professor",
    "department": "Academics",
    "position": "Teaching",
    "title": "Faculty of Management Studies  (Professor | Associate Professor | Assistant Professor )",
    "location": "Goa",
    "type": "On-site",
    "description": "<div class='mb-6'><h3 class='text-lg font-bold mb-3'>Qualifications & Eligibility</h3><ul class='list-disc pl-5 space-y-2'><li>Faculty of Pharmacy (B.Pharm, D.Pharm)</li><li>Faculty of Physiotherapy (BPT)</li><li>Faculty of Management Studies (BBA, BBA (HONS),MBA in Human Resource ,Marketing , Finance)</li><li>Participate in meetings, curriculum development, and accreditation.</li><li>Faculty of Engineering, IT & CS ( B.Tech , BCA, BCA (Hons) ,MCA)</li><li>Faculty of Applied & Health Sciences (B.Sc., M.Sc. in Biotechnology, Microbiology, Chemistry, Medical Laboratory Technology (MLT) or Operation Theatre Technology (OTT).</li></ul></div>",
    "cardDescription": "Qualifications & Eligibility   Faculty of Pharmacy (B.Pharm, D.Pharm)  Faculty of Physiotherapy (BPT)  Faculty of Management Studies (BBA, BBA (HONS),MBA in Human Resource ,Marketing , Finance)  Participate in meetings, curriculum development, and accreditation.  Faculty of Engineering, IT & CS ( B.Tech , BCA, BCA (Hons) ,MCA)  Faculty of Applied & Health Sciences (B.Sc., M.Sc. in Biotechnology, Microbiology, Chemistry, Medical Laboratory Technology (MLT) or Operation Theatre Technology (OTT)."
  },
  {
    "id": 24,
    "slug": "faculty-of-physiotherapy-professor-associate-professor-assistant-professor",
    "department": "Academics",
    "position": "Teaching",
    "title": "Faculty of Physiotherapy (Professor | Associate Professor | Assistant professor)",
    "location": "Goa",
    "type": "On-site",
    "description": "<div class='mb-6'><h3 class='text-lg font-bold mb-3'>Qualifications & Eligibility</h3><ul class='list-disc pl-5 space-y-2'><li>Faculty of Pharmacy (B.Pharm, D.Pharm)</li><li>Faculty of Physiotherapy (BPT)</li><li>Faculty of Management Studies (BBA, BBA (HONS),MBA in Human Resource ,Marketing , Finance)</li><li>Participate in meetings, curriculum development, and accreditation.</li><li>Faculty of Engineering, IT & CS ( B.Tech , BCA, BCA (Hons) ,MCA)</li><li>Faculty of Applied & Health Sciences (B.Sc., M.Sc. in Biotechnology, Microbiology, Chemistry, Medical Laboratory Technology (MLT) or Operation Theatre Technology (OTT).</li></ul></div>",
    "cardDescription": "Qualifications & Eligibility   Faculty of Pharmacy (B.Pharm, D.Pharm)  Faculty of Physiotherapy (BPT)  Faculty of Management Studies (BBA, BBA (HONS),MBA in Human Resource ,Marketing , Finance)  Participate in meetings, curriculum development, and accreditation.  Faculty of Engineering, IT & CS ( B.Tech , BCA, BCA (Hons) ,MCA)  Faculty of Applied & Health Sciences (B.Sc., M.Sc. in Biotechnology, Microbiology, Chemistry, Medical Laboratory Technology (MLT) or Operation Theatre Technology (OTT)."
  },
  {
    "id": 25,
    "slug": "faculty-of-pharmacy-professor-associate-professor-assistant-professor",
    "department": "Academics",
    "position": "Teaching",
    "title": "Faculty of Pharmacy (Professor | Associate Professor | Assistant Professor)",
    "location": "Goa",
    "type": "On-site",
    "description": "<div class='mb-6'><h3 class='text-lg font-bold mb-3'>Qualifications & Eligibility</h3><ul class='list-disc pl-5 space-y-2'><li>Faculty of Pharmacy (B.Pharm, D.Pharm)</li><li>Faculty of Physiotherapy (BPT)</li><li>Faculty of Management Studies (BBA, BBA (HONS),MBA in Human Resource ,Marketing , Finance)</li><li>Participate in meetings, curriculum development, and accreditation.</li><li>Faculty of Engineering, IT & CS ( B.Tech , BCA, BCA (Hons) ,MCA)</li><li>Faculty of Applied & Health Sciences (B.Sc., M.Sc. in Biotechnology, Microbiology, Chemistry, Medical Laboratory Technology (MLT) or Operation Theatre Technology (OTT).</li></ul></div>",
    "cardDescription": "Qualifications & Eligibility   Faculty of Pharmacy (B.Pharm, D.Pharm)  Faculty of Physiotherapy (BPT)  Faculty of Management Studies (BBA, BBA (HONS),MBA in Human Resource ,Marketing , Finance)  Participate in meetings, curriculum development, and accreditation.  Faculty of Engineering, IT & CS ( B.Tech , BCA, BCA (Hons) ,MCA)  Faculty of Applied & Health Sciences (B.Sc., M.Sc. in Biotechnology, Microbiology, Chemistry, Medical Laboratory Technology (MLT) or Operation Theatre Technology (OTT)."
  }
];
