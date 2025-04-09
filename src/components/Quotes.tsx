
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Quotes = () => {
  const { t } = useLanguage();
  const [currentQuote, setCurrentQuote] = useState(0);
  const [direction, setDirection] = useState(0);

  const quotes = [
    {
      id: 1,
      text: t('quotes.quote1.text'),
      author: t('quotes.quote1.author'),
      image: "https://th.bing.com/th/id/OIP.-W_k352UYZlS94YV6MthTwHaF6?rs=1&pid=ImgDetMain"
    },
    {
      id: 2,
      text: t('quotes.quote2.text'),
      author: t('quotes.quote2.author'),
      image: "https://api.ndla.no/image-api/raw/vFu07XH2.jpg?width=1024"
    },
    {
      id: 3,
      text: t('quotes.quote3.text'),
      author: t('quotes.quote3.author'),
      image: "https://www.tracesofwar.com/upload/articles/9844160806144010g.jpg"
    }
  ];

  const nextQuote = () => {
    setDirection(1);
    setCurrentQuote((prev) => (prev + 1) % quotes.length);
  };

  const prevQuote = () => {
    setDirection(-1);
    setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextQuote();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section id="quotes" className="section-padding bg-white dark:bg-gray-900 py-20 px-6">
      <div className="container mx-auto reveal">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">{t('quotes.title')}</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative h-80 md:h-64">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentQuote}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute w-full"
              >
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md flex flex-col md:flex-row items-center gap-6">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src={quotes[currentQuote].image}
                      alt={`Quote by ${quotes[currentQuote].author}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <blockquote className="italic mb-4 text-gray-700 dark:text-gray-300 text-lg">
                      "{quotes[currentQuote].text}"
                    </blockquote>
                    <footer className="text-right">
                      <cite className="font-medium text-gray-900 dark:text-white not-italic">
                        - {quotes[currentQuote].author}
                      </cite>
                    </footer>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevQuote}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Previous quote"
            >
              <ChevronLeft className="text-gray-700 dark:text-gray-200" />
            </button>
            <div className="flex space-x-2">
              {quotes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentQuote ? 1 : -1);
                    setCurrentQuote(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentQuote === index
                      ? "bg-purple-600 dark:bg-purple-400"
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}
                  aria-label={`Go to quote ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextQuote}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Next quote"
            >
              <ChevronRight className="text-gray-700 dark:text-gray-200" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quotes;
