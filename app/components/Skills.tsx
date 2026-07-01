"use client";

import { motion } from "framer-motion";

const SKILL_GROUPS = [
  { category: "Programming", title: "Languages", accent: "#E8926F", skills: ["C#", "Python", "JavaScript", "TypeScript", "Java", "PHP"] },
  { category: "AI & Machine Learning", title: "AI & ML", accent: "#4F94B2", skills: ["NLP", "BERT", "Federated Learning", "Fine-tuning", "LLaMA", "Prompt Eng."] },
  { category: "Frameworks", title: "Frameworks", accent: "#4CAF7D", skills: ["ASP.NET Core", "React", "Next.js", "Django", "NestJS", "EF Core"] },
  { category: "Data & DevOps", title: "Tooling", accent: "#E8926F", skills: ["Git", "Docker", "REST APIs", "Azure", "Pandas", "NumPy"] },
  { category: "Databases", title: "Databases", accent: "#9B7DD4", skills: ["MSSQL", "PostgreSQL", "MongoDB", "MySQL", "Firebase"] },
  { category: "Frontend", title: "UI & CSS", accent: "#D4607A", skills: ["HTML", "CSS", "Tailwind CSS", "Bootstrap", "Framer Motion"] },
];

export default function Skills() {
  return (
    <section id="skills" style={{ background: "#F5EDE0", padding: "72px 24px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "48px" }}>
          <h4 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 500, color: "#111", letterSpacing: "-2px", lineHeight: 1, margin: 0 }}>
            Skills
          </h4>
          <span style={{ fontSize: "clamp(40px, 6vw, 64px)", opacity: 0.06, fontWeight: 900, color: "#111", letterSpacing: "-4px", lineHeight: 1, userSelect: "none" }}>
            SKL
          </span>
        </div>

        <div style={{
          background: "rgba(245,237,224,0.92)",
          borderRadius: "32px",
          border: "1.5px solid #E0D0BC",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          overflow: "hidden",
        }}>
          {SKILL_GROUPS.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              style={{
                padding: "32px 20px",
                display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
                borderRight: (i + 1) % 3 !== 0 ? "1.5px dashed #C8B89A" : "none",
                borderBottom: i < 3 ? "1.5px dashed #C8B89A" : "none",
              }}
            >
              <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", color: "#999", marginBottom: "8px" }}>
                {group.category}
              </span>
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: "26px", fontWeight: 800, color: "#111", letterSpacing: "-1px", lineHeight: 1.1, marginBottom: "14px" }}>
                {group.title}
              </h3>
              <div style={{ width: "28px", height: "2px", borderRadius: "2px", background: group.accent, margin: "0 auto 16px" }} />
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "6px" }}>
                {group.skills.map((s) => (
                  <span key={s} style={{ fontSize: "11px", fontWeight: 600, borderRadius: "50px", padding: "5px 12px", background: "rgba(0,0,0,0.07)", color: "#222" }}>
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}