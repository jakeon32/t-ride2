import React, { useEffect, useState, useRef } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLanguage } from '../contexts/LanguageContext';
// Using existing images as placeholders for now
import shuttleImg from '../assets/shuttle_airport.jpg';
import chauffeurImg from '../assets/chauffeur_airport.jpg';
import icnImg from '../assets/ICN_airport.jpg';
import kimpoImg from '../assets/kimpo_airport.jpg';
import yongpyongImg from '../assets/yongpyung.jpg';
import ramadaImg from '../assets/ramada.jpg';
import high1Img from '../assets/high1.jpg';
import phoenixImg from '../assets/phoenixpark.jpg';
import wellihilliImg from '../assets/wellihillipark.jpg';
// New Images
import leisureHeroImg from '../assets/Leisure Hero Image.jpg';
import leisureShuttleImg from '../assets/Shuttle Service_Leisure.jpg';
import leisurePrivateImg from '../assets/Private Service_Leisure.jpg';

interface Destination {
    id: number;
    type: 'shuttle' | 'private';
    partner: string;
    title: string;
    description: string;
    features: string[];
    image: string;
}

const LeisureDetails: React.FC = () => {
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

    const heroSlides = [
        {
            id: 0,
            image: leisureHeroImg,
            title: <>즐거움을 향한<br />가장 편안한 이동</>,
            desc: <>골프, 스키, 관광까지.<br />목적과 일정에 맞는 최적의 이동 서비스를 선택하세요.</>,
            buttonText: "지금 예약하기",
            buttonLink: "#collection-section"
        },
        {
            id: 1,
            image: leisureShuttleImg,
            title: <>셔틀 서비스</>,
            desc: <>주요 골프장, 스키 리조트, 테마파크를 연결하는 정기 셔틀 서비스입니다.<br />합리적인 요금으로 편안하게 이동하세요.</>,
            buttonText: "셔틀 예약하기",
            buttonLink: "#collection-section"
        },
        {
            id: 2,
            image: leisurePrivateImg,
            title: <>프라이빗 이동 서비스</>,
            desc: <>전용 차량과 전문 기사가 동행하는 완전 맞춤형 레저 이동 서비스입니다.<br />원하는 시간에 원하는 장소로, 자유로운 일정 구성이 가능합니다.</>,
            buttonText: "프라이빗 예약하기",
            buttonLink: "#collection-section"
        }
    ];

    const destinations: Destination[] = [
        {
            id: 1,
            type: 'shuttle',
            partner: 'Pyeongchang',
            title: '용평리조트',
            description: '대한민국 스키의 발상지, 사계절 종합 휴양지',
            features: ['셔틀버스 운행', '법인 멤버십'],
            image: yongpyongImg
        },
        {
            id: 2,
            type: 'private',
            partner: 'Pyeongchang',
            title: '라마다 호텔 & 스위트',
            description: '대관령의 아름다운 풍광을 품은 프리미엄 호텔',
            features: ['프라이빗 픽업', 'VIP 라운지'],
            image: ramadaImg
        },
        {
            id: 3,
            type: 'shuttle',
            partner: 'Jeongseon',
            title: '하이원 리조트',
            description: '하늘과 가장 가까운 힐링 리조트',
            features: ['카지노 셔틀', '스키열차 연계'],
            image: high1Img
        },
        {
            id: 4,
            type: 'shuttle',
            partner: 'Pyeongchang',
            title: '휘닉스 평창',
            description: '태기산의 정기를 품은 사계절 복합 리조트',
            features: ['셔틀버스 운행', '올인클루시브'],
            image: phoenixImg
        },
        {
            id: 5,
            type: 'shuttle',
            partner: 'Hoengseong',
            title: '웰리힐리파크',
            description: '청정 자연 속에서 즐기는 다이내믹 레저',
            features: ['셔틀버스 운행', '워터파크 연계'],
            image: wellihilliImg
        }
    ];

    const filteredDestinations = activeFilter === 'all'
        ? destinations
        : destinations.filter(d => d.type === activeFilter);


    // Carousel Logic
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
                                            RIDERS LEISURE MODULE 0{index + 1}
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

                {/* 2. Popular Destinations Section */}
                {/* 2. Popular Destinations Section (Technical Minimalist) */}
                <section id="collection-section" className="relative z-30 bg-white border-b border-[#E5E5E5]">
                    {/* Top Divider Line */}
                    <div className="w-full h-[1px] bg-[#E5E5E5] mb-12 md:mb-16"></div>

                    <div className="max-w-[1216px] mx-auto relative group pb-24 md:pb-32 px-6 md:px-12">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                            <div>
                                <h2 className="font-technical-header font-medium text-3xl md:text-4xl text-[#0F1115] mb-6 uppercase tracking-wider">
                                    {lang === 'KR' ? '인기 여행지 컬렉션' : 'Popular Collection'}
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

                            {/* Desktop Navigation Arrows (Square Technical Style) */}
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
                                            <span className={`inline-block px-3 py-1 font-technical-label text-xs uppercase tracking-wider ${item.type === 'resort' ? 'bg-[#0F1115] text-white' : 'bg-[#E5E5E5] text-[#0F1115]'}`}>
                                                {item.type === 'resort' ? 'Resort' : 'Hotel'}
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

export default LeisureDetails;
