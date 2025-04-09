
import React, { useRef, useEffect } from "react";
import { ChartContainer } from "@/components/ui/chart";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal", "active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const aboutElement = aboutRef.current;
    if (aboutElement) {
      observer.observe(aboutElement);
    }

    return () => {
      if (aboutElement) {
        observer.unobserve(aboutElement);
      }
    };
  }, []);

  // Compétences linguistiques data
  const data = [
    { name: "Français", value: 95 },
    { name: "Anglais", value: 80 },
    { name: "Arabe", value: 100 }
  ];
  
  const COLORS = ["#8b5cf6", "#6366f1", "#ec4899"];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto" ref={aboutRef}>
        <h2 className="text-3xl font-bold text-center mb-12">À Propos de Moi</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Qui suis-je</h3>
              <p className="text-gray-700 mb-4">
                Je m'appelle Ouahib Salma, étudiante en deuxième année d'ingénierie à l'École Nationale Supérieure d'Informatique et d'Analyse des Systèmes (ENSIAS), filière Business Intelligence and Data Analytics. J'ai obtenu une licence en Sciences Mathématiques et Informatique (SMI) à la Faculté des Sciences Semlalia Marrakech (FSSM).
              </p>
              <p className="text-gray-700">
                Passionnée par l'ingénierie, la Data Analytics, la Business Intelligence, le Data Engineering et l'Analytics, ma mission est de transformer les données brutes en chefs-d'œuvre stratégiques permettant de prendre des décisions informées et de créer une valeur ajoutée au sein d'une entreprise.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Informations Personnelles</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-500 text-sm">Date de naissance</p>
                  <p className="font-medium">22/02/2003</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Ville d'origine</p>
                  <p className="font-medium">Marrakech</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Ville actuelle</p>
                  <p className="font-medium">Rabat</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Email</p>
                  <p className="font-medium">salmaouahib02@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm h-full">
              <h3 className="text-xl font-semibold mb-6 text-purple-600">Compétences Linguistiques</h3>
              <div className="h-64">
                <ChartContainer className="w-full h-full" config={{ 
                  français: { label: "Français", color: "#8b5cf6" },
                  anglais: { label: "Anglais", color: "#6366f1" },
                  arabe: { label: "Arabe", color: "#ec4899" },
                }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {data.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Liens</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/OuahibSalma" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black transition-colors text-2xl"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <a 
                  href="https://www.linkedin.com/in/salma-ouahib-140b13242/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black transition-colors text-2xl"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a 
                  href="mailto:salmaouahib02@gmail.com" 
                  className="text-gray-700 hover:text-black transition-colors text-2xl"
                >
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </div>
              
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-500 mb-2">Télécharger mon CV:</h4>
                <div className="flex flex-wrap gap-2">
                  <a 
                    href="#" 
                    className="inline-flex items-center px-3 py-1.5 bg-purple-100 text-purple-700 text-xs rounded-full hover:bg-purple-200 transition"
                  >
                    <i className="fa-solid fa-file-pdf mr-1"></i> CV Français
                  </a>
                  <a 
                    href="#" 
                    className="inline-flex items-center px-3 py-1.5 bg-purple-100 text-purple-700 text-xs rounded-full hover:bg-purple-200 transition"
                  >
                    <i className="fa-solid fa-file-pdf mr-1"></i> CV Anglais
                  </a>
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
