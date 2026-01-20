
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MatchingLogic from './components/MatchingLogic';
import Categories from './components/Categories';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <MatchingLogic />
        <Categories />
        <WhyUs />
        <Process />
      </main>
      <Footer />
    </div>
  );
};

export default App;
