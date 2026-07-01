"use client";

import { useState, useEffect, useRef } from "react";

const NAV_LINKS = [
  { label: "HOME", href: "#home" },
  { label: "PROJECTS", href: "#projects" },
  { label: "RESEARCH", href: "#publications" },
  { label: "CONTACT", href: "#contact" },
];

function NavLink({ label, href }: { label: string; href: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative pb-1"
      style={{
        color: "rgba(255,255,255,0.9)",
        fontWeight: 700,
        fontSize: "1.1rem",
        letterSpacing: "0.15em",
        textDecoration: "none",
        transition: "color 0.2s",
      }}
    >
      {label}
      {/* Underline slide animation — same as Yasir */}
      <span
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "2px",
          width: "100%",
          borderRadius: "9999px",
          background: "#fff",
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: hovered ? "left center" : "right center",
          transition: "transform 350ms cubic-bezier(0.4,0,0.2,1)",
        }}
      />
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const shimmerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Shimmer keyframe */}
      <style>{`
        @keyframes shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        @keyframes ping-soft {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50%       { transform: scale(1.6); opacity: 0; }
        }
      `}</style>

      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: scrolled ? "rgba(15,166,199,0.18)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.1)" : "none",
          transition: "background 0.3s, backdrop-filter 0.3s",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "72px" }}>

            {/* ── Logo ── */}
            <span
              style={{
                fontWeight: 900,
                fontSize: "1.5rem",
                color: "#fff",
                letterSpacing: "0.18em",
                fontFamily: "inherit",
              }}
            >
              ASGOR<span style={{ color: "#EBC8B5" }}>.</span>
            </span>

            {/* ── Center nav links ── */}
            <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
              {NAV_LINKS.map((l) => (
                <NavLink key={l.label} label={l.label} href={l.href} />
              ))}
            </div>

            {/* ── Right: ASK AI pill + HIRE ME button ── */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>

              {/* ASK AI shimmer pill */}
              <a
                href="#contact"
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 22px",
                  borderRadius: "999px",
                  border: "1px solid rgba(235,200,181,0.35)",
                  background: "linear-gradient(135deg, rgba(235,200,181,0.12) 0%, rgba(255,255,255,0.06) 100%)",
                  color: "#fff",
                  fontSize: "11px",
                  fontWeight: 800,
                  letterSpacing: "2.5px",
                  cursor: "pointer",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 0 20px rgba(235,200,181,0.08), inset 0 1px 0 rgba(255,255,255,0.1)",
                  overflow: "hidden",
                  textDecoration: "none",
                }}
              >
                {/* shimmer sweep */}
                <span
                  ref={shimmerRef}
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.08) 50%, transparent 60%) 0 0 / 200% 100%",
                    animation: "shimmer 3s ease infinite",
                    borderRadius: "inherit",
                  }}
                />
                {/* sparkle icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.9, flexShrink: 0 }}>
                  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
                  <path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/>
                </svg>
                <span style={{ position: "relative", zIndex: 1 }}>ASK AI</span>
                {/* pulsing dot */}
                <span style={{ position: "relative", width: "6px", height: "6px", borderRadius: "50%", background: "#EBC8B5", flexShrink: 0 }}>
                  <span style={{
                    position: "absolute",
                    inset: "-2px",
                    borderRadius: "50%",
                    border: "1.5px solid rgba(235,200,181,0.6)",
                    animation: "ping-soft 2s ease-in-out infinite",
                  }} />
                </span>
              </a>

              {/* HIRE ME — white pill like "MAKE A PROJECT" */}
              <a
                href="#contact"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  background: "#fff",
                  color: "#1A1A1A",
                  border: "1.5px solid rgba(0,0,0,0.12)",
                  borderRadius: "50px",
                  padding: "10px 32px",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  letterSpacing: "1px",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  textDecoration: "none",
                  transition: "background 0.2s",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#EBC8B5")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#fff")}
              >
                HIRE ME
              </a>
            </div>

          </div>
        </div>
      </nav>
    </>
  );
}