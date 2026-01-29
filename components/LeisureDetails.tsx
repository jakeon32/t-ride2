import React, { useEffect, useState, useRef } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
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
    type: 'resort' | 'hotel';
    partner: string;
    title: string;
    description: string;
    features: string[];
    image: string;
}

const LeisureDetails: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<'all' | 'resort' | 'hotel'>('all');
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
    const parallaxOffset = -scrollY * 0.3;

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
            buttonLink: "#"
        },
        {
            id: 1,
            image: leisureShuttleImg,
            title: <>셔틀 서비스</>,
            desc: <>주요 골프장, 스키 리조트, 테마파크를 연결하는 정기 셔틀 서비스입니다.<br />합리적인 요금으로 편안하게 이동하세요.</>,
            buttonText: "셔틀 예약하기",
            buttonLink: "#"
        },
        {
            id: 2,
            image: leisurePrivateImg,
            title: <>프라이빗 이동 서비스</>,
            desc: <>전용 차량과 전문 기사가 동행하는 완전 맞춤형 레저 이동 서비스입니다.<br />원하는 시간에 원하는 장소로, 자유로운 일정 구성이 가능합니다.</>,
            buttonText: "프라이빗 예약하기",
            buttonLink: "#"
        }
    ];

    const destinations: Destination[] = [
        {
            id: 1,
            type: 'resort',
            partner: 'Pyeongchang',
            title: '용평리조트',
            description: '대한민국 스키의 발상지, 사계절 종합 휴양지',
            features: ['스키장', '워터파크', '발왕산 케이블카'],
            image: yongpyongImg
        },
        {
            id: 2,
            type: 'hotel',
            partner: 'Pyeongchang',
            title: '라마다 호텔 앤 스위트 평창',
            description: '대관령의 전경이 한눈에 들어오는 프리미엄 힐링 공간',
            features: ['복층 구조', '사우나', '순수양떼목장 인근'],
            image: ramadaImg
        },
        {
            id: 3,
            type: 'resort',
            partner: 'Hoengseong',
            title: '웰리힐리파크',
            description: '청정 자연 속에서 즐기는 다이나믹한 즐거움',
            features: ['워터플래닛', '루지', '곤돌라'],
            image: wellihilliImg
        },
        {
            id: 4,
            type: 'resort',
            partner: 'Jeongseon',
            title: '하이원 리조트',
            description: '백두대간 1급 청정 자연과 함께하는 힐링 리조트',
            features: ['강원랜드', '워터월드', '하늘길 트레킹'],
            image: high1Img
        },
        {
            id: 5,
            type: 'resort',
            partner: 'Pyeongchang',
            title: '휘닉스 평창',
            description: '태기산의 정기를 품은 자연 친화적 리조트',
            features: ['블루캐니언', '루지랜드', '포레스트파크'],
            image: phoenixImg
        },
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
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Navbar />

            <main className="flex-grow">
                {/* 1. Hero Slider Section */}
                <section className="sticky top-0 h-[50vh] w-full overflow-hidden z-0">
                    {/* Parallax Container */}
                    <div
                        className="absolute inset-0 w-full h-full will-change-transform"
                        style={{ transform: `translateY(${parallaxOffset}px)` }}
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
                                        className="w-full h-full object-cover transition-transform duration-[5000ms] ease-linear transform scale-100 hover:scale-105"
                                    />
                                    {/* Gradient Overlay for Text Visibility & Blending */}
                                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#1e293b] via-[#1e293b]/50 to-transparent"></div>
                                    {/* Dynamic Darkening Overlay */}
                                    <div
                                        className="absolute inset-0 bg-black pointer-events-none transition-opacity duration-100 ease-linear"
                                        style={{ opacity: overlayOpacity }}
                                    />
                                </div>

                                {/* Content Container - Centered to match bottom content */}
                                <div className="relative z-10 w-full h-full">
                                    <div className="max-w-[1216px] mx-auto h-full px-5 md:px-6 flex flex-col md:flex-row">
                                        {/* Left: Content (Text Area) */}
                                        <div className="w-full md:w-[50%] lg:w-[45%] flex flex-col justify-center text-white">
                                            <h1
                                                key={`title-${index}`}
                                                className={`display-font text-3xl md:text-3xl lg:text-4xl font-extrabold mb-4 leading-tight ${index === currentHeroSlide ? 'animate-slide-in-right' : ''}`}
                                            >
                                                {slide.title}
                                            </h1>
                                            <p
                                                key={`desc-${index}`}
                                                className={`text-slate-300 text-sm md:text-base leading-relaxed mb-8 break-keep ${index === currentHeroSlide ? 'animate-slide-in-right' : ''}`}
                                                style={{ animationDelay: '0.1s' }}
                                            >
                                                {slide.desc}
                                            </p>
                                            <button
                                                key={`btn-${index}`}
                                                className={`w-fit px-8 py-3 rounded-full border border-white text-white font-bold hover:bg-white hover:text-[#1e293b] transition-all duration-300 ${index === currentHeroSlide ? 'animate-slide-in-right' : ''}`}
                                                style={{ animationDelay: '0.2s' }}
                                            >
                                                {slide.buttonText}
                                            </button>
                                        </div>

                                        {/* Spacer for Right Side (Image Area) */}
                                        <div className="hidden md:block md:w-[50%] lg:w-[55%]"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Slider Navigation Dots */}
                    <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
                        {heroSlides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentHeroSlide(index)}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentHeroSlide ? 'bg-white w-6' : 'bg-white/40 hover:bg-white/60'}`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </section>

                {/* 2. Popular Destinations Section */}
                <section className="relative z-30 bg-slate-50 py-16 md:py-20 px-5 md:px-6 rounded-t-[2.5rem] -mt-20 shadow-[0_-20px_40px_rgba(0,0,0,0.1)]">
                    <div className="max-w-[1216px] mx-auto relative group">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1e293b] mb-4">
                                    인기 리조트 컬렉션
                                </h2>

                                <div className="flex items-center space-x-2">
                                    <button
                                        onClick={() => setActiveFilter('all')}
                                        className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${activeFilter === 'all' ? 'bg-[#1e293b] text-white' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                                    >
                                        전체
                                    </button>
                                    <button
                                        onClick={() => setActiveFilter('resort')}
                                        className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${activeFilter === 'resort' ? 'bg-[#1e293b] text-white' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                                    >
                                        리조트
                                    </button>
                                    <button
                                        onClick={() => setActiveFilter('hotel')}
                                        className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${activeFilter === 'hotel' ? 'bg-[#1e293b] text-white' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                                    >
                                        호텔
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
                               w-[calc((100%-20px)/1.5)] 
                               md:w-[calc((100%-40px)/3)] 
                               bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
                                >
                                    <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                        <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-colors">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                        </button>
                                    </div>
                                    <div className="p-5">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${item.type === 'resort' ? 'bg-sky-50 text-sky-600' : 'bg-emerald-50 text-emerald-600'}`}>
                                                {item.type === 'resort' ? '리조트' : '호텔'}
                                            </span>
                                            <span className="text-xs text-slate-400 font-medium">{item.partner}</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-[#1e293b] mb-1 line-clamp-1">{item.title}</h3>
                                        <p className="text-sm text-slate-500 mb-4 line-clamp-1">{item.description}</p>

                                        <div className="flex flex-wrap gap-2 mb-0">
                                            {item.features.slice(0, 2).map((feature, idx) => (
                                                <span key={idx} className="inline-flex items-center px-2 py-1 rounded bg-slate-50 text-xs text-slate-500">
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination Indicator (Bottom Left) */}
                        <div className="absolute bottom-[-20px] left-5 md:left-8 flex items-center gap-3">
                            <div className="bg-[#1e293b] text-white text-xs font-bold px-3 py-1 rounded-full">
                                {currentSlide} / {filteredDestinations.length}
                            </div>
                            <div className="w-32 h-1 bg-slate-200 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-[#1e293b] transition-all duration-300"
                                    style={{ width: `${progressPercentage}%` }}
                                ></div>
                            </div>
                        </div>

                        {/* Pagination Control (Bottom Right - Mobile Only) */}
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
            </main>

            <Footer />
        </div>
    );
};

export default LeisureDetails;
