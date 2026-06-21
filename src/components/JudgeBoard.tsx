import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

const JUDGES_SI = [
  {
    id: '1',
    name: 'Mr. Dilip Thejana',
    role: 'හඬ කැවීමේ තරඟාවලිය',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '2',
    name: 'Mr. Yasiru Prabashana',
    role: 'ඡායාරූප සැකසුම තරඟාවලිය',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '3',
    name: 'Mr. S. G. Fernando',
    role: 'චිත්‍රපට පූර්වක පට\nනිර්මාණ තරඟාවලිය',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '4',
    name: 'Mr. Mahee Chathuranga',
    role: 'ඩිජිටල් චරිත සිතුවම්\nනිර්මාණ තරඟාවලිය',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
  }
];

const JUDGES_EN = [
  {
    id: '1',
    name: 'Mr. Dilip Thejana',
    role: 'Dubbing Competition',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '2',
    name: 'Mr. Yasiru Prabashana',
    role: 'Photo Manipulation',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '3',
    name: 'Mr. S. G. Fernando',
    role: 'Movie Trailer Design',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '4',
    name: 'Mr. Mahee Chathuranga',
    role: 'Digital Character Design',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
  }
];

export const JudgeBoard: React.FC = () => {
  const { language } = useLanguage();
  const judges = language === 'si' ? JUDGES_SI : JUDGES_EN;

  return (
    <section id="judge-board" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-gray-200">
            {language === 'si' ? 'විනිශ්චය මණ්ඩලය' : 'Judge Board'}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8">
          {judges.map((judge, index) => (
            <motion.div
              key={judge.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden mb-6 border-4 border-gray-800 shadow-xl transition-transform hover:scale-105 duration-300">
                <img
                  src={judge.imageUrl}
                  alt={judge.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold font-sans text-gray-200 mb-2">
                {judge.name}
              </h3>
              <p className={`text-sm text-gray-400 whitespace-pre-line leading-relaxed ${language === 'si' ? 'font-sinhala' : 'font-sans'}`}>
                {judge.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
