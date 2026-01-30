import React, { useState, useRef, useEffect } from 'react';
import { getDestinations } from '../../data/airportData';
import { useLanguage } from '../../contexts/LanguageContext';

const RoutesSection: React.FC = () => {
    const { lang } = useLanguage();
    const destinations = getDestinations(lang);
    const [activeFilter, setActiveFilter] = useState<'all' | 'ICN' | 'GMP' | 'shuttle' | 'private'>('all');
    const scrollRef = useRef<HTMLDivElement>(null);
    const [currentSlide, setCurrentSlide] = useState(1);
    const [totalSlides, setTotalSlides] = useState(1);

    const filteredDestinations = activeFilter === 'all'
        ? destinations
        : activeFilter === 'ICN' || activeFilter === 'GMP'
            ? destinations.filter(d => d.airport === activeFilter)
            : destinations.filter(d => d.type === activeFilter);

    useEffect(() => {
        setTotalSlides(filteredDestinations.length);
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
            scrollRef.current.scrollBy({ left: -itemWidth, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            const itemWidth = scrollRef.current.children[0]?.clientWidth || 300;
            scrollRef.current.scrollBy({ left: itemWidth, behavior: 'smooth' });
        }
    };

    const progressPercentage = (currentSlide / Math.max(filteredDestinations.length, 1)) * 100;

    const getFilterLabel = (filter: string) => {
        if (lang === 'EN') return filter === 'all' ? 'All' : filter.toUpperCase();
        switch (filter) {
            case 'all': return '전체';
            case 'ICN': return '인천공항';
            case 'GMP': return '김포공항';
            case 'shuttle': return '셔틀';
            case 'private': return '프라이빗';
            default: return filter.toUpperCase();
        }
    };

    return (
        <section className="relative z-30 bg-transparent py-20 border-t border-white/5">
            <div className="max-w-[1216px] mx-auto px-6 md:px-8 relative group">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <span className="text-[var(--color-accent)] font-bold tracking-widest text-xs mb-4 uppercase block">
                            {lang === 'KR' ? '운행 노선' : 'Network Board'}
                        </span>
                        {/* L2: Section Title */}
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 leading-tight">
                            {lang === 'KR' ? '운행 노선 안내' : 'FLIGHT ROUTES'}
                        </h2>
                        {/* L4-B: Body Regular */}
                        <p className="text-slate-500 font-light text-sm md:text-base max-w-xl">
                            {lang === 'KR'
                                ? "인천, 김포공항과 주요 거점을 매끄럽게 연결합니다."
                                : "Connect seamlessly from Incheon and Gimpo to your prime destinations."}
                        </p>
                    </div>

                    {/* Filter Buttons - Industrial Style */}
                    <div className="flex flex-wrap items-center gap-2">
                        {['all', 'ICN', 'GMP', 'shuttle', 'private'].map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter as any)}
                                className={`px-4 py-2 border rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${activeFilter === filter
                                    ? 'bg-white border-white text-black shadow-lg'
                                    : 'bg-transparent border-white/20 text-slate-500 hover:border-white/50 hover:text-white'
                                    }`}
                            >
                                {getFilterLabel(filter)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Carousel Container */}
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex overflow-x-auto pb-12 md:mx-0 md:px-0 space-x-6 snap-x hide-scrollbar scroll-smooth"
                >
                    {filteredDestinations.map((item) => (
                        <div
                            key={item.id}
                            className="flex-shrink-0 snap-start
                       w-[calc((100%-24px)/1.2)]
                       md:w-[calc((100%-48px)/2.5)]
                       lg:w-[calc((100%-72px)/3)]
                       bg-[#111] rounded-none border border-white/10 overflow-hidden hover:border-[var(--color-accent)] transition-all duration-300 group/card"
                        >
                            <div className="aspect-[16/10] bg-[#1a1a1a] relative overflow-hidden">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-80 group-hover/card:opacity-100 group-hover/card:scale-110 transition-all duration-700 grayscale-[30%] group-hover/card:grayscale-0" />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-80"></div>

                                {/* Badge/Tag */}
                                <div className="absolute top-4 left-4 flex gap-2">
                                    <span className="px-2 py-1 bg-black/60 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold uppercase tracking-wider">
                                        {item.airport}
                                    </span>
                                    <span className={`px-2 py-1 text-[10px] font-bold uppercase tracking-wider ${item.type === 'shuttle' ? 'bg-[var(--color-accent)]/80 text-white' : 'bg-white/80 text-black'}`}>
                                        {item.type.toUpperCase()}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                {/* Title */}
                                <h3 className="text-xl font-display font-bold text-white mb-2 truncate group-hover/card:text-[var(--color-accent)] transition-colors">{item.title}</h3>
                                <p className="text-slate-500 text-xs font-light mb-6 line-clamp-2 h-8">{item.description}</p>

                                {/* Specs Grid Removed as per user request */}
                                <div className="mb-6"></div>

                                {/* Action Buttons */}
                                <div className="flex gap-3">
                                    <button className="flex-1 py-3 border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all">
                                        {item.type === 'shuttle' ? (lang === 'KR' ? '시간표' : 'Timetable') : (lang === 'KR' ? '문의하기' : 'Inquire')}
                                    </button>
                                    <button className="flex-1 py-3 bg-white text-black text-[10px] font-bold uppercase tracking-wider hover:bg-[var(--color-accent)] hover:text-white transition-all">
                                        {lang === 'KR' ? '예약하기' : 'Book Now'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Controls & Progress */}
                <div className="flex items-center justify-between mt-4 px-1">
                    {/* Progress Bar */}
                    <div className="flex-grow max-w-xs h-[1px] bg-white/10 relative">
                        <div
                            className="absolute top-0 left-0 h-full bg-[var(--color-accent)] transition-all duration-300"
                            style={{ width: `${progressPercentage}%` }}
                        ></div>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex items-center gap-4">
                        <span className="text-xs font-mono text-slate-500 tracking-wider">
                            {currentSlide.toString().padStart(2, '0')} / {filteredDestinations.length.toString().padStart(2, '0')}
                        </span>
                        <div className="flex gap-2">
                            <button
                                onClick={scrollLeft}
                                className="w-10 h-10 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" /></svg>
                            </button>
                            <button
                                onClick={scrollRight}
                                className="w-10 h-10 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoutesSection;
