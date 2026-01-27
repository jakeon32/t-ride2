import React, { useEffect, useState, useRef } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

// Local Asset Images
import heroImg from '../assets/shopping_yeoju 1.jpg';
import outletImg from '../assets/shopping_siheung 1.jpg';
import dutyfreeImg from '../assets/shopping_yeoju 1.jpg'; // Reusing Yeoju for now

// Placeholder for Department Store (User preferred previous image)
const mallImg = 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=2070';

interface Destination {
    id: number;
    type: 'outlet' | 'department' | 'dutyfree';
    partner: string;
    title: string;
    description: string;
    features: string[];
    image: string;
}

const ShoppingDetails: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<'all' | 'outlet' | 'department' | 'dutyfree'>('all');
    const scrollRef = useRef<HTMLDivElement>(null);
    const [currentSlide, setCurrentSlide] = useState(1);
    const [totalSlides, setTotalSlides] = useState(1);

    // Hero Slider State
    const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

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
            title: <>최고의 쇼핑 경험을 위한<br />가장 편안한 이동</>,
            desc: <>프리미엄 아울렛부터 면세점까지.<br />쇼핑의 즐거움만 남기고 이동의 피로는 덜어드립니다.</>,
            buttonText: "지금 예약하기",
            buttonLink: "#"
        },
        {
            id: 1,
            image: outletImg,
            title: <>프리미엄 아울렛 셔틀</>,
            desc: <>여주, 시흥, 파주 등 주요 프리미엄 아울렛을 연결합니다.<br />무거운 짐 걱정 없이 쇼핑에만 집중하세요.</>,
            buttonText: "아울렛 셔틀 예약",
            buttonLink: "#"
        },
        {
            id: 2,
            image: dutyfreeImg,
            title: <>면세점 & 백화점 프라이빗 투어</>,
            desc: <>주요 면세점과 백화점을 잇는 VIP 프라이빗 이동 서비스.<br />원하는 일정대로 자유롭게 이동하세요.</>,
            buttonText: "프라이빗 투어 예약",
            buttonLink: "#"
        }
    ];

    const destinations: Destination[] = [
        {
            id: 1,
            type: 'outlet',
            partner: 'Shinsegae',
            title: '여주 프리미엄 아울렛',
            description: '국내 최초, 최대 규모의 명품 브랜드 라인업',
            features: ['셔틀버스 운행', 'VIP 쿠폰북 증정'],
            image: heroImg // Yeoju image
        },
        {
            id: 2,
            type: 'outlet',
            partner: 'Shinsegae',
            title: '시흥 프리미엄 아울렛',
            description: '이국적인 정취 속에서 즐기는 쇼핑과 힐링',
            features: ['서울 근교', '가족 단위 추천'],
            image: outletImg // Siheung image
        },
        {
            id: 3,
            type: 'department',
            partner: 'Hyundai',
            title: '더현대 서울',
            description: '도심 속 자연을 품은 미래형 백화점',
            features: ['프라이빗 픽업', '직통 셔틀'],
            image: mallImg // Using Paju/Mall image
        },
        {
            id: 4,
            type: 'dutyfree',
            partner: 'Lotte',
            title: '롯데면세점 명동본점',
            description: '대한민국 쇼핑의 중심, 최다 브랜드 보유',
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
            image: mallImg // Using Paju/Mall Image
        },
    ];

    const filteredDestinations = activeFilter === 'all'
        ? destinations
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

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Navbar />

            <main className="flex-grow">
                {/* 1. Hero Slider Section */}
                <section className="relative w-full bg-slate-50 pt-6 px-5 md:px-6">
                    <div className="max-w-7xl mx-auto relative">
                        {/* Shadow Effect */}
                        <div className="absolute inset-0 rounded-[1.5rem] md:rounded-[2.5rem] bg-black/5 blur-2xl transform translate-y-4 md:translate-y-8 z-0"></div>

                        {/* Slider Container */}
                        <div className="relative h-[600px] md:h-[500px] w-full rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden bg-slate-900">
                            {heroSlides.map((slide, index) => (
                                <div
                                    key={slide.id}
                                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentHeroSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                        }`}
                                >
                                    {/* Full Background Image */}
                                    <div className="absolute inset-0">
                                        <img
                                            src={slide.image}
                                            alt="Hero Slide"
                                            className="w-full h-full object-cover transition-transform duration-[5000ms] ease-linear transform scale-100 hover:scale-105"
                                        />
                                        {/* Gradient Overlay for Text Visibility & Blending */}
                                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-[#1e293b] via-[#1e293b]/80 to-transparent"></div>
                                    </div>

                                    {/* Content Container */}
                                    <div className="relative z-10 w-full h-full flex flex-col md:flex-row">
                                        {/* Spacer for Left Side (Image Area) */}
                                        <div className="hidden md:block md:w-[50%] lg:w-[55%]"></div>

                                        {/* Right: Content (Text Area) */}
                                        <div className="w-full md:w-[50%] lg:w-[45%] flex flex-col justify-center px-8 py-12 md:px-12 text-white">
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
                                    </div>
                                </div>
                            ))}

                            {/* Slider Navigation Dots */}
                            <div className="absolute bottom-8 right-8 z-20 flex gap-2">
                                {heroSlides.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentHeroSlide(index)}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentHeroSlide ? 'bg-white w-6' : 'bg-white/40 hover:bg-white/60'
                                            }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Popular Destinations Section */}
                <section className="py-16 md:py-20 bg-slate-50 px-5 md:px-6">
                    <div className="max-w-7xl mx-auto relative group">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1e293b] mb-4">
                                    추천 쇼핑 플레이스
                                </h2>

                                <div className="flex items-center space-x-2">
                                    <button
                                        onClick={() => setActiveFilter('all')}
                                        className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${activeFilter === 'all' ? 'bg-[#1e293b] text-white' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                                    >
                                        전체
                                    </button>
                                    <button
                                        onClick={() => setActiveFilter('outlet')}
                                        className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${activeFilter === 'outlet' ? 'bg-[#1e293b] text-white' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                                    >
                                        아울렛
                                    </button>
                                    <button
                                        onClick={() => setActiveFilter('department')}
                                        className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${activeFilter === 'department' ? 'bg-[#1e293b] text-white' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                                    >
                                        백화점
                                    </button>
                                    <button
                                        onClick={() => setActiveFilter('dutyfree')}
                                        className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${activeFilter === 'dutyfree' ? 'bg-[#1e293b] text-white' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                                    >
                                        면세점
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
                                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600`}>
                                                {item.type.toUpperCase()}
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

                        {/* Pagination Indicator */}
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
            </main>

            <Footer />
        </div>
    );
};

export default ShoppingDetails;
