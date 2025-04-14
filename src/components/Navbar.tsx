
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Home, Info, GraduationCap, PanelLeft, 
  Cpu, Code, Activity, MessageSquare, Languages,
  Sun, Moon
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
    { name: t('navbar.home'), href: "#home", icon: Home },
    { name: t('navbar.about'), href: "#about", icon: Info },
    { name: t('navbar.education'), href: "#education", icon: GraduationCap },
    { name: t('navbar.projects'), href: "#projects", icon: PanelLeft },
    { name: t('navbar.skills'), href: "#skills", icon: Cpu },
    { name: t('navbar.experience'), href: "#experience", icon: Code },
    { name: t('navbar.activities'), href: "#activities", icon: Activity },
    { name: t('navbar.contact'), href: "#contact", icon: MessageSquare },
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
      <div className={`flex flex-col h-full justify-between py-4 px-2 bg-white dark:bg-gray-800 shadow-md ${
        mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      } transition-transform duration-300 md:translate-x-0 w-auto md:w-16 lg:w-48`}>
        
        <nav className="flex-1">
          <ul className="flex flex-col space-y-1 items-start">
            {navItems.map((item) => (
              <li key={item.name} className="w-full">
                <a 
                  href={item.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 py-2 px-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-gray-800 dark:text-white"
                >
                  <item.icon size={20} />
                  <span className="hidden md:hidden lg:inline-block">
                    {item.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-1 items-start px-2 mt-2">
          <button 
            onClick={handleLanguageToggle}
            className="flex items-center gap-2 w-full p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md text-gray-800 dark:text-white"
            title={language === 'fr' ? 'Switch to English' : 'Passer au français'}
          >
            <Languages size={20} />
            <span className="hidden lg:inline-block">
              {language === 'fr' ? 'EN' : 'FR'}
            </span>
          </button>
          
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 w-full p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md text-gray-800 dark:text-white"
            title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'dark' ? (
              <Sun size={20} />
            ) : (
              <Moon size={20} />
            )}
            <span className="hidden lg:inline-block">
              {theme === 'dark' ? t('navbar.theme.light') : t('navbar.theme.dark')}
            </span>
          </button>
        </div>
      </div>
      
      {/* Mobile menu button - only visible when closed */}
      {!mobileMenuOpen && (
        <button 
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white dark:bg-gray-800 shadow-md"
        >
          <div className="w-6 h-0.5 bg-gray-800 dark:bg-gray-200 mb-1.5"></div>
          <div className="w-6 h-0.5 bg-gray-800 dark:bg-gray-200 mb-1.5"></div>
          <div className="w-6 h-0.5 bg-gray-800 dark:bg-gray-200"></div>
        </button>
      )}
      
      {/* Mobile menu close button - only visible when open */}
      {mobileMenuOpen && (
        <button 
          onClick={() => setMobileMenuOpen(false)}
          className="md:hidden fixed top-4 right-4 z-50 p-2 rounded-md bg-white dark:bg-gray-800 shadow-md"
        >
          <div className="w-6 h-0.5 bg-gray-800 dark:bg-gray-200 transform rotate-45 absolute"></div>
          <div className="w-6 h-0.5 bg-gray-800 dark:bg-gray-200 transform -rotate-45 absolute"></div>
        </button>
      )}
    </motion.header>
  );
};

export default Navbar;
