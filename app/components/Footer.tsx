export default function Footer() {
  return (
    <footer style={{ background: "#F5EDE0", padding: "48px 24px 0" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "32px", paddingBottom: "40px" }}>
          <div>
            <span style={{ fontSize: "24px", fontWeight: 900, color: "#111", letterSpacing: "-1px" }}>
              ASGOR<span style={{ color: "#0FA6C7" }}>.</span>
            </span>
            <p style={{ fontSize: "13px", color: "#888", marginTop: "12px", lineHeight: 1.6 }}>
              Software Engineer & AI Researcher<br />Dhaka, Bangladesh
            </p>
          </div>
          <div>
            <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "#999", marginBottom: "16px" }}>
              Navigation
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Projects", href: "#projects" },
                { label: "Research", href: "#publications" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a key={link.label} href={link.href} style={{ color: "#555", fontSize: "14px", textDecoration: "none", fontWeight: 500 }}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "#999", marginBottom: "16px" }}>
              Connect
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { label: "asgorreaj@gmail.com", href: "mailto:asgorreaj@gmail.com" },
                { label: "LinkedIn", href: "https://linkedin.com/in/asgordevai" },
                { label: "GitHub", href: "https://github.com/Asgorreaj" },
                { label: "ResearchGate", href: "https://www.researchgate.net/profile/Md-Asgor-Hossain-Reaj" },
              ].map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" style={{ color: "#555", fontSize: "14px", textDecoration: "none", fontWeight: 500 }}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid #DDD4C4", padding: "24px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ color: "#aaa", fontSize: "12px", textTransform: "uppercase", letterSpacing: "2px" }}>
            2026 Asgor Hossain Reaj. All rights reserved.
          </span>
          <span style={{ color: "#aaa", fontSize: "12px" }}>
            Built with Next.js & Framer Motion
          </span>
        </div>
      </div>
    </footer>
  );
}