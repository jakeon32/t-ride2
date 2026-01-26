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

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                {/* Header & Intro Section */}
                <section className="bg-white py-12 md:py-16 border-b border-slate-100 mb-12">
                    <div className="max-w-7xl mx-auto px-5 md:px-8">
                        {/* Intro Text */}
                        <div className="mb-12">
                            <span className="inline-block py-1 px-3 rounded-full bg-slate-100 text-slate-800 text-[11px] font-bold tracking-wide mb-4">
                                골프 / 스키 / 관광
                            </span>
                            <h1 className="display-font text-3xl md:text-4xl font-extrabold text-[#1e293b] mb-4 leading-tight">
                                레저 이동 서비스
                            </h1>
                            <p className="text-slate-600 text-base md:text-lg mb-4 leading-relaxed break-keep">
                                골프, 스키, 관광까지 즐거운 여행을 위한 이동.<br className="hidden md:block" />
                                목적과 일정에 맞춰 선택하세요.
                            </p>
                        </div>

                        {/* Service Cards (2 Columns) */}
                        <div className="grid md:grid-cols-2 gap-8 items-stretch">
                            {/* Shuttle Service Card */}
                            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 flex flex-col group hover:shadow-md transition-all duration-300">
                                <div className="h-64 relative overflow-hidden">
                                    <img src={shuttleImg} alt="Leisure Shuttle" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 text-white">
                                        <h3 className="text-2xl font-bold">셔틀 서비스</h3>
                                        <p className="text-blue-100 text-sm font-medium mt-1">Leisure Shuttle</p>
                                    </div>
                                </div>
                                <div className="p-8 flex-grow flex flex-col">
                                    <h4 className="text-blue-600 font-bold text-sm mb-2">"인기 레저 명소로 떠나는 합리적인 정기 노선"</h4>
                                    <p className="text-slate-600 leading-relaxed mb-6 break-keep">
                                        주요 골프장, 스키 리조트, 테마파크를 연결하는 정기 셔틀 서비스입니다. 같은 목적지로 향하는 여행객들과 함께 경제적으로 이동할 수 있습니다.
                                    </p>

                                    <div className="mb-6 bg-blue-50/50 p-5 rounded-2xl border border-blue-100">
                                        <h4 className="font-bold text-slate-800 mb-3 text-sm">핵심 서비스</h4>
                                        <ul className="space-y-2 text-sm text-slate-600">
                                            <li className="flex items-start gap-2.5">
                                                <span className="text-blue-500 font-bold mt-0.5">•</span>
                                                <span className="break-keep"><span className="font-semibold text-slate-800">직행 노선:</span> 주요 골프장, 스키장, 아울렛 등 정기 운행</span>
                                            </li>
                                            <li className="flex items-start gap-2.5">
                                                <span className="text-blue-500 font-bold mt-0.5">•</span>
                                                <span className="break-keep"><span className="font-semibold text-slate-800">장비 적재:</span> 골프백, 스키 장비 등 안전한 적재 보관</span>
                                            </li>
                                            <li className="flex items-start gap-2.5">
                                                <span className="text-blue-500 font-bold mt-0.5">•</span>
                                                <span className="break-keep"><span className="font-semibold text-slate-800">정시 출발:</span> 티오프, 리프트 운영에 맞춘 시간표</span>
                                            </li>
                                            <li className="flex items-start gap-2.5">
                                                <span className="text-blue-500 font-bold mt-0.5">•</span>
                                                <span className="break-keep"><span className="font-semibold text-slate-800">합리적 요금:</span> 1-2인 레저 여행객을 위한 경제적 가격</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <p className="text-slate-500 text-sm leading-relaxed mb-6 break-keep">
                                        혼자 또는 소규모로 인기 레저 명소를 방문하는 분, 실속있는 레저 여행을 원하는 분께 추천합니다.
                                    </p>

                                    <button className="mt-auto w-full py-4 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2">
                                        셔틀 예약하기
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </button>
                                </div>
                            </div>

                            {/* Private Service Card */}
                            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 flex flex-col group hover:shadow-md transition-all duration-300 h-full">
                                <div className="h-64 relative overflow-hidden shrink-0">
                                    <img src={chauffeurImg} alt="Leisure Private" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 text-white">
                                        <h3 className="text-2xl font-bold text-amber-100">프라이빗 이동 서비스</h3>
                                        <p className="text-amber-200/70 text-sm font-medium mt-1">Leisure Private</p>
                                    </div>
                                </div>
                                <div className="p-8 flex-grow flex flex-col">
                                    <p className="text-slate-600 leading-relaxed mb-6 break-keep">
                                        전용 차량과 전문 기사가 동행하는 완전 맞춤형 레저 이동 서비스입니다. 원하는 시간에 원하는 장소로, 자유로운 일정 구성이 가능합니다.
                                    </p>

                                    <div className="mb-6 bg-slate-50 p-5 rounded-2xl border border-slate-100">
                                        <h4 className="font-bold text-slate-800 mb-3 text-sm">핵심 서비스</h4>
                                        <ul className="space-y-2 text-sm text-slate-600">
                                            <li className="flex items-start gap-2.5">
                                                <span className="text-amber-500 font-bold mt-0.5">•</span>
                                                <span className="break-keep"><span className="font-semibold text-slate-800">Door-to-Door:</span> 숙소에서 레저 목적지까지 직행 서비스</span>
                                            </li>
                                            <li className="flex items-start gap-2.5">
                                                <span className="text-amber-500 font-bold mt-0.5">•</span>
                                                <span className="break-keep"><span className="font-semibold text-slate-800">다중 목적지:</span> 골프장, 관광지를 하루에 돌아보는 투어</span>
                                            </li>
                                            <li className="flex items-start gap-2.5">
                                                <span className="text-amber-500 font-bold mt-0.5">•</span>
                                                <span className="break-keep"><span className="font-semibold text-slate-800">대형 장비 운송:</span> SUV/밴으로 골프백, 스키 등 여유 적재</span>
                                            </li>
                                            <li className="flex items-start gap-2.5">
                                                <span className="text-amber-500 font-bold mt-0.5">•</span>
                                                <span className="break-keep"><span className="font-semibold text-slate-800">대기 서비스:</span> 라운딩이나 액티비티 중 차량 대기 선택</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <p className="text-slate-500 text-sm leading-relaxed mb-6 break-keep">
                                        가족 레저 여행, 프리미엄 골프 투어, 복합 레저 일정을 계획하는 분들께 특히 추천합니다.
                                    </p>

                                    <button className="mt-auto w-full py-4 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2">
                                        프라이빗 예약하기
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Popular Destinations Section */}
                <section className="pb-32">
                    <div className="max-w-7xl mx-auto px-5 md:px-8 relative group">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
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

                            {/* Desktop Navigation Arrows (Hidden on mobile) */}
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
