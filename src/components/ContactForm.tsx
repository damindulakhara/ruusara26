import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, MapPin, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { language } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-gray-200 mb-8">
              {language === 'si' ? 'සම්බන්ධ වන්න' : 'Contact Us'}
            </h2>
            <p className={`text-gray-400 mb-12 max-w-md text-base leading-relaxed ${language === 'si' ? 'font-sinhala' : 'font-sans'}`}>
              {language === 'si' ? 'තරඟාවලිය සම්බන්ධයෙන් ඔබට යම් ගැටළුවක් හෝ වැඩිදුර විස්තර අවශ්‍ය නම්, කරුණාකර අප හා සම්බන්ධ වන්න.' : 'If you have any questions or need further clarification about the competition, feel free to reach out to us.'}
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 text-blue-500 mt-1">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="ml-6 flex flex-col justify-center">
                  <h4 className={`text-lg font-medium text-gray-200 mb-1 ${language === 'si' ? 'font-sinhala' : 'font-sans'}`}>
                    {language === 'si' ? 'විද්‍යුත් තැපෑල' : 'Email'}
                  </h4>
                  <a href="mailto:ruusara2026@gmail.com" className="text-gray-400 hover:text-blue-500 transition-colors">ruusara2026@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 text-blue-500 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="ml-6 flex flex-col justify-center">
                  <h4 className={`text-lg font-medium text-gray-200 mb-1 ${language === 'si' ? 'font-sinhala' : 'font-sans'}`}>
                    {language === 'si' ? 'දුරකථන අංකය' : 'Phone'}
                  </h4>
                  <a href="tel:+94764895998" className="text-gray-400 hover:text-blue-500 transition-colors font-sinhala">
                    (+94) 76 489 5998 - {language === 'si' ? '(දිනෙත්)' : '(Dineth)'}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 text-blue-500 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="ml-6 flex flex-col justify-center">
                  <h4 className={`text-lg font-medium text-gray-200 mb-1 ${language === 'si' ? 'font-sinhala' : 'font-sans'}`}>
                    {language === 'si' ? 'ස්ථානය' : 'Location'}
                  </h4>
                  <p className={`text-gray-400 leading-relaxed max-w-[200px] ${language === 'si' ? 'font-sinhala' : 'font-sans'}`}>
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

          {/* Contact Form */}
          <div className="bg-[#151515] rounded-3xl p-8 sm:p-10 shadow-2xl border border-gray-800">
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center h-full py-12"
              >
                <CheckCircle2 className="w-16 h-16 text-green-500 mb-6" />
                <h4 className="text-2xl font-bold text-gray-200 mb-2">Message Sent!</h4>
                <p className="text-gray-400">We will get back to you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    {language === 'si' ? 'නම' : 'Name'}
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-3 rounded-2xl border border-gray-800 bg-[#0f0f0f] text-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all placeholder-gray-700 font-sans"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    {language === 'si' ? 'විද්‍යුත් තැපෑල' : 'Email'}
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-3 rounded-2xl border border-gray-800 bg-[#0f0f0f] text-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all placeholder-gray-700 font-sans"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    {language === 'si' ? 'පණිවිඩය' : 'Message'}
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-3 rounded-2xl border border-gray-800 bg-[#0f0f0f] text-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all resize-y placeholder-gray-700 font-sans"
                    placeholder="How can we help?"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] disabled:opacity-70 flex items-center justify-center group font-sans"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className={`w-5 h-5 ml-2 ${isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform'}`} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
