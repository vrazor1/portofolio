import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "nav-blur border-b border-dark-tertiary" : ""
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="font-bold text-xl gradient-text">Loai Aldaghma</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="hover:text-accent-blue transition-colors duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="hover:text-accent-blue transition-colors duration-300"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="hover:text-accent-blue transition-colors duration-300"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-accent-blue transition-colors duration-300"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 space-y-4 bg-dark-secondary rounded-lg">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left px-4 py-2 hover:text-accent-blue transition-colors duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="block w-full text-left px-4 py-2 hover:text-accent-blue transition-colors duration-300"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="block w-full text-left px-4 py-2 hover:text-accent-blue transition-colors duration-300"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-4 py-2 hover:text-accent-blue transition-colors duration-300"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}