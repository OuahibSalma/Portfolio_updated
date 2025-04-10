
import { useState } from "react";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "../context/LanguageContext";

const Education = () => {
  const { t } = useLanguage();
  
  const educationData = [
    { 
      id: 1, 
      degree: t('education.engineer'),
      institution: "2023-2026 ENSIAS-Rabat",
      completed: false
    },
    { 
      id: 2, 
      degree: t('education.license'),
      institution: "2020-2023 FSSM-Marrakech",
      completed: true 
    },
    { 
      id: 3, 
      degree: t('education.technician'),
      institution: "2020-2022 MEGA SCHOOL-Marrakech",
      completed: true
    },
    { 
      id: 4, 
      degree: t('education.bac'),
      institution: "2019-1020 Lycée Ibn Abbad-Marrakech",
      completed: true
    }
  ];

  return (
    <section id="education" className="section-padding bg-white dark:bg-gray-900 py-20 px-6">
      <div className="container mx-auto reveal">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">{t('education.title')}</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Education Timeline */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">{t('education.progression')}</h3>
            <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 before:h-full before:w-0.5 before:bg-purple-200 dark:before:bg-purple-800 ml-4 pl-8">
              {educationData.map((item) => (
                <div key={item.id} className="relative">
                  <div 
                    className={`absolute -left-8 w-6 h-6 rounded-full ${
                      item.completed 
                        ? "bg-purple-600 dark:bg-purple-400" 
                        : "bg-gray-300 dark:bg-gray-600 border-2 border-purple-300 dark:border-purple-700"
                    } flex items-center justify-center`}
                  />
                  <div className={`mb-1 text-lg font-medium ${
                    item.completed 
                    ? "text-gray-900 dark:text-white" 
                    : "text-gray-500 dark:text-gray-400"
                  }`}>
                    {item.degree}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{item.institution}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Description */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md h-full">
              <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">{t('education.title_exp')}</h3>
              
              <p className="text-gray-700 dark:text-gray-300 mb-8">
                {t('education.paragraph')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
