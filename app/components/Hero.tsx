"use client";
import { motion } from "framer-motion";
import TypingText from "./TypingText";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
      <motion.div
        className="mb-4 px-4 py-1 rounded-full border border-indigo-500/40 bg-indigo-500/10 text-indigo-400 text-xs tracking-widest"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Available for opportunities
      </motion.div>

      <motion.h1
        className="text-2xl text-indigo-400 mb-2 font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <TypingText text="Hi, I'm Asgor 👋" />
      </motion.h1>
      
      

      <motion.h1
        className="text-5xl font-bold text-slate-100 mb-4 leading-tight"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        Software Engineer<br />& <span className="text-indigo-400">AI Researcher</span>
      </motion.h1>

      <motion.p
        className="text-slate-400 text-lg mb-8 max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Building intelligent systems with .NET Core, React, and Machine Learning — from Dhaka, Bangladesh.
      </motion.p>

      <motion.div
        className="flex gap-3 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <a href="#projects" className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2.5 rounded-lg text-sm transition">
          View Projects
        </a>
        <a href="#contact" className="border border-indigo-500/40 text-indigo-400 hover:bg-indigo-500/10 px-6 py-2.5 rounded-lg text-sm transition">
          Contact Me
        </a>
      </motion.div>

      <motion.div
        className="flex flex-wrap gap-2 justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        {[".NET Core", "Next.js", "Python / ML", "MSSQL", "IEEE Published"].map((tag) => (
          <span key={tag} className="text-xs text-slate-500 border border-slate-700 px-3 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </motion.div>
    </section>
  );
}