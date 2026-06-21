import React from 'react';
import { motion } from 'motion/react';
import { EventCategory } from '../types';
import { useLanguage } from '../context/LanguageContext';

const EVENTS_SI = [
  {
    id: '1',
    title: 'හඬ කැවීමේ තරඟාවලිය',
    dateStr: 'නිර්මාණ භාරගැනීම 2026 ජූනි මස 30 වන දින සිට අගෝස්තු මස 16 වන දින දක්වා විවෘතව ඇත.',
    imageUrl: 'https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    title: 'ඩිජිටල් චරිත සිතුවම් නිර්මාණ තරඟාවලිය',
    dateStr: 'නිර්මාණ භාරගැනීම 2026 ජූනි මස 30 වන දින සිට අගෝස්තු මස 16 වන දින දක්වා විවෘතව ඇත.',
    imageUrl: 'https://images.unsplash.com/photo-1626775238053-4315516eedc9?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    title: 'ඡායාරූප සැකසීමේ තරඟාවලිය',
    dateStr: 'නිර්මාණ භාරගැනීම 2026 ජූනි මස 30 වන දින සිට අගෝස්තු මස 16 වන දින දක්වා විවෘතව ඇත.',
    imageUrl: 'https://images.unsplash.com/photo-1554034483-04fda0d3507b?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '4',
    title: 'චිත්‍රපට සාරාංශ වීඩියෝ නිර්මාණ තරඟාවලිය',
    dateStr: 'නිර්මාණ භාරගැනීම 2026 ජූනි මස 30 වන දින සිට අගෝස්තු මස 16 වන දින දක්වා විවෘතව ඇත.',
    imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800',
  }
];

const EVENTS_EN = [
  {
    id: '1',
    title: 'Dubbing Competition',
    dateStr: 'Submissions are open from June 30 to August 16, 2026.',
    imageUrl: 'https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    title: 'Digital Character Design',
    dateStr: 'Submissions are open from June 30 to August 16, 2026.',
    imageUrl: 'https://images.unsplash.com/photo-1626775238053-4315516eedc9?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    title: 'Photo Manipulation',
    dateStr: 'Submissions are open from June 30 to August 16, 2026.',
    imageUrl: 'https://images.unsplash.com/photo-1554034483-04fda0d3507b?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '4',
    title: 'Movie Trailer Design',
    dateStr: 'Submissions are open from June 30 to August 16, 2026.',
    imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800',
  }
];

export const Events: React.FC = () => {
  const { language } = useLanguage();
  const events = language === 'si' ? EVENTS_SI : EVENTS_EN;

  return (
    <section id="events" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-gray-200">
            {language === 'si' ? 'තරඟ අංශ' : 'All Events'}
          </h2>
        </div>

        <div className="flex overflow-x-auto pb-8 gap-6 snap-x hide-scrollbar">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="min-w-[300px] md:min-w-[350px] flex-1 bg-[#181818] rounded-3xl overflow-hidden shadow-lg snap-center border border-gray-800"
            >
              <div className="h-48 md:h-56 overflow-hidden">
                <img 
                  src={event.imageUrl} 
                  alt={event.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 opacity-80 hover:opacity-100"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col items-center text-center">
                <h3 className={`text-xl font-bold text-gray-200 mb-4 h-14 flex items-center justify-center ${language === 'si' ? 'font-sinhala' : 'font-sans'}`}>
                  {event.title}
                </h3>
                <p className={`text-sm text-gray-400 mb-8 leading-relaxed ${language === 'si' ? 'font-sinhala' : 'font-sans'}`}>
                  {event.dateStr}
                </p>
                <a 
                  href="#"
                  className={`px-8 py-2.5 bg-blue-600 border border-transparent text-white font-bold rounded-full hover:bg-transparent hover:border-blue-500 hover:text-blue-400 transition-all tracking-wide ${language === 'si' ? 'font-sinhala' : 'font-sans'}`}
                >
                  {language === 'si' ? 'වැඩිදුර කියවන්න' : 'Read More'}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
};
