
import { motion } from "framer-motion";

const SkillCategory = ({ title, icons }: { title: string; icons: { src: string; alt: string }[] }) => (
  <motion.div 
    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
    whileHover={{ y: -5 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="p-6">
      <h3 className="text-center text-xl font-semibold text-blue-900 mb-6">{title}</h3>
      <div className="flex flex-wrap justify-center gap-4">
        {icons.map((icon, idx) => (
          <div key={idx} className="flex items-center justify-center w-16 h-16 p-2">
            <img src={icon.src} alt={icon.alt} className="max-w-full max-h-full object-contain" />
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: "Bases de Données",
      icons: [
        { src: "https://www.mysql.com/common/logos/logo-mysql-170x115.png", alt: "MySQL" },
        { src: "https://img.icons8.com/color/452/microsoft-sql-server.png", alt: "SQL Server" },
        { src: "https://naseba.com/wp-content/uploads/2018/08/Oracle-Logo.png", alt: "Oracle" },
        { src: "https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png", alt: "MongoDB" }
      ]
    },
    {
      title: "Data Science",
      icons: [
        { src: "https://numpy.org/doc/stable/_static/numpylogo.svg", alt: "NumPy" },
        { src: "https://pandas.pydata.org/static/img/pandas_mark.svg", alt: "Pandas" },
        { src: "https://scikit-learn.org/stable/_static/scikit-learn-logo-small.png", alt: "Scikit-learn" },
        { src: "https://matplotlib.org/stable/_static/logo2.svg", alt: "Matplotlib" },
        { src: "https://www.tensorflow.org/images/tf_logo_social.png", alt: "TensorFlow" },
        { src: "https://pytorch.org/assets/images/pytorch-logo.png", alt: "PyTorch" }
      ]
    },
    {
      title: "Web Scraping",
      icons: [
        { src: "https://selenium-python.readthedocs.io/_static/logo.png", alt: "Selenium" },
        { src: "https://www.crummy.com/software/BeautifulSoup/bs4/doc/_images/6.1.jpg", alt: "BeautifulSoup" }
      ]
    },
    {
      title: "ETL et BI",
      icons: [
        { src: "https://logosmarcas.net/wp-content/uploads/2022/02/Power-BI-Emblema.png", alt: "Power BI" },
        { src: "https://img.icons8.com/color/452/microsoft-sql-server.png", alt: "SSIS" }
      ]
    },
    {
      title: "Langages de Programmation",
      icons: [
        { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png", alt: "Python" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg", alt: "C++" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg", alt: "C" },
        { src: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png", alt: "Java" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png", alt: "HTML" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png", alt: "CSS" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png", alt: "JavaScript" }
      ]
    },
    {
      title: "Autres Compétences",
      icons: [
        { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png", alt: "Linux" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1200px-Adobe_Photoshop_CC_icon.svg.png", alt: "Photoshop" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/2101px-Adobe_Illustrator_CC_icon.svg.png", alt: "Illustrator" }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container mx-auto reveal">
        <h2 className="text-3xl font-bold text-center mb-12">Mes Compétences</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory 
              key={index} 
              title={category.title} 
              icons={category.icons} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
