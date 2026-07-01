"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const STATS = [
  { val: "6", label: "Research Papers", sub: "IEEE, Springer, Preprint" },
  { val: "2+", label: "Years Experience", sub: "DataSoft, GOPLEXN" },
  { val: "10+", label: "Projects Built", sub: ".NET, React, Python" },
];

const SOCIAL_LINKS = [
  {
    href: "https://linkedin.com/in/asgordevai",
    label: "LinkedIn",
    pathData:
      "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
  },
  {
    href: "https://github.com/Asgorreaj",
    label: "GitHub",
    pathData:
      "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4M9 18c-4.51 2-5-2-7-2",
  },
];

function SocialIcon({
  href,
  label,
  pathData,
}: {
  href: string;
  label: string;
  pathData: string;
}) {
  const linkProps =
    label === "Email"
      ? { href }
      : { href, target: "_blank", rel: "noopener noreferrer" };

  return (
    <a
      {...linkProps}
      aria-label={label}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "52px",
        height: "52px",
        borderRadius: "50%",
        border: "2px solid rgba(255,255,255,0.4)",
        background: "rgb(246, 199, 178)",
        color: "rgba(0,0,0,0.85)",
        textDecoration: "none",
        transition: "background 0.2s",
      }}
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={pathData} />
      </svg>
    </a>
  );
}

function EmailIcon() {
  return (
    <a
      href="mailto:asgorreaj@gmail.com"
      aria-label="Email"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "52px",
        height: "52px",
        borderRadius: "50%",
        border: "2px solid rgba(255,255,255,0.4)",
        background: "rgb(246, 199, 178)",
        color: "rgba(0,0,0,0.85)",
        textDecoration: "none",
      }}
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    </a>
  );
}

function DownloadCvButton() {
  return (
    <a
      href="/cv.pdf"
      download
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        background: "rgb(246, 199, 178)",
        color: "rgb(26, 26, 26)",
        borderRadius: "50px",
        padding: "20px 45px",
        fontWeight: 700,
        fontSize: "clamp(13px, 1vw, 18px)",
        letterSpacing: "1.5px",
        textDecoration: "none",
        border: "none",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 15V3" />
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <path d="m7 10 5 5 5-5" />
      </svg>
      DOWNLOAD MY CV
    </a>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        paddingTop: "120px",
        paddingBottom: "60px",
        background:
          "linear-gradient(135deg, #0FA6C7 0%, #89C4CF 45%, #C4A090 78%, #EBC8B5 100%)",
      }}
    >
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "0 32px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "flex-end",
            marginBottom: "48px",
          }}
        >
          {/* LEFT: Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ textAlign: "left" }}
          >
            {/* Name — large, bold, dark like Yasir's design */}
            <h1
              style={{
                fontSize: "clamp(40px, 5vw, 68px)",
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.08,
                margin: "0 0 6px",
                letterSpacing: "-1.5px",
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              }}
            >
              Md. Asgor
              <br />
              Hossain Reaj
            </h1>

            {/* Title — slightly lighter weight like Yasir */}
            <h2
              style={{
                fontSize: "clamp(18px, 2.2vw, 30px)",
                fontWeight: 400,
                color: "#ffffff",
                lineHeight: 1.3,
                margin: "0 0 20px",
                letterSpacing: "-0.5px",
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              }}
            >
              Software Engineer
              <br />
              and AI Researcher
            </h2>

            {/* Body paragraphs */}
            <p
              style={{
                color: "rgba(255,255,255,0.9)",
                fontSize: "clamp(13px, 1.3vw, 17px)",
                lineHeight: 1.7,
                margin: "0 0 10px",
                maxWidth: "480px",
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              }}
            >
              Software Engineer specializing in{" "}
              <strong>.NET Core and React</strong>,{" "}
              <strong>Machine Learning</strong>, and{" "}
              <strong>NLP research</strong>. I design and build scalable,
              enterprise-grade systems that transform complex requirements into
              high-performance, production solutions.
            </p>
            <p
              style={{
                color: "rgba(255,255,255,0.9)",
                fontSize: "clamp(13px, 1.3vw, 17px)",
                lineHeight: 1.7,
                margin: "0 0 32px",
                maxWidth: "480px",
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              }}
            >
              Published <strong>6 research papers</strong> in IEEE, Springer,
              and peer-reviewed journals, from Federated Learning to Gender Bias
              in NLP.
            </p>

            {/* CTA Row */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              <DownloadCvButton />
              <div style={{ display: "flex", gap: "8px" }}>
                {SOCIAL_LINKS.map((item) => (
                  <SocialIcon
                    key={item.label}
                    href={item.href}
                    label={item.label}
                    pathData={item.pathData}
                  />
                ))}
                <EmailIcon />
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Hero image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <Image
              src="/hero.png"
              alt="Md. Asgor Hossain Reaj"
              width={480}
              height={520}
              style={{
                objectFit: "contain",
                objectPosition: "bottom",
                maxWidth: "100%",
                height: "auto",
              }}
              priority
            />
          </motion.div>
        </div>

        {/* Stats bar — same pill shape, slightly muted styling like Yasir */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background: "rgba(245,238,228,0.92)",
            borderRadius: "98px",
            padding: "28px 48px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                padding: "12px 32px",
                borderRight: i < 2 ? "1.5px dashed #C8B89A" : "none",
              }}
            >
              <h2
                style={{
                  fontSize: "clamp(30px, 3.5vw, 46px)",
                  fontWeight: 800,
                  color: "#111",
                  margin: "0 0 4px",
                  letterSpacing: "-1px",
                  lineHeight: 1,
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                }}
              >
                {s.val}
              </h2>
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: 600,
                  color: "#999",
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  marginBottom: "6px",
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                }}
              >
                {s.label}
              </span>
              <p
                style={{
                  fontSize: "12px",
                  color: "#666",
                  lineHeight: 1.5,
                  margin: 0,
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                }}
              >
                {s.sub}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}