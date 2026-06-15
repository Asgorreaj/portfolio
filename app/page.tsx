import About from "./components/About";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="bg-gray-900 text-white flex flex-col">
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold mb-4">
          Hi, I'm Asgor
        </h1>
        <p className="text-xl text-gray-400">
          Software Engineer & AI Researcher
        </p>
      </div>
      <About />
    </main>
  );
}