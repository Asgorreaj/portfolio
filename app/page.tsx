import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import About from "./components/About";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Publications from "./components/Publications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Volunteering from "./components/Volunteering";

export default function Home() {
  return (
    <main style={{ background: "#F3EDE3" }}>
      <Navbar />
      <Hero />
      {/* <About /> */}
      <Education />
      <WorkExperience />
      <Projects />
      <Skills />
      <Publications />
      <Volunteering/>
      <Contact />
      <Footer />
    </main>
  );
}