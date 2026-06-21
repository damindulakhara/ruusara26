import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Submissions', href: 'https://forms.gle/sZS1P4zM5tyyukLe7', external: true },
    { label: 'Events', href: '#events' },
    { label: 'Contact Us', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 sm:top-6 left-0 sm:left-1/2 sm:-translate-x-1/2 w-full sm:max-w-6xl sm:px-4 z-50">
      <nav className={`w-full transition-all duration-300 sm:rounded-full border ${isScrolled ? 'bg-black/80 backdrop-blur-xl border-gray-800 shadow-2xl py-3' : 'bg-[#050505]/40 backdrop-blur-md border-transparent sm:border-gray-800/30 py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#home" className="flex-shrink-0 flex items-center">
             <div className="h-10 w-10 relative">
               <img src="https://raw.githubusercontent.com/damindulakhara/ruusara26/files/logo.png" alt="Ruusara Logo" className="w-full h-full object-contain relative z-10" />
               <div className="absolute inset-0 bg-blue-600 rounded-full blur-[8px] opacity-20"></div>
             </div>
             <div className="ml-2 flex flex-col pt-1">
                <span className="text-[10px] font-bold leading-none tracking-wider text-gray-200">DIGITAL ART</span>
                <span className="text-[10px] font-bold leading-none tracking-wider text-gray-400 mt-0.5">COMPETITION</span>
             </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center justify-center space-x-2 flex-1 ml-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className={`relative text-sm font-medium tracking-wide text-gray-300 hover:text-white transition-all px-4 py-2 rounded-full hover:bg-white/10`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
             <button onClick={toggleLanguage} className="text-gray-300 hover:text-white flex items-center space-x-1 px-3 py-2 rounded-full hover:bg-white/10 transition-colors mr-2">
                <Globe className="w-4 h-4" />
                <span className="text-xs font-bold uppercase">{language === 'si' ? 'EN' : 'සිං'}</span>
             </button>
             <a href="https://forms.gle/dT41ZQWyqTJpaFjaA" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-full font-medium text-sm tracking-wide transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)]">
                Register Now
             </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button onClick={toggleLanguage} className="p-2 text-gray-300 hover:text-white bg-white/5 rounded-full">
               <Globe className="w-5 h-5" />
            </button>
            <button
              className="p-2 text-gray-300 hover:text-white bg-white/5 rounded-full"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div
          className={`lg:hidden absolute top-[calc(100%+10px)] left-4 right-4 bg-black/95 backdrop-blur-xl shadow-2xl transition-all duration-300 ease-in-out border border-gray-800 rounded-3xl ${
            isOpen ? 'max-h-96 opacity-100 visible py-4' : 'max-h-0 opacity-0 invisible py-0 border-transparent'
          } overflow-hidden`}
        >
          <div className="px-4 flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className={`block px-4 py-3 text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white rounded-2xl transition-colors text-center`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 pb-2">
               <a href="https://forms.gle/dT41ZQWyqTJpaFjaA" target="_blank" rel="noopener noreferrer" className={`block w-full text-center bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full font-medium text-sm transition-colors shadow-lg`}>
                  Register Now
               </a>
            </div>
            <div className="pt-4 flex flex-col items-center space-y-3 mt-2 border-t border-gray-800 text-gray-400 text-sm">
               <a href="mailto:ruusara2026@gmail.com" className="flex items-center hover:text-white transition-colors text-sans">
                <Mail className="w-4 h-4 mr-2" />
                ruusara2026@gmail.com
               </a>
               <a href="tel:+94764895998" className="flex items-center hover:text-white transition-colors text-sans">
                <Phone className="w-4 h-4 mr-2" />
                (+94) 76 489 5998
               </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
