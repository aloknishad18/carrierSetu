// Rich Mock Data for CareerSetu (SIH26044)

export const initialStudentProfile = {
  id: "STU-2026-0941",
  name: "Aarav Sharma",
  hindiName: "आरव शर्मा",
  degree: "B.Tech Computer Science (3rd Year)",
  institute: "Delhi Technological University (DTU)",
  location: "New Delhi, India",
  readinessScore: 82,
  avatarUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&auto=format&fit=crop&q=80",
  verifiedBadge: true,
  summary: "Aspiring Full-Stack Software Engineer passionate about distributed systems, modern React architectures, and high-impact digital public infrastructure.",
  categories: {
    technical: { score: 88, label: "Technical Skills", hindiLabel: "तकनीकी कौशल" },
    problemSolving: { score: 78, label: "Problem Solving", hindiLabel: "समस्या समाधान" },
    communication: { score: 72, label: "Communication", hindiLabel: "संचार कौशल" },
    collaboration: { score: 85, label: "Collaboration", hindiLabel: "सहयोग क्षमता" },
    industryAlignment: { score: 76, label: "Industry Alignment", hindiLabel: "उद्योग अनुकूलता" }
  },
  skills: [
    { name: "React.js", level: "Advanced", score: 92, category: "Technical", verified: true },
    { name: "JavaScript / ES6+", level: "Advanced", score: 90, category: "Technical", verified: true },
    { name: "Node.js & Express", level: "Proficient", score: 84, category: "Technical", verified: true },
    { name: "Data Structures & Algorithms", level: "Proficient", score: 78, category: "Problem Solving", verified: true },
    { name: "PostgreSQL / SQL", level: "Intermediate", score: 75, category: "Technical", verified: true },
    { name: "Git & GitHub CI", level: "Advanced", score: 88, category: "Collaboration", verified: true },
    { name: "RESTful API Design", level: "Advanced", score: 86, category: "Technical", verified: true },
    { name: "System Design Basics", level: "Intermediate", score: 68, category: "Industry Alignment", verified: false },
    { name: "Docker & Containers", level: "Beginner", score: 55, category: "Industry Alignment", verified: false },
    { name: "Technical Presentation", level: "Proficient", score: 72, category: "Communication", verified: true }
  ],
  projects: [
    {
      title: "SetuConnect: Microservice Job Matcher",
      tech: ["Node.js", "React", "MongoDB", "Redis"],
      description: "Asynchronous matchmaking engine processing candidate-job skill overlap with 92% accuracy under high load.",
      github: "https://github.com/example/setuconnect",
      live: "https://demo.example.com",
      verified: true
    },
    {
      title: "KrishiAI: Crop Yield Predictor",
      tech: ["Python", "FastAPI", "Scikit-Learn", "Tailwind"],
      description: "Won 2nd prize in University Hackathon; trained random forest regressors for soil nutrient and weather datasets.",
      github: "https://github.com/example/krishiai",
      live: "https://krishi.example.com",
      verified: true
    }
  ],
  certifications: [
    { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", date: "Jan 2026", verified: true },
    { name: "Data Structures & Algorithms in Java", issuer: "NPTEL / IIT Madras", date: "Nov 2025", verified: true }
  ]
};

export const careerRolesData = [
  {
    id: "software-dev",
    name: "Software Developer",
    hindiName: "सॉफ्टवेयर डेवलपर",
    matchScore: 78,
    benchmarkAvg: 80,
    matchedSkills: [
      { name: "Programming Fundamentals", score: 92 },
      { name: "Web Development (React/Node)", score: 88 },
      { name: "Version Control (Git)", score: 88 },
      { name: "Problem Solving", score: 78 }
    ],
    developingSkills: [
      { name: "Advanced Data Structures & DP", current: 78, target: 90, priority: "High" },
      { name: "Backend Architecture & Caching", current: 74, target: 88, priority: "High" },
      { name: "System Design & Scalability", current: 68, target: 82, priority: "Medium" },
      { name: "Docker & Container Deployment", current: 55, target: 75, priority: "Medium" }
    ],
    actionPlan: "Focus on Graph Algorithms and Distributed Caching to reach 90%+ readiness within 4 weeks."
  },
  {
    id: "data-analyst",
    name: "Data Analyst / BI Engineer",
    hindiName: "डेटा विश्लेषक / बीआई इंजीनियर",
    matchScore: 85,
    benchmarkAvg: 75,
    matchedSkills: [
      { name: "Python for Data Analysis", score: 86 },
      { name: "SQL & Query Optimization", score: 88 },
      { name: "Statistical Reasoning", score: 82 },
      { name: "Data Cleaning & Preprocessing", score: 85 }
    ],
    developingSkills: [
      { name: "PowerBI / Tableau Dashboarding", current: 65, target: 85, priority: "High" },
      { name: "Automated ETL Pipelines", current: 62, target: 80, priority: "High" },
      { name: "Business Presentation Skills", current: 72, target: 82, priority: "Medium" }
    ],
    actionPlan: "Complete two end-to-end interactive dashboard case studies to secure Tier-1 analyst roles."
  },
  {
    id: "cloud-engineer",
    name: "Cloud & DevOps Engineer",
    hindiName: "क्लाउड एवं डेवऑप्स इंजीनियर",
    matchScore: 68,
    benchmarkAvg: 82,
    matchedSkills: [
      { name: "Linux Administration Basics", score: 80 },
      { name: "Bash & Scripting", score: 75 },
      { name: "Cloud Fundamentals (AWS)", score: 72 }
    ],
    developingSkills: [
      { name: "Kubernetes Orchestration", current: 45, target: 80, priority: "High" },
      { name: "CI/CD Pipeline Automation", current: 55, target: 85, priority: "High" },
      { name: "Terraform / Infrastructure as Code", current: 40, target: 75, priority: "High" },
      { name: "Observability & Prometheus/Grafana", current: 50, target: 75, priority: "Medium" }
    ],
    actionPlan: "Deploy a multi-tier app on Kubernetes with automated GitHub Actions to boost match to 85%."
  },
  {
    id: "uiux-designer",
    name: "UI/UX & Product Designer",
    hindiName: "यूआई/यूएक्स उत्पाद डिज़ाइनर",
    matchScore: 72,
    benchmarkAvg: 78,
    matchedSkills: [
      { name: "User Research & Persona Building", score: 82 },
      { name: "Wireframing & Prototyping", score: 80 },
      { name: "HTML & CSS Execution", score: 90 }
    ],
    developingSkills: [
      { name: "Comprehensive Design Systems", current: 60, target: 85, priority: "High" },
      { name: "Micro-interactions & Motion UX", current: 55, target: 80, priority: "Medium" },
      { name: "Accessibility (WCAG 2.1)", current: 65, target: 85, priority: "Medium" }
    ],
    actionPlan: "Publish a complete case study detailing user interviews and atomic design components."
  },
  {
    id: "ai-engineer",
    name: "AI & Machine Learning Engineer",
    hindiName: "एआई एवं मशीन लर्निंग इंजीनियर",
    matchScore: 74,
    benchmarkAvg: 84,
    matchedSkills: [
      { name: "Python & Scientific Libraries", score: 88 },
      { name: "Linear Algebra & Calculus", score: 82 },
      { name: "Model Training Basics (PyTorch)", score: 75 }
    ],
    developingSkills: [
      { name: "LLM Fine-Tuning & Prompt Pipelines", current: 58, target: 85, priority: "High" },
      { name: "Vector Databases & RAG Systems", current: 55, target: 82, priority: "High" },
      { name: "MLOps & Model Serving", current: 50, target: 80, priority: "High" }
    ],
    actionPlan: "Build a production RAG application with hybrid vector search to raise readiness past 88%."
  }
];

export const sampleOpportunities = [
  {
    id: "OPP-101",
    title: "Frontend Developer Intern",
    titleHi: "फ्रंटएंड डेवलपर इंटर्न",
    company: "Zomato Technologies",
    companyLogo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&auto=format&fit=crop&q=80",
    category: "Technology",
    categoryHi: "प्रौद्योगिकी",
    location: "Bengaluru, Karnataka",
    type: "Hybrid",
    typeHi: "हाइब्रिड",
    stipend: "₹35,000 / month",
    duration: "6 Months",
    deadlineDays: 12,
    matchScore: 94,
    skills: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "Git"],
    whyMatch: "Strong frontend project portfolio with 92% React competency score and active open source pull requests.",
    verifiedCompany: true,
    positions: 4,
    description: "Join our core web experience team to craft lightning-fast customer workflows used by 20M+ Indian users daily."
  },
  {
    id: "OPP-102",
    title: "Software Engineering Intern",
    titleHi: "सॉफ्टवेयर इंजीनियरिंग इंटर्न",
    company: "Tata Consultancy Services (TCS Digital)",
    companyLogo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&auto=format&fit=crop&q=80",
    category: "Technology",
    categoryHi: "प्रौद्योगिकी",
    location: "Hyderabad, Telangana",
    type: "In-Office",
    typeHi: "कार्यालय",
    stipend: "₹30,000 / month",
    duration: "6 Months",
    deadlineDays: 8,
    matchScore: 88,
    skills: ["Java / Python", "Data Structures", "SQL", "Spring Boot", "REST APIs"],
    whyMatch: "High problem-solving score (78%) and verified NPTEL algorithmic certification.",
    verifiedCompany: true,
    positions: 12,
    description: "Work with our Global Banking & Financial Services lab developing microservices and distributed transaction systems."
  },
  {
    id: "OPP-103",
    title: "Data Science & AI Trainee",
    titleHi: "डेटा साइंस एवं एआई प्रशिक्षु",
    company: "Infosys Labs",
    companyLogo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&auto=format&fit=crop&q=80",
    category: "Data",
    categoryHi: "डेटा एवं एआई",
    location: "Pune, Maharashtra",
    type: "Remote",
    typeHi: "रिमोट",
    stipend: "₹28,000 / month",
    duration: "4 Months",
    deadlineDays: 15,
    matchScore: 85,
    skills: ["Python", "FastAPI", "Pandas", "Scikit-Learn", "Vector DBs"],
    whyMatch: "Award-winning crop yield ML project and proven track record in regression analysis.",
    verifiedCompany: true,
    positions: 6,
    description: "Develop automated retrieval-augmented generation (RAG) pipelines and analytics engines for enterprise documents."
  },
  {
    id: "OPP-104",
    title: "Cloud Infrastructure & DevOps Intern",
    titleHi: "क्लाउड इन्फ्रास्ट्रक्चर एवं डेवऑप्स इंटर्न",
    company: "Razorpay Payments",
    companyLogo: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=100&auto=format&fit=crop&q=80",
    category: "Engineering",
    categoryHi: "इंजीनियरिंग",
    location: "Bengaluru, Karnataka",
    type: "Hybrid",
    typeHi: "हाइब्रिड",
    stipend: "₹45,000 / month",
    duration: "6 Months",
    deadlineDays: 5,
    matchScore: 80,
    skills: ["AWS", "Docker", "Linux", "Terraform", "CI/CD"],
    whyMatch: "Certified AWS Cloud Practitioner credential and strong Linux fundamentals.",
    verifiedCompany: true,
    positions: 3,
    description: "Collaborate with platform reliability teams managing high-throughput transaction clusters during national sales events."
  },
  {
    id: "OPP-105",
    title: "UI/UX & Product Design Fellow",
    titleHi: "यूआई/यूएक्स उत्पाद डिज़ाइन फेलो",
    company: "Swiggy Design Studio",
    companyLogo: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=100&auto=format&fit=crop&q=80",
    category: "Design",
    categoryHi: "डिजाइन",
    location: "Bengaluru / Gurugram",
    type: "Hybrid",
    typeHi: "हाइब्रिड",
    stipend: "₹32,000 / month",
    duration: "5 Months",
    deadlineDays: 18,
    matchScore: 89,
    skills: ["Figma", "User Journey Mapping", "Design Systems", "Usability Testing"],
    whyMatch: "Demonstrated empathy for accessible tier-2 Indian user behavior with clean interactive prototypes.",
    verifiedCompany: true,
    positions: 2,
    description: "Design intuitive digital experiences for regional Indian merchants and delivery partner apps."
  },
  {
    id: "OPP-106",
    title: "HealthTech & Bio-Informatics Intern",
    titleHi: "हेल्थटेक एवं बायो-इन्फॉर्मेटिक्स इंटर्न",
    company: "Apollo Hospitals Digital",
    companyLogo: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=100&auto=format&fit=crop&q=80",
    category: "Healthcare",
    categoryHi: "स्वास्थ्य सेवा",
    location: "Chennai, Tamil Nadu",
    type: "In-Office",
    typeHi: "कार्यालय",
    stipend: "₹25,000 / month",
    duration: "6 Months",
    deadlineDays: 20,
    matchScore: 82,
    skills: ["Python", "SQL", "HL7/FHIR", "Medical Analytics", "Security"],
    whyMatch: "Strong database query capability coupled with secure data processing ethics.",
    verifiedCompany: true,
    positions: 5,
    description: "Build clinical data exchange modules adhering to Ayushman Bharat Digital Mission (ABDM) standards."
  }
];

export const assessmentQuestions = [
  {
    id: 1,
    category: "Technical Skills",
    categoryHi: "तकनीकी कौशल",
    question: "Which data structure provides constant-time O(1) average lookup, and what is its primary vulnerability in adversarial scenarios?",
    questionHi: "कौन सी डेटा संरचना औसत रूप से O(1) लुकअप प्रदान करती है, और प्रतिकूल परिस्थितियों में इसकी मुख्य कमजोरी क्या है?",
    options: [
      { text: "Binary Search Tree — Height imbalance causing O(N) skew", points: 2 },
      { text: "Hash Map / Hash Table — Hash collision attacks degrading lookup to O(N)", points: 5, correct: true },
      { text: "Skip List — Memory overhead from excessive pointer levels", points: 3 },
      { text: "Heap — Lack of direct key indexing", points: 1 }
    ]
  },
  {
    id: 2,
    category: "Problem Solving",
    categoryHi: "समस्या समाधान",
    question: "You need to find the shortest path between two nodes in an unweighted grid with millions of cells. Which strategy is most optimal?",
    questionHi: "लाखों सेल्स वाले अनवेटेड ग्रिड में दो बिंदुओं के बीच सबसे छोटा रास्ता खोजने हेतु कौन सी विधि सर्वश्रेष्ठ है?",
    options: [
      { text: "Depth-First Search (DFS) with recursive backtracking", points: 1 },
      { text: "Bellman-Ford Algorithm with negative weight cycle checks", points: 2 },
      { text: "Bidirectional Breadth-First Search (BFS) starting from both ends", points: 5, correct: true },
      { text: "Floyd-Warshall all-pairs shortest paths matrix", points: 2 }
    ]
  },
  {
    id: 3,
    category: "System Design & Industry Alignment",
    categoryHi: "सिस्टम डिजाइन एवं उद्योग समझ",
    question: "When a relational database encounters severe read traffic spikes during a national exam registration, which architectural pattern should be applied first?",
    questionHi: "जब किसी डेटाबेस पर अत्यधिक ट्रैफिक आता है, तो स्केलेबिलिटी हेतु सबसे पहले कौन सा पैटर्न लागू करना चाहिए?",
    options: [
      { text: "Implement Redis distributed caching and read replicas", points: 5, correct: true },
      { text: "Convert the entire schema to unstructured MongoDB immediately", points: 1 },
      { text: "Disable all foreign key constraints and primary keys", points: 1 },
      { text: "Increase database server RAM without architectural adjustments", points: 2 }
    ]
  },
  {
    id: 4,
    category: "Communication & Collaboration",
    categoryHi: "संचार एवं टीम सहयोग",
    question: "A critical production bug causes intermittent failures 2 hours before a sprint release. How should an effective engineer communicate this?",
    questionHi: "रिलीज़ से 2 घंटे पहले एक गंभीर बग मिलता है। एक कुशल इंजीनियर को टीम से कैसे संवाद करना चाहिए?",
    options: [
      { text: "Wait until after release to see if users notice the defect", points: 0 },
      { text: "Quickly post on the team channel with reproducible steps, impact assessment, and proposed mitigation options", points: 5, correct: true },
      { text: "Privately fix it without testing or notifying the QA lead", points: 1 },
      { text: "Blame the developer who authored the initial commit", points: 0 }
    ]
  },
  {
    id: 5,
    category: "Career & Learning Intent",
    categoryHi: "करियर एवं अध्ययन दृष्टिकोण",
    question: "How do you stay abreast of rapid shifts in AI frameworks, cloud native tools, and industrial coding guidelines?",
    questionHi: "आप तकनीकी बदलावों और आधुनिक टूल्स से स्वयं को कैसे अपडेट रखते हैं?",
    options: [
      { text: "I only study syllabus materials prescribed by the university semester exams", points: 1 },
      { text: "Building side projects, contributing to open-source, and following official engineering blogs & RFCs", points: 5, correct: true },
      { text: "Browsing social media headlines casually", points: 2 },
      { text: "Relying purely on on-the-job training after hiring", points: 2 }
    ]
  }
];

export const initialApplications = [
  {
    id: "APP-501",
    opportunityId: "OPP-101",
    role: "Frontend Developer Intern",
    company: "Zomato Technologies",
    appliedDate: "2026-08-28",
    stage: "Interview",
    statusBadge: "Interview Scheduled",
    stageIndex: 3,
    notes: "Technical round scheduled for Sept 14 with Principal UI Architect.",
    nextAction: "Review System Design for Component Trees"
  },
  {
    id: "APP-502",
    opportunityId: "OPP-102",
    role: "Software Engineering Intern",
    company: "Tata Consultancy Services (TCS)",
    appliedDate: "2026-09-02",
    stage: "Assessment",
    statusBadge: "Coding Challenge Pending",
    stageIndex: 2,
    notes: "Received HackerEarth test link. Test window active for 72 hours.",
    nextAction: "Complete 90-minute timed algorithm test"
  },
  {
    id: "APP-503",
    opportunityId: "OPP-104",
    role: "Cloud Infrastructure & DevOps Intern",
    company: "Razorpay Payments",
    appliedDate: "2026-09-06",
    stage: "Under Review",
    statusBadge: "Profile Shortlisted",
    stageIndex: 1,
    notes: "Resume passed verified skill gate (80% match). Hiring manager reviewing GitHub repo.",
    nextAction: "Wait for screening call notification"
  }
];

export const candidatePool = [
  {
    id: "CAN-101",
    name: "Priya Sundaram",
    college: "IIT Madras",
    degree: "B.Tech CSE (Final Year)",
    readiness: 94,
    skills: ["React", "Go", "Kubernetes", "PostgreSQL"],
    matchScore: 96,
    matchReason: "Published research on distributed state machines and has completed production internship at Razorpay.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80",
    verified: true,
    available: "Immediate"
  },
  {
    id: "CAN-102",
    name: "Rohan Varma",
    college: "BITS Pilani",
    degree: "B.E. Computer Science",
    readiness: 89,
    skills: ["Python", "PyTorch", "FastAPI", "Docker"],
    matchScore: 91,
    matchReason: "Top 2% in Kaggle Competitions; built custom high-speed embedding retriever for Indian languages.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop&q=80",
    verified: true,
    available: "Within 2 Weeks"
  },
  {
    id: "CAN-103",
    name: "Ananya Deshmukh",
    college: "VJTI Mumbai",
    degree: "B.Tech Information Technology",
    readiness: 86,
    skills: ["Figma", "Design Systems", "TypeScript", "Next.js"],
    matchScore: 88,
    matchReason: "Dual capability in product design and frontend engineering; built open-source design token generator.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80",
    verified: true,
    available: "Immediate"
  },
  {
    id: "CAN-104",
    name: "Harshil Patel",
    college: "NIT Trichy",
    degree: "B.Tech Electronics & Comm.",
    readiness: 84,
    skills: ["C++", "Embedded Linux", "IoT", "MQTT"],
    matchScore: 85,
    matchReason: "Built smart grid energy meter firmware deployed in 50 campus hostels.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
    verified: true,
    available: "Within 1 Month"
  }
];

export const academiaPrograms = [
  {
    id: "FDP-201",
    title: "Faculty Development Program on Generative AI & LLM Systems",
    industryPartner: "Google Cloud India & IIT Delhi",
    duration: "2 Weeks (Online + Hands-on)",
    dates: "Oct 12 - Oct 24, 2026",
    seats: "45 / 60 Enrolled",
    stipendFund: "AICTE Sponsored",
    focus: "Modernizing semester curriculum to incorporate prompt engineering, vector databases, and ethical AI evaluation."
  },
  {
    id: "FDP-202",
    title: "Industry Immersion on Cloud-Native Microservices & Kubernetes",
    industryPartner: "Red Hat & Infosys",
    duration: "4 Weeks (Hybrid)",
    dates: "Nov 02 - Nov 30, 2026",
    seats: "32 / 40 Enrolled",
    stipendFund: "Industry Sponsored",
    focus: "Direct laboratory access to enterprise clusters; equips professors with production teaching assets."
  },
  {
    id: "RES-301",
    title: "Joint Research Call: Low-Bandwidth Edge Computing for Rural Healthcare",
    industryPartner: "Siemens Healthineers",
    funding: "₹18,50,000 Grant",
    deadline: "Nov 15, 2026",
    focus: "Collaborative patent generation and doctoral co-supervision with industrial principal investigators."
  }
];

export const institutionMetrics = {
  collegeName: "Delhi Technological University (DTU)",
  totalStudentsMapped: 3420,
  averageReadiness: 78,
  readinessChange: "+14% vs Previous Year",
  topDepartment: "Computer Science & Engineering (86%)",
  internshipPlacementRate: 84,
  departments: [
    { name: "Computer Science & Engg.", students: 840, readiness: 86, placement: 92, gap: "System Architecture" },
    { name: "Information Technology", students: 620, readiness: 84, placement: 88, gap: "Cloud Deployment" },
    { name: "Electronics & Communication", students: 710, readiness: 76, placement: 80, gap: "Embedded Software" },
    { name: "Mechanical Engineering", students: 650, readiness: 70, placement: 74, gap: "Industrial IoT & CAD" },
    { name: "Civil & Environmental", students: 600, readiness: 66, placement: 68, gap: "BIM & Python for GIS" }
  ],
  highDemandSkills: [
    { skill: "Artificial Intelligence & LLMs", demand: 94, campusCoverage: 62 },
    { skill: "Cloud Architecture (AWS/Azure)", demand: 91, campusCoverage: 70 },
    { skill: "Data Analytics & SQL", demand: 88, campusCoverage: 82 },
    { skill: "Cybersecurity & Identity", demand: 85, campusCoverage: 48 },
    { skill: "Full-Stack Web (React/Node)", demand: 82, campusCoverage: 88 }
  ]
};

export const adminStats = {
  pendingInstitutions: [
    { id: "INST-01", name: "Malaviya National Institute of Technology", state: "Rajasthan", date: "2026-09-08", status: "Pending Verification" },
    { id: "INST-02", name: "College of Engineering Pune (COEP)", state: "Maharashtra", date: "2026-09-09", status: "Pending Verification" }
  ],
  pendingRecruiters: [
    { id: "REC-01", company: "Ather Energy", contact: "hr@atherenergy.com", cin: "U34100KA2013PTC071398", date: "2026-09-07" },
    { id: "REC-02", company: "CRED Payments", contact: "talent@cred.club", cin: "U72900KA2018PTC111397", date: "2026-09-09" }
  ],
  moderationFlags: [
    { id: "MOD-01", title: "Unpaid Full-Time Role Flagged", company: "Stealth Startup", reason: "AI detected 45-hour work expectation without mandatory statutory stipend", actionNeeded: "Review & Reject" }
  ],
  auditLog: [
    { time: "10 mins ago", event: "New Institution Verified: National Institute of Design (NID)", admin: "Dr. K. Saxena (Ministry Liaison)" },
    { time: "42 mins ago", event: "Automated Skill Benchmark v2.4 synced with NSDC competency dictionary", admin: "System Engine" },
    { time: "2 hours ago", event: "Batch Opportunity Sync: 48 vacancies verified from 12 MNCs", admin: "Moderation Queue" }
  ]
};

export const companiesPreparationData = [
  {
    id: "tcs",
    name: "Tata Consultancy Services",
    shortName: "TCS",
    hindiName: "टीसीएस (टाटा कंसल्टेंसी सर्विसेज)",
    industry: "Information Technology & Digital Solutions",
    logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&auto=format&fit=crop&q=80",
    opportunitiesCount: 3,
    requirementSource: "Opportunity Description",
    roles: [
      {
        id: "software-dev",
        title: "Software Developer / Digital Engineer",
        titleHi: "सॉफ्टवेयर डेवलपर / डिजिटल इंजीनियर",
        alignmentScore: 76,
        readinessScore: 82,
        status: "Good Foundation",
        strengths: [
          { name: "Programming Fundamentals", readiness: 92 },
          { name: "React Development", readiness: 88 },
          { name: "Git & Version Control", readiness: 88 },
          { name: "Problem Solving", readiness: 78 }
        ],
        prioritySkills: [
          {
            priority: "HIGH",
            skill: "Advanced Data Structures & Algorithms",
            skillHi: "उन्नत डेटा संरचनाएं एवं एल्गोरिद्म",
            current: 78,
            target: 90,
            gap: 12,
            action: "Add to Roadmap",
            whyRecommended: "Critical for technical problem-solving assessments and standard algorithmic evaluations.",
            focusTopics: ["Graph Algorithms (BFS/DFS)", "Dynamic Programming", "Trees & Heaps", "Greedy Approaches"],
            studentStatus: "Developing (NPTEL certified, requires DP practice)",
            evidence: "Assessment Score: 78% • 2 Course Certifications Verified"
          },
          {
            priority: "HIGH",
            skill: "Backend Architecture & REST APIs",
            skillHi: "बैकएंड आर्किटेक्चर एवं एपीआई",
            current: 74,
            target: 88,
            gap: 14,
            action: "Start Plan",
            whyRecommended: "High frequency requirement in Digital enterprise banking and distributed services lab.",
            focusTopics: ["RESTful API Contract Design", "Redis Caching", "Database Indexing & Transactions", "Authentication"],
            studentStatus: "Proficient fundamentals, needs distributed caching evidence",
            evidence: "Capstone Microservices Project: Verified (84%)"
          },
          {
            priority: "MEDIUM",
            skill: "System Design & Scalability",
            skillHi: "सिस्टम डिज़ाइन एवं स्केलेबिलिटी",
            current: 68,
            target: 82,
            gap: 14,
            action: "Explore",
            whyRecommended: "Relevant for transition into digital grade-2 architecture roles.",
            focusTopics: ["Load Balancing Basics", "Horizontal Partitioning", "CAP Theorem", "Microservices Communication"],
            studentStatus: "Intermediate concept understanding",
            evidence: "Self-Assessment: 68% • Academic Coursework Passed"
          },
          {
            priority: "MEDIUM",
            skill: "Docker & Container Deployment",
            skillHi: "डॉकर एवं कंटेनर परिनियोजन",
            current: 55,
            target: 75,
            gap: 20,
            action: "Learn",
            whyRecommended: "Modern cloud-native deployment standard across TCS client project pipelines.",
            focusTopics: ["Dockerfile Optimization", "Container Networking", "Multi-stage Builds", "Basic CI/CD Orchestration"],
            studentStatus: "Beginner level exposure",
            evidence: "Practical lab assessment pending"
          }
        ]
      },
      {
        id: "cloud-engineer",
        title: "Cloud Support & DevOps Associate",
        titleHi: "क्लाउड सपोर्ट एवं डेवऑप्स एसोसिएट",
        alignmentScore: 70,
        readinessScore: 82,
        status: "Moderate Foundation",
        strengths: [
          { name: "Linux Administration", readiness: 80 },
          { name: "Git & Version Control", readiness: 88 },
          { name: "AWS Fundamentals", readiness: 72 }
        ],
        prioritySkills: [
          {
            priority: "HIGH",
            skill: "Docker & Containerization",
            skillHi: "डॉकर एवं कंटेनराइजेशन",
            current: 55,
            target: 80,
            gap: 25,
            action: "Start Plan",
            whyRecommended: "Essential prerequisite for cloud migration projects.",
            focusTopics: ["Container Runtime", "Volume Management", "Compose Specs"],
            studentStatus: "Beginner",
            evidence: "AWS Cloud Practitioner Verified"
          },
          {
            priority: "HIGH",
            skill: "CI/CD Pipeline Automation",
            skillHi: "सीआई/सीडी पाइपलाइन ऑटोमेशन",
            current: 58,
            target: 82,
            gap: 24,
            action: "Add to Roadmap",
            whyRecommended: "Standard deployment expectation across enterprise delivery pods.",
            focusTopics: ["GitHub Actions", "Automated Testing Integration", "Artifact Storage"],
            studentStatus: "Developing",
            evidence: "GitHub Profile Analysis"
          }
        ]
      }
    ]
  },
  {
    id: "infosys",
    name: "Infosys",
    shortName: "Infosys",
    hindiName: "इन्फोसिस",
    industry: "Next-Generation Digital Services & Consulting",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&auto=format&fit=crop&q=80",
    opportunitiesCount: 2,
    requirementSource: "Opportunity Description",
    roles: [
      {
        id: "software-dev",
        title: "Specialist Programmer / Software Engineer",
        titleHi: "स्पेशलिस्ट प्रोग्रामर / सॉफ्टवेयर इंजीनियर",
        alignmentScore: 78,
        readinessScore: 82,
        status: "Good Foundation",
        strengths: [
          { name: "Object Oriented Design", readiness: 88 },
          { name: "JavaScript & Modern Web", readiness: 90 },
          { name: "Database Design (SQL)", readiness: 75 },
          { name: "Version Control", readiness: 88 }
        ],
        prioritySkills: [
          {
            priority: "HIGH",
            skill: "Complex Algorithm Optimization",
            skillHi: "जटिल एल्गोरिद्म अनुकूलन",
            current: 78,
            target: 92,
            gap: 14,
            action: "Add to Roadmap",
            whyRecommended: "Key differentiator in HackWithInfy and Specialist Programmer selection paths.",
            focusTopics: ["Segment Trees", "Shortest Path Algorithms", "Bit Manipulation"],
            studentStatus: "Developing",
            evidence: "Assessment Score: 78%"
          },
          {
            priority: "HIGH",
            skill: "Cloud Application Architecture",
            skillHi: "क्लाउड एप्लीकेशन आर्किटेक्चर",
            current: 68,
            target: 84,
            gap: 16,
            action: "Start Plan",
            whyRecommended: "Infosys Cobalt cloud ecosystem competency focus.",
            focusTopics: ["Serverless Functions", "Microservices Security", "API Gateways"],
            studentStatus: "Developing",
            evidence: "AWS Credential Synced"
          }
        ]
      }
    ]
  },
  {
    id: "microsoft",
    name: "Microsoft India",
    shortName: "Microsoft",
    hindiName: "माइक्रोसॉफ्ट इंडिया",
    industry: "Cloud, AI & Enterprise Software",
    logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&auto=format&fit=crop&q=80",
    opportunitiesCount: 1,
    requirementSource: "Demonstration Requirement Profile",
    roles: [
      {
        id: "software-dev",
        title: "Software Engineering Intern",
        titleHi: "सॉफ्टवेयर इंजीनियरिंग इंटर्न",
        alignmentScore: 74,
        readinessScore: 82,
        status: "Competitive Preparation Recommended",
        strengths: [
          { name: "Data Structures Foundations", readiness: 85 },
          { name: "Web Frameworks (React)", readiness: 92 },
          { name: "Clean Code & Collaboration", readiness: 88 }
        ],
        prioritySkills: [
          {
            priority: "HIGH",
            skill: "Hard Algorithmic Problem Solving",
            skillHi: "कठिन एल्गोरिद्मिक समस्या समाधान",
            current: 78,
            target: 95,
            gap: 17,
            action: "Add to Roadmap",
            whyRecommended: "Standard benchmark for Tier-1 software engineering technical screenings.",
            focusTopics: ["Dynamic Programming on Trees", "Graph Theory & Network Flow", "Advanced Time/Space Optimization"],
            studentStatus: "Developing",
            evidence: "NPTEL & College Coding Rank Top 15%"
          },
          {
            priority: "HIGH",
            skill: "Low-Level Object Oriented Design",
            skillHi: "ऑब्जेक्ट-ओरिएंटेड सिस्टम डिज़ाइन",
            current: 72,
            target: 88,
            gap: 16,
            action: "Start Plan",
            whyRecommended: "Frequently evaluated in engineering design rounds.",
            focusTopics: ["SOLID Principles", "Design Patterns (Factory, Strategy, Observer)", "Concurrency & Threading"],
            studentStatus: "Proficient",
            evidence: "SetuConnect Architecture Review"
          }
        ]
      }
    ]
  },
  {
    id: "google",
    name: "Google India",
    shortName: "Google",
    hindiName: "गूगल इंडिया",
    industry: "Search, Cloud, AI & Distributed Systems",
    logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=100&auto=format&fit=crop&q=80",
    opportunitiesCount: 1,
    requirementSource: "Demonstration Requirement Profile",
    roles: [
      {
        id: "software-dev",
        title: "Software Engineer - University Graduate",
        titleHi: "सॉफ्टवेयर इंजीनियर - विश्वविद्यालय स्नातक",
        alignmentScore: 72,
        readinessScore: 82,
        status: "Rigorous Preparation Focus",
        strengths: [
          { name: "Programming Foundations", readiness: 92 },
          { name: "Code Modularity & Readability", readiness: 86 },
          { name: "REST Protocols", readiness: 86 }
        ],
        prioritySkills: [
          {
            priority: "HIGH",
            skill: "Algorithms & Complexity Proofs",
            skillHi: "एल्गोरिद्म एवं जटिलता विश्लेषण",
            current: 78,
            target: 96,
            gap: 18,
            action: "Add to Roadmap",
            whyRecommended: "Deep algorithmic rigor expected in technical interviews.",
            focusTopics: ["Mathematical Reasoning", "Graph Disjoint Sets", "Divide & Conquer", "Dynamic Programming"],
            studentStatus: "Developing",
            evidence: "Problem Solving Score: 78%"
          },
          {
            priority: "HIGH",
            skill: "Distributed Systems Fundamentals",
            skillHi: "वितरित प्रणाली मूलभूत बातें",
            current: 66,
            target: 85,
            gap: 19,
            action: "Explore",
            whyRecommended: "Valuable for scalable infrastructure roles.",
            focusTopics: ["Consistency Models", "MapReduce / Batch Pipelines", "Replication & Consensus Basics"],
            studentStatus: "Intermediate",
            evidence: "Self-study module"
          }
        ]
      }
    ]
  },
  {
    id: "accenture",
    name: "Accenture",
    shortName: "Accenture",
    hindiName: "एक्सेंचर",
    industry: "Strategy & Technology Consulting",
    logo: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=100&auto=format&fit=crop&q=80",
    opportunitiesCount: 4,
    requirementSource: "Opportunity Description",
    roles: [
      {
        id: "software-dev",
        title: "Associate Software Engineer",
        titleHi: "एसोसिएट सॉफ्टवेयर इंजीनियर",
        alignmentScore: 85,
        readinessScore: 82,
        status: "High Alignment",
        strengths: [
          { name: "Full-Stack Web (React/Node)", readiness: 90 },
          { name: "Agile Collaboration & Git", readiness: 88 },
          { name: "Communication & Delivery", readiness: 80 }
        ],
        prioritySkills: [
          {
            priority: "HIGH",
            skill: "Automated Unit & Integration Testing",
            skillHi: "स्वचालित परीक्षण एवं गुणवत्ता आश्वासन",
            current: 65,
            target: 82,
            gap: 17,
            action: "Start Plan",
            whyRecommended: "Emphasis on test-driven development in enterprise client deliveries.",
            focusTopics: ["Jest & React Testing Library", "API Mocking with MSW", "End-to-End Cypress Basics"],
            studentStatus: "Developing",
            evidence: "Project repo review"
          },
          {
            priority: "MEDIUM",
            skill: "Cloud Deployment (AWS/Azure)",
            skillHi: "क्लाउड डिप्लॉयमेंट",
            current: 72,
            target: 80,
            gap: 8,
            action: "Learn",
            whyRecommended: "Standard delivery pipeline environment.",
            focusTopics: ["App Service Hosting", "Database Connections", "Security Secrets Management"],
            studentStatus: "Proficient",
            evidence: "AWS Practitioner Credential"
          }
        ]
      }
    ]
  },
  {
    id: "razorpay",
    name: "Razorpay Payments",
    shortName: "Razorpay",
    hindiName: "रेज़रपे पेमेंट्स",
    industry: "Fintech & Developer Payments Infrastructure",
    logo: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=100&auto=format&fit=crop&q=80",
    opportunitiesCount: 1,
    requirementSource: "Opportunity Description",
    roles: [
      {
        id: "software-dev",
        title: "Frontend Engineering Intern",
        titleHi: "फ्रंटएंड इंजीनियरिंग इंटर्न",
        alignmentScore: 90,
        readinessScore: 82,
        status: "Excellent Foundation",
        strengths: [
          { name: "React.js & State Management", readiness: 92 },
          { name: "Modern JavaScript (ES6+)", readiness: 90 },
          { name: "REST API Integration", readiness: 86 },
          { name: "Git & Pull Request Workflows", readiness: 88 }
        ],
        prioritySkills: [
          {
            priority: "HIGH",
            skill: "Web Performance & Core Web Vitals",
            skillHi: "वेब प्रदर्शन एवं कोर वेब वाइटल्स",
            current: 70,
            target: 88,
            gap: 18,
            action: "Start Plan",
            whyRecommended: "Critical for checkout UI speed and high-conversion payment flows.",
            focusTopics: ["Bundle Splitting & Lazy Loading", "Lighthouse Metric Tuning", "DOM Render Optimization"],
            studentStatus: "Developing",
            evidence: "E-Commerce project code analysis"
          },
          {
            priority: "HIGH",
            skill: "TypeScript Strict Mode",
            skillHi: "टाइपस्क्रिप्ट स्ट्रिक्ट मोड",
            current: 72,
            target: 86,
            gap: 14,
            action: "Add to Roadmap",
            whyRecommended: "Standard codebase language across all Razorpay web experiences.",
            focusTopics: ["Generics & Discriminated Unions", "API Response Typing", "Type-safe State Stores"],
            studentStatus: "Intermediate",
            evidence: "Self-assessment"
          }
        ]
      }
    ]
  }
];

