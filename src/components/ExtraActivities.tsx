
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";

const ExtraActivities = () => {
  const { t } = useLanguage();
  
  const activities = [
    {
      id: 1,
      title: t('extraActivities.cindh'),
      role: t('extraActivities.cindhRole'),
      description: t('extraActivities.cindhText'),
      image: "/public/Images/Convoi_2025.jpg"
    },
    {
      id: 2,
      title: t('extraActivities.activity2'),
      role: t('extraActivities.activity2Role'),
      description: t('extraActivities.activity2Text'),
      image: "/public/Images/CINDH.png"
    }
  ];

  return (
    <section id="activities" className="section-padding bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto reveal">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">{t('extraActivities.title')}</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden h-full shadow-md hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={activity.image} 
                    alt={activity.title} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">{activity.title}</h3>
                  <p className="text-purple-600 dark:text-purple-400 text-sm mb-4">{activity.role}</p>
                  <p className="text-gray-600 dark:text-gray-300">{activity.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm dark:shadow-gray-900/30 max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">{t('extraActivities.why')}</h3>
          <p className="text-gray-700 dark:text-gray-300">
            {t('extraActivities.whyText')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExtraActivities;
