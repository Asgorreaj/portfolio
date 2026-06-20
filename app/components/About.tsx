"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-8 border-t border-slate-800">
      <motion.div
        className="max-w-3xl text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-slate-100 mb-6">About Me</h2>
        <p className="text-slate-400 text-lg leading-relaxed">
          I'm a Software Engineer & AI Researcher based in Dhaka, Bangladesh.
          I work with .NET Core, React, and Machine Learning — building systems
          that are both practical and intelligent.
        </p>
      </motion.div>
    </section>
  );
}