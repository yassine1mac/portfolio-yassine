// src/translations.js
const translations = {
  en: {
    hero: {
      hello: "Hi, I'm",
      title: "Yassine Chmirrou",
      subtitle: "Big Data & AI Engineer",
      badge: "State Engineer · ENSA Tétouan, June 2026",
      description: "I design and ship end-to-end AI systems: LLMs, RAG pipelines, Text-to-SQL, distributed data processing with Spark, and production-ready backends with FastAPI. Open to full-time engineering roles and freelance missions.",
      projectsCta: "See my projects",
      cv: "Download CV",
      stats: {
        projects: "Real projects",
        degree: "Engineer Degree",
        stack: "Tech stack"
      }
    },
    heroDemo: {
      title: "agrimind — text-to-sql",
      resultsLabel: "results",
      examples: [
        {
          nl: "Which parcels exceeded their irrigation quota this month?",
          sql: [
            "SELECT parcel_id, region,",
            "       SUM(irrigation_m3) AS total_m3",
            "FROM   irrigation_events",
            "WHERE  month = '2026-06'",
            "GROUP BY parcel_id, region",
            "HAVING SUM(irrigation_m3) > quota_m3",
            "ORDER BY total_m3 DESC;"
          ],
          result: "47 parcels over quota · 380 ms"
        },
        {
          nl: "List critical moisture-sensor anomalies in sector 4.",
          sql: [
            "SELECT sensor_id, timestamp, humidity_pct",
            "FROM   anomalies_moisture",
            "WHERE  severity = 'critical'",
            "  AND  sector = 4",
            "ORDER BY timestamp DESC",
            "LIMIT  20;"
          ],
          result: "12 critical anomalies · 220 ms"
        },
        {
          nl: "Average yield per variety over the last 3 seasons.",
          sql: [
            "SELECT variety, AVG(yield_qha) AS avg_yield",
            "FROM   harvests h",
            "JOIN   parcels  p ON p.id = h.parcel_id",
            "WHERE  h.season BETWEEN 2023 AND 2025",
            "GROUP BY variety",
            "ORDER BY avg_yield DESC;"
          ],
          result: "34 varieties analyzed · 410 ms"
        }
      ]
    },
    about: {
      eyebrow: "01 · About",
      title: "Engineered for AI at scale",
      description: "Big Data & AI Engineer · LLM & RAG systems · Full-stack developer — turning production data into intelligent products.",
      p1_prefix: "I'm a ",
      p1_role: "State Engineer",
      p1_middle: " in ",
      p1_field: "Data Science, Big Data, and Artificial Intelligence",
      p1_suffix: " from ENSA Tétouan, Morocco — ",
      p1_class: "graduated June 2026",
      p1_end: ".",
      p2: "My work covers the entire AI lifecycle: from LLM fine-tuning (LoRA/PEFT) and RAG architectures (FAISS, BM25, RRF) to distributed data processing with Apache Spark, FastAPI backends, and modern React frontends. I ship production systems, not notebooks.",
      p3_prefix: "As ",
      p3_role: "Vice President of the AI Geeks Club",
      p3_suffix: " at ENSA Tétouan (2024–2026), I led technical workshops, organized hackathons, and mentored students in machine learning and software engineering.",
      p4_prefix: "I'm passionate about building ",
      p4_bold: "scalable AI solutions",
      p4_middle: " that solve real business problems — from Text-to-SQL over 987 production tables to a Darija voice assistant serving 40M Moroccan speakers. Currently open to ",
      p4_bold2: "engineering roles and freelance missions",
      p4_end: " in AI, ML, and Data Engineering.",
      quote: "Turning data into intelligence, and intelligence into action.",
      highlights: [
        {
          title: "LLMs & RAG",
          description: "Fine-tuning (LoRA/PEFT), Text-to-SQL, retrieval pipelines with FAISS + BM25 + RRF"
        },
        {
          title: "Big Data Engineering",
          description: "Scalable pipelines with Apache Spark, SQL Server at production scale, MLflow tracking"
        },
        {
          title: "Full-Stack Development",
          description: "FastAPI, Django, React, React Native (Expo), Node.js — from API to mobile"
        },
        {
          title: "Delivered to Clients",
          description: "Live systems in agriculture, hospitality, and maritime tourism — not tutorials"
        }
      ]
    },
    skills: {
      eyebrow: "02 · Skills",
      title: "Technical expertise",
      description: "Engineering-grade proficiency across the full AI/ML lifecycle — from LLM fine-tuning to production data pipelines.",
      categories: [
        {
          category: "AI & LLMs",
          skills: [
            { name: "LLMs, RAG (FAISS, BM25, RRF)", level: 90 },
            { name: "Fine-tuning LoRA / PEFT", level: 85 },
            { name: "Text-to-SQL, NLP, Prompt Engineering", level: 88 },
            { name: "Ollama, Hugging Face, LangChain", level: 82 }
          ]
        },
        {
          category: "Data & Machine Learning",
          skills: [
            { name: "Python, SQL", level: 95 },
            { name: "Apache Spark", level: 82 },
            { name: "scikit-learn, MLflow", level: 85 },
            { name: "Power BI, Data Analysis", level: 80 }
          ]
        },
        {
          category: "Full-Stack & Ops",
          skills: [
            { name: "FastAPI, Django, Node.js", level: 88 },
            { name: "React, React Native (Expo)", level: 85 },
            { name: "Docker, Linux, Git/GitHub", level: 87 },
            { name: "AWS, Vercel, Railway", level: 75 }
          ]
        }
      ]
    },
    techStack: {
      eyebrow: "03 · Tech Stack",
      title: "Tools of the trade",
      description: "The languages, frameworks, and platforms I use to ship AI systems in production."
    },
    projects: {
      eyebrow: "04 · Projects",
      title: "Selected engineering work",
      description: "Real projects delivered for enterprises and clients — LLM systems, mobile apps, and full-stack platforms shipped to production.",
      featuredBadge: "Featured",
      liveDemo: "Live Demo",
      viewCode: "View Code",
      showAll: (n) => `View All ${n} Projects`,
      showLess: "Show Less",
      categories: {
        all: "All",
        ai: "AI & LLMs",
        fullstack: "Full-Stack",
        mobile: "Mobile",
        cv: "Computer Vision"
      },
      items: [
        {
          key: "agrimind",
          title: "AgriMind — Agricultural Intelligence Platform",
          category: "ai",
          categoryLabel: "AI & LLMs",
          description: "On-premise Text-to-SQL and anomaly-detection platform built during my end-of-studies internship at AgriData Consulting. Queries a production SQL Server of ~**987 tables** in natural language, powered by **Qwen2.5-Coder 32B** (GPU via Ollama) with a **LoRA-fine-tuned Phi-3-mini** fallback. Hybrid RAG (**FAISS + BM25 + Reciprocal Rank Fusion**) grounds the LLM in the schema. Data-quality layer runs 19 checks with **Apache Spark** profiling — optimized one critical control from **91 s to 400 ms**. Backend: **FastAPI** (~33 endpoints); frontend: **React**.",
          tech: ["LLM", "Text-to-SQL", "RAG", "LoRA", "Spark", "FastAPI", "React"],
          featured: true
        },
        {
          key: "sahbi",
          title: "SAHBI — Darija Voice Assistant",
          category: "ai",
          categoryLabel: "AI & LLMs",
          description: "Speech-recognition assistant for Moroccan Arabic (Darija — **~40M speakers**), built by fine-tuning **OpenAI Whisper** with **LoRA/PEFT** on three Darija datasets (DODa, Moroccan-Darija-Wiki-Audio, darija-stt-mix). Training pipeline on Google Colab, evaluation on held-out audio.",
          tech: ["ASR", "Whisper", "LoRA", "PEFT", "Hugging Face"],
          featured: true
        },
        {
          key: "volta",
          title: "VOLTA — Merchant Loyalty Platform",
          category: "mobile",
          categoryLabel: "Mobile",
          description: "Loyalty platform delivered to a real client: mobile app in **React Native (Expo)** + REST API in **Node.js/Express/PostgreSQL** deployed on Railway. Features SMS OTP via **Twilio**, rotating **QR codes**, and daily PIN codes for stamp validation. Shipped and running in production.",
          tech: ["React Native", "Node.js", "PostgreSQL", "Twilio", "Railway"],
          featured: true
        },
        {
          key: "reviewsense",
          title: "ReviewSense AI — Hotel Review Analytics SaaS",
          category: "fullstack",
          categoryLabel: "Full-Stack",
          description: "NLP SaaS for Moroccan hoteliers: scrapes reviews from Booking, TripAdvisor and Google Maps, runs sentiment analysis, and serves subscription-tiered dashboards with health scoring. Backend: **Django REST**; frontend: **React + Vite + Tailwind**; ML: **scikit-learn / TextBlob**.",
          tech: ["NLP", "Django REST", "React", "Vite", "scikit-learn"],
          featured: false
        },
        {
          key: "cheating",
          title: "Exam Cheating Detection",
          category: "cv",
          categoryLabel: "Computer Vision",
          description: "Real-time detection of suspicious exam behavior via **pose estimation** with MediaPipe, plus a temporal classifier (**CNN + LSTM**) and object detection (**YOLO**). Experiments tracked with **MLflow** for reproducibility.",
          tech: ["MediaPipe", "CNN+LSTM", "YOLO", "MLflow", "OpenCV"],
          featured: false
        },
        {
          key: "rag-chatbot",
          title: "RAG Chatbot with LangChain",
          category: "ai",
          categoryLabel: "AI & LLMs",
          description: "Context-aware chatbot using **Retrieval-Augmented Generation**. Integrates a vector store for document retrieval and a **FastAPI** backend — the pattern later scaled up in AgriMind.",
          tech: ["LangChain", "RAG", "FastAPI", "Vector DB"],
          featured: false
        }
      ]
    },
    timeline: {
      eyebrow: "05 · Journey",
      title: "My path to becoming an engineer",
      description: "From engineering studies to shipping production AI — the milestones that shaped my work.",
      quote: "The best way to predict the future is to engineer it.",
      items: [
        {
          title: "AgriData Consulting — End-of-Studies Internship (PFE)",
          subtitle: "AI Engineer Intern · Agadir, Morocco",
          date: "Feb – Jun 2026",
          description: "Designed and built AgriMind: an on-premise Text-to-SQL and anomaly-detection platform over a ~987-table SQL Server. Deployed Qwen2.5-Coder 32B with a LoRA-fine-tuned Phi-3-mini fallback; hybrid RAG (FAISS + BM25 + RRF). Delivered a FastAPI backend (~33 endpoints) and React UI, plus 19 Spark-based data-quality controls."
        },
        {
          title: "OCP Group — Applied Project Internship (PFA)",
          subtitle: "Data Science Intern · Khouribga, Morocco",
          date: "Jul – Sep 2025",
          description: "Built an ML model to predict the processing time of RFPs on SAP Ariba Sourcing. Prepared large-scale procurement data, engineered features, and improved SLA tracking for the sourcing team."
        },
        {
          title: "Freelance Developer — Web & AI",
          subtitle: "Independent · Morocco",
          date: "2025 – Present",
          description: "Delivered an internal management platform for a maritime-tourism fleet in Agadir (Next.js, Prisma, NextAuth): bookings, operations, and reporting. Also shipping the VOLTA loyalty platform (React Native + Node.js) for a merchant client."
        },
        {
          title: "Transparence Informatique — Internship",
          subtitle: "Data Analyst Intern · Agadir, Morocco",
          date: "Aug – Sep 2024",
          description: "Built interactive Power BI / Excel dashboards, consolidated multi-source data, and automated recurring KPI reporting workflows."
        },
        {
          title: "ENSA Tétouan — State Engineer Degree",
          subtitle: "Data Science, Big Data & AI · Vice President, AI Geeks Club",
          date: "2020 – 2026",
          description: "5-year State Engineer program (Diplôme d'Ingénieur d'État) in Data Science, Big Data & AI at Abdelmalek Essaâdi University. Coursework in machine learning, deep learning, distributed systems, cloud, and MLOps. Vice President of the AI Geeks Club (2024–2026): led workshops, hackathons, and student mentoring. Graduated June 2026."
        }
      ]
    },
    certifications: {
      eyebrow: "06 · Credentials",
      title: "Certifications & degree",
      description: "Formal recognition of the skills I bring to production AI systems.",
      statusCompleted: "Completed",
      statusInProgress: "In Progress"
    },
    testimonials: {
      eyebrow: "07 · Recommendations",
      title: "What people say",
      description: "Feedback from mentors, colleagues, and clients I've worked with.",
      cta: "Want to work together or leave a recommendation?",
      ctaButton: "Get In Touch"
    },
    contact: {
      eyebrow: "08 · Contact",
      title: "Let's build something together",
      description: "Open to full-time AI/Data engineering roles and freelance missions — LLM systems, data platforms, and full-stack applications.",
      infoTitle: "Contact Information",
      infoIntro: "Let's discuss your next big idea or just say hello!",
      email: "Email",
      whatsapp: "WhatsApp",
      location: "Location",
      locationValue: "Agadir / Tétouan, Morocco",
      followMe: "Follow me on",
      quickResponseTitle: "Quick Response",
      quickResponseBody: "I typically respond within 24 hours. For urgent matters, please reach out via WhatsApp.",
      form: {
        name: "Your Name",
        email: "Email Address",
        subject: "Subject",
        message: "Message",
        namePlaceholder: "John Doe",
        emailPlaceholder: "john@example.com",
        subjectPlaceholder: "Project Collaboration",
        messagePlaceholder: "Tell me about your project...",
        send: "Send Message",
        sending: "Sending...",
        sent: "Message Sent!",
        success: "Thank you! I'll get back to you soon.",
        error: "Something went wrong. Please try again or contact me directly.",
        errors: {
          nameRequired: "Name is required",
          emailRequired: "Email is required",
          emailInvalid: "Please enter a valid email",
          subjectRequired: "Subject is required",
          messageRequired: "Message is required",
          messageShort: "Message must be at least 10 characters"
        }
      }
    },
    footer: {
      tagline: "Big Data & AI Engineer — LLM systems, data platforms, and full-stack applications shipped to production.",
      quote: "\"The best way to predict the future is to invent it.\" — Alan Kay",
      nav: {
        about: "About",
        projects: "Projects",
        skills: "Skills",
        contact: "Contact"
      }
    },
    navbar: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact"
    }
  },
  fr: {
    hero: {
      hello: "Salut, je suis",
      title: "Yassine Chmirrou",
      subtitle: "Ingénieur d'État en Big Data & IA",
      badge: "Ingénieur d'État · ENSA Tétouan, juin 2026",
      description: "Je conçois et livre des systèmes d'IA de bout en bout : LLMs, pipelines RAG, Text-to-SQL, traitement distribué avec Spark, backends FastAPI en production. Ouvert aux postes en CDI et aux missions freelance.",
      projectsCta: "Voir mes projets",
      cv: "Télécharger mon CV",
      stats: {
        projects: "Projets réels",
        degree: "Diplôme d'ingénieur",
        stack: "Stack technique"
      }
    },
    heroDemo: {
      title: "agrimind — text-to-sql",
      resultsLabel: "résultats",
      examples: [
        {
          nl: "Combien de parcelles ont dépassé leur quota d'irrigation ce mois-ci ?",
          sql: [
            "SELECT parcel_id, region,",
            "       SUM(irrigation_m3) AS total_m3",
            "FROM   irrigation_events",
            "WHERE  mois = '2026-06'",
            "GROUP BY parcel_id, region",
            "HAVING SUM(irrigation_m3) > quota_m3",
            "ORDER BY total_m3 DESC;"
          ],
          result: "47 parcelles hors quota · 380 ms"
        },
        {
          nl: "Liste les anomalies critiques sur les capteurs d'humidité du secteur 4.",
          sql: [
            "SELECT sensor_id, timestamp, humidite_pct",
            "FROM   anomalies_humidite",
            "WHERE  severite = 'critique'",
            "  AND  secteur = 4",
            "ORDER BY timestamp DESC",
            "LIMIT  20;"
          ],
          result: "12 anomalies critiques · 220 ms"
        },
        {
          nl: "Rendement moyen par variété sur les 3 dernières saisons.",
          sql: [
            "SELECT variete, AVG(rendement_qha) AS rendement_moyen",
            "FROM   recoltes r",
            "JOIN   parcelles p ON p.id = r.parcelle_id",
            "WHERE  r.saison BETWEEN 2023 AND 2025",
            "GROUP BY variete",
            "ORDER BY rendement_moyen DESC;"
          ],
          result: "34 variétés analysées · 410 ms"
        }
      ]
    },
    about: {
      eyebrow: "01 · À propos",
      title: "Conçu pour l'IA à grande échelle",
      description: "Ingénieur Big Data & IA · Systèmes LLM et RAG · Développeur full-stack — je transforme les données de production en produits intelligents.",
      p1_prefix: "Je suis ",
      p1_role: "Ingénieur d'État",
      p1_middle: " en ",
      p1_field: "Sciences des Données, Big Data et Intelligence Artificielle",
      p1_suffix: " de l'ENSA Tétouan, Maroc — ",
      p1_class: "diplômé en juin 2026",
      p1_end: ".",
      p2: "Mon travail couvre tout le cycle de vie de l'IA : du fine-tuning de LLMs (LoRA/PEFT) et des architectures RAG (FAISS, BM25, RRF) au traitement distribué avec Apache Spark, aux backends FastAPI et aux frontends React modernes. Je livre des systèmes en production, pas des notebooks.",
      p3_prefix: "En tant que ",
      p3_role: "Vice-Président du club AI Geeks",
      p3_suffix: " à l'ENSA Tétouan (2024–2026), j'ai animé des ateliers techniques, organisé des hackathons et encadré des étudiants en machine learning et génie logiciel.",
      p4_prefix: "Ma passion : construire des ",
      p4_bold: "solutions IA scalables",
      p4_middle: " qui répondent à de vrais besoins métier — du Text-to-SQL sur 987 tables de production à un assistant vocal en Darija pour 40M de Marocains. Actuellement ouvert aux ",
      p4_bold2: "postes d'ingénieur et missions freelance",
      p4_end: " en IA, ML et Data Engineering.",
      quote: "Transformer les données en intelligence, et l'intelligence en action.",
      highlights: [
        {
          title: "LLMs & RAG",
          description: "Fine-tuning (LoRA/PEFT), Text-to-SQL, pipelines de récupération FAISS + BM25 + RRF"
        },
        {
          title: "Ingénierie Big Data",
          description: "Pipelines scalables avec Apache Spark, SQL Server à l'échelle production, suivi MLflow"
        },
        {
          title: "Développement full-stack",
          description: "FastAPI, Django, React, React Native (Expo), Node.js — de l'API au mobile"
        },
        {
          title: "Livré à des clients",
          description: "Systèmes en production dans l'agriculture, l'hôtellerie et le tourisme maritime — pas des tutos"
        }
      ]
    },
    skills: {
      eyebrow: "02 · Compétences",
      title: "Expertise technique",
      description: "Maîtrise de niveau ingénieur sur tout le cycle IA/ML — du fine-tuning de LLM aux pipelines de données en production.",
      categories: [
        {
          category: "IA & LLMs",
          skills: [
            { name: "LLMs, RAG (FAISS, BM25, RRF)", level: 90 },
            { name: "Fine-tuning LoRA / PEFT", level: 85 },
            { name: "Text-to-SQL, NLP, Prompt Engineering", level: 88 },
            { name: "Ollama, Hugging Face, LangChain", level: 82 }
          ]
        },
        {
          category: "Data & Machine Learning",
          skills: [
            { name: "Python, SQL", level: 95 },
            { name: "Apache Spark", level: 82 },
            { name: "scikit-learn, MLflow", level: 85 },
            { name: "Power BI, Analyse de données", level: 80 }
          ]
        },
        {
          category: "Full-Stack & Ops",
          skills: [
            { name: "FastAPI, Django, Node.js", level: 88 },
            { name: "React, React Native (Expo)", level: 85 },
            { name: "Docker, Linux, Git/GitHub", level: 87 },
            { name: "AWS, Vercel, Railway", level: 75 }
          ]
        }
      ]
    },
    techStack: {
      eyebrow: "03 · Stack technique",
      title: "Mes outils",
      description: "Les langages, frameworks et plateformes que j'utilise pour livrer des systèmes IA en production."
    },
    projects: {
      eyebrow: "04 · Projets",
      title: "Projets d'ingénierie sélectionnés",
      description: "Projets réels livrés à des entreprises et clients — systèmes LLM, apps mobiles et plateformes full-stack en production.",
      featuredBadge: "À la une",
      liveDemo: "Démo",
      viewCode: "Code",
      showAll: (n) => `Voir les ${n} projets`,
      showLess: "Réduire",
      categories: {
        all: "Tous",
        ai: "IA & LLMs",
        fullstack: "Full-Stack",
        mobile: "Mobile",
        cv: "Vision par ordinateur"
      },
      items: [
        {
          key: "agrimind",
          title: "AgriMind — Plateforme d'intelligence agricole",
          category: "ai",
          categoryLabel: "IA & LLMs",
          description: "Plateforme on-premise de Text-to-SQL et détection d'anomalies construite pendant mon PFE chez AgriData Consulting. Interroge en langage naturel un SQL Server de production de ~**987 tables**, propulsé par **Qwen2.5-Coder 32B** (GPU via Ollama) avec un fallback **Phi-3-mini fine-tuné en LoRA**. RAG hybride (**FAISS + BM25 + Reciprocal Rank Fusion**) pour ancrer le LLM dans le schéma. Couche qualité de données : 19 contrôles avec profiling **Apache Spark** — un contrôle critique optimisé de **91 s à 400 ms**. Backend : **FastAPI** (~33 endpoints) ; frontend : **React**.",
          tech: ["LLM", "Text-to-SQL", "RAG", "LoRA", "Spark", "FastAPI", "React"],
          featured: true
        },
        {
          key: "sahbi",
          title: "SAHBI — Assistant vocal en Darija",
          category: "ai",
          categoryLabel: "IA & LLMs",
          description: "Assistant de reconnaissance vocale pour l'arabe marocain (Darija — **~40M de locuteurs**), construit par fine-tuning de **Whisper (OpenAI)** avec **LoRA/PEFT** sur trois datasets Darija (DODa, Moroccan-Darija-Wiki-Audio, darija-stt-mix). Pipeline d'entraînement sur Google Colab, évaluation sur audio hors-échantillon.",
          tech: ["ASR", "Whisper", "LoRA", "PEFT", "Hugging Face"],
          featured: true
        },
        {
          key: "volta",
          title: "VOLTA — Plateforme de fidélisation commerçants",
          category: "mobile",
          categoryLabel: "Mobile",
          description: "Plateforme de fidélité livrée à un vrai client : app mobile en **React Native (Expo)** + API REST en **Node.js/Express/PostgreSQL** déployée sur Railway. OTP par SMS via **Twilio**, **QR codes rotatifs** et codes PIN quotidiens pour la validation des tampons. Livrée et en production.",
          tech: ["React Native", "Node.js", "PostgreSQL", "Twilio", "Railway"],
          featured: true
        },
        {
          key: "reviewsense",
          title: "ReviewSense AI — SaaS d'analyse d'avis hôteliers",
          category: "fullstack",
          categoryLabel: "Full-Stack",
          description: "SaaS NLP pour les hôteliers marocains : scraping des avis Booking, TripAdvisor et Google Maps, analyse de sentiments, dashboards par plan d'abonnement avec health score. Backend : **Django REST** ; frontend : **React + Vite + Tailwind** ; ML : **scikit-learn / TextBlob**.",
          tech: ["NLP", "Django REST", "React", "Vite", "scikit-learn"],
          featured: false
        },
        {
          key: "cheating",
          title: "Détection de triche aux examens",
          category: "cv",
          categoryLabel: "Vision par ordinateur",
          description: "Détection en temps réel de comportements suspects par **estimation de pose** avec MediaPipe, classifieur temporel (**CNN + LSTM**) et détection d'objets (**YOLO**). Expériences suivies avec **MLflow** pour la reproductibilité.",
          tech: ["MediaPipe", "CNN+LSTM", "YOLO", "MLflow", "OpenCV"],
          featured: false
        },
        {
          key: "rag-chatbot",
          title: "Chatbot RAG avec LangChain",
          category: "ai",
          categoryLabel: "IA & LLMs",
          description: "Chatbot contextuel utilisant la **Retrieval-Augmented Generation**. Intègre un vector store pour la récupération de documents et un backend **FastAPI** — pattern ensuite passé à l'échelle dans AgriMind.",
          tech: ["LangChain", "RAG", "FastAPI", "Vector DB"],
          featured: false
        }
      ]
    },
    timeline: {
      eyebrow: "05 · Parcours",
      title: "Mon chemin d'ingénieur",
      description: "Des études d'ingénieur à la livraison de systèmes IA en production — les étapes clés qui ont façonné mon travail.",
      quote: "Le meilleur moyen de prédire l'avenir, c'est de l'ingénierer.",
      items: [
        {
          title: "AgriData Consulting — Stage PFE",
          subtitle: "Stagiaire Ingénieur IA · Agadir, Maroc",
          date: "Fév – Juin 2026",
          description: "Conception et mise en production d'AgriMind : plateforme on-premise Text-to-SQL et détection d'anomalies sur un SQL Server de ~987 tables. Déploiement de Qwen2.5-Coder 32B avec fallback Phi-3-mini fine-tuné en LoRA ; RAG hybride (FAISS + BM25 + RRF). Backend FastAPI (~33 endpoints), UI React, et 19 contrôles qualité basés sur Spark."
        },
        {
          title: "Groupe OCP — Stage PFA",
          subtitle: "Stagiaire Data Science · Khouribga, Maroc",
          date: "Juil – Sept 2025",
          description: "Développement d'un modèle ML de prédiction des délais de traitement des appels d'offres (RFP) sur SAP Ariba Sourcing. Préparation de données d'approvisionnement à grande échelle, feature engineering, et amélioration du suivi des SLA."
        },
        {
          title: "Développeur Freelance — Web & IA",
          subtitle: "Indépendant · Maroc",
          date: "2025 – Aujourd'hui",
          description: "Livraison d'une plateforme de gestion interne pour une flotte de tourisme maritime à Agadir (Next.js, Prisma, NextAuth) : réservations, opérations, reporting. En cours : livraison de la plateforme de fidélité VOLTA (React Native + Node.js) pour un client commerçant."
        },
        {
          title: "Transparence Informatique — Stage",
          subtitle: "Stagiaire Data Analyst · Agadir, Maroc",
          date: "Août – Sept 2024",
          description: "Construction de dashboards interactifs Power BI / Excel, consolidation de données multi-sources, et automatisation des workflows de reporting KPI récurrents."
        },
        {
          title: "ENSA Tétouan — Diplôme d'Ingénieur d'État",
          subtitle: "Sciences des Données, Big Data & IA · Vice-Président du club AI Geeks",
          date: "2020 – 2026",
          description: "Cycle ingénieur de 5 ans (Diplôme d'Ingénieur d'État) en Sciences des Données, Big Data & IA à l'Université Abdelmalek Essaâdi. Cursus : machine learning, deep learning, systèmes distribués, cloud et MLOps. Vice-Président du club AI Geeks (2024–2026) : ateliers, hackathons, mentorat étudiant. Diplômé en juin 2026."
        }
      ]
    },
    certifications: {
      eyebrow: "06 · Diplôme & certifications",
      title: "Certifications et diplôme",
      description: "Reconnaissance formelle des compétences que j'apporte aux systèmes IA en production.",
      statusCompleted: "Obtenu",
      statusInProgress: "En cours"
    },
    testimonials: {
      eyebrow: "07 · Recommandations",
      title: "Ce qu'on dit de moi",
      description: "Retours de mentors, collègues et clients avec qui j'ai travaillé.",
      cta: "Envie de travailler ensemble ou de laisser une recommandation ?",
      ctaButton: "Me contacter"
    },
    contact: {
      eyebrow: "08 · Contact",
      title: "Construisons quelque chose ensemble",
      description: "Ouvert aux postes en CDI en IA/Data et aux missions freelance — systèmes LLM, plateformes data et applications full-stack.",
      infoTitle: "Informations de contact",
      infoIntro: "Discutons de votre prochain projet ou dites simplement bonjour !",
      email: "Email",
      whatsapp: "WhatsApp",
      location: "Localisation",
      locationValue: "Agadir / Tétouan, Maroc",
      followMe: "Suivez-moi sur",
      quickResponseTitle: "Réponse rapide",
      quickResponseBody: "Je réponds généralement sous 24 h. Pour les demandes urgentes, contactez-moi par WhatsApp.",
      form: {
        name: "Votre nom",
        email: "Adresse email",
        subject: "Sujet",
        message: "Message",
        namePlaceholder: "Jean Dupont",
        emailPlaceholder: "jean@exemple.com",
        subjectPlaceholder: "Collaboration sur un projet",
        messagePlaceholder: "Parlez-moi de votre projet...",
        send: "Envoyer le message",
        sending: "Envoi en cours...",
        sent: "Message envoyé !",
        success: "Merci ! Je vous recontacte très vite.",
        error: "Une erreur est survenue. Réessayez ou contactez-moi directement.",
        errors: {
          nameRequired: "Le nom est requis",
          emailRequired: "L'email est requis",
          emailInvalid: "Veuillez saisir un email valide",
          subjectRequired: "Le sujet est requis",
          messageRequired: "Le message est requis",
          messageShort: "Le message doit faire au moins 10 caractères"
        }
      }
    },
    footer: {
      tagline: "Ingénieur Big Data & IA — systèmes LLM, plateformes data et applications full-stack livrés en production.",
      quote: "« Le meilleur moyen de prédire l'avenir, c'est de l'inventer. » — Alan Kay",
      nav: {
        about: "À propos",
        projects: "Projets",
        skills: "Compétences",
        contact: "Contact"
      }
    },
    navbar: {
      about: "À propos",
      projects: "Projets",
      skills: "Compétences",
      contact: "Contact"
    }
  }
};

export default translations;
