
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <motion.div 
          className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Ouahib Salma
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
            Étudiante en <span className="text-purple-600 dark:text-purple-400">Business Intelligence and Data Analytics</span>
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
            Passionnée par l'ingénierie, la Data Analytics, la Business Intelligence et le Data Engineering. 
            Ma mission est de transformer les données brutes en chefs-d'œuvre stratégiques.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Button 
              className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600"
              asChild
            >
              <a href="#about">En savoir plus</a>
            </Button>
            <Button 
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-50 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-900/30"
              asChild
            >
              <a href="#contact">Me contacter</a>
            </Button>
          </div>
        </motion.div>
        
        <motion.div 
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative">
            <div className="absolute -z-10 w-72 h-72 bg-purple-200 dark:bg-purple-900 rounded-full opacity-50 blur-3xl"></div>
            <img 
              src="public/lovable-uploads/9d743970-f029-4582-9ba4-72f67e82cd3d.png" 
              alt="Ouahib Salma" 
              className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-white dark:border-gray-700 shadow-lg z-10"
            />
            <img 
              src="public/lovable-uploads/01b75ab7-746d-409c-adf5-33d4de8e01a6.png" 
              alt="Logo OS" 
              className="absolute -bottom-10 -right-10 w-24 h-24 md:w-32 md:h-32 z-20"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
