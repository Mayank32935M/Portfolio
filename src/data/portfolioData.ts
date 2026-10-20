import type { KeyItem, ProjectItem, TechCategory, TimelineMilestone } from '../types';

export const PERSONAL_INFO = {
  name: 'Mayank Dabas',
  callsign: 'mayank@github',
  location: 'Delhi, India',
  role: 'AI/ML Student & Developer',
  institution: 'USAR, GGSIPU (University School of Automation and Robotics)',
  degree: 'Dual-Degree (B.Tech + M.Tech) in AI & ML',
  cohort: '2026 – 2030 (First Year)',
  tagline: 'Bridging the fundamental laws of physics and theoretical sciences with the digital logic of artificial intelligence.',
  quote: 'Consistency compounds. Great ideas are only as good as one\'s ability to explain them.',
  status: 'Still a work in progress ...',
  focus: 'Build • Learn • Collaborate',
  email: 'montidabas6@gmail.com',
  links: {
    github: 'https://github.com/Mayank32935M',
    linkedin: 'https://linkedin.com/in/Mayank32935M',
    linkedinAlt: 'https://www.linkedin.com/in/mayank-dabas-64131b2ba',
    instagram: 'https://instagram.com/Mayank32935M',
    reddit: 'https://reddit.com/user/Mayank32935M'
  }
};

export const KEYBOARD_KEYS: KeyItem[] = [
  // Row 1: P - O - R - T
  {
    id: 'P',
    letter: 'P',
    label: 'Projects',
    sublabel: 'Ideas → Code',
    row: 1,
    colorType: 'terracotta',
    description: 'Verified systems, frameworks, and tools engineered or co-built across hackathons and open-source.'
  },
  {
    id: 'O1',
    letter: 'O',
    label: 'Overview',
    sublabel: 'Field Notes',
    row: 1,
    colorType: 'olive',
    description: 'Personal introduction, core interests, and background as an AI & ML dual-degree student.'
  },
  {
    id: 'R',
    letter: 'R',
    label: 'Resume',
    sublabel: 'Milestones',
    row: 1,
    colorType: 'brass',
    description: 'Academic background at GGSIPU, teaching experience at Kalyan Classes, and hackathon records.'
  },
  {
    id: 'T',
    letter: 'T',
    label: 'Tech',
    sublabel: 'Toolbox',
    row: 1,
    colorType: 'parchment',
    description: 'Verified technical stack spanning Python backends, agentic loops, frontend, and systems.'
  },
  // Row 2: F - O - L - I - O
  {
    id: 'F',
    letter: 'F',
    label: 'Freelance & Creative',
    sublabel: 'Visual Craft',
    row: 2,
    colorType: 'brass',
    description: 'Video production, AI generative workflows, design, and curriculum development.'
  },
  {
    id: 'O2',
    letter: 'O',
    label: 'Open Source',
    sublabel: 'Collaborations',
    row: 2,
    colorType: 'terracotta',
    description: 'Public contributions, hackathon teamwork, and multi-developer systems like Stivium.'
  },
  {
    id: 'L',
    letter: 'L',
    label: 'Languages',
    sublabel: 'Code & Spoken',
    row: 2,
    colorType: 'parchment',
    description: 'Technical languages (Python, SQL, C, JS/TS) and spoken languages (English, Hindi).'
  },
  {
    id: 'I',
    letter: 'I',
    label: 'Interests',
    sublabel: 'Beyond Code',
    row: 2,
    colorType: 'olive',
    description: 'Theoretical physics, discrete mathematics, psychological narrative design, and video.'
  },
  {
    id: 'O3',
    letter: 'O',
    label: 'Ongoing',
    sublabel: 'Active Lab',
    row: 2,
    colorType: 'ink',
    description: 'In-progress experiments: Stivium IDE in Rust/Tauri, LeetCode algorithms, and MCP tools.'
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'forensic-x',
    name: 'FORENSIC-X',
    subtitle: 'Verifiable Digital Forensics & Incident Reconstruction Framework',
    category: 'AI & ML',
    role: 'Creator & Lead Developer',
    problem:
      'Digital forensics investigations frequently suffer from fragmented audit trails, questionable evidence provenance, and complex relationship tracking that fails courtroom evidentiary standards.',
    implemented: [
      'Cryptographic chain-of-custody using an immutable SHA-256 ledger structure',
      'Interactive Evidence Matrix and Cases Catalog for cataloging digital artifacts',
      'Visual Incident Timeline Reconstruction engine correlating forensic event timestamps',
      'Entity relationship graph visualization mapping actors, endpoints, and data transfers',
      'FastAPI backend service with 19 passing test suites and epistemic trust guarantees'
    ],
    planned: [
      'Multi-modal automated anomaly correlation across memory dumps and PCAP files',
      'Court-admissible tamper-evident PDF export with cryptographic verification seals'
    ],
    techStack: ['Python 3.12+', 'FastAPI', 'React 19', 'TypeScript', 'Tailwind CSS', 'SHA-256 Ledger'],
    repoUrl: 'https://github.com/Mayank32935M/FORENSIC-X',
    status: 'Prototype',
    badge: 'SUTRAM 2026',
    featuredImage: '/assets/projects/forensic_x_dashboard.png',
    galleryImages: [
      { url: '/assets/projects/forensic_x_dashboard.png', caption: 'FORENSIC-X Operational Dashboard' },
      { url: '/assets/projects/forensic_x_overview.png', caption: 'Detailed Case Dossier & Custody Ledger' },
      { url: '/assets/projects/forensic_x_timeline.png', caption: 'Incident Timeline Reconstruction View' }
    ],
    accentColor: '#B59A5A'
  },
  {
    id: 'suraksha-sense',
    name: 'Suraksha Sense',
    subtitle: 'AI-Powered Life-Event Insurance Gap Analyzer & Trust Verification',
    category: 'AI & ML',
    role: 'Creator & Developer',
    problem:
      'When major life milestones happen (marriage, new child, purchasing a vehicle), hidden financial risks emerge unnoticed. Consumers struggle to identify coverage gaps and often distrust aggressive broker recommendations.',
    implemented: [
      'Life-event vulnerability detection identifying emerging insurance blind spots',
      'Trust proof scoring verifying policy authenticity before purchasing decisions',
      'Multi-lingual explanation capabilities leveraging Gemini API and Sarvam AI API',
      'Full-stack architecture with React (Vite) frontend and Node/Express backend'
    ],
    planned: [
      'Automated historical policy claim data ingestion',
      'Direct IRDAI verified registry verification bridge'
    ],
    techStack: ['React (Vite)', 'Node.js', 'Express', 'Gemini API', 'Sarvam AI API', 'Tailwind CSS'],
    repoUrl: 'https://github.com/Mayank32935M/Suraksha-Sense',
    status: 'Hackathon Project',
    badge: 'Paytm Build for India',
    featuredImage: '/assets/projects/suraksha_architecture.png',
    galleryImages: [
      { url: '/assets/projects/suraksha_architecture.png', caption: 'Suraksha Sense End-to-End System Architecture' },
      { url: '/assets/projects/suraksha_workflow.png', caption: 'User Decision Workflow & Gap Analysis' }
    ],
    accentColor: '#A6533D'
  },
  {
    id: 'stivium',
    name: 'Stivium',
    subtitle: 'Bespoke Desktop Code Editor & IDE Engineered from Scratch',
    category: 'Developer Tools',
    role: 'Co-Creator & Frontend Architect',
    collaboration: 'Built in collaboration with Aditya Bhatnagar',
    problem:
      'Mainstream developer environments are often heavyweight Electron shells with steep memory consumption. Stivium investigates how a lean native desktop application can achieve instantaneous boot times and tactile developer ergonomics.',
    implemented: [
      'Desktop window shell powered by Tauri and compiled Rust backends',
      'Modular code editing surface built with TypeScript and custom styling system',
      'Integrated boot sequence, custom window chrome, and workspace pane management',
      'Active open-source development and continuous feature integration'
    ],
    planned: [
      'Full Language Server Protocol (LSP) client support',
      'Agentic sidecar for localized code generation and diff visualization'
    ],
    techStack: ['Rust', 'Tauri', 'TypeScript', 'Tailwind CSS', 'Vite'],
    repoUrl: 'https://github.com/adityabhatnagar1/stivium',
    status: 'In Development',
    badge: 'Co-built in Public',
    featuredImage: '/assets/projects/stivium_logo.svg',
    accentColor: '#777B50'
  },
  {
    id: 'redzone',
    name: 'REDZONE',
    subtitle: 'Risk-Aware Relocation Engine for Assam Flood & Erosion Scenarios',
    category: 'Hackathons & Systems',
    role: 'Frontend Design, Impact Strategy & Presentation Pitch',
    collaboration: 'Team Project (neptn-ui for SIH 2026)',
    problem:
      'Existing disaster management systems show where water is currently rising. REDZONE answers the mission-critical next question for disaster authorities (ASDMA & NDRF): Where should displaced populations be safely relocated?',
    implemented: [
      'Decision-support engine tailored to Majuli, Dhemaji, and Cachar districts',
      'Multi-layer erosion intelligence maps and seismic hazard risk scoring',
      'Safe zone suitability scoring factoring road elevation, shelters, and drinking water availability',
      'Interactive GIS mapping interface with responsive incident command consoles'
    ],
    planned: [
      'Real-time rainfall radar feed integration via satellite telemetry',
      'Offline emergency dispatch packet generator'
    ],
    techStack: ['Python', 'Leaflet / GIS Mapping', 'React', 'Vite', 'Docker'],
    repoUrl: 'https://github.com/neptn-ui/Redzone',
    status: 'Hackathon Project',
    badge: 'SIH 2026',
    featuredImage: '/assets/projects/redzone_erosion.png',
    galleryImages: [
      { url: '/assets/projects/redzone_erosion.png', caption: 'Assam Flood Risk & Erosion Intelligence View' },
      { url: '/assets/projects/redzone_seismic.png', caption: 'Regional Seismic Risk and Soil Susceptibility Analysis' }
    ],
    accentColor: '#A6533D'
  },
  {
    id: 'eventtwin',
    name: 'EventTwin',
    subtitle: 'Event Digital Twin & Urban Resource Optimization Platform',
    category: 'Hackathons & Systems',
    role: 'UI Selection, Visual Architecture & Impact Strategy',
    collaboration: 'Team Project (neptn-ui for SIH 2026 Internal Round)',
    problem:
      'Large campus festivals and cultural summits trigger sudden bottlenecks in pedestrian flow, sanitization, and power grids. Facilities teams usually respond reactively when breakdowns have already occurred.',
    implemented: [
      'Digital twin simulation framework modeling crowd flow dynamics during events',
      'Zone-map intelligence visualizing bottleneck risks across campus arteries',
      'Real-time simulation tested on Anugoonj campus festival dataset',
      'Streamlit interactive dashboard backed by FastAPI service and SQLite state'
    ],
    planned: [
      'Edge sensor telemetry ingestion for automatic crowd-density estimation',
      'Automated dispatch alert routing to campus facilities teams'
    ],
    techStack: ['Python', 'Streamlit', 'FastAPI', 'SQLite', 'Data Visualization'],
    repoUrl: 'https://github.com/neptn-ui/Eventtwin',
    status: 'Hackathon Project',
    badge: 'SIH 2026 Internal',
    featuredImage: '/assets/projects/eventtwin_zonemap.png',
    galleryImages: [
      { url: '/assets/projects/eventtwin_zonemap.png', caption: 'EventTwin Campus Zone Density Simulation' }
    ],
    accentColor: '#777B50'
  },
  {
    id: 'null-game',
    name: 'NULL',
    subtitle: 'A Browser-Based Psychological Thriller Game',
    category: 'Creative & Games',
    role: 'Creator & Game Systems Developer',
    problem:
      'Exploring player moral agency, tension dynamics, and psychological narrative pacing through interactive web interfaces without bloated game engines.',
    implemented: [
      'Bespoke lightweight browser game engine built with vanilla web technologies',
      'Atmospheric narrative engine featuring investigative puzzles and branching choices',
      'Dynamic typography and state tracking based on user investigative decisions'
    ],
    planned: [
      'Multi-chapter investigative arc and atmospheric ambient audio synthesis',
      'Save state persistence via browser storage'
    ],
    techStack: ['JavaScript', 'HTML5', 'CSS3', 'Interactive Fiction'],
    repoUrl: 'https://github.com/Mayank32935M/null-game',
    status: 'In Development',
    badge: 'Original Game',
    accentColor: '#E8DFC9'
  },
  {
    id: 'verivision',
    name: 'VeriVision',
    subtitle: 'Trust & Integrity Inspector for Computer-Vision AI Pipelines',
    category: 'AI & ML',
    role: 'Team Member & Contributor',
    collaboration: 'Project by Kartikeya and Team',
    problem:
      'Contributor datasets can be poisoned with subtle backdoors, and downstream inference outputs can be modified or replayed, compromising assurance in critical vision pipelines.',
    implemented: [
      'Offline-first assurance platform evaluating datasets, models, and distribution drift',
      'Tri-state evaluation output (ACCEPT / REVIEW / QUARANTINE) backed by inspectable metrics'
    ],
    techStack: ['Python', 'OpenCV', 'Scikit-learn', 'Docker'],
    repoUrl: 'https://github.com/kartikeya527/verivision-integrity-assurance',
    status: 'Active Project',
    badge: 'Assurance Framework',
    accentColor: '#B59A5A'
  }
];

export const TECH_CATEGORIES: TechCategory[] = [
  {
    title: 'Core Programming & Foundations',
    iconName: 'code',
    items: [
      { name: 'Python', level: 'Primary Language', note: 'Data structures, backend services & daily LeetCode practice' },
      { name: 'SQL', level: 'Working Knowledge', note: 'Relational data modeling, schema design & queries' },
      { name: 'C', level: 'Actively Learning', note: 'Systems fundamentals, pointers & memory management' },
      { name: 'Java', level: 'Learning', note: 'Object-oriented programming concepts & algorithmic design' },
      { name: 'JavaScript', level: 'Proficient', note: 'Modern ES6+, DOM manipulation & interactive apps' },
      { name: 'TypeScript', level: 'Proficient', note: 'Type-safe frontend development & interfaces' },
      { name: 'Rust', level: 'Exploring', note: 'Investigating memory safety & native performance via Stivium' }
    ]
  },
  {
    title: 'AI, LLMs & Backend Engineering',
    iconName: 'bot',
    items: [
      { name: 'Agentic AI Architectures', level: 'Core Focus', note: 'ReAct loops, orchestrator/subagent setups' },
      { name: 'Gemini API & Claude API', level: 'Proficient', note: 'Prompt engineering, structured function calling, evaluation' },
      { name: 'FastAPI', level: 'Proficient', note: 'High-performance asynchronous RESTful APIs' },
      { name: 'Model Context Protocol (MCP)', level: 'Active', note: 'Extending tool schemas & AI assistant capabilities' },
      { name: 'n8n Workflow Automation', level: 'Proficient', note: 'Connecting AI triggers with webhooks & databases' },
      { name: 'Node.js & Express', level: 'Working Knowledge', note: 'Lightweight backend microservices' }
    ]
  },
  {
    title: 'Frontend & Desktop Frameworks',
    iconName: 'layout',
    items: [
      { name: 'React (18 / 19)', level: 'Proficient', note: 'Component architectures, state management, hooks' },
      { name: 'Tailwind CSS', level: 'Proficient', note: 'Rapid semantic design implementation' },
      { name: 'Tauri', level: 'Active Exploration', note: 'Compiling lightweight desktop apps with web frontends' },
      { name: 'Vite', level: 'Proficient', note: 'Modern tooling & rapid build pipeline' },
      { name: 'HTML5 & CSS3', level: 'Proficient', note: 'Semantic markup, CSS Grid, Flexbox, custom variables' },
      { name: 'Streamlit', level: 'Working Knowledge', note: 'Rapid analytical dashboards & prototype apps' }
    ]
  },
  {
    title: 'Developer Tools & Workstation',
    iconName: 'terminal',
    items: [
      { name: 'Git & GitHub', level: 'Daily Practice', note: 'Version control, branch management, shipping in public' },
      { name: 'VS Code & Antigravity IDE', level: 'Daily Tool', note: 'Primary code editor and agentic workflows' },
      { name: 'Kali Linux', level: 'Comfortable', note: 'Security tooling, packet inspection, network auditing' },
      { name: 'PowerShell', level: 'Familiar', note: 'Windows environment automation & scripting' },
      { name: 'Vercel & Google Cloud', level: 'Deployment', note: 'Hosting modern web applications & services' },
      { name: 'Docker', level: 'Basics', note: 'Containerization and reproducible environments' }
    ]
  },
  {
    title: 'Visual Craft & Media Production',
    iconName: 'film',
    items: [
      { name: 'DaVinci Resolve', level: 'Proficient', note: 'Color grading, multi-track timeline editing & post-production' },
      { name: 'CapCut', level: 'Proficient', note: 'High-velocity short-form visual storytelling' },
      { name: 'AI Video Engines', level: 'Workflow', note: 'Exploring Kling, Higgsfield, and multimodal video generation' },
      { name: 'Canva', level: 'Proficient', note: 'Editorial design, presentations & graphic assets' }
    ]
  }
];

export const MILESTONES: TimelineMilestone[] = [
  {
    period: '2026 – 2030 (Present)',
    title: 'B.Tech + M.Tech Dual Degree in AI & ML',
    organization: 'USAR, Guru Gobind Singh Indraprastha University (GGSIPU)',
    location: 'Delhi, India',
    description:
      'Pursuing an intensive 5-year integrated program focusing on artificial intelligence, machine learning, robotics fundamentals, discrete mathematics, and software engineering.',
    highlights: [
      'Dual-degree cohort focused on practical systems engineering',
      'Bridging theoretical physics and math with deep learning architectures',
      'Daily commitment to algorithmic problem solving on LeetCode'
    ],
    verifiedTag: 'Academic Program'
  },
  {
    period: '2026',
    title: 'Hackathon Contributor & Project Creator',
    organization: 'Paytm Build for India, SIH 2026, SUTRAM 2026',
    location: 'Delhi / National',
    description:
      'Engineered and pitched real-world technology solutions across competitive national and university hackathon tracks.',
    highlights: [
      'Developed FORENSIC-X for verifiable digital forensics (SUTRAM 2026)',
      'Built Suraksha Sense for Paytm Build for India AI Hackathon (Track 2)',
      'Contributed frontend design and pitch strategy to REDZONE (SIH 2026)',
      'Designed UI and impact strategy for EventTwin campus digital twin (SIH Internal)'
    ],
    verifiedTag: 'Hackathons'
  },
  {
    period: 'Previous Experience',
    title: 'CBSE English Curriculum Creator & Teacher',
    organization: 'Kalyan Classes',
    location: 'Delhi, India',
    description:
      'Designed and delivered comprehensive English language and literature curriculum for secondary students (Class 6 to 10).',
    highlights: [
      'Developed student-centric lesson plans emphasizing reading comprehension and articulation',
      'Mentored students on persuasive speech and structured analytical writing',
      'Honed personal philosophy: "Great ideas are only as good as one\'s ability to explain them"'
    ],
    verifiedTag: 'Teaching & Mentorship'
  },
  {
    period: 'Ongoing',
    title: 'Freelance Digital & Visual Production',
    organization: 'Independent Engagements',
    location: 'Remote / Delhi',
    description:
      'Delivered web pages and video editing workflows for local business clients and creator accounts.',
    highlights: [
      'Created short-form video edits and marketing clips using DaVinci Resolve and CapCut',
      'Built web presences for local establishments seeking digital visibility'
    ],
    verifiedTag: 'Freelance'
  }
];

export const VERIFIED_FACTS = {
  education: 'B.Tech + M.Tech (AI & ML), University School of Automation and Robotics, GGSIPU, Delhi (2026–2030)',
  location: 'Delhi, India',
  workStatus: 'Student & Open for AI collaborations, freelance development, and developer tool projects',
  email: 'montidabas6@gmail.com',
  github: 'https://github.com/Mayank32935M',
  linkedin: 'https://linkedin.com/in/Mayank32935M'
};
