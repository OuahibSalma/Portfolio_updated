
import { useEffect } from 'react';
import { Toaster } from "sonner";
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
import { useIsMobile } from '@/hooks/use-mobile';
import emailjs from 'emailjs-com';

const Index = () => {
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Initialize EmailJS
    emailjs.init("2aE8Jn9MjIh4c1-Xb");
    
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
        <div className="min-h-screen flex dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
          <Toaster position="top-right" />
          <Navbar />
          <div className={`flex-1 ${isMobile ? 'ml-16 pt-4' : 'ml-16 lg:ml-48'} bg-gray-50 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300`}>
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
