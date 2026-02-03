import React, { useEffect, useState, useRef } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLanguage } from '../contexts/LanguageContext';

// Local Asset Images
import heroImg from '../assets/tour_jeju 1.jpg';
import gyeongjuImg from '../assets/tour_gyeongju 1.jpg';
import cityNightImg from '../assets/hero_img02.jpg';
import bangkokImg from '../assets/tour_bangkok 1.jpg';
import airportImg from '../assets/shuttle_airport.jpg'; // For Airport Pickup
import golfImg from '../assets/private_leisure.png'; // For Golf Tour (alternative)

// Map specific images
const namiImg = heroImg;
const folkImg = gyeongjuImg;
const suwonImg = cityNightImg;

const tourImg = gyeongjuImg;
const traditionalImg = folkImg;

interface Destination {
    id: number;
    category: 'domestic' | 'overseas';
    type: 'shuttle' | 'private';
    partner: string;
    title: string;
    description: string;
    features: string[];
    image: string;
}

const ProductSection: React.FC<{
    title: string;
    items: Destination[];
    lang: string;
}> = ({ title, items, lang }) => {
    const [activeFilter, setActiveFilter] = useState<'all' | 'shuttle' | 'private'>('all');
    const scrollRef = useRef<HTMLDivElement>(null);
    const [currentSlide, setCurrentSlide] = useState(1);
    const [totalSlides, setTotalSlides] = useState(1);

    const filteredDestinations = React.useMemo(() => {
        return activeFilter === 'all'
            ? items
            : items.filter(d => d.type === activeFilter);
    }, [activeFilter, items]);

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

    const progressPercentage = filteredDestinations.length > 0 ? (currentSlide / filteredDestinations.length) * 100 : 0;

    return (
        <section className="relative z-30 bg-white border-b border-[#E5E5E5]">
            {/* Top Divider Line */}
            <div className="w-full h-[1px] bg-[#E5E5E5] mb-12 md:mb-16"></div>

            <div className="max-w-[1216px] mx-auto relative group pb-24 md:pb-32 px-6 md:px-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <h2 className="font-technical-header font-medium text-3xl md:text-4xl text-[#0F1115] mb-6 uppercase tracking-wider">
                            {title}
                        </h2>

                        <div className="flex items-center space-x-0 border border-[#E5E5E5] w-fit">
                            {/* All Tab */}
                            <button
                                onClick={() => setActiveFilter('all')}
                                className={`px-6 py-3 text-xs font-technical-label transition-colors border-r border-[#E5E5E5] last:border-r-0 ${activeFilter === 'all' ? 'bg-[#0F1115] text-white' : 'bg-white text-[#0F1115] hover:bg-slate-50'}`}
                            >
                                ALL
                            </button>
                            {/* Shuttle Tab */}
                            <button
                                onClick={() => setActiveFilter('shuttle')}
                                className={`px-6 py-3 text-xs font-technical-label transition-colors border-r border-[#E5E5E5] last:border-r-0 ${activeFilter === 'shuttle' ? 'bg-[#0F1115] text-white' : 'bg-white text-[#0F1115] hover:bg-slate-50'}`}
                            >
                                SHUTTLE
                            </button>
                            {/* Private Tab */}
                            <button
                                onClick={() => setActiveFilter('private')}
                                className={`px-6 py-3 text-xs font-technical-label transition-colors border-r border-[#E5E5E5] last:border-r-0 ${activeFilter === 'private' ? 'bg-[#0F1115] text-white' : 'bg-white text-[#0F1115] hover:bg-slate-50'}`}
                            >
                                PRIVATE
                            </button>
                        </div>
                    </div>

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
                    {filteredDestinations.length > 0 ? (
                        filteredDestinations.map((item) => (
                            <div
                                key={item.id}
                                className="flex-shrink-0 snap-start 
                           w-[calc((100%-24px)/1.2)] 
                           md:w-[calc((100%-48px)/3)] 
                           bg-white border border-[#E5E5E5] group/card hover:border-[#2E5CFF] transition-colors"
                            >
                                <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110" />
                                    {/* Plus button removed */}
                                    <div className="absolute top-0 left-0 p-0">
                                        <span className={`inline-block px-3 py-1 font-technical-label text-xs uppercase tracking-wider ${item.type === 'shuttle' ? 'bg-[#0F1115] text-white' : 'bg-[#E5E5E5] text-[#0F1115]'}`}>
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
                                        <p className="font-technical-body text-sm text-slate-500 line-clamp-1">{item.description}</p>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {item.features.slice(0, 2).map((feature, idx) => (
                                            <span key={idx} className="inline-flex items-center px-2 py-1 border border-[#E5E5E5] text-[12px] font-technical-label text-slate-500 uppercase">
                                                {feature}
                                            </span>
                                        ))}
                                        {/* View Details Text */}
                                        <span className="inline-flex items-center px-2 py-1 text-[12px] font-technical-label text-[#2E5CFF] uppercase ml-auto">
                                            {lang === 'KR' ? '자세히 보기' : 'View Details'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="w-full py-20 text-center text-slate-400 font-technical-label">
                            {lang === 'KR' ? '해당하는 상품이 없습니다.' : 'No items found.'}
                        </div>
                    )}
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

const LocalTripDetails: React.FC = () => {
    const { lang } = useLanguage();
    // Use Hero Slider state only here
    const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const overlayOpacity = Math.min(scrollY / 800, 0.8);
    const bgParallax = -scrollY * 0.3;
    const textParallax = -scrollY;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHeroSlide((prev) => (prev + 1) % 3);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const heroSlides = [
        {
            id: 0,
            image: heroImg,
            title: <>서울을 벗어나 만나는<br />특별한 하루</>,
            desc: <>남이섬, DMZ, 한국민속촌까지.<br />복잡한 교통편 걱정 없이 편안하게 떠나는 근교 여행.</>,
            buttonText: "근교 여행 예약",
            buttonLink: "#domestic-section"
        },
        {
            id: 1,
            image: tourImg,
            title: <>외국인 관광객 전용 투어</>,
            desc: <>언어 장벽 없는 전문 가이드와 함께하는 알찬 투어 패키지입니다.</>,
            buttonText: "투어 상품 보기",
            buttonLink: "#domestic-section"
        },
        {
            id: 2,
            image: traditionalImg,
            title: <>한국 전통 문화 체험</>,
            desc: <>가장 한국적인 아름다움을 찾아 떠나는 프라이빗 문화 탐방 코스.</>,
            buttonText: "문화 체험 예약",
            buttonLink: "#domestic-section"
        }
    ];

    const destinations: Destination[] = [
        // Domestic Items
        {
            id: 1,
            category: 'domestic',
            type: 'private', // Taxi tour is private
            partner: 'Rideus Domestic',
            title: lang === 'KR' ? '전국 관광택시 투어' : 'National Taxi Tour',
            description: lang === 'KR' ? '현지 기사님과 함께하는 숨은 명소 여행' : 'Hidden gems tour with local drivers',
            features: [lang === 'KR' ? '3시간~종일' : '3H~Full Day', lang === 'KR' ? '자유 일정' : 'Flexible'],
            image: gyeongjuImg
        },
        {
            id: 2,
            category: 'domestic',
            type: 'private',
            partner: 'Rideus Gangwon',
            title: lang === 'KR' ? '강원권 프라이빗 투어' : 'Gangwon Private Tour',
            description: lang === 'KR' ? '대관령 양떼목장부터 영월 별마로 천문대까지' : 'From Daegwallyeong to Yeongwol Observatory',
            features: [lang === 'KR' ? '프라이빗' : 'Private', lang === 'KR' ? '우리만의 여행' : 'Exclusive'],
            image: heroImg
        },
        // International Items
        {
            id: 3,
            category: 'overseas',
            type: 'private', // Airport Pickup is typically private
            partner: 'RoundT Airport',
            title: lang === 'KR' ? '공항 픽업 (수완나품/돈므앙)' : 'Airport Pickup (BKK/DMK)',
            description: lang === 'KR' ? '복잡한 공항에서 호텔까지 가장 편안하게' : 'Comfortable transfer from airport to hotel',
            features: [lang === 'KR' ? '24시간 픽업' : '24/7 Pickup', 'BKK/DMK'],
            image: airportImg
        },
        {
            id: 4,
            category: 'overseas',
            type: 'private',
            partner: 'RoundT Golf',
            title: lang === 'KR' ? '태국 명문 골프 투어' : 'Thailand Golf Tour',
            description: lang === 'KR' ? '시암, 알파인 등 명문 골프장 투어' : 'Premium golf tour including Siam, Alpine',
            features: [lang === 'KR' ? '대형 밴' : 'Large Van', lang === 'KR' ? '골프백 4개' : '4 Golf Bags'],
            image: golfImg
        },
        {
            id: 5,
            category: 'overseas',
            type: 'private',
            partner: 'RoundT Rent',
            title: lang === 'KR' ? '방콕/파타야 자유 일정 렌트' : 'Bangkok/Pattaya Car Rental',
            description: lang === 'KR' ? '원하는 일정대로 자유롭게 이동하세요' : 'Travel freely with your own schedule',
            features: [lang === 'KR' ? '안전한 여행' : 'Safe Trip', lang === 'KR' ? '친절한 기사' : 'Friendly Driver'],
            image: bangkokImg
        }
    ];

    const domesticItems = React.useMemo(() => destinations.filter(d => d.category === 'domestic'), []);
    const overseasItems = React.useMemo(() => destinations.filter(d => d.category === 'overseas'), []);

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Navbar />

            <main className="flex-grow">
                {/* 1. Hero Slider Section */}
                <section className="sticky top-0 h-[50vh] w-full overflow-hidden z-0">
                    <div
                        className="absolute inset-0 w-full h-full will-change-transform scale-105"
                        style={{ transform: `translateY(${bgParallax}px)` }}
                    >
                        {heroSlides.map((slide, index) => (
                            <div
                                key={slide.id}
                                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentHeroSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                            >
                                <div className="absolute inset-0">
                                    <img
                                        src={slide.image}
                                        alt="Hero Slide"
                                        className="w-full h-full object-cover transition-transform duration-[5000ms] ease-linear transform scale-105 hover:scale-110 grayscale-[30%]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent"></div>
                                    <div
                                        className="absolute inset-0 bg-black pointer-events-none transition-opacity duration-100 ease-linear"
                                        style={{ opacity: overlayOpacity }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div
                        className="relative z-10 w-full h-full pointer-events-none will-change-transform"
                        style={{ transform: `translateY(${textParallax}px)` }}
                    >
                        <div className="max-w-[1216px] mx-auto h-full px-6 md:px-12 relative">
                            {heroSlides.map((slide, index) => (
                                <div
                                    key={`content-${index}`}
                                    className={`absolute inset-0 flex items-center transition-opacity duration-500 delay-300 ${index === currentHeroSlide ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                                >
                                    <div className="max-w-4xl text-white pt-32 md:pt-20 pl-6 md:pl-12">
                                        <span className={`block text-[#2E5CFF] font-bold tracking-widest text-xs mb-4 uppercase ${index === currentHeroSlide ? 'animate-slide-in-right' : ''}`}>
                                            RIDERS SUBURBAN & TRAVEL MODULE 0{index + 1}
                                        </span>
                                        <h1
                                            className={`text-5xl md:text-[3.5rem]/[1.2] font-display font-bold mb-6 leading-[1.2] md:leading-[1.2] tracking-tighter ${index === currentHeroSlide ? 'animate-slide-in-right' : ''}`}
                                        >
                                            {slide.title}
                                        </h1>
                                        <p
                                            className={`text-lg text-slate-300 mb-10 leading-relaxed font-light ${index === currentHeroSlide ? 'animate-slide-in-right' : ''}`}
                                            style={{ animationDelay: '0.1s' }}
                                        >
                                            {slide.desc}
                                        </p>
                                        <a
                                            href={slide.buttonLink}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                const section = document.querySelector(slide.buttonLink);
                                                if (section) {
                                                    const headerOffset = 100;
                                                    const elementPosition = section.getBoundingClientRect().top;
                                                    const offsetPosition = elementPosition + window.scrollY - headerOffset;
                                                    window.scrollTo({
                                                        top: offsetPosition,
                                                        behavior: "smooth"
                                                    });
                                                }
                                            }}
                                            className={`group inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 mb-20 ${index === currentHeroSlide ? 'animate-slide-in-right' : ''}`}
                                            style={{ animationDelay: '0.2s' }}
                                        >
                                            {slide.buttonText}
                                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="absolute bottom-10 left-0 w-full z-20 pointer-events-none">
                            <div className="max-w-[1216px] mx-auto px-6 md:px-12">
                                <div className="flex gap-4 pointer-events-auto">
                                    {heroSlides.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentHeroSlide(index)}
                                            className={`transition-all duration-300 ${index === currentHeroSlide ? 'w-8 h-1 bg-[#2E5CFF]' : 'w-2 h-1 bg-white/30 hover:bg-white/50'}`}
                                            aria-label={`Go to slide ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Domestic Product Section */}
                <div id="domestic-section">
                    <ProductSection
                        title={lang === 'KR' ? '국내 여행 컬렉션' : 'Domestic Travel Collection'}
                        items={domesticItems}
                        lang={lang}
                    />
                </div>

                {/* 3. Overseas Product Section */}
                <ProductSection
                    title={lang === 'KR' ? '해외 여행 컬렉션' : 'Overseas Travel Collection'}
                    items={overseasItems}
                    lang={lang}
                />
            </main>

            <Footer />
        </div>
    );
};

export default LocalTripDetails;
