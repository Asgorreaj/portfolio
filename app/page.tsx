import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <Navbar />
      <div className="text-center">
        
        <h1 className="text-5xl font-bold mb-4">
          Hi, I'm Asgor
        </h1>
        <p className="text-xl text-gray-400">
          Software Engineer & AI Researcher
        </p>
      </div>
    </main>
  );
}