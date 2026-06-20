"use client";

import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  tech: string[];
  type: "live" | "video" | "code";
  githubUrl: string;
  liveUrl?: string;
  videoUrl?: string;
};

const projects: Project[] = [
  {
    title: "Donation & Charity Platform",
    description: "Full-stack donation platform with PHP backend and TypeScript frontend, enabling secure donation tracking.",
    tech: ["PHP", "TypeScript", "Docker"],
    type: "code",
    githubUrl: "https://github.com/Asgorreaj/Donation_Full_Project",
  },
  {
    title: "Tour & Travel Booking System",
    description: "Complete booking platform with search, reservation, and payment flow for tour packages.",
    tech: ["Booking System", "Payment Integration"],
    type: "video",
    githubUrl: "https://github.com/Asgorreaj/TourAndTravel",
    videoUrl: "/videos/tour-demo.mp4",
  },
  {
    title: "Sneakers Shop API",
    description: "E-commerce backend API for a sneakers store, handling products, orders, and inventory.",
    tech: ["NestJS", "TypeScript", "REST API"],
    type: "code",
    githubUrl: "https://github.com/Asgorreaj/Sneakers_Shop_NestJS_Backend_project_",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-8 py-20 border-t border-slate-800">
      <motion.h2
        className="text-4xl font-bold text-slate-100 text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        Featured Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="bg-slate-800/50 border border-indigo-500/20 rounded-xl p-6 hover:border-indigo-500/50 transition group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <h3 className="text-xl font-semibold text-slate-100 mb-2">
              {project.title}
            </h3>
            <p className="text-slate-400 text-sm mb-4 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <span key={t} className="text-xs text-indigo-400 border border-indigo-500/30 px-2 py-0.5 rounded-full">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-300 hover:text-indigo-400 transition"
              >
                GitHub →
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-green-400 hover:text-green-300 transition"
                >
                  Live Demo →
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}