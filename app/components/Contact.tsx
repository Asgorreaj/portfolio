"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);
    window.location.href = `mailto:asgorreaj@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section
      id="contact"
      style={{
        background: "linear-gradient(135deg, #0FA6C7 0%, #89C4CF 45%, #C4A090 78%, #EBC8B5 100%)",
        borderRadius: "64px 64px 0 0",
        padding: "80px 24px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h2 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 500, color: "#fff", marginBottom: "16px", letterSpacing: "-2px" }}>
            Let's connect
          </h2>
          <p style={{ fontSize: "clamp(15px, 2vw, 18px)", color: "rgba(255,255,255,0.75)", marginBottom: "40px", maxWidth: "500px", lineHeight: 1.7 }}>
            Open to software engineering and AI/ML opportunities.
            Feel free to reach out — I would love to hear from you.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "start" }}>
            {/* Form */}
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={{
                  background: "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.35)",
                  borderRadius: "50px",
                  padding: "14px 24px",
                  color: "white",
                  fontSize: "15px",
                  outline: "none",
                }}
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  background: "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.35)",
                  borderRadius: "50px",
                  padding: "14px 24px",
                  color: "white",
                  fontSize: "15px",
                  outline: "none",
                }}
              />
              <textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                style={{
                  background: "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.35)",
                  borderRadius: "24px",
                  padding: "14px 24px",
                  color: "white",
                  fontSize: "15px",
                  outline: "none",
                  resize: "none",
                }}
              />
              <button
                type="submit"
                style={{
                  background: "#EBC8B5",
                  color: "#1A1A1A",
                  border: "none",
                  borderRadius: "50px",
                  padding: "16px 36px",
                  fontWeight: 700,
                  fontSize: "14px",
                  letterSpacing: "1.5px",
                  cursor: "pointer",
                  textTransform: "uppercase",
                }}
              >
                Send Message
              </button>
            </form>

            {/* Info cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { label: "Email", value: "asgorreaj@gmail.com", icon: "✉️" },
                { label: "Location", value: "Dhaka, Bangladesh", icon: "📍" },
                { label: "LinkedIn", value: "linkedin.com/in/asgordevai", icon: "💼" },
                { label: "GitHub", value: "github.com/Asgorreaj", icon: "⚡" },
                { label: "ResearchGate", value: "Md-Asgor-Hossain-Reaj", icon: "🔬" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    border: "1px solid rgba(255,255,255,0.25)",
                    borderRadius: "20px",
                    padding: "16px 20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                  }}
                >
                  <span style={{ fontSize: "20px" }}>{item.icon}</span>
                  <div>
                    <p style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", color: "rgba(255,255,255,0.55)", margin: "0 0 2px" }}>
                      {item.label}
                    </p>
                    <p style={{ fontSize: "14px", color: "white", fontWeight: 500, margin: 0 }}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}