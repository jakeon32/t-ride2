import React, { useEffect, useState, useRef } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLanguage } from '../contexts/LanguageContext';

// Local Asset Images
import heroImg from '../assets/shopping_yeoju 1.jpg';
import outletImg from '../assets/shopping_siheung 1.jpg';
import dutyfreeImg from '../assets/shopping_yeoju 1.jpg'; // Reusing Yeoju for now

// Placeholder for Department Store
const mallImg = 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=2070';

interface Destination {
    id: number;
    type: 'shuttle' | 'private' | 'outlet';
    partner: string;
    title: string;
    description?: string;
    features: string[];
    image: string;
}

const heroSlides = [
    {
        id: 0,
        image: heroImg,
        title: <>쇼핑을 위한<br />완벽한 여정</>,
        desc: <>여주, 시흥 프리미엄 아울렛부터 면세점까지.<br />쇼핑의 즐거움을 더해주는 편안한 이동 서비스.</>,
        buttonText: "이동편 예약",
        buttonLink: "#collection-section"
    },
    {
        id: 1,
        image: outletImg,
        title: <>편리한 셔틀버스</>,
        desc: <>주요 쇼핑몰을 연결하는 직행 셔틀. 무거운 짐 걱정 없이 쇼핑에만 집중하세요.</>,
        buttonText: "셔틀 예약하기",
        buttonLink: "#collection-section"
    },
    {
        id: 2,
        image: dutyfreeImg,
        title: <>프라이빗 쇼핑 투어</>,
        desc: <>나만을 위한 전용 차량으로 여유롭게. 호텔 픽업부터 공항 샌딩까지.</>,
        buttonText: "프라이빗 예약하기",
        buttonLink: "#collection-section"
    }
];

const destinations: Destination[] = [
    {
        id: 1,
        type: 'shuttle',
        partner: 'Shinsegae',
        title: '여주 프리미엄 아울렛',
        description: '국내 최초, 최대 규모의 명품 브랜드 라인업',
        features: ['셔틀버스 운행', 'VIP 쿠폰북 증정'],
        image: heroImg
    },
    {
        id: 2,
        type: 'shuttle',
        partner: 'Shinsegae',
        title: '시흥 프리미엄 아울렛',
        description: '이국적인 경관과 함께 즐기는 여유로운 쇼핑',
        features: ['셔틀버스 운행', '지역 연계 투어'],
        image: outletImg
    },
    {
        id: 3,
        type: 'private',
        partner: 'Lotte',
        title: '롯데면세점 명동본점',
        description: '도심 속 면세 쇼핑의 중심',
        features: ['공항 샌딩', '쇼핑 바우처'],
        image: dutyfreeImg
    },
    {
        id: 5,
        type: 'outlet',
        partner: 'Lotte',
        title: '롯데 프리미엄 아울렛 타임빌라스',
        description: '바라산의 자연과 함께하는 글라스빌',
        features: ['자연 친화적', '키즈존'],
        image: mallImg
    },
];

const ShoppingDetails: React.FC = () => {
    const { lang } = useLanguage();
    const [activeFilter, setActiveFilter] = useState<'all' | 'shuttle' | 'private'>('all');
    const scrollRef = useRef<HTMLDivElement>(null);
    const [currentSlide, setCurrentSlide] = useState(1);
    const [totalSlides, setTotalSlides] = useState(1);

    // Hero Slider State
    const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Parallax calculations (Synced with Airport/Leisure Style)
    const overlayOpacity = Math.min(scrollY / 800, 0.8);
    const bgParallax = -scrollY * 0.3;
    const textParallax = -scrollY;

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Auto-play for Hero Slider
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHeroSlide((prev) => (prev + 1) % 3);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const filteredDestinations = React.useMemo(() => {
        return activeFilter === 'all'
            ? destinations
            : destinations.filter(d => d.type === activeFilter);
    }, [activeFilter]);

    useEffect(() => {
        setTotalSlides(filteredDestinations.length);
        setCurrentSlide(1); // Reset slider on filter change
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

    const progressPercentage = (currentSlide / filteredDestinations.length) * 100;

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Navbar />

            <main className="flex-grow">
                {/* 1. Hero Slider Section (Airport Style Synced) */}
                <section className="sticky top-0 h-[50vh] w-full overflow-hidden z-0">
                    {/* Background Layer with Parallax */}
                    <div
                        className="absolute inset-0 w-full h-full will-change-transform scale-105"
                        style={{ transform: `translateY(${bgParallax}px)` }}
                    >
                        {heroSlides.map((slide, index) => (
                            <div
                                key={slide.id}
                                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentHeroSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                            >
                                {/* Full Background Image */}
                                <div className="absolute inset-0">
                                    <img
                                        src={slide.image}
                                        alt="Hero Slide"
                                        className="w-full h-full object-cover transition-transform duration-[5000ms] ease-linear transform scale-105 hover:scale-110 grayscale-[30%]"
                                    />
                                    {/* Cinematic Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent"></div>
                                    {/* Dynamic Darkening Overlay */}
                                    <div
                                        className="absolute inset-0 bg-black pointer-events-none transition-opacity duration-100 ease-linear"
                                        style={{ opacity: overlayOpacity }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Content Container with Slower Parallax */}
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
                                            RIDERS SHOPPING MODULE 0{index + 1}
                                        </span>
                                        {/* Hero Heading */}
                                        <h1
                                            className={`text-5xl md:text-[3.5rem]/[1.2] font-display font-bold mb-6 leading-[1.2] md:leading-[1.2] tracking-tighter ${index === currentHeroSlide ? 'animate-slide-in-right' : ''}`}
                                        >
                                            {slide.title}
                                        </h1>
                                        {/* Body Large */}
                                        <p
                                            className={`text-lg text-slate-300 mb-10 leading-relaxed font-light ${index === currentHeroSlide ? 'animate-slide-in-right' : ''}`}
                                            style={{ animationDelay: '0.1s' }}
                                        >
                                            {slide.desc}
                                        </p>
                                        {/* Button Text */}
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
                        {/* Slider Navigation Dots - Moved INSIDE Parallax Container */}
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

                {/* 2. Popular Destinations Section (Technical Minimalist) */}
                <section id="collection-section" className="relative z-30 bg-white border-b border-[#E5E5E5]">
                    {/* Top Divider Line */}
                    <div className="w-full h-[1px] bg-[#E5E5E5] mb-12 md:mb-16"></div>

                    <div className="max-w-[1216px] mx-auto relative group pb-24 md:pb-32 px-6 md:px-12">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                            <div>
                                <h2 className="font-technical-header font-medium text-3xl md:text-4xl text-[#0F1115] mb-6 uppercase tracking-wider">
                                    {lang === 'KR' ? '쇼핑 플레이스 컬렉션' : 'Shopping Collection'}
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
                                            <span className={`inline-block px-3 py-1 font-technical-label text-xs uppercase tracking-wider ${item.type === 'outlet' ? 'bg-[#0F1115] text-white' : 'bg-[#E5E5E5] text-[#0F1115]'}`}>
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
            </main>

            <Footer />
        </div>
    );
};

export default ShoppingDetails;
