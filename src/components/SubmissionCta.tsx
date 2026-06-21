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
                    "මාගේ දේශය අවදි කරනු මැන" ශිෂ්‍ය සාහිත්‍ය උලෙළට සමගාමීව, පේරාදෙණිය විශ්ව විද්‍යාලය මහා ශිෂ්‍ය සංගමයේ සාහිත්‍ය අනුකමිටුව විසින් සංවිධානය කරන "රූසර ඩිජිටල් නිර්මාණ තරඟාවලිය" සඳහා නිර්මාණ භාරගැනීම 2026 ජූලි 31 දක්වා විවෘතව ඇත.
                  </p>
                  <p>
                    ලියාපදිංචි වූ පසු ඔබට ලියාපදිංචි අංකයක් ලබා දෙනු ඇත. නිර්මාණ ඉදිරිපත් කිරීමේදී හැමවිටම මෙම අංකය භාවිතා කළ යුතුයි. ඔබ තරඟ කිහිපයකට ඉදිරිපත් වන්නේ නම්, ඒ සෑම තරඟයක් සඳහාම වෙන වෙනම ලියාපදිංචි විය යුතුය.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    In parallel with the "Let My Country Awake" Student's Festival of Literature organized by the Literary Subcommittee, Students' Union, University of Peradeniya, submissions for the "Ruusara Digital Art Competition" will be open until July 31, 2026.
                  </p>
                  <p>
                    Once you have registered, you will be assigned a registration number. You will need to use this registration number to submit your artwork before the deadline. If you are participating in multiple competitions, you have to register separately for each competition.
                  </p>
                </>
              )}
            </div>
            
            <a 
              href="https://forms.gle/sZS1P4zM5tyyukLe7"
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
                 src="https://raw.githubusercontent.com/damindulakhara/ruusara26/files/15727561621_0fbba8d97b_z.jpg" 
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
