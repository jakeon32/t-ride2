import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import Breadcrumb from './Breadcrumb';
import Container from './Container';

export interface CollectionItem {
    id: number;
    type: string;
    partner: string;
    title: string;
    description?: string;
    period?: string;
    features: string[];
    image: string;
    url?: string;
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
    breadcrumb?: { KR: string; EN: string };
}

const CollectionSection: React.FC<CollectionSectionProps> = ({
    title,
    items,
    filters,
    highlightType = 'shuttle',
    firstSection = true,
    bgColor,
    compactBottom = false,
    breadcrumb,
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

            <Container className={`relative group ${compactBottom ? 'pb-12 md:pb-16' : 'pb-24 md:pb-32'}`}>
                {breadcrumb && <Breadcrumb current={breadcrumb} />}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-3 gap-6">
                    <div>
                        <h2 className="font-technical-header font-medium text-2xl md:text-3xl text-[#0F1115] mb-6 uppercase tracking-wider">
                            {lang === 'KR' ? title.KR : title.EN}
                        </h2>
                    </div>
                </div>

                {/* Grid Container */}
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {items.length > 0 ? items.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white border border-[#E5E5E5] group/card hover:border-[#2E5CFF] transition-colors"
                        >
                            <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110" loading="lazy" decoding="async" />
                            </div>
                            <div className="p-5">
                                <div className="flex items-center justify-between mb-4">
                                    <span className={`inline-block px-3 py-1 rounded text-xs font-bold uppercase tracking-wider ${item.type === highlightType ? 'bg-[#2E5CFF] text-white' : 'bg-[#0F1115] text-white'}`}>
                                        {item.type.toUpperCase()}
                                    </span>
                                    {item.features[0] && (
                                        <span className="inline-block px-3 py-1 border border-[#E5E5E5] rounded text-xs text-slate-500">
                                            {item.features[0]}
                                        </span>
                                    )}
                                </div>
                                <h3 className="text-lg font-bold text-[#0F1115] mb-1 line-clamp-1">{item.title}</h3>
                                {item.description && (
                                    <p className="text-sm text-slate-500 mb-1 line-clamp-1">{item.description}</p>
                                )}
                                {item.period && (
                                    <p className="text-sm font-medium text-[#265fb7] mb-4">{item.period}</p>
                                )}
                                {!item.period && item.description && <div className="mb-4" />}
                                {item.url ? (
                                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="block w-full py-3 border border-[#E5E5E5] text-sm font-medium text-[#0F1115] hover:border-[#2E5CFF] hover:text-[#2E5CFF] transition-colors text-center">
                                        {lang === 'KR' ? '자세히 보기' : 'VIEW DETAILS'}
                                    </a>
                                ) : (
                                    <button className="w-full py-3 border border-[#E5E5E5] text-sm font-medium text-[#0F1115] hover:border-[#2E5CFF] hover:text-[#2E5CFF] transition-colors">
                                        {lang === 'KR' ? '자세히 보기' : 'VIEW DETAILS'}
                                    </button>
                                )}
                            </div>
                        </div>
                    )) : (
                        <div className="w-full py-20 text-center text-slate-400 font-technical-label col-span-full">
                            {lang === 'KR' ? '해당하는 상품이 없습니다.' : 'No items found.'}
                        </div>
                    )}
                </div>
            </Container>
        </section>
    );
};

export default CollectionSection;
