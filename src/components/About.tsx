
import { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">À Propos de Moi</h2>
        
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center reveal">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800"
              alt="Profile"
              className="w-full h-auto"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4">Qui suis-je?</h3>
            <p className="text-gray-600 mb-6">
              Je suis un développeur web passionné par la création d'expériences numériques 
              attrayantes et fonctionnelles. Avec plusieurs années d'expérience dans le 
              développement web, je me spécialise dans HTML, CSS, JavaScript et diverses 
              technologies modernes.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4">Mes compétences</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">HTML & CSS</h4>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-blue-600 rounded-full w-[95%]"></div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">JavaScript</h4>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-blue-600 rounded-full w-[85%]"></div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">React</h4>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-blue-600 rounded-full w-[80%]"></div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">UX/UI Design</h4>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-blue-600 rounded-full w-[75%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
