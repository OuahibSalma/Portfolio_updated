
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, changeLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const isMobile = useIsMobile();

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
    { name: t('navbar.home'), href: "#home", icon: "fa-solid fa-house-chimney" },
    { name: t('navbar.about'), href: "#about", icon: "fa-solid fa-circle-info" },
    { name: t('navbar.education'), href: "#education", icon: "fa-solid fa-graduation-cap" },
    { name: t('navbar.projects'), href: "#projects", icon: "fa-solid fa-diagram-project" },
    { name: t('navbar.skills'), href: "#skills", icon: "fa-solid fa-keyboard" },
    { name: t('navbar.experience'), href: "#experience", icon: "fa-solid fa-code" },
    { name: t('navbar.activities'), href: "#activities", icon: "fa-solid fa-network-wired" },
    { name: t('navbar.contact'), href: "#contact", icon: "fa-solid fa-comment" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 z-50 h-full transition-all duration-300 ${
        scrolled ? "bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Mobile menu toggle button - only visible on small screens */}
      <button 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white dark:bg-gray-800 shadow-md"
      >
        <div className="w-6 h-0.5 bg-gray-800 dark:bg-gray-200 mb-1.5"></div>
        <div className="w-6 h-0.5 bg-gray-800 dark:bg-gray-200 mb-1.5"></div>
        <div className="w-6 h-0.5 bg-gray-800 dark:bg-gray-200"></div>
      </button>
      
      {/* Sidebar - visible on all screens but adapts for mobile */}
      <div className={`sidebar flex flex-col h-full justify-between py-6 px-3 md:px-4 bg-white dark:bg-gray-800 shadow-md ${
        mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      } transition-transform duration-300 md:translate-x-0 w-16 md:w-20 lg:w-24`}>
        {/* Logo Section */}
        <div className="flex flex-col items-center justify-center">
          <a href="#home" className="mb-4">
            <motion.div 
              className="h-14 w-14 rounded-full flex items-center justify-center text-xl font-script overflow-hidden"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <img src="/lovable-uploads/logo.png" alt="Logo" className="w-full h-full object-cover" />
            </motion.div>
          </a>
        </div>

        {/* Navigation */}
        <nav className="flex-grow">
          <ul className="flex flex-col space-y-6 items-center">
            {navItems.map((item, index) => (
              <li key={item.name} className="w-full" style={{ "--t": `${(index + 1) * 10}%` } as React.CSSProperties}>
                <a 
                  href={item.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex flex-col items-center justify-center group px-2 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 w-full"
                  title={item.name}
                >
                  <div className="w-8 h-8 flex items-center justify-center rounded-full text-gray-800 dark:text-white">
                    <i className={item.icon}></i>
                  </div>
                  {!isMobile && (
                    <span className="text-xs mt-1 font-medium text-gray-800 dark:text-white text-center">
                      {item.name}
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Theme and Language Toggles */}
        <div className="flex flex-col gap-4 items-center">
          {/* Language Toggle */}
          <div className="w-full">
            <Button 
              onClick={handleLanguageToggle}
              variant="ghost"
              className="flex items-center justify-center w-full p-1"
              size="sm"
            >
              <i className="fas fa-language mr-1"></i>
              {!isMobile ? (
                <span className="text-xs">
                  {language === 'fr' ? t('navbar.english') : t('navbar.french')}
                </span>
              ) : (
                <i className="fas fa-language"></i>
              )}
            </Button>
          </div>
          
          {/* Theme Toggle */}
          <div className="flex justify-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full"
            >
              {theme === 'dark' ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-3 mt-2">
            <a href="https://github.com/OuahibSalma" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
              <i className="fa-brands fa-github text-lg"></i>
            </a>
            <a href="https://www.linkedin.com/in/salma-ouahib-140b13242/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
              <i className="fa-brands fa-linkedin text-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
