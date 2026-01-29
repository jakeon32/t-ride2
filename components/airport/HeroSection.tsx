import React, { useEffect, useState } from 'react';
import { getHeroSlides } from '../../data/airportData';
import { useLanguage } from '../../contexts/LanguageContext';

const HeroSection: React.FC = () => {
    const { lang } = useLanguage();
    const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
    const [scrollY, setScrollY] = useState(0);
    const heroSlides = getHeroSlides(lang);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Parallax calculations matching Landing Page
    const bgParallax = scrollY * 0.5;
    const textParallax = scrollY * 0.2;
    const overlayOpacity = Math.min(scrollY / 800, 0.8);

    // Auto-play for Hero Slider
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHeroSlide((prev) => (prev + 1) % 3);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden z-0">
            {/* Background Layer with Parallax */}
            <div
                className="absolute inset-0 w-full h-full will-change-transform scale-105"
                style={{ transform: `translateY(${bgParallax}px)` }}
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
                                className="w-full h-full object-cover transition-transform duration-[5000ms] ease-linear transform scale-105 hover:scale-110 grayscale-[30%]"
                            />
                            {/* Cinematic Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent"></div>
                            {/* Dynamic Darkening Overlay */}
                            <div
                                className="absolute inset-0 bg-black pointer-events-none transition-opacity duration-100 ease-linear"
                                style={{ opacity: overlayOpacity }}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Content Container with Slower Parallax */}
            <div
                className="relative z-10 w-full h-full pointer-events-none will-change-transform"
                style={{ transform: `translateY(${textParallax}px)` }}
            >
                <div className="max-w-[1216px] mx-auto h-full px-6 md:px-8 relative">
                    {heroSlides.map((slide, index) => (
                        <div
                            key={`content-${index}`}
                            className={`absolute inset-0 flex items-center transition-opacity duration-500 delay-300 ${index === currentHeroSlide ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                        >
                            <div className="max-w-4xl text-white pt-20">
                                <span className={`block text-[var(--color-accent)] font-bold tracking-widest text-xs mb-4 uppercase ${index === currentHeroSlide ? 'animate-slide-in-right' : ''}`}>
                                    {lang === 'KR' ? '프리미엄 모빌리티' : 'Premium Mobility'}
                                </span>
                                {/* L1: Hero Heading */}
                                <h1
                                    className={`text-5xl md:text-7xl font-display font-bold mb-6 leading-[0.9] tracking-tighter ${index === currentHeroSlide ? 'animate-slide-in-right' : ''}`}
                                >
                                    {slide.title}
                                </h1>
                                {/* L4-A: Body Large */}
                                <p
                                    className={`text-lg text-slate-300 mb-10 leading-relaxed font-light ${index === currentHeroSlide ? 'animate-slide-in-right' : ''}`}
                                    style={{ animationDelay: '0.1s' }}
                                >
                                    {slide.desc}
                                </p>
                                {/* L5-D: Button Text */}
                                <button
                                    className={`group flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 ${index === currentHeroSlide ? 'animate-slide-in-right' : ''}`}
                                    style={{ animationDelay: '0.2s' }}
                                >
                                    {slide.buttonText}
                                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Slider Navigation Dots */}
            <div className="absolute bottom-20 left-0 w-full z-20 pointer-events-none">
                <div className="max-w-[1216px] mx-auto px-6 md:px-8">
                    <div className="flex gap-4 pointer-events-auto">
                        {heroSlides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentHeroSlide(index)}
                                className={`transition-all duration-300 ${index === currentHeroSlide ? 'w-8 h-1 bg-[var(--color-accent)]' : 'w-2 h-1 bg-white/30 hover:bg-white/50'}`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
