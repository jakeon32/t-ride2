import React, { useEffect, useState } from 'react';

export interface StaticHeroSlide {
    id: number;
    image: string;
    title: React.ReactNode;
    desc: React.ReactNode;
}

interface StaticDetailHeroProps {
    slides: StaticHeroSlide[];
    className?: string;
    mainTitle?: string;
    description?: React.ReactNode;
}

const StaticDetailHero: React.FC<StaticDetailHeroProps> = ({
    slides,
    className = "h-[50vh]",
    mainTitle,
    description
}) => {
    const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

    // Auto-slide effect (Only for background cross-fade, no text animation)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHeroSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <section className={`relative w-full ${className} overflow-hidden bg-black`}>
            {/* Background Layer (No Parallax) */}
            <div className="absolute inset-0 w-full h-full">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentHeroSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    >
                        <img
                            src={slide.image}
                            alt="Detail Hero"
                            className="w-full h-full object-cover grayscale-[30%]"
                            loading="lazy"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/40"></div>
                    </div>
                ))}
            </div>

            {/* Content Container (Static, No Animation) */}
            <div className="relative z-20 w-full h-full flex flex-col justify-center items-center text-center px-6 pt-20 md:pt-24">
                {mainTitle ? (
                    // When mainTitle exists, it overrides slide titles
                    <div className="max-w-4xl text-white">
                        <h1 className="text-3xl md:text-5xl font-bold font-display tracking-tight mb-4 shadow-black/50 drop-shadow-lg whitespace-nowrap">
                            {mainTitle}
                        </h1>
                        {description && (
                            <p className="text-[1rem] leading-[1.3rem] text-white/90 font-light max-w-2xl mx-auto shadow-black/50 drop-shadow-md">
                                {description}
                            </p>
                        )}
                    </div>
                ) : (
                    // Fallback to slide content if no mainTitle (though typical use case is mainTitle for detail pages)
                    <div className="max-w-4xl text-white">
                        {slides.map((slide, index) => (
                            <div key={slide.id} className={`${index === currentHeroSlide ? 'block' : 'hidden'}`}>
                                <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight mb-4 shadow-black/50 drop-shadow-lg">
                                    {slide.title}
                                </h1>
                                <p className="text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto">
                                    {slide.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default StaticDetailHero;
