
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

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
      title: "Lisan : Une conversation vocale mieux qu'une lecture",
      description: "Exploration des modèles de deep Learning pour le traitement de la langue arabe",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      githubLink: "https://github.com/OuahibSalma/Lisan-tehniques-de-Deep-Learning",
      pdfLink: "#",
      details: {
        purpose: "Exploration des modèles de deep Learning pour le traitement de la langue arabe",
        duration: "Avril 2024 - Juin 2024",
        skills: "bibliothèque python Transformers, pydub, gtts...",
        description: "C'est un projet de recherche dans lequel on a découvert des modèles pré-entraînés qui existent sur la plateforme Hugging Face. L'objectif est de faire une comparaison entre les différents modèles en se basant sur la durée pour obtenir une réponse, l'exactitude, etc."
      }
    },
    {
      id: 2,
      title: "PharmaVision: Révolutionner la Gestion des Stocks",
      description: "Visualiser les données et trouver des KPIs pertinents qui aident la pharmaceutique d'Oujda",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      githubLink: "",
      pdfLink: "#",
      details: {
        purpose: "Visualiser les données et trouver des KPIs pertinents qui aident la pharmaceutique d'Oujda à trouver une solution au problème de la rupture de stock et de la surcharge de stocks.",
        duration: "Décembre 2023 - Janvier 2024",
        skills: "Power BI, Analyse de données",
        description: "C'est un projet challenge réalisé en utilisant Power BI pour analyser des données collectées par l'hopital d'Oujda. Le projet consiste à explorer ces données pour obtenir des informations clés sur l'activité hospitalière, et la consommation des médicaments, le stock, et tous ce que concerne la commande des fournisseurs."
      }
    },
    {
      id: 3,
      title: "Les tableaux de bord des habitats",
      description: "Utiliser Bokeh pour réaliser une application avec des interfaces interactives pour la visualisation des données",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      githubLink: "https://github.com/OuahibSalma/Dashboard_habitat-units",
      pdfLink: "",
      details: {
        purpose: "Utiliser Bokeh pour réaliser une application qui contient des interfaces interactives avec des visualisations des données.",
        duration: "Mai 2024 - Juin 2024",
        skills: "Analyse de données , bibliothèque python : Pandas, et Bokeh.",
        description: "C'est un projet réalisé en lieu et place d'un examen, et dans lequel on a cherché une base de données concernant les habitats. L'objectif est d'extraire les informations à partir des données qu'on a, tout en assurant l'interactivité avec les visualisations."
      }
    },
    {
      id: 4,
      title: "Jeu Mario : Conception et modélisation d'un jeu vidéo",
      description: "Créer un jeu vidéo en utilisant la bibliothèque Pygame de Python",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      githubLink: "",
      pdfLink: "#",
      details: {
        purpose: "Créer un jeu vidéo en utilisant la bibliothèque Pygame de Python.",
        duration: "Mai 2023 - Juin 2023",
        skills: "Modélisation en utilisant UML, graphique avec l'outil Tiled, et la bibliothèque pygame de python.",
        description: "C'est mon projet de fin d'études de licence dans lequel on a implémenté les différents diagrammes de l'UML pour réaliser l'étape de la conception, dessiner les différents niveaux de jeu en implémentant Tiled. Et finalement, coder en Python, en utilisant la bibliothèque Pygame."
      }
    }
  ];

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container mx-auto" ref={projectsRef}>
        <h2 className="text-3xl font-bold text-center mb-12">Mes Projets</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
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
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 line-clamp-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    {project.githubLink && (
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-black transition-colors text-xl"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <i className="fa-brands fa-github"></i>
                      </a>
                    )}
                    {project.pdfLink && (
                      <a 
                        href={project.pdfLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-black transition-colors text-xl"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <i className="fa-solid fa-file-pdf"></i>
                      </a>
                    )}
                  </div>
                  <button 
                    className="text-purple-600 hover:text-purple-800 text-sm font-medium"
                  >
                    Voir détails
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        {selectedProject && (
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <span className="font-medium text-right">But:</span>
                <span className="col-span-3">{selectedProject.details.purpose}</span>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <span className="font-medium text-right">Durée:</span>
                <span className="col-span-3">{selectedProject.details.duration}</span>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <span className="font-medium text-right">Compétences:</span>
                <span className="col-span-3">{selectedProject.details.skills}</span>
              </div>
              <div className="grid grid-cols-4 items-start gap-4">
                <span className="font-medium text-right">Description:</span>
                <p className="col-span-3">{selectedProject.details.description}</p>
              </div>
              <div className="flex justify-end space-x-3 mt-4">
                {selectedProject.githubLink && (
                  <a 
                    href={selectedProject.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition"
                  >
                    <i className="fa-brands fa-github mr-2"></i> GitHub
                  </a>
                )}
                {selectedProject.pdfLink && (
                  <a 
                    href={selectedProject.pdfLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-2 bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition"
                  >
                    <i className="fa-solid fa-file-pdf mr-2"></i> Rapport PDF
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
