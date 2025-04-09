
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

const Index = () => {
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
    <div className="min-h-screen flex">
      <Toaster position="top-right" />
      <Navbar />
      <div className="flex-1 ml-16 md:ml-24">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <ExtraActivities />
        <Quotes />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
