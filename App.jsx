
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkSection from './components/WorkSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import HireMeModal from './components/HireMeModal';
import AIChatPanel from './components/AIChatPanel';
import ProjectsPage from './components/ProjectsPage';
import CertificationsPage from './components/CertificationsPage';
import './index.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [activeTab, setActiveTab] = useState('projects');
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.documentElement.classList.add('dark'); // Adds 'dark' to <html>
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark'); // Removes 'dark' from <html>
      localStorage.setItem('theme', 'light');
    }
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 1. Replace with your actual Google Form 'formResponse' URL
    const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeSZHpuEd94nbgPCLlZiaxbBNlPYFPKUa-MsrfyZqNnxSmy5g/formResponse";

    // 2. Map your state to the Google Form 'entry' IDs
    const formData = new FormData();
    formData.append("entry.2005620554", contactForm.name);    // Replace with your Name entry ID
    formData.append("entry.1045781291", contactForm.email);   // Replace with your Email entry ID
    formData.append("entry.1065046570", contactForm.message); // Replace with your Message entry ID

    try {
      // 3. Send the data
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors", // Required to avoid CORS errors with Google Forms
        body: formData,
      });

      // 4. Handle Success UI
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setContactForm({ name: '', email: '', message: '' });

      // Reset success message after 3 seconds
      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (error) {
      console.error("Submission Error:", error);
      setIsSubmitting(false);
      alert("Something went wrong. Please try again or email me directly.");
    }
  };

  const downloadResume = () => {
    alert("Opening Sunny's resume in a new tab...");
    window.open('https://drive.google.com/file/d/1x4QlqfCxYt714FzUyrE8wOOy6A04IPtP/view?usp=sharing', '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-indigo-100 dark:selection:bg-indigo-900 selection:text-indigo-700 dark:selection:text-indigo-200 transition-colors duration-300">
      <Navbar
        scrolled={scrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setIsHireModalOpen={setIsHireModalOpen}
        theme={theme}
        toggleTheme={toggleTheme}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setActiveTab={setActiveTab}
      />

      {currentPage === 'home' && (
        <>
          <Hero downloadResume={downloadResume} />
          <WorkSection activeTab={activeTab} setActiveTab={setActiveTab} setCurrentPage={setCurrentPage} />
          <ContactSection
            contactForm={contactForm}
            setContactForm={setContactForm}
            isSubmitting={isSubmitting}
            submitSuccess={submitSuccess}
            handleContactSubmit={handleContactSubmit}
          />
        </>
      )}

      {currentPage === 'projects' && <ProjectsPage />}
      {currentPage === 'certifications' && <CertificationsPage />}

      <Footer />

      <HireMeModal isOpen={isHireModalOpen} onClose={() => setIsHireModalOpen(false)} />
      <AIChatPanel />
    </div>
  );
};

export default App;
