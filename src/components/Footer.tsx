
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Portfolio</h3>
            <p className="text-gray-400 max-w-md">
              Un développeur web passionné par la création d'expériences numériques
              attrayantes et fonctionnelles.
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Liens Rapides</h4>
            <div className="flex flex-col space-y-2">
              <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                Accueil
              </a>
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                À Propos
              </a>
              <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                Projets
              </a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Votre Nom. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
