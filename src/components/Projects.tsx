
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, FileText } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useLanguage } from "../context/LanguageContext";
import projects from "../data/projects";
import type { Project } from "../data/projects";

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
                <span className="col-span-3 dark:text-white">{selectedProject.objective}</span>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <span className="font-medium text-right text-gray-700 dark:text-gray-300">{t('projects.duration')}</span>
                <span className="col-span-3 dark:text-white">{selectedProject.period}</span>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <span className="font-medium text-right text-gray-700 dark:text-gray-300">{t('projects.skills')}</span>
                <span className="col-span-3 dark:text-white">{selectedProject.technologies.join(', ')}</span>
              </div>
              <div className="grid grid-cols-4 items-start gap-4">
                <span className="font-medium text-right text-gray-700 dark:text-gray-300">{t('projects.description')}</span>
                <p className="col-span-3 dark:text-white">{selectedProject.longDescription}</p>
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
