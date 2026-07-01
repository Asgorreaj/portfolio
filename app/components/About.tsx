"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      style={{ background: "#F5EDE0", padding: "80px 24px" }}
    >
      <motion.div
        style={{ maxWidth: "900px", margin: "0 auto" }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "48px" }}>
          <h2 style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 500, color: "#111", letterSpacing: "-2px", lineHeight: 1 }}>
            About Me
          </h2>
          <span style={{ fontSize: "clamp(48px, 8vw, 96px)", fontWeight: 900, color: "#111", opacity: 0.05, letterSpacing: "-4px", lineHeight: 1, userSelect: "none" }}>
            ABT
          </span>
        </div>

        {/* Main dark card */}
        <div style={{ background: "#1A1A1A", borderRadius: "32px", padding: "48px", marginBottom: "20px" }}>
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", color: "#EBC8B5", marginBottom: "16px" }}>
            WHO I AM
          </p>
          <p style={{ fontSize: "clamp(16px, 2vw, 20px)", lineHeight: 1.75, color: "rgba(255,255,255,0.85)" }}>
            I'm a Software Engineer & AI Researcher based in Dhaka, Bangladesh.
            I work at <strong style={{ color: "#EBC8B5" }}>DataSoft Systems Bangladesh</strong> as an Associate Software Engineer,
            building enterprise-grade systems with .NET Core and React. Alongside that,
            I pursue AI/ML research — with <strong style={{ color: "#EBC8B5" }}>6 published papers</strong> in IEEE, Springer, and peer-reviewed journals.
          </p>
        </div>

        {/* Stats row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "20px" }}>
          {[
            { value: "6", label: "Research Papers", sub: "IEEE · Springer · Preprint" },
            { value: "2+", label: "Years Experience", sub: "DataSoft · GOPLEXN" },
            { value: "10+", label: "Projects Built", sub: ".NET · React · Python" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{ background: "#fff", border: "1.5px solid #D1C9BE", borderRadius: "24px", padding: "28px 20px", textAlign: "center" }}
            >
              <p style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 900, color: "#0FA6C7", margin: "0 0 6px", letterSpacing: "-1px" }}>{stat.value}</p>
              <p style={{ fontSize: "13px", fontWeight: 700, color: "#111", margin: "0 0 4px" }}>{stat.label}</p>
              <p style={{ fontSize: "11px", color: "#999", margin: 0 }}>{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div style={{ background: "#fff", border: "1.5px solid #D1C9BE", borderRadius: "24px", padding: "24px 28px" }}>
          <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", color: "#999", marginBottom: "16px" }}>
            TECH STACK
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {["C#", ".NET Core", "ASP.NET MVC", "React", "Next.js", "Python", "MSSQL", "EF Core", "NLP", "Federated Learning", "BERT", "REST API"].map((tag) => (
              <span
                key={tag}
                style={{ fontSize: "12px", fontWeight: 600, padding: "6px 14px", borderRadius: "50px", background: "#E5DFD5", color: "#333" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}