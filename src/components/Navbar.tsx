
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, User, Briefcase, Code, Puzzle, GraduationCap, Heart, MessageSquare, Languages } from "lucide-react";

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

  const navItems = [
    { name: "Accueil", href: "#home", icon: <Home size={20} /> },
    { name: "À Propos", href: "#about", icon: <User size={20} /> },
    { name: "Projets", href: "#projects", icon: <Puzzle size={20} /> },
    { name: "Compétences", href: "#skills", icon: <Code size={20} /> },
    { name: "Expérience Pro", href: "#experience", icon: <Briefcase size={20} /> },
    { name: "Formation", href: "#education", icon: <GraduationCap size={20} /> },
    { name: "Activités Extra", href: "#activities", icon: <Heart size={20} /> },
    { name: "Contact", href: "#contact", icon: <MessageSquare size={20} /> },
    { name: "Français", href: "#fr", icon: <Languages size={20} /> },
  ];

  return (
    <motion.header
      className={`fixed h-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col h-full justify-between py-6 px-3 md:px-4">
        {/* Logo Section */}
        <div className="flex flex-col items-center justify-center">
          <a href="#home" className="mb-8">
            <motion.img 
              src="public/lovable-uploads/01b75ab7-746d-409c-adf5-33d4de8e01a6.png" 
              alt="OS Logo" 
              className="h-16 w-auto"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            />
          </a>
          <span className="hidden md:block text-xl font-semibold text-gray-800 mb-8">Ouahib Salma</span>
        </div>

        {/* Navigation */}
        <nav className="flex-grow">
          <ul className="flex flex-col space-y-6 items-center">
            {navItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href} 
                  className="flex flex-col md:flex-row items-center group"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <span className="hidden md:block md:ml-3 text-sm text-gray-700 group-hover:text-purple-600 transition-all duration-300">
                    {item.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Links */}
        <div className="flex flex-col space-y-4 items-center pt-4">
          <a href="https://github.com/OuahibSalma" className="text-gray-600 hover:text-black transition-colors">
            <i className="fa-brands fa-github text-xl"></i>
          </a>
          <a href="https://www.linkedin.com/in/salma-ouahib-140b13242/" className="text-gray-600 hover:text-black transition-colors">
            <i className="fa-brands fa-linkedin text-xl"></i>
          </a>
          <a href="mailto:salmaouahib02@gmail.com" className="text-gray-600 hover:text-black transition-colors">
            <i className="fa-solid fa-envelope text-xl"></i>
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
