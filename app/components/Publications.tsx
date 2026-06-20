"use client";

import { motion } from "framer-motion";

type Publication = {
  title: string;
  venue: string;
  year: string;
  doi: string;
  status?: string;
};

const publications: Publication[] = [
  {
    title: "Gender Bias in Low-Resource Bengali",
    venue: "ICON-SONICS",
    year: "2025",
    doi: "10.1109/ICON-SONICS67145.2025.11309238",
  },
  {
    title: "Federated Learning in Health Care Technology",
    venue: "Springer",
    year: "2025",
    doi: "10.1007/978-981-96-8353-6_1",
  },
  {
    title: "Financial Sentiment Analysis using BERT",
    venue: "Preprint",
    year: "2025",
    doi: "10.21203/rs.3.rs-7786713/v1",
  },
  {
    title: "A Systematic Review of Metaverse Environment",
    venue: "Journal Article",
    year: "2024",
    doi: "10.22105/metaverse.v1i1.17",
  },
  {
    title: "Metaverse: Fission the Architecture",
    venue: "IJSRA",
    year: "2024",
    doi: "10.30574/ijsra.2024.12.1.0808",
  },
  {
    title: "Federated Learning: Architectures, Hardware, Network Protocols, Tasks and Problems",
    venue: "Under Review",
    year: "2026",
    doi: "",
    status: "Under Review",
  },
];

export default function Publications() {
  return (
    <section id="publications" className="min-h-[70vh] md:min-h-screen px-8 py-20 border-t border-slate-800">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-slate-100 mb-3">Research & Publications</h2>
        <p className="text-slate-400">Published work in IEEE, Springer, and peer-reviewed journals</p>
      </motion.div>

      <div className="max-w-3xl mx-auto flex flex-col gap-4">
        {publications.map((pub, index) => (
          <motion.a
            key={pub.title}
            href={pub.doi ? `https://doi.org/${pub.doi}` : "https://www.researchgate.net/profile/Md-Asgor-Hossain-Reaj"}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800/50 border border-indigo-500/20 rounded-xl p-5 hover:border-indigo-500/50 transition flex justify-between items-start gap-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div>
              <h3 className="text-slate-100 font-semibold mb-1">{pub.title}</h3>
              <p className="text-sm text-slate-400">
                {pub.venue} · {pub.year}
              </p>
            </div>
            <span className={`text-xs px-3 py-1 rounded-full whitespace-nowrap ${
              pub.status
                ? "bg-amber-500/10 text-amber-400 border border-amber-500/30"
                : "bg-indigo-500/10 text-indigo-400 border border-indigo-500/30"
            }`}>
              {pub.status || "Published"}
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}