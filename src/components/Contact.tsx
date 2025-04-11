
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from 'emailjs-com';
import { useLanguage } from "@/context/LanguageContext";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// EmailJS configuration - replace these with your actual service ID and template ID
const SERVICE_ID = "service_jgl6z6o";  // Replace with your EmailJS service ID
const TEMPLATE_ID = "template_j5zklcv"; // Replace with your EmailJS template ID
const PUBLIC_KEY = "2aE8Jn9MjIh4c1-Xb"; // Replace with your EmailJS public key

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const { t, language } = useLanguage();
  
  // Define form validation schema
  const formSchema = z.object({
    name: z.string().min(2, { message: language === 'fr' ? 
      "Le nom doit contenir au moins 2 caractères." : 
      "Name must contain at least 2 characters." 
    }),
    email: z.string().email({
      message: language === 'fr' ? 
        "Veuillez entrer une adresse email valide." : 
        "Please enter a valid email address."
    }),
    subject: z.string().optional(),
    message: z.string().min(10, {
      message: language === 'fr' ? 
        "Le message doit contenir au moins 10 caractères." : 
        "Message must contain at least 10 characters."
    }),
  });

  // Initialize form with react-hook-form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    },
  });
  
  // Handle form submission
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      // Show loading toast
      toast.loading(language === 'fr' ? "Envoi en cours..." : "Sending...");

      // Prepare template parameters
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        to_name: "Salma Ouahib",
        to_email: "salmaouahib02@gmail.com",
        subject: data.subject || (language === 'fr' ? "Nouveau message de contact" : "New contact message"),
        message: data.message
      };

      // Send email
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );
      
      // Dismiss loading toast and show success
      toast.dismiss();
      toast.success(language === 'fr' ? 
        "Message envoyé avec succès!" : 
        "Message sent successfully!"
      );
      
      // Reset form
      form.reset();
    } catch (error) {
      // Dismiss loading toast and show error
      toast.dismiss();
      toast.error(language === 'fr' ? 
        "Erreur lors de l'envoi du message. Veuillez réessayer." : 
        "Error sending message. Please try again."
      );
      console.error("Error sending email:", error);
    }
  };

  useEffect(() => {
    // Initialize EmailJS with public key
    emailjs.init(PUBLIC_KEY);
    
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
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto" ref={contactRef}>
        <h2 className="text-3xl font-bold text-center mb-12">{t('contact.title')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">{t('contact.title')}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                {t('contact.quote1')}
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {t('contact.quote2')}
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">{t('contact.methods')}</h4>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <i className="fa-solid fa-envelope text-purple-600 text-xl w-8"></i>
                  <a href="mailto:salmaouahib02@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    salmaouahib02@gmail.com
                  </a>
                </li>
                <li className="flex items-center">
                  <i className="fa-brands fa-linkedin text-purple-600 text-xl w-8"></i>
                  <a 
                    href="https://www.linkedin.com/in/salma-ouahib-140b13242/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    Salma Ouahib
                  </a>
                </li>
                <li className="flex items-center">
                  <i className="fa-solid fa-phone-volume text-purple-600 text-xl w-8"></i>
                  <span className="text-gray-700 dark:text-gray-300">+212 6 59 29 39 06</span>
                </li>
                <li className="flex items-center">
                  <i className="fa-solid fa-location-dot text-purple-600 text-xl w-8"></i>
                  <span className="text-gray-700 dark:text-gray-300">Rabat, Maroc</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">{t('quotes.title')}</h4>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <p className="italic text-gray-600 dark:text-gray-400 mb-2">
                  {t('quotes.quote1.text')}
                </p>
                <p className="text-right text-gray-500 dark:text-gray-400">{t('quotes.quote1.author')}</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6">{t('contact.send')}</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {t('contact.name')}*
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t('contact.name')}
                          className="focus:ring-1 focus:ring-purple-500"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {t('contact.email')}*
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder={t('contact.email')}
                          className="focus:ring-1 focus:ring-purple-500"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {t('contact.subject')}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t('contact.subject')}
                          className="focus:ring-1 focus:ring-purple-500"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {t('contact.message')}*
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={t('contact.message')}
                          className="min-h-[120px] focus:ring-1 focus:ring-purple-500"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600"
                >
                  {t('contact.send')}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
