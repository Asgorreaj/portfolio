import Navbar from "./components/Navbar";
import About from "./components/About";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="bg-gray-900 text-white flex flex-col">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}0