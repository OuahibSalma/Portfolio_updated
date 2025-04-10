
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, FileText } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useLanguage } from "../context/LanguageContext";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  githubLink?: string;
  pdfLink?: string;
  details: {
    purpose: string;
    duration: string;
    skills: string;
    description: string;
  };
}

const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [open, setOpen] = useState(false);
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

    const projectsElement = projectsRef.current;
    if (projectsElement) {
      observer.observe(projectsElement);
    }

    return () => {
      if (projectsElement) {
        observer.unobserve(projectsElement);
      }
    };
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: "EvalLLMInsight: Data Warehouse pour l'Évaluation des LLMs",
      description: "Conception d'un Data Warehouse pour l'Évaluation des Modèles de Langage à Grande Échelle (LLMs).",
      image: "/public/lovable-uploads/37096719-bb19-4fa2-b8c7-800a7cc93bf0.png",
      githubLink: "https://github.com/OuahibSalma/LLM-Evaluation-DataWarehouse",
      pdfLink: "#",
      details: {
        purpose: "Conception d'un Data Warehouse pour l'Évaluation des Modèles de Langage à Grande Échelle (LLMs)",
        duration: "Septembre 2024 - Aujourd'hui",
        skills: "Microsoft SQL Server, SSIS, SSAS, SQL, et Microsoft PowerBI",
        description: "Ce projet consiste à concevoir et implémenter un entrepôt de données spécialisé dans l'évaluation des modèles de langage. L'objectif est d'analyser les performances des différents LLMs selon plusieurs critères et métriques."
      }
    },
    {
      id: 2,
      title: "NetGuard: Classification du Trafic Réseau",
      description: "Classification Intelligente du Trafic Réseau pour la Détection des Attaques DDoS",
      image: "/public/lovable-uploads/23bfa7b8-7aac-44e0-9424-9cafc99bca7d.png",
      githubLink: "https://github.com/OuahibSalma/NetGuard-DDoS-Detection",
      pdfLink: "#",
      details: {
        purpose: "Classification Intelligente du Trafic Réseau pour la Détection des Attaques DDoS",
        duration: "Juin 2024 - Juillet 2024",
        skills: "Pandas, Matplotlib, Scikit-Learn",
        description: "Ce projet est centré sur l'utilisation de l'apprentissage automatique pour analyser le trafic réseau et détecter les attaques DDoS. Nous avons développé un modèle de classification qui permet d'identifier les patterns suspects dans le trafic réseau."
      }
    },
    {
      id: 3,
      title: "HabitatVisualisation",
      description: "Visualisation de données basée sur une base de données Marocaine d'habitats",
      image: "/public/lovable-uploads/570f1392-1225-4b49-b852-3b70da07df86.png",
      githubLink: "https://github.com/OuahibSalma/Dashboard_habitat-units",
      pdfLink: "",
      details: {
        purpose: "Visualiser les données en se basant sur une base de donnée Marocaine",
        duration: "Mai 2024 - Juin 2024",
        skills: "Python, Pandas, et Bokeh",
        description: "Ce projet a consisté à développer des visualisations interactives à partir de données immobilières marocaines, en utilisant la bibliothèque Bokeh. L'objectif était de créer des tableaux de bord intuitifs pour explorer les tendances du marché immobilier."
      }
    },
    {
      id: 4,
      title: "PharmaVision: Gestion des Stocks",
      description: "Révolutionner la Gestion des Stocks avec l'Analyse de Données via Tableaux de Bord",
      image: "/public/lovable-uploads/23bfa7b8-7aac-44e0-9424-9cafc99bca7d.png",
      githubLink: "",
      pdfLink: "#",
      details: {
        purpose: "Révolutionner la Gestion des Stocks avec l'Analyse de Données via Tableaux de Bord",
        duration: "Décembre 2023 - Janvier 2024",
        skills: "Microsoft PowerBI",
        description: "C'est un projet challenge réalisé en utilisant Power BI pour analyser des données collectées par l'hopital d'Oujda. Le projet consiste à explorer ces données pour obtenir des informations clés sur l'activité hospitalière, et la consommation des médicaments, le stock, et tous ce que concerne la commande des fournisseurs."
      }
    },
    {
      id: 5,
      title: "Lisan: Une conversation vocale mieux qu'une lecture",
      description: "Exploration des modèles de deep Learning pour le traitement de la langue arabe",
      image: "/public/lovable-uploads/37096719-bb19-4fa2-b8c7-800a7cc93bf0.png",
      githubLink: "https://github.com/OuahibSalma/Lisan-tehniques-de-Deep-Learning",
      pdfLink: "#",
      details: {
        purpose: "Exploration des modèles de deep Learning pour le traitement de la langue arabe",
        duration: "Avril 2024 - Juin 2024",
        skills: "Bibliothèques python Transformers, pydub, gtts",
        description: "C'est un projet de recherche dans lequel on a découvert des modèles pré-entraînés qui existent sur la plateforme Hugging Face. L'objectif est de faire une comparaison entre les différents modèles en se basant sur la durée pour obtenir une réponse, l'exactitude, etc."
      }
    }
  ];

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-900 py-20 px-6">
      <div className="container mx-auto" ref={projectsRef}>
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">{t('projects.title')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => handleProjectClick(project)}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6 dark:text-white">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white line-clamp-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    {project.githubLink && (
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.pdfLink && (
                      <a 
                        href={project.pdfLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FileText size={20} />
                      </a>
                    )}
                  </div>
                  <button 
                    className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 text-sm font-medium"
                  >
                    {t('projects.seeDetails')}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        {selectedProject && (
          <DialogContent className="sm:max-w-[600px] bg-white dark:bg-gray-800 dark:text-white">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <span className="font-medium text-right text-gray-700 dark:text-gray-300">{t('projects.purpose')}</span>
                <span className="col-span-3 dark:text-white">{selectedProject.details.purpose}</span>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <span className="font-medium text-right text-gray-700 dark:text-gray-300">{t('projects.duration')}</span>
                <span className="col-span-3 dark:text-white">{selectedProject.details.duration}</span>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <span className="font-medium text-right text-gray-700 dark:text-gray-300">{t('projects.skills')}</span>
                <span className="col-span-3 dark:text-white">{selectedProject.details.skills}</span>
              </div>
              <div className="grid grid-cols-4 items-start gap-4">
                <span className="font-medium text-right text-gray-700 dark:text-gray-300">{t('projects.description')}</span>
                <p className="col-span-3 dark:text-white">{selectedProject.details.description}</p>
              </div>
              <div className="flex justify-end space-x-3 mt-4">
                {selectedProject.githubLink && (
                  <a 
                    href={selectedProject.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-2 bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-white rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                  >
                    <Github className="mr-2" size={16} /> GitHub
                  </a>
                )}
                {selectedProject.pdfLink && (
                  <a 
                    href={selectedProject.pdfLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-2 bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-100 rounded hover:bg-purple-200 dark:hover:bg-purple-800 transition"
                  >
                    <FileText className="mr-2" size={16} /> Rapport PDF
                  </a>
                )}
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default Projects;
