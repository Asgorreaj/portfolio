import Navbar from "./components/Navbar";
import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Publications from "./components/Publications";


export default function Home() {
  return (
    <main className="bg-gray-900 text-white flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Publications />
    </main>
  );
}0