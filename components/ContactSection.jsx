
import React from 'react';
import { MailIcon, SendIcon } from './Icons';

const ContactSection = ({ contactForm, setContactForm, isSubmitting, submitSuccess, handleContactSubmit }) => {
  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500/5 blur-[100px] rounded-full"></div>
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-5xl font-black mb-8 dark:text-white leading-tight">Ready to <br /><span className="text-indigo-600 underline underline-offset-8">Elevate</span> your project?</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed max-w-md font-medium">
            I'm currently accepting new high-impact projects. Let's discuss how we can build something extraordinary together.
          </p>
          <div className="space-y-8">
            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-16 h-16 bg-white dark:bg-slate-900 rounded-[24px] shadow-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 border border-slate-100 dark:border-slate-800 group-hover:-translate-y-2 group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-105 transition-all duration-300">
                <MailIcon />
              </div>
              <div>
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1 group-hover:text-indigo-600 transition-colors">Direct Email</p>
                <p className="text-xl font-black dark:text-slate-200">sunnyjosh0115@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-16 h-16 bg-white dark:bg-slate-900 rounded-[24px] shadow-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 border border-slate-100 dark:border-slate-800 group-hover:-translate-y-2 group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-105 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1 group-hover:text-indigo-600 transition-colors">Call Anytime</p>
                <p className="text-xl font-black dark:text-slate-200">+91 9652255127</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-10 sm:p-12 rounded-[48px] shadow-3xl shadow-indigo-500/5 border-2 border-slate-100 dark:border-slate-800">
          {submitSuccess ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-10 animate-in fade-in zoom-in">
              <div className="w-24 h-24 bg-green-100 dark:bg-green-950/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-8 shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              </div>
              <h3 className="text-3xl font-black mb-3 dark:text-white">Success!</h3>
              <p className="text-slate-500 dark:text-slate-400 font-medium">Your message is on its way. Expect a response shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">Full Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition-all dark:text-white"
                    value={contactForm.name}
                    onChange={e => setContactForm({...contactForm, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">Email</label>
                  <input 
                    required
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition-all dark:text-white"
                    value={contactForm.email}
                    onChange={e => setContactForm({...contactForm, email: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">Message</label>
                <textarea 
                  required
                  rows={5} 
                  placeholder="Briefly describe your goals..."
                  className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition-all dark:text-white resize-none"
                  value={contactForm.message}
                  onChange={e => setContactForm({...contactForm, message: e.target.value})}
                ></textarea>
              </div>
              <button 
                disabled={isSubmitting}
                className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black shadow-2xl shadow-indigo-500/20 dark:shadow-none hover:bg-indigo-700 transition-all flex items-center justify-center gap-3 disabled:opacity-70 active:scale-[0.98] uppercase tracking-widest text-sm hover:-translate-y-1"
              >
                {isSubmitting ? (
                  <span className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Transmit Message
                    <SendIcon />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
