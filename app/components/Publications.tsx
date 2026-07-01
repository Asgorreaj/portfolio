"use client";

import { motion } from "framer-motion";

type Publication = {
  title: string;
  venue: string;
  year: string;
  doi: string;
  category: string;
  status?: string;
};

const publications: Publication[] = [
  { title: "Gender Bias in Low-Resource Bengali", venue: "ICON-SONICS", year: "2025", doi: "10.1109/ICON-SONICS67145.2025.11309238", category: "NLP / BIAS" },
  { title: "Federated Learning in Health Care Technology", venue: "Springer", year: "2025", doi: "10.1007/978-981-96-8353-6_1", category: "FEDERATED ML" },
  { title: "Financial Sentiment Analysis using BERT", venue: "Preprint", year: "2025", doi: "10.21203/rs.3.rs-7786713/v1", category: "NLP / FINANCE" },
  { title: "A Systematic Review of Metaverse Environment", venue: "Journal Article", year: "2024", doi: "10.22105/metaverse.v1i1.17", category: "METAVERSE" },
  { title: "Metaverse: Fission the Architecture", venue: "IJSRA", year: "2024", doi: "10.30574/ijsra.2024.12.1.0808", category: "METAVERSE" },
  { title: "Federated Learning: Architectures, Hardware, Network Protocols, Tasks and Problems", venue: "Under Review", year: "2026", doi: "", category: "FEDERATED ML", status: "Under Review" },
];

// Decorative dot patterns like Yasir's article cards
function DecorationDots() {
  return (
    <>
      <div style={{ position: "absolute", top: "16px", right: "48px", width: "12px", height: "12px", borderRadius: "50%", background: "#EBC8B5", opacity: 0.7 }} />
      <div style={{ position: "absolute", top: "64px", right: "16px", width: "8px", height: "8px", borderRadius: "50%", border: "1px solid #aaa", opacity: 0.5 }} />
      <div style={{ position: "absolute", top: "80px", left: "32px", width: "4px", height: "4px", borderRadius: "50%", background: "#888", opacity: 0.6 }} />
      <div style={{ position: "absolute", bottom: "16px", left: "8px", width: "16px", height: "16px", borderRadius: "50%", border: "1px solid #aaa", opacity: 0.4 }} />
    </>
  );
}

export default function Publications() {
  return (
    <section
      id="publications"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        paddingTop: "120px",
        paddingBottom: "80px",
        overflow: "hidden",
        borderRadius: "0 0 128px 128px",
        background: "linear-gradient(225deg, #0FA6C7 0%, #89C4CF 45%, #C4A090 78%, #EBC8B5 100%)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px", width: "100%" }}>

        {/* Header — like Yasir's Articles header */}
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: "80px", gap: "32px" }}>
          <h4 style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 600, color: "#fff", margin: 0, maxWidth: "50%" }}>
            Research &amp; Publications
          </h4>
          <p style={{ fontSize: "clamp(16px, 1.8vw, 24px)", fontWeight: 400, color: "rgba(255,255,255,0.65)", maxWidth: "40%", margin: 0 }}>
            Published work in IEEE, Springer, and peer-reviewed journals — from Federated Learning to NLP research.
          </p>
        </div>

        {/* Cards grid — 3 col like Yasir's articles */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "32px" }}>
          {publications.map((pub, i) => (
            <motion.a
              key={pub.title}
              href={pub.doi ? `https://doi.org/${pub.doi}` : "https://www.researchgate.net/profile/Md-Asgor-Hossain-Reaj"}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              style={{
                position: "relative",
                background: "#F5EDE0",
                borderRadius: "24px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                minHeight: "320px",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <DecorationDots />

              {/* Content */}
              <div style={{ padding: "32px 32px 16px", flexGrow: 1, position: "relative", zIndex: 10 }}>
                {/* Category label — like Yasir's "LLM / RAG", "PROGRAMMING" */}
                <span style={{ fontSize: "13px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.15em", color: "#555", marginBottom: "16px", display: "block" }}>
                  {pub.category}
                </span>

                {/* Title — bold like Yasir's article titles */}
                <h3 style={{ fontSize: "20px", fontWeight: 700, lineHeight: 1.35, color: "#1A1A1A", marginBottom: "16px", maxWidth: "280px" }}>
                  {pub.title}
                </h3>

                {/* Venue + year */}
                <p style={{ fontSize: "14px", color: "#888", margin: 0 }}>
                  {pub.venue} · {pub.year}
                </p>
              </div>

              {/* Bottom — "Read Paper →" + status badge */}
              <div style={{ padding: "0 32px 28px", position: "relative", zIndex: 10, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#0FA6C7", fontWeight: 700, fontSize: "17px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  {pub.status ? "Under Review" : "Read Paper"}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </span>
                <span style={{
                  fontSize: "10px", fontWeight: 700, padding: "4px 12px", borderRadius: "50px",
                  background: pub.status ? "#FEF3E2" : "#E0F4F8",
                  color: pub.status ? "#E8926F" : "#0FA6C7",
                  border: `1px solid ${pub.status ? "#E8926F" : "#0FA6C7"}`,
                }}>
                  {pub.status || "Published"}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}