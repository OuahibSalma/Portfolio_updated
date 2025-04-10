
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell, 
  Tooltip as RechartsTooltip 
} from 'recharts';

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A569BD', '#5DADE2', '#45B39D', '#F4D03F'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const skillCategories = [
    {
      title: t('skills.databases'),
      icons: [
        { src: "https://www.mysql.com/common/logos/logo-mysql-170x115.png", alt: "MySQL" },
        { src: "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg", alt: "SQL Server" },
        { src: "https://naseba.com/wp-content/uploads/2018/08/Oracle-Logo.png", alt: "Oracle" }
      ]
    },
    {
      title: t('skills.dataScience'),
      icons: [
        { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/NumPy_logo_2020.svg/1280px-NumPy_logo_2020.svg.png", alt: "NumPy" },
        { src: "https://pandas.pydata.org/static/img/pandas_mark.svg", alt: "Pandas" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/1200px-Scikit_learn_logo_small.svg.png", alt: "Scikit-learn" },
        { src: "https://matplotlib.org/3.5.1/_static/images/logo2.svg", alt: "Matplotlib" },
        { src: "/public/lovable-uploads/8f703841-93c6-45bb-9674-46cb1540b0b2.png", alt: "Bokeh" }
      ]
    },
    {
      title: t('skills.webScraping'),
      icons: [
        { src: "https://selenium-python.readthedocs.io/_static/logo.png", alt: "Selenium" },
        { src: "https://www.crummy.com/software/BeautifulSoup/bs4/doc/_images/6.1.jpg", alt: "BeautifulSoup" }
      ]
    },
    {
      title: t('skills.etlBi'),
      icons: [
        { src: "/public/lovable-uploads/cfc5896c-2569-4709-bdc6-43eff6bfa0ba.png", alt: "Power BI" }
      ]
    },
    {
      title: t('skills.programmingLanguages'),
      icons: [
        { src: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png", alt: "C" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg", alt: "C++" },
        { src: "https://www.python.org/static/community_logos/python-logo.png", alt: "Python" },
        { src: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png", alt: "Java" },
        { src: "https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png", alt: "HTML" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", alt: "JavaScript" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg", alt: "CSS" }
      ]
    },
    {
      title: t('skills.other'),
      icons: [
        { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png", alt: "Linux" },
        { src: "https://astah.change-vision.com/ja/Resources/Images/logos/edition/uml_astah.png", alt: "Astah UML" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg", alt: "Cisco" },
        { src: "https://www.adobe.com/content/dam/cc/icons/photoshop.svg", alt: "Photoshop" },
        { src: "https://www.adobe.com/content/dam/cc/icons/illustrator.svg", alt: "Illustrator" }
      ]
    }
  ];

  // Data for skill charts
  const programmingSkills = [
    { name: "Python", value: 90 },
    { name: "Java", value: 70 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 50 },
    { name: "HTML/CSS", value: 75 },
  ];

  const dataSkills = [
    { name: "Data Analysis", value: 85 },
    { name: "Power BI", value: 80 },
    { name: "SQL", value: 75 },
    { name: "Machine Learning", value: 60 },
    { name: "ETL", value: 70 },
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-800 py-20 px-6 reveal" ref={skillsRef}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">{t('skills.title')}</h2>
        
        {/* Skill charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div 
            className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Programming Skills</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={programmingSkills}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {programmingSkills.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <RechartsTooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Data Skills</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={dataSkills}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {dataSkills.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <RechartsTooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">{category.title}</h3>
              <div className="flex flex-wrap gap-4 items-center">
                {category.icons.map((icon, iconIndex) => (
                  <div 
                    key={iconIndex} 
                    className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-gray-800 p-2 rounded-md hover:scale-110 transition-transform duration-200"
                  >
                    <img 
                      src={icon.src} 
                      alt={icon.alt} 
                      className="w-full h-full object-contain" 
                      title={icon.alt}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
