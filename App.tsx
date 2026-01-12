
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  // Smooth scroll to top when changing tabs
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home onNavigate={setActiveTab} />;
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-gold/20 selection:text-brand-dark">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
      
      {/* Scroll to Top Hidden on Hero */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-40 bg-white/50 backdrop-blur-md p-4 rounded-full border border-brand-gold/20 hover:bg-white hover:border-brand-gold transition-all duration-300 group shadow-lg"
      >
        <div className="w-1 h-6 bg-brand-gold relative overflow-hidden mx-auto">
          <div className="absolute top-0 left-0 w-full h-full bg-brand-dark -translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        </div>
      </button>
    </div>
  );
};

export default App;
