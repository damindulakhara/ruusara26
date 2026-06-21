import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

const TypewriterText: React.FC<{ text: string; className: string; language: string }> = ({ text, className, language }) => {
  const [displayedText, setDisplayedText] = React.useState('');

  React.useEffect(() => {
    let segments: string[] = [];
    if (typeof Intl !== 'undefined' && Intl.Segmenter) {
      const segmenter = new Intl.Segmenter(language === 'si' ? 'si-LK' : 'en-US', { granularity: 'grapheme' });
      segments = Array.from(segmenter.segment(text)).map(s => s.segment);
    } else {
      segments = Array.from(text);
    }
    
    let index = 0;
    setDisplayedText('');
    const interval = setInterval(() => {
      if (index <= segments.length) {
        setDisplayedText(segments.slice(0, index).join(''));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, [text, language]);

  return (
    <div className={className} style={{ textShadow: '2px 4px 10px rgba(0,0,0,0.8)', whiteSpace: 'pre-wrap' }}>
      {displayedText}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block"
      >
        |
      </motion.span>
    </div>
  );
};

export const Hero: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 sm:pt-32 overflow-hidden bg-[#050505]">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 flex justify-center lg:justify-end items-center opacity-30 sm:opacity-50 lg:opacity-100 pointer-events-none pr-0 lg:pr-24">
        {/* We use a placeholder mandala/elephant pattern concept here */}
        <div className="relative w-full max-w-[800px] aspect-square">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(50,50,50,0.4)_0%,transparent_70%)] rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&q=80&w=1600" 
              alt="Elephant Mandala Graphic" 
              className="w-full h-full object-cover object-center rounded-3xl opacity-50 mix-blend-luminosity mask-image-gradient"
              style={{ maskImage: 'radial-gradient(circle, black 30%, transparent 70%)', WebkitMaskImage: 'radial-gradient(circle, black 30%, transparent 70%)' }}
            />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full lg:w-3/5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            {/* The stylized text with typing animation */}
            <TypewriterText 
              text={language === 'si' ? '"මාගේ දේශය\nඅවදි කරනු මැන"' : '"Let My Country\nAwake"'}
              className={`font-serif text-[3.5rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] leading-[1.1] text-gray-200 drop-shadow-2xl mb-8 tracking-tight font-medium ${language === 'en' ? 'font-sans' : ''}`}
              language={language}
            />
            
            <div className="inline-block border-l-4 border-blue-600 pl-4 py-1 mb-10">
              <h2 className={`text-xl sm:text-2xl text-gray-300 font-medium tracking-wide ${language === 'si' ? 'font-sinhala' : 'font-sans'}`}>
                {language === 'si' ? 'ශිෂ්‍ය සාහිත්‍ය උලෙළ' : "Student's Festival of Literature"}
              </h2>
              <h3 className="font-sans text-3xl sm:text-4xl text-white font-bold tracking-wider mt-1">
                2026
              </h3>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <a 
                href="https://forms.gle/placeholder"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center px-10 py-4 bg-blue-600 text-white font-bold text-lg rounded-full hover:bg-blue-500 hover:-translate-y-1 transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.8)] ${language === 'si' ? 'font-sinhala' : 'font-sans'}`}
              >
                {language === 'si' ? 'ලියාපදිංචි වන්න' : 'Register Now'}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce z-20">
         <div className="w-[1px] h-12 bg-gradient-to-b from-blue-600 to-transparent"></div>
      </div>
    </section>
  );
};
