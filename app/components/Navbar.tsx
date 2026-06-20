export default function Navbar() {
  return (
          <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur border-b border-indigo-500/20 px-4 md:px-8 py-4 flex justify-between items-center z-50">
            <span className="text-indigo-400 font-bold text-lg md:text-xl tracking-widest">ASGOR</span>
            <div className="flex gap-3 md:gap-6">
              <a href="#" className="text-slate-400 hover:text-indigo-400 transition text-xs md:text-sm">Home</a>
              <a href="#about" className="text-slate-400 hover:text-indigo-400 transition text-xs md:text-sm">About</a>
              <a href="#projects" className="text-slate-400 hover:text-indigo-400 transition text-xs md:text-sm">Projects</a>
              <a href="#publications" className="text-slate-400 hover:text-indigo-400 transition text-xs md:text-sm">Research</a>
              <a href="#contact" className="text-slate-400 hover:text-indigo-400 transition text-xs md:text-sm">Contact</a>
            </div>
          </nav>
  );
}