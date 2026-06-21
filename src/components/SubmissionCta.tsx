import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export const SubmissionCta: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-[#141414] rounded-3xl p-8 md:p-12 border border-gray-800/50 shadow-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-2/3"
          >
            <h2 className={`text-3xl sm:text-4xl font-bold text-gray-300 mb-8 ${language === 'si' ? 'font-sinhala' : 'font-sans'}`} style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}>
              {language === 'si' ? 'නිර්මාණ භාරගැනීම' : 'Call for Submissions'}
            </h2>
            <div className={`text-gray-400 leading-relaxed text-sm sm:text-base space-y-4 mb-8 ${language === 'si' ? 'font-sinhala' : 'font-sans'}`}>
              {language === 'si' ? (
                <>
                  <p>
                    "මාගේ දේශය අවදි කරනු මැන" ශිෂ්‍ය සාහිත්‍ය උලෙළට සමගාමීව, පේරාදෙණිය විශ්ව විද්‍යාලය මහා ශිෂ්‍ය සංගමයේ සාහිත්‍ය අනුකමිටුව විසින් සංවිධානය කරන "රූසර ඩිජිටල් නිර්මාණ තරඟාවලිය" සඳහා නිර්මාණ භාරගැනීම 2026 ජූනි මස 30 සිට අගෝස්තු මස 16 දක්වා විවෘතව ඇත.
                  </p>
                  <p>
                    මෙවර තරඟාවලිය, හඬ කැවීම්, ඡායාරූප සැකසුම, ඩිජිටල් චරිත සිතුවම් සහ චිත්‍රපට සාරාංශ වීඩියෝ යන අංශ 4ක් යටතේ පැවැත්වේ. ඔබේ නිර්මාණශීලීත්වයට අරුත්බර වේදිකාවක් - දැන්ම එකතුවෙන්න!
                  </p>
                </>
              ) : (
                <>
                  <p>
                    In parallel with the "Let My Country Awake" Student's Festival of Literature organized by the Literary Subcommittee, Students' Union, University of Peradeniya, submissions for the "Ruusara Digital Art Competition" will be open from June 30 to August 16, 2026.
                  </p>
                  <p>
                    This year's competition will be held under 4 categories: Dubbing, Photo Manipulation, Digital Character Design, and Movie Trailer Design. A meaningful platform for your creativity - join now!
                  </p>
                </>
              )}
            </div>
            
            <a 
              href="https://forms.gle/placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center px-8 py-3 bg-blue-600 text-white font-bold text-lg rounded-full hover:bg-blue-500 hover:-translate-y-0.5 transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] ${language === 'si' ? 'font-sinhala' : 'font-sans'}`}
            >
              {language === 'si' ? 'ඉදිරිපත් කරන්න' : 'Submit Now'}
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-1/3 flex justify-center"
          >
             <div className="bg-white/5 p-2 rounded-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 shadow-xl max-w-[280px]">
               <img 
                 src="https://images.unsplash.com/photo-1590483736622-398541ce1d64?auto=format&fit=crop&q=80&w=600" 
                 alt="Sri Lankan Traditional Dancer" 
                 className="w-full h-auto object-cover rounded-xl"
               />
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
