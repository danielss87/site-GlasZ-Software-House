import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ClientLogos from './components/ClientLogos';
import Features from './components/Features';
import Testimonial from './components/Testimonial';
import AdvancedFeatures from './components/AdvancedFeatures';
import FAQ from './components/FAQ';
import Stats from './components/Stats';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ClientLogos />
      <Features />
      <Testimonial />
      <AdvancedFeatures />
      <FAQ />
      <Stats />
      <Footer />
    </div>
  );
}

export default App;
