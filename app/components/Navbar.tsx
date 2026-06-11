export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-900 border-b border-gray-700 px-8 py-4 flex justify-between items-center">
      <span className="text-white font-bold text-xl">Asgor</span>
      <div className="flex gap-6">
        <a href="#about" className="text-gray-400 hover:text-white transition">About</a>
        <a href="#projects" className="text-gray-400 hover:text-white transition">Projects</a>
        <a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a>
      </div>
    </nav>
  );
}