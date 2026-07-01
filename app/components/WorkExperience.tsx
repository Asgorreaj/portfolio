"use client";

import { motion } from "framer-motion";

type Job = {
  date: string;
  title: string;
  type: "Internship" | "Full-time" | "Part-time";
  company: string;
  bullets: string[];
  tech: string[];
};

const JOBS: Job[] = [
  {
    date: "Feb 2025 – Present",
    title: "Associate Software Engineer",
    type: "Full-time",
    company: "DataSoft Systems Bangladesh Limited",
    bullets: [
      "Building enterprise-grade ERP and inventory systems using ASP.NET Core MVC and MSSQL.",
      "Collaborating on full-stack features with React.js frontend and .NET backend architecture.",
    ],
    tech: ["C#", "ASP.NET Core", "React", "MSSQL", "EF Core"],
  },
  {
    date: "Oct 2024 – Jan 2025",
    title: "Full Stack Developer",
    type: "Full-time",
    company: "DataHead Pvt. Ltd.",
    bullets: [
      "Developed and maintained full-stack web applications using ASP.NET MVC and React.js.",
      "Built RESTful APIs and integrated third-party services for client projects.",
    ],
    tech: ["ASP.NET MVC", "React", "REST API", "SQL Server"],
  },
  {
    date: "Dec 2023 – Jul 2024",
    title: "Software Engineer Intern → Junior",
    type: "Internship",
    company: "GOPLEXN",
    bullets: [
      "Built inventory management modules using ASP.NET Core MVC and Entity Framework.",
      "Developed ERP system components and handled MSSQL database design and migrations.",
    ],
    tech: ["ASP.NET Core", "EF Core", "MSSQL", "Bootstrap"],
  },
];

const TYPE_COLORS: Record<string, { bg: string; color: string }> = {
  "Full-time": { bg: "#E8F4FD", color: "#4F94B2" },
  Internship: { bg: "#EDF7ED", color: "#4CAF7D" },
  "Part-time": { bg: "#FEF3E2", color: "#E8926F" },
};

export default function WorkExperience() {
  return (
    <section id="experience" style={{ background: "#F5EDE0", padding: "80px 24px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ marginBottom: "48px" }}>
          <p style={{ color: "#999", fontSize: "12px", fontWeight: 600, letterSpacing: "5px", textTransform: "uppercase", marginBottom: "10px" }}>
            Career
          </p>
          <h4 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 500, color: "#111", letterSpacing: "-1.5px", lineHeight: 1, margin: 0 }}>
            Work Experience
          </h4>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          {JOBS.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{
                display: "grid",
                gridTemplateColumns: "160px 1fr",
                gap: "24px",
                paddingBottom: "40px",
                borderBottom: i < JOBS.length - 1 ? "1px dashed #D1C9BE" : "none",
              }}
            >
              <div style={{ paddingTop: "4px" }}>
                <span style={{ fontSize: "13px", color: "#999", fontWeight: 500 }}>{job.date}</span>
              </div>
              <div>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                  <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#111", margin: 0 }}>{job.title}</h3>
                  <span style={{
                    fontSize: "11px", fontWeight: 700, letterSpacing: "2px",
                    textTransform: "uppercase", borderRadius: "50px", padding: "3px 12px",
                    background: TYPE_COLORS[job.type].bg,
                    color: TYPE_COLORS[job.type].color,
                  }}>
                    {job.type}
                  </span>
                </div>
                <p style={{ fontSize: "14px", color: "#888", fontWeight: 500, margin: "0 0 16px" }}>{job.company}</p>
                <ul style={{ margin: "0 0 16px", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                  {job.bullets.map((b) => (
                    <li key={b} style={{ display: "flex", gap: "10px", fontSize: "14px", color: "#555", lineHeight: 1.65 }}>
                      <span style={{ color: "#E8926F", flexShrink: 0 }}>→</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {job.tech.map((t) => (
                    <span key={t} style={{
                      fontSize: "11px", fontWeight: 700, color: "#666",
                      background: "rgba(0,0,0,0.06)", borderRadius: "50px",
                      padding: "3px 12px", textTransform: "uppercase",
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}