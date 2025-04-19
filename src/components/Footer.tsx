
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <img 
                src="public/Images/logo.png" 
                alt="OS Logo" 
                className="h-10 w-auto mr-3"
              />
              <h3 className="text-2xl font-bold">Ouahib Salma</h3>
            </div>
            <p className="text-gray-400 max-w-md">
              {t('footer.description')}
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <div className="flex flex-col space-y-2">
              <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                {t('navbar.home')}
              </a>
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                {t('navbar.about')}
              </a>
              <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                {t('navbar.projects')}
              </a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                {t('navbar.contact')}
              </a>
            </div>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-center text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Ouahib Salma. {t('footer.rights')}
          </p>
          <div className="flex space-x-4">
            <a 
              href="https://github.com/OuahibSalma" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors text-xl"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a 
              href="https://www.linkedin.com/in/salma-ouahib-140b13242/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors text-xl"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a 
              href="mailto:salmaouahib02@gmail.com" 
              className="text-gray-400 hover:text-white transition-colors text-xl"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
