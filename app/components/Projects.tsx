// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// type Project = {
//   title: string;
//   description: string;
//   tech: string[];
//   category: string[];
//   githubUrl: string;
//   image?: string;
// };

// const PROJECTS: Project[] = [
//   {
//     title: "Donation & Charity Platform",
//     description: "Full-stack donation platform with PHP backend and TypeScript frontend, enabling secure donation tracking with real-time dashboards.",
//     tech: ["PHP", "TypeScript", "Docker", "REST API"],
//     category: ["Web"],
//     githubUrl: "https://github.com/Asgorreaj/Donation_Full_Project",
//   },
//   {
//     title: "Tour & Travel Booking System",
//     description: "Complete booking platform with search, reservation, and payment flow for tour packages with integrated booking management.",
//     tech: ["Booking System", "Payment Integration", "React"],
//     category: ["Web"],
//     githubUrl: "https://github.com/Asgorreaj/TourAndTravel",
//   },
//   {
//     title: "Sneakers Shop API",
//     description: "E-commerce backend API for a sneakers store, handling products, orders, and inventory with NestJS.",
//     tech: ["NestJS", "TypeScript", "REST API"],
//     category: ["Web"],
//     githubUrl: "https://github.com/Asgorreaj/Sneakers_Shop_NestJS_Backend_project_",
//   },
//   {
//     title: "Financial Sentiment Analysis",
//     description: "BERT-based NLP model for financial sentiment classification, published as a preprint on Research Square.",
//     tech: ["BERT", "Python", "NLP", "HuggingFace"],
//     category: ["AI / ML"],
//     githubUrl: "https://doi.org/10.21203/rs.3.rs-7786713/v1",
//   },
//   {
//     title: "Gender Bias in Bengali NLP",
//     description: "Research on detecting and mitigating gender bias in low-resource Bengali language models. Published at ICON-SONICS 2025.",
//     tech: ["NLP", "Python", "Bengali", "Bias Detection"],
//     category: ["AI / ML"],
//     githubUrl: "https://doi.org/10.1109/ICON-SONICS67145.2025.11309238",
//   },
//   {
//     title: "Federated Learning Healthcare",
//     description: "Federated learning framework for privacy-preserving healthcare data analysis. Published in Springer 2025.",
//     tech: ["Federated Learning", "Python", "TensorFlow", "Privacy-ML"],
//     category: ["AI / ML"],
//     githubUrl: "https://doi.org/10.1007/978-981-96-8353-6_1",
//   },
// ];

// const FILTERS = ["All", "Web", "AI / ML"];

// export default function Projects() {
//   const [active, setActive] = useState("All");
//   const [showAll, setShowAll] = useState(false);

//   const filtered = active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category.includes(active));
//   const visible = showAll ? filtered : filtered.slice(0, 3);

//   return (
//     <section
//       id="projects"
//       style={{
//         minHeight: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         position: "relative",
//         paddingTop: "120px",
//         paddingBottom: "80px",
//         overflow: "hidden",
//         borderRadius: "0 0 128px 128px",
//       }}
//     >
//       {/* Background — same gradient as hero but flipped */}
//       <div
//         style={{
//           position: "absolute",
//           top: 0, left: 0, width: "100%", height: "100%",
//           background: "linear-gradient(135deg, #0FA6C7 0%, #89C4CF 45%, #C4A090 78%, #EBC8B5 100%)",
//           transform: "scaleX(-1)",
//           zIndex: -1,
//         }}
//       />

//       <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px", width: "100%" }}>

//         {/* Header */}
//         <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "48px", gap: "32px" }}>
//           <h4 style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 600, color: "#fff", margin: 0 }}>
//             Featured Projects
//           </h4>
//           <span style={{ fontSize: "clamp(32px, 4vw, 58px)", fontWeight: 900, color: "#fff", opacity: 0.5, letterSpacing: "-4px", lineHeight: 1, userSelect: "none", alignSelf: "flex-end" }}>
//             {PROJECTS.length} PROJECTS
//           </span>
//         </div>

//         {/* Filter pills */}
//         <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "48px" }}>
//           {FILTERS.map((f) => (
//             <button
//               key={f}
//               onClick={() => { setActive(f); setShowAll(false); }}
//               style={{
//                 padding: "8px 20px",
//                 borderRadius: "50px",
//                 border: active === f ? "1.5px solid #EBC8B5" : "1.5px solid rgba(255,255,255,0.25)",
//                 background: active === f ? "#EBC8B5" : "rgba(255,255,255,0.08)",
//                 color: active === f ? "#1A1A1A" : "#fff",
//                 fontSize: "13px",
//                 fontWeight: 600,
//                 letterSpacing: "0.5px",
//                 cursor: "pointer",
//                 transition: "all 0.2s",
//               }}
//             >
//               {f}
//             </button>
//           ))}
//         </div>

//         {/* Cards grid */}
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px" }}>
//           <AnimatePresence mode="popLayout">
//             {visible.map((p, i) => (
//               <motion.div
//                 key={p.title}
//                 layout
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, scale: 0.95 }}
//                 transition={{ duration: 0.4, delay: i * 0.07 }}
//               >
//                 <a
//                   href={p.githubUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   style={{
//                     display: "flex",
//                     flexDirection: "column",
//                     minHeight: "460px",
//                     height: "100%",
//                     textDecoration: "none",
//                     color: "inherit",
//                     background: "#F5EDE0",
//                     borderRadius: "24px",
//                     overflow: "hidden",
//                   }}
//                   className="group"
//                 >
//                   {/* Image area */}
//                   <div style={{ width: "100%", height: "200px", overflow: "hidden", flexShrink: 0, position: "relative", zIndex: 1, background: "linear-gradient(135deg, #0FA6C7, #89C4CF)" }}>
//                     {p.image ? (
//                       <img
//                         src={p.image}
//                         alt={p.title}
//                         style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s cubic-bezier(0.4,0,0.2,1)" }}
//                         onMouseEnter={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.05)")}
//                         onMouseLeave={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")}
//                       />
//                     ) : (
//                       /* Placeholder with project initials */
//                       <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
//                         <span style={{ fontSize: "56px", fontWeight: 900, color: "rgba(255,255,255,0.25)", letterSpacing: "-2px" }}>
//                           {p.title.split(" ").map((w) => w[0]).join("").slice(0, 3)}
//                         </span>
//                       </div>
//                     )}
//                   </div>

//                   {/* Content */}
//                   <div style={{ padding: "28px 28px 16px", flexGrow: 1, display: "flex", flexDirection: "column", position: "relative", zIndex: 10 }}>
//                     <span style={{ fontSize: "15px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.12em", color: "#333", marginBottom: "12px", display: "block" }}>
//                       {p.title}
//                     </span>
//                     <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#555", marginBottom: "16px", flexGrow: 1 }}>
//                       {p.description}
//                     </p>
//                     {/* Tech tags */}
//                     <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
//                       {p.tech.map((t) => (
//                         <span
//                           key={t}
//                           style={{
//                             fontSize: "9px",
//                             fontWeight: 700,
//                             color: "#666",
//                             background: "rgba(0,0,0,0.07)",
//                             borderRadius: "50px",
//                             padding: "4px 10px",
//                             letterSpacing: "0.5px",
//                             textTransform: "uppercase",
//                           }}
//                         >
//                           {t}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   {/* "View Project →" — exactly like Yasir */}
//                   <div style={{ padding: "0 28px 24px", position: "relative", zIndex: 10 }}>
//                     <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#0FA6C7", fontWeight: 700, fontSize: "17px", textTransform: "uppercase", letterSpacing: "0.1em", transition: "gap 0.2s" }}>
//                       GitHub →
//                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                         <path d="m9 18 6-6-6-6"/>
//                       </svg>
//                     </span>
//                   </div>
//                 </a>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </div>

//         {/* Show all button */}
//         {filtered.length > 3 && (
//           <div style={{ display: "flex", justifyContent: "center", marginTop: "48px" }}>
//             <button
//               onClick={() => setShowAll(!showAll)}
//               style={{
//                 background: "rgba(255,255,255,0.1)",
//                 color: "#fff",
//                 border: "1.5px solid rgba(255,255,255,0.3)",
//                 borderRadius: "50px",
//                 padding: "14px 36px",
//                 fontWeight: 700,
//                 fontSize: "14px",
//                 letterSpacing: "1px",
//                 cursor: "pointer",
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "8px",
//                 transition: "background 0.2s",
//               }}
//               onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.18)")}
//               onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)")}
//             >
//               {showAll ? "SHOW LESS" : `SHOW ALL PROJECTS (${filtered.length - 3} more)`}
//               <span style={{ display: "flex", transform: showAll ? "rotate(-90deg)" : "rotate(90deg)", transition: "transform 0.3s" }}>
//                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <path d="m9 18 6-6-6-6"/>
//                 </svg>
//               </span>
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }


"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
  title: string;
  description: string;
  tech: string[];
  category: string[];
  githubUrl: string;
  image?: string;
};

const PROJECTS: Project[] = [
  {
    title: "Donation & Charity Platform",
    description: "Full-stack donation platform with PHP backend and TypeScript frontend, enabling secure donation tracking with real-time dashboards.",
    tech: ["PHP", "TypeScript", "Docker", "REST API"],
    category: ["Web"],
    githubUrl: "https://github.com/Asgorreaj/Donation_Full_Project",
  },
  {
    title: "Tour & Travel Booking System",
    description: "Complete booking platform with search, reservation, and payment flow for tour packages with integrated booking management.",
    tech: ["Booking System", "Payment Integration", "React"],
    category: ["Web"],
    githubUrl: "https://github.com/Asgorreaj/TourAndTravel",
  },
  {
    title: "Sneakers Shop API",
    description: "E-commerce backend API for a sneakers store, handling products, orders, and inventory with NestJS.",
    tech: ["NestJS", "TypeScript", "REST API"],
    category: ["Web"],
    githubUrl: "https://github.com/Asgorreaj/Sneakers_Shop_NestJS_Backend_project_",
  },
  {
    title: "Financial Sentiment Analysis",
    description: "BERT-based NLP model for financial sentiment classification, published as a preprint on Research Square.",
    tech: ["BERT", "Python", "NLP", "HuggingFace"],
    category: ["AI / ML"],
    githubUrl: "https://doi.org/10.21203/rs.3.rs-7786713/v1",
  },
  {
    title: "Gender Bias in Bengali NLP",
    description: "Research on detecting and mitigating gender bias in low-resource Bengali language models. Published at ICON-SONICS 2025.",
    tech: ["NLP", "Python", "Bengali", "Bias Detection"],
    category: ["AI / ML"],
    githubUrl: "https://doi.org/10.1109/ICON-SONICS67145.2025.11309238",
  },
  {
    title: "Federated Learning Healthcare",
    description: "Federated learning framework for privacy-preserving healthcare data analysis. Published in Springer 2025.",
    tech: ["Federated Learning", "Python", "TensorFlow", "Privacy-ML"],
    category: ["AI / ML"],
    githubUrl: "https://doi.org/10.1007/978-981-96-8353-6_1",
  },
];

const FILTERS = ["All", "Web", "AI / ML"];

export default function Projects() {
  const [active, setActive] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filtered = active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category.includes(active));
  const visible = showAll ? filtered : filtered.slice(0, 3);

  return (
    <section
      id="projects"
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

        {/* Header */}
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "48px", gap: "32px" }}>
          <h4 style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 600, color: "#fff", margin: 0 }}>
            Featured Projects
          </h4>
          <span style={{ fontSize: "clamp(32px, 4vw, 58px)", fontWeight: 900, color: "#fff", opacity: 0.5, letterSpacing: "-4px", lineHeight: 1, userSelect: "none" }}>
            {PROJECTS.length} PROJECTS
          </span>
        </div>

        {/* Filter pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "48px" }}>
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => { setActive(f); setShowAll(false); }}
              style={{
                padding: "8px 20px",
                borderRadius: "50px",
                border: active === f ? "1.5px solid #EBC8B5" : "1.5px solid rgba(255,255,255,0.25)",
                background: active === f ? "#EBC8B5" : "rgba(255,255,255,0.08)",
                color: active === f ? "#1A1A1A" : "#fff",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.5px",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px" }}>
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <a
                  href={p.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "460px",
                    height: "100%",
                    textDecoration: "none",
                    color: "inherit",
                    background: "#F5EDE0",
                    borderRadius: "24px",
                    overflow: "hidden",
                  }}
                >
                  {/* Image / placeholder */}
                  <div style={{ width: "100%", height: "200px", overflow: "hidden", flexShrink: 0, background: "linear-gradient(135deg, #0FA6C7 0%, #89C4CF 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {p.image ? (
                      <img src={p.image} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s cubic-bezier(0.4,0,0.2,1)" }} />
                    ) : (
                      <span style={{ fontSize: "52px", fontWeight: 900, color: "rgba(255,255,255,0.3)", letterSpacing: "-2px" }}>
                        {p.title.split(" ").map((w) => w[0]).join("").slice(0, 3)}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div style={{ padding: "28px 28px 16px", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                    <span style={{ fontSize: "15px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.12em", color: "#333", marginBottom: "12px", display: "block" }}>
                      {p.title}
                    </span>
                    <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#555", marginBottom: "16px", flexGrow: 1 }}>
                      {p.description}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      {p.tech.map((t) => (
                        <span key={t} style={{ fontSize: "9px", fontWeight: 700, color: "#666", background: "rgba(0,0,0,0.07)", borderRadius: "50px", padding: "4px 10px", letterSpacing: "0.5px", textTransform: "uppercase" }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ padding: "0 28px 24px" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#0FA6C7", fontWeight: 700, fontSize: "17px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                      GitHub →
                    </span>
                  </div>
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show all */}
        {filtered.length > 3 && (
          <div style={{ display: "flex", justifyContent: "center", marginTop: "48px" }}>
            <button
              onClick={() => setShowAll(!showAll)}
              style={{ background: "rgba(255,255,255,0.1)", color: "#fff", border: "1.5px solid rgba(255,255,255,0.3)", borderRadius: "50px", padding: "14px 36px", fontWeight: 700, fontSize: "14px", letterSpacing: "1px", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}
            >
              {showAll ? "SHOW LESS" : `SHOW ALL PROJECTS (${filtered.length - 3} more)`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
