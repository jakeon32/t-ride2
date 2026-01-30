import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import HeroSection from './airport/HeroSection';
import IntroSection from './airport/IntroSection';
import USPSection from './airport/USPSection';
import RoutesSection from './airport/RoutesSection';
import WhyChooseSection from './airport/WhyChooseSection';
import SkiBanner from './airport/SkiBanner';
import AmbientBackground from './AmbientBackground';

const AirportDetails: React.FC = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-[var(--color-bg)]">
            <AmbientBackground />
            <Navbar />
            <main className="flex-grow z-10 relative">
                <HeroSection />
                <IntroSection />
                <RoutesSection />
                <WhyChooseSection />
                <SkiBanner />
                <USPSection />
            </main>
            <Footer />
        </div>
    );
};

export default AirportDetails;
