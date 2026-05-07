import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
  { name: "About", path: "#about" },
  { name: "Experience", path: "#experience" },
  { name: "Skills", path: "#skills" },
  { name: "Projects", path: "#projects" },
  { name: "Achievements", path: "#achievements" },
  { name: "Contact", path: "#contact" },
];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-white tracking-wide">
          Jagrit Bharara
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-zinc-300">
    {navLinks.map((link) => (
        <a
        key={link.name}
        href={link.path}
        className="hover:text-white transition duration-300"
        >
        {link.name}
        </a>
    ))}
     </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-white/10">
          <ul className="flex flex-col items-center py-6 gap-6 text-zinc-300">
  {navLinks.map((link) => (
    <a
      key={link.name}
      href={link.path}
      onClick={() => setIsOpen(false)}
      className="hover:text-white transition duration-300"
    >
      {link.name}
    </a>
  ))}
</ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;