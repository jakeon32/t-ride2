import React from 'react';
import { Link } from 'react-router-dom';
import { ResortData } from '../../data/leisureResorts';
import { useLanguage } from '../../contexts/LanguageContext';
import Breadcrumb from '../shared/Breadcrumb';
import Container from '../shared/Container';

interface ResortCollectionProps {
    title: { KR: string; EN: string };
    items: ResortData[];
    firstSection?: boolean;
    mode?: 'grid' | 'marquee';
    id?: string;
    breadcrumb?: { KR: string; EN: string };
}

const ResortCollection: React.FC<ResortCollectionProps> = ({ title, items, firstSection = true, mode = 'grid', id, breadcrumb }) => {
    const { lang } = useLanguage();
    const [isPaused, setIsPaused] = React.useState(false);
    const marqueeRef = React.useRef<HTMLDivElement>(null);
    const isDragging = React.useRef(false);
    const hasDragged = React.useRef(false);
    const dragStartX = React.useRef(0);
    const dragScrollLeft = React.useRef(0);
    const pausedRef = React.useRef(false);
    const animRef = React.useRef<number>();

    React.useEffect(() => { pausedRef.current = isPaused; }, [isPaused]);

    React.useEffect(() => {
        if (mode !== 'marquee') return;
        const el = marqueeRef.current;
        if (!el) return;

        const tick = () => {
            if (!pausedRef.current && !isDragging.current && el) {
                el.scrollLeft += 0.8;
                if (el.scrollLeft >= el.scrollWidth / 2) {
                    el.scrollLeft = 0;
                }
            }
            animRef.current = requestAnimationFrame(tick);
        };
        animRef.current = requestAnimationFrame(tick);
        return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
    }, [mode]);

    const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        const el = marqueeRef.current;
        if (!el) return;
        isDragging.current = true;
        hasDragged.current = false;
        dragStartX.current = e.pageX - el.offsetLeft;
        dragScrollLeft.current = el.scrollLeft;
        el.style.cursor = 'grabbing';
    };

    const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging.current) return;
        e.preventDefault();
        const el = marqueeRef.current;
        if (!el) return;
        const x = e.pageX - el.offsetLeft;
        const walk = x - dragStartX.current;
        if (Math.abs(walk) > 5) hasDragged.current = true;
        el.scrollLeft = dragScrollLeft.current - walk;
    };

    const onMouseUpOrLeave = () => {
        isDragging.current = false;
        if (marqueeRef.current) marqueeRef.current.style.cursor = 'grab';
    };

    // Hardcoded departure info constant - Array for badges
    const DEPARTURE_STATIONS = {
        KR: ["홍대입구", "동대문", "건대입구", "종합운동장"],
        EN: ["Hongik Univ.", "Dongdaemun", "Konkuk Univ.", "Sports Complex"]
    };

    // Card rendering logic helper
    const renderCard = (resort: ResortData, index: number, isMarquee: boolean = false) => {
        const stations = lang === 'KR' ? DEPARTURE_STATIONS.KR : DEPARTURE_STATIONS.EN;

        return (
            <Link
                to={resort.detailUrl}
                key={`${resort.name}-${index}-${isMarquee ? 'marquee' : 'grid'}`}
                className={`group block bg-white border border-[#E5E5E5] hover:border-[#2E5CFF] transition-colors ${isMarquee ? 'w-[240px] md:w-[280px] flex-shrink-0 mx-2 select-none' : ''}`}
                draggable={false}
                onClick={(e) => { if (isMarquee && hasDragged.current) e.preventDefault(); }}
            >
                <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                    <img
                        src={resort.image}
                        alt={lang === 'KR' ? resort.name.KR : resort.name.EN}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 select-none pointer-events-none"
                        loading="lazy"
                        draggable={false}
                    />
                    <div className="absolute top-4 left-4">
                        <span className="bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded text-xs font-medium tracking-wide">
                            {lang === 'KR' ? resort.region.KR : resort.region.EN}
                        </span>
                    </div>
                </div>
                <div className="p-4">
                    <div className="mb-4">
                        <h3 className="text-h3 text-[#0F1115] line-clamp-1">
                            {lang === 'KR' ? resort.name.KR : resort.name.EN}
                        </h3>
                        {/* Distance text hidden as per request */}
                        {/* <p className="text-sm font-medium text-[#2E5CFF] mt-1">
                            {lang === 'KR' ? resort.distanceText.KR : resort.distanceText.EN}
                        </p> */}
                    </div>

                    {/* Departure Info Badges replacing Description */}
                    <div className="mb-5 min-h-[42px] flex flex-wrap gap-1.5 content-start">
                        {stations.map((station, i) => (
                            <span key={i} className="inline-block bg-slate-100 text-slate-600 px-2 py-1 rounded text-[11px] font-medium tracking-tight">
                                {station}
                            </span>
                        ))}
                    </div>

                    <div className="w-full py-3 border border-[#E5E5E5] text-center text-sm font-medium text-[#0F1115] hover:border-[#2E5CFF] hover:text-[#2E5CFF] transition-colors">
                        {lang === 'KR' ? '자세히 보기' : 'VIEW DETAILS'}
                    </div>
                </div>
            </Link>
        );
    };

    // Duplicate items for seamless loop
    const marqueeItems = [...items, ...items];

    return (
        <section id={id} className={`relative z-10 ${firstSection ? 'mt-[75vh]' : ''} bg-slate-50 py-16 md:py-24 overflow-hidden`}>
            <div className={`${mode === 'grid' ? "max-w-[1216px] mx-auto px-6 md:px-12" : "w-full"}`}>
                <h2 className="max-w-[1216px] mx-auto text-h2 text-[#0F1115] mb-8 md:mb-12 uppercase tracking-tight">
                    {title.EN /* Note: Adjusted to use title object property from upstream props, though stash used raw {title}. Verify prop type. */}
                    {/* Wait, upstream prop is `title: { KR: string; EN: string }`. Stash treated title as string? 
                        Let's check the stash content again.
                        Stash: {title}
                        Upstream: {lang === 'KR' ? title.KR : title.EN}
                        
                        If stash treated title as string, it might mean the interface was changed in stash.
                        Let's look at the file content I viewed earlier.
                        
                        Line 9: title: { KR: string; EN: string }; (Interface on line 9 is from upstream view? No, view_file shows current file state with conflicts markers.)
                        The interface definition is visible at top of file.
                        
                        Line 9:     title: { KR: string; EN: string };
                        
                        So if stash uses `{title}`, it would be rendering `[object Object]`. 
                        This suggests the stash might have also changed the interface, but the conflict marker I saw was only in the return statement.
                        However, looking at the view_file output for ResortCollection.tsx:
                        The conflict is lines 68-87.
                        Lines 1-16 including interface are NOT in conflict.
                        This means the interface expects an object.
                        
                        But stash code uses `{title}`.
                        This implies the stash code might be buggy or I missed an interface change conflict?
                        
                        Ah, wait. Maybe the stash *did* change the interface but git didn't mark it as conflict because it auto-merged that part?
                        Or maybe the stash is just wrong/incompatible with current HEAD interface.
                        
                        Let's check the prop usage in `ResortCollection` stashed part.
                        `{title}`
                        
                        If I keep the upstream interface `title: { KR: string; EN: string }`, then `{title}` is invalid in JSX (object).
                        
                        So I should use the upstream logic `{lang === 'KR' ? title.KR : title.EN}` but wrapped in the stashed layout/styling.
                    */}
                    {lang === 'KR' ? title.KR : title.EN}
                </h2>

                {mode === 'grid' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {items.map((item, index) => renderCard(item, index))}
                    </div>
                ) : (
                    <div
                        ref={marqueeRef}
                        className="-mx-6 md:-mx-12 overflow-x-auto cursor-grab select-none"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' } as React.CSSProperties}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => { setIsPaused(false); onMouseUpOrLeave(); }}
                        onMouseDown={onMouseDown}
                        onMouseMove={onMouseMove}
                        onMouseUp={onMouseUpOrLeave}
                    >
                        <div className="flex pb-4 px-6 md:px-12" style={{ width: 'max-content' }}>
                            {marqueeItems.map((item, index) => renderCard(item, index, true))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ResortCollection;
