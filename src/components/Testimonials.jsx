import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Dr. Ahmed Benali",
    role: "Professor at ENSIAS",
    company: "Mohammed V University",
    image: "https://ui-avatars.com/api/?name=Ahmed+Benali&background=3b82f6&color=fff&size=128",
    rating: 5,
    text: "Yassine demonstrated exceptional skills in machine learning and data engineering. His final year project on deep learning image classification achieved outstanding results with 97% accuracy. He has a bright future in AI."
  },
  {
    name: "Sarah Martinez",
    role: "Senior Data Scientist",
    company: "TechCorp Solutions",
    image: "https://ui-avatars.com/api/?name=Sarah+Martinez&background=8b5cf6&color=fff&size=128",
    rating: 5,
    text: "Working with Yassine on the fraud detection system was a pleasure. His understanding of XGBoost and real-time data pipelines is impressive. He delivered production-ready code ahead of schedule."
  },
  {
    name: "Mohamed Alami",
    role: "CTO",
    company: "DataFlow Analytics",
    image: "https://ui-avatars.com/api/?name=Mohamed+Alami&background=ec4899&color=fff&size=128",
    rating: 5,
    text: "Yassine's work on our ETL pipeline with Apache Airflow significantly improved our data processing efficiency. He's a quick learner and brings innovative solutions to complex problems."
  },
  {
    name: "Emma Thompson",
    role: "ML Engineer",
    company: "AI Innovations Lab",
    image: "https://ui-avatars.com/api/?name=Emma+Thompson&background=10b981&color=fff&size=128",
    rating: 5,
    text: "His expertise in NLP and transformer models is remarkable. The chatbot he built using LangChain and RAG exceeded our expectations. Highly recommend collaborating with Yassine!"
  },
  {
    name: "Hassan El Idrissi",
    role: "Project Manager",
    company: "Smart Solutions",
    image: "https://ui-avatars.com/api/?name=Hassan+Idrissi&background=f59e0b&color=fff&size=128",
    rating: 5,
    text: "Yassine completed the face recognition attendance system flawlessly. His attention to detail and ability to explain complex AI concepts in simple terms made the project a success."
  },
  {
    name: "Lisa Chen",
    role: "Research Scientist",
    company: "BioTech AI",
    image: "https://ui-avatars.com/api/?name=Lisa+Chen&background=0891b2&color=fff&size=128",
    rating: 5,
    text: "The medical image segmentation model Yassine developed using U-Net architecture was exceptional. His analytical thinking and problem-solving skills are top-tier."
  }
];

export default function Testimonials() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900" id="testimonials">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-4xl font-bold mb-4 text-gray-900 dark:text-white"
        >
          Testimonials & Recommendations
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto"
        >
          What professors, colleagues, and clients say about working with me
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 relative group hover:shadow-2xl transition-all"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-blue-500/20 dark:text-blue-400/20">
                <FaQuoteLeft className="text-4xl" />
              </div>

              {/* Profile */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full ring-2 ring-blue-500/50"
                />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                  <p className="text-xs text-blue-600 dark:text-blue-400">{testimonial.company}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Want to work together or leave a recommendation?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
