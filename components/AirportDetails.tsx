import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import HeroSection from './airport/HeroSection';
import IntroSection from './airport/IntroSection';
import USPSection from './airport/USPSection';
import RoutesSection from './airport/RoutesSection';
import WhyChooseSection from './airport/WhyChooseSection';
import SkiBanner from './airport/SkiBanner';

const AirportDetails: React.FC = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-[var(--color-bg)]">
            <Navbar />
            <HeroSection />
            <main className="flex-grow z-10 relative mt-screen">
                <div className="relative z-10 bg-[var(--color-bg)]">
                    <IntroSection />
                    <RoutesSection />
                    <WhyChooseSection />
                    <SkiBanner />
                    <USPSection />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AirportDetails;
