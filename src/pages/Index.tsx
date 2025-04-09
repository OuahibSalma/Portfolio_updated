
import { useEffect, useState } from 'react';
import { Toaster } from "sonner";
import { Sun, Moon } from "lucide-react"; // Fixed capitalization for icon names
import { motion } from "framer-motion";
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import ExtraActivities from '../components/ExtraActivities';
import Quotes from '../components/Quotes';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Education from '../components/Education';
import { LanguageProvider } from '../context/LanguageContext';
import { ThemeProvider } from '../context/ThemeContext';

const Index = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Scroll reveal animation
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className={`min-h-screen flex ${theme === 'dark' ? 'dark' : ''}`}>
          <Toaster position="top-right" />
          <Navbar />
          <div className="flex-1 ml-16 md:ml-24 bg-gray-50 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
            <Hero />
            <About />
            <Education />
            <Projects />
            <Skills />
            <Experience />
            <ExtraActivities />
            <Quotes />
            <Contact />
            <Footer />
          </div>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Index;
