import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-black/60 backdrop-blur-md py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <a href="#home" className="flex items-center justify-center md:justify-start mb-2">
              <div className="h-14 w-14 relative mr-3">
                <img src="https://raw.githubusercontent.com/damindulakhara/ruusara26/files/logo.png" alt="Ruusara Logo" className="w-full h-full object-contain relative z-10" />
              </div>
            </a>
            <p className={`text-gray-400 text-sm mt-1 ${language === 'si' ? 'font-sinhala' : 'font-sans'}`}>
              {language === 'si' ? '"මාගේ දේශය අවදි කරනු මැන" ශිෂ්‍ය සාහිත්‍ය උලෙළ' : '"Let My Country Awake" Student\'s Festival of Literature'}
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://www.facebook.com/share/18eCLMr1Qg/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Ruusara Digital Art Competition. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 text-sm text-gray-500">
            Design & Developer By Student Union, UOP
          </div>
        </div>
      </div>
    </footer>
  );
};
