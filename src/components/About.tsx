
import React, { useRef, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

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

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-800">
      <div className="container mx-auto" ref={aboutRef}>
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">{t('about.title')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">Qui suis-je</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Je m'appelle Ouahib Salma, étudiante en deuxième année d'ingénierie à l'École Nationale Supérieure d'Informatique et d'Analyse des Systèmes (ENSIAS), filière Business Intelligence and Data Analytics. J'ai obtenu une licence en Sciences Mathématiques et Informatique (SMI) à la Faculté des Sciences Semlalia Marrakech (FSSM).
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Passionnée par l'ingénierie, la Data Analytics, la Business Intelligence, le Data Engineering et l'Analytics, ma mission est de transformer les données brutes en chefs-d'œuvre stratégiques permettant de prendre des décisions informées et de créer une valeur ajoutée au sein d'une entreprise.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">{t('about.title')}</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{t('about.birthDate')}</p>
                  <p className="font-medium dark:text-white">{t('about.birthDateValue')}</p>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{t('about.originCity')}</p>
                  <p className="font-medium dark:text-white">{t('about.originCityValue')}</p>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{t('about.currentCity')}</p>
                  <p className="font-medium dark:text-white">{t('about.currentCityValue')}</p>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Email</p>
                  <p className="font-medium dark:text-white">salmaouahib02@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col space-y-6">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm h-full">
              <h3 className="text-xl font-semibold mb-6 text-purple-600 dark:text-purple-400">Profil Professionnel</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Analyste de données en formation avec une passion pour transformer des données complexes en informations exploitables. Je combine des compétences analytiques solides avec des connaissances techniques en science des données pour développer des solutions qui aident les organisations à prendre des décisions éclairées.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Mon expérience en alternance et en stage m'a permis de développer des compétences pratiques dans l'analyse prédictive, la visualisation des données et l'automatisation des processus d'extraction de données.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">Liens</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/OuahibSalma" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black transition-colors text-2xl dark:text-gray-300 dark:hover:text-white"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <a 
                  href="https://www.linkedin.com/in/salma-ouahib-140b13242/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black transition-colors text-2xl dark:text-gray-300 dark:hover:text-white"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a 
                  href="mailto:salmaouahib02@gmail.com" 
                  className="text-gray-700 hover:text-black transition-colors text-2xl dark:text-gray-300 dark:hover:text-white"
                >
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </div>
              
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Télécharger mon CV:</h4>
                <div className="flex flex-wrap gap-2">
                  <a 
                    href="#" 
                    className="inline-flex items-center px-3 py-1.5 bg-purple-100 text-purple-700 text-xs rounded-full hover:bg-purple-200 transition dark:bg-purple-900 dark:text-purple-200 dark:hover:bg-purple-800"
                  >
                    <i className="fa-solid fa-file-pdf mr-1"></i> CV Français
                  </a>
                  <a 
                    href="#" 
                    className="inline-flex items-center px-3 py-1.5 bg-purple-100 text-purple-700 text-xs rounded-full hover:bg-purple-200 transition dark:bg-purple-900 dark:text-purple-200 dark:hover:bg-purple-800"
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
