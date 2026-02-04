import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import MatchingLogic from './MatchingLogic';
import Categories from './Categories';
import WhyUs from './WhyUs';
import Process from './Process';
import Footer from './Footer';

const Home: React.FC = () => {
    // Scroll to top on mount
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <Hero />
            <main className="flex-grow z-10 relative pointer-events-none [&>*]:pointer-events-auto">
                <MatchingLogic />
                <Categories />
                <WhyUs />
                <Process />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
