/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { SubmissionCta } from './components/SubmissionCta';
import { Events } from './components/Events';
import { JudgeBoard } from './components/JudgeBoard';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div 
        className="min-h-screen bg-fixed bg-cover bg-center text-white"
        style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url("https://raw.githubusercontent.com/damindulakhara/ruusara26/files/Beautiful-Plain-Website-Background.jpg")' }}
      >
        <Navbar />
        <main>
          <Hero />
          <AboutUs />
          <SubmissionCta />
          <Events />
          <JudgeBoard />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
