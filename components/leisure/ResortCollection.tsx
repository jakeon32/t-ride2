import React from 'react';
import { Link } from 'react-router-dom';
import { ResortData } from '../../data/leisureResorts';

interface ResortCollectionProps {
    title: string;
    items: ResortData[];
    firstSection?: boolean;
    mode?: 'grid' | 'marquee';
    id?: string;
}

const ResortCollection: React.FC<ResortCollectionProps> = ({ title, items, firstSection = true, mode = 'grid', id }) => {
    const [isPaused, setIsPaused] = React.useState(false);

    // Card rendering logic helper
    const renderCard = (resort: ResortData, index: number, isMarquee: boolean = false) => (
        <Link
            to={resort.detailUrl}
            key={`${resort.name}-${index}-${isMarquee ? 'marquee' : 'grid'}`}
            className={`group block bg-white border border-[#E5E5E5] hover:border-[#2E5CFF] transition-colors ${isMarquee ? 'w-[240px] md:w-[280px] flex-shrink-0 mx-2 select-none' : ''}`}
            draggable={false}
        >
            <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                <img
                    src={resort.image}
                    alt={resort.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 select-none pointer-events-none"
                    loading="lazy"
                    draggable={false}
                />
                <div className="absolute top-4 left-4">
                    <span className="bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded text-xs font-medium tracking-wide">
                        {resort.region}
                    </span>
                </div>
            </div>
            <div className="p-4">
                <div className="mb-4">
                    <h3 className="text-h3 text-[#0F1115] group-hover:text-[#2E5CFF] transition-colors line-clamp-1">
                        {resort.name}
                    </h3>
                    <p className="text-sm font-medium text-[#2E5CFF] mt-1">
                        {resort.distanceText}
                    </p>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-1">
                    {resort.tagline.replace(/\[web:\d+\]/g, '')}
                </p>

                <div className="w-full py-3 border border-[#E5E5E5] text-center text-sm font-medium text-[#0F1115] group-hover:border-[#2E5CFF] group-hover:text-[#2E5CFF] transition-colors">
                    자세히 보기
                </div>
            </div>
        </Link>
    );

    // Duplicate items for seamless loop
    const marqueeItems = [...items, ...items];

    return (
        <section id={id} className={`relative z-10 ${firstSection ? 'mt-screen' : ''} bg-slate-50 py-16 md:py-24 overflow-hidden`}>
            <div className={`${mode === 'grid' ? "max-w-[1216px] mx-auto px-6 md:px-12" : "w-full"}`}>
                <h2 className="max-w-[1216px] mx-auto px-6 md:px-12 text-h2 text-[#0F1115] mb-8 md:mb-12 uppercase tracking-tight">
                    {title}
                </h2>

                {mode === 'grid' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {items.map((item, index) => renderCard(item, index))}
                    </div>
                ) : (
                    <div
                        className="overflow-hidden"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        onTouchStart={() => setIsPaused(true)}
                        onTouchEnd={() => setIsPaused(false)}
                    >
                        <div
                            className="flex pb-4"
                            style={{
                                animation: `marquee 30s linear infinite`,
                                animationPlayState: isPaused ? 'paused' : 'running',
                                width: 'max-content',
                            }}
                        >
                            {marqueeItems.map((item, index) => renderCard(item, index, true))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ResortCollection;
