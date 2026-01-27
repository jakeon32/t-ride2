import React, { useEffect, useState, useRef } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

// Local Asset Images
import heroImg from '../assets/shuttle_concert 1.jpg';
import concertImg from '../assets/shuttle_concert 1.jpg';
import festivalImg from '../assets/shuttle_concert 1.jpg'; // Reusing for consistency, or find another if available

interface Destination {
    id: number;
    type: 'concert' | 'musical' | 'festival';
    partner: string;
    title: string;
    description: string;
    features: string[];
    image: string;
}

const EventDetails: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<'all' | 'concert' | 'musical' | 'festival'>('all');
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
            title: <>열기 가득한 현장으로<br />빠르고 안전하게</>,
            desc: <>K-POP 콘서트부터 페스티벌까지.<br />끝난 후 귀가 전쟁 없이 프라이빗하게 이동하세요.</>,
            buttonText: "공연 이동 예약",
            buttonLink: "#"
        },
        {
            id: 1,
            image: concertImg,
            title: <>콘서트장 전용 셔틀</>,
            desc: <>인스파이어 아레나, 고척돔 등 주요 공연장을 잇는 관람객 전용 셔틀입니다.</>,
            buttonText: "셔틀 예약하기",
            buttonLink: "#"
        },
        {
            id: 2,
            image: festivalImg,
            title: <>심야 안심 귀가 서비스</>,
            desc: <>공연이 늦게 끝나도 걱정 없습니다. 집 앞까지 안전하게 모셔다 드립니다.</>,
            buttonText: "귀가 차량 예약",
            buttonLink: "#"
        }
    ];

    const destinations: Destination[] = [
        {
            id: 1,
            type: 'concert',
            partner: 'Inspire Arena',
            title: '인스파이어 아레나 셔틀/픽업',
            description: '영종도의 핫플레이스, 편안한 관람을 위한 이동',
            features: ['공항철도 연계', '심야 운행'],
            image: concertImg
        },
        {
            id: 2,
            type: 'concert',
            partner: 'Gocheok Dome',
            title: '고척 스카이돔 프라이빗 밴',
            description: '야구 경기부터 콘서트까지, 복잡한 주차 걱정 해결',
            features: ['VVIP 전용', '대기 서비스'],
            image: concertImg
        },
        {
            id: 3,
            type: 'concert',
            partner: 'KSPO Dome',
            title: 'KSPO DOME (체조경기장)',
            description: '올림픽공원의 열기를 그대로, 편안한 귀가',
            features: ['단체 픽업', '강남권 셔틀'],
            image: concertImg
        },
        {
            id: 4,
            type: 'festival',
            partner: 'Waterbomb',
            title: '워터밤 페스티벌 셔틀',
            description: '흠뻑 젖어도 괜찮아요, 쾌적한 셔틀 이동',
            features: ['환복 편의', '방수 시트 커버'],
            image: festivalImg
        },
        {
            id: 5,
            type: 'musical',
            partner: 'Seoul Arts Center',
            title: '예술의전당 픽업 서비스',
            description: '고품격 공연에 어울리는 프리미엄 의전',
            features: ['정장 기사', '도어 서비스'],
            image: heroImg
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
                                    인기 공연/이벤트
                                </h2>

                                <div className="flex items-center space-x-2">
                                    <button
                                        onClick={() => setActiveFilter('all')}
                                        className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${activeFilter === 'all' ? 'bg-[#1e293b] text-white' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                                    >
                                        전체
                                    </button>
                                    <button
                                        onClick={() => setActiveFilter('concert')}
                                        className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${activeFilter === 'concert' ? 'bg-[#1e293b] text-white' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                                    >
                                        콘서트
                                    </button>
                                    <button
                                        onClick={() => setActiveFilter('musical')}
                                        className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${activeFilter === 'musical' ? 'bg-[#1e293b] text-white' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                                    >
                                        뮤지컬
                                    </button>
                                    <button
                                        onClick={() => setActiveFilter('festival')}
                                        className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${activeFilter === 'festival' ? 'bg-[#1e293b] text-white' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                                    >
                                        페스티벌
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

export default EventDetails;
