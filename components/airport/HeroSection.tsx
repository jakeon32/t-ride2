import React, { useEffect, useState } from 'react';
import { getHeroSlides } from '../../data/airportData';
import { useLanguage } from '../../contexts/LanguageContext';
import { useScrollOptimized } from '../../hooks';

const HeroSection: React.FC = () => {
    const { lang } = useLanguage();
    const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
    const scrollY = useScrollOptimized();
    const heroSlides = getHeroSlides(lang);

    useEffect(() => {
        // 자동 슬라이드 로직은 유지
        const interval = setInterval(() => {
            setCurrentHeroSlide((prev) => (prev + 1) % 3);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    // Parallax calculations - Fixed for Sticky positioning (Move UP/Negative)
    const bgParallax = -scrollY * 0.3;
    const textParallax = -scrollY;
    const overlayOpacity = Math.min(scrollY / 800, 0.8);

    return (
        <section className="fixed top-0 left-0 w-full h-screen z-0 overflow-hidden">
            {/* Background Layer with Parallax */}
            <div
                className="absolute inset-0 w-full h-full scale-105"
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
                                loading="lazy"
                                decoding="async"
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
                <div className="max-w-[1216px] mx-auto h-full px-6 md:px-12 relative">
                    {heroSlides.map((slide, index) => (
                        <div
                            key={`content-${index}`}
                            className={`absolute inset-0 flex items-center transition-opacity duration-500 delay-300 ${index === currentHeroSlide ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                        >
                            <div className="max-w-4xl text-white pt-32 md:pt-20 px-4 md:px-0 md:pl-12">
                                <span className={`block text-[var(--color-accent)] font-bold tracking-widest text-[10px] md:text-xs mb-3 md:mb-4 uppercase ${index === currentHeroSlide ? 'animate-slide-in-right' : ''}`}>
                                    {lang === 'KR' ? '프리미엄 모빌리티' : 'Premium Mobility'}
                                </span>
                                {/* L1: Hero Heading */}
                                <h1
                                    className={`text-4xl leading-[1.3] md:text-[3.5rem]/[1.2] font-display font-bold mb-4 md:mb-6 md:leading-[1.2] tracking-tighter ${index === currentHeroSlide ? 'animate-slide-in-right' : ''}`}
                                >
                                    {slide.title}
                                </h1>
                                {/* L4-A: Body Large */}
                                <p
                                    className={`text-base md:text-lg text-slate-300 mb-8 md:mb-10 leading-relaxed font-light ${index === currentHeroSlide ? 'animate-slide-in-right' : ''}`}
                                    style={{ animationDelay: '0.1s' }}
                                >
                                    {slide.desc}
                                </p>
                                {/* L5-D: Button Text */}
                                <a
                                    href={slide.buttonLink}
                                    className={`group inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 mb-20 ${index === currentHeroSlide ? 'animate-slide-in-right' : ''}`}
                                    style={{ animationDelay: '0.2s' }}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const section = document.querySelector(slide.buttonLink);
                                        if (section) {
                                            const headerOffset = 100;
                                            const elementPosition = section.getBoundingClientRect().top;
                                            const offsetPosition = elementPosition + window.scrollY - headerOffset;
                                            window.scrollTo({
                                                top: offsetPosition,
                                                behavior: "smooth"
                                            });
                                        }
                                    }}
                                >
                                    {slide.buttonText}
                                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Slider Navigation Dots - Moved INSIDE Parallax Container */}
                <div className="absolute bottom-10 left-0 w-full z-20 pointer-events-none">
                    <div className="max-w-[1216px] mx-auto px-6 md:px-12">
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
            </div>


        </section >
    );
};

export default HeroSection;
