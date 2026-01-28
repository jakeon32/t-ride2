import React, { useEffect, useState, useRef } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import shuttleImg from '../assets/shuttle_airport.jpg';
import chauffeurImg from '../assets/chauffeur_airport.jpg';
import icnImg from '../assets/ICN_airport.jpg';
import kimpoImg from '../assets/kimpo_airport.jpg';

import heroImg from '../assets/airport_hero.jpg';

interface Destination {
    id: number;
    type: 'shuttle' | 'private';
    airport: 'ICN' | 'GMP';
    title: string;
    description: string;
    route: string;
    interval: string;
    duration: string;
    schedule: string;
    price: string;
    capacity?: string;
    image: string;
}

const AirportDetails: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<'all' | 'ICN' | 'GMP' | 'shuttle' | 'private'>('all');
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
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const heroSlides = [
        {
            id: 0,
            image: heroImg,
            title: <>내 위치에서 공항까지<br />가장 편안한 방법</>,
            desc: <>인천공항·김포공항 24시간 운행<br />100개 이상의 노선으로 주요 거점 연결<br />터미널 바로 앞까지 편안하게 모셔다 드립니다</>,
            buttonText: "지금 예약하기",
            buttonLink: "#"
        },
        {
            id: 1,
            image: shuttleImg,
            title: <>공항 셔틀버스</>,
            desc: <>정해진 시간표와 노선으로 운행되는 경제적인 선택<br />주요 거점 경유, 1-2인 여행객에게 최적<br />15,000원부터 시작하는 합리적인 가격</>,
            buttonText: "셔틀 예약하기",
            buttonLink: "#"
        },
        {
            id: 2,
            image: chauffeurImg,
            title: <>프라이빗 이동 서비스</>,
            desc: <>전용 차량과 전문 기사가 함께하는 Door-to-Door<br />공항 입국장 미팅부터 목적지 직행까지<br />단독 이동으로 짐과 유아 동반 고객도 편리하게</>,
            buttonText: "프라이빗 예약하기",
            buttonLink: "#"
        }
    ];

    const destinations: Destination[] = [
        {
            id: 1,
            type: 'shuttle',
            airport: 'ICN',
            title: '인천공항 ↔ 서울 셔틀',
            description: '노선·정류장 기반 · 시간표 운행',
            route: '강남·홍대·명동·여의도 경유',
            interval: '15분 간격',
            duration: '약 60분 소요',
            schedule: '첫차 05:00 / 막차 23:00',
            price: '15,000원~',
            image: icnImg
        },
        {
            id: 2,
            type: 'private',
            airport: 'ICN',
            title: '인천공항 프라이빗 밴(전용)',
            description: '원하는 시간·동선 · 단독 이동',
            route: 'Door-to-Door 맞춤형 서비스',
            interval: '고객 원하는 시간 출발',
            duration: '최단 경로 이동',
            schedule: '24시간 운영',
            price: '80,000원~',
            capacity: '최대 7인 탑승 가능',
            image: icnImg
        },
        {
            id: 3,
            type: 'shuttle',
            airport: 'GMP',
            title: '김포공항 ↔ 서울 셔틀',
            description: '노선·정류장 기반 · 시간표 운행',
            route: '강남·여의도·신촌·홍대 경유',
            interval: '20분 간격',
            duration: '약 40분 소요',
            schedule: '첫차 05:30 / 막차 22:30',
            price: '12,000원~',
            image: kimpoImg
        },
        {
            id: 4,
            type: 'private',
            airport: 'GMP',
            title: '김포공항 프라이빗 밴(전용)',
            description: '원하는 시간·동선 · 단독 이동',
            route: 'Door-to-Door 맞춤형 서비스',
            interval: '고객 원하는 시간 출발',
            duration: '최단 경로 이동',
            schedule: '24시간 운영',
            price: '60,000원~',
            capacity: '최대 7인 탑승 가능',
            image: kimpoImg
        },
        {
            id: 5,
            type: 'shuttle',
            airport: 'ICN',
            title: '인천공항 ↔ 경기 셔틀',
            description: '주요 거점 연결 · 편안한 이동',
            route: '수원·분당·일산·판교 경유',
            interval: '30분 간격',
            duration: '약 80분 소요',
            schedule: '첫차 06:00 / 막차 22:00',
            price: '18,000원~',
            image: icnImg
        },
    ];

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

    // USP data
    const uspItems = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: '24시간 운행',
            line1: '인천/김포공항',
            line2: '주요 거점 연결',
            line3: '15분 간격 출발'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: '합리적인 가격',
            line1: '셔틀버스',
            line2: '15,000원~',
            line3: '프라이빗 밴 80,000원~'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
            ),
            title: '넉넉한 공간',
            line1: '대형 캐리어',
            line2: '+ 기내 수하물',
            line3: '유아동반 편의 시설'
        }
    ];

    // Why Choose T-Ride data
    const whyChooseItems = [
        {
            title: '주차비 부담 없이',
            desc: '비싼 공항 주차료 걱정은 이제 그만. 터미널 바로 앞까지 편안하게 모셔다 드립니다.'
        },
        {
            title: '환승 스트레스 없이',
            desc: '복잡한 대중교통 갈아타기 없이 직행. 짐 들고 계단 오르내릴 필요 없습니다.'
        },
        {
            title: '넉넉한 수하물 공간',
            desc: '대형 캐리어와 여행 짐 걱정 없이. 추가 요금 부담 없는 수하물 허용.'
        },
        {
            title: '유연한 예약 변경',
            desc: '항공 스케줄 변경에도 유연하게 대응. Standard 티켓은 무료 변경 가능.'
        },
        {
            title: '실시간 차량 추적',
            desc: 'T-Ride 앱으로 차량 위치 실시간 확인. 도착 알림으로 안심하고 준비하세요.'
        }
    ];

    // Quick Links data
    const quickLinks = [
        { icon: '📍', title: '정류장 찾기', desc: '가까운 탑승 위치 확인' },
        { icon: '📅', title: '시간표 보기', desc: '노선별 출발 시간 확인' },
        { icon: '📋', title: '예약 관리', desc: '예약 확인 및 변경' },
        { icon: '❓', title: 'FAQ', desc: '자주 묻는 질문' }
    ];

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
                                    <div className="max-w-7xl mx-auto h-full px-5 md:px-8 flex flex-col md:flex-row">
                                        {/* Left: Content (Text Area) */}
                                        <div className="w-full md:w-[50%] lg:w-[45%] flex flex-col justify-center text-white">
                                            {/* L1: Hero Heading */}
                                            <h1
                                                key={`title-${index}`}
                                                className={`text-hero mb-4 ${index === currentHeroSlide ? 'animate-slide-in-right' : ''}`}
                                            >
                                                {slide.title}
                                            </h1>
                                            {/* L4-A: Body Large */}
                                            <p
                                                key={`desc-${index}`}
                                                className={`text-body-lg text-slate-300 mb-8 break-keep ${index === currentHeroSlide ? 'animate-slide-in-right' : ''}`}
                                                style={{ animationDelay: '0.1s' }}
                                            >
                                                {slide.desc}
                                            </p>
                                            {/* L5-D: Button Text */}
                                            <button
                                                key={`btn-${index}`}
                                                className={`text-btn w-fit px-8 py-3 rounded-full border border-white text-white hover:bg-white hover:text-[#1e293b] transition-all duration-300 ${index === currentHeroSlide ? 'animate-slide-in-right' : ''}`}
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

                {/* 2. Intro Section (소개 섹션) */}
                <section className="relative z-30 bg-white py-16 md:py-20 rounded-t-[2.5rem] -mt-20 shadow-[0_-20px_40px_rgba(0,0,0,0.1)]">
                    <div className="max-w-7xl mx-auto px-5 md:px-8">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="mb-6">
                                <span className="text-5xl">🚐</span>
                            </div>
                            {/* L2: Section Title */}
                            <h2 className="text-section-title text-[#1e293b] mb-6">
                                내 위치에서 공항까지, 가장 편안한 방법
                            </h2>
                            {/* L4-A: Body Large */}
                            <div className="text-body-lg text-slate-600 space-y-4">
                                <p>
                                    T-Ride 공항 교통편 서비스는<br className="md:hidden" />
                                    <span className="font-semibold text-[#1e293b]">100개 이상의 노선</span>으로 <span className="font-semibold text-[#1e293b]">24시간</span> 운영됩니다
                                </p>
                                <p>
                                    대한민국 전역의 주요 도시 수백 개 픽업 지점에서<br className="md:hidden" />
                                    탑승하여 공항 터미널로 바로 이동하세요
                                </p>
                                {/* L4-B: Body Regular */}
                                <p className="text-body text-slate-500">
                                    주요 거점에서 15분 간격 출발로 대기 시간 최소화<br />
                                    인천공항·김포공항에서 서울·경기까지 쾌적한 여정
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. 3-column USP Block (3단 USP 블록) */}
                <section className="relative z-30 bg-slate-50 py-16 md:py-20">
                    <div className="max-w-7xl mx-auto px-5 md:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {uspItems.map((item, idx) => (
                                <div key={idx} className="bg-white rounded-2xl p-8 text-center border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-blue-600 mb-5">
                                        {item.icon}
                                    </div>
                                    {/* L3-B: Card Title Large */}
                                    <h3 className="text-card-title-lg text-[#1e293b] mb-4">{item.title}</h3>
                                    {/* L4-B: Body Regular */}
                                    <div className="text-body text-slate-600 space-y-1">
                                        <p>{item.line1}</p>
                                        <p>{item.line2}</p>
                                        {/* L6-B: Caption */}
                                        <p className="text-caption text-slate-400">{item.line3}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. Main Airport Routes Section (주요 공항 노선) */}
                <section className="relative z-30 bg-slate-50 py-16 md:py-20">
                    <div className="max-w-7xl mx-auto px-5 md:px-8 relative group">
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

                {/* 5. Why Choose T-Ride Section */}
                <section className="relative z-30 bg-white py-16 md:py-24">
                    <div className="max-w-7xl mx-auto px-5 md:px-8">
                        <div className="text-center mb-12">
                            {/* L2: Section Title */}
                            <h2 className="text-section-title text-[#1e293b] mb-4">
                                T-Ride 공항 셔틀을 선택해야 하는 이유
                            </h2>
                            {/* L4-B: Body Regular */}
                            <p className="text-body text-slate-500">
                                이제 공항 이동은 더 이상 스트레스가 아닙니다
                            </p>
                        </div>

                        <div className="space-y-6">
                            {whyChooseItems.map((item, idx) => (
                                <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                                        ✓
                                    </div>
                                    <div>
                                        {/* L3-C: Card Title Medium */}
                                        <h3 className="text-card-title text-[#1e293b] mb-1">{item.title}</h3>
                                        {/* L4-B: Body Regular */}
                                        <p className="text-body text-slate-600">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 text-center">
                            {/* L4-A: Body Large */}
                            <p className="text-body-lg font-semibold text-[#1e293b]">
                                T-Ride가 여행의 시작과 끝을 완벽하게 책임집니다
                            </p>
                        </div>
                    </div>
                </section>

                {/* 6. Quick Links Section (빠른 링크 버튼) */}
                <section className="relative z-30 bg-slate-50 py-16 md:py-20 px-5 md:px-8">
                    <div className="max-w-7xl mx-auto">
                        {/* L3-A: Section Subtitle */}
                        <h2 className="text-section-subtitle text-[#1e293b] text-center mb-10">
                            공항 이동, 더 쉽게 준비하세요
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {quickLinks.map((link, idx) => (
                                <button key={idx} className="flex flex-col items-center p-6 bg-white rounded-2xl border border-slate-200 hover:shadow-md hover:border-blue-200 transition-all group">
                                    <span className="text-3xl mb-3 group-hover:scale-110 transition-transform">{link.icon}</span>
                                    {/* L5-D: Button Text */}
                                    <span className="text-btn text-[#1e293b] mb-1">{link.title}</span>
                                    {/* L6-B: Caption */}
                                    <span className="text-caption text-slate-500">{link.desc}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 7. Bottom Message Section */}
                <section className="relative z-30 bg-[#1e293b] py-16 md:py-20 px-5 md:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* L6-A: Micro Text */}
                        <p className="text-micro text-slate-400 mb-2">교통 X 여행 No.1 플랫폼</p>
                        {/* L1: Hero Heading (Display) */}
                        <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                            T-Ride
                        </h2>
                        {/* L4-A: Body Large */}
                        <p className="text-body-lg text-slate-300 mb-8">
                            공항 이동의 새로운 기준, T-Ride와 함께 여행을 시작하세요
                        </p>
                        {/* L5-D: Button Text */}
                        <button className="text-btn px-8 py-4 bg-white text-[#1e293b] rounded-full hover:bg-slate-100 transition-colors">
                            지금 바로 예약하기
                        </button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default AirportDetails;
