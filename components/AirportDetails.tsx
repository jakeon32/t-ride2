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
    partner: string;
    title: string;
    description: string;
    features: string[];
    image: string;
}

const AirportDetails: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<'all' | 'shuttle' | 'private'>('all');
    const scrollRef = useRef<HTMLDivElement>(null);
    const [currentSlide, setCurrentSlide] = useState(1);
    const [totalSlides, setTotalSlides] = useState(1);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const destinations: Destination[] = [
        {
            id: 1,
            type: 'shuttle',
            partner: 'Partner A',
            title: '인천공항 ↔ 서울 셔틀',
            description: '노선·정류장 기반 · 시간표 운행',
            features: ['시간표 기반', '주요 정류장 경유'],
            image: icnImg
        },
        {
            id: 2,
            type: 'private',
            partner: 'Partner B',
            title: '인천공항 프라이빗 밴(전용)',
            description: '원하는 시간·동선 · 우리끼리 단독 이동',
            features: ['단독 이동', '짐/유아 동반 편리'],
            image: icnImg
        },
        {
            id: 3,
            type: 'shuttle',
            partner: 'Partner A',
            title: '김포공항 ↔ 서울 셔틀',
            description: '노선·정류장 기반 · 시간표 운행',
            features: ['시간표 기반', '주요 정류장 경유'],
            image: kimpoImg
        },
        {
            id: 4,
            type: 'private',
            partner: 'Partner C',
            title: '김포공항 프라이빗 밴(전용)',
            description: '원하는 시간·동선 · 우리끼리 단독 이동',
            features: ['단독 이동', '짐/유아 동반 편리'],
            image: kimpoImg
        },
        {
            id: 5,
            type: 'shuttle',
            partner: 'Partner A',
            title: '인천공항 ↔ 경기 셔틀',
            description: '주요 거점 연결 · 편안한 이동',
            features: ['시간표 기반', '광역 이동'],
            image: icnImg
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
                {/* 1. Hero Section (Split Layout) */}
                <section className="w-full flex flex-col md:flex-row h-auto md:h-[450px]">
                    {/* Left: Image (60%) */}
                    <div className="w-full md:w-[60%] h-[300px] md:h-full relative overflow-hidden">
                        <img src={heroImg} alt="Airport Travel" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/10"></div>
                    </div>

                    {/* Right: Content (40%) - Dark Blue Panel */}
                    <div className="w-full md:w-[40%] bg-[#1e293b] flex flex-col justify-center px-8 py-12 md:px-12 text-white">
                        <h1 className="display-font text-3xl md:text-3xl lg:text-4xl font-extrabold mb-4 leading-tight">
                            공항으로 가는<br />가장 편안한 방법
                        </h1>
                        <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8 break-keep">
                            주차 걱정 없이, 환승 없이 터미널 바로 앞까지.<br />
                            셔틀버스와 프라이빗 밴으로 여행의 시작과 끝을 완벽하게 준비하세요.
                        </p>
                        <button className="w-fit px-8 py-3 rounded-full border border-white text-white font-bold hover:bg-white hover:text-[#1e293b] transition-all duration-300">
                            지금 예약하기
                        </button>
                    </div>
                </section>

                {/* 2. Popular Destinations Section */}
                <section className="py-16 md:py-20 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-5 md:px-8 relative group">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1e293b] mb-4">
                                    인기 목적지
                                </h2>

                                <div className="flex items-center space-x-2">
                                    <button
                                        onClick={() => setActiveFilter('all')}
                                        className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${activeFilter === 'all' ? 'bg-[#1e293b] text-white' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                                    >
                                        전체
                                    </button>
                                    <button
                                        onClick={() => setActiveFilter('shuttle')}
                                        className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${activeFilter === 'shuttle' ? 'bg-[#1e293b] text-white' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                                    >
                                        셔틀
                                    </button>
                                    <button
                                        onClick={() => setActiveFilter('private')}
                                        className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${activeFilter === 'private' ? 'bg-[#1e293b] text-white' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'}`}
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
                            className="flex overflow-x-auto pb-8 -mx-5 px-5 md:mx-0 md:px-0 space-x-5 snap-x hide-scrollbar scroll-smooth"
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
                                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${item.type === 'shuttle' ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-600'}`}>
                                                {item.type === 'shuttle' ? '셔틀' : '프라이빗'}
                                            </span>
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

                {/* 3. Service Introduction Section */}
                <section className="bg-white py-16 md:py-24 border-t border-slate-100">
                    <div className="max-w-7xl mx-auto px-5 md:px-8">
                        <div className="text-center mb-16">
                            <span className="text-blue-600 font-bold text-sm tracking-wide uppercase mb-2 block">Our Services</span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e293b]">공항 이동 서비스</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 items-stretch">
                            {/* Shuttle Service Card */}
                            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 flex flex-col group hover:shadow-md transition-all duration-300">
                                <div className="h-64 relative overflow-hidden">
                                    <img src={shuttleImg} alt="Airport Shuttle" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 text-white">
                                        <h3 className="text-2xl font-bold">공항 셔틀버스</h3>
                                        <p className="text-blue-100 text-sm font-medium mt-1">Airport Shuttle Bus</p>
                                    </div>
                                </div>
                                <div className="p-8 flex-grow flex flex-col">
                                    <h4 className="text-blue-600 font-bold text-sm mb-2">"합리적이고 스마트한 노선 기반 이동"</h4>
                                    <p className="text-slate-600 leading-relaxed mb-6 break-keep">
                                        정해진 시간표와 노선으로 운행되는 경제적인 공항 이동 서비스입니다. 주요 거점을 경유하며 1-2인 여행객에게 가장 효율적인 선택입니다.
                                    </p>

                                    <div className="mb-6 bg-blue-50/50 p-5 rounded-2xl border border-blue-100">
                                        <ul className="space-y-2 text-sm text-slate-600">
                                            <li className="flex items-start gap-2.5">
                                                <span className="text-blue-500 font-bold mt-0.5">•</span>
                                                <span className="break-keep"><span className="font-semibold text-slate-800">정시 운행 보장:</span> 사전 공지된 시간표로 예측 가능한 이동</span>
                                            </li>
                                            <li className="flex items-start gap-2.5">
                                                <span className="text-blue-500 font-bold mt-0.5">•</span>
                                                <span className="break-keep"><span className="font-semibold text-slate-800">주요 거점 연결:</span> 도심 터미널, 주요 호텔가, 관광지 정차</span>
                                            </li>
                                            <li className="flex items-start gap-2.5">
                                                <span className="text-blue-500 font-bold mt-0.5">•</span>
                                                <span className="break-keep"><span className="font-semibold text-slate-800">쾌적한 탑승:</span> 넓은 좌석과 넉넉한 수하물 전용 공간</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <button className="mt-auto w-full py-4 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2">
                                        셔틀 예약하기
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </button>
                                </div>
                            </div>

                            {/* Private Service Card */}
                            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 flex flex-col group hover:shadow-md transition-all duration-300 h-full">
                                <div className="h-64 relative overflow-hidden shrink-0">
                                    <img src={chauffeurImg} alt="Private Chauffeur" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 text-white">
                                        <h3 className="text-2xl font-bold text-amber-100">프라이빗 이동 서비스</h3>
                                        <p className="text-amber-200/70 text-sm font-medium mt-1">Private Chauffeur Service</p>
                                    </div>
                                </div>
                                <div className="p-8 flex-grow flex flex-col">
                                    <p className="text-slate-600 leading-relaxed mb-6 break-keep">
                                        전용 차량과 전문 기사가 함께하는 맞춤형 Door-to-Door 서비스입니다. 공항 입국장에서 목적지까지 완벽한 프라이빗 이동을 제공합니다.
                                    </p>

                                    <div className="mb-6 bg-slate-50 p-5 rounded-2xl border border-slate-100">
                                        <ul className="space-y-2 text-sm text-slate-600">
                                            <li className="flex items-start gap-2.5">
                                                <span className="text-amber-500 font-bold mt-0.5">•</span>
                                                <span className="break-keep"><span className="font-semibold text-slate-800">Meet & Greet:</span> 입국장에서 네임보드를 들고 직접 마중</span>
                                            </li>
                                            <li className="flex items-start gap-2.5">
                                                <span className="text-amber-500 font-bold mt-0.5">•</span>
                                                <span className="break-keep"><span className="font-semibold text-slate-800">항공편 모니터링:</span> 지연 시에도 일정에 맞춘 픽업 대기</span>
                                            </li>
                                            <li className="flex items-start gap-2.5">
                                                <span className="text-amber-500 font-bold mt-0.5">•</span>
                                                <span className="break-keep"><span className="font-semibold text-slate-800">전용 차량:</span> 세단부터 대형 밴까지 인원/짐에 맞게 선택</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <button className="mt-auto w-full py-4 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2">
                                        프라이빗 예약하기
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default AirportDetails;
