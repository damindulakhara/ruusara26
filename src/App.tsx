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
      <div className="min-h-screen bg-[#0a0a0a]">
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
