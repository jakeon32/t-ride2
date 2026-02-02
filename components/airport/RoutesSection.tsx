import React, { useState, useRef, useEffect } from 'react';
import { getDestinations } from '../../data/airportData';
import { useLanguage } from '../../contexts/LanguageContext';

const RoutesSection: React.FC = () => {
    const { lang } = useLanguage();
    const destinations = React.useMemo(() => getDestinations(lang), [lang]);
    const [activeFilter, setActiveFilter] = useState<'all' | 'shuttle' | 'private'>('all');
    const scrollRef = useRef<HTMLDivElement>(null);
    const [currentSlide, setCurrentSlide] = useState(1);
    const [totalSlides, setTotalSlides] = useState(1);

    const filteredDestinations = React.useMemo(() => {
        return activeFilter === 'all'
            ? destinations
            : destinations.filter(d => d.type === activeFilter);
    }, [activeFilter, destinations]);

    useEffect(() => {
        setTotalSlides(filteredDestinations.length);
        setCurrentSlide(1);
        if (scrollRef.current) scrollRef.current.scrollLeft = 0;
    }, [filteredDestinations]);

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft } = scrollRef.current;
            const itemWidth = scrollRef.current.children[0]?.clientWidth || 0;
            if (itemWidth > 0) {
                const index = Math.round(scrollLeft / itemWidth) + 1;
                setCurrentSlide(Math.min(Math.max(index, 1), filteredDestinations.length));
            }
        }
    };

    const scrollLeft = () => {
        if (scrollRef.current) {
            const itemWidth = scrollRef.current.children[0]?.clientWidth || 300;
            scrollRef.current.scrollBy({ left: -(itemWidth + 24), behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            const itemWidth = scrollRef.current.children[0]?.clientWidth || 300;
            scrollRef.current.scrollBy({ left: itemWidth + 24, behavior: 'smooth' });
        }
    };

    const progressPercentage = (currentSlide / Math.max(filteredDestinations.length, 1)) * 100;

    return (
        <section id="collection-section" className="relative z-30 bg-white border-b border-[#E5E5E5] text-[#0F1115]">
            {/* Top Divider Line - Matches LeisureDetails */}
            <div className="w-full h-[1px] bg-[#E5E5E5] mb-12 md:mb-16"></div>

            <div className="max-w-[1216px] mx-auto relative group pb-24 md:pb-32 px-6 md:px-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <h2 className="font-technical-header font-medium text-3xl md:text-4xl text-[#0F1115] mb-6 uppercase tracking-wider">
                            {lang === 'KR' ? '공항 이동 컬렉션' : 'Airport Transfer Collection'}
                        </h2>

                        <div className="flex flex-wrap items-center space-x-0 border border-[#E5E5E5] w-fit">
                            <button
                                onClick={() => setActiveFilter('all')}
                                className={`px-6 py-3 text-xs font-technical-label transition-colors border-r border-[#E5E5E5] last:border-r-0 ${activeFilter === 'all' ? 'bg-[#0F1115] text-white' : 'bg-white text-[#0F1115] hover:bg-slate-50'}`}
                            >
                                ALL
                            </button>
                            <button
                                onClick={() => setActiveFilter('shuttle')}
                                className={`px-6 py-3 text-xs font-technical-label transition-colors border-r border-[#E5E5E5] last:border-r-0 ${activeFilter === 'shuttle' ? 'bg-[#0F1115] text-white' : 'bg-white text-[#0F1115] hover:bg-slate-50'}`}
                            >
                                SHUTTLE
                            </button>
                            <button
                                onClick={() => setActiveFilter('private')}
                                className={`px-6 py-3 text-xs font-technical-label transition-colors border-r border-[#E5E5E5] last:border-r-0 ${activeFilter === 'private' ? 'bg-[#0F1115] text-white' : 'bg-white text-[#0F1115] hover:bg-slate-50'}`}
                            >
                                PRIVATE
                            </button>
                        </div>
                    </div>

                    {/* Desktop Navigation Arrows (Square Technical Style) - Only show if items > 3 */}
                    {filteredDestinations.length > 3 && (
                        <div className="hidden md:flex items-center gap-0 border border-[#E5E5E5]">
                            <button
                                onClick={scrollLeft}
                                className="w-12 h-12 bg-white flex items-center justify-center text-[#0F1115] hover:bg-[#0F1115] hover:text-white transition-colors border-r border-[#E5E5E5]"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" /></svg>
                            </button>
                            <button
                                onClick={scrollRight}
                                className="w-12 h-12 bg-white flex items-center justify-center text-[#0F1115] hover:bg-[#0F1115] hover:text-white transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
                            </button>
                        </div>
                    )}
                </div>

                {/* Carousel Container */}
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex overflow-x-auto pb-4 space-x-6 snap-x hide-scrollbar scroll-smooth"
                >
                    {filteredDestinations.map((item) => (
                        <div
                            key={item.id}
                            className="flex-shrink-0 snap-start 
                               w-[calc((100%-24px)/1.2)] 
                               md:w-[calc((100%-48px)/3)] 
                               bg-white border border-[#E5E5E5] group/card hover:border-[#2E5CFF] transition-colors"
                        >
                            <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover filter grayscale transition-all duration-500 group-hover/card:grayscale-0" />
                                {/* Plus button removed */}
                                <div className="absolute top-0 left-0 p-0">
                                    <span className={`inline-block px-3 py-1 font-technical-label text-xs uppercase tracking-wider ${item.type === 'shuttle' ? 'bg-[#0F1115] text-white' : 'bg-[#E5E5E5] text-[#0F1115]'}`}>
                                        {item.airport} | {item.type.toUpperCase()}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6 border-t border-[#E5E5E5]">
                                <div className="mb-4">
                                    <span className="block font-technical-label text-xs text-[#2E5CFF] mb-2 uppercase tracking-widest">
                                        RIDERS AIRPORT
                                    </span>
                                    <h3 className="font-technical-body text-lg font-semibold text-[#0F1115] mb-1 line-clamp-1">{item.title}</h3>
                                    <p className="font-technical-body text-sm text-slate-500 line-clamp-1">{item.description}</p>
                                </div>

                                {/* View Details Link Style */}
                                <div className="flex items-center gap-2">
                                    <span className="text-[12px] font-technical-label uppercase tracking-wider text-[#0F1115] group-hover/card:text-[#2E5CFF] transition-colors">
                                        {lang === 'KR' ? '자세히 보기' : 'VIEW DETAILS'}
                                    </span>
                                    <svg className="w-3 h-3 text-[#0F1115] group-hover/card:text-[#2E5CFF] transition-colors bg-transparent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination & Controls Wrapper - Technical Style */}
                <div className="flex justify-between items-center mt-8">
                    {/* Pagination Indicator */}
                    <div className="flex items-center gap-4">
                        <div className="font-technical-label text-xs text-[#0F1115]">
                            <span className="text-[#2E5CFF]">0{currentSlide}</span> / 0{filteredDestinations.length}
                        </div>
                        <div className="w-24 h-[1px] bg-[#E5E5E5] relative">
                            <div
                                className="absolute top-0 left-0 h-full bg-[#2E5CFF] transition-all duration-300"
                                style={{ width: `${progressPercentage}%` }}
                            ></div>
                        </div>
                    </div>

                    {/* Mobile Navigation Controls */}
                    <div className="md:hidden flex items-center border border-[#E5E5E5]">
                        <button
                            onClick={scrollLeft}
                            className="w-10 h-10 bg-white flex items-center justify-center text-[#0F1115] active:bg-slate-50 border-r border-[#E5E5E5]"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <button
                            onClick={scrollRight}
                            className="w-10 h-10 bg-white flex items-center justify-center text-[#0F1115] active:bg-slate-50"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoutesSection;
