"use client";

import { motion } from "framer-motion";

const ACCENT_COLORS = {
  orange: "#E8926F",
  blue: "#4F94B2",
  green: "#4CAF7D",
  purple: "#9B7DD4",
};

export default function Education() {
  return (
    <section
      id="education"
      style={{
        background: "#F5EDE0",
        paddingTop: "120px",
        paddingBottom: "120px",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "72px" }}>
          <h4 style={{ fontSize: "64px", fontWeight: 500, color: "#111", letterSpacing: "-2px", lineHeight: 1, margin: 0 }}>
            Education
          </h4>
          <span style={{ fontSize: "96px", lineHeight: 1, opacity: 0.06, fontWeight: 900, color: "#111", letterSpacing: "-4px", userSelect: "none" }}>
            EDU
          </span>
        </div>

        {/* ── Main card: AIUB ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            background: "#1A1A1A",
            borderRadius: "44px",
            padding: "52px 60px",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0",
            marginBottom: "20px",
          }}
        >
          {/* Top accent bar */}
          <div style={{ position: "absolute", top: 0, left: "60px", width: "48px", height: "4px", borderRadius: "0 0 4px 4px", background: ACCENT_COLORS.orange }} />
          {/* Decorative dots */}
          <div style={{ position: "absolute", top: "24px", right: "32px", width: "10px", height: "10px", borderRadius: "50%", background: "rgba(255,255,255,0.07)" }} />
          <div style={{ position: "absolute", top: "42px", right: "52px", width: "6px", height: "6px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.12)" }} />

          {/* Left content */}
          <div style={{ position: "relative", zIndex: 1 }}>
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: ACCENT_COLORS.orange, display: "block", marginBottom: "16px" }}>
              2018 – 2023
            </span>
            <h3 style={{ fontSize: "38px", fontWeight: 400, color: "#fff", letterSpacing: "-1px", lineHeight: 1.15, margin: "0 0 24px", whiteSpace: "pre-line" }}>
              {`B.Sc in Computer\nScience & Engineering`}
            </h3>
            <span style={{ display: "inline-flex", alignItems: "center", fontSize: "13px", fontWeight: 600, background: ACCENT_COLORS.orange, color: "#fff", borderRadius: "50px", padding: "8px 20px" }}>
              AIUB Graduate
            </span>
          </div>

          {/* Right: university box */}
          <div style={{ textAlign: "right", flexShrink: 0, position: "relative", zIndex: 1 }}>
            <div style={{ display: "inline-block", background: "rgba(255,255,255,0.07)", borderRadius: "20px", padding: "20px 28px", textAlign: "right" }}>
              <p style={{ fontSize: "22px", fontWeight: 400, color: "rgba(255,255,255,0.9)", margin: "0 0 4px", maxWidth: "240px", lineHeight: 1.3 }}>
                American International<br />University-Bangladesh
              </p>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", margin: 0, fontWeight: 500 }}>Dhaka, Bangladesh</p>
            </div>
          </div>
        </motion.div>

        {/* ── Professional Course Card: AML in BUET ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
          style={{
            background: "#0FA6C7",
            borderRadius: "44px",
            padding: "40px 60px",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0",
            marginBottom: "20px",
          }}
        >
          <div style={{ position: "absolute", top: 0, left: "60px", width: "48px", height: "4px", borderRadius: "0 0 4px 4px", background: "rgba(255,255,255,0.5)" }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", display: "block", marginBottom: "12px" }}>
              PROFESSIONAL COURSE
            </span>
            <h3 style={{ fontSize: "30px", fontWeight: 400, color: "#fff", letterSpacing: "-0.5px", lineHeight: 1.2, margin: "0 0 16px" }}>
              Applied Machine Learning
            </h3>
            <span style={{ display: "inline-flex", alignItems: "center", fontSize: "13px", fontWeight: 600, background: "rgba(255,255,255,0.2)", color: "#fff", borderRadius: "50px", padding: "8px 20px", border: "1px solid rgba(255,255,255,0.3)" }}>
              Certificate Course
            </span>
          </div>
          <div style={{ textAlign: "right", flexShrink: 0, position: "relative", zIndex: 1 }}>
            <div style={{ display: "inline-block", background: "rgba(255,255,255,0.15)", borderRadius: "20px", padding: "20px 28px", textAlign: "right" }}>
              <p style={{ fontSize: "20px", fontWeight: 400, color: "#fff", margin: "0 0 4px", lineHeight: 1.3 }}>
                BUET
              </p>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", margin: 0, fontWeight: 500 }}>Bangladesh University of<br />Engineering & Technology</p>
            </div>
          </div>
        </motion.div>

        {/* ── 3-col small cards: College + Schools ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px" }}>

          {/* Willes Little Flower College */}
          <SmallCard
            accent={ACCENT_COLORS.blue}
            dark={false}
            date="2016 – 2018"
            title={"Higher Secondary\nCertificate (HSC)"}
            school="Willes Little Flower School & College"
            location="Dhaka, Bangladesh"
          />

          {/* Cambrian School */}
          <SmallCard
            accent={ACCENT_COLORS.green}
            dark={true}
            date="2014 – 2016"
            title={"Secondary School\nCertificate (SSC)"}
            school="Cambrian School & College"
            location="Dhaka, Bangladesh"
          />

          {/* Primary placeholder */}
          <SmallCard
            accent={ACCENT_COLORS.purple}
            dark={false}
            date="– 2014"
            title={"Primary &\nJunior Education"}
            school="Cambrian School"
            location="Dhaka, Bangladesh"
          />
        </div>
      </div>
    </section>
  );
}

function SmallCard({
  accent,
  dark,
  date,
  title,
  school,
  location,
}: {
  accent: string;
  dark: boolean;
  date: string;
  title: string;
  school: string;
  location: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        background: dark ? "#1A1A1A" : "#fff",
        borderRadius: "36px",
        padding: "40px 32px",
        position: "relative",
        overflow: "hidden",
        border: dark ? "none" : "1.5px solid #E8DDD0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "220px",
      }}
    >
      {/* Top accent bar */}
      <div style={{ position: "absolute", top: 0, left: "36px", width: "48px", height: "4px", borderRadius: "0 0 4px 4px", background: accent }} />
      {/* Dots */}
      <div style={{ position: "absolute", top: "24px", right: "32px", width: "10px", height: "10px", borderRadius: "50%", background: dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.05)" }} />
      <div style={{ position: "absolute", top: "42px", right: "52px", width: "6px", height: "6px", borderRadius: "50%", border: `1px solid ${dark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.1)"}` }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: accent, display: "block", marginBottom: "12px" }}>
          {date}
        </span>
        <h3 style={{ fontSize: "20px", fontWeight: 400, color: dark ? "#fff" : "#111", letterSpacing: "-0.5px", lineHeight: 1.2, margin: 0, whiteSpace: "pre-line" }}>
          {title}
        </h3>
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ background: dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.04)", borderRadius: "14px", padding: "14px 16px" }}>
          <p style={{ fontSize: "14px", fontWeight: 500, color: dark ? "rgba(255,255,255,0.9)" : "#333", margin: "0 0 3px", lineHeight: 1.3 }}>
            {school}
          </p>
          <p style={{ fontSize: "12px", color: dark ? "rgba(255,255,255,0.35)" : "#aaa", margin: 0, fontWeight: 500 }}>
            {location}
          </p>
        </div>
      </div>
    </motion.div>
  );
}