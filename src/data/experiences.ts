
export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Alternante en science de données",
    company: "AIBOOSTforIndustries",
    period: "Septembre 2024 - Aujourd'hui",
    location: "Casablanca, Maroc",
    description: "Développement de solutions basées sur le machine learning et l'IA: prédiction et analyse du turnover, chatbot avec IA générative (Streamlit), tableau de bord interactif et automatisation de la collecte de données (web scraping avec Selenium).",
    skills: ["Python", "Pandas", "Plotly", "Matplotlib", "Bokeh", "Scikit-learn", "Langchain", "Selenium"]
  },
  {
    id: 2,
    title: "Assistante en analyse de données",
    company: "AIBOOSTforIndustries",
    period: "Juillet 2024 - Août 2024",
    location: "Casablanca, Maroc",
    description: "Développement d'algorithmes de traitement de fichiers JSON et analyse des transcriptions d'appels via LLMs.",
    skills: ["Python", "Json", "Ftplib", "Pandas", "Wkhtmltopdf", "Pdfkit", "Jinja2"]
  },
  {
    id: 3,
    title: "Scientifique de données - Machine Learning",
    company: "Faculté des sciences de Marrakech",
    period: "Juillet 2022 - Août 2022",
    location: "Marrakech, Maroc",
    description: "Exploration de diverses bibliothèques d'intelligence artificielle et mise en œuvre de la bibliothèque TensorFlow pour la détection de la violence.",
    skills: ["Python", "TensorFlow", "Machine Learning"]
  }
];

export default experiences;
