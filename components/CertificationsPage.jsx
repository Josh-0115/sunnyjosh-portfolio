
import React from 'react';
import CertificateCard from './CertificateCard';
import { CERTIFICATES } from '../constants';

const CertificationsPage = () => {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-black mb-6 dark:text-white">My <span className="text-indigo-600">Certifications</span></h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
            Professional credentials and certifications that validate my expertise in cloud architecture, front-end development, and software engineering.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATES.map(cert => (
            <CertificateCard key={cert.id} cert={cert} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationsPage;
