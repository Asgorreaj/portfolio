"use client";

import { motion } from "framer-motion";

// ── CERTIFICATES — add your own image paths to imgSrc ──
const CERTIFICATES = [
  { title: "B.Sc CSE Degree", issuer: "AIUB", year: "2023", imgSrc: "/images/certificates/aiub-degree.jpg" },
  { title: "AML Certificate", issuer: "BUET", year: "2023", imgSrc: "/images/certificates/buet-aml.jpg" },
  { title: "IEEE Publication", issuer: "ICON-SONICS", year: "2025", imgSrc: "/images/certificates/ieee-cert.jpg" },
  { title: "Springer Publication", issuer: "Springer Nature", year: "2025", imgSrc: "/images/certificates/springer-cert.jpg" },
];

// ── VOLUNTEERING — update descriptions & image paths ──
const VOLUNTEERING = [
  {
    title: "Open Source Contributor",
    org: "GitHub Community",
    date: "2022 – Present",
    description: "Contributing to open source .NET and Python projects, filing issues, and submitting pull requests to improve developer tooling.",
    imgSrc: "/images/volunteering/opensource.jpg",
  },
  {
    title: "Tech Mentor",
    org: "AIUB Programming Club",
    date: "2021 – 2023",
    description: "Mentored junior students in competitive programming and helped organise inter-university coding contests at AIUB.",
    imgSrc: "/images/volunteering/mentor.jpg",
  },
  {
    title: "Research Presenter",
    org: "ICON-SONICS 2025",
    date: "2025",
    description: "Presented the paper 'Gender Bias in Low-Resource Bengali' at the ICON-SONICS international NLP conference.",
    imgSrc: "/images/volunteering/conference.jpg",
  },
  {
    title: "IEEE Student Member",
    org: "IEEE Bangladesh Section",
    date: "2022 – Present",
    description: "Active IEEE student member participating in seminars, workshops, and networking events in Dhaka.",
    imgSrc: "/images/volunteering/ieee.jpg",
  },
];

// Decorative dots — same as Yasir's volunteering section
function Dots({ variant = "a" }: { variant?: "a" | "b" | "c" | "d" }) {
  const configs = {
    a: [
      { w: 22, h: 22, top: -8, left: -8, border: true },
      { w: 8, h: 8, top: 12, right: -4, bg: "#EBC8B5" },
      { w: 14, h: 14, bottom: -6, right: 8, border: true },
    ],
    b: [
      { w: 22, h: 22, top: -8, right: -8, border: true },
      { w: 10, h: 10, bottom: -4, left: 12, bg: "rgba(255,255,255,0.35)" },
      { w: 6, h: 6, top: 8, left: -4, bg: "#EBC8B5" },
    ],
    c: [
      { w: 10, h: 10, top: -4, left: 20, bg: "#EBC8B5" },
      { w: 18, h: 18, bottom: -6, right: -6, border: true },
      { w: 6, h: 6, top: 14, right: -4, bg: "rgba(255,255,255,0.35)" },
    ],
    d: [
      { w: 22, h: 22, bottom: -8, left: -8, border: true },
      { w: 8, h: 8, top: -4, right: 20, bg: "#EBC8B5" },
      { w: 6, h: 6, bottom: 10, right: -4, bg: "rgba(255,255,255,0.35)" },
    ],
  };

  return (
    <>
      {configs[variant].map((d, i) => (
        <div key={i} style={{
          position: "absolute",
          width: d.w, height: d.h,
          borderRadius: "50%",
          top: (d as { top?: number }).top,
          bottom: (d as { bottom?: number }).bottom,
          left: (d as { left?: number }).left,
          right: (d as { right?: number }).right,
          background: (d as { bg?: string }).bg || "transparent",
          border: (d as { border?: boolean }).border ? "1px solid rgba(255,255,255,0.3)" : "none",
          opacity: 0.7,
        }} />
      ))}
    </>
  );
}

export default function Volunteering() {
  return (
    <>
      {/* ══════════════════════════════
          CERTIFICATES SECTION
      ══════════════════════════════ */}
      <section
        id="certificates"
        style={{
          background: "#F5EDE0",
          paddingTop: "100px",
          paddingBottom: "80px",
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px" }}>

          {/* Header */}
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "56px" }}>
            <div>
              <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "#0FA6C7", marginBottom: "8px" }}>CREDENTIALS</p>
              <h4 style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 500, color: "#111", letterSpacing: "-2px", lineHeight: 1, margin: 0 }}>Certificates</h4>
            </div>
            <span style={{ fontSize: "80px", fontWeight: 900, color: "#111", opacity: 0.05, letterSpacing: "-4px", lineHeight: 1, userSelect: "none" }}>CRT</span>
          </div>

          {/* 4-col grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
            {CERTIFICATES.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
                style={{
                  background: "#fff",
                  borderRadius: "24px",
                  overflow: "hidden",
                  border: "1.5px solid #E8DDD0",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Certificate image */}
                <div style={{ width: "100%", aspectRatio: "4/3", background: "linear-gradient(135deg, #0FA6C7, #89C4CF)", overflow: "hidden", flexShrink: 0 }}>
                  <img
                    src={c.imgSrc}
                    alt={c.title}
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div style={{ padding: "16px 18px" }}>
                  <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#0FA6C7", margin: "0 0 4px" }}>{c.issuer}</p>
                  <p style={{ fontSize: "14px", fontWeight: 600, color: "#1A1A1A", margin: "0 0 2px", lineHeight: 1.3 }}>{c.title}</p>
                  <p style={{ fontSize: "12px", color: "#999", margin: 0 }}>{c.year}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* "Show all" hint */}
          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <span style={{ fontSize: "13px", color: "#aaa", fontWeight: 500 }}>
              Add more certificates to <code style={{ background: "#E8DDD0", padding: "2px 6px", borderRadius: "4px", fontSize: "12px" }}>CERTIFICATES</code> array in Volunteering.tsx
            </span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          VOLUNTEERING SECTION
      ══════════════════════════════ */}
      <section
        id="volunteering"
        style={{
          backgroundImage: "linear-gradient(135deg, #0FA6C7 0%, #89C4CF 45%, #C4A090 78%, #EBC8B5 100%)",
          backgroundSize: "cover",
          paddingTop: "80px",
          paddingBottom: "80px",
          overflow: "hidden",
          position: "relative",
          borderRadius: "0 0 64px 64px",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 32px" }}>

          {/* Header */}
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "48px" }}>
            <h4 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 600, color: "#fff", margin: 0 }}>Volunteering</h4>
            <span style={{ fontSize: "56px", fontWeight: 900, color: "#fff", opacity: 0.07, letterSpacing: "-4px", lineHeight: 1, userSelect: "none" }}>VOL</span>
          </div>

          {/* 2-col grid — same as Yasir */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0" }}>
            {VOLUNTEERING.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1, ease: "easeOut" }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 16px 48px",
                  position: "relative",
                }}
              >
                {/* Dashed top divider for rows 2+ */}
                {i >= 2 && (
                  <div style={{ borderTop: "1.5px dashed rgba(255,255,255,0.18)", width: "100%", marginBottom: "36px" }} />
                )}

                {/* Image with decorative dots */}
                <div style={{ position: "relative", width: "100%", marginBottom: "28px" }}>
                  <div style={{ width: "100%", aspectRatio: "4/3", borderRadius: "20px", overflow: "hidden", border: "2px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.1)" }}>
                    <img
                      src={v.imgSrc}
                      alt={v.title}
                      onError={(e) => {
                        const el = e.currentTarget as HTMLImageElement;
                        el.style.display = "none";
                        const parent = el.parentElement!;
                        parent.style.display = "flex";
                        parent.style.alignItems = "center";
                        parent.style.justifyContent = "center";
                        parent.innerHTML = `<span style="font-size:48px;font-weight:900;color:rgba(255,255,255,0.2)">${v.title[0]}</span>`;
                      }}
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                  </div>
                  <Dots variant={(["a","b","c","d"] as const)[i % 4]} />
                </div>

                <h3 style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 400, color: "#1A1A1A", letterSpacing: "-0.5px", marginBottom: "8px", lineHeight: 1.2 }}>
                  {v.title}
                </h3>
                <p style={{ fontSize: "14px", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(0,0,0,0.45)", marginBottom: "12px" }}>
                  {v.org}
                </p>
                <p style={{ fontSize: "clamp(15px, 1.6vw, 20px)", fontWeight: 400, color: "rgba(0,0,0,0.65)", lineHeight: 1.7, marginBottom: "12px", maxWidth: "360px" }}>
                  {v.description}
                </p>
                <span style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", color: "#3A5357" }}>
                  {v.date}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}