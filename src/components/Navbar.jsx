import { useState } from "react";
import { Menu, X } from "lucide-react";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["about", "skills", "projects", "experience", "contact"];
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/70 backdrop-blur-xl">
      <nav className="w-full px-6 md:px-10 py-4 flex items-center justify-between">
        <a
          href=""
          className="text-xl md:text-2xl font-bold tracking-tight bg-linear-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent"
        >
          BK
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((i) => (
            <a
              key={i}
              href={"#" + i}
              className="capitalize text-zinc-300 hover:text-white transition"
            >
              {i}
            </a>
          ))}
          {/* <a
            href="/resume.pdf"
            className="px-5 py-2 rounded-xl bg-white text-black font-medium hover:scale-105 transition"
          >
            Resume
          </a> */}
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-xl bg-zinc-900 border border-zinc-800"
          aria-label="menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden px-6 pb-5 space-y-3 border-t border-zinc-800 bg-zinc-950/95">
          {links.map((i) => (
            <a
              key={i}
              href={"#" + i}
              onClick={() => setOpen(false)}
              className="block capitalize py-2 text-zinc-300"
            >
              {i}
            </a>
          ))}
          {/* <a
            href="/resume.pdf"
            className="block text-center mt-3 px-5 py-3 rounded-xl bg-white text-black font-medium"
          >
            Resume
          </a> */}
        </div>
      )}
    </header>
  );
}
