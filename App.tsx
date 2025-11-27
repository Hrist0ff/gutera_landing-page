import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mechanism from './components/Mechanism';
import Features from './components/Features';
import Ingredients from './components/Ingredients';
import UsageGuide from './components/UsageGuide';
import SchedulePlanner from './components/SchedulePlanner';
import MedicalProfessionals from './components/MedicalProfessionals';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar />
      <main>
        <Hero />
        <Mechanism />
        <Features />
        {/* <Ingredients /> */}
        <UsageGuide />
        <SchedulePlanner />
        <MedicalProfessionals />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;