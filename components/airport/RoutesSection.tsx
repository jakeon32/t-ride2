import React, { useState, useRef, useEffect } from 'react';
import { getDestinations } from '../../data/airportData';
import { useLanguage } from '../../contexts/LanguageContext';
import Breadcrumb from '../shared/Breadcrumb';
import Container from '../shared/Container';

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
        <section id="collection-section" className="relative z-10 bg-white border-b border-[#E5E5E5] text-[#0F1115]">
            {/* Top Divider Line - Matches LeisureDetails */}
            <div className="w-full h-[1px] bg-[#E5E5E5] mb-12 md:mb-16"></div>

            <Container className="relative group pb-24 md:pb-32">
                <Breadcrumb current={{ KR: '공항이동', EN: 'Airport' }} />
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-3 gap-6">
                    <div>
                        <h2 className="font-technical-header font-medium text-2xl md:text-3xl text-[#0F1115] mb-6 uppercase tracking-wider">
                            {lang === 'KR' ? '공항 이동 컬렉션' : 'Airport Transfer Collection'}
                        </h2>
                    </div>
                </div>

                {/* Grid Container */}
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {destinations.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white border border-[#E5E5E5] group/card hover:border-[#2E5CFF] transition-colors"
                        >
                            <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110" loading="lazy" decoding="async" />
                            </div>
                            <div className="p-5">
                                <div className="flex items-center justify-between mb-4">
                                    <span className={`inline-block px-3 py-1 rounded text-xs font-bold uppercase tracking-wider ${item.type === 'shuttle' ? 'bg-[#2E5CFF] text-white' : 'bg-[#0F1115] text-white'}`}>
                                        {item.type.toUpperCase()}
                                    </span>
                                    <span className="inline-block px-3 py-1 border border-[#E5E5E5] rounded text-xs text-slate-500">
                                        {item.airport === 'ICN'
                                            ? (lang === 'KR' ? '인천공항' : 'ICN')
                                            : (lang === 'KR' ? '김포공항' : 'GMP')}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-[#0F1115] mb-1 line-clamp-1">{item.title}</h3>
                                <p className="text-sm text-slate-500 mb-5 line-clamp-1">{item.description}</p>
                                <button className="w-full py-3 border border-[#E5E5E5] text-sm font-medium text-[#0F1115] hover:border-[#2E5CFF] hover:text-[#2E5CFF] transition-colors">
                                    {lang === 'KR' ? '자세히 보기' : 'VIEW DETAILS'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default RoutesSection;
