
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Home, Info, GraduationCap, PanelLeft, 
  Cpu, Code, Activity, MessageSquare, Languages,
  Moon, Sun
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

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
    { name: t('navbar.home'), href: "#home", icon: <Home size={18} /> },
    { name: t('navbar.about'), href: "#about", icon: <Info size={18} /> },
    { name: t('navbar.education'), href: "#education", icon: <GraduationCap size={18} /> },
    { name: t('navbar.projects'), href: "#projects", icon: <PanelLeft size={18} /> },
    { name: t('navbar.skills'), href: "#skills", icon: <Cpu size={18} /> },
    { name: t('navbar.experience'), href: "#experience", icon: <Code size={18} /> },
    { name: t('navbar.activities'), href: "#activities", icon: <Activity size={18} /> },
    { name: t('navbar.contact'), href: "#contact", icon: <MessageSquare size={18} /> },
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
      <div className={`flex flex-col h-full justify-between py-4 px-3 bg-white dark:bg-gray-800 shadow-md ${
        mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      } transition-transform duration-300 md:translate-x-0 w-16 md:w-16`}>
        
        {/* Navigation */}
        <nav className="flex-1">
          <ul className="flex flex-col space-y-4 items-center">
            {navItems.map((item) => (
              <li key={item.name} className="w-full">
                <a 
                  href={item.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex flex-col items-center justify-center group py-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 w-full"
                  title={item.name}
                >
                  <div className="text-gray-800 dark:text-white">
                    {item.icon}
                  </div>
                  <span className="text-xs mt-1 font-medium text-gray-800 dark:text-white text-center">
                    {item.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Theme and Language Toggles */}
        <div className="flex flex-col gap-3 items-center mt-2">
          {/* Language Toggle */}
          <button 
            onClick={handleLanguageToggle}
            className="flex flex-col items-center justify-center w-full p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md text-gray-800 dark:text-white"
            title={language === 'fr' ? 'Switch to English' : 'Passer au français'}
          >
            <Languages size={18} />
            <span className="text-xs mt-1">
              {language === 'fr' ? 'EN' : 'FR'}
            </span>
          </button>
          
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="flex flex-col items-center justify-center w-full p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md text-gray-800 dark:text-white"
            title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'dark' ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
            <span className="text-xs mt-1">
              {theme === 'dark' ? t('navbar.theme.light') : t('navbar.theme.dark')}
            </span>
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
