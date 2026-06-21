import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export const AboutUs: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="about" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-gray-200">
            {language === 'si' ? 'අප ගැන' : 'About Us'}
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-2/5 flex justify-center"
          >
            <div className="relative aspect-square w-full max-w-md rounded-lg overflow-hidden border border-gray-800 shadow-2xl bg-black">
              <img 
                src="https://images.unsplash.com/photo-1618365908648-e71bd5716cba?auto=format&fit=crop&q=80&w=800" 
                alt="Yin Yang Art concept" 
                className="w-full h-full object-cover p-4 opacity-80"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`w-full lg:w-3/5 text-gray-300 font-light text-sm sm:text-base leading-relaxed tracking-wide ${language === 'si' ? 'font-sinhala' : 'font-sans'}`}
          >
            <div className="border-l-2 border-blue-600 pl-6 mb-8 text-gray-200">
              {language === 'si' ? (
                <>
                  <p className="mb-4">
                    "මාගේ දේශය අවදි කරනු මැන" ශිෂ්‍ය සාහිත්‍ය උලෙළට සමගාමීව, පේරාදෙණිය විශ්ව විද්‍යාලය මහා ශිෂ්‍ය සංගමයේ සාහිත්‍ය අනුකමිටුව විසින් "රූසර ඩිජිටල් නිර්මාණ තරඟාවලිය" පස්වන වරට සංවිධානය කරනු ලබයි.
                  </p>
                  <p>
                    තරඟාවලිය හඬ කැවීම් (Dubbing), ඡායාරූප සැකසුම (Photo Manipulation), ඩිජිටල් චරිත සිතුවම් නිර්මාණය (Character Design) සහ චිත්‍රපට සාරාංශ වීඩියෝ නිර්මාණය (Movie Trailer Design) යන ප්‍රධාන තරඟ අංශ යටතේ පැවැත්වේ.
                  </p>
                </>
              ) : (
                <>
                  <p className="mb-4">
                    In parallel with the "Let My Country Awake" Student's Festival of Literature, the Literary Subcommittee, Students' Union, University of Peradeniya proudly organizes the "Ruusara Digital Art Competition" for the 5th consecutive time.
                  </p>
                  <p>
                    The competition is held under the main categories of Dubbing, Photo Manipulation, Digital Character Design, and Movie Trailer Design.
                  </p>
                </>
              )}
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-200 mb-4 underline decoration-blue-600 underline-offset-8">
                {language === 'si' ? 'අරමුණු' : 'Objectives'}
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-2">
                {language === 'si' ? (
                  <>
                    <li>ඩිජිටල් කලාව පිළිබඳ තාක්ෂණික, සෞන්දර්යාත්මක දැනුම හා උනන්දුව වැඩිදියුණු කිරීම.</li>
                    <li>නිර්මාණශීලීත්වය වර්ධනය කිරීම.</li>
                    <li>ඩිජිටල් කලාව පිළිබඳ හැකියාවන් වර්ධනය කිරීම.</li>
                    <li>නොයෙක් වර්ගයේ ඩිජිටල් කලාවන් රසවිදීම හා අගය කිරීම.</li>
                    <li>තරුණ නිර්මාණකරුවන් හඳුන්වාදීම හා ඔවුන්ම දිරිමත් කිරීම.</li>
                  </>
                ) : (
                  <>
                    <li>Improving technical and aesthetic knowledge and interest in digital art.</li>
                    <li>Fostering creativity.</li>
                    <li>Developing capabilities in digital arts.</li>
                    <li>Appreciating and enjoying various forms of digital arts.</li>
                    <li>Introducing and encouraging young creative artists.</li>
                  </>
                )}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
