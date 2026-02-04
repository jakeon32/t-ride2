import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

export interface CollectionItem {
    id: number;
    type: string;
    partner: string;
    title: string;
    description?: string;
    features: string[];
    image: string;
}

export interface FilterOption {
    value: string;
    label: string;
}

interface CollectionSectionProps {
    title: { KR: string; EN: string };
    items: CollectionItem[];
    filters: FilterOption[];
    highlightType?: string;
    firstSection?: boolean;
    bgColor?: string;
    compactBottom?: boolean;
}

const CollectionSection: React.FC<CollectionSectionProps> = ({
    title,
    items,
    filters,
    highlightType = 'shuttle',
    firstSection = true,
    bgColor,
    compactBottom = false,
}) => {
    const { lang } = useLanguage();
    const [activeFilter, setActiveFilter] = useState('all');
    const scrollRef = useRef<HTMLDivElement>(null);
    const [currentSlide, setCurrentSlide] = useState(1);

    const filteredItems = activeFilter === 'all'
        ? items
        : items.filter(d => d.type === activeFilter);

    useEffect(() => {
        setCurrentSlide(1);
        if (scrollRef.current) scrollRef.current.scrollLeft = 0;
    }, [activeFilter]);

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft } = scrollRef.current;
            const itemWidth = scrollRef.current.children[0]?.clientWidth || 0;
            if (itemWidth > 0) {
                const index = Math.round(scrollLeft / itemWidth) + 1;
                setCurrentSlide(Math.min(Math.max(index, 1), filteredItems.length));
            }
        }
    };

    const doScrollLeft = () => {
        if (scrollRef.current) {
            const itemWidth = scrollRef.current.children[0]?.clientWidth || 300;
            scrollRef.current.scrollBy({ left: -(itemWidth + 24), behavior: 'smooth' });
        }
    };

    const doScrollRight = () => {
        if (scrollRef.current) {
            const itemWidth = scrollRef.current.children[0]?.clientWidth || 300;
            scrollRef.current.scrollBy({ left: itemWidth + 24, behavior: 'smooth' });
        }
    };

    const progressPercentage = (currentSlide / Math.max(filteredItems.length, 1)) * 100;

    return (
        <section id="collection-section" className={`relative z-10 ${bgColor || 'bg-white'} ${firstSection ? 'mt-screen border-b border-[#E5E5E5]' : 'pt-12 md:pt-16'}`}>
            {firstSection && <div className="w-full h-[1px] bg-[#E5E5E5] mb-12 md:mb-16"></div>}

            <div className={`max-w-[1216px] mx-auto relative group ${compactBottom ? 'pb-12 md:pb-16' : 'pb-24 md:pb-32'} px-6 md:px-12`}>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <h2 className="font-technical-header font-medium text-3xl md:text-4xl text-[#0F1115] mb-6 uppercase tracking-wider">
                            {lang === 'KR' ? title.KR : title.EN}
                        </h2>

                        <div className="flex flex-wrap items-center space-x-0 border border-[#E5E5E5] w-fit">
                            {filters.map((filter, idx) => (
                                <button
                                    key={filter.value}
                                    onClick={() => setActiveFilter(filter.value)}
                                    className={`px-6 py-3 text-xs font-technical-label transition-colors border-r border-[#E5E5E5] last:border-r-0 ${activeFilter === filter.value ? 'bg-[#0F1115] text-white' : 'bg-white text-[#0F1115] hover:bg-slate-50'}`}
                                >
                                    {filter.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Desktop Navigation Arrows */}
                    {filteredItems.length > 3 && (
                        <div className="hidden md:flex items-center gap-0 border border-[#E5E5E5]">
                            <button
                                onClick={doScrollLeft}
                                className="w-12 h-12 bg-white flex items-center justify-center text-[#0F1115] hover:bg-[#0F1115] hover:text-white transition-colors border-r border-[#E5E5E5]"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" /></svg>
                            </button>
                            <button
                                onClick={doScrollRight}
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
                    {filteredItems.length > 0 ? filteredItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex-shrink-0 snap-start
                               w-[calc((100%-24px)/1.2)]
                               md:w-[calc((100%-48px)/3)]
                               bg-white border border-[#E5E5E5] group/card hover:border-[#2E5CFF] transition-colors"
                        >
                            <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110" loading="lazy" decoding="async" />
                                <div className="absolute top-0 left-0 p-0">
                                    <span className={`inline-block px-3 py-1 font-technical-label text-xs uppercase tracking-wider ${item.type === highlightType ? 'bg-[#0F1115] text-white' : 'bg-[#E5E5E5] text-[#0F1115]'}`}>
                                        {item.type.toUpperCase()}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6 border-t border-[#E5E5E5]">
                                <div className="mb-4">
                                    <span className="block font-technical-label text-xs text-[#2E5CFF] mb-2 uppercase tracking-widest">
                                        {item.partner}
                                    </span>
                                    <h3 className="font-technical-body text-lg font-semibold text-[#0F1115] mb-1 line-clamp-1">{item.title}</h3>
                                    {item.description && (
                                        <p className="font-technical-body text-sm text-slate-500 line-clamp-1">{item.description}</p>
                                    )}
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {item.features.slice(0, 2).map((feature, idx) => (
                                        <span key={idx} className="inline-flex items-center px-2 py-1 border border-[#E5E5E5] text-[12px] font-technical-label text-slate-500 uppercase">
                                            {feature}
                                        </span>
                                    ))}
                                    <span className="inline-flex items-center px-2 py-1 text-[12px] font-technical-label text-[#2E5CFF] uppercase ml-auto">
                                        {lang === 'KR' ? '자세히 보기' : 'VIEW DETAILS'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    )) : (
                        <div className="w-full py-20 text-center text-slate-400 font-technical-label">
                            {lang === 'KR' ? '해당하는 상품이 없습니다.' : 'No items found.'}
                        </div>
                    )}
                </div>

                {/* Pagination & Controls */}
                <div className="flex justify-between items-center mt-8">
                    <div className="flex items-center gap-4">
                        <div className="font-technical-label text-xs text-[#0F1115]">
                            <span className="text-[#2E5CFF]">0{currentSlide}</span> / 0{filteredItems.length}
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
                            onClick={doScrollLeft}
                            className="w-10 h-10 bg-white flex items-center justify-center text-[#0F1115] active:bg-slate-50 border-r border-[#E5E5E5]"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <button
                            onClick={doScrollRight}
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

export default CollectionSection;
