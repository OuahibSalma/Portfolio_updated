
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Home, User, Briefcase, Code, Puzzle, GraduationCap, 
  Heart, MessageSquare, Languages, Sun, Moon
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { language, changeLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

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

  const handleLanguageToggle = () => {
    changeLanguage(language === 'fr' ? 'en' : 'fr');
  };

  const navItems = [
    { name: t('navbar.home'), href: "#home", icon: <Home size={20} /> },
    { name: t('navbar.about'), href: "#about", icon: <User size={20} /> },
    { name: t('navbar.education'), href: "#education", icon: <GraduationCap size={20} /> },
    { name: t('navbar.projects'), href: "#projects", icon: <Puzzle size={20} /> },
    { name: t('navbar.skills'), href: "#skills", icon: <Code size={20} /> },
    { name: t('navbar.experience'), href: "#experience", icon: <Briefcase size={20} /> },
    { name: t('navbar.activities'), href: "#activities", icon: <Heart size={20} /> },
    { name: t('navbar.contact'), href: "#contact", icon: <MessageSquare size={20} /> },
  ];

  return (
    <motion.header
      className={`fixed h-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col h-full justify-between py-6 px-3 md:px-4 bg-white dark:bg-gray-800 shadow-md">
        {/* Logo Section */}
        <div className="flex flex-col items-center justify-center">
          <a href="#home" className="mb-4">
            <motion.img 
              src="/public/lovable-uploads/01b75ab7-746d-409c-adf5-33d4de8e01a6.png"
              alt="OS Logo" 
              className="h-16 w-auto rounded-full bg-white p-2"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            />
          </a>
          <span className="hidden md:block text-xl font-semibold text-gray-800 dark:text-white mb-8">Ouahib Salma</span>
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
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <span className="hidden md:block md:ml-3 text-sm text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-all duration-300">
                    {item.name}
                  </span>
                </a>
              </li>
            ))}
            
            {/* Language Toggle */}
            <li>
              <button 
                onClick={handleLanguageToggle}
                className="flex flex-col md:flex-row items-center group"
                title={language === 'fr' ? 'Switch to English' : 'Passer au Français'}
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-600 hover:text-white transition-all duration-300">
                  <Languages size={20} />
                </div>
                <span className="hidden md:block md:ml-3 text-sm text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-300">
                  {language === 'fr' ? 'English' : 'Français'}
                </span>
              </button>
            </li>
            
            {/* Theme Toggle */}
            <li>
              <button 
                onClick={toggleTheme}
                className="flex flex-col md:flex-row items-center group"
                title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-900 dark:text-amber-300 hover:bg-amber-600 hover:text-white transition-all duration-300">
                  {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                </div>
                <span className="hidden md:block md:ml-3 text-sm text-gray-700 dark:text-gray-300 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-all duration-300">
                  {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                </span>
              </button>
            </li>
          </ul>
        </nav>

        {/* Social Links */}
        <div className="flex flex-col space-y-4 items-center pt-4">
          <a href="https://github.com/OuahibSalma" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
            <i className="fa-brands fa-github text-xl"></i>
          </a>
          <a href="https://www.linkedin.com/in/salma-ouahib-140b13242/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
            <i className="fa-brands fa-linkedin text-xl"></i>
          </a>
          <a href="mailto:salmaouahib02@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
            <i className="fa-solid fa-envelope text-xl"></i>
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
