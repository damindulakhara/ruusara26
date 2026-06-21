import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EventCategory } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { EVENT_DETAILS } from '../data/eventDetails';
import { X } from 'lucide-react';

const EVENTS_SI = [
  {
    id: '1',
    title: 'හඬ කැවීමේ තරඟාවලිය',
    dateStr: 'නිර්මාණ භාරගැනීම 2026 ජූලි මස 31 වන දින දක්වා විවෘතව ඇත.',
    imageUrl: 'https://raw.githubusercontent.com/damindulakhara/ruusara26/files/dubbing_feature.jpg',
  },
  {
    id: '2',
    title: 'ඩිජිටල් චරිත සිතුවම් නිර්මාණ තරඟාවලිය',
    dateStr: 'නිර්මාණ භාරගැනීම 2026 ජූලි මස 31 වන දින දක්වා විවෘතව ඇත.',
    imageUrl: 'https://raw.githubusercontent.com/damindulakhara/ruusara26/files/22-2-qo5hjsgdih7djmzgoiy2chthhwifj2cbdafs03ccyo.png',
  },
  {
    id: '3',
    title: 'ඡායාරූප සැකසීමේ තරඟාවලිය',
    dateStr: 'නිර්මාණ භාරගැනීම 2026 ජූලි මස 31 වන දින දක්වා විවෘතව ඇත.',
    imageUrl: 'https://raw.githubusercontent.com/damindulakhara/ruusara26/files/1701685786275.jpg',
  },
  {
    id: '4',
    title: 'චිත්‍රපට සාරාංශ වීඩියෝ නිර්මාණ තරඟාවලිය',
    dateStr: 'නිර්මාණ භාරගැනීම 2026 ජූලි මස 31 වන දින දක්වා විවෘතව ඇත.',
    imageUrl: 'https://raw.githubusercontent.com/damindulakhara/ruusara26/files/3521_2408659_236622_image.jpg',
  }
];

const EVENTS_EN = [
  {
    id: '1',
    title: 'Dubbing Competition',
    dateStr: 'Submissions are open until July 31, 2026.',
    imageUrl: 'https://raw.githubusercontent.com/damindulakhara/ruusara26/files/dubbing_feature.jpg',
  },
  {
    id: '2',
    title: 'Digital Character Design',
    dateStr: 'Submissions are open until July 31, 2026.',
    imageUrl: 'https://raw.githubusercontent.com/damindulakhara/ruusara26/files/22-2-qo5hjsgdih7djmzgoiy2chthhwifj2cbdafs03ccyo.png',
  },
  {
    id: '3',
    title: 'Photo Manipulation',
    dateStr: 'Submissions are open until July 31, 2026.',
    imageUrl: 'https://raw.githubusercontent.com/damindulakhara/ruusara26/files/1701685786275.jpg',
  },
  {
    id: '4',
    title: 'Movie Trailer Design',
    dateStr: 'Submissions are open until July 31, 2026.',
    imageUrl: 'https://raw.githubusercontent.com/damindulakhara/ruusara26/files/3521_2408659_236622_image.jpg',
  }
];

export const Events: React.FC = () => {
  const { language } = useLanguage();
  const events = language === 'si' ? EVENTS_SI : EVENTS_EN;
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);

  const selectedEvent = events.find(e => e.id === selectedEventId);
  const selectedEventDetails = selectedEventId ? EVENT_DETAILS[selectedEventId] : [];

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
                <button 
                  onClick={() => setSelectedEventId(event.id)}
                  className={`px-8 py-2.5 bg-blue-600 border border-transparent text-white font-bold rounded-full hover:bg-transparent hover:border-blue-500 hover:text-blue-400 transition-all tracking-wide cursor-pointer ${language === 'si' ? 'font-sinhala' : 'font-sans'}`}
                >
                  {language === 'si' ? 'වැඩිදුර කියවන්න' : 'Read More'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedEventId(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#181818] w-full max-w-3xl max-h-[85vh] rounded-3xl shadow-2xl border border-gray-800 flex flex-col overflow-hidden"
            >
              <div className="flex justify-between items-center p-6 border-b border-gray-800">
                <h3 className={`text-2xl font-bold text-white ${language === 'si' ? 'font-sinhala' : 'font-sans'}`}>
                  {selectedEvent.title}
                </h3>
                <button 
                  onClick={() => setSelectedEventId(null)}
                  className="text-gray-400 hover:text-white transition-colors p-1"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-6 overflow-y-auto custom-scrollbar">
                <div className={`space-y-4 text-gray-300 font-sinhala leading-relaxed`}>
                  {selectedEventDetails.map((detail, i) => {
                    if (detail.startsWith('**') && detail.endsWith('**')) {
                      return <h4 key={i} className="text-xl font-bold text-white mt-6 mb-2">{detail.replace(/\*\*/g, '')}</h4>;
                    } else if (detail.startsWith('<b>') && detail.endsWith('</b>')) {
                      return <h4 key={i} className="text-xl font-bold text-white mt-6 mb-2">{detail.replace(/<\/?b>/g, '')}</h4>;
                    }
                    return <p key={i} className="flex items-start">
                      <span className="mr-2 text-blue-500 mt-1">•</span>
                      <span>{detail}</span>
                    </p>;
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #111111;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}} />
    </section>
  );
};
