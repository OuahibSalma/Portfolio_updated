
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Quote {
  id: number;
  text: string;
  author: string;
  image: string;
}

const Quotes = () => {
  const quotes: Quote[] = [
    {
      id: 1,
      text: "Le succès n'est pas final, l'échec n'est pas fatal. C'est le courage de continuer qui compte.",
      author: "Winston Churchill",
      image: "https://images.unsplash.com/photo-1580341289255-5b47c98a59fe?q=80"
    },
    {
      id: 2,
      text: "Je ne perds jamais. Soit je gagne, soit j'apprends.",
      author: "Nelson Mandela",
      image: "https://images.unsplash.com/photo-1588609274577-2ebe8b98d8f6?q=80"
    },
    {
      id: 3,
      text: "La seule limite à notre épanouissement de demain sera nos doutes d'aujourd'hui.",
      author: "Franklin Delano Roosevelt",
      image: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80"
    },
    {
      id: 4,
      text: "La connaissance s'acquiert par l'expérience, tout le reste n'est que de l'information.",
      author: "Albert Einstein",
      image: "https://images.unsplash.com/photo-1568792923760-d70635a89fdc?q=80"
    },
    {
      id: 5,
      text: "Le plus grand risque est de ne prendre aucun risque.",
      author: "Mark Zuckerberg",
      image: "https://images.unsplash.com/photo-1616410011236-7a42121dd981?q=80"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextQuote = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  const prevQuote = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + quotes.length) % quotes.length);
  };

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 reveal">
        <h2 className="text-3xl font-bold text-center mb-16">Citations Inspirantes</h2>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-center justify-center">
            <Button 
              variant="outline" 
              size="icon" 
              className="absolute left-0 z-10 bg-white shadow-md hover:bg-gray-100"
              onClick={prevQuote}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="w-full px-12"
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3 h-64 md:h-auto">
                      <img 
                        src={quotes[currentIndex].image} 
                        alt={quotes[currentIndex].author} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-8 flex flex-col justify-center">
                      <div className="text-4xl text-purple-300 mb-4">"</div>
                      <p className="text-lg md:text-xl text-gray-700 italic mb-6">
                        {quotes[currentIndex].text}
                      </p>
                      <p className="text-right text-gray-600 font-medium">— {quotes[currentIndex].author}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <Button 
              variant="outline" 
              size="icon" 
              className="absolute right-0 z-10 bg-white shadow-md hover:bg-gray-100"
              onClick={nextQuote}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {quotes.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-purple-600" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quotes;
