import React from "react";
import { motion } from "framer-motion";

const stack = [
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Streamlit", logo: "https://streamlit.io/images/brand/streamlit-logo-primary-colormark-darktext.png" },
  { name: "Power BI", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" }
];

export default function TechStack() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-[#1f2937] via-[#111827] to-black text-white" id="tech">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600"
      >
        My Tech Stack
      </motion.h2>

      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 px-6">
        {stack.map((tech, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.08, rotate: 1 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 shadow-xl rounded-xl p-4 flex flex-col items-center justify-center transition duration-300 hover:shadow-2xl hover:border-purple-500"
          >
            <img src={tech.logo} alt={tech.name} title={tech.name} className="h-12 object-contain mb-2" />
            <p className="text-sm text-gray-300">{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
