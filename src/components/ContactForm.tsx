import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ContactForm: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-transparent relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          
          {/* Contact Info */}
          <div className="w-full">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-gray-200 mb-8">
              {language === 'si' ? 'සම්බන්ධ වන්න' : 'Contact Us'}
            </h2>
            <p className={`text-gray-400 mb-12 max-w-2xl mx-auto text-base leading-relaxed ${language === 'si' ? 'font-sinhala' : 'font-sans'}`}>
              {language === 'si' ? 'තරඟාවලිය සම්බන්ධයෙන් ඔබට යම් ගැටළුවක් හෝ වැඩිදුර විස්තර අවශ්‍ය නම්, කරුණාකර අප හා සම්බන්ධ වන්න.' : 'If you have any questions or need further clarification about the competition, feel free to reach out to us.'}
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-12 md:gap-16">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center text-blue-500 mb-4">
                  <Mail className="w-6 h-6" />
                </div>
                <h4 className={`text-lg font-medium text-gray-200 mb-2 ${language === 'si' ? 'font-sinhala' : 'font-sans'}`}>
                  {language === 'si' ? 'විද්‍යුත් තැපෑල' : 'Email'}
                </h4>
                <a href="mailto:ruusara2026@gmail.com" className="text-gray-400 hover:text-blue-500 transition-colors">ruusara2026@gmail.com</a>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center text-blue-500 mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h4 className={`text-lg font-medium text-gray-200 mb-2 ${language === 'si' ? 'font-sinhala' : 'font-sans'}`}>
                  {language === 'si' ? 'දුරකථන අංකය' : 'Phone'}
                </h4>
                <a href="tel:+94764895998" className="text-gray-400 hover:text-blue-500 transition-colors font-sinhala text-center">
                  (+94) 76 489 5998<br />{language === 'si' ? '(දිනෙත්)' : '(Dineth)'}
                </a>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center text-blue-500 mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className={`text-lg font-medium text-gray-200 mb-2 ${language === 'si' ? 'font-sinhala' : 'font-sans'}`}>
                  {language === 'si' ? 'ස්ථානය' : 'Location'}
                </h4>
                <p className={`text-gray-400 leading-relaxed text-center ${language === 'si' ? 'font-sinhala' : 'font-sans'}`}>
                  {language === 'si' ? (
                    <>මහා ශිෂ්‍ය සංගමය<br />පේරාදෙණිය විශ්ව විද්‍යාලය</>
                  ) : (
                    <>Students' Union,<br />University of Peradeniya</>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
