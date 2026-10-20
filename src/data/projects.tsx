import React, { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

export type Project = {
  id: string;
  title: string;
  category: string;
  src: string;
  screenshots: string[];
  skills: {
    frontend?: { name: string; icon: string }[];
    backend?: { name: string; icon: string }[];
  };
  content: ReactNode;
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    id: "forensic-x",
    title: "FORENSIC-X — Verifiable Forensics Platform",
    category: "AI / Cyber Forensics",
    src: "/assets/projects/forensic_x_dashboard.png",
    screenshots: [
      "/assets/projects/forensic_x_dashboard.png",
      "/assets/projects/forensic_x_overview.png",
      "/assets/projects/forensic_x_timeline.png",
    ],
    skills: {
      frontend: [
        { name: "React", icon: "/assets/keyboard/logos/react.svg" },
        { name: "TypeScript", icon: "/assets/keyboard/logos/ts.svg" },
        { name: "Tailwind CSS", icon: "/assets/keyboard/logos/tailwind.svg" },
      ],
      backend: [
        { name: "Python", icon: "/assets/keyboard/logos/python.svg" },
        { name: "FastAPI", icon: "/assets/keyboard/logos/python.svg" },
        { name: "Docker", icon: "/assets/keyboard/logos/docker.svg" },
      ],
    },
    github: "https://github.com/Mayank32935M/FORENSIC-X",
    live: "https://github.com/Mayank32935M/FORENSIC-X",
    content: (
      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <div className="p-4 rounded-xl border border-primary/20 bg-primary/5 text-foreground text-sm font-medium">
          🏆 National Finalist at SUTRAM 2026 (National Forensic Sciences University, NFSU)
        </div>
        <p>
          <strong className="text-foreground">FORENSIC-X</strong> is an end-to-end digital forensics investigation and timeline reconstruction workstation designed for law enforcement analysts and security auditors.
        </p>
        <h4 className="text-foreground font-semibold text-lg">Key Architectural Capabilities:</h4>
        <ul className="list-disc list-inside space-y-2">
          <li>Cryptographically signed SHA-256 evidence ingestion pipeline ensuring verifiable chain-of-custody compliance.</li>
          <li>Automated timeline reconstruction correlating multi-source file system artifacts, memory dumps, and network logs.</li>
          <li>Interactive timeline visualization with dynamic anomaly clustering and suspect correlation graphs.</li>
        </ul>
        <div className="pt-2">
          <a
            href="https://github.com/Mayank32935M/FORENSIC-X"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            Explore Source Code & Documentation <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    ),
  },
  {
    id: "suraksha-sense",
    title: "Suraksha Sense — AI Surveillance Engine",
    category: "Computer Vision / AI",
    src: "/assets/projects/suraksha_architecture.png",
    screenshots: [
      "/assets/projects/suraksha_architecture.png",
      "/assets/projects/suraksha_workflow.png",
    ],
    skills: {
      frontend: [
        { name: "React", icon: "/assets/keyboard/logos/react.svg" },
        { name: "Tailwind CSS", icon: "/assets/keyboard/logos/tailwind.svg" },
      ],
      backend: [
        { name: "Python", icon: "/assets/keyboard/logos/python.svg" },
        { name: "OpenCV", icon: "/assets/keyboard/logos/python.svg" },
        { name: "Node.js", icon: "/assets/keyboard/logos/nodejs.svg" },
      ],
    },
    github: "https://github.com/Mayank32935M/Suraksha-Sense",
    live: "https://github.com/Mayank32935M/Suraksha-Sense",
    content: (
      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <div className="p-4 rounded-xl border border-primary/20 bg-primary/5 text-foreground text-sm font-medium">
          🛡️ Finalist at Paytm Build for India Hackathon
        </div>
        <p>
          <strong className="text-foreground">Suraksha Sense</strong> is an automated edge video analytics platform that detects safety violations, security intrusions, and emergency events in real time.
        </p>
        <h4 className="text-foreground font-semibold text-lg">Key Technical Highlights:</h4>
        <ul className="list-disc list-inside space-y-2">
          <li>Lightweight neural inference pipeline optimized for edge surveillance cameras and low-latency stream analysis.</li>
          <li>Multi-tier notification dispatch sending instant telemetry to emergency responder dashboards.</li>
          <li>Modular architecture with decoupled stream decoders and event rule engines.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "stivium-ide",
    title: "Stivium IDE — High-Performance Native IDE",
    category: "Systems / Rust & Tauri",
    src: "/assets/projects/stivium_logo.svg",
    screenshots: [
      "/assets/projects/stivium_logo.svg",
    ],
    skills: {
      frontend: [
        { name: "TypeScript", icon: "/assets/keyboard/logos/ts.svg" },
        { name: "React", icon: "/assets/keyboard/logos/react.svg" },
        { name: "Tailwind CSS", icon: "/assets/keyboard/logos/tailwind.svg" },
      ],
      backend: [
        { name: "Rust", icon: "/assets/keyboard/logos/linux.svg" },
        { name: "Tauri", icon: "/assets/keyboard/logos/ts.svg" },
      ],
    },
    github: "https://github.com/Mayank32935M/Stivium",
    live: "https://github.com/Mayank32935M/Stivium",
    content: (
      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <div className="p-4 rounded-xl border border-primary/20 bg-primary/5 text-foreground text-sm font-medium">
          ⚙️ Systems Engineering Project (Collaborative development with Aditya Bhatnagar)
        </div>
        <p>
          <strong className="text-foreground">Stivium IDE</strong> is an experimental, memory-efficient code editor engineered with a native Rust core and modern Webview frontend via Tauri.
        </p>
        <h4 className="text-foreground font-semibold text-lg">Engineering Focus:</h4>
        <ul className="list-disc list-inside space-y-2">
          <li>Blazing fast file I/O operations and syntax tokenization powered by Rust memory safety.</li>
          <li>Ultra-low memory footprint (&lt; 60MB RAM usage at startup compared to 400MB+ in typical Electron editors).</li>
          <li>Modular plugin architecture and customized editor theme engine.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "redzone",
    title: "REDZONE — Hazard & Seismic Predictor",
    category: "AI / Geophysics",
    src: "/assets/projects/redzone_seismic.png",
    screenshots: [
      "/assets/projects/redzone_seismic.png",
      "/assets/projects/redzone_erosion.png",
    ],
    skills: {
      frontend: [
        { name: "React", icon: "/assets/keyboard/logos/react.svg" },
        { name: "Leaflet", icon: "/assets/keyboard/logos/js.svg" },
      ],
      backend: [
        { name: "Python", icon: "/assets/keyboard/logos/python.svg" },
        { name: "Scikit-Learn", icon: "/assets/keyboard/logos/python.svg" },
      ],
    },
    github: "https://github.com/Mayank32935M/REDZONE",
    live: "https://github.com/Mayank32935M/REDZONE",
    content: (
      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <div className="p-4 rounded-xl border border-primary/20 bg-primary/5 text-foreground text-sm font-medium">
          🌍 Smart India Hackathon (SIH 2026) Initiative
        </div>
        <p>
          <strong className="text-foreground">REDZONE</strong> is a geological risk assessment system predicting seismic vulnerability and soil erosion hazard zones based on terrain elevation, rainfall telemetry, and historical geological records.
        </p>
      </div>
    ),
  },
  {
    id: "eventtwin",
    title: "EventTwin — Crowd Safety Digital Twin",
    category: "Simulation / AI",
    src: "/assets/projects/eventtwin_zonemap.png",
    screenshots: [
      "/assets/projects/eventtwin_zonemap.png",
    ],
    skills: {
      frontend: [
        { name: "React", icon: "/assets/keyboard/logos/react.svg" },
        { name: "HTML5 Canvas", icon: "/assets/keyboard/logos/html.svg" },
      ],
      backend: [
        { name: "Python", icon: "/assets/keyboard/logos/python.svg" },
        { name: "Node.js", icon: "/assets/keyboard/logos/nodejs.svg" },
      ],
    },
    github: "https://github.com/Mayank32935M/EventTwin",
    live: "https://github.com/Mayank32935M/EventTwin",
    content: (
      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <div className="p-4 rounded-xl border border-primary/20 bg-primary/5 text-foreground text-sm font-medium">
          🏟️ Spatial Digital Twin Architecture
        </div>
        <p>
          <strong className="text-foreground">EventTwin</strong> simulates dynamic crowd density, choke points, and emergency egress routing for high-capacity public gatherings and stadium events.
        </p>
      </div>
    ),
  },
  {
    id: "disease-prediction",
    title: "ML Disease Prediction System",
    category: "Healthcare / Machine Learning",
    src: "/assets/projects/forensic_x_overview.png",
    screenshots: [
      "/assets/projects/forensic_x_overview.png",
    ],
    skills: {
      frontend: [
        { name: "HTML5", icon: "/assets/keyboard/logos/html.svg" },
        { name: "CSS3", icon: "/assets/keyboard/logos/css.svg" },
      ],
      backend: [
        { name: "Python", icon: "/assets/keyboard/logos/python.svg" },
        { name: "MySQL", icon: "/assets/keyboard/logos/postgres.svg" },
      ],
    },
    github: "https://github.com/Mayank32935M",
    live: "https://github.com/Mayank32935M",
    content: (
      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <p>
          <strong className="text-foreground">Disease Prediction System</strong> is a predictive healthcare diagnostic engine utilizing classification algorithms trained on clinical patient indicators with persistent MySQL data storage.
        </p>
      </div>
    ),
  },
];

export default projects;
