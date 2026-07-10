import React, { useState } from "react";
import translations from "../translations";
import useReveal from "../hooks/useReveal";

// Section brand: navy background always (light + dark). Moment of contrast
// at the end of the reading flow.
export default function Contact({ language = "en" }) {
  const t = translations[language].contact;
  const ref = useReveal();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const e = {};
    if (!formData.name.trim()) e.name = t.form.errors.nameRequired;
    if (!formData.email.trim()) e.email = t.form.errors.emailRequired;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = t.form.errors.emailInvalid;
    if (!formData.subject.trim()) e.subject = t.form.errors.subjectRequired;
    if (!formData.message.trim()) e.message = t.form.errors.messageRequired;
    else if (formData.message.trim().length < 10) e.message = t.form.errors.messageShort;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (!validateForm()) return;
    setStatus("sending");
    try {
      const response = await fetch("https://formspree.io/f/xpwzgvvk", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...formData, _subject: `Portfolio Contact: ${formData.subject}` })
      });
      if (!response.ok) throw new Error();
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus(""), 5000);
    } catch (e) {
      setStatus("error");
      setTimeout(() => setStatus(""), 5000);
    }
  };

  const fieldClass =
    "w-full px-4 py-3 rounded-chip font-sans text-sm text-white placeholder-white/40 focus:outline-none";
  const fieldStyle = {
    backgroundColor: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.12)"
  };
  const fieldErrorStyle = { ...fieldStyle, borderColor: "#F87171" };

  return (
    <section
      id="contact"
      className="relative w-full px-6 py-24 md:py-32 text-white"
      style={{ backgroundColor: "var(--navy)" }}
    >
      <div ref={ref} className="reveal max-w-6xl mx-auto">
        <div className="eyebrow mb-6" style={{ color: "var(--accent-bright)" }}>
          [ {t.eyebrow} ]
        </div>
        <h2 className="h-hero max-w-4xl" style={{ color: "#FFFFFF" }}>
          {t.title}
        </h2>
        <p className="mt-6 max-w-2xl text-base md:text-lg" style={{ color: "rgba(255,255,255,0.7)" }}>
          {t.description}
        </p>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          {/* Left: contact channels */}
          <div className="space-y-8">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>
                {t.email}
              </div>
              <a
                href="mailto:yassinechmirrou1@gmail.com"
                className="font-display text-xl md:text-2xl hover:opacity-80 transition-opacity"
                style={{ color: "#FFFFFF" }}
              >
                yassinechmirrou1@gmail.com
              </a>
            </div>
            <div>
              <div className="font-mono text-[11px] uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>
                {t.whatsapp}
              </div>
              <a
                href="https://wa.me/212620305398"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-xl md:text-2xl hover:opacity-80 transition-opacity"
                style={{ color: "#FFFFFF" }}
              >
                +212 620 305 398
              </a>
            </div>
            <div>
              <div className="font-mono text-[11px] uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>
                {t.location}
              </div>
              <p className="font-display text-xl md:text-2xl" style={{ color: "#FFFFFF" }}>
                {t.locationValue}
              </p>
            </div>

            <div className="pt-6 flex flex-wrap gap-3">
              <a
                href="https://github.com/YassineChmirrou"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-chip border font-mono text-xs uppercase tracking-widest transition-colors"
                style={{ borderColor: "rgba(255,255,255,0.2)", color: "#FFFFFF" }}
              >
                GitHub ↗
              </a>
              <a
                href="https://linkedin.com/in/yassinechmirrou"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-chip border font-mono text-xs uppercase tracking-widest transition-colors"
                style={{ borderColor: "rgba(255,255,255,0.2)", color: "#FFFFFF" }}
              >
                LinkedIn ↗
              </a>
              <a
                href={`${import.meta.env.BASE_URL}cv.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-chip font-mono text-xs uppercase tracking-widest"
                style={{ backgroundColor: "var(--accent)", color: "#FFFFFF" }}
              >
                {language === "fr" ? "CV ↓" : "CV ↓"}
              </a>
            </div>
          </div>

          {/* Right: form */}
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block font-mono text-[11px] uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {t.form.name}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.form.namePlaceholder}
                  className={fieldClass}
                  style={errors.name ? fieldErrorStyle : fieldStyle}
                  aria-invalid={!!errors.name}
                />
                {errors.name && <p className="mt-1 font-mono text-[11px]" style={{ color: "#FCA5A5" }}>{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block font-mono text-[11px] uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {t.form.email}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.form.emailPlaceholder}
                  className={fieldClass}
                  style={errors.email ? fieldErrorStyle : fieldStyle}
                  aria-invalid={!!errors.email}
                />
                {errors.email && <p className="mt-1 font-mono text-[11px]" style={{ color: "#FCA5A5" }}>{errors.email}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block font-mono text-[11px] uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.6)" }}>
                {t.form.subject}
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder={t.form.subjectPlaceholder}
                className={fieldClass}
                style={errors.subject ? fieldErrorStyle : fieldStyle}
                aria-invalid={!!errors.subject}
              />
              {errors.subject && <p className="mt-1 font-mono text-[11px]" style={{ color: "#FCA5A5" }}>{errors.subject}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block font-mono text-[11px] uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.6)" }}>
                {t.form.message}
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder={t.form.messagePlaceholder}
                className={`${fieldClass} resize-none`}
                style={errors.message ? fieldErrorStyle : fieldStyle}
                aria-invalid={!!errors.message}
              />
              {errors.message && <p className="mt-1 font-mono text-[11px]" style={{ color: "#FCA5A5" }}>{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full sm:w-auto px-6 py-3 rounded-chip font-medium text-sm transition-colors disabled:opacity-50"
              style={{ backgroundColor: "var(--accent)", color: "#FFFFFF" }}
            >
              {status === "sending" ? t.form.sending : status === "success" ? t.form.sent : t.form.send}
            </button>

            {status === "success" && (
              <p className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--terminal)" }}>
                → {t.form.success}
              </p>
            )}
            {status === "error" && (
              <p className="font-mono text-xs uppercase tracking-widest" style={{ color: "#FCA5A5" }}>
                → {t.form.error}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
