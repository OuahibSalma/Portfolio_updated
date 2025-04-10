import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "../context/LanguageContext";

const Experience = () => {
  const { t } = useLanguage();
  
  const experiences = [
    {
      id: 1,
      title: "Alternante en science de données",
      company: "AIBOOSTforIndustries",
      period: "Septembre 2024 - Aujourd'hui",
      location: "Casablanca, Maroc",
      description: "Développement de solutions basées sur le machine learning et l'IA: prédiction et analyse du turnover, chatbot avec IA générative (Streamlit), tableau de bord interactif et automatisation de la collecte de données (web scraping avec Selenium).",
      skills: ["Python", "Pandas", "Plotly", "Matplotlib", "Bokeh", "Scikit-learn", "Langchain", "Selenium"]
    },
    {
      id: 2,
      title: "Assistante en analyse de données",
      company: "AIBOOSTforIndustries",
      period: "Juillet 2024 - Août 2024",
      location: "Casablanca, Maroc",
      description: "Développement d'algorithmes de traitement de fichiers JSON et analyse des transcriptions d'appels via LLMs.",
      skills: ["Python", "Json", "Ftplib", "Pandas", "Wkhtmltopdf", "Pdfkit", "Jinja2"]
    },
    {
      id: 3,
      title: "Stage - Data Analyst",
      company: "OuiCare",
      period: "Juin 2024 - Août 2024",
      location: "Rabat, Maroc",
      description: "Analyse des données clients, développement de tableaux de bord Power BI et optimisation des processus d'analyse de données pour améliorer la prise de décision.",
      skills: ["Power BI", "SQL", "Python", "Data Analysis"]
    },
    {
      id: 4,
      title: "Scientifique de données - Machine Learning",
      company: "Faculté des sciences de Marrakech",
      period: "Juillet 2022 - Août 2022",
      location: "Marrakech, Maroc",
      description: "Exploration de diverses bibliothèques d'intelligence artificielle et mise en œuvre de la bibliothèque TensorFlow pour la détection de la violence.",
      skills: ["Python", "TensorFlow", "Machine Learning"]
    }
  ];

  const [activeExperience, setActiveExperience] = useState(experiences[0]);

  return (
    <section id="experience" className="section-padding bg-white dark:bg-gray-800">
      <div className="container mx-auto reveal">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">{t('experience.title')}</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Experience Navigation */}
          <div className="lg:col-span-1 space-y-4">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActiveExperience(exp)}
                className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                  activeExperience.id === exp.id
                    ? "bg-purple-100 border-l-4 border-purple-600 dark:bg-purple-900 dark:border-purple-400"
                    : "bg-gray-50 hover:bg-purple-50 dark:bg-gray-700 dark:hover:bg-gray-600"
                }`}
              >
                <h3 className="font-medium text-lg dark:text-white">{exp.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{exp.company}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</p>
              </button>
            ))}
          </div>
          
          {/* Experience Details */}
          <motion.div 
            className="lg:col-span-2"
            key={activeExperience.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-6 shadow-md h-full dark:bg-gray-700">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{activeExperience.title}</h3>
                  <div className="flex items-center text-gray-600 dark:text-gray-300 mt-1 space-x-2">
                    <span>{activeExperience.company}</span>
                    <span>•</span>
                    <span>{activeExperience.location}</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{activeExperience.period}</p>
                </div>
                
                <Separator className="my-4" />
                
                <div className="flex-grow">
                  <p className="text-gray-700 mb-6 dark:text-gray-300">{activeExperience.description}</p>
                  
                  <div className="mt-auto">
                    <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Compétences développées :</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeExperience.skills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900 dark:text-purple-200 dark:border-purple-700">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
        
        <div className="mt-12 p-6 bg-gray-50 rounded-lg shadow-sm dark:bg-gray-700 dark:text-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">{t('experience.importance')}</h3>
          <p className="text-gray-700 dark:text-gray-300">
            {t('experience.importanceText')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
