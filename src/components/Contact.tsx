
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formState.name || !formState.email || !formState.message) {
      toast.error("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      toast.error("Veuillez entrer une adresse email valide.");
      return;
    }

    // Here you would typically send the form data to a server
    // For now, we'll just show a success message
    toast.success("Message envoyé avec succès!");
    setFormState({ name: "", email: "", subject: "", message: "" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal", "active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const contactElement = contactRef.current;
    if (contactElement) {
      observer.observe(contactElement);
    }

    return () => {
      if (contactElement) {
        observer.unobserve(contactElement);
      }
    };
  }, []);

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto" ref={contactRef}>
        <h2 className="text-3xl font-bold text-center mb-12">Me Contacter</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">Parlons de tout!</h3>
              <p className="text-gray-600 mb-2">
                "Le dialogue est le chemin le plus court entre deux personnes."
              </p>
              <p className="text-gray-600 mb-6">
                "Les meilleures idées naissent souvent d'une simple conversation."
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">Mes coordonnées</h4>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <i className="fa-solid fa-envelope text-purple-600 text-xl w-8"></i>
                  <a href="mailto:salmaouahib02@gmail.com" className="text-gray-700 hover:text-purple-600 transition-colors">
                    salmaouahib02@gmail.com
                  </a>
                </li>
                <li className="flex items-center">
                  <i className="fa-brands fa-linkedin text-purple-600 text-xl w-8"></i>
                  <a 
                    href="https://www.linkedin.com/in/salma-ouahib-140b13242/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-purple-600 transition-colors"
                  >
                    Salma Ouahib
                  </a>
                </li>
                <li className="flex items-center">
                  <i className="fa-solid fa-phone-volume text-purple-600 text-xl w-8"></i>
                  <span className="text-gray-700">+212 6 59 29 39 06</span>
                </li>
                <li className="flex items-center">
                  <i className="fa-solid fa-location-dot text-purple-600 text-xl w-8"></i>
                  <span className="text-gray-700">Rabat, Maroc</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">Citation</h4>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <p className="italic text-gray-600 mb-2">
                  "Le succès n'est pas final, l'échec n'est pas fatal. C'est le courage de continuer qui compte."
                </p>
                <p className="text-right text-gray-500">- Winston Churchill</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="bg-white p-8 rounded-xl shadow-md"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Envoyez-moi un message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1 block">
                  Nom*
                </label>
                <Input 
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  placeholder="Votre nom"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1 block">
                  Email*
                </label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  placeholder="Votre email"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="text-sm font-medium text-gray-700 mb-1 block">
                  Sujet
                </label>
                <Input 
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleInputChange}
                  placeholder="Sujet de votre message"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="text-sm font-medium text-gray-700 mb-1 block">
                  Message*
                </label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  placeholder="Écrivez votre message"
                  className="min-h-[120px]"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-purple-600 hover:bg-purple-700"
              >
                Envoyer le message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
