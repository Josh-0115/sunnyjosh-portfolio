
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const HireMeModal = ({ isOpen, onClose }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    organization: '',
    position: '',
    project: '',
    budget: '3-6Lpa'
  });
  const [isConfirming, setIsConfirming] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handlePreSubmit = (e) => {
    e.preventDefault();
    setIsConfirming(true);
  };

  const handleFinalSubmit = async () => {
    // 1. Ensure this is the /formResponse URL for your "Hire Me" Google Form
    const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfkdR5XOqP_uembt03IE3awGW95go8pvdSXcR6mX_HSNOK9zQ/formResponse";

    const formData = new FormData();

    // 2. Map entry IDs (Get these from the "Pre-filled link" for this specific form)
    formData.append("entry.1781500597", formState.name);     // Name
    formData.append("entry.1640447617", formState.email);
    formData.append("entry.297979220", formState.organization);    // Email
    formData.append("entry.1078004677", formState.position); // Position / Role
    formData.append("entry.2040870261", formState.project);  // Project Brief
    formData.append("entry.750446537", formState.budget);   // Budget Range

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      // 3. Handle UI transitions
      setIsConfirming(false);
      setSubmitted(true);

      // Reset and close after a delay
      setTimeout(() => {
        onClose();
        setSubmitted(false);
        setFormState({
          name: '',
          email: '',
          organization: '',
          position: '',
          project: '',
          budget: '3-6Lpa'
        });
      }, 2500);

    } catch (err) {
      console.error("Submission failed", err);
      alert("Transmission failed. Please try again.");
      setIsConfirming(false);
    }
  };

  const handleCancelConfirm = () => {
    setIsConfirming(false);
  };

  const handleClose = () => {
    setIsConfirming(false);
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 overflow-y-auto no-scrollbar">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white dark:bg-slate-900 w-full max-w-xl rounded-[32px] sm:rounded-[48px] shadow-3xl overflow-hidden border-4 border-slate-100 dark:border-slate-800 my-auto"
          >
            <div className="max-h-[90vh] overflow-y-auto no-scrollbar">
              <div className="p-6 sm:p-10 lg:p-12">
                <div className="flex justify-between items-start mb-8 sm:mb-10">
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-indigo-600 overflow-hidden shadow-2xl border-2 border-white dark:border-slate-800 flex-shrink-0 transform -rotate-0">
                      <img
                        src="https://avatars.githubusercontent.com/u/193494114?v=4"
                        alt="Sunny"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tighter leading-none">
                        {isConfirming ? 'Final Check' : submitted ? 'Success!' : "Let's Build."}
                      </h2>
                      <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-[0.2em] mt-2">
                        {isConfirming ? 'Verify details' : submitted ? 'Message sent' : "Partner with Sunny Josh"}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleClose}
                    className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all hover:rotate-90 hover:scale-110"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                  </button>
                </div>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-10 sm:py-16"
                    >
                      <div className="w-20 h-20 sm:w-28 sm:h-28 bg-green-100 dark:bg-green-950/30 text-green-600 dark:text-green-400 rounded-[32px] flex items-center justify-center mx-auto mb-8 shadow-inner transform rotate-12">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="sm:w-16 sm:h-16"><path d="M20 6 9 17l-5-5" /></svg>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-black dark:text-white mb-4">Transmission Received</h3>
                      <p className="text-slate-500 dark:text-slate-400 font-medium max-w-xs mx-auto">Sunny has been notified and will review your proposal within 24 hours.</p>
                    </motion.div>
                  ) : isConfirming ? (
                    <motion.div
                      key="confirm"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-8"
                    >
                      <div className="bg-slate-50 dark:bg-slate-800/50 p-6 sm:p-8 rounded-[32px] border-2 border-slate-100 dark:border-slate-800">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                          <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Requester</p>
                            <p className="text-base sm:text-lg font-bold dark:text-white">{formState.name}</p>
                          </div>
                          <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">organization</p>
                            <p className="text-base sm:text-lg font-bold dark:text-white">{formState.organization || 'N/A'}</p>
                          </div>
                          <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Position</p>
                            <p className="text-base sm:text-lg font-bold dark:text-white">{formState.position || 'N/A'}</p>
                          </div>
                          <div className="sm:col-span-2">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Email Address</p>
                            <p className="text-base sm:text-lg font-bold text-indigo-600 dark:text-indigo-400">{formState.email}</p>
                          </div>
                          <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Budget Allocation</p>
                            <p className="text-base sm:text-lg font-bold dark:text-white">${formState.budget.replace('k', ',000')}</p>
                          </div>
                          <div className="sm:col-span-2">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Project Brief</p>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed italic bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                              "{formState.project}"
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <button
                          onClick={handleCancelConfirm}
                          className="flex-1 py-5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-all active:scale-95"
                        >
                          Back to Edit
                        </button>
                        <button
                          onClick={handleFinalSubmit}
                          className="flex-1 py-5 bg-indigo-600 text-white font-black uppercase tracking-widest text-xs rounded-2xl shadow-2xl shadow-indigo-500/20 hover:bg-indigo-700 transition-all active:scale-95 hover:-translate-y-1"
                        >
                          Confirm & Send
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      onSubmit={handlePreSubmit}
                      className="space-y-6 sm:space-y-8"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="block text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                          <input
                            required
                            placeholder="Satoshi Nakamoto"
                            className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-2xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 focus:outline-none transition-all dark:text-white text-sm font-bold placeholder:text-slate-300 dark:placeholder:text-slate-600"
                            value={formState.name}
                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="block text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">Email</label>
                          <input
                            required
                            type="email"
                            placeholder="hello@company.com"
                            className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-2xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 focus:outline-none transition-all dark:text-white text-sm font-bold placeholder:text-slate-300 dark:placeholder:text-slate-600"
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">Organization name</label>
                        <input
                          required
                          placeholder="e.g. Amazon Inc."
                          className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-2xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 focus:outline-none transition-all dark:text-white text-sm font-bold placeholder:text-slate-300 dark:placeholder:text-slate-600"
                          value={formState.organization}
                          onChange={(e) => setFormState({ ...formState, organization: e.target.value })}
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">Position / Role</label>
                        <input
                          required
                          placeholder="e.g. Senior Frontend Engineer"
                          className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-2xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 focus:outline-none transition-all dark:text-white text-sm font-bold placeholder:text-slate-300 dark:placeholder:text-slate-600"
                          value={formState.position}
                          onChange={(e) => setFormState({ ...formState, position: e.target.value })}
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">Description</label>
                        <textarea
                          required
                          rows={4}
                          placeholder="Tell me about work, responsibilities and your vision, goals, and timeline..."
                          className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-2xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 focus:outline-none transition-all dark:text-white text-sm font-bold placeholder:text-slate-300 dark:placeholder:text-slate-600 resize-none"
                          value={formState.project}
                          onChange={(e) => setFormState({ ...formState, project: e.target.value })}
                        />
                      </div>

                      <div className="space-y-4">
                        <label className="block text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">Budget Range</label>
                        <div className="grid grid-cols-3 gap-3">
                          {['3-6Lpa', '6-10Lpa', '10Lpa+'].map((range) => (
                            <button
                              key={range}
                              type="button"
                              onClick={() => setFormState({ ...formState, budget: range })}
                              className={`py-4 px-2 rounded-2xl text-[10px] font-black uppercase tracking-widest border-2 transition-all active:scale-95 ${formState.budget === range
                                  ? 'border-indigo-600 bg-indigo-600 text-white shadow-xl shadow-indigo-500/20'
                                  : 'border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:border-indigo-200 dark:hover:border-indigo-900'
                                }`}
                            >
                              र {range.replace('k', ',000')}
                            </button>
                          ))}
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-black uppercase tracking-[0.2em] text-xs py-6 rounded-2xl shadow-2xl shadow-indigo-500/30 dark:shadow-none transition-all active:scale-[0.98] hover:-translate-y-1"
                      >
                        Send Inquiry
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default HireMeModal;
