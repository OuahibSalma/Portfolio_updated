
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-blue-100 rounded-full blur-3xl opacity-20 transform translate-x-1/3 -translate-y-1/2"></div>
        <div className="absolute left-0 bottom-0 w-1/3 h-1/3 bg-purple-100 rounded-full blur-3xl opacity-20 transform -translate-x-1/3 translate-y-1/2"></div>
      </div>
      
      <div className={`container mx-auto px-6 text-center z-10 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          Bonjour, je suis <span className="text-blue-600">Votre Nom</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10">
          Développeur Web passionné par la création d'expériences web interactives et modernes
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <a href="#projects">Voir mes projets</a>
          </Button>
          <Button size="lg" variant="outline">
            <a href="#contact">Me contacter</a>
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-400 flex flex-col items-center">
          <span className="mb-2">Scroll</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
