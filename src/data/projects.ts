
import { FileText, Github, PanelLeft, FileCode, Database, BarChart2, Briefcase, Code, Monitor, Sword, Laptop } from "lucide-react";

export interface Project {
  id: number;
  title: string;
  description: string;
  period: string;
  objective: string;
  longDescription: string;
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
    description: "Centraliser et analyser des métriques d'évaluation pour les modèles de langage à grande échelle",
    period: "Avril 2025 - Présent",
    objective: "Centraliser et analyser des métriques d'évaluation pour les modèles de langage à grande échelle (BLEU, ROUGE, perplexité, etc.)",
    longDescription: "Conception d'un entrepôt de données pour évaluer les modèles de langage. Les données de différents benchmarks sont intégrées via SSIS, stockées dans SQL Server, modélisées dans SSAS, puis visualisées dans Power BI pour analyse multi-dimensionnelle.",
    technologies: ["Microsoft SQL Server", "SSIS", "SSAS", "SQL", "Microsoft Power BI"],
    icon: Database,
    image: "/public/lovable-uploads/37096719-bb19-4fa2-b8c7-800a7cc93bf0.png",
    githubLink: "https://github.com/OuahibSalma/LLM-Evaluation-DataWarehouse"
  },
  {
    id: 2,
    title: "Application de gestion des mobilités Erasmus+",
    description: "Digitaliser et centraliser la gestion des mobilités Erasmus+ en remplaçant les fichiers Excel",
    period: "Février 2025 - Avril 2025",
    objective: "Digitaliser et centraliser la gestion des mobilités Erasmus+ en remplaçant les fichiers Excel par une plateforme collaborative",
    longDescription: "Application web pour gérer, visualiser et suivre les mobilités Erasmus+, avec tableau de bord interactif, interface intuitive et système d'authentification multi-institution",
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
    description: "Concevoir une application web permettant l'exportation de données MySQL dans plusieurs formats standard",
    period: "10 avril 2025",
    objective: "Concevoir une application web permettant l'exportation de données MySQL dans plusieurs formats standard (JSON, XML, CSV, PDF, XLS)",
    longDescription: "Application permettant à l'utilisateur de sélectionner une base, une table et des colonnes, puis de générer des fichiers exportables. Interface côté client et logique d'export côté serveur avec bibliothèques Java spécialisées. Deux bases utilisées pour les tests : g_stock et g_restaurant.",
    technologies: ["Java JEE", "JSP", "Servlets", "MySQL", "HTML/CSS", "iText (PDF)", "Jackson (JSON)", "Apache POI (Excel)", "DOM (XML)", "OpenCSV (CSV)"],
    methodology: ["Architecture client-serveur"],
    icon: FileText,
    image: "/public/lovable-uploads/8f703841-93c6-45bb-9674-46cb1540b0b2.png"
  },
  {
    id: 4,
    title: "NetGuard: Classification du Trafic Réseau pour la Détection DDoS",
    description: "Détecter les attaques DDoS via la classification automatique du trafic réseau",
    period: "Janvier 2025",
    objective: "Détecter les attaques DDoS via la classification automatique du trafic réseau (BENIGN vs. DDoS)",
    longDescription: "Conception d'un système de détection d'intrusions basé sur des algorithmes de ML (KNN, SVM) et DL (MLP), incluant le nettoyage des données, la réduction de dimension, et l'évaluation de performance avec diverses métriques",
    technologies: ["Python", "Scikit-learn", "TensorFlow/Keras", "K-means"],
    methodology: ["Matrices de confusion", "Méthode du coude"],
    icon: Code,
    image: "/public/lovable-uploads/23bfa7b8-7aac-44e0-9424-9cafc99bca7d.png",
    githubLink: "https://github.com/OuahibSalma/NetGuard-DDoS-Detection"
  },
  {
    id: 5,
    title: "Hanoutna – Système d'information pour la gestion de magasins",
    description: "Centraliser la gestion des stocks, ventes, commandes et fidélisation client",
    period: "Année académique 2024/2025",
    objective: "Centraliser la gestion des stocks, ventes, commandes et fidélisation client dans un réseau de magasins",
    longDescription: "Conception d'un SI complet, modélisation (MCD, MCT, MOT), développement d'interfaces de gestion, et mise en place d'un tableau de bord analytique",
    technologies: ["UML", "UX/UI", "Business Intelligence"],
    icon: Monitor,
    image: "/public/lovable-uploads/9d743970-f029-4582-9ba4-72f67e82cd3d.png"
  },
  {
    id: 6,
    title: "Lisan: Une conversation vocale mieux qu'une lecture",
    description: "Explorer les modèles de NLP en arabe à travers des conversations vocales",
    period: "Avril 2024 - Juin 2024",
    objective: "Explorer les modèles de NLP en arabe à travers des conversations vocales",
    longDescription: "Comparaison de plusieurs modèles NLP arabes préentraînés disponibles sur Hugging Face, avec évaluation de la rapidité et de la précision via des tests automatisés",
    technologies: ["Python", "Transformers", "pydub", "gTTS"],
    icon: FileCode,
    image: "/public/lovable-uploads/37096719-bb19-4fa2-b8c7-800a7cc93bf0.png",
    githubLink: "https://github.com/OuahibSalma/Lisan-tehniques-de-Deep-Learning"
  },
  {
    id: 7,
    title: "HabitatVisualisation",
    description: "Visualiser les données relatives au logement à travers des dashboards interactifs",
    period: "Mai 2024 - Juin 2024",
    objective: "Visualiser les données relatives au logement à travers des dashboards interactifs",
    longDescription: "Création d'une application interactive avec Bokeh à partir de données open source",
    technologies: ["Python", "Pandas", "Bokeh"],
    icon: BarChart2,
    image: "/public/lovable-uploads/570f1392-1225-4b49-b852-3b70da07df86.png",
    githubLink: "https://github.com/OuahibSalma/Dashboard_habitat-units"
  },
  {
    id: 8,
    title: "Application bancaire en Java",
    description: "Concevoir une application desktop pour la gestion de comptes bancaires",
    period: "Mars 2024 - Avril 2024",
    objective: "Concevoir une application desktop pour la gestion de comptes bancaires",
    longDescription: "Application Swing avec base de données intégrée, conception UML, interface utilisateur",
    technologies: ["Java", "Swing", "UML"],
    icon: Laptop,
    image: "/public/lovable-uploads/cfc5896c-2569-4709-bdc6-43eff6bfa0ba.png"
  },
  {
    id: 9,
    title: "PharmaVision: Gestion des Stocks",
    description: "Améliorer la gestion des stocks de médicaments à l'hôpital d'Oujda",
    period: "Décembre 2023 - Janvier 2024",
    objective: "Améliorer la gestion des stocks de médicaments à l'hôpital d'Oujda",
    longDescription: "Analyse des commandes, consommations et ruptures de stock via Power BI",
    technologies: ["Power BI", "Excel", "Analyse de données"],
    icon: BarChart2,
    image: "/public/lovable-uploads/23bfa7b8-7aac-44e0-9424-9cafc99bca7d.png"
  },
  {
    id: 10,
    title: "Jeu Mario – Jeu vidéo en Python",
    description: "Concevoir un jeu vidéo basé sur Mario avec Pygame",
    period: "Mai 2023 - Juin 2023",
    objective: "Concevoir un jeu vidéo basé sur Mario avec Pygame",
    longDescription: "Modélisation UML, création de niveaux via Tiled, développement complet du jeu",
    technologies: ["Python", "Pygame", "UML", "Tiled"],
    icon: Sword,
    image: "/public/lovable-uploads/9d743970-f029-4582-9ba4-72f67e82cd3d.png"
  },
  {
    id: 11,
    title: "LearnCode – Site vitrine HTML/CSS/JS",
    description: "Créer un site web statique pour promouvoir l'apprentissage du code",
    period: "Décembre 2021 - Janvier 2022",
    objective: "Créer un site web statique pour promouvoir l'apprentissage du code",
    longDescription: "Premier projet web pour apprendre les bases du HTML, CSS et JavaScript",
    technologies: ["HTML", "CSS", "JavaScript"],
    icon: PanelLeft,
    image: "/public/lovable-uploads/570f1392-1225-4b49-b852-3b70da07df86.png"
  }
];

export default projects;
