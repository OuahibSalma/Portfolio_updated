
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="flex items-center">
          <img 
            src="public/lovable-uploads/01b75ab7-746d-409c-adf5-33d4de8e01a6.png" 
            alt="OS Logo" 
            className="h-10 w-auto mr-2"
          />
          <span className="text-xl font-semibold text-gray-800">Ouahib Salma</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="navbar-link">Accueil</a>
          <a href="#about" className="navbar-link">À Propos</a>
          <a href="#projects" className="navbar-link">Projets</a>
          <a href="#skills" className="navbar-link">Compétences</a>
          <a href="#experience" className="navbar-link">Expérience</a>
          <a href="#contact" className="navbar-link">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {!mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            <a href="#home" className="text-gray-700 hover:text-black" onClick={() => setMobileMenuOpen(false)}>Accueil</a>
            <a href="#about" className="text-gray-700 hover:text-black" onClick={() => setMobileMenuOpen(false)}>À Propos</a>
            <a href="#projects" className="text-gray-700 hover:text-black" onClick={() => setMobileMenuOpen(false)}>Projets</a>
            <a href="#skills" className="text-gray-700 hover:text-black" onClick={() => setMobileMenuOpen(false)}>Compétences</a>
            <a href="#experience" className="text-gray-700 hover:text-black" onClick={() => setMobileMenuOpen(false)}>Expérience</a>
            <a href="#contact" className="text-gray-700 hover:text-black" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
