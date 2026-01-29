import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import HeroSection from './airport/HeroSection';
import IntroSection from './airport/IntroSection';
import USPSection from './airport/USPSection';
import RoutesSection from './airport/RoutesSection';
import WhyChooseSection from './airport/WhyChooseSection';
import SkiBanner from './airport/SkiBanner';
import QuickLinksSection from './airport/QuickLinksSection';
import BottomCTA from './airport/BottomCTA';

const AirportDetails: React.FC = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Navbar />
            <main className="flex-grow">
                <HeroSection />
                <IntroSection />
                <USPSection />
                <RoutesSection />
                <WhyChooseSection />
                <SkiBanner />
                <QuickLinksSection />
                <BottomCTA />
            </main>
            <Footer />
        </div>
    );
};

export default AirportDetails;
