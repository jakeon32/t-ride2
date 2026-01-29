import React, { useEffect, useState } from 'react';
import { heroSlides } from '../../data/airportData';

const HeroSection: React.FC = () => {
    const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const overlayOpacity = Math.min(scrollY / 800, 0.8);
    const parallaxOffset = -scrollY * 0.3;

    // Auto-play for Hero Slider
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHeroSlide((prev) => (prev + 1) % 3);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="sticky top-0 h-[50vh] w-full overflow-hidden z-0">
            {/* Parallax Container */}
            <div
                className="absolute inset-0 w-full h-full will-change-transform"
                style={{ transform: `translateY(${parallaxOffset}px)` }}
            >
                {heroSlides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentHeroSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    >
                        {/* Full Background Image */}
                        <div className="absolute inset-0">
                            <img
                                src={slide.image}
                                alt="Hero Slide"
                                className="w-full h-full object-cover transition-transform duration-[5000ms] ease-linear transform scale-100 hover:scale-105"
                            />
                            {/* Gradient Overlay for Text Visibility & Blending */}
                            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#1e293b] via-[#1e293b]/50 to-transparent"></div>
                            {/* Dynamic Darkening Overlay */}
                            <div
                                className="absolute inset-0 bg-black pointer-events-none transition-opacity duration-100 ease-linear"
                                style={{ opacity: overlayOpacity }}
                            />
                        </div>

                        {/* Content Container - Centered to match bottom content */}
                        <div className="relative z-10 w-full h-full">
                            <div className="max-w-[1216px] mx-auto h-full px-5 md:px-8 flex flex-col md:flex-row">
                                {/* Left: Content (Text Area) */}
                                <div className="w-full md:w-[50%] lg:w-[45%] flex flex-col justify-center text-white pt-32 md:pt-0">
                                    {/* L1: Hero Heading */}
                                    <h1
                                        key={`title-${index}`}
                                        className={`text-hero mb-4 ${index === currentHeroSlide ? 'animate-slide-in-right' : ''}`}
                                    >
                                        {slide.title}
                                    </h1>
                                    {/* L4-A: Body Large */}
                                    <p
                                        key={`desc-${index}`}
                                        className={`text-body-lg text-slate-300 mb-8 break-keep ${index === currentHeroSlide ? 'animate-slide-in-right' : ''}`}
                                        style={{ animationDelay: '0.1s' }}
                                    >
                                        {slide.desc}
                                    </p>
                                    {/* L5-D: Button Text */}
                                    <button
                                        key={`btn-${index}`}
                                        className={`text-btn w-fit px-8 py-3 rounded-full border border-white text-white hover:bg-white hover:text-[#1e293b] transition-all duration-300 ${index === currentHeroSlide ? 'animate-slide-in-right' : ''}`}
                                        style={{ animationDelay: '0.2s' }}
                                    >
                                        {slide.buttonText}
                                    </button>
                                </div>

                                {/* Spacer for Right Side (Image Area) */}
                                <div className="hidden md:block md:w-[50%] lg:w-[55%]"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Slider Navigation Dots */}
            <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
                {heroSlides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentHeroSlide(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentHeroSlide ? 'bg-white w-6' : 'bg-white/40 hover:bg-white/60'}`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default HeroSection;
