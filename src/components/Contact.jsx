import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaGithub, FaLinkedin, FaWhatsapp, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import translations from "../translations";

export default function Contact({ language = "en" }) {
  const t = translations[language].contact;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = t.form.errors.nameRequired;
    if (!formData.email.trim()) {
      newErrors.email = t.form.errors.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t.form.errors.emailInvalid;
    }
    if (!formData.subject.trim()) newErrors.subject = t.form.errors.subjectRequired;
    if (!formData.message.trim()) {
      newErrors.message = t.form.errors.messageRequired;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t.form.errors.messageShort;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xpwzgvvk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `Portfolio Contact: ${formData.subject}`
        })
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus(""), 5000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus(""), 5000);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: t.email,
      value: "yassinechmirrou1@gmail.com",
      link: "mailto:yassinechmirrou1@gmail.com"
    },
    {
      icon: <FaWhatsapp className="text-2xl" />,
      title: t.whatsapp,
      value: "+212 620 305 398",
      link: "https://wa.me/212620305398"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: t.location,
      value: t.locationValue,
      link: null
    }
  ];

  const socialLinks = [
    { icon: <FaGithub />, link: "https://github.com/YassineChmirrou", label: "GitHub" },
    { icon: <FaLinkedin />, link: "https://linkedin.com/in/yassinechmirrou", label: "LinkedIn" },
    { icon: <FaWhatsapp />, link: "https://wa.me/212620305398", label: "WhatsApp" }
  ];

  return (
    <section className="relative w-full py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 overflow-hidden" id="contact">
      {/* Decoration */}
      <div className="absolute top-20 -right-20 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 -left-20 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.description}
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6">{t.infoTitle}</h3>
              <p className="mb-8 text-white/80">
                {t.infoIntro}
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4"
                  >
                    <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-white/70">{info.title}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
                          aria-label={`${info.title}: ${info.value}`}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-semibold">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12">
                <p className="text-sm text-white/70 mb-4">{t.followMe}</p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white/20 p-3 rounded-lg backdrop-blur-sm text-2xl hover:bg-white/30 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl"
            >
              <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{t.quickResponseTitle}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t.quickResponseBody}
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                  {t.form.name} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none`}
                  placeholder={t.form.namePlaceholder}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-sm text-red-500 flex items-center gap-1">
                    <FaExclamationCircle /> {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                  {t.form.email} <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none`}
                  placeholder={t.form.emailPlaceholder}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-500 flex items-center gap-1">
                    <FaExclamationCircle /> {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                  {t.form.subject} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.subject ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none`}
                  placeholder={t.form.subjectPlaceholder}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                  aria-invalid={errors.subject ? "true" : "false"}
                />
                {errors.subject && (
                  <p id="subject-error" className="mt-1 text-sm text-red-500 flex items-center gap-1">
                    <FaExclamationCircle /> {errors.subject}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                  {t.form.message} <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none`}
                  placeholder={t.form.messagePlaceholder}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  aria-invalid={errors.message ? "true" : "false"}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-red-500 flex items-center gap-1">
                    <FaExclamationCircle /> {errors.message}
                  </p>
                )}
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === "sending"}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg flex items-center justify-center gap-2 hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-busy={status === "sending"}
              >
                {status === "sending" ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" aria-hidden="true"></div>
                    {t.form.sending}
                  </>
                ) : status === "success" ? (
                  <>
                    <FaCheckCircle aria-hidden="true" /> {t.form.sent}
                  </>
                ) : (
                  <>
                    <FaPaperPlane aria-hidden="true" /> {t.form.send}
                  </>
                )}
              </motion.button>

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-100 dark:bg-green-900/30 rounded-lg"
                  role="alert"
                >
                  <p className="text-center text-green-700 dark:text-green-400 font-semibold flex items-center justify-center gap-2">
                    <FaCheckCircle /> {t.form.success}
                  </p>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-100 dark:bg-red-900/30 rounded-lg"
                  role="alert"
                >
                  <p className="text-center text-red-700 dark:text-red-400 font-semibold flex items-center justify-center gap-2">
                    <FaExclamationCircle /> {t.form.error}
                  </p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
