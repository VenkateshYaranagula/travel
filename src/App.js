import React from 'react';
import HeroSection from './components/HeroSection';
import OverviewSection from './components/OverviewSection';
import ItinerarySection from './components/ItinerarySection';
import InteractiveMap from './components/InteractiveMap';
import CostSection from './components/CostSection';
import TermsSection from './components/TermsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="landing-page">
      <HeroSection />
      <OverviewSection />
      <ItinerarySection />
      <InteractiveMap/>
      <CostSection />
      <TermsSection />
      <Footer />
    </div>
  );
}

export default App;
