
// import React, { useRef, useEffect } from "react";
// import { motion } from "framer-motion";
// import { useLanguage } from "../context/LanguageContext";

// const Skills = () => {
//   const skillsRef = useRef<HTMLDivElement>(null);
//   const { t } = useLanguage();

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('active');
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     if (skillsRef.current) {
//       observer.observe(skillsRef.current);
//     }

//     return () => {
//       if (skillsRef.current) {
//         observer.unobserve(skillsRef.current);
//       }
//     };
//   }, []);

//   const skillCategories = [
//     {
//       title: t('skills.databases'),
//       icons: [
//         { src: "https://www.mysql.com/common/logos/logo-mysql-170x115.png", alt: "MySQL" },
//         { src: "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg", alt: "SQL Server" },
//         { src: "https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png", alt: "Oracle" } , 
//         { src: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Neo4j-logo_color.png", alt: "Neo4J" },
//         { src: "https://e7.pngegg.com/pngimages/44/4/png-clipart-logo-product-design-brand-font-sql-logo-blue-text.png", alt: "PostgreSQL" },
//         { src: "https://logospng.org/wp-content/uploads/mongodb.png", alt: "MongoDB" } , 

//       ]
//     },
//     {
//       title: t('skills.dataScience'),
//       icons: [
//         { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/NumPy_logo_2020.svg/1280px-NumPy_logo_2020.svg.png", alt: "NumPy" },
//         { src: "https://pandas.pydata.org/static/img/pandas_mark.svg", alt: "Pandas" },
//         { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/1200px-Scikit_learn_logo_small.svg.png", alt: "Scikit-learn" },
//         { src: "https://matplotlib.org/3.5.1/_static/images/logo2.svg", alt: "Matplotlib" },
//         { src: "https://static.bokeh.org/branding/logos/bokeh-logo.png", alt: "Bokeh" }
//       ]
//     },
//     {
//       title: t('skills.webScraping'),
//       icons: [
//         { src: "https://selenium-python.readthedocs.io/_static/logo.png", alt: "Selenium" },
//         { src: "https://th.bing.com/th/id/R.4241668afca6dee7e4501fe8d75cd624?rik=lHdTkYPVAhOfLQ&pid=ImgRaw&r=0", alt: "BeautifulSoup" }
//       ]
//     },
//     {
//       title: t('skills.etlBi'),
//       icons: [
//         { src: "https://logos-world.net/wp-content/uploads/2022/02/Microsoft-Power-BI-Symbol.png", alt: "Power BI" } , 
//         { src: "https://th.bing.com/th/id/OIP.636tgL9kpQM16A5NPx9VLgHaG6?rs=1&pid=ImgDetMain", alt: "SSAS" } , 
//         { src: "https://www.informatec.com/sites/default/files/inline-images/ssis-logo.png", alt: "SSIS" } ,
//         { src: "https://cloud.openaudit.io/images/Logo%20SSRS.png", alt: "SSRS" } ,
//       ]
//     },
//     {
//       title: t('skills.programmingLanguages'),
//       icons: [
//         { src: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png", alt: "C" },
//         { src: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg", alt: "C++" },
//         { src: "https://www.python.org/static/community_logos/python-logo.png", alt: "Python" },
//         { src: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png", alt: "Java" },
//         { src: "https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png", alt: "HTML" },
//         { src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", alt: "JavaScript" },
//         { src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg", alt: "CSS" }
//       ]
//     },
//     {
//       title: t('skills.other'),
//       icons: [
//         { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png", alt: "Linux" },
//         { src: "https://astah.change-vision.com/ja/Resources/Images/logos/edition/uml_astah.png", alt: "Astah UML" },
//         { src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg", alt: "Cisco" },
//         { src: "https://www.adobe.com/content/dam/cc/icons/photoshop.svg", alt: "Photoshop" },
//         { src: "https://www.adobe.com/content/dam/cc/icons/illustrator.svg", alt: "Illustrator" }
//       ]
//     }
//   ];

//   return (
//     <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-800 py-20 px-6 reveal" ref={skillsRef}>
//       <div className="container mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">{t('skills.title')}</h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {skillCategories.map((category, index) => (
//             <motion.div 
//               key={index}
//               className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-md"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">{category.title}</h3>
//               <div className="flex flex-wrap gap-4 items-center">
//                 {category.icons.map((icon, iconIndex) => (
//                   <div 
//                     key={iconIndex} 
//                     className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-gray-800 p-2 rounded-md hover:scale-110 transition-transform duration-200"
//                   >
//                     <img 
//                       src={icon.src} 
//                       alt={icon.alt} 
//                       className="w-full h-full object-contain" 
//                       title={icon.alt}
//                     />
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const Skills = () => {
  const skillsRef = useRef(null);
  const { t } = useLanguage();

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
        { src: "https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png", alt: "Oracle" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Neo4j-logo_color.png", alt: "Neo4J" },
        { src: "https://viswaonlinetrainings.com/wp-content/uploads/2024/08/PostgreSQL.png", alt: "PostgreSQL" },
        { src: "https://logodix.com/logo/2090013.jpg", alt: "MongoDB" },
      ]
    },
    {
      title: t('skills.dataScience'),
      icons: [
        { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/NumPy_logo_2020.svg/1280px-NumPy_logo_2020.svg.png", alt: "NumPy" },
        { src: "https://pandas.pydata.org/static/img/pandas_mark.svg", alt: "Pandas" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/1200px-Scikit_learn_logo_small.svg.png", alt: "Scikit-learn" },
        { src: "https://matplotlib.org/3.5.1/_static/images/logo2.svg", alt: "Matplotlib" },
        { src: "https://static.bokeh.org/branding/logos/bokeh-logo.png", alt: "Bokeh" }
      ]
    },
    {
      title: t('skills.webScraping'),
      icons: [
        { src: "https://selenium-python.readthedocs.io/_static/logo.png", alt: "Selenium" },
        { src: "https://th.bing.com/th/id/R.4241668afca6dee7e4501fe8d75cd624?rik=lHdTkYPVAhOfLQ&pid=ImgRaw&r=0", alt: "BeautifulSoup" }
      ]
    },
    {
      title: t('skills.etlBi'),
      icons: [
        { src: "https://logos-world.net/wp-content/uploads/2022/02/Microsoft-Power-BI-Symbol.png", alt: "Power BI" },
        { src: "https://th.bing.com/th/id/OIP.636tgL9kpQM16A5NPx9VLgHaG6?rs=1&pid=ImgDetMain", alt: "SSAS" },
        { src: "https://www.informatec.com/sites/default/files/inline-images/ssis-logo.png", alt: "SSIS" },
        { src: "https://cloud.openaudit.io/images/Logo%20SSRS.png", alt: "SSRS" },
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

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-800 py-20 px-6 reveal" ref={skillsRef}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">{t('skills.title')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-center text-gray-800 dark:text-white">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-6">
                {category.icons.map((icon, iconIndex) => (
                  <motion.div 
                    key={iconIndex} 
                    className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center p-2"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img 
                      src={icon.src} 
                      alt={icon.alt} 
                      className="w-full h-full object-contain" 
                      title={icon.alt}
                    />
                  </motion.div>
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
