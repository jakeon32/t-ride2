import React, { useState, useRef, useEffect } from 'react';
import { destinations } from '../../data/airportData';

const RoutesSection: React.FC = () => {
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

    const progressPercentage = (currentSlide / filteredDestinations.length) * 100;

    return (
        <section className="relative z-30 bg-slate-50 py-16 md:py-20">
            <div className="max-w-[1216px] mx-auto px-5 md:px-8 relative group">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                    <div>
                        {/* L2: Section Title */}
                        <h2 className="text-section-title text-[#1e293b] mb-2">
                            주요 공항 노선
                        </h2>
                        {/* L4-B: Body Regular */}
                        <p className="text-body text-slate-500 mb-4">
                            인천공항·김포공항에서 원하는 목적지로 편안하게 이동하세요
                        </p>

                        {/* L5-D: Button Text */}
                        <div className="flex flex-wrap items-center gap-2">
                            <button
                                onClick={() => setActiveFilter('all')}
                                className={`text-btn px-4 py-2 rounded-lg transition-colors ${activeFilter === 'all' ? 'bg-[#1e293b] text-white' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                            >
                                전체
                            </button>
                            <button
                                onClick={() => setActiveFilter('ICN')}
                                className={`text-btn px-4 py-2 rounded-lg transition-colors ${activeFilter === 'ICN' ? 'bg-[#1e293b] text-white' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                            >
                                인천공항 ICN
                            </button>
                            <button
                                onClick={() => setActiveFilter('GMP')}
                                className={`text-btn px-4 py-2 rounded-lg transition-colors ${activeFilter === 'GMP' ? 'bg-[#1e293b] text-white' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                            >
                                김포공항 GMP
                            </button>
                            <button
                                onClick={() => setActiveFilter('shuttle')}
                                className={`text-btn px-4 py-2 rounded-lg transition-colors ${activeFilter === 'shuttle' ? 'bg-[#1e293b] text-white' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                            >
                                셔틀
                            </button>
                            <button
                                onClick={() => setActiveFilter('private')}
                                className={`text-btn px-4 py-2 rounded-lg transition-colors ${activeFilter === 'private' ? 'bg-[#1e293b] text-white' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                            >
                                프라이빗
                            </button>
                        </div>
                    </div>

                    {/* Desktop Navigation Arrows */}
                    <div className="hidden md:flex items-center gap-2">
                        <button
                            onClick={scrollLeft}
                            className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <button
                            onClick={scrollRight}
                            className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </div>
                </div>

                {/* Carousel Container */}
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex overflow-x-auto pb-8 md:mx-0 md:px-0 space-x-5 snap-x hide-scrollbar scroll-smooth"
                >
                    {filteredDestinations.map((item) => (
                        <div
                            key={item.id}
                            className="flex-shrink-0 snap-start
                       w-[calc((100%-20px)/1.2)]
                       md:w-[calc((100%-40px)/2.5)]
                       lg:w-[calc((100%-60px)/3)]
                       bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
                        >
                            <div className="aspect-[16/10] bg-slate-100 relative overflow-hidden">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                {/* L5-B: Badge/Tag */}
                                <span className="text-badge absolute top-3 right-3 px-2 py-1 rounded bg-white/90 backdrop-blur-sm text-[#1e293b]">
                                    {item.airport}
                                </span>
                                {/* L5-B: Badge/Tag */}
                                <span className={`text-badge absolute top-3 left-3 px-2 py-1 rounded ${item.type === 'shuttle' ? 'bg-blue-500 text-white' : 'bg-slate-800 text-white'}`}>
                                    {item.type === 'shuttle' ? '🚐 셔틀' : '🚗 프라이빗'}
                                </span>
                            </div>
                            <div className="p-5">
                                {/* L3-C: Card Title Medium */}
                                <h3 className="text-card-title text-[#1e293b] mb-1">{item.title}</h3>
                                {/* L4-B: Body Regular */}
                                <p className="text-body text-slate-500 mb-4">{item.description}</p>

                                {/* L4-C: List Items */}
                                <div className="space-y-2 text-list-item mb-4">
                                    <div className="flex items-start gap-2">
                                        <span className="text-slate-400">📍</span>
                                        <span className="text-slate-600">{item.route}</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="text-slate-400">⏱️</span>
                                        <span className="text-slate-600">{item.interval} · {item.duration}</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="text-slate-400">🕐</span>
                                        <span className="text-slate-600">{item.schedule}</span>
                                    </div>
                                    {item.capacity && (
                                        <div className="flex items-start gap-2">
                                            <span className="text-slate-400">👨‍👩‍👧‍👦</span>
                                            <span className="text-slate-600">{item.capacity}</span>
                                        </div>
                                    )}
                                    <div className="flex items-start gap-2">
                                        <span className="text-slate-400">💰</span>
                                        <span className="text-blue-600 font-bold">{item.price}</span>
                                    </div>
                                </div>

                                {/* L5-D: Button Text */}
                                <div className="flex gap-2">
                                    <button className="text-btn flex-1 py-2.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors">
                                        {item.type === 'shuttle' ? '시간표 보기' : '상담하기'}
                                    </button>
                                    <button className="text-btn flex-1 py-2.5 rounded-lg bg-[#1e293b] text-white hover:bg-[#334155] transition-colors">
                                        예약하기
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination Indicator */}
                <div className="absolute bottom-[-20px] left-5 md:left-8 flex items-center gap-3">
                    {/* L5-B: Badge */}
                    <div className="text-badge bg-[#1e293b] text-white px-3 py-1 rounded-full">
                        {currentSlide} / {filteredDestinations.length}
                    </div>
                    <div className="w-32 h-1 bg-slate-200 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-[#1e293b] transition-all duration-300"
                            style={{ width: `${progressPercentage}%` }}
                        ></div>
                    </div>
                </div>

                {/* Mobile Navigation Arrows */}
                <div className="md:hidden absolute bottom-[-20px] right-5 flex items-center gap-2">
                    <button
                        onClick={scrollLeft}
                        className="w-9 h-9 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:bg-slate-50 active:bg-slate-100 transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button
                        onClick={scrollRight}
                        className="w-9 h-9 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:bg-slate-50 active:bg-slate-100 transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default RoutesSection;
