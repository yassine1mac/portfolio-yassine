import React from "react";
import SectionHeader from "./SectionHeader";
import translations from "../translations";
import useReveal from "../hooks/useReveal";

// Stack ordered by CV emphasis: LLMs/RAG/data first, then full-stack, then ops.
const stack = [
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Hugging Face", logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
  { name: "LangChain", logo: "https://python.langchain.com/img/brand/wordmark.png" },
  { name: "Apache Spark", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg" },
  { name: "scikit-learn", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
  { name: "MLflow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mlflow/mlflow-original.svg" },
  { name: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "SQL Server", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
  { name: "Power BI", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" }
];

export default function TechStack({ language = "en" }) {
  const t = translations[language].techStack;
  const ref = useReveal();

  return (
    <section
      id="tech"
      className="relative w-full py-24 md:py-32 px-6"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.description}
        />

        <div
          ref={ref}
          className="reveal grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3"
        >
          {stack.map((tech, i) => (
            <div
              key={i}
              className="group flex flex-col items-center gap-2 rounded-card border p-4 transition-colors"
              style={{
                backgroundColor: "var(--surface)",
                borderColor: "var(--hairline)"
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--hairline)"; }}
              title={tech.name}
            >
              <img
                src={tech.logo}
                alt=""
                aria-hidden
                loading="lazy"
                className="h-8 sm:h-9 object-contain grayscale group-hover:grayscale-0 transition-all"
              />
              <p className="font-mono text-[10px] uppercase tracking-widest text-center" style={{ color: "var(--fg-muted)" }}>
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
