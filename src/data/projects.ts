
import { FileText, Github, PanelLeft, FileCode, Database, BarChart2, Briefcase, Code, Monitor, Sword, Laptop } from "lucide-react";

export interface Project {
  id: number;
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  period: string;
  periodEn?: string;
  objective: string;
  objectiveEn?: string;
  longDescription: string;
  longDescriptionEn?: string;
  technologies: string[];
  methodology?: string[];
  tools?: string[];
  icon: any;
  image: string;
  githubLink?: string;
  pdfLink?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "EvalLLMInsight: Data Warehouse pour l'Évaluation des LLMs",
    titleEn: "EvalLLMInsight: Data Warehouse for LLM Evaluation",
    description: "Centraliser et analyser des métriques d'évaluation pour les modèles de langage à grande échelle",
    descriptionEn: "Centralize and analyze evaluation metrics for large language models",
    period: "Avril 2025 - Présent",
    periodEn: "April 2025 - Present",
    objective: "Centraliser et analyser des métriques d'évaluation pour les modèles de langage à grande échelle (BLEU, ROUGE, perplexité, etc.)",
    objectiveEn: "Centralize and analyze evaluation metrics for large language models (BLEU, ROUGE, perplexity, etc.)",
    longDescription: "Conception d'un entrepôt de données pour évaluer les modèles de langage. Les données de différents benchmarks sont intégrées via SSIS, stockées dans SQL Server, modélisées dans SSAS, puis visualisées dans Power BI pour analyse multi-dimensionnelle.",
    longDescriptionEn: "Design of a data warehouse to evaluate language models. Data from different benchmarks are integrated via SSIS, stored in SQL Server, modeled in SSAS, then visualized in Power BI for multi-dimensional analysis.",
    technologies: ["Microsoft SQL Server", "SSIS", "SSAS", "SQL", "Microsoft Power BI"],
    icon: Database,
    image: "/public/lovable-uploads/37096719-bb19-4fa2-b8c7-800a7cc93bf0.png",
    githubLink: "https://github.com/OuahibSalma/LLM-Evaluation-DataWarehouse"
  },
  {
    id: 2,
    title: "Application de gestion des mobilités Erasmus+",
    titleEn: "Erasmus+ Mobility Management Application",
    description: "Digitaliser et centraliser la gestion des mobilités Erasmus+ en remplaçant les fichiers Excel",
    descriptionEn: "Digitize and centralize Erasmus+ mobility management by replacing Excel files",
    period: "Février 2025 - Avril 2025",
    periodEn: "February 2025 - April 2025",
    objective: "Digitaliser et centraliser la gestion des mobilités Erasmus+ en remplaçant les fichiers Excel par une plateforme collaborative",
    objectiveEn: "Digitize and centralize Erasmus+ mobility management by replacing Excel files with a collaborative platform",
    longDescription: "Application web pour gérer, visualiser et suivre les mobilités Erasmus+, avec tableau de bord interactif, interface intuitive et système d'authentification multi-institution",
    longDescriptionEn: "Web application to manage, visualize and track Erasmus+ mobility, with interactive dashboard, intuitive interface and multi-institution authentication system",
    technologies: ["React.js", "Recharts", "Flask (Python)", "API REST", "SQLite", "Faker.js"],
    methodology: ["Conception UML", "architecture client-serveur"],
    tools: ["GitHub", "VS Code"],
    icon: Briefcase,
    image: "/public/lovable-uploads/23bfa7b8-7aac-44e0-9424-9cafc99bca7d.png",
    githubLink: "https://github.com/OuahibSalma/erasmus-mobility-manager"
  },
  {
    id: 3,
    title: "Application web d'exportation de bases de données SQL",
    titleEn: "SQL Database Export Web Application",
    description: "Concevoir une application web permettant l'exportation de données MySQL dans plusieurs formats standard",
    descriptionEn: "Design a web application for exporting MySQL data in multiple standard formats",
    period: "10 avril 2025",
    periodEn: "April 10, 2025",
    objective: "Concevoir une application web permettant l'exportation de données MySQL dans plusieurs formats standard (JSON, XML, CSV, PDF, XLS)",
    objectiveEn: "Design a web application for exporting MySQL data in multiple standard formats (JSON, XML, CSV, PDF, XLS)",
    longDescription: "Application permettant à l'utilisateur de sélectionner une base, une table et des colonnes, puis de générer des fichiers exportables. Interface côté client et logique d'export côté serveur avec bibliothèques Java spécialisées. Deux bases utilisées pour les tests : g_stock et g_restaurant.",
    longDescriptionEn: "Application allowing the user to select a database, a table and columns, then generate exportable files. Client-side interface and server-side export logic with specialized Java libraries. Two databases used for testing: g_stock and g_restaurant.",
    technologies: ["Java JEE", "JSP", "Servlets", "MySQL", "HTML/CSS", "iText (PDF)", "Jackson (JSON)", "Apache POI (Excel)", "DOM (XML)", "OpenCSV (CSV)"],
    methodology: ["Architecture client-serveur"],
    icon: FileText,
    image: "/public/lovable-uploads/8f703841-93c6-45bb-9674-46cb1540b0b2.png"
  },
  {
    id: 4,
    title: "NetGuard: Classification du Trafic Réseau pour la Détection DDoS",
    titleEn: "NetGuard: Network Traffic Classification for DDoS Detection",
    description: "Détecter les attaques DDoS via la classification automatique du trafic réseau",
    descriptionEn: "Detect DDoS attacks via automatic classification of network traffic",
    period: "Janvier 2025",
    periodEn: "January 2025",
    objective: "Détecter les attaques DDoS via la classification automatique du trafic réseau (BENIGN vs. DDoS)",
    objectiveEn: "Detect DDoS attacks via automatic classification of network traffic (BENIGN vs. DDoS)",
    longDescription: "Conception d'un système de détection d'intrusions basé sur des algorithmes de ML (KNN, SVM) et DL (MLP), incluant le nettoyage des données, la réduction de dimension, et l'évaluation de performance avec diverses métriques",
    longDescriptionEn: "Design of an intrusion detection system based on ML algorithms (KNN, SVM) and DL (MLP), including data cleaning, dimensionality reduction, and performance evaluation with various metrics",
    technologies: ["Python", "Scikit-learn", "TensorFlow/Keras", "K-means"],
    methodology: ["Matrices de confusion", "Méthode du coude"],
    icon: Code,
    image: "/public/lovable-uploads/23bfa7b8-7aac-44e0-9424-9cafc99bca7d.png",
    githubLink: "https://github.com/OuahibSalma/NetGuard-DDoS-Detection"
  },
  {
    id: 5,
    title: "Hanoutna – Système d'information pour la gestion de magasins",
    titleEn: "Hanoutna – Information System for Store Management",
    description: "Centraliser la gestion des stocks, ventes, commandes et fidélisation client",
    descriptionEn: "Centralize inventory management, sales, orders and customer loyalty",
    period: "Décembre 2024 - Janvier 2025",
    periodEn: "December 2024 - January 2025",
    objective: "Centraliser la gestion des stocks, ventes, commandes et fidélisation client dans un réseau de magasins",
    objectiveEn: "Centralize inventory management, sales, orders and customer loyalty in a network of stores",
    longDescription: "Conception d'un SI complet avec APEX Oracle, modélisation (MCD, MCT, MOT, MLD, MPD), développement d'interfaces de gestion, et mise en place d'un tableau de bord analytique",
    longDescriptionEn: "Design of a complete IS with APEX Oracle, modeling (CDM, LDM, PDM), development of management interfaces, and implementation of an analytical dashboard",
    technologies: ["UML", "APEX Oracle", "UX/UI", "Business Intelligence"],
    icon: Monitor,
    image: "/public/lovable-uploads/9d743970-f029-4582-9ba4-72f67e82cd3d.png"
  },
  {
    id: 6,
    title: "Lisan: Une conversation vocale mieux qu'une lecture",
    titleEn: "Lisan: A vocal conversation better than reading",
    description: "Explorer les modèles de NLP en arabe à travers des conversations vocales",
    descriptionEn: "Explore Arabic NLP models through voice conversations",
    period: "Avril 2024 - Juin 2024",
    periodEn: "April 2024 - June 2024",
    objective: "Explorer les modèles de NLP en arabe à travers des conversations vocales",
    objectiveEn: "Explore Arabic NLP models through voice conversations",
    longDescription: "Comparaison de plusieurs modèles NLP arabes préentraînés disponibles sur Hugging Face, avec évaluation de la rapidité et de la précision via des tests automatisés",
    longDescriptionEn: "Comparison of several pre-trained Arabic NLP models available on Hugging Face, with evaluation of speed and accuracy via automated tests",
    technologies: ["Python", "Transformers", "pydub", "gTTS"],
    icon: FileCode,
    image: "/public/lovable-uploads/37096719-bb19-4fa2-b8c7-800a7cc93bf0.png",
    githubLink: "https://github.com/OuahibSalma/Lisan-tehniques-de-Deep-Learning"
  },
  {
    id: 7,
    title: "HabitatVisualisation",
    titleEn: "HabitatVisualization",
    description: "Visualiser les données relatives au logement à travers des dashboards interactifs",
    descriptionEn: "Visualize housing data through interactive dashboards",
    period: "Mai 2024 - Juin 2024",
    periodEn: "May 2024 - June 2024",
    objective: "Visualiser les données relatives au logement à travers des dashboards interactifs",
    objectiveEn: "Visualize housing data through interactive dashboards",
    longDescription: "Création d'une application interactive avec Bokeh à partir de données open source",
    longDescriptionEn: "Creation of an interactive application with Bokeh from open source data",
    technologies: ["Python", "Pandas", "Bokeh"],
    icon: BarChart2,
    image: "/public/lovable-uploads/570f1392-1225-4b49-b852-3b70da07df86.png",
    githubLink: "https://github.com/OuahibSalma/Dashboard_habitat-units"
  },
  {
    id: 8,
    title: "Application bancaire en Java",
    titleEn: "Java Banking Application",
    description: "Concevoir une application desktop pour la gestion de comptes bancaires",
    descriptionEn: "Design a desktop application for managing bank accounts",
    period: "Mars 2024 - Avril 2024",
    periodEn: "March 2024 - April 2024",
    objective: "Concevoir une application desktop pour la gestion de comptes bancaires",
    objectiveEn: "Design a desktop application for managing bank accounts",
    longDescription: "Application Swing avec base de données intégrée, conception UML, interface utilisateur",
    longDescriptionEn: "Swing application with integrated database, UML design, user interface",
    technologies: ["Java", "Swing", "UML"],
    icon: Laptop,
    image: "/public/lovable-uploads/cfc5896c-2569-4709-bdc6-43eff6bfa0ba.png"
  },
  {
    id: 9,
    title: "PharmaVision: Gestion des Stocks",
    titleEn: "PharmaVision: Inventory Management",
    description: "Améliorer la gestion des stocks de médicaments à l'hôpital d'Oujda",
    descriptionEn: "Improve medication inventory management at Oujda Hospital",
    period: "Décembre 2023 - Janvier 2024",
    periodEn: "December 2023 - January 2024",
    objective: "Améliorer la gestion des stocks de médicaments à l'hôpital d'Oujda",
    objectiveEn: "Improve medication inventory management at Oujda Hospital",
    longDescription: "Analyse des commandes, consommations et ruptures de stock via Power BI",
    longDescriptionEn: "Analysis of orders, consumption and stockouts via Power BI",
    technologies: ["Power BI", "Excel", "Analyse de données"],
    icon: BarChart2,
    image: "/public/lovable-uploads/23bfa7b8-7aac-44e0-9424-9cafc99bca7d.png"
  },
  {
    id: 10,
    title: "Jeu Mario – Jeu vidéo en Python",
    titleEn: "Mario Game – Python Video Game",
    description: "Concevoir un jeu vidéo basé sur Mario avec Pygame",
    descriptionEn: "Design a Mario-based video game with Pygame",
    period: "Mai 2023 - Juin 2023",
    periodEn: "May 2023 - June 2023",
    objective: "Concevoir un jeu vidéo basé sur Mario avec Pygame",
    objectiveEn: "Design a Mario-based video game with Pygame",
    longDescription: "Modélisation UML, création de niveaux via Tiled, développement complet du jeu",
    longDescriptionEn: "UML modeling, level creation via Tiled, complete game development",
    technologies: ["Python", "Pygame", "UML", "Tiled"],
    icon: Sword,
    image: "/public/lovable-uploads/9d743970-f029-4582-9ba4-72f67e82cd3d.png"
  },
  {
    id: 11,
    title: "LearnCode – Site vitrine HTML/CSS/JS",
    titleEn: "LearnCode – HTML/CSS/JS Showcase Website",
    description: "Créer un site web statique pour promouvoir l'apprentissage du code",
    descriptionEn: "Create a static website to promote code learning",
    period: "Décembre 2021 - Janvier 2022",
    periodEn: "December 2021 - January 2022",
    objective: "Créer un site web statique pour promouvoir l'apprentissage du code",
    objectiveEn: "Create a static website to promote code learning",
    longDescription: "Premier projet web pour apprendre les bases du HTML, CSS et JavaScript",
    longDescriptionEn: "First web project to learn the basics of HTML, CSS and JavaScript",
    technologies: ["HTML", "CSS", "JavaScript"],
    icon: PanelLeft,
    image: "/public/lovable-uploads/570f1392-1225-4b49-b852-3b70da07df86.png"
  }
];

export default projects;

