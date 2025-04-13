
export interface Experience {
  id: number;
  title: string;
  titleEn?: string;
  company: string;
  companyEn?: string;
  period: string;
  location: string;
  locationEn?: string;
  description: string;
  descriptionEn?: string;
  skills: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Alternante en science de données",
    titleEn: "Data Science Apprentice",
    company: "AIBOOSTforIndustries",
    companyEn: "AIBOOSTforIndustries",
    period: "Septembre 2024 - Aujourd'hui",
    location: "Casablanca, Maroc",
    locationEn: "Casablanca, Morocco",
    description: "Développement de solutions basées sur le machine learning et l'IA: prédiction et analyse du turnover, chatbot avec IA générative (Streamlit), tableau de bord interactif et automatisation de la collecte de données (web scraping avec Selenium).",
    descriptionEn: "Development of machine learning and AI-based solutions: turnover prediction and analysis, chatbot with generative AI (Streamlit), interactive dashboard and automation of data collection (web scraping with Selenium).",
    skills: ["Python", "Pandas", "Plotly", "Matplotlib", "Bokeh", "Scikit-learn", "Langchain", "Selenium"]
  },
  {
    id: 2,
    title: "Assistante en analyse de données",
    titleEn: "Data Analysis Assistant",
    company: "AIBOOSTforIndustries",
    companyEn: "AIBOOSTforIndustries",
    period: "Juillet 2024 - Août 2024",
    location: "Casablanca, Maroc",
    locationEn: "Casablanca, Morocco",
    description: "Développement d'algorithmes de traitement de fichiers JSON et analyse des transcriptions d'appels via LLMs.",
    descriptionEn: "Development of JSON file processing algorithms and analysis of call transcriptions via LLMs.",
    skills: ["Python", "Json", "Ftplib", "Pandas", "Wkhtmltopdf", "Pdfkit", "Jinja2"]
  },
  {
    id: 3,
    title: "Scientifique de données - Machine Learning",
    titleEn: "Data Scientist - Machine Learning",
    company: "Faculté des sciences de Marrakech",
    companyEn: "Faculty of Sciences of Marrakesh",
    period: "Juillet 2022 - Août 2022",
    location: "Marrakech, Maroc",
    locationEn: "Marrakesh, Morocco",
    description: "Exploration de diverses bibliothèques d'intelligence artificielle et mise en œuvre de la bibliothèque TensorFlow pour la détection de la violence.",
    descriptionEn: "Exploration of various artificial intelligence libraries and implementation of the TensorFlow library for violence detection.",
    skills: ["Python", "TensorFlow", "Machine Learning"]
  }
];

export default experiences;
