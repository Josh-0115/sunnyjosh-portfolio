
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CERTIFICATES } from '../constants';
import { ExternalLinkIcon } from './Icons';

const CertificateCard = ({ cert }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 p-10 rounded-[40px] flex flex-col items-center text-center transition-all group shadow-sm  'hover:border-indigo-500 dark:hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/5' : 'border-indigo-500 shadow-2xl shadow-indigo-500/10'}`}>
      <div className="w-90 h-40 mb-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
        <img
          src={cert.imageUrl}
          alt={cert.title}
          className="max-w-full max-h-full object-contain drop-shadow-xl"
          referrerPolicy="no-referrer"
        />
      </div>
      <h4 className="text-xl font-black mb-2 dark:text-white leading-tight">{cert.title}</h4>
      <p className="text-indigo-600 dark:text-indigo-400 font-bold text-sm mb-6 uppercase tracking-widest">{cert.issuer}</p>
      <div className="flex gap-4 mb-6">
        {cert.liveLink && (
          <a href={cert.liveLink} className="bg-indigo-600 text-white px-4 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all delay-100 hover:bg-indigo-700">
            View <ExternalLinkIcon />
          </a>
        )}
      </div>

      <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-700 w-full text-slate-400 text-xs font-bold uppercase tracking-tighter">
        ISSUED {cert.date}
      </div>
    </div>
  );
};

export default CertificateCard;
