
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Home, Info, GraduationCap, PanelLeft, 
  Cpu, Code, Activity, MessageSquare, Languages
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
    { name: t('navbar.about'), href: "#about", icon: <Info size={20} /> },
    { name: t('navbar.education'), href: "#education", icon: <GraduationCap size={20} /> },
    { name: t('navbar.projects'), href: "#projects", icon: <PanelLeft size={20} /> },
    { name: t('navbar.skills'), href: "#skills", icon: <Cpu size={20} /> },
    { name: t('navbar.experience'), href: "#experience", icon: <Code size={20} /> },
    { name: t('navbar.activities'), href: "#activities", icon: <Activity size={20} /> },
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
            <motion.div 
              className="h-16 w-16 rounded-full bg-pink-200 flex items-center justify-center text-xl font-script"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              OS
            </motion.div>
          </a>
          <span className="hidden md:block text-xl font-semibold text-gray-800 dark:text-white mb-8">Ouahib Salma</span>
        </div>

        {/* Navigation */}
        <nav className="flex-grow">
          <ul className="flex flex-col space-y-6 items-start">
            {navItems.map((item) => (
              <li key={item.name} className="w-full">
                <a 
                  href={item.href} 
                  className="flex flex-row items-center group px-2 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 w-full"
                >
                  <div className="w-8 h-8 flex items-center justify-center rounded-full text-black dark:text-white">
                    {item.icon}
                  </div>
                  <span className="ml-3 text-base font-medium text-black dark:text-white">
                    {item.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Language Toggle Button */}
        <div className="mt-4">
          <button 
            onClick={handleLanguageToggle}
            className="flex items-center bg-white dark:bg-gray-700 px-3 py-2 rounded-full shadow-sm w-full"
          >
            <Languages size={18} className="mr-2" />
            <span className="font-medium">
              {language === 'fr' ? 'Anglais' : 'Français'}
            </span>
          </button>
        </div>

        {/* Social Links (optional) */}
        <div className="flex justify-center space-x-4 mt-6">
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
