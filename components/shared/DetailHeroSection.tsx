import React, { useEffect, useState } from 'react';
import { useScrollOptimized } from '../../hooks';

export interface HeroSlide {
    id: number;
    image: string;
    title: React.ReactNode;
    desc: React.ReactNode;
    buttonText: string;
    buttonLink: string;
}

interface DetailHeroSectionProps {
    slides: HeroSlide[];
    badgePrefix?: string;
    className?: string;
    align?: 'left' | 'center';
    mainTitle?: string;
}

const DetailHeroSection: React.FC<DetailHeroSectionProps> = ({
    slides,
    badgePrefix,
    className = "h-screen",
    align = 'left',
    mainTitle
}) => {
    const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
    const scrollY = useScrollOptimized();

    const bgParallax = -scrollY * 0.3;
    const textParallax = -scrollY;
    const overlayOpacity = Math.min(scrollY / 800, 0.8);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHeroSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <section className={`fixed top-0 left-0 w-full ${className} overflow-hidden z-0`}>
            {/* Background Layer with Parallax */}
            <div
                className="absolute inset-0 w-full h-full will-change-transform scale-105"
                style={{ transform: `translateY(${bgParallax}px)` }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentHeroSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    >
                        <div className="absolute inset-0">
                            <img
                                src={slide.image}
                                alt="Hero Slide"
                                className="w-full h-full object-cover transition-transform duration-[5000ms] ease-linear transform scale-105 hover:scale-110 grayscale-[30%]"
                                loading="lazy"
                                decoding="async"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent"></div>
                            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-transparent"></div>
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
                <div className="max-w-[1216px] mx-auto h-full px-6 md:px-12 relative flex flex-col justify-center">
                    {/* Fixed Page Title (if provided) */}
                    {mainTitle && (
                        <div className={`absolute top-16 md:top-20 left-0 w-full bottom-0 flex flex-col justify-center px-6 md:px-12 pointer-events-none z-20 ${align === 'center' ? 'items-center text-center' : 'items-start text-left'} pb-24 md:pb-32`}>
                            <h1 className="text-h1 text-white font-display animate-fade-in shadow-black/50 drop-shadow-lg">
                                {mainTitle}
                            </h1>
                        </div>
                    )}

                    {slides.map((slide, index) => (
                        <div
                            key={`content-${index}`}
                            className={`absolute inset-0 flex items-center ${align === 'center' ? 'justify-center' : ''} transition-opacity duration-500 delay-300 ${index === currentHeroSlide ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                        >
                            <div className={`max-w-4xl text-white px-4 md:px-0 transition-all duration-500 ${mainTitle ? 'pt-20 md:pt-24' : 'pt-32 md:pt-20'} ${align === 'left' ? 'md:pl-12' : 'text-center'}`}>
                                {badgePrefix && !mainTitle && (
                                    <span className={`block text-[var(--color-accent)] font-bold tracking-widest text-[10px] md:text-xs mb-3 md:mb-4 uppercase ${index === currentHeroSlide ? 'animate-slide-in-right' : ''}`}>
                                        {badgePrefix}
                                    </span>
                                )}
                                <h2
                                    className={`${mainTitle ? 'text-hero-slide' : 'text-4xl md:text-[3.5rem] leading-[1.2] tracking-tighter'} font-display text-white mb-4 md:mb-6 ${index === currentHeroSlide ? 'animate-slide-in-right' : ''}`}
                                >
                                    {slide.title}
                                </h2>
                                <p
                                    className={`text-base md:text-lg text-slate-200 mb-8 md:mb-10 leading-relaxed font-light ${index === currentHeroSlide ? 'animate-slide-in-right' : ''}`}
                                    style={{ animationDelay: '0.1s' }}
                                >
                                    {slide.desc}
                                </p>
                                {slide.buttonText && (
                                    <a
                                        href={slide.buttonLink}
                                        className={`group inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 mb-20 ${index === currentHeroSlide ? 'animate-slide-in-right' : ''}`}
                                        style={{ animationDelay: '0.2s' }}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            const section = document.querySelector(slide.buttonLink!);
                                            if (section) {
                                                const headerOffset = 100;
                                                const elementPosition = section.getBoundingClientRect().top;
                                                const offsetPosition = elementPosition + window.scrollY - headerOffset;
                                                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                                            }
                                        }}
                                    >
                                        {slide.buttonText}
                                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                {/* Slider Navigation Dots */}
                <div className="absolute bottom-4 md:bottom-10 left-0 w-full z-20 pointer-events-none">
                    <div className="max-w-[1216px] mx-auto px-6 md:px-12">
                        <div className="flex gap-4 pointer-events-auto">
                            {slides.map((_, index) => (
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
        </section>
    );
};

export default DetailHeroSection;
