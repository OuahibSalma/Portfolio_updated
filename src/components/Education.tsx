
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { 
  BarChart3, 
  LineChart, 
  PieChart 
} from "lucide-react";
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from "@/components/ui/chart";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "../context/LanguageContext";

const Education = () => {
  const { t } = useLanguage();
  const chartRef = useRef<HTMLDivElement>(null);
  
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
  
  const languageSkillsData = [
    { name: 'Python', level: 90 },
    { name: 'Java', level: 70 },
    { name: 'C', level: 80 },
    { name: 'C++', level: 20 },
    { name: 'JavaScript', level: 50 },
    { name: 'HTML/CSS', level: 75 },
    { name: 'PHP', level: 40 }
  ];
  
  const pythonLibsData = [
    { name: 'NumPy', level: 80 },
    { name: 'Pandas', level: 85 },
    { name: 'Matplotlib', level: 70 },
    { name: 'TensorFlow', level: 60 },
    { name: 'Scikit-learn', level: 40 },
    { name: 'Bokeh', level: 82 },
    { name: 'Requests', level: 30 },
    { name: 'Time', level: 60 },
    { name: 'JSON', level: 55 },
    { name: 'ftplib', level: 50 }
  ];
  
  const projectsData = [
    { name: 'Projets Dev', count: 3 },
    { name: 'Projets Data & BI', count: 4 },
    { name: 'Mixte', count: 6 }
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
          
          {/* Chart & Description */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md h-full">
              <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">{t('education.title_exp')}</h3>
              
              <p className="text-gray-700 dark:text-gray-300 mb-8">
                {t('education.paragraph')}
              </p>
              
              <Separator className="my-6" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Programming Languages Chart */}
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="text-sm font-medium mb-4 text-gray-700 dark:text-gray-300 flex items-center">
                    <BarChart3 className="mr-2" size={16} /> Programming Languages
                  </h4>
                  <div className="h-64" ref={chartRef}>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={languageSkillsData} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" domain={[0, 100]} />
                        <YAxis dataKey="name" type="category" width={60} />
                        <Tooltip />
                        <Bar dataKey="level" fill="#8884d8" radius={[0, 4, 4, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                
                {/* Python Libraries Chart */}
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="text-sm font-medium mb-4 text-gray-700 dark:text-gray-300 flex items-center">
                    <PieChart className="mr-2" size={16} /> Python Libraries
                  </h4>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={pythonLibsData.slice(0, 6)} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" domain={[0, 100]} />
                        <YAxis dataKey="name" type="category" width={70} />
                        <Tooltip />
                        <Bar dataKey="level" fill="#82ca9d" radius={[0, 4, 4, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                
                {/* Projects Chart */}
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="text-sm font-medium mb-4 text-gray-700 dark:text-gray-300 flex items-center">
                    <LineChart className="mr-2" size={16} /> Projects
                  </h4>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={projectsData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis domain={[0, 10]} />
                        <Tooltip />
                        <Bar dataKey="count" fill="#ff8042" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
