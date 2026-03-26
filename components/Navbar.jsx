
import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SunIcon, MoonIcon, MenuIcon, XIcon } from './Icons';

const Navbar = ({ scrolled, isMenuOpen, setIsMenuOpen, setIsHireModalOpen, theme, toggleTheme, currentPage, setCurrentPage, setActiveTab  }) => {
  const navLinks = [
    { name: 'About', id: 'bio', type: 'anchor' },
    { name: 'Projects', id: 'projects', type: 'page' },
    { name: 'Certifications', id: 'certifications', type: 'page' },
    { name: 'Work', id: 'work', type: 'anchor' },
    { name: 'Contact', id: 'contact', type: 'anchor' },
  ];

const handleNavClick = (link) => {
  setIsMenuOpen(false);

  if (link.type === 'page') {
    setCurrentPage(link.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  // Anchor links: About (bio), Work, Contact
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 90;

      window.scrollTo({
        top: element.getBoundingClientRect().top + window.pageYOffset - navbarHeight,
        behavior: 'smooth',
      });
    }
  };

  if (link.id === 'bio') {
    // Special handling for "About Me" because it's a tab inside WorkSection
    setCurrentPage('home');
    setActiveTab('bio');           // ← This is the key line

    // Wait for WorkSection + BioSection to render
    setTimeout(() => scrollToSection('bio'), 300);
    setTimeout(() => scrollToSection('bio'), 700);   // safety retry
  } 
  else {
    // Normal anchors (Work, Contact)
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => scrollToSection(link.id), 250);
    } else {
      scrollToSection(link.id);
    }
  }
};

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isMenuOpen ? 'glass py-3 shadow-md' : 'py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div
          onClick={() => { setCurrentPage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-200 dark:shadow-none group-hover:scale-110 transition-transform overflow-hidden">
              <img
                src="https://avatars.githubusercontent.com/u/193494114?v=4"
                alt="Sunny"
                className="w-full h-full object-cover scale-125"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full shadow-sm"></div>
          </div>
          <span className="font-bold text-xl tracking-tight hidden sm:block dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Sunny Josh.</span>
        </div>

        <div className="flex items-center gap-3 sm:gap-6">
          <div className="hidden md:flex gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link)}
                className={`hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors relative group ${currentPage === link.id ? 'text-indigo-600 dark:text-indigo-400' : ''}`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full ${currentPage === link.id ? 'w-full' : 'w-0'}`}></span>
              </button>
            ))}
          </div>

          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-slate-200/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 dark:hover:text-white transition-all  hover:scale-110 active:scale-95 shadow-sm"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
          </button>

          <button
            onClick={() => setIsHireModalOpen(true)}
            className="hidden sm:block bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-indigo-100 dark:shadow-none transition-all active:scale-[0.97] hover:-translate-y-0.5"
          >
            Hire Me
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-slate-200/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:bg-indigo-600 hover:text-white transition-all"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 overflow-hidden shadow-xl"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link)}
                  className="text-lg font-bold text-slate-600 dark:text-slate-400 hover:text-indigo-600 py-2 text-left"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => { setIsHireModalOpen(true); setIsMenuOpen(false); }}
                className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold shadow-lg mt-2 active:scale-95 transition-transform"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
